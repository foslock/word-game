import { describe, it, expect } from "vitest";
import { evaluateCells, getCrossWordHintPool, allFilled } from "../evaluate.js";
import type { CellState } from "../storage.js";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Build a fresh row of cells from a string of letters (no colour, unlocked). */
function cells(word: string): CellState[] {
  return word.split("").map((letter) => ({
    letter,
    status: "empty" as const,
    locked: false,
  }));
}

/** Build cells where certain indexes are already locked green (previous submission). */
function lockedCells(
  word: string,
  lockedAt: number[]
): CellState[] {
  return word.split("").map((letter, i) => ({
    letter,
    status: lockedAt.includes(i) ? ("correct" as const) : ("empty" as const),
    locked: lockedAt.includes(i),
  }));
}

// ---------------------------------------------------------------------------
// evaluateCells
// ---------------------------------------------------------------------------

describe("evaluateCells — green (correct position)", () => {
  it("marks every cell green when the guess exactly matches the target", () => {
    const result = evaluateCells(cells("BEAT"), "BEAT", []);
    expect(result.every((c) => c.status === "correct")).toBe(true);
  });

  it("locks every green cell", () => {
    const result = evaluateCells(cells("BEAT"), "BEAT", []);
    expect(result.every((c) => c.locked)).toBe(true);
  });

  it("marks only the letters at correct positions green", () => {
    // B and T are correct; middle letters X are not in BEAT
    const result = evaluateCells(cells("BXXT"), "BEAT", []);
    expect(result[0].status).toBe("correct"); // B ✓
    expect(result[1].status).toBe("absent");  // X ✗
    expect(result[2].status).toBe("absent");  // X ✗
    expect(result[3].status).toBe("correct"); // T ✓
  });

  it("does not mark a letter green when it is in the word but wrong position", () => {
    // ATEB has all letters of BEAT but none in the correct position:
    // A[0]≠B, T[1]≠E, E[2]≠A, B[3]≠T
    const result = evaluateCells(cells("ATEB"), "BEAT", []);
    expect(result.every((c) => c.status !== "correct")).toBe(true);
  });
});

describe("evaluateCells — yellow (present, wrong position)", () => {
  it("marks a letter yellow when it is in the target but at the wrong position", () => {
    // E is in BEAT at index 1, but we put it at index 3 → yellow
    const result = evaluateCells(cells("BXAE"), "BEAT", []);
    expect(result[3].status).toBe("present"); // E present in BEAT
  });

  it("yellow cells remain editable (not locked)", () => {
    const result = evaluateCells(cells("TEBA"), "BEAT", []);
    const yellows = result.filter((c) => c.status === "present");
    expect(yellows.length).toBeGreaterThan(0);
    yellows.forEach((c) => expect(c.locked).toBe(false));
  });
});

describe("evaluateCells — grey (absent from all words)", () => {
  it("marks letters absent when not found in the target or any other word", () => {
    const result = evaluateCells(cells("ZZZZ"), "BEAT", []);
    expect(result.every((c) => c.status === "absent")).toBe(true);
  });

  it("grey cells remain editable (not locked)", () => {
    const result = evaluateCells(cells("ZZZZ"), "BEAT", []);
    expect(result.every((c) => !c.locked)).toBe(true);
  });
});

describe("evaluateCells — cross-word yellow hints", () => {
  it("marks a letter yellow when it appears in another unsolved word", () => {
    // Z is not in BEAT, but IS in the other unsolved word BLAZE
    const result = evaluateCells(cells("ZBBB"), "BEAT", ["BLAZE"]);
    expect(result[0].status).toBe("present");
  });

  it("cross-word yellow cells remain editable", () => {
    const result = evaluateCells(cells("ZBBB"), "BEAT", ["BLAZE"]);
    expect(result[0].locked).toBe(false);
  });

  it("does NOT mark yellow for a letter only in already-solved words (caller exclusion)", () => {
    // Caller passes an empty otherUnsolvedWords → solved words provide no hints
    const result = evaluateCells(cells("ZBBB"), "BEAT", []);
    expect(result[0].status).toBe("absent");
  });

  it("gives yellow if the letter appears in any of multiple other unsolved words", () => {
    const result = evaluateCells(cells("XQRZ"), "BEAT", ["JAZZ", "FUZZ"]);
    // Z appears in JAZZ and FUZZ
    expect(result[3].status).toBe("present");
  });

  it("limits cross-word yellows to the total frequency of the letter in other words", () => {
    // Other word BLAZE has one Z. Guessing ZZZZ against BEAT should give
    // at most 1 yellow Z (the first one), not 4.
    const result = evaluateCells(cells("ZZZZ"), "BEAT", ["BLAZE"]);
    const yellowCount = result.filter((c) => c.status === "present").length;
    expect(yellowCount).toBe(1);
    expect(result[0].status).toBe("present"); // first Z gets yellow
    expect(result[1].status).toBe("absent");  // no more Z's available
    expect(result[2].status).toBe("absent");
    expect(result[3].status).toBe("absent");
  });

  it("counts cross-word letter frequency across multiple other words", () => {
    // JAZZ has 2 Z's, FUZZ has 2 Z's → 4 Z's total across other words
    const result = evaluateCells(cells("ZZZZZ"), "BEATS", ["JAZZ", "FUZZ"]);
    const yellowCount = result.filter((c) => c.status === "present").length;
    expect(yellowCount).toBe(4); // 4 Z's available across the two words
    expect(result[4].status).toBe("absent"); // 5th Z is absent
  });
});

