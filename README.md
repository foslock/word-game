# Theme Words

A daily browser word game where three mystery words are hidden — each one connected to a shared **Theme Word**. Guess all three to reveal the connections.

---

## Repo Contents

```
├── index.html            # App shell (single-page app entry point)
├── package.json          # Project metadata and Vite dev dependency
├── tsconfig.json         # TypeScript compiler configuration
├── RULES.md              # Player-facing game rules
│
└── src/
    ├── main.ts           # Bootstrap: wires the game to the DOM and sets up modals
    ├── levels.ts         # Level definitions and date-to-level selection logic
    ├── storage.ts        # LocalStorage helpers for daily state and all-time stats
    ├── game.ts           # Core game class: rendering, input handling, evaluation, animations
    ├── evaluate.ts       # Cell evaluation logic (green/yellow/grey with cross-word hints)
    ├── dictionary.ts     # Word validation against a built-in word list
    ├── style.css         # Full UI stylesheet (dark theme, mobile-first, responsive)
    │
    └── __tests__/        # Vitest test suite
        ├── evaluate.test.ts
        ├── levels.test.ts
        ├── storage.test.ts
        └── userStories.test.ts
```

---

## Getting Started

```bash
npm install
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

No framework — just Vite + TypeScript + plain DOM APIs.

---

## Adding New Levels

Open `src/levels.ts` and append a new entry to the `LEVELS` array:

```ts
{
  id: 6,
  themeWord: "FIRE",
  words: [
    { word: "COAL",   relation: "Coal is a fuel that glows red in fire." },
    { word: "FLAME",  relation: "A flame is the visible, glowing part of fire." },
    { word: "TINDER", relation: "Tinder is the dry material that catches fire first." },
  ],
},
```

Rules:
- `words[0]` must be exactly **4 letters**
- `words[1]` must be exactly **5 letters**
- `words[2]` must be exactly **6 letters**
- All words should be **uppercase**
- `relation` is one sentence, revealed only when that word is solved

The date → level mapping is a deterministic hash (`getLevelForDate` in `levels.ts`), so the same date always produces the same level and cycles across all available levels.

---

## Architecture Notes

### State

All game state lives in `localStorage` under two keys:

| Key | Contents |
|-----|----------|
| `themewords_daily_v1` | Today's grid state (letters, colours, solved flags, attempt count) |
| `themewords_stats_v1` | All-time stats (games played, win rate, streaks, best score) |

If the stored daily record's date doesn't match today, a fresh record is created automatically at next page load.

### Cell evaluation

Colour assignment follows Wordle rules, extended across three words:

1. **Green** — correct letter in the correct position for this word.
2. **Yellow** — letter exists in *any* of the three target words but is not green for this word.
3. **Grey** — letter is absent from all three target words.

Duplicate-letter handling uses a two-pass algorithm (greens first, then yellows) so the count of yellow/green markings never exceeds the count of that letter in the target.

### Input

Keyboard input is routed through a single off-screen `<input>` element to ensure the mobile software keyboard appears reliably. Cursor position is tracked in JS and painted onto the cell grid via CSS classes.

---

## Browser Support

Modern evergreen browsers (Chrome 90+, Safari 15+, Firefox 90+). Uses `localStorage`, CSS custom properties, and `dvh` units — no polyfills required.
