import { describe, it, expect, beforeEach } from "vitest";
import {
  createFreshRecord,
  getLocalDateString,
  recordCompletion,
  saveDailyRecord,
  loadDailyRecord,
  loadStats,
  saveStats,
} from "../storage.js";
import type { AllTimeStats } from "../storage.js";

// Clear localStorage before every test so tests are independent
beforeEach(() => localStorage.clear());

// ---------------------------------------------------------------------------
// createFreshRecord
// ---------------------------------------------------------------------------

describe("createFreshRecord", () => {
  it("creates the correct number of word entries", () => {
    const record = createFreshRecord("2026-03-25", 1, [4, 5, 6]);
    expect(record.words).toHaveLength(3);
  });

  it("creates the correct number of cells for each word", () => {
    const record = createFreshRecord("2026-03-25", 1, [4, 5, 6]);
    expect(record.words[0].cells).toHaveLength(4);
    expect(record.words[1].cells).toHaveLength(5);
    expect(record.words[2].cells).toHaveLength(6);
  });

  it("initialises all cells as empty, unlocked, and status=empty", () => {
    const record = createFreshRecord("2026-03-25", 1, [4, 5, 6]);
    record.words.forEach((ws) =>
      ws.cells.forEach((cell) => {
        expect(cell.letter).toBe("");
        expect(cell.status).toBe("empty");
        expect(cell.locked).toBe(false);
      })
    );
  });

  it("initialises all words as unsolved with zero attempts", () => {
    const record = createFreshRecord("2026-03-25", 1, [4, 5, 6]);
    record.words.forEach((ws) => {
      expect(ws.solved).toBe(false);
      expect(ws.attempts).toBe(0);
    });
  });

  it("starts with totalAttempts = 0 and completed = false", () => {
    const record = createFreshRecord("2026-03-25", 1, [4, 5, 6]);
    expect(record.totalAttempts).toBe(0);
    expect(record.completed).toBe(false);
  });

  it("stores the provided date and level ID", () => {
    const record = createFreshRecord("2026-06-15", 3, [4, 5, 6]);
    expect(record.date).toBe("2026-06-15");
    expect(record.levelId).toBe(3);
  });
});

// ---------------------------------------------------------------------------
// getLocalDateString
// ---------------------------------------------------------------------------

describe("getLocalDateString", () => {
  it("formats a date as YYYY-MM-DD", () => {
    expect(getLocalDateString(new Date(2026, 2, 25))).toBe("2026-03-25");
  });

  it("zero-pads single-digit months", () => {
    expect(getLocalDateString(new Date(2026, 0, 15))).toBe("2026-01-15");
  });

  it("zero-pads single-digit days", () => {
    expect(getLocalDateString(new Date(2026, 11, 5))).toBe("2026-12-05");
  });
});

// ---------------------------------------------------------------------------
// saveDailyRecord / loadDailyRecord round-trip
// ---------------------------------------------------------------------------

describe("saveDailyRecord / loadDailyRecord", () => {
  it("returns null when nothing has been saved", () => {
    expect(loadDailyRecord()).toBeNull();
  });

  it("round-trips a fresh record unchanged", () => {
    const record = createFreshRecord("2026-03-25", 2, [4, 5, 6]);
    saveDailyRecord(record);
    expect(loadDailyRecord()).toEqual(record);
  });

  it("persists mutations to nested state", () => {
    const record = createFreshRecord("2026-03-25", 1, [4, 5, 6]);
    record.totalAttempts = 4;
    record.words[0].solved = true;
    record.words[0].cells[0].letter = "B";
    saveDailyRecord(record);

    const loaded = loadDailyRecord()!;
    expect(loaded.totalAttempts).toBe(4);
    expect(loaded.words[0].solved).toBe(true);
    expect(loaded.words[0].cells[0].letter).toBe("B");
  });
});

// ---------------------------------------------------------------------------
// saveStats / loadStats round-trip
// ---------------------------------------------------------------------------

describe("saveStats / loadStats", () => {
  it("returns a zeroed stats object when nothing is saved", () => {
    const stats = loadStats();
    expect(stats.gamesPlayed).toBe(0);
    expect(stats.gamesCompleted).toBe(0);
    expect(stats.totalAttempts).toBe(0);
    expect(stats.currentStreak).toBe(0);
    expect(stats.bestStreak).toBe(0);
  });

  it("round-trips saved stats correctly", () => {
    const stats: AllTimeStats = {
      gamesPlayed: 5,
      gamesCompleted: 4,
      totalAttempts: 20,
      bestScore: 3,
      currentStreak: 3,
      bestStreak: 5,
      lastCompletedDate: "2026-03-24",
    };
    saveStats(stats);
    expect(loadStats()).toEqual(stats);
  });
});

