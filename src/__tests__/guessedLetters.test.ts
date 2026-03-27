/**
 * Tests for guessed-letter display logic.
 *
 * Validates sorting (yellows before greys, alphabetical within groups),
 * duplicate chip counts, cross-word hint accuracy with locked letters,
 * and map maintenance across submissions.
 */
import { describe, it, expect } from "vitest";
import { evaluateCells } from "../evaluate.js";
import { updateGuessedLetterMap, getGuessedLetters } from "../game.js";
import type { CellState, WordState } from "../storage.js";

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

/**
 * Simulate a full submission: evaluate all unsolved words and update the map.
 * Mirrors game.ts behaviour — locked letters in other words are excluded from
 * cross-word hints so already-found letters don't produce false yellows.
 */
function submitGuess(
  _guesses: string[],
  targets: string[],
  words: WordState[],
  map: Record<string, "present" | "absent">
): void {
  for (let wi = 0; wi < words.length; wi++) {
    if (words[wi].solved) continue;
    const otherUnsolved = targets
      .map((t, i) => ({ target: t, ws: words[i], idx: i }))
      .filter(({ ws, idx }) => idx !== wi && !ws.solved)
      .map(({ target, ws }) =>
        target
          .split("")
          .filter((_, ci) => !ws.cells[ci].locked)
          .join("")
      );
    words[wi].cells = evaluateCells(words[wi].cells, targets[wi], otherUnsolved);
    if (words[wi].cells.every((c) => c.status === "correct")) {
      words[wi].solved = true;
    }
  }
  updateGuessedLetterMap(map, words, targets);
}

/** Reset unlocked cells to new letters for the next guess. */
function setGuess(words: WordState[], guesses: string[]): void {
  for (let wi = 0; wi < words.length; wi++) {
    if (words[wi].solved) continue;
    const letters = guesses[wi].split("");
    for (let ci = 0; ci < words[wi].cells.length; ci++) {
      if (!words[wi].cells[ci].locked) {
        words[wi].cells[ci].letter = letters[ci];
        words[wi].cells[ci].status = "empty";
      }
    }
  }
}

function makeWords(guesses: string[]): WordState[] {
  return guesses.map((g) => ({
    cells: cells(g),
    solved: false,
    attempts: 0,
  }));
}

function letterString(result: { letter: string; status: "present" | "absent" }[]): string {
  return result.map((r) => r.letter).join("");
}

function statusString(result: { letter: string; status: "present" | "absent" }[]): string {
  return result.map((r) => (r.status === "present" ? "Y" : "G")).join("");
}

// ---------------------------------------------------------------------------
// GARDEN scenario from screenshot: SEED, BLOOM, TROWEL
// Guess: SEER, TOWEL, ROVERS
// ---------------------------------------------------------------------------

