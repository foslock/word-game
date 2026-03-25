import { Level, getDayNumber } from "./levels.js";
import {
  CellState,
  DailyRecord,
  createFreshRecord,
  getLocalDateString,
  loadDailyRecord,
  loadStats,
  recordCompletion,
  saveDailyRecord,
  saveStats,
} from "./storage.js";
import { evaluateCells, allFilled as allFilledFn } from "./evaluate.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Cursor {
  wordIndex: number;
  cellIndex: number;
}

// ---------------------------------------------------------------------------
// Game class
// ---------------------------------------------------------------------------

export class Game {
  private level: Level;
  private record: DailyRecord;
  private cursor: Cursor = { wordIndex: 0, cellIndex: 0 };
  private container: HTMLElement;
  private hiddenInput: HTMLInputElement;
  private submitBtn!: HTMLButtonElement;
  private animating = false;

  constructor(container: HTMLElement, level: Level) {
    this.container = container;
    this.level = level;

    const today = getLocalDateString();
    const existing = loadDailyRecord();

    if (existing && existing.date === today && existing.levelId === level.id) {
      this.record = existing;
    } else {
      // New day or new level — start fresh (but record yesterday as played if started)
      this.record = createFreshRecord(
        today,
        level.id,
        level.words.map((w) => w.word.length)
      );
      saveDailyRecord(this.record);
    }

    // Hidden input for mobile keyboard capture
    this.hiddenInput = document.createElement("input");
    this.hiddenInput.setAttribute("type", "text");
    this.hiddenInput.setAttribute("autocomplete", "off");
    this.hiddenInput.setAttribute("autocorrect", "off");
    this.hiddenInput.setAttribute("autocapitalize", "characters");
    this.hiddenInput.setAttribute("spellcheck", "false");
    this.hiddenInput.setAttribute("aria-hidden", "true");
    this.hiddenInput.className = "hidden-input";
    document.body.appendChild(this.hiddenInput);

    this.render();
    this.attachListeners();
    this.placeCursorAtFirstEditable();
  }

  // -------------------------------------------------------------------------
  // Rendering
  // -------------------------------------------------------------------------

  private render(): void {
    this.container.innerHTML = "";

    // Day label
    const dayEl = document.createElement("div");
    dayEl.className = "day-label";
    dayEl.textContent = `Day #${getDayNumber(new Date())}`;
    this.container.appendChild(dayEl);

    // Theme banner
    const themeBanner = document.createElement("div");
    themeBanner.className = "theme-banner";
    const themeLabel = document.createElement("span");
    themeLabel.className = "theme-label";
    themeLabel.textContent = "Theme";
    const themeWord = document.createElement("span");
    themeWord.className = "theme-word";
    themeWord.textContent = this.level.themeWord;
    themeBanner.appendChild(themeLabel);
    themeBanner.appendChild(themeWord);
    this.container.appendChild(themeBanner);

    // Instruction line
    if (!this.record.completed) {
      const hint = document.createElement("p");
      hint.className = "instruction";
      hint.textContent = "Guess the three words connected by the theme.";
      this.container.appendChild(hint);
    }

    // Word rows
    const wordsSection = document.createElement("div");
    wordsSection.className = "words-section";

    this.level.words.forEach((entry, wi) => {
      const ws = this.record.words[wi];
      const rowWrapper = document.createElement("div");
      rowWrapper.className = "word-row-wrapper";
      if (ws.solved) rowWrapper.classList.add("solved");

      // Word length badge
      const badge = document.createElement("span");
      badge.className = "word-length-badge";
      badge.textContent = `${entry.word.length}`;
      rowWrapper.appendChild(badge);

      // Cell grid
      const grid = document.createElement("div");
      grid.className = "cell-grid";
      grid.setAttribute("data-word", String(wi));
      grid.style.setProperty("--word-len", String(entry.word.length));

      ws.cells.forEach((cell, ci) => {
        const cellEl = this.buildCell(cell, wi, ci);
        grid.appendChild(cellEl);
      });

      rowWrapper.appendChild(grid);

      // Relation sentence (revealed on solve)
      if (ws.solved) {
        const rel = document.createElement("p");
        rel.className = "relation-text";
        rel.textContent = entry.relation;
        rowWrapper.appendChild(rel);
      }

      wordsSection.appendChild(rowWrapper);
    });

    this.container.appendChild(wordsSection);

    // Submit / completion area
    if (!this.record.completed) {
      const submitRow = document.createElement("div");
      submitRow.className = "submit-row";

      this.submitBtn = document.createElement("button");
      this.submitBtn.id = "submit-btn";
      this.submitBtn.className = "submit-btn";
      this.submitBtn.textContent = "Submit";
      this.submitBtn.addEventListener("click", () => this.handleSubmit());
      submitRow.appendChild(this.submitBtn);

      const attemptLabel = document.createElement("span");
      attemptLabel.className = "attempt-label";
      attemptLabel.textContent =
        this.record.totalAttempts === 0
          ? ""
          : `Attempt ${this.record.totalAttempts}`;
      submitRow.appendChild(attemptLabel);

      this.container.appendChild(submitRow);
      this.updateSubmitState();
    } else {
      this.renderCompletionBanner();
    }
  }

