import { describe, it, expect } from "vitest";
import { LEVELS, getLevelForDate, getDayNumber } from "../levels.js";

// ---------------------------------------------------------------------------
// Level data integrity
// ---------------------------------------------------------------------------

describe("LEVELS data integrity", () => {
  it("there are at least one level defined", () => {
    expect(LEVELS.length).toBeGreaterThan(0);
  });

  it("each level has exactly 3 words", () => {
    LEVELS.forEach((level) => {
      expect(level.words).toHaveLength(3);
    });
  });

  it("words are in length order: 4-letter, 5-letter, 6-letter", () => {
    LEVELS.forEach((level) => {
      expect(level.words[0].word).toHaveLength(4);
      expect(level.words[1].word).toHaveLength(5);
      expect(level.words[2].word).toHaveLength(6);
    });
  });

  it("all target words are uppercase", () => {
    LEVELS.forEach((level) => {
      level.words.forEach((entry) => {
        expect(entry.word).toBe(entry.word.toUpperCase());
        expect(entry.word).toMatch(/^[A-Z]+$/);
      });
    });
  });

  it("all level IDs are unique", () => {
    const ids = LEVELS.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all theme words are non-empty strings", () => {
    LEVELS.forEach((level) => {
      expect(level.themeWord.trim().length).toBeGreaterThan(0);
    });
  });

  it("all relation sentences are non-empty strings", () => {
    LEVELS.forEach((level) => {
      level.words.forEach((entry) => {
        expect(entry.relation.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it("word letters are only alphabetic characters", () => {
    LEVELS.forEach((level) => {
      level.words.forEach((entry) => {
        expect(entry.word).toMatch(/^[A-Za-z]+$/);
      });
    });
  });
});

// ---------------------------------------------------------------------------
// getLevelForDate
// ---------------------------------------------------------------------------

describe("getLevelForDate", () => {
  it("returns the same level for the same date (deterministic)", () => {
    const date = new Date(2026, 2, 15); // March 15, 2026
    expect(getLevelForDate(date).id).toBe(getLevelForDate(date).id);
  });

  it("calling it multiple times with the same date never changes the result", () => {
    const date = new Date(2026, 5, 20);
    const ids = Array.from({ length: 5 }, () => getLevelForDate(date).id);
    expect(new Set(ids).size).toBe(1);
  });

  it("returns a level that exists in the LEVELS array", () => {
    const level = getLevelForDate(new Date(2026, 0, 1));
    expect(LEVELS.some((l) => l.id === level.id)).toBe(true);
  });

  it("cycles through all levels within a single year", () => {
    const seen = new Set<number>();
    const base = new Date(2026, 0, 1);
    // Check enough days to cover all levels (at least LEVELS.length)
    const days = Math.max(LEVELS.length, 365);
    for (let i = 0; i < days; i++) {
      const d = new Date(base);
      d.setDate(d.getDate() + i);
      seen.add(getLevelForDate(d).id);
    }
    LEVELS.forEach((l) => expect(seen.has(l.id)).toBe(true));
  });

  it("produces a different order for a different year", () => {
    // The first day of two different years should (very likely) differ
    const a = getLevelForDate(new Date(2026, 0, 1));
    const b = getLevelForDate(new Date(2027, 0, 1));
    const c = getLevelForDate(new Date(2028, 0, 1));
    // At least two of the three years should start with a different level
    const ids = new Set([a.id, b.id, c.id]);
    expect(ids.size).toBeGreaterThanOrEqual(2);
  });

  it("returns the same level regardless of the time within a day", () => {
    // 00:00 and 23:59 on the same calendar day must give the same level
    const midnight = new Date(2026, 4, 10, 0, 0, 0);
    const beforeMidnight = new Date(2026, 4, 10, 23, 59, 59);
    expect(getLevelForDate(midnight).id).toBe(getLevelForDate(beforeMidnight).id);
  });

  it("can return different levels for different dates", () => {
    // Collect IDs for 30 days; at least 2 distinct IDs should appear
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
// getDayNumber
// ---------------------------------------------------------------------------

describe("getDayNumber", () => {
  it("returns 1 for the epoch date (2026-01-01)", () => {
    expect(getDayNumber(new Date(2026, 0, 1))).toBe(1);
  });

  it("returns 2 for the day after the epoch", () => {
    expect(getDayNumber(new Date(2026, 0, 2))).toBe(2);
  });

  it("increases by exactly 1 per calendar day", () => {
    const day1 = new Date(2026, 3, 1);
    const day2 = new Date(2026, 3, 2);
    expect(getDayNumber(day2)).toBe(getDayNumber(day1) + 1);
  });

  it("is always at least 1 (minimum floor applied for pre-epoch dates)", () => {
    expect(getDayNumber(new Date(2020, 0, 1))).toBeGreaterThanOrEqual(1);
  });

  it("is consistent regardless of time within the day", () => {
    const morning = new Date(2026, 6, 4, 8, 0, 0);
    const evening = new Date(2026, 6, 4, 22, 0, 0);
    expect(getDayNumber(morning)).toBe(getDayNumber(evening));
  });
});
