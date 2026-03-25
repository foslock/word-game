/**
 * User Story tests
 *
 * These tests are written from the player's perspective, mirroring the rules
 * documented in RULES.md.  Each describe block corresponds to a rule or
 * expected player experience.
 */
import { describe, it, expect, beforeEach } from "vitest";
import { evaluateCells, allFilled } from "../evaluate.js";
import { getLevelForDate, getDayNumber, LEVELS } from "../levels.js";
import {
  createFreshRecord,
  recordCompletion,
  saveDailyRecord,
  loadDailyRecord,
  getLocalDateString,
} from "../storage.js";
import type { CellState, WordState } from "../storage.js";

beforeEach(() => localStorage.clear());

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function cells(word: string): CellState[] {
  return word.split("").map((letter) => ({
    letter,
    status: "empty" as const,
    locked: false,
  }));
}

function makeWord(
  letters: string[],
  solved = false
): WordState {
  return {
    solved,
    attempts: 0,
    cells: letters.map((letter) => ({
      letter,
      status: "empty" as const,
      locked: false,
    })),
  };
}

// ---------------------------------------------------------------------------
// US-1: Submit is only enabled when all non-locked squares are filled
// ---------------------------------------------------------------------------

describe("US-1: The player can only submit once all non-locked squares are filled", () => {
  it("returns NOT filled when any unlocked cell is empty", () => {
    expect(allFilled([makeWord(["B", "E", "", "T"])])).toBe(false);
  });

  it("returns filled when every unlocked cell has a letter", () => {
    expect(allFilled([makeWord(["B", "E", "A", "T"])])).toBe(true);
  });

  it("solved words do not block submission — they are already done", () => {
    const solved = makeWord([""], true);
    const active = makeWord(["B", "E", "A", "T"]);
    expect(allFilled([solved, active])).toBe(true);
  });

  it("a single empty cell anywhere prevents submission", () => {
    const word1 = makeWord(["B", "E", "A", "T"]);
    const word2 = makeWord(["C", "H", "", "R", "D"]); // gap in 5-letter word
    expect(allFilled([word1, word2])).toBe(false);
  });

  it("all three rows filled allows submission", () => {
    const w1 = makeWord(["B", "E", "A", "T"]);
    const w2 = makeWord(["C", "H", "O", "R", "D"]);
    const w3 = makeWord(["T", "R", "E", "B", "L", "E"]);
    expect(allFilled([w1, w2, w3])).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// US-2: Correctly placed letters turn green and lock in
// ---------------------------------------------------------------------------

describe("US-2: Correctly placed letters become green and cannot be changed", () => {
  it("a perfect guess makes all cells green", () => {
    const result = evaluateCells(cells("CHORD"), "CHORD", []);
    expect(result.every((c) => c.status === "correct")).toBe(true);
  });

  it("green cells are locked — the player cannot edit them further", () => {
    const result = evaluateCells(cells("CHORD"), "CHORD", []);
    expect(result.every((c) => c.locked)).toBe(true);
  });

  it("only letters at the correct position are green — not near-misses", () => {
    // C and D are correct; the middle letters are wrong
    const result = evaluateCells(cells("CXXXD"), "CHORD", []);
    expect(result[0].status).toBe("correct"); // C ✓
    expect(result[4].status).toBe("correct"); // D ✓
    expect(result[1].status).not.toBe("correct");
    expect(result[2].status).not.toBe("correct");
    expect(result[3].status).not.toBe("correct");
  });

  it("partial solve: one locked letter remains locked on the next submission", () => {
    // Simulate a cell that was already locked from a previous submission
    const preLocked: CellState[] = [
      { letter: "C", status: "correct", locked: true },
      { letter: "X", status: "empty", locked: false },
      { letter: "X", status: "empty", locked: false },
      { letter: "X", status: "empty", locked: false },
      { letter: "D", status: "empty", locked: false },
    ];
    const result = evaluateCells(preLocked, "CHORD", []);
    expect(result[0].locked).toBe(true);
    expect(result[0].status).toBe("correct");
    expect(result[4].status).toBe("correct"); // D now also correct
  });
});

// ---------------------------------------------------------------------------
// US-3: Yellow letters are in one of the three words but in the wrong position
// ---------------------------------------------------------------------------

describe("US-3: Yellow letters are present somewhere but misplaced", () => {
  it("a letter in the target but at the wrong position turns yellow", () => {
    // E is in CHORD at position… wait, it isn't. Let's use BEATS.
    // E is at position 1 in BEATS; putting E at position 0 → yellow
    const result = evaluateCells(cells("EXXXX"), "BEATS", []);
    expect(result[0].status).toBe("present");
  });

  it("yellow cells remain editable — the player can change them", () => {
    const result = evaluateCells(cells("TEBA"), "BEAT", []);
    const yellows = result.filter((c) => c.status === "present");
    expect(yellows.length).toBeGreaterThan(0);
    yellows.forEach((c) => expect(c.locked).toBe(false));
  });

  it("a letter in another unsolved word also turns yellow (cross-word hint)", () => {
    // Z is absent from BEAT but present in the other unsolved word BLAZE
    const result = evaluateCells(cells("ZBBB"), "BEAT", ["BLAZE"]);
    expect(result[0].status).toBe("present");
    expect(result[0].locked).toBe(false);
  });

  it("cross-word yellow does NOT apply for already-solved other words", () => {
    // otherUnsolvedWords = [] because the other words are solved
    const result = evaluateCells(cells("ZBBB"), "BEAT", []);
    expect(result[0].status).toBe("absent");
  });
});

// ---------------------------------------------------------------------------
// US-4: Grey letters are absent from all three words
// ---------------------------------------------------------------------------

describe("US-4: Grey letters are absent from every target word", () => {
  it("a letter not found anywhere turns grey", () => {
    const result = evaluateCells(cells("ZZZZ"), "BEAT", []);
    expect(result.every((c) => c.status === "absent")).toBe(true);
  });

  it("grey cells remain editable — the player can try other letters", () => {
    const result = evaluateCells(cells("ZZZZ"), "BEAT", []);
    expect(result.every((c) => !c.locked)).toBe(true);
  });

  it("a letter in a solved other word (excluded) is grey", () => {
    // S is in SPACE but that word is already solved → otherUnsolvedWords excludes it
    const result = evaluateCells(cells("SXXX"), "BEAT", []); // no unsolved others
    expect(result[0].status).toBe("absent");
  });
});

// ---------------------------------------------------------------------------
// US-5: A word is solved when every letter is in the correct position
// ---------------------------------------------------------------------------

describe("US-5: Solving a word requires all letters in the correct position", () => {
  it("a perfect guess results in all-green cells (word is solved)", () => {
    const result = evaluateCells(cells("TREBLE"), "TREBLE", []);
    expect(result.every((c) => c.status === "correct")).toBe(true);
  });

  it("a guess with one wrong letter does not solve the word", () => {
    const result = evaluateCells(cells("TRABLE"), "TREBLE", []);
    expect(result.every((c) => c.status === "correct")).toBe(false);
  });

  it("all three words can be solved independently", () => {
    const level = LEVELS[0]; // MUSIC: BEAT, CHORD, TREBLE
    const r1 = evaluateCells(cells("BEAT"), level.words[0].word, []);
    const r2 = evaluateCells(cells("CHORD"), level.words[1].word, []);
    const r3 = evaluateCells(cells("TREBLE"), level.words[2].word, []);
    expect(r1.every((c) => c.status === "correct")).toBe(true);
    expect(r2.every((c) => c.status === "correct")).toBe(true);
    expect(r3.every((c) => c.status === "correct")).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// US-6: The same date always produces the same puzzle
// ---------------------------------------------------------------------------

describe("US-6: The same date always presents the same puzzle", () => {
  it("getLevelForDate is deterministic for a fixed date", () => {
    const date = new Date(2026, 2, 15);
    expect(getLevelForDate(date).id).toBe(getLevelForDate(date).id);
  });

  it("any time within the same calendar day gives the same level", () => {
    const earlyMorning = new Date(2026, 6, 4, 0, 0, 0);
    const lateNight = new Date(2026, 6, 4, 23, 59, 59);
    expect(getLevelForDate(earlyMorning).id).toBe(getLevelForDate(lateNight).id);
  });

  it("the puzzle changes at midnight (next calendar day)", () => {
    // Collect levels across 30 days and confirm more than one level appears
    const ids = new Set<number>();
    const base = new Date(2026, 0, 1);
    for (let i = 0; i < 30; i++) {
      const d = new Date(base);
      d.setDate(d.getDate() + i);
      ids.add(getLevelForDate(d).id);
    }
    expect(ids.size).toBeGreaterThan(1);
  });
});

// ---------------------------------------------------------------------------
// US-7: Progress is saved automatically and restored on reload
// ---------------------------------------------------------------------------

describe("US-7: The player's progress persists between sessions", () => {
  it("a saved record can be loaded back identically", () => {
    const record = createFreshRecord("2026-03-25", 1, [4, 5, 6]);
    record.totalAttempts = 3;
    record.words[0].solved = true;
    saveDailyRecord(record);

    const loaded = loadDailyRecord();
    expect(loaded).not.toBeNull();
    expect(loaded!.totalAttempts).toBe(3);
    expect(loaded!.words[0].solved).toBe(true);
  });

  it("returns null before the player has started today's puzzle", () => {
    expect(loadDailyRecord()).toBeNull();
  });

  it("partial cell state (letters typed, not yet submitted) is preserved", () => {
    const record = createFreshRecord("2026-03-25", 1, [4, 5, 6]);
    record.words[0].cells[0].letter = "B";
    record.words[0].cells[1].letter = "E";
    saveDailyRecord(record);

    const loaded = loadDailyRecord()!;
    expect(loaded.words[0].cells[0].letter).toBe("B");
    expect(loaded.words[0].cells[1].letter).toBe("E");
  });
});

// ---------------------------------------------------------------------------
// US-8: Completing the puzzle updates the player's statistics
// ---------------------------------------------------------------------------

describe("US-8: Completing the puzzle is reflected in statistics", () => {
  it("increments games played", () => {
    const base = { gamesPlayed: 2, gamesCompleted: 2, totalAttempts: 6, currentStreak: 2, bestStreak: 2, lastCompletedDate: "2026-03-24" };
    expect(recordCompletion(base, 3, "2026-03-25").gamesPlayed).toBe(3);
  });

  it("increments games completed", () => {
    const base = { gamesPlayed: 2, gamesCompleted: 2, totalAttempts: 6, currentStreak: 2, bestStreak: 2, lastCompletedDate: "2026-03-24" };
    expect(recordCompletion(base, 3, "2026-03-25").gamesCompleted).toBe(3);
  });

  it("accumulates attempt counts for an average score", () => {
    const base = { gamesPlayed: 1, gamesCompleted: 1, totalAttempts: 5, currentStreak: 1, bestStreak: 1, lastCompletedDate: "2026-03-24" };
    expect(recordCompletion(base, 3, "2026-03-25").totalAttempts).toBe(8);
  });

  it("records a new best score when the player does better", () => {
    const base = { gamesPlayed: 1, gamesCompleted: 1, totalAttempts: 8, bestScore: 8, currentStreak: 1, bestStreak: 1, lastCompletedDate: "2026-03-24" };
    expect(recordCompletion(base, 3, "2026-03-25").bestScore).toBe(3);
  });
});

// ---------------------------------------------------------------------------
// US-9: Streak tracks consecutive days of play
// ---------------------------------------------------------------------------

describe("US-9: The player's streak increments on consecutive days of play", () => {
  it("streak increments when the player completes the puzzle the day after their last", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const prev = {
      gamesPlayed: 3, gamesCompleted: 3, totalAttempts: 9,
      currentStreak: 3, bestStreak: 3,
      lastCompletedDate: getLocalDateString(yesterday),
    };
    expect(recordCompletion(prev, 4, getLocalDateString()).currentStreak).toBe(4);
  });

  it("streak resets to 1 when the player misses a day", () => {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    const prev = {
      gamesPlayed: 5, gamesCompleted: 5, totalAttempts: 15,
      currentStreak: 5, bestStreak: 5,
      lastCompletedDate: getLocalDateString(twoDaysAgo),
    };
    expect(recordCompletion(prev, 4, getLocalDateString()).currentStreak).toBe(1);
  });

  it("best streak is updated when current streak surpasses it", () => {
    const yesterday = getLocalDateString(new Date(Date.now() - 86400000));
    const prev = {
      gamesPlayed: 7, gamesCompleted: 7, totalAttempts: 21,
      currentStreak: 7, bestStreak: 7,
      lastCompletedDate: yesterday,
    };
    const result = recordCompletion(prev, 3, getLocalDateString());
    expect(result.bestStreak).toBe(8);
  });
});

// ---------------------------------------------------------------------------
// US-10: Day number increases with each passing day
// ---------------------------------------------------------------------------

describe("US-10: The day number shown to the player increases each day", () => {
  it("day 1 corresponds to the game launch date (2026-01-01)", () => {
    expect(getDayNumber(new Date(2026, 0, 1))).toBe(1);
  });

  it("day number increases by exactly 1 per day", () => {
    const day = new Date(2026, 3, 10);
    const nextDay = new Date(2026, 3, 11);
    expect(getDayNumber(nextDay) - getDayNumber(day)).toBe(1);
  });
});