describe("GARDEN scenario: SEER / TOWEL / ROVERS", () => {
  const targets = ["SEED", "BLOOM", "TROWEL"];

  function setup() {
    const words = makeWords(["SEER", "TOWEL", "ROVERS"]);
    const map: Record<string, "present" | "absent"> = {};
    submitGuess(["SEER", "TOWEL", "ROVERS"], targets, words, map);
    return { words, map };
  }

  it("S is grey because all target instances are already locked green", () => {
    const { words, map } = setup();
    // S in SEED is locked green; ROVERS S should evaluate as absent
    expect(map["S"]).toBe("absent");
    const result = getGuessedLetters(map, words, targets);
    const sEntry = result.find((r) => r.letter === "S");
    expect(sEntry).toBeDefined();
    expect(sEntry!.status).toBe("absent");
  });

  it("L appears only once (player saw 1 yellow L)", () => {
    const { words, map } = setup();
    const result = getGuessedLetters(map, words, targets);
    const lCount = result.filter((r) => r.letter === "L").length;
    expect(lCount).toBe(1);
  });

  it("O appears twice (player saw 2 yellow Os, capped at 2)", () => {
    const { words, map } = setup();
    const result = getGuessedLetters(map, words, targets);
    const oCount = result.filter((r) => r.letter === "O").length;
    expect(oCount).toBe(2);
  });

  it("R appears once (only 1 unguessed R in targets despite 2 yellow cells)", () => {
    const { words, map } = setup();
    const result = getGuessedLetters(map, words, targets);
    const rCount = result.filter((r) => r.letter === "R").length;
    expect(rCount).toBe(1);
  });

  it("V shows as grey (absent)", () => {
    const { words, map } = setup();
    const result = getGuessedLetters(map, words, targets);
    const vEntry = result.find((r) => r.letter === "V");
    expect(vEntry).toBeDefined();
    expect(vEntry!.status).toBe("absent");
  });

  it("all yellows come before all greys", () => {
    const { words, map } = setup();
    const result = getGuessedLetters(map, words, targets);
    const statuses = statusString(result);
    const firstGrey = statuses.indexOf("G");
    const lastYellow = statuses.lastIndexOf("Y");
    if (firstGrey !== -1 && lastYellow !== -1) {
      expect(lastYellow).toBeLessThan(firstGrey);
    }
  });

  it("letters are alphabetical within each status group", () => {
    const { words, map } = setup();
    const result = getGuessedLetters(map, words, targets);
    const yellows = result.filter((r) => r.status === "present").map((r) => r.letter);
    const greys = result.filter((r) => r.status === "absent").map((r) => r.letter);
    expect(yellows).toEqual([...yellows].sort());
    expect(greys).toEqual([...greys].sort());
  });

  it("produces the correct full chip sequence", () => {
    const { words, map } = setup();
    const result = getGuessedLetters(map, words, targets);
    // Yellows: E, L, O, O, R, T, W — then greys: S, V
    expect(letterString(result)).toBe("ELOORTWSV");
    expect(statusString(result)).toBe("YYYYYYYGG");
  });
});

// ---------------------------------------------------------------------------
// Cross-word hints: locked letters must not produce false yellows
// ---------------------------------------------------------------------------

