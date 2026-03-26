import type { CellState } from "./storage.js";

/**
 * Evaluate a single row's cells against a target word.
 *
 * Colour rules:
 *   Green  – correct letter in the correct position (cell is locked).
 *   Yellow – letter appears in the target word OR in any other unsolved word,
 *            but is not in the correct position for this word (cell stays editable).
 *   Grey   – letter is absent from all unsolved target words (cell stays editable).
 *
 * Duplicate-letter handling follows the Wordle two-pass approach:
 *   Pass 1 marks and consumes greens; Pass 2 only awards yellows up to the
 *   remaining (unconsumed) frequency of the letter in the current target.
 *   Letters absent from the current target but present in another unsolved
 *   word are still marked yellow (cross-word hint).
 *
 * @param cells             Current cell states with letters filled in.
 * @param targetWord        The correct answer for this row (UPPERCASE).
 * @param otherUnsolvedWords Other target words that are not yet solved,
 *                          used to determine cross-word yellow hints.
 */
export function evaluateCells(
  cells: CellState[],
  targetWord: string,
  otherUnsolvedWords: string[]
): CellState[] {
  const result: CellState[] = cells.map((c) => ({ ...c }));
  const targetRemaining = targetWord.split("");
  const guessLetters = result.map((c) => c.letter);

  // Pass 1: mark greens and consume those positions
  for (let i = 0; i < guessLetters.length; i++) {
    if (result[i].locked) {
      // Already locked from a previous submission — keep as correct
      result[i].status = "correct";
      targetRemaining[i] = "";
      continue;
    }
    if (guessLetters[i] === targetWord[i]) {
      result[i].status = "correct";
      result[i].locked = true;
      targetRemaining[i] = "";
    }
  }

  // Build a frequency map of letters across other unsolved words for
  // cross-word hints, so we only award as many yellows as there are
  // unguessed occurrences.
  const otherRemaining: Record<string, number> = {};
  for (const w of otherUnsolvedWords) {
    for (const ch of w) {
      otherRemaining[ch] = (otherRemaining[ch] || 0) + 1;
    }
  }

  // Pass 2: for non-green cells, determine yellow vs grey
  for (let i = 0; i < guessLetters.length; i++) {
    if (result[i].status === "correct") continue;

    const letter = guessLetters[i];
    if (!letter) continue;

    // Check remaining (unconsumed) letters in the current target first
    const indexInRemaining = targetRemaining.indexOf(letter);
    if (indexInRemaining !== -1) {
      result[i].status = "present";
      targetRemaining[indexInRemaining] = ""; // consume to prevent double-counting
    } else if ((otherRemaining[letter] || 0) > 0) {
      // Letter exists in another unsolved word — cross-word yellow hint
      result[i].status = "present";
      otherRemaining[letter]--; // consume to prevent over-counting
    } else {
      result[i].status = "absent";
    }
  }

  return result;
}

/**
 * Computes the letters from a word's target that are NOT already accounted
 * for by that word's own evaluation (greens and yellows). These remaining
 * letters are what can contribute cross-word yellow hints to other rows.
 *
 * Without this, a letter that shows yellow in word Y's row would also be
 * counted as a cross-word yellow hint in word X's row — producing a double
 * yellow for a single occurrence of the letter in the puzzle.
 *
 * @param targetWord  The correct answer for this word (UPPERCASE).
 * @param cells       Current cell states with letters filled in.
 * @returns           String of target letters not covered by this word's guess.
 */
export function getCrossWordHintPool(
  targetWord: string,
  cells: CellState[]
): string {
  const guessLetters = cells.map((c) => c.letter);
  const targetRemaining = targetWord.split("");

  // Pass 1: consume greens and pre-locked cells
  for (let i = 0; i < guessLetters.length; i++) {
    if (cells[i].locked || guessLetters[i] === targetWord[i]) {
      targetRemaining[i] = "";
    }
  }

  // Pass 2: consume letters that would be marked yellow in this word's own row
  for (let i = 0; i < guessLetters.length; i++) {
    if (cells[i].locked || guessLetters[i] === targetWord[i]) continue;
    const letter = guessLetters[i];
    if (!letter) continue;
    const idx = targetRemaining.indexOf(letter);
    if (idx !== -1) {
      targetRemaining[idx] = "";
    }
  }

  return targetRemaining.filter((ch) => ch !== "").join("");
}

/**
 * Returns true when every non-locked cell across all unsolved words has a
 * letter, which is the prerequisite for allowing a submission.
 */
export function allFilled(
  words: ReadonlyArray<{ cells: ReadonlyArray<CellState>; solved: boolean }>
): boolean {
  return words.every((ws) => {
    if (ws.solved) return true;
    return ws.cells.every((c) => c.locked || c.letter !== "");
  });
}