  private buildCell(cell: CellState, wi: number, ci: number): HTMLElement {
    const el = document.createElement("div");
    el.className = "cell";
    el.setAttribute("data-word", String(wi));
    el.setAttribute("data-cell", String(ci));
    el.textContent = cell.letter;

    el.classList.add(`status-${cell.status}`);

    if (cell.locked) {
      el.classList.add("locked");
    }

    const isCursor =
      !this.record.completed &&
      !this.record.words[wi].solved &&
      this.cursor.wordIndex === wi &&
      this.cursor.cellIndex === ci;
    if (isCursor) el.classList.add("cursor");

    el.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      if (this.record.words[wi].solved) return;
      if (cell.locked) return;
      this.setCursor(wi, ci);
      this.focusHiddenInput();
    });

    return el;
  }

  private renderCompletionBanner(): void {
    const stats = loadStats();
    const banner = document.createElement("div");
    banner.className = "completion-banner";

    const emoji = document.createElement("div");
    emoji.className = "completion-emoji";
    emoji.textContent = "🎉";
    banner.appendChild(emoji);

    const title = document.createElement("h2");
    title.textContent = "Puzzle Complete!";
    banner.appendChild(title);

    const sub = document.createElement("p");
    sub.textContent = `Solved in ${this.record.totalAttempts} attempt${this.record.totalAttempts !== 1 ? "s" : ""}.`;
    banner.appendChild(sub);

    if (stats.currentStreak && stats.currentStreak > 1) {
      const streak = document.createElement("p");
      streak.className = "streak-line";
      streak.textContent = `🔥 ${stats.currentStreak}-day streak!`;
      banner.appendChild(streak);
    }

    const nextLabel = document.createElement("p");
    nextLabel.className = "next-label";
    nextLabel.textContent = "Come back tomorrow for the next puzzle.";
    banner.appendChild(nextLabel);

    this.container.appendChild(banner);
  }

  // -------------------------------------------------------------------------
  // Cell/cursor helpers
  // -------------------------------------------------------------------------

  private getCellEl(wi: number, ci: number): HTMLElement | null {
    return this.container.querySelector(
      `.cell[data-word="${wi}"][data-cell="${ci}"]`
    );
  }

  private setCursor(wi: number, ci: number): void {
    // Remove old cursor highlight
    const old = this.container.querySelector(".cell.cursor");
    if (old) old.classList.remove("cursor");

    this.cursor = { wordIndex: wi, cellIndex: ci };

    const el = this.getCellEl(wi, ci);
    if (el && !this.record.words[wi].solved && !this.record.words[wi].cells[ci].locked) {
      el.classList.add("cursor");
    }
  }

  private placeCursorAtFirstEditable(): void {
    if (this.record.completed) return;
    for (let wi = 0; wi < this.record.words.length; wi++) {
      const ws = this.record.words[wi];
      if (ws.solved) continue;
      for (let ci = 0; ci < ws.cells.length; ci++) {
        if (!ws.cells[ci].locked) {
          this.setCursor(wi, ci);
          return;
        }
      }
    }
  }

  /** Advance cursor to the next editable cell (within or across words). */
  private advanceCursor(): void {
    const { wordIndex, cellIndex } = this.cursor;
    const ws = this.record.words[wordIndex];

    // Try remaining cells in current word
    for (let ci = cellIndex + 1; ci < ws.cells.length; ci++) {
      if (!ws.cells[ci].locked) {
        this.setCursor(wordIndex, ci);
        return;
      }
    }
    // Try next unsolved words
    for (let wi = wordIndex + 1; wi < this.record.words.length; wi++) {
      const nextWs = this.record.words[wi];
      if (nextWs.solved) continue;
      for (let ci = 0; ci < nextWs.cells.length; ci++) {
        if (!nextWs.cells[ci].locked) {
          this.setCursor(wi, ci);
          return;
        }
      }
    }
    // Try words before current
    for (let wi = 0; wi < wordIndex; wi++) {
      const prevWs = this.record.words[wi];
      if (prevWs.solved) continue;
      for (let ci = 0; ci < prevWs.cells.length; ci++) {
        if (!prevWs.cells[ci].locked) {
          this.setCursor(wi, ci);
          return;
        }
      }
    }
  }

  /** Move cursor backward. */
  private retreatCursor(): void {
    const { wordIndex, cellIndex } = this.cursor;
    const ws = this.record.words[wordIndex];

    // Try earlier cells in current word
    for (let ci = cellIndex - 1; ci >= 0; ci--) {
      if (!ws.cells[ci].locked) {
        this.setCursor(wordIndex, ci);
        return;
      }
    }
    // Try earlier unsolved words
    for (let wi = wordIndex - 1; wi >= 0; wi--) {
      const prevWs = this.record.words[wi];
      if (prevWs.solved) continue;
      for (let ci = prevWs.cells.length - 1; ci >= 0; ci--) {
        if (!prevWs.cells[ci].locked) {
          this.setCursor(wi, ci);
          return;
        }
      }
    }
  }

  // -------------------------------------------------------------------------
  // Input handling
  // -------------------------------------------------------------------------

  private focusHiddenInput(): void {
    this.hiddenInput.value = "";
    this.hiddenInput.focus();
  }

  private attachListeners(): void {
    // Focus hidden input on tap anywhere in the game area (when not complete)
    this.container.addEventListener("pointerdown", (e) => {
      if (this.record.completed) return;
      const target = e.target as HTMLElement;
      // Don't interfere with cell pointerdown (handled separately)
      if (!target.closest(".cell") && !target.closest(".submit-btn")) {
        this.focusHiddenInput();
      }
    });

    // Keyboard via hidden input
    this.hiddenInput.addEventListener("keydown", (e) => this.handleKey(e));

    // Also listen globally so physical keyboard always works
    document.addEventListener("keydown", (e) => {
      if (e.target === this.hiddenInput) return; // already handled
      if (this.record.completed) return;
      if ((e.target as HTMLElement).closest(".modal")) return;
      this.handleKey(e);
    });

    // Prevent the hidden input from showing composing text
    this.hiddenInput.addEventListener("input", () => {
      this.hiddenInput.value = "";
    });
  }

  private handleKey(e: KeyboardEvent): void {
    if (this.record.completed || this.animating) return;

    const key = e.key;

    if (key === "Enter") {
      e.preventDefault();
      this.handleSubmit();
      return;
    }

    if (key === "Backspace" || key === "Delete") {
      e.preventDefault();
      this.handleBackspace();
      return;
    }

    if (key === "ArrowRight" || key === "Tab") {
      e.preventDefault();
      this.advanceCursor();
      return;
    }

    if (key === "ArrowLeft") {
      e.preventDefault();
      this.retreatCursor();
      return;
    }

    if (key === "ArrowUp") {
      e.preventDefault();
      this.moveCursorVertical(-1);
      return;
    }

    if (key === "ArrowDown") {
      e.preventDefault();
      this.moveCursorVertical(1);
      return;
    }

    if (/^[a-zA-Z]$/.test(key)) {
      e.preventDefault();
      this.handleLetter(key.toUpperCase());
    }
  }

  private handleLetter(letter: string): void {
    const { wordIndex, cellIndex } = this.cursor;
    const ws = this.record.words[wordIndex];
    if (ws.solved || ws.cells[cellIndex].locked) return;

    ws.cells[cellIndex].letter = letter;
    ws.cells[cellIndex].status = "empty"; // clear any pending colour
    this.updateCell(wordIndex, cellIndex);
    this.updateSubmitState();
    this.advanceCursor();
  }

  private handleBackspace(): void {
    const { wordIndex, cellIndex } = this.cursor;
    const ws = this.record.words[wordIndex];
    if (ws.solved) return;

    const cell = ws.cells[cellIndex];
    if (!cell.locked && cell.letter !== "") {
      // Delete the letter in the current cell
      cell.letter = "";
      cell.status = "empty";
      this.updateCell(wordIndex, cellIndex);
      this.updateSubmitState();
    } else {
      // Current cell is empty or locked — retreat then delete
      this.retreatCursor();
      const { wordIndex: wi2, cellIndex: ci2 } = this.cursor;
      // Only delete if we actually moved to a different cell
      if (wi2 !== wordIndex || ci2 !== cellIndex) {
        const cell2 = this.record.words[wi2].cells[ci2];
        if (!cell2.locked) {
          cell2.letter = "";
          cell2.status = "empty";
          this.updateCell(wi2, ci2);
          this.updateSubmitState();
        }
      }
    }
  }

  private moveCursorVertical(dir: -1 | 1): void {
    const { wordIndex, cellIndex } = this.cursor;
    const targetWi = wordIndex + dir;
    if (targetWi < 0 || targetWi >= this.record.words.length) return;
    const targetWs = this.record.words[targetWi];
    if (targetWs.solved) return;

    // Try to land on the same cell index, or closest editable
    const clampedCi = Math.min(cellIndex, targetWs.cells.length - 1);
    for (let ci = clampedCi; ci < targetWs.cells.length; ci++) {
      if (!targetWs.cells[ci].locked) {
        this.setCursor(targetWi, ci);
        return;
      }
    }
    for (let ci = clampedCi - 1; ci >= 0; ci--) {
      if (!targetWs.cells[ci].locked) {
        this.setCursor(targetWi, ci);
        return;
      }
    }
  }

  // -------------------------------------------------------------------------
  // Submit logic
  // -------------------------------------------------------------------------

  private allFilled(): boolean {
    return allFilledFn(this.record.words);
  }

  private updateSubmitState(): void {
    if (!this.submitBtn) return;
    this.submitBtn.disabled = !this.allFilled();
  }

  private handleSubmit(): void {
    if (this.animating) return;
    if (!this.allFilled()) {
      this.showToast("Fill in all letters first!");
      return;
    }

    // Evaluate each unsolved word
    this.record.totalAttempts++;

    const solvedThisRound: number[] = [];

    this.record.words.forEach((ws, wi) => {
      if (ws.solved) return;
      ws.attempts++;

      const otherUnsolvedWords = this.record.words
        .map((ws2, wi2) => ({ ws2, wi2 }))
        .filter(({ ws2, wi2 }) => wi2 !== wi && !ws2.solved)
        .map(({ wi2 }) => this.level.words[wi2].word);

      const evaluated = evaluateCells(ws.cells, this.level.words[wi].word, otherUnsolvedWords);
      ws.cells = evaluated;

      if (evaluated.every((c) => c.status === "correct")) {
        ws.solved = true;
        solvedThisRound.push(wi);
      }
    });

    saveDailyRecord(this.record);

    const allSolved = this.record.words.every((ws) => ws.solved);
    if (allSolved) {
      this.record.completed = true;
      this.record.completedAt = Date.now();
      saveDailyRecord(this.record);

      // Update stats
      const stats = loadStats();
      const updated = recordCompletion(
        stats,
        this.record.totalAttempts,
        this.record.date
      );
      saveStats(updated);
    }

    // Re-render without animations first, then animate solved words
    this.render();
    this.updateSubmitState();

    if (solvedThisRound.length > 0) {
      this.animateSolvedWords(solvedThisRound, allSolved);
    } else {
      this.placeCursorAtFirstEditable();
      if (!allSolved) this.focusHiddenInput();
    }
  }

  // -------------------------------------------------------------------------
  // Animations
  // -------------------------------------------------------------------------

  private animateSolvedWords(solvedIndexes: number[], finalComplete: boolean): void {
    this.animating = true;
    let pending = solvedIndexes.length;

    solvedIndexes.forEach((wi) => {
      const ws = this.record.words[wi];
      const cells = this.container.querySelectorAll<HTMLElement>(
        `.cell[data-word="${wi}"]`
      );

      cells.forEach((cellEl, ci) => {
        const delay = ci * 120; // stagger per cell
        setTimeout(() => {
          cellEl.classList.add("reveal-correct");
        }, delay);
      });

      const totalDuration = (ws.cells.length - 1) * 120 + 600;

      setTimeout(() => {
        // Show relation text
        const rowWrapper = this.container.querySelectorAll<HTMLElement>(
          ".word-row-wrapper"
        )[wi];
        if (rowWrapper) {
          rowWrapper.classList.add("solved");
          const existing = rowWrapper.querySelector(".relation-text");
          if (!existing) {
            const rel = document.createElement("p");
            rel.className = "relation-text reveal-fade";
            rel.textContent = this.level.words[wi].relation;
            rowWrapper.appendChild(rel);
          }
        }

        pending--;
        if (pending === 0) {
          this.animating = false;
          if (finalComplete) {
            setTimeout(() => {
              this.render();
            }, 600);
          } else {
            this.placeCursorAtFirstEditable();
            this.focusHiddenInput();
          }
        }
      }, totalDuration);
    });
  }

  // -------------------------------------------------------------------------
  // Incremental DOM updates (avoid full re-render on every keystroke)
  // -------------------------------------------------------------------------

  private updateCell(wi: number, ci: number): void {
    const cellEl = this.getCellEl(wi, ci);
    if (!cellEl) return;
    const cell = this.record.words[wi].cells[ci];

    cellEl.textContent = cell.letter;

    // Reset status classes
    cellEl.className = "cell";
    cellEl.classList.add(`status-${cell.status}`);
    if (cell.locked) cellEl.classList.add("locked");

    const isCursor =
      this.cursor.wordIndex === wi && this.cursor.cellIndex === ci;
    if (isCursor) cellEl.classList.add("cursor");
  }

  // -------------------------------------------------------------------------
  // Toast
  // -------------------------------------------------------------------------

  private showToast(message: string): void {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove("hidden");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.classList.add("hidden"), 300);
    }, 2000);
  }
}

