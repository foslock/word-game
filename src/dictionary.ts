// ---------------------------------------------------------------------------
// Dictionary of valid English words (4–6 letters) for guess validation.
// The word list is loaded from a bundled text file at build time.
// ---------------------------------------------------------------------------

import wordlistRaw from "./wordlist.txt?raw";

const validWords: Set<string> = new Set(
  wordlistRaw
    .split("\n")
    .map((w) => w.trim())
    .filter((w) => w.length > 0)
);

/** Returns true if the given word (case-insensitive) is a valid English word. */
export function isValidWord(word: string): boolean {
  return validWords.has(word.toUpperCase());
}
