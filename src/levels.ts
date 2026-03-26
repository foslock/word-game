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
  {
    id: 6,
    themeWord: "WINTER",
    words: [
      {
        word: "COLD",
        relation: "Cold temperatures define the harsh grip of winter.",
      },
      {
        word: "FROST",
        relation: "Frost coats every surface in a delicate layer of winter ice.",
      },
      {
        word: "FREEZE",
        relation: "Lakes and rivers freeze solid during the depths of winter.",
      },
    ],
  },
  {
    id: 7,
    themeWord: "SUMMER",
    words: [
      {
        word: "WARM",
        relation: "Warm days and long evenings are the hallmark of summer.",
      },
      {
        word: "SUNNY",
        relation: "Sunny skies stretch endlessly across a perfect summer day.",
      },
      {
        word: "BREEZE",
        relation: "A gentle breeze offers welcome relief on a hot summer afternoon.",
      },
    ],
  },
  {
    id: 8,
    themeWord: "STORM",
    words: [
      {
        word: "GUST",
        relation: "A sudden gust of wind signals the arrival of a storm.",
      },
      {
        word: "CLOUD",
        relation: "Dark clouds gather overhead before a storm unleashes its fury.",
      },
      {
        word: "SQUALL",
        relation: "A squall is a violent burst of wind and rain within a storm.",
      },
    ],
  },
  {
    id: 9,
    themeWord: "CASTLE",
    words: [
      {
        word: "MOAT",
        relation: "A moat surrounds the castle as a water-filled line of defense.",
      },
      {
        word: "TOWER",
        relation: "A tower rises from the castle walls to give sentries a vantage point.",
      },
      {
        word: "THRONE",
        relation: "The throne sits in the great hall where the castle's ruler holds court.",
      },
    ],
  },
  {
    id: 10,
    themeWord: "FOREST",
    words: [
      {
        word: "LEAF",
        relation: "Each leaf contributes to the dense canopy that shades the forest floor.",
      },
      {
        word: "TRUNK",
        relation: "A thick trunk anchors every towering tree that fills the forest.",
      },
      {
        word: "CANOPY",
        relation: "The canopy is the upper layer of branches and leaves roofing the forest.",
      },
    ],
  },
  {
    id: 11,
    themeWord: "SCHOOL",
    words: [
      {
        word: "DESK",
        relation: "A desk is where every student sits to learn at school.",
      },
      {
        word: "CLASS",
        relation: "A class is a group of students gathered together at school.",
      },
      {
        word: "PENCIL",
        relation: "A pencil is the classic writing tool found in every school bag.",
      },
    ],
  },
  {
    id: 12,
    themeWord: "DESERT",
    words: [
      {
        word: "SAND",
        relation: "Sand stretches to the horizon across the vast desert landscape.",
      },
      {
        word: "OASIS",
        relation: "An oasis is a rare pocket of water and life in the desert.",
      },
      {
        word: "CACTUS",
        relation: "A cactus thrives in the desert by storing water in its thick stem.",
      },
    ],
  },
  {
    id: 13,
    themeWord: "COFFEE",
    words: [
      {
        word: "BREW",
        relation: "To brew is the essential act of turning ground beans into coffee.",
      },
      {
        word: "ROAST",
        relation: "The roast level determines the depth and flavour of the coffee.",
      },
      {
        word: "FILTER",
        relation: "A filter separates the grounds from the liquid when making coffee.",
      },
    ],
  },
  {
    id: 14,
    themeWord: "DANCE",
    words: [
      {
        word: "SPIN",
        relation: "A spin is a graceful turn that adds flair to any dance.",
      },
      {
        word: "WALTZ",
        relation: "The waltz is a classic dance performed in sweeping three-quarter time.",
      },
      {
        word: "BALLET",
        relation: "Ballet is a highly disciplined form of dance requiring years of training.",
      },
    ],
  },
  {
    id: 15,
    themeWord: "PAINT",
    words: [
      {
        word: "COAT",
        relation: "A coat of paint transforms a surface with a fresh layer of colour.",
      },
      {
        word: "BRUSH",
        relation: "A brush is the primary tool used to apply paint to a surface.",
      },
      {
        word: "CANVAS",
        relation: "A canvas is the stretched fabric surface on which artists apply paint.",
      },
    ],
  },
  {
    id: 16,
    themeWord: "CHESS",
    words: [
      {
        word: "KING",
        relation: "The king is the most important piece to protect in chess.",
      },
      {
        word: "QUEEN",
        relation: "The queen is the most powerful piece on the chess board.",
      },
      {
        word: "BISHOP",
        relation: "A bishop moves diagonally across the chess board without limit.",
      },
    ],
  },
  {
    id: 17,
    themeWord: "RIVER",
    words: [
      {
        word: "BANK",
        relation: "The bank is the sloping edge of land that borders a river.",
      },
      {
        word: "CREEK",
        relation: "A creek is a small, narrow stream that feeds into a larger river.",
      },
      {
        word: "STREAM",
        relation: "A stream is a flowing body of water that may join a river downstream.",
      },
    ],
  },
  {
    id: 18,
    themeWord: "HORSE",
    words: [
      {
        word: "MANE",
        relation: "A mane is the long hair flowing along a horse's neck.",
      },
      {
        word: "RIDER",
        relation: "A rider is the person who mounts and controls a horse.",
      },
      {
        word: "SADDLE",
        relation: "A saddle is the leather seat strapped onto a horse's back.",
      },
    ],
  },
  {
    id: 19,
    themeWord: "DREAM",
    words: [
      {
        word: "DOZE",
        relation: "A light doze can slip into a vivid dream without warning.",
      },
      {
        word: "SLEEP",
        relation: "Sleep is the state in which dreams naturally occur each night.",
      },
      {
        word: "VISION",
        relation: "A vision can appear in a dream as a vivid and prophetic image.",
      },
    ],
  },
  {
    id: 20,
    themeWord: "LIGHT",
    words: [
      {
        word: "GLOW",
        relation: "A soft glow is the gentle emission of light from a dim source.",
      },
      {
        word: "SHINE",
        relation: "To shine is to emit a steady, bright light for all to see.",
      },
      {
        word: "BRIGHT",
        relation: "Something bright produces or reflects an intense amount of light.",
      },
    ],
  },
  {
    id: 21,
    themeWord: "STONE",
    words: [
      {
        word: "ROCK",
        relation: "A rock is a large, solid mass of stone found in nature.",
      },
      {
        word: "SLATE",
        relation: "Slate is a fine-grained stone once widely used for roofing tiles.",
      },
      {
        word: "GRAVEL",
        relation: "Gravel is a loose collection of small stone fragments.",
      },
    ],
  },
  {
    id: 22,
    themeWord: "CROWN",
    words: [
      {
        word: "GEMS",
        relation: "Gems are the precious stones set into a crown to show its splendour.",
      },
      {
        word: "ROYAL",
        relation: "A royal figure wears the crown as a symbol of sovereign authority.",
      },
      {
        word: "REGENT",
        relation: "A regent rules on behalf of the true bearer of the crown.",
      },
    ],
  },
  {
    id: 23,
    themeWord: "SWORD",
    words: [
      {
        word: "HILT",
        relation: "The hilt is the handle a warrior grips when wielding a sword.",
      },
      {
        word: "BLADE",
        relation: "The blade is the sharp, cutting edge of a sword.",
      },
      {
        word: "COMBAT",
        relation: "Combat is the clash of armed fighters where the sword finds its purpose.",
      },
    ],
  },
  {
    id: 24,
    themeWord: "NIGHT",
    words: [
      {
        word: "DUSK",
        relation: "Dusk is the fading twilight that ushers in the night.",
      },
      {
        word: "LUNAR",
        relation: "Lunar light from the moon illuminates the night sky.",
      },
      {
        word: "SHADOW",
        relation: "Shadows deepen and stretch across the land as night falls.",
      },
    ],
  },
  {
    id: 25,
    themeWord: "HEART",
    words: [
      {
        word: "PUMP",
        relation: "The heart's main job is to pump blood through the body.",
      },
      {
        word: "PULSE",
        relation: "A pulse is the rhythmic beat you feel from the heart.",
      },
      {
        word: "RHYTHM",
        relation: "A steady rhythm of contractions keeps the heart beating in time.",
      },
    ],
  },
  {
    id: 26,
    themeWord: "EARTH",
    words: [
      {
        word: "SOIL",
        relation: "Soil is the fertile layer of earth where plants take root.",
      },
      {
        word: "CRUST",
        relation: "The crust is the thin, rocky outer shell of the earth.",
      },
      {
        word: "GROUND",
        relation: "The ground is the solid surface of the earth beneath our feet.",
      },
    ],
  },
  {
    id: 27,
    themeWord: "SMOKE",
    words: [
      {
        word: "SOOT",
        relation: "Soot is the black residue left behind by rising smoke.",
      },
      {
        word: "FUMES",
        relation: "Fumes are the noxious gases carried upward with smoke.",
      },
      {
        word: "EXHALE",
        relation: "To exhale a puff of smoke is to release it from the lungs.",
      },
    ],
  },
  {
    id: 28,
    themeWord: "CLOCK",
    words: [
      {
        word: "TICK",
        relation: "A tick is the small, steady sound a clock makes each second.",
      },
      {
        word: "ALARM",
        relation: "An alarm is the sound a clock makes to wake you at a set time.",
      },
      {
        word: "MINUTE",
        relation: "A minute is one of the sixty divisions marked on a clock face.",
      },
    ],
  },
  {
    id: 29,
    themeWord: "GHOST",
    words: [
      {
        word: "PALE",
        relation: "A pale figure appearing from thin air is a classic sign of a ghost.",
      },
      {
        word: "HAUNT",
        relation: "To haunt is what a ghost does when it lingers in a place.",
      },
      {
        word: "WRAITH",
        relation: "A wraith is a ghostly apparition of someone no longer living.",
      },
    ],
  },
  {
    id: 30,
    themeWord: "PIRATE",
    words: [
      {
        word: "FLAG",
        relation: "A pirate flies the skull-and-crossbones flag to strike fear at sea.",
      },
      {
        word: "SKULL",
        relation: "The skull is the iconic symbol adorning every pirate's Jolly Roger.",
      },
      {
        word: "BOUNTY",
        relation: "A bounty is the reward posted for the capture of a pirate.",
      },
    ],
  },
  {
    id: 31,
    themeWord: "JUNGLE",
    words: [
      {
        word: "VINE",
        relation: "A vine hangs from the trees and tangles the paths of the jungle.",
      },
      {
        word: "TIGER",
        relation: "A tiger prowls silently through the dense jungle undergrowth.",
      },
      {
        word: "PYTHON",
        relation: "A python coils around branches in the warm, humid jungle.",
      },
    ],
  },
  {
    id: 32,
    themeWord: "SILVER",
    words: [
      {
        word: "COIN",
        relation: "A coin was historically stamped from silver as common currency.",
      },
      {
        word: "SHINY",
        relation: "Polished silver has a shiny, mirror-like surface.",
      },
      {
        word: "PLATED",
        relation: "A plated object has a thin coating of silver over a base metal.",
      },
    ],
  },
  {
    id: 33,
    themeWord: "DRAGON",
    words: [
      {
        word: "WING",
        relation: "A wing carries the dragon through the skies above the kingdom.",
      },
      {
        word: "FLAME",
        relation: "A dragon breathes flame to scorch anything in its path.",
      },
      {
        word: "SCORCH",
        relation: "To scorch the land is a dragon's most fearsome display of power.",
      },
    ],
  },
  {
    id: 34,
    themeWord: "KNIGHT",
    words: [
      {
        word: "HELM",
        relation: "A helm is the heavy metal helmet worn by a knight in battle.",
      },
      {
        word: "LANCE",
        relation: "A lance is the long weapon a knight wields during a jousting charge.",
      },
      {
        word: "SHIELD",
        relation: "A shield protects a knight from blows in the heat of combat.",
      },
    ],
  },
  {
    id: 35,
    themeWord: "BRIDGE",
    words: [
      {
        word: "ARCH",
        relation: "An arch is the curved structural form that supports a bridge.",
      },
      {
        word: "STEEL",
        relation: "Steel is the strong metal used to build modern bridges.",
      },
      {
        word: "GIRDER",
        relation: "A girder is a heavy beam forming the skeleton of a bridge.",
      },
    ],
  },
  {
    id: 36,
    themeWord: "CHURCH",
    words: [
      {
        word: "BELL",
        relation: "A bell rings from the steeple to call people to church.",
      },
      {
        word: "CHOIR",
        relation: "A choir sings hymns during the church service.",
      },
      {
        word: "CHAPEL",
        relation: "A chapel is a small church or a private place of worship.",
      },
    ],
  },
  {
    id: 37,
    themeWord: "PRISON",
    words: [
      {
        word: "CELL",
        relation: "A cell is the small, confined room where a prison holds its inmates.",
      },
      {
        word: "GUARD",
        relation: "A guard patrols the corridors to maintain order in a prison.",
      },
      {
        word: "INMATE",
        relation: "An inmate is a person serving their sentence inside a prison.",
      },
    ],
  },
  {
    id: 38,
    themeWord: "ISLAND",
    words: [
      {
        word: "PALM",
        relation: "A palm tree sways in the tropical wind of a remote island.",
      },
      {
        word: "SHORE",
        relation: "The shore is the sandy edge where waves meet the island.",
      },
      {
        word: "LAGOON",
        relation: "A lagoon is a shallow pool of water sheltered within an island reef.",
      },
    ],
  },
  {
    id: 39,
    themeWord: "MARKET",
    words: [
      {
        word: "SELL",
        relation: "To sell goods is the primary purpose of any market.",
      },
      {
        word: "PRICE",
        relation: "A price tag on every item guides buyers at the market.",
      },
      {
        word: "VENDOR",
        relation: "A vendor is a person who operates a stall at the market.",
      },
    ],
  },
  {
    id: 40,
    themeWord: "HARBOR",
    words: [
      {
        word: "DOCK",
        relation: "A dock is the platform where ships tie up inside the harbor.",
      },
      {
        word: "BERTH",
        relation: "A berth is the designated spot where a vessel rests in the harbor.",
      },
      {
        word: "MARINA",
        relation: "A marina is a harbor designed for mooring pleasure boats.",
      },
    ],
  },
  {
    id: 41,
    themeWord: "WINDOW",
    words: [
      {
        word: "PANE",
        relation: "A pane is the sheet of glass set inside a window frame.",
      },
      {
        word: "GLASS",
        relation: "Glass is the transparent material that fills a window opening.",
      },
      {
        word: "SCREEN",
        relation: "A screen fits over a window to let air in while keeping insects out.",
      },
    ],
  },
  {
    id: 42,
    themeWord: "MIRROR",
    words: [
      {
        word: "GAZE",
        relation: "To gaze into a mirror is to study your own reflection.",
      },
      {
        word: "IMAGE",
        relation: "An image of yourself is reflected back when you face a mirror.",
      },
      {
        word: "VANITY",
        relation: "A vanity is a dressing table fitted with a large mirror.",
      },
    ],
  },
  {
    id: 43,
    themeWord: "BANNER",
    words: [
      {
        word: "FLAG",
        relation: "A flag is a banner flown to represent a nation or cause.",
      },
      {
        word: "CREST",
        relation: "A crest is the heraldic emblem displayed on a banner.",
      },
      {
        word: "EMBLEM",
        relation: "An emblem is the symbolic design that adorns a banner.",
      },
    ],
  },
  {
    id: 44,
    themeWord: "PUPPET",
    words: [
      {
        word: "DOLL",
        relation: "A doll is a figure much like a puppet, crafted to resemble a person.",
      },
      {
        word: "STAGE",
        relation: "A stage is where a puppet comes to life in front of an audience.",
      },
      {
        word: "STRING",
        relation: "A string connects the puppet to the hands of its operator above.",
      },
    ],
  },
  {
    id: 45,
    themeWord: "WIZARD",
    words: [
      {
        word: "WAND",
        relation: "A wand is the slender tool a wizard uses to channel magic.",
      },
      {
        word: "SPELL",
        relation: "A spell is an incantation a wizard recites to work magic.",
      },
      {
        word: "POTION",
        relation: "A potion is a magical liquid brewed by a wizard.",
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