// ---------------------------------------------------------------------------
// Modal helpers (called from main.ts)
// ---------------------------------------------------------------------------

export function renderRulesContent(container: HTMLElement): void {
  container.innerHTML = `
    <p>Each day features a new <strong>Theme Word</strong> and three mystery words connected to it.</p>
    <ul>
      <li>Guess all three words — a <strong>4-letter</strong>, a <strong>5-letter</strong>, and a <strong>6-letter</strong> word.</li>
      <li>Fill every square, then press <strong>Submit</strong> (or hit <kbd>Enter</kbd>).</li>
    </ul>
    <div class="rules-legend">
      <div class="legend-row">
        <div class="legend-cell status-correct">A</div>
        <span>Right letter, right place.</span>
      </div>
      <div class="legend-row">
        <div class="legend-cell status-present">B</div>
        <span>Letter is in one of the three words, but in the wrong position.</span>
      </div>
      <div class="legend-row">
        <div class="legend-cell status-absent">C</div>
        <span>Letter is not in any of the three words.</span>
      </div>
    </div>
    <p>Correct letters <strong>lock in</strong> (green). Adjust the remaining letters and keep submitting until all three words are solved.</p>
    <p>When a word is fully solved, the sentence explaining its link to the theme is revealed.</p>
    <p>A new puzzle drops every midnight (local time). Come back daily to keep your streak!</p>
  `;
}