describe("Cross-word hints exclude locked (green) letters", () => {
  it("a letter locked green in word A does not give a yellow hint in word B", () => {
    // Target: SEED, SALT. Guess: SXXX, SXXX.
    // S in SEED pos 0 = green (locked). When evaluating word 2 (SXXX vs SALT),
    // the cross-word hint for SEED should NOT include S (it's locked).
    // S at pos 0 of word 2 matches SALT pos 0 → green. No false yellow.
    // But let's test a more revealing case:
    // Target: SEED, BOOM. Guess: SEER, SAND.
    // S in SEED pos 0 = green. S in SAND pos 0 vs BOOM: S is not in BOOM,
    // and cross-word SEED-minus-locked = "D" (S,E,E locked). S not in "D" → grey.
    const targets = ["SEED", "BOOM"];
    const words = makeWords(["SEER", "SAND"]);
    const map: Record<string, "present" | "absent"> = {};
    submitGuess(["SEER", "SAND"], targets, words, map);

    // S in word 2 (SAND) should be absent, not yellow
    const sCell = words[1].cells[0]; // S at pos 0 of SAND
    expect(sCell.status).toBe("absent");
  });

  it("unlocked letters in other words still provide cross-word hints", () => {
    // Target: SEED, STAR. Guess: SXXX, EXXX.
    // E in SEED: pos 1,2 not locked (guess is SXXX, S=green, X≠E).
    // So cross-word for word 2 includes E from SEED.
    // E at pos 0 of word 2 vs STAR: E not in STAR, but E is in SEED (unlocked) → yellow.
    const targets = ["SEED", "STAR"];
    const words = makeWords(["SXXX", "EXXX"]);
    const map: Record<string, "present" | "absent"> = {};
    submitGuess(["SXXX", "EXXX"], targets, words, map);

    // E in word 2 should be yellow (cross-word from SEED's unlocked E's)
    const eCell = words[1].cells[0]; // E at pos 0 of EXXX
    expect(eCell.status).toBe("present");
  });

  it("a letter with some instances locked and some unlocked gives correct yellow count", () => {
    // Target: SEED, ELSE. Guess SEXX, EXXX.
    // SEED: S=green, E=green (pos 1), X≠E, X≠D. Locked: S(0), E(1).
    // Cross-word for word 2: SEED minus locked = "ED" (pos 2 E, pos 3 D).
    // E at pos 0 of EXXX vs ELSE: E=green (pos 0 matches). Not a cross-word case.
    // Let's use: Target: SEES, ELSE. Guess: SEXX, EXXX.
    // SEES: S=green(0), E=green(1), X≠E(2), X≠S(3). Locked: S(0), E(1).
    // Remaining SEES letters = "ES" (pos 2 E, pos 3 S).
    // Word 2 EXXX vs ELSE: E(0)=E green.
    // Let's try: Target: SEES, AXLE. Guess: SEXX, ESXX.
    // SEES: S=green(0), E=green(1). Remaining = "ES" (pos 2,3).
    // Word 2: ESXX vs AXLE. E(0)≠A, S(1)≠X, X(2)≠L, X(3)≠E.
    // Cross-word from SEES remaining "ES": E=1, S=1.
    // E(0) not in AXLE remaining... actually E IS in AXLE (pos 3). Let me pick better targets.
    // Target: SEES, BOLT. Guess: SEXX, ESXX.
    // SEES: S=green(0), E=green(1). Remaining = "ES".
    // Word 2: ESXX vs BOLT. E(0)≠B, S(1)≠O, X(2)≠L, X(3)≠T.
    // Cross-word remaining "ES": E=1, S=1.
    // E(0): not in BOLT. otherRemaining[E]=1 → yellow.
    // S(1): not in BOLT. otherRemaining[S]=1 → yellow.
    const targets = ["SEES", "BOLT"];
    const words = makeWords(["SEXX", "ESXX"]);
    const map: Record<string, "present" | "absent"> = {};
    submitGuess(["SEXX", "ESXX"], targets, words, map);

    // E at pos 0 of word 2 should be yellow (one E still unlocked in SEES)
    expect(words[1].cells[0].status).toBe("present");
    // S at pos 1 of word 2 should be yellow (one S still unlocked in SEES)
    expect(words[1].cells[1].status).toBe("present");

    // Guessed letters should show E and S as present
    expect(map["E"]).toBe("present");
    expect(map["S"]).toBe("present");
  });

  it("no false yellows when ALL instances of a letter are locked across words", () => {
    // Target: SEAT, BEST. First guess locks some letters.
    // Then second guess: letter appears but all target instances are locked → grey.
    const targets = ["SEAT", "BEST"];
    // Submission 1: lock S and E in both words
    const words = makeWords(["SEXX", "BESX"]);
    const map: Record<string, "present" | "absent"> = {};
    submitGuess(["SEXX", "BESX"], targets, words, map);

    // S locked in SEAT(0), and B=green,E=green,S=green in BEST(0,1,2)
    // Now set up a second guess where S appears in the remaining cells
    setGuess(words, ["SESX", "BESS"]);
    submitGuess(["SESX", "BESS"], targets, words, map);

    // After both submissions, S should not be yellow anywhere it's not correct
    // (all S positions in targets should be locked)
    for (let wi = 0; wi < words.length; wi++) {
      for (const cell of words[wi].cells) {
        if (cell.letter === "S" && !cell.locked) {
          // Any unlocked S cell should NOT be yellow
          expect(cell.status).not.toBe("present");
        }
      }
    }
  });
});

// ---------------------------------------------------------------------------
// Sorting: yellows first, then greys, alphabetical within groups
// ---------------------------------------------------------------------------