describe("evaluateCells — duplicate letter handling", () => {
  it("awards at most one yellow/green per occurrence of a letter in the target", () => {
    // Target SPEED has two E's; guess EEEEE has five E's
    // Positions: S=0,P=1,E=2,E=3,D=4
    // Guess:     E=0,E=1,E=2,E=3,E=4
    // Pass 1: E[2]=E(target[2]) → green; E[3]=E(target[3]) → green
    // Pass 2: E[0] → targetRemaining still has nothing (both consumed) → absent
    //         E[1] → absent; E[4] → absent (D≠E, no more E's)
    const result = evaluateCells(cells("EEEEE"), "SPEED", []);
    const greenCount = result.filter((c) => c.status === "correct").length;
    const yellowCount = result.filter((c) => c.status === "present").length;
    expect(greenCount).toBe(2);   // the two E's at positions 2 and 3
    expect(yellowCount).toBe(0);  // no remaining E's to award yellow
  });

  it("does not award double-yellow beyond the letter's frequency in the target", () => {
    // Target BEATS has one E; guess EEXXX
    // E at index 1 is correct (target[1]=E); E at index 0 is NOT green.
    // After green pass, E at index 1 is consumed. Index 0's E finds no remaining E → absent.
    const result = evaluateCells(cells("EEXXX"), "BEATS", []);
    expect(result[1].status).toBe("correct");  // E at pos 1 in BEATS
    expect(result[0].status).toBe("absent");   // extra E, no more left to award
  });

  it("correctly awards yellow before green when the same letter appears in both roles", () => {
    // Target ABBC; guess BBAC
    // B at index 0: target[0]=A ≠ B → check remaining; B is at index 1 → yellow, consume
    // B at index 1: target[1]=B → green, consume index 2 of remaining
    // A at index 2: target[2]=B ≠ A; A is at index 0 of remaining → yellow, consume
    // C at index 3: target[3]=C → green
    const result = evaluateCells(cells("BBAC"), "ABBC", []);
    expect(result[0].status).toBe("present");  // B yellow
    expect(result[1].status).toBe("correct");  // B green
    expect(result[2].status).toBe("present");  // A yellow
    expect(result[3].status).toBe("correct");  // C green
  });
});

