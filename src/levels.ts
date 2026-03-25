export interface WordEntry {
  word: string;      // The target word, UPPERCASE
  relation: string;  // One sentence explaining its connection to the theme
}

export interface Level {
  id: number;
  themeWord: string;
  // Three words in order: 4-letter, 5-letter, 6-letter
  words: [WordEntry, WordEntry, WordEntry];
}

export const LEVELS: Level[] = [
  {
    id: 1,
    themeWord: "MUSIC",
    words: [
      {
        word: "BEAT",
        relation: "A beat is the rhythmic pulse that forms the backbone of music.",
      },
      {
        word: "CHORD",
        relation: "A chord is a harmonic combination of notes fundamental to music theory.",
      },
      {
        word: "TREBLE",
        relation:
          "Treble refers to the high-frequency range that gives music its brightness.",
      },
    ],
  },
  {
    id: 2,
    themeWord: "SPACE",
    words: [
      {
        word: "MOON",
        relation: "The moon is Earth's closest companion drifting through space.",
      },
      {
        word: "ORBIT",
        relation: "An orbit is the curved path a body travels through space.",
      },
      {
        word: "SATURN",
        relation:
          "Saturn is a ringed gas giant floating in the outer reaches of space.",
      },
    ],
  },
  {
    id: 3,
    themeWord: "BAKING",
    words: [
      {
        word: "RISE",
        relation: "Dough must rise before baking to achieve a light, airy texture.",
      },
      {
        word: "FLOUR",
        relation:
          "Flour is the foundational dry ingredient in almost all baking recipes.",
      },
      {
        word: "BUTTER",
        relation: "Butter adds the rich flavour and tender crumb that defines classic baking.",
      },
    ],
  },
  {
    id: 4,
    themeWord: "GARDEN",
    words: [
      {
        word: "SEED",
        relation: "A seed is planted to begin the cycle of life in the garden.",
      },
      {
        word: "BLOOM",
        relation:
          "A bloom is the flowering reward of patiently tending the garden.",
      },
      {
        word: "TROWEL",
        relation:
          "A trowel is the handheld digging tool every gardener reaches for first.",
      },
    ],
  },
  {
    id: 5,
    themeWord: "OCEAN",
    words: [
      {
        word: "TIDE",
        relation: "The tide is the daily rise and fall of the ocean driven by the moon.",
      },
      {
        word: "CORAL",
        relation: "Coral reefs are vibrant, living ecosystems hidden beneath the ocean.",
      },
      {
        word: "ANCHOR",
        relation: "An anchor is dropped to the ocean floor to hold a vessel in place.",
      },
    ],
  },
];

/**
 * Pick the level for a given local date.
 * Uses a simple deterministic hash of the date string so the same
 * date always produces the same level, cycling through all levels.
 */
export function getLevelForDate(date: Date): Level {
  const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (Math.imul(31, hash) + key.charCodeAt(i)) | 0;
  }
  const index = Math.abs(hash) % LEVELS.length;
  return LEVELS[index];
}

/** Return today's day number (1-indexed, starting from 2026-01-01). */
export function getDayNumber(date: Date): number {
  const epoch = new Date(2026, 0, 1).getTime();
  const ms = date.getTime() - epoch;
  return Math.max(1, Math.floor(ms / 86400000) + 1);
}