describe("Guessed letters sorting", () => {
  it("yellows sort before greys", () => {
    const map: Record<string, "present" | "absent"> = { Z: "present", A: "absent" };
    const words: WordState[] = [{
      cells: [
        { letter: "Z", status: "present", locked: false },
        { letter: "A", status: "absent", locked: false },
      ],
      solved: false,
      attempts: 1,
    }];
    const result = getGuessedLetters(map, words, ["ZA"]);
    expect(result[0]).toEqual({ letter: "Z", status: "present" });
    expect(result[1]).toEqual({ letter: "A", status: "absent" });
  });

  it("letters within the same status group are alphabetical", () => {
    const map: Record<string, "present" | "absent"> = { C: "absent", A: "absent", B: "absent" };
    const words: WordState[] = [{
      cells: [
        { letter: "C", status: "absent", locked: false },
        { letter: "A", status: "absent", locked: false },
        { letter: "B", status: "absent", locked: false },
      ],
      solved: false,
      attempts: 1,
    }];
    const result = getGuessedLetters(map, words, ["XYZ"]);
    expect(letterString(result)).toBe("ABC");
  });
});

// ---------------------------------------------------------------------------
// Duplicate chips: based on visible yellow cells, capped at target count
// ---------------------------------------------------------------------------

describe("Duplicate yellow chips", () => {
  it("shows 2 chips when player sees 2 yellow cells and target has ≥2 unguessed", () => {
    const targets = ["BLOOM"];
    const words: WordState[] = [{
      cells: [
        { letter: "O", status: "present", locked: false },
        { letter: "O", status: "present", locked: false },
        { letter: "X", status: "absent", locked: false },
        { letter: "X", status: "absent", locked: false },
        { letter: "X", status: "absent", locked: false },
      ],
      solved: false,
      attempts: 1,
    }];
    const map: Record<string, "present" | "absent"> = { O: "present", X: "absent" };
    const result = getGuessedLetters(map, words, targets);
    const oCount = result.filter((r) => r.letter === "O").length;
    expect(oCount).toBe(2);
  });

  it("caps duplicates at unguessed target count even if more yellow cells exist", () => {
    const targets = ["TROWEL"];
    const words: WordState[] = [{
      cells: [
        { letter: "R", status: "present", locked: false },
        { letter: "R", status: "present", locked: false },
        { letter: "X", status: "absent", locked: false },
        { letter: "X", status: "absent", locked: false },
        { letter: "X", status: "absent", locked: false },
        { letter: "X", status: "absent", locked: false },
      ],
      solved: false,
      attempts: 1,
    }];
    const map: Record<string, "present" | "absent"> = { R: "present", X: "absent" };
    const result = getGuessedLetters(map, words, targets);
    const rCount = result.filter((r) => r.letter === "R").length;
    expect(rCount).toBe(1);
  });

  it("shows 1 chip when player sees 1 yellow even if target has more", () => {
    const targets = ["BLOOM"];
    const words: WordState[] = [{
      cells: [
        { letter: "O", status: "present", locked: false },
        { letter: "X", status: "absent", locked: false },
        { letter: "X", status: "absent", locked: false },
        { letter: "X", status: "absent", locked: false },
        { letter: "X", status: "absent", locked: false },
      ],
      solved: false,
      attempts: 1,
    }];
    const map: Record<string, "present" | "absent"> = { O: "present", X: "absent" };
    const result = getGuessedLetters(map, words, targets);
    const oCount = result.filter((r) => r.letter === "O").length;
    expect(oCount).toBe(1);
  });

  it("grey letters always show exactly once regardless of cell count", () => {
    const targets = ["BEAT"];
    const words: WordState[] = [{
      cells: [
        { letter: "Z", status: "absent", locked: false },
        { letter: "Z", status: "absent", locked: false },
        { letter: "Z", status: "absent", locked: false },
        { letter: "Z", status: "absent", locked: false },
      ],
      solved: false,
      attempts: 1,
    }];
    const map: Record<string, "present" | "absent"> = { Z: "absent" };
    const result = getGuessedLetters(map, words, targets);
    expect(result.length).toBe(1);
    expect(result[0]).toEqual({ letter: "Z", status: "absent" });
  });
});

