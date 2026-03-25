// ---------------------------------------------------------------------------
// Persistent state types
// ---------------------------------------------------------------------------

export type CellStatus = "empty" | "correct" | "present" | "absent";

export interface CellState {
  letter: string;       // '' when empty
  status: CellStatus;
  locked: boolean;      // true once the cell is confirmed correct
}

export interface WordState {
  cells: CellState[];
  solved: boolean;
  attempts: number;     // number of times this word was submitted
}

export interface DailyRecord {
  date: string;         // "YYYY-MM-DD" local date
  levelId: number;
  words: WordState[];
  completed: boolean;   // all three words solved
  totalAttempts: number;
  completedAt?: number; // epoch ms
}

export interface AllTimeStats {
  gamesPlayed: number;
  gamesCompleted: number;
  totalAttempts: number;
  bestScore?: number;   // fewest attempts to complete a full game
  currentStreak: number;
  bestStreak: number;
  lastCompletedDate?: string;
}

// ---------------------------------------------------------------------------
// Keys
// ---------------------------------------------------------------------------

const DAILY_KEY = "themewords_daily_v1";
const STATS_KEY = "themewords_stats_v1";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getLocalDateString(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// ---------------------------------------------------------------------------
// Daily state
// ---------------------------------------------------------------------------

export function loadDailyRecord(): DailyRecord | null {
  try {
    const raw = localStorage.getItem(DAILY_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as DailyRecord;
  } catch {
    return null;
  }
}

export function saveDailyRecord(record: DailyRecord): void {
  localStorage.setItem(DAILY_KEY, JSON.stringify(record));
}

/** Build a fresh daily record for the given level / date. */
export function createFreshRecord(
  date: string,
  levelId: number,
  wordLengths: number[]
): DailyRecord {
  return {
    date,
    levelId,
    words: wordLengths.map((len) => ({
      cells: Array.from({ length: len }, () => ({
        letter: "",
        status: "empty" as CellStatus,
        locked: false,
      })),
      solved: false,
      attempts: 0,
    })),
    completed: false,
    totalAttempts: 0,
  };
}

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

export function loadStats(): AllTimeStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw)
      return {
        gamesPlayed: 0,
        gamesCompleted: 0,
        totalAttempts: 0,
        currentStreak: 0,
        bestStreak: 0,
      };
    return JSON.parse(raw) as AllTimeStats;
  } catch {
    return {
      gamesPlayed: 0,
      gamesCompleted: 0,
      totalAttempts: 0,
      currentStreak: 0,
      bestStreak: 0,
    };
  }
}

export function saveStats(stats: AllTimeStats): void {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

/** Update stats when a game is completed. */
export function recordCompletion(
  stats: AllTimeStats,
  attempts: number,
  dateStr: string
): AllTimeStats {
  const updated: AllTimeStats = { ...stats };
  updated.gamesPlayed = (stats.gamesPlayed || 0) + 1;
  updated.gamesCompleted = (stats.gamesCompleted || 0) + 1;
  updated.totalAttempts = (stats.totalAttempts || 0) + attempts;

  if (updated.bestScore === undefined || attempts < updated.bestScore) {
    updated.bestScore = attempts;
  }

  // Streak: if last completed was yesterday, increment; otherwise reset to 1
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = getLocalDateString(yesterday);

  if (stats.lastCompletedDate === yesterdayStr || stats.lastCompletedDate === dateStr) {
    updated.currentStreak = (stats.currentStreak || 0) + 1;
  } else {
    updated.currentStreak = 1;
  }
  updated.bestStreak = Math.max(updated.bestStreak || 0, updated.currentStreak);
  updated.lastCompletedDate = dateStr;

  return updated;
}