describe("evaluateCells — duplicate letters with cross-word interaction", () => {
  it("only awards 1 yellow when guess has 2 of a letter and target has exactly 1 with no cross-word source", () => {
    // Target BEATS has 1 S (pos 4); no other unsolved words have S.
    // Guess SSZZZ: first S → yellow (consumes BEATS' only S), second S → absent.
    const result = evaluateCells(cells("SSZZZ"), "BEATS", []);
    expect(result[0].status).toBe("present"); // first S: yellow
    expect(result[1].status).toBe("absent");  // second S: grey (target S already consumed)
  });

  it("awards a second yellow when a cross-word provides one additional instance of the letter", () => {
    // Target BEATS has 1 S; cross-word GHOST also has 1 S.
    // Guess SSZZZ: first S yellow from BEATS, second S yellow from cross-word GHOST.
    const result = evaluateCells(cells("SSZZZ"), "BEATS", ["GHOST"]);
    expect(result[0].status).toBe("present"); // first S: yellow (from BEATS)
    expect(result[1].status).toBe("present"); // second S: yellow (cross-word GHOST)
  });

  it("caps yellows at the total count of the letter across target and cross-words", () => {
    // Target BEATS has 1 S; cross-word GHOST has 1 S → 2 S's total to find.
    // Guess SSSZZ: first 2 S's → yellow, third S → absent (no more S's anywhere).
    const result = evaluateCells(cells("SSSZZ"), "BEATS", ["GHOST"]);
    expect(result[0].status).toBe("present"); // first S: yellow
    expect(result[1].status).toBe("present"); // second S: yellow
    expect(result[2].status).toBe("absent");  // third S: grey (exhausted)
  });

  it("cross-word with 0 instances of the letter does not rescue the second duplicate", () => {
    // Target BEATS has 1 S; cross-word CLOUD has 0 S's.
    // The cross-word hint cannot provide any S → second S is grey.
    const result = evaluateCells(cells("SSZZZ"), "BEATS", ["CLOUD"]);
    expect(result[0].status).toBe("present"); // first S: yellow (from BEATS)
    expect(result[1].status).toBe("absent");  // second S: grey (CLOUD has no S)
  });

  it("correctly handles 1 green and 1 yellow for the same letter when target has 2 instances", () => {
    // Target SALSA has 2 S's (pos 0 and pos 3).
    // Guess SSSXX: S[0]=S(target[0]) → green; S[1] → yellow (target S at pos 3);
    // S[2] → absent (both target S's consumed).
    const result = evaluateCells(cells("SSSXX"), "SALSA", []);
    expect(result[0].status).toBe("correct"); // S at correct position
    expect(result[1].status).toBe("present"); // S in word, wrong position
    expect(result[2].status).toBe("absent");  // no more S's in target
  });

  it("a letter guessed twice is grey both times when neither target nor cross-words contain it", () => {
    // No source contains Q — both guessed Q's should be absent.
    const result = evaluateCells(cells("QQZZZ"), "BEATS", ["CLOUD"]);
    expect(result[0].status).toBe("absent");
    expect(result[1].status).toBe("absent");
  });
});

describe("evaluateCells — pre-locked cells from previous submissions", () => {
  it("preserves a locked cell as correct without re-evaluating it", () => {
    // B at index 0 was locked on a previous submission
    const input = lockedCells("BXXT", [0]);
    const result = evaluateCells(input, "BEAT", []);
    expect(result[0].status).toBe("correct");
    expect(result[0].locked).toBe(true);
  });

  it("consumes locked positions so they don't inflate yellow counts", () => {
    // Target BEAT; B at 0 is already locked.
    // Remaining guess letters: X,X,T → X is absent, T is green.
    const input = lockedCells("BXXT", [0]);
    const result = evaluateCells(input, "BEAT", []);
    expect(result[1].status).toBe("absent");  // X not in BEAT
    expect(result[2].status).toBe("absent");  // X not in BEAT
    expect(result[3].status).toBe("correct"); // T ✓
  });
});

// ---------------------------------------------------------------------------
// Cross-word hints with reduced otherUnsolvedWords (locked letters removed)
// ---------------------------------------------------------------------------

