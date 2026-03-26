/**
 * Tests for guessed-letter display logic.
 *
 * Validates sorting (yellows before greys, alphabetical within groups),
 * duplicate chip counts, and letter retention after all instances are locked.
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

/** Simulate a full submission: evaluate all unsolved words and update the map. */
function submitGuess(
  guesses: string[],
  targets: string[],
  words: WordState[],
  map: Record<string, "present" | "absent">
): void {
  for (let wi = 0; wi < words.length; wi++) {
    if (words[wi].solved) continue;
    const otherUnsolved = targets.filter((_, i) => i !== wi && !words[i].solved);
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

  it("S remains in guessed section even though it is fully locked green", () => {
    const { words, map } = setup();
    const result = getGuessedLetters(map, words, targets);
    const letters = result.map((r) => r.letter);
    expect(letters).toContain("S");
  });

  it("S shows as yellow (present), not grey", () => {
    const { words, map } = setup();
    const result = getGuessedLetters(map, words, targets);
    const sEntry = result.find((r) => r.letter === "S");
    expect(sEntry).toBeDefined();
    expect(sEntry!.status).toBe("present");
  });

  it("L appears only once (player saw 1 yellow L, not 2)", () => {
    const { words, map } = setup();
    const result = getGuessedLetters(map, words, targets);
    const lCount = result.filter((r) => r.letter === "L").length;
    expect(lCount).toBe(1);
  });

  it("O appears twice (player saw 2 yellow Os), not 3", () => {
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
    // All Y's should come before any G
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
    // Yellows: E, L, O, O, R, S, T, W — then grey: V
    expect(letterString(result)).toBe("ELOORSTWV");
    expect(statusString(result)).toBe("YYYYYYYYG");
  });
});

// ---------------------------------------------------------------------------
// Sorting: yellows first, then greys, alphabetical within groups
// ---------------------------------------------------------------------------

describe("Guessed letters sorting", () => {
  it("yellows sort before greys", () => {
    const map: Record<string, "present" | "absent"> = { Z: "present", A: "absent" };
    // Need cells with status to match
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
    // Target BLOOM has O at positions 2,3. Guess YAHOO: O at 3,4 → both yellow.
    // We'll manually set up the state.
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
    // Target has 1 R (TROWEL pos 1). Player guesses 2 R's, both yellow.
    // Should show only 1 R chip.
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
    // Target BLOOM has 2 O's but player only has 1 yellow O cell.
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
// Letter retention: yellow letter stays after all target instances are locked
// ---------------------------------------------------------------------------

describe("Yellow letter retention when fully locked", () => {
  it("keeps a yellow letter in the map when all target instances are locked green", () => {
    // S is in SEED at pos 0 (locked green), and player also saw S as yellow elsewhere
    const targets = ["SEED", "BLOOM", "TROWEL"];
    const words = makeWords(["SEER", "TOWEL", "ROVERS"]);
    const map: Record<string, "present" | "absent"> = {};
    submitGuess(["SEER", "TOWEL", "ROVERS"], targets, words, map);

    expect(map["S"]).toBe("present");
  });

  it("degrades to grey when the letter is also guessed wrong (absent) this round", () => {
    // If a letter is fully locked AND also appears grey in another cell this round,
    // it degrades to "absent".
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
    const letters1 = letterString(result1);
    expect(letters1).toBe("ELOORSTWV");

    // Submission 2: change unsolved cells, resubmit with more O's discovered
    setGuess(words, ["SEER", "PROOF", "TROWEL"]);
    submitGuess(["SEER", "PROOF", "TROWEL"], targets, words, map);

    // TROWEL should be solved now
    expect(words[2].solved).toBe(true);

    const result2 = getGuessedLetters(map, words, targets);
    // Only unsolved word is BLOOM now; guessed letters should reflect that
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
