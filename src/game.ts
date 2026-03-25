import { Level, getLevelForDate, getDayNumber } from "./levels.js";
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
import { isValidWord } from "./dictionary.js";

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

  /** Day offset for testing — advances the simulated date. */
  static dayOffset = 0;

  /** Get the simulated "today" date (real date + dayOffset). */
  static getSimulatedDate(): Date {
    const d = new Date();
    d.setDate(d.getDate() + Game.dayOffset);
    return d;
  }

  constructor(container: HTMLElement, level: Level) {
    this.container = container;
    this.level = level;

    const today = getLocalDateString(Game.getSimulatedDate());
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
    dayEl.textContent = `Day #${getDayNumber(Game.getSimulatedDate())}`;
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
      hint.textContent = "Find the three words threaded together by the theme.";
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

      // Guessed letters (yellows first, then greys)
      const guessedLetters = this.getGuessedLetters();
      if (guessedLetters.length > 0) {
        const guessedRow = document.createElement("div");
        guessedRow.className = "guessed-letters";
        guessedLetters.forEach(({ letter, status }) => {
          const chip = document.createElement("div");
          chip.className = `guessed-letter status-${status}`;
          chip.textContent = letter;
          guessedRow.appendChild(chip);
        });
        submitRow.appendChild(guessedRow);
      }

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

    // Debug: Next Day button for testing
    const nextDayBtn = document.createElement("button");
    nextDayBtn.className = "next-day-btn";
    nextDayBtn.textContent = "Next Day \u27A1";
    nextDayBtn.title = "Advance to next day (testing only)";
    nextDayBtn.addEventListener("click", () => {
      Game.dayOffset++;
      const nextDate = Game.getSimulatedDate();
      const nextLevel = getLevelForDate(nextDate);
      // Remove old hidden input
      this.hiddenInput.remove();
      // Re-init with new level/date
      new Game(this.container, nextLevel);
    });
    this.container.appendChild(nextDayBtn);
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
      if (this.animating) return;
      if (this.record.words[wi].solved) return;
      if (this.record.words[wi].cells[ci].locked) return;
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
      if (this.record.completed || this.animating) return;
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

  /** Get the current guess string for a given word index (empty string if incomplete). */
  private getWordGuess(wi: number): string {
    const ws = this.record.words[wi];
    if (ws.solved) return "";
    const letters = ws.cells.map((c) => c.letter);
    if (letters.some((l) => l === "")) return "";
    return letters.join("");
  }

  /** Check which unsolved words have invalid (non-English) guesses.
   *  When requireAllFilled is false, validates any fully-typed word individually. */
  private getInvalidWordIndexes(requireAllFilled = true): number[] {
    const invalid: number[] = [];
    for (let wi = 0; wi < this.record.words.length; wi++) {
      const ws = this.record.words[wi];
      if (ws.solved) continue;
      const guess = this.getWordGuess(wi);
      if (guess && !isValidWord(guess)) {
        invalid.push(wi);
      }
    }
    return invalid;
  }

  private updateSubmitState(): void {
    if (!this.submitBtn) return;
    const filled = this.allFilled();
    // Always check individually-filled words for validity, even before all are filled
    const invalidIndexes = this.getInvalidWordIndexes(false);
    const canSubmit = filled && invalidIndexes.length === 0;
    this.submitBtn.disabled = !canSubmit;

    // Update warning icons on word rows (show as soon as any individual word is fully typed)
    this.record.words.forEach((ws, wi) => {
      if (ws.solved) return;
      const wrapper = this.container.querySelectorAll<HTMLElement>(".word-row-wrapper")[wi];
      if (!wrapper) return;
      const existingWarning = wrapper.querySelector(".word-warning");

      if (invalidIndexes.includes(wi)) {
        if (!existingWarning) {
          const warning = document.createElement("span");
          warning.className = "word-warning";
          warning.textContent = "\u26A0"; // ⚠
          warning.title = "Not a valid English word";
          wrapper.appendChild(warning);
        }
      } else {
        existingWarning?.remove();
      }
    });
  }

  private handleSubmit(): void {
    if (this.animating) return;
    if (!this.allFilled()) {
      this.showToast("Fill in all letters first!");
      return;
    }

    const invalidIndexes = this.getInvalidWordIndexes();
    if (invalidIndexes.length > 0) {
      this.showToast("All words must be valid English words!");
      return;
    }

    // Track which cells are already locked (green from previous rounds)
    const previouslyLocked = new Set<string>();
    this.record.words.forEach((ws, wi) => {
      ws.cells.forEach((cell, ci) => {
        if (cell.locked) previouslyLocked.add(`${wi}-${ci}`);
      });
    });

    // Snapshot current guessed letters before evaluation
    const oldGuessedLetters = new Set(
      this.getGuessedLetters().map((g) => g.letter)
    );

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

    // Merge new letter hints into the persistent map
    this.updateGuessedLetterMap();
    saveDailyRecord(this.record);

    const allSolved = this.record.words.every((ws) => ws.solved);
    if (allSolved) {
      this.record.completed = true;
      this.record.completedAt = Date.now();
      this.record.guessedLetterMap = {}; // Clear hints on completion
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

    // Collect cells to animate (not previously locked, from words that were evaluated)
    const cellsToAnimate: { wi: number; ci: number }[] = [];
    this.record.words.forEach((ws, wi) => {
      // Skip words that were already solved before this round
      if (ws.solved && !solvedThisRound.includes(wi)) return;
      ws.cells.forEach((_, ci) => {
        if (!previouslyLocked.has(`${wi}-${ci}`)) {
          cellsToAnimate.push({ wi, ci });
        }
      });
    });

    // Remove cursor and warnings during animation
    const oldCursor = this.container.querySelector(".cell.cursor");
    if (oldCursor) oldCursor.classList.remove("cursor");
    this.container.querySelectorAll(".word-warning").forEach((el) => el.remove());

    // Disable submit button during animation
    if (this.submitBtn) this.submitBtn.disabled = true;

    // Compute final guessed letters state
    const newGuessedLetters = allSolved ? [] : this.getGuessedLetters();

    // Animate the letter reveal
    this.animateLetterReveal(
      cellsToAnimate,
      oldGuessedLetters,
      newGuessedLetters,
      solvedThisRound,
      allSolved
    );
  }

  // -------------------------------------------------------------------------
  // Animations
  // -------------------------------------------------------------------------

  private animateLetterReveal(
    cellsToAnimate: { wi: number; ci: number }[],
    oldGuessedLetters: Set<string>,
    newGuessedLetters: { letter: string; status: "present" | "absent" }[],
    solvedThisRound: number[],
    allSolved: boolean
  ): void {
    this.animating = true;

    if (cellsToAnimate.length === 0) {
      this.animating = false;
      return;
    }

    const flipDuration = 500;
    const staggerDelay = 80;
    const flipMidpoint = flipDuration * 0.45;

    // Track which guessed letters have already been added during animation
    const addedGuessedLetters = new Set<string>();

    // Get or prepare guessed letters container
    let guessedRow = this.container.querySelector<HTMLElement>(".guessed-letters");

    cellsToAnimate.forEach(({ wi, ci }, index) => {
      const delay = index * staggerDelay;

      setTimeout(() => {
        const cellEl = this.getCellEl(wi, ci);
        if (!cellEl) return;

        cellEl.classList.add("flip-reveal");

        // At midpoint, swap the visual state
        setTimeout(() => {
          const cell = this.record.words[wi].cells[ci];

          // Update cell visual to show evaluated color
          cellEl.classList.remove(
            "status-empty",
            "status-correct",
            "status-present",
            "status-absent",
            "cursor"
          );
          cellEl.classList.add(`status-${cell.status}`);
          if (cell.locked) cellEl.classList.add("locked");

          const letter = cell.letter;

          // If letter is now correct, remove from guessed display if present
          if (cell.status === "correct" && letter && guessedRow) {
            const existingChip = Array.from(guessedRow.children).find(
              (el) => el.textContent === letter
            ) as HTMLElement | undefined;
            if (existingChip) {
              existingChip.style.transition = "opacity 0.3s, transform 0.3s";
              existingChip.style.opacity = "0";
              existingChip.style.transform = "scale(0.5)";
              setTimeout(() => existingChip.remove(), 300);
            }
            addedGuessedLetters.add(letter);
          }

          // Add new guessed letter chip if applicable
          if (
            letter &&
            !addedGuessedLetters.has(letter) &&
            !oldGuessedLetters.has(letter)
          ) {
            const guessedEntry = newGuessedLetters.find(
              (g) => g.letter === letter
            );
            if (guessedEntry) {
              addedGuessedLetters.add(letter);

              // Create container if needed
              if (!guessedRow) {
                const submitRow =
                  this.container.querySelector(".submit-row");
                if (submitRow) {
                  guessedRow = document.createElement("div");
                  guessedRow.className = "guessed-letters";
                  submitRow.insertBefore(guessedRow, submitRow.firstChild);
                }
              }

              if (guessedRow) {
                const chip = document.createElement("div");
                chip.className = `guessed-letter status-${guessedEntry.status} guessed-letter-enter`;
                chip.textContent = letter;
                guessedRow.appendChild(chip);
              }
            }
          }
        }, flipMidpoint);
      }, delay);
    });

    // After all flips complete
    const totalTime =
      (cellsToAnimate.length - 1) * staggerDelay + flipDuration + 50;

    setTimeout(() => {
      // Clean up flip animation classes
      this.container.querySelectorAll(".flip-reveal").forEach((el) => {
        el.classList.remove("flip-reveal");
      });

      // Handle solved words — show relation text & border
      if (solvedThisRound.length > 0) {
        solvedThisRound.forEach((wi) => {
          const rowWrapper =
            this.container.querySelectorAll<HTMLElement>(".word-row-wrapper")[
              wi
            ];
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
        });
      }

      // Update attempt label
      const attemptLabel = this.container.querySelector(".attempt-label");
      if (attemptLabel) {
        attemptLabel.textContent = `Attempt ${this.record.totalAttempts}`;
      }

      if (allSolved) {
        // Delay before showing completion
        setTimeout(() => {
          this.animating = false;
          this.launchConfetti();
          setTimeout(() => {
            this.render();
          }, 600);
        }, 500);
      } else {
        this.animating = false;
        this.updateSubmitState();
        this.placeCursorAtFirstEditable();
        this.focusHiddenInput();
      }
    }, totalTime);
  }

  // -------------------------------------------------------------------------
  // Confetti effect
  // -------------------------------------------------------------------------

  private launchConfetti(): void {
    const canvas = document.createElement("canvas");
    canvas.className = "confetti-canvas";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;

    const colors = ["#538d4e", "#b59f3b", "#e94560", "#6aaf63", "#ff9f43", "#a78bfa", "#38bdf8"];
    const pieces: { x: number; y: number; r: number; dx: number; dy: number; rot: number; dr: number; color: string; w: number; h: number; life: number }[] = [];

    for (let i = 0; i < 120; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: -10 - Math.random() * canvas.height * 0.5,
        r: Math.random() * Math.PI * 2,
        dx: (Math.random() - 0.5) * 4,
        dy: Math.random() * 3 + 2,
        rot: 0,
        dr: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        w: Math.random() * 8 + 4,
        h: Math.random() * 6 + 2,
        life: 1,
      });
    }

    let frame = 0;
    const maxFrames = 180;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of pieces) {
        p.x += p.dx;
        p.y += p.dy;
        p.dy += 0.05;
        p.rot += p.dr;
        if (frame > maxFrames * 0.6) {
          p.life -= 0.02;
        }
        if (p.life <= 0) continue;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }

      if (frame < maxFrames) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    };

    requestAnimationFrame(animate);
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
  // Guessed letters helper
  // -------------------------------------------------------------------------

  /** Merge current cell statuses into the persistent guessedLetterMap. */
  private updateGuessedLetterMap(): void {
    if (!this.record.guessedLetterMap) {
      this.record.guessedLetterMap = {};
    }
    const map = this.record.guessedLetterMap;

    for (const ws of this.record.words) {
      for (const cell of ws.cells) {
        if (cell.status === "present" || cell.status === "absent") {
          // "present" (yellow) takes priority over "absent" (grey)
          if (!map[cell.letter] || map[cell.letter] === "absent") {
            map[cell.letter] = cell.status;
          }
        }
      }
    }

    // Remove letters that are now locked (correct) — they don't need hints
    for (const ws of this.record.words) {
      for (const cell of ws.cells) {
        if (cell.status === "correct" && cell.letter) {
          delete map[cell.letter];
        }
      }
    }
  }

  private getGuessedLetters(): { letter: string; status: "present" | "absent" }[] {
    const map = this.record.guessedLetterMap || {};
    const letters = Object.entries(map).map(([letter, status]) => ({ letter, status }));
    // Sort: yellows first, then greys; alphabetical within each group
    letters.sort((a, b) => {
      if (a.status !== b.status) return a.status === "present" ? -1 : 1;
      return a.letter.localeCompare(b.letter);
    });

    return letters;
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
    <p>Each day, three mystery words are <strong>threaded</strong> together by a single <strong>theme word</strong>.</p>
    <p>Your job: uncover the thread. Guess all three words — a <strong>4-letter</strong>, a <strong>5-letter</strong>, and a <strong>6-letter</strong> word — that connect back to the day's theme.</p>
    <ul>
      <li>Fill every square with <strong>valid English words</strong>, then press <strong>Submit</strong> (or hit <kbd>Enter</kbd>).</li>
      <li>Each guess must be a real English word — nonsense strings won't be accepted.</li>
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
    <p>When a word is fully solved, the sentence explaining how it's threaded to the theme is revealed.</p>
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