// ---------------------------------------------------------------------------
// Duplicate letter bug: guess contains more of a letter than the total
// number of that letter across all target words.
// Regression for: "I guessed two S's and both showed yellow even though
// there is only one S in the final solution."
// ---------------------------------------------------------------------------

describe("Duplicate letter bug: guess with 2 of same letter, only 1 in total solution", () => {
  it("evaluates first S as yellow and second S as grey when only 1 S exists across all targets", () => {
    // BEATS has 1 S, CLOUD has 0 S's → total S across puzzle = 1.
    // Guessing SSZZZ for BEATS: first S yellow, second S grey (no more S's anywhere).
    const targets = ["BEATS", "CLOUD"];
    const words = makeWords(["SSZZZ", "ZZZZZ"]);
    const map: Record<string, "present" | "absent"> = {};
    submitGuess(["SSZZZ", "ZZZZZ"], targets, words, map);

    expect(words[0].cells[0].status).toBe("present"); // first S: yellow
    expect(words[0].cells[1].status).toBe("absent");  // second S: grey
  });

  it("guessed section shows only 1 S chip when only 1 S exists across all target words", () => {
    const targets = ["BEATS", "CLOUD"]; // BEATS: 1 S, CLOUD: 0 S's
    const words = makeWords(["SSZZZ", "ZZZZZ"]);
    const map: Record<string, "present" | "absent"> = {};
    submitGuess(["SSZZZ", "ZZZZZ"], targets, words, map);

    const result = getGuessedLetters(map, words, targets);
    const sChips = result.filter((r) => r.letter === "S");
    expect(sChips.length).toBe(1);
    expect(sChips[0].status).toBe("present");
  });

  it("shows 2 S chips when both target words each have 1 S (2 total to find)", () => {
    // BEATS has 1 S, GHOST has 1 S → 2 total S's in the puzzle, both unfound.
    // Guessing SSZZZ for BEATS: first S yellow (BEATS), second S yellow (cross-word GHOST).
    // 2 yellow S chips is CORRECT here — there really are 2 S's to find.
    const targets = ["BEATS", "GHOST"];
    const words = makeWords(["SSZZZ", "ZZZZZ"]);
    const map: Record<string, "present" | "absent"> = {};
    submitGuess(["SSZZZ", "ZZZZZ"], targets, words, map);

    expect(words[0].cells[0].status).toBe("present"); // first S: yellow
    expect(words[0].cells[1].status).toBe("present"); // second S: yellow (cross-word)

    const result = getGuessedLetters(map, words, targets);
    const sChips = result.filter((r) => r.letter === "S");
    expect(sChips.length).toBe(2);
    expect(sChips.every((c) => c.status === "present")).toBe(true);
  });

  it("shows 1 S chip when the other target's S is already locked (found)", () => {
    // BEATS has 1 S (not yet found). GHOST has 1 S already locked (found) at pos 3.
    // Cross-word pool for BEATS excludes the locked S in GHOST → only 1 S remaining.
    // Guessing SSZZZ for BEATS: first S yellow (BEATS), second S grey (GHOST's S locked).
    const targets = ["BEATS", "GHOST"];
    const words: WordState[] = [
      { cells: cells("SSZZZ"), solved: false, attempts: 0 },
      {
        cells: [
          { letter: "Z", status: "empty",   locked: false },
          { letter: "Z", status: "empty",   locked: false },
          { letter: "Z", status: "empty",   locked: false },
          { letter: "S", status: "correct", locked: true  }, // S already found in GHOST
          { letter: "Z", status: "empty",   locked: false },
        ],
        solved: false,
        attempts: 1,
      },
    ];
    const map: Record<string, "present" | "absent"> = {};
    submitGuess(["SSZZZ", "ZZSZZ"], targets, words, map);

    expect(words[0].cells[0].status).toBe("present"); // first S: yellow (BEATS' S available)
    expect(words[0].cells[1].status).toBe("absent");  // second S: grey (GHOST's S is locked)

    const result = getGuessedLetters(map, words, targets);
    const sChips = result.filter((r) => r.letter === "S");
    expect(sChips.length).toBe(1);
    expect(sChips[0].status).toBe("present");
  });
});