export function renderStatsContent(container: HTMLElement): void {
  const stats = loadStats();
  const record = loadDailyRecord();
  const today = getLocalDateString();

  const played = stats.gamesPlayed || 0;
  const completed = stats.gamesCompleted || 0;
  const winRate = played > 0 ? Math.round((completed / played) * 100) : 0;
  const avgAttempts =
    completed > 0
      ? (stats.totalAttempts / completed).toFixed(1)
      : "—";
  const best = stats.bestScore ?? "—";

  container.innerHTML = `
    <div class="stats-grid">
      <div class="stat-box">
        <div class="stat-value">${played}</div>
        <div class="stat-key">Played</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${winRate}%</div>
        <div class="stat-key">Win Rate</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${stats.currentStreak ?? 0}</div>
        <div class="stat-key">Streak</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${stats.bestStreak ?? 0}</div>
        <div class="stat-key">Best Streak</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${avgAttempts}</div>
        <div class="stat-key">Avg Attempts</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${best}</div>
        <div class="stat-key">Best Game</div>
      </div>
    </div>
    ${
      record && record.date === today && record.completed
        ? `<p class="stats-note">Today's puzzle completed in <strong>${record.totalAttempts}</strong> attempt${record.totalAttempts !== 1 ? "s" : ""}.</p>`
        : record && record.date === today && !record.completed
        ? `<p class="stats-note">Today's puzzle is in progress.</p>`
        : `<p class="stats-note">You haven't played today yet.</p>`
    }
  `;
}