// ---------------------------------------------------------------------------
// recordCompletion
// ---------------------------------------------------------------------------

describe("recordCompletion", () => {
  const base: AllTimeStats = {
    gamesPlayed: 0,
    gamesCompleted: 0,
    totalAttempts: 0,
    currentStreak: 0,
    bestStreak: 0,
  };

  it("increments gamesPlayed by 1", () => {
    expect(recordCompletion(base, 4, "2026-03-25").gamesPlayed).toBe(1);
  });

  it("increments gamesCompleted by 1", () => {
    expect(recordCompletion(base, 4, "2026-03-25").gamesCompleted).toBe(1);
  });

  it("accumulates totalAttempts across completions", () => {
    const after1 = recordCompletion(base, 3, "2026-03-24");
    const after2 = recordCompletion(after1, 5, "2026-03-25");
    expect(after2.totalAttempts).toBe(8);
  });

  it("does not mutate the original stats object", () => {
    recordCompletion(base, 4, "2026-03-25");
    expect(base.gamesPlayed).toBe(0);
  });

  it("sets bestScore on the first completion", () => {
    expect(recordCompletion(base, 5, "2026-03-25").bestScore).toBe(5);
  });

  it("keeps bestScore when the new score is higher (worse)", () => {
    const prev = { ...base, bestScore: 3, currentStreak: 1, bestStreak: 1, gamesPlayed: 1, gamesCompleted: 1, lastCompletedDate: "2026-03-24" };
    expect(recordCompletion(prev, 7, "2026-03-25").bestScore).toBe(3);
  });

  it("updates bestScore when the new score is lower (better)", () => {
    const prev = { ...base, bestScore: 7, currentStreak: 1, bestStreak: 1, gamesPlayed: 1, gamesCompleted: 1, lastCompletedDate: "2026-03-24" };
    expect(recordCompletion(prev, 3, "2026-03-25").bestScore).toBe(3);
  });

  it("stores the completion date in lastCompletedDate", () => {
    expect(recordCompletion(base, 4, "2026-03-25").lastCompletedDate).toBe("2026-03-25");
  });

  describe("streak logic", () => {
    it("starts streak at 1 for a brand-new player", () => {
      expect(recordCompletion(base, 4, "2026-03-25").currentStreak).toBe(1);
    });

    it("increments streak when last completion was yesterday", () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = getLocalDateString(yesterday);
      const todayStr = getLocalDateString();

      const prev = { ...base, currentStreak: 2, bestStreak: 2, gamesPlayed: 2, gamesCompleted: 2, lastCompletedDate: yesterdayStr };
      expect(recordCompletion(prev, 4, todayStr).currentStreak).toBe(3);
    });

    it("resets streak to 1 when a day was missed", () => {
      const twoDaysAgo = new Date();
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
      const prev = { ...base, currentStreak: 5, bestStreak: 5, gamesPlayed: 5, gamesCompleted: 5, lastCompletedDate: getLocalDateString(twoDaysAgo) };
      expect(recordCompletion(prev, 4, getLocalDateString()).currentStreak).toBe(1);
    });

    it("does not reduce streak when completing the same day again", () => {
      const todayStr = getLocalDateString();
      const prev = { ...base, currentStreak: 3, bestStreak: 3, gamesPlayed: 3, gamesCompleted: 3, lastCompletedDate: todayStr };
      // Same-day re-completion: streak should not go down
      expect(recordCompletion(prev, 4, todayStr).currentStreak).toBeGreaterThanOrEqual(3);
    });

    it("updates bestStreak when current streak surpasses it", () => {
      const yesterday = getLocalDateString(new Date(Date.now() - 86400000));
      const prev = { ...base, currentStreak: 4, bestStreak: 4, gamesPlayed: 4, gamesCompleted: 4, lastCompletedDate: yesterday };
      const result = recordCompletion(prev, 3, getLocalDateString());
      expect(result.currentStreak).toBe(5);
      expect(result.bestStreak).toBe(5);
    });

    it("keeps bestStreak when current streak does not exceed it", () => {
      const yesterday = getLocalDateString(new Date(Date.now() - 86400000));
      const prev = { ...base, currentStreak: 2, bestStreak: 10, gamesPlayed: 5, gamesCompleted: 5, lastCompletedDate: yesterday };
      expect(recordCompletion(prev, 3, getLocalDateString()).bestStreak).toBe(10);
    });
  });
});