// ---------------------------------------------------------------------------
// Map maintenance: yellow → grey degradation
// ---------------------------------------------------------------------------

describe("Guessed letter map maintenance", () => {
  it("degrades yellow to grey when letter is fully locked AND also absent this round", () => {
    const targets = ["SEED", "BLOOM"];
    const words: WordState[] = [
      {
        cells: [
          { letter: "S", status: "correct", locked: true },
          { letter: "E", status: "correct", locked: true },
          { letter: "E", status: "correct", locked: true },
          { letter: "D", status: "correct", locked: true },
        ],
        solved: true,
        attempts: 1,
      },
      {
        cells: [
          { letter: "S", status: "absent", locked: false },
          { letter: "X", status: "absent", locked: false },
          { letter: "X", status: "absent", locked: false },
          { letter: "X", status: "absent", locked: false },
          { letter: "X", status: "absent", locked: false },
        ],
        solved: false,
        attempts: 1,
      },
    ];
    const map: Record<string, "present" | "absent"> = { S: "present" };
    updateGuessedLetterMap(map, words, targets);
    expect(map["S"]).toBe("absent");
  });

  it("removes yellow letter when fully locked and not absent this round", () => {
    const targets = ["SEED", "BLOOM"];
    const words: WordState[] = [
      {
        cells: [
          { letter: "S", status: "correct", locked: true },
          { letter: "E", status: "correct", locked: true },
          { letter: "E", status: "correct", locked: true },
          { letter: "D", status: "correct", locked: true },
        ],
        solved: true,
        attempts: 1,
      },
      {
        // S not guessed this round at all
        cells: [
          { letter: "B", status: "correct", locked: true },
          { letter: "X", status: "absent", locked: false },
          { letter: "X", status: "absent", locked: false },
          { letter: "X", status: "absent", locked: false },
          { letter: "X", status: "absent", locked: false },
        ],
        solved: false,
        attempts: 1,
      },
    ];
    const map: Record<string, "present" | "absent"> = { S: "present" };
    updateGuessedLetterMap(map, words, targets);
    expect(map["S"]).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// Multi-submission scenario
// ---------------------------------------------------------------------------

describe("Guessed letters across multiple submissions", () => {
  it("accumulates letters and adjusts duplicates as more are discovered", () => {
    const targets = ["SEED", "BLOOM", "TROWEL"];

    // Submission 1: SEER, TOWEL, ROVERS
    const words = makeWords(["SEER", "TOWEL", "ROVERS"]);
    const map: Record<string, "present" | "absent"> = {};
    submitGuess(["SEER", "TOWEL", "ROVERS"], targets, words, map);

    const result1 = getGuessedLetters(map, words, targets);
    // Yellows: E,L,O,O,R,T,W — Greys: S,V
    expect(letterString(result1)).toBe("ELOORTWSV");
    expect(statusString(result1)).toBe("YYYYYYYGG");

    // Submission 2: change unsolved cells, resubmit
    setGuess(words, ["SEER", "PROOF", "TROWEL"]);
    submitGuess(["SEER", "PROOF", "TROWEL"], targets, words, map);

    // TROWEL should be solved now
    expect(words[2].solved).toBe(true);

    const result2 = getGuessedLetters(map, words, targets);
    const yellows2 = result2.filter((r) => r.status === "present");
    const greys2 = result2.filter((r) => r.status === "absent");

    // All yellows should still come before greys
    const statuses2 = statusString(result2);
    const firstG = statuses2.indexOf("G");
    const lastY = statuses2.lastIndexOf("Y");
    if (firstG !== -1 && lastY !== -1) {
      expect(lastY).toBeLessThan(firstG);
    }

    // Each group should be alphabetical
    expect(yellows2.map((r) => r.letter)).toEqual([...yellows2.map((r) => r.letter)].sort());
    expect(greys2.map((r) => r.letter)).toEqual([...greys2.map((r) => r.letter)].sort());
  });
});