describe("evaluateCells — cross-word hints with locked letters excluded", () => {
  it("does not give yellow for a letter that only exists in a removed portion of other words", () => {
    // Target: TROWEL. Other word: SEED with S,E,E locked → remaining "D".
    // Guess ROVERS: S at pos 5 not in TROWEL, not in "D" → grey.
    const result = evaluateCells(cells("ROVERS"), "TROWEL", ["D"]);
    expect(result[5].status).toBe("absent"); // S → grey
  });

  it("still gives yellow for letters remaining (unlocked) in other words", () => {
    // Target: TROWEL. Other word: SEED with S locked → remaining "EED".
    // Guess XEXXXX: E at pos 1 not in TROWEL at pos 1 (R), but E is in remaining "EED" → yellow.
    const result = evaluateCells(cells("XEXXXX"), "TROWEL", ["EED"]);
    expect(result[1].status).toBe("present"); // E → yellow via cross-word
  });

  it("cross-word yellow count respects the reduced letter frequency", () => {
    // Other word originally "SEES" but S at pos 0 and S at pos 3 are locked → remaining "EE".
    // 0 S's remaining. Two S's in guess should not get yellow.
    const result = evaluateCells(cells("SSXX"), "BOLT", ["EE"]);
    expect(result[0].status).toBe("absent");
    expect(result[1].status).toBe("absent");
  });

  it("handles empty remaining string (all letters locked in other word)", () => {
    // Other word fully locked → remaining "".
    const result = evaluateCells(cells("ABCD"), "WXYZ", [""]);
    // No cross-word hints available; everything absent from both target and other
    expect(result.every((c) => c.status === "absent")).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// getCrossWordHintPool
// ---------------------------------------------------------------------------

describe("getCrossWordHintPool", () => {
  it("returns letters in the target not covered by any green or yellow in the guess", () => {
    // Target BEAT; guess TEBA → T=yellow(B), E=yellow(E), B=yellow(A), A=yellow(T)
    // All 4 letters are matched → pool is empty
    const pool = getCrossWordHintPool("BEAT", cells("TEBA"));
    expect(pool).toBe("");
  });

  it("returns unmatched target letters when the guess only covers some", () => {
    // Target BEAT; guess ZZZZ → nothing matches, pool = BEAT
    const pool = getCrossWordHintPool("BEAT", cells("ZZZZ"));
    expect([...pool].sort().join("")).toBe("ABET");
  });

  it("returns unmatched letters after green is consumed", () => {
    // Target BEAT; guess BZZZ → B is green, pool = EAT
    const pool = getCrossWordHintPool("BEAT", cells("BZZZ"));
    expect([...pool].sort().join("")).toBe("AET");
  });

  it("does not double-count a letter that is both guessed and in the target", () => {
    // Target BEATS (one E); guess EEZXX → first E green at pos 1, second E yellow
    // Both E occurrences consumed → pool = ATS (minus the green B and E)
    const pool = getCrossWordHintPool("BEATS", cells("EEZXX"));
    // BEATS: B=0,E=1,A=2,T=3,S=4
    // Guess EEZXX: pos1 E=E(target[1]) → green; pos0 E → yellow (consumes the E); pool = BATS
    expect([...pool].sort().join("")).toBe("ABST");
  });

  it("prevents double-yellow: E shown yellow in word Y should not also give cross-word yellow in word X", () => {
    // Simulates the screenshot bug:
    // Word Y target = "STRIPE_TARGET" contains one E.
    // Word Y guess = "SIDE" → E at pos 3 is yellow (E is in Y's target, wrong pos).
    // getCrossWordHintPool should NOT include that E in the pool for word X.
    //
    // Concrete: target "SEAT", guess "SIDE" → S=green, I=absent, D=absent, E=yellow.
    // Pool should exclude the E (already used as yellow) and the S (green). Remaining = AT.
    const pool = getCrossWordHintPool("SEAT", cells("SIDE"));
    expect([...pool].sort().join("")).toBe("AT");
  });
});

// ---------------------------------------------------------------------------
// allFilled
// ---------------------------------------------------------------------------

describe("allFilled", () => {
  const makeWord = (
    letters: string[],
    solved = false
  ): { cells: CellState[]; solved: boolean } => ({
    solved,
    cells: letters.map((letter) => ({
      letter,
      status: "empty" as const,
      locked: false,
    })),
  });

  it("returns false when any non-locked cell is empty", () => {
    expect(allFilled([makeWord(["A", ""])])).toBe(false);
  });

  it("returns true when every non-locked cell has a letter", () => {
    expect(allFilled([makeWord(["A", "B", "C", "D"])])).toBe(true);
  });

  it("returns true for an empty word list", () => {
    expect(allFilled([])).toBe(true);
  });

  it("ignores solved words — they never block submission", () => {
    const solved = makeWord([""], true); // empty but solved
    const active = makeWord(["A", "B"]);
    expect(allFilled([solved, active])).toBe(true);
  });

  it("treats locked cells as always filled regardless of letter content", () => {
    const words = [
      {
        solved: false,
        cells: [
          { letter: "A", status: "correct" as const, locked: true },
          { letter: "", status: "empty" as const, locked: false },
        ],
      },
    ];
    expect(allFilled(words)).toBe(false); // unlocked cell is still empty
  });

  it("returns true when all remaining cells are locked (word partially solved)", () => {
    const words = [
      {
        solved: false,
        cells: [
          { letter: "A", status: "correct" as const, locked: true },
          { letter: "B", status: "empty" as const, locked: false },
        ],
      },
    ];
    expect(allFilled(words)).toBe(true);
  });

  it("handles multiple words — all must be filled", () => {
    const full = makeWord(["A", "B", "C", "D"]);
    const incomplete = makeWord(["A", ""]);
    expect(allFilled([full, incomplete])).toBe(false);
    expect(allFilled([full, makeWord(["X", "Y"])])).toBe(true);
  });
});
