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
  {
    id: 46,
    themeWord: "ROCKET",
    words: [
      {
        word: "FUEL",
        relation: "Fuel is the propellant that powers a rocket into orbit.",
      },
      {
        word: "BOOST",
        relation: "A boost from the engines lifts the rocket off the launch pad.",
      },
      {
        word: "LAUNCH",
        relation: "A launch is the dramatic moment a rocket leaves the ground.",
      },
    ],
  },
  {
    id: 47,
    themeWord: "TUNNEL",
    words: [
      {
        word: "BORE",
        relation: "To bore is to drill through rock to carve out a tunnel.",
      },
      {
        word: "SHAFT",
        relation: "A shaft is a vertical passage connected to a tunnel underground.",
      },
      {
        word: "BURROW",
        relation: "A burrow is a small, natural tunnel dug by an animal.",
      },
    ],
  },
  {
    id: 48,
    themeWord: "MAGNET",
    words: [
      {
        word: "PULL",
        relation: "A pull toward metal objects is the invisible force of a magnet.",
      },
      {
        word: "POLAR",
        relation: "Polar refers to the north and south ends of a magnet.",
      },
      {
        word: "CHARGE",
        relation: "Electric charge and magnetism are deeply linked physical forces.",
      },
    ],
  },
  {
    id: 49,
    themeWord: "BASKET",
    words: [
      {
        word: "HOOP",
        relation: "A hoop is the rim through which a basketball drops into the basket.",
      },
      {
        word: "WEAVE",
        relation: "To weave strips of material together is how a basket is made.",
      },
      {
        word: "WICKER",
        relation: "Wicker is the woven material traditionally used to craft a basket.",
      },
    ],
  },
  {
    id: 50,
    themeWord: "COTTON",
    words: [
      {
        word: "BALE",
        relation: "A bale is a large, compressed bundle of harvested cotton.",
      },
      {
        word: "CLOTH",
        relation: "Cloth is the fabric woven from spun cotton fibers.",
      },
      {
        word: "THREAD",
        relation: "Thread is the thin strand of twisted cotton used for sewing.",
      },
    ],
  },
  {
    id: 51,
    themeWord: "LEMON",
    words: [
      {
        word: "PEEL",
        relation: "The peel is the bright yellow outer skin of a lemon.",
      },
      {
        word: "JUICE",
        relation: "Juice is the tart liquid squeezed from inside a lemon.",
      },
      {
        word: "CITRUS",
        relation: "Citrus is the family of fruits to which the lemon belongs.",
      },
    ],
  },
  {
    id: 52,
    themeWord: "WALNUT",
    words: [
      {
        word: "HULL",
        relation: "The hull is the tough green casing surrounding a walnut.",
      },
      {
        word: "SHELL",
        relation: "The shell is the hard, ridged coat you crack to reach a walnut.",
      },
      {
        word: "KERNEL",
        relation: "The kernel is the edible meat found inside the walnut shell.",
      },
    ],
  },
  {
    id: 53,
    themeWord: "PEPPER",
    words: [
      {
        word: "MILD",
        relation: "Mild describes a pepper with gentle heat and no sharp bite.",
      },
      {
        word: "SPICY",
        relation: "Spicy is the fiery sensation a hot pepper delivers to the palate.",
      },
      {
        word: "GROUND",
        relation: "Ground pepper is the powdered form used to season dishes.",
      },
    ],
  },
  {
    id: 54,
    themeWord: "FALCON",
    words: [
      {
        word: "BEAK",
        relation: "A sharp, hooked beak helps the falcon tear into its prey.",
      },
      {
        word: "SWOOP",
        relation: "A falcon will swoop at tremendous speed to catch its target.",
      },
      {
        word: "TALONS",
        relation: "Talons are the powerful, curved claws a falcon uses to grip prey.",
      },
    ],
  },
  {
    id: 55,
    themeWord: "RABBIT",
    words: [
      {
        word: "EARS",
        relation: "Long ears help a rabbit detect predators from a great distance.",
      },
      {
        word: "HUTCH",
        relation: "A hutch is the wooden enclosure used to house a pet rabbit.",
      },
      {
        word: "WARREN",
        relation: "A warren is a network of underground tunnels where rabbits live.",
      },
    ],
  },
  {
    id: 56,
    themeWord: "SPIDER",
    words: [
      {
        word: "SILK",
        relation: "Silk is the strong, fine material a spider spins into webs.",
      },
      {
        word: "CRAWL",
        relation: "To crawl across surfaces is how a spider moves on its eight legs.",
      },
      {
        word: "COBWEB",
        relation: "A cobweb is the dusty, abandoned web of a spider.",
      },
    ],
  },
  {
    id: 57,
    themeWord: "WHALE",
    words: [
      {
        word: "DIVE",
        relation: "A deep dive takes the whale far beneath the ocean surface.",
      },
      {
        word: "SPOUT",
        relation: "A spout of mist erupts when a whale exhales at the surface.",
      },
      {
        word: "BALEEN",
        relation: "Baleen plates filter tiny prey from seawater inside the whale's mouth.",
      },
    ],
  },
  {
    id: 58,
    themeWord: "TURTLE",
    words: [
      {
        word: "SLOW",
        relation: "A slow, steady pace is the trademark of the turtle on land.",
      },
      {
        word: "MARSH",
        relation: "A marsh is a wetland habitat favored by many freshwater turtles.",
      },
      {
        word: "MARINE",
        relation: "Marine turtles travel vast distances across the open ocean.",
      },
    ],
  },
  {
    id: 59,
    themeWord: "MONKEY",
    words: [
      {
        word: "HANG",
        relation: "To hang from branches by their tails is a skill many monkeys share.",
      },
      {
        word: "CLIMB",
        relation: "To climb nimbly through the treetops is second nature to a monkey.",
      },
      {
        word: "BANANA",
        relation: "A banana is the fruit most famously associated with monkeys.",
      },
    ],
  },
  {
    id: 60,
    themeWord: "SALMON",
    words: [
      {
        word: "SWIM",
        relation: "To swim upstream against the current is the salmon's epic journey.",
      },
      {
        word: "SPAWN",
        relation: "To spawn is the act of laying eggs that drives the salmon home.",
      },
      {
        word: "FILLET",
        relation: "A fillet is a boneless cut of salmon prepared for cooking.",
      },
    ],
  },
  {
    id: 61,
    themeWord: "INSECT",
    words: [
      {
        word: "BUZZ",
        relation: "A buzz is the vibrating sound many flying insects produce.",
      },
      {
        word: "LARVA",
        relation: "A larva is the early life stage of an insect before it transforms.",
      },
      {
        word: "BEETLE",
        relation: "A beetle is the most species-rich order of insect on Earth.",
      },
    ],
  },
  {
    id: 62,
    themeWord: "EAGLE",
    words: [
      {
        word: "SOAR",
        relation: "To soar on rising thermals is how an eagle covers great distances.",
      },
      {
        word: "TALON",
        relation: "A talon is the razor-sharp claw an eagle uses to seize prey.",
      },
      {
        word: "RAPTOR",
        relation: "A raptor is a bird of prey, and the eagle is among the largest.",
      },
    ],
  },
  {
    id: 63,
    themeWord: "SNAKE",
    words: [
      {
        word: "FANG",
        relation: "A fang is the hollow tooth through which a snake delivers venom.",
      },
      {
        word: "VENOM",
        relation: "Venom is the toxic substance a snake injects with its bite.",
      },
      {
        word: "SCALES",
        relation: "Scales are the overlapping plates that cover a snake's body.",
      },
    ],
  },
  {
    id: 64,
    themeWord: "TIGER",
    words: [
      {
        word: "CLAW",
        relation: "A claw is the retractable weapon on each of the tiger's paws.",
      },
      {
        word: "PROWL",
        relation: "To prowl silently through the grass is how a tiger stalks prey.",
      },
      {
        word: "STRIPE",
        relation: "A stripe pattern camouflages the tiger among tall grasses.",
      },
    ],
  },
  {
    id: 65,
    themeWord: "SHARK",
    words: [
      {
        word: "BITE",
        relation: "A bite from rows of razor teeth makes the shark a feared predator.",
      },
      {
        word: "TEETH",
        relation: "Teeth are constantly replaced throughout a shark's lifetime.",
      },
      {
        word: "DORSAL",
        relation: "The dorsal fin cutting through the water is the shark's iconic silhouette.",
      },
    ],
  },
  {
    id: 66,
    themeWord: "LIZARD",
    words: [
      {
        word: "TAIL",
        relation: "A tail can be shed and regrown by many species of lizard.",
      },
      {
        word: "SCALE",
        relation: "Dry, overlapping scales cover the body of every lizard.",
      },
      {
        word: "IGUANA",
        relation: "An iguana is a large, herbivorous lizard found in tropical regions.",
      },
    ],
  },
  {
    id: 67,
    themeWord: "BEAVER",
    words: [
      {
        word: "GNAW",
        relation: "To gnaw through tree trunks is how the beaver harvests building material.",
      },
      {
        word: "LODGE",
        relation: "A lodge is the dome-shaped home a beaver builds in the water.",
      },
      {
        word: "TIMBER",
        relation: "Timber is the wood a beaver fells to construct its dam.",
      },
    ],
  },
  {
    id: 68,
    themeWord: "PARROT",
    words: [
      {
        word: "COPY",
        relation: "To copy human speech is the parrot's most celebrated talent.",
      },
      {
        word: "MIMIC",
        relation: "To mimic sounds and voices is second nature to a clever parrot.",
      },
      {
        word: "PLUMES",
        relation: "Vivid plumes of colour make the parrot one of the showiest birds.",
      },
    ],
  },
  {
    id: 69,
    themeWord: "CANDLE",
    words: [
      {
        word: "WICK",
        relation: "The wick is the cord at the centre of a candle that carries the flame.",
      },
      {
        word: "FLAME",
        relation: "A flame dances at the tip of a lit candle.",
      },
      {
        word: "MELTED",
        relation: "Melted wax pools at the base of a burning candle.",
      },
    ],
  },
  {
    id: 70,
    themeWord: "FABRIC",
    words: [
      {
        word: "LOOM",
        relation: "A loom is the frame on which fabric is woven thread by thread.",
      },
      {
        word: "SATIN",
        relation: "Satin is a glossy, smooth fabric used for fine garments.",
      },
      {
        word: "STITCH",
        relation: "A stitch is a single loop of thread that joins pieces of fabric.",
      },
    ],
  },
  {
    id: 71,
    themeWord: "BOTTLE",
    words: [
      {
        word: "CORK",
        relation: "A cork is pressed into the neck of a bottle to seal it shut.",
      },
      {
        word: "LABEL",
        relation: "A label is the printed paper wrapped around a bottle to identify it.",
      },
      {
        word: "CARTON",
        relation: "A carton is the box used to ship and protect a case of bottles.",
      },
    ],
  },
  {
    id: 72,
    themeWord: "CAMERA",
    words: [
      {
        word: "LENS",
        relation: "A lens focuses light onto the sensor inside a camera.",
      },
      {
        word: "FOCUS",
        relation: "To focus is to adjust the camera so the subject appears sharp.",
      },
      {
        word: "TRIPOD",
        relation: "A tripod is the three-legged stand that holds a camera steady.",
      },
    ],
  },
  {
    id: 73,
    themeWord: "ANCHOR",
    words: [
      {
        word: "ROPE",
        relation: "A rope connects the anchor to the ship above.",
      },
      {
        word: "CHAIN",
        relation: "A chain links the anchor to the ship and bears the load.",
      },
      {
        word: "VESSEL",
        relation: "A vessel drops its anchor to hold position in the water.",
      },
    ],
  },
  {
    id: 74,
    themeWord: "AUTUMN",
    words: [
      {
        word: "RAKE",
        relation: "A rake gathers the fallen leaves that carpet lawns each autumn.",
      },
      {
        word: "AMBER",
        relation: "Amber hues colour the landscape as autumn takes hold.",
      },
      {
        word: "LEAVES",
        relation: "Leaves turn brilliant shades of red and gold throughout autumn.",
      },
    ],
  },
  {
    id: 75,
    themeWord: "SPRING",
    words: [
      {
        word: "THAW",
        relation: "A thaw melts the winter snow as spring arrives.",
      },
      {
        word: "CREEK",
        relation: "A creek swells with fresh meltwater each spring.",
      },
      {
        word: "SPROUT",
        relation: "A sprout pushes through the soil as new life returns in spring.",
      },
    ],
  },
  {
    id: 76,
    themeWord: "TROPHY",
    words: [
      {
        word: "GOLD",
        relation: "Gold is the colour that gleams from the surface of a prized trophy.",
      },
      {
        word: "MEDAL",
        relation: "A medal, like a trophy, rewards outstanding achievement.",
      },
      {
        word: "PLAQUE",
        relation: "A plaque is engraved on the base of a trophy to name the winner.",
      },
    ],
  },
  {
    id: 77,
    themeWord: "SOCCER",
    words: [
      {
        word: "GOAL",
        relation: "A goal is scored when the ball crosses the line in soccer.",
      },
      {
        word: "FIELD",
        relation: "The field is the grassy pitch where a soccer match takes place.",
      },
      {
        word: "GOALIE",
        relation: "The goalie is the last defender guarding the net in soccer.",
      },
    ],
  },
  {
    id: 78,
    themeWord: "TENNIS",
    words: [
      {
        word: "LOBE",
        relation: "A lobe shot arcs high over the net in tennis.",
      },
      {
        word: "SERVE",
        relation: "A serve begins every point in a tennis match.",
      },
      {
        word: "RACKET",
        relation: "A racket is the stringed tool used to strike the ball in tennis.",
      },
    ],
  },
  {
    id: 79,
    themeWord: "BOXING",
    words: [
      {
        word: "JABS",
        relation: "Quick jabs are the fundamental punches thrown in boxing.",
      },
      {
        word: "PUNCH",
        relation: "A punch is the core offensive move in boxing.",
      },
      {
        word: "GLOVES",
        relation: "Gloves are the padded hand coverings required in boxing.",
      },
    ],
  },
  {
    id: 80,
    themeWord: "HOCKEY",
    words: [
      {
        word: "PUCK",
        relation: "The puck is the hard rubber disc shot across the ice in hockey.",
      },
      {
        word: "STICK",
        relation: "A stick is the long-handled tool used to control the puck in hockey.",
      },
      {
        word: "FROZEN",
        relation: "A frozen sheet of ice is the surface on which hockey is played.",
      },
    ],
  },
  {
    id: 81,
    themeWord: "SKIING",
    words: [
      {
        word: "HILL",
        relation: "A hill is the snowy slope that every skiing run descends.",
      },
      {
        word: "SLOPE",
        relation: "A slope is the graded terrain rated by difficulty for skiing.",
      },
      {
        word: "MOGULS",
        relation: "Moguls are the bumps carved into a ski slope by repeated turns.",
      },
    ],
  },
  {
    id: 82,
    themeWord: "ARCHER",
    words: [
      {
        word: "AIMS",
        relation: "An archer aims carefully before releasing the bowstring.",
      },
      {
        word: "ARROW",
        relation: "An arrow is the projectile an archer sends toward the target.",
      },
      {
        word: "QUIVER",
        relation: "A quiver is the case an archer wears to carry arrows.",
      },
    ],
  },
  {
    id: 83,
    themeWord: "DONKEY",
    words: [
      {
        word: "HOOF",
        relation: "A hoof is the tough, horny foot that carries a donkey over rough ground.",
      },
      {
        word: "NEIGH",
        relation: "A neigh-like bray is the loud call that makes the donkey unmistakable.",
      },
      {
        word: "BURDEN",
        relation: "A burden is the heavy load a donkey is often asked to carry.",
      },
    ],
  },
  {
    id: 84,
    themeWord: "OSPREY",
    words: [
      {
        word: "NEST",
        relation: "A nest built atop a tall pole is a common home for the osprey.",
      },
      {
        word: "TROUT",
        relation: "A trout snatched from the water is a typical osprey meal.",
      },
      {
        word: "PLUNGE",
        relation: "A plunge feet-first into the water is how an osprey catches fish.",
      },
    ],
  },
  {
    id: 85,
    themeWord: "JAGUAR",
    words: [
      {
        word: "SPOT",
        relation: "A spot pattern known as a rosette marks the jaguar's coat.",
      },
      {
        word: "STALK",
        relation: "To stalk prey through dense brush is the jaguar's hunting style.",
      },
      {
        word: "FELINE",
        relation: "The jaguar is the largest feline in the Americas.",
      },
    ],
  },
  {
    id: 86,
    themeWord: "POLICE",
    words: [
      {
        word: "COPS",
        relation: "Cops is an informal term for police officers on duty.",
      },
      {
        word: "SIREN",
        relation: "A siren wails from the patrol car as police race to the scene.",
      },
      {
        word: "ARREST",
        relation: "An arrest is the act of detaining a suspect by the police.",
      },
    ],
  },
  {
    id: 87,
    themeWord: "HAMMER",
    words: [
      {
        word: "NAIL",
        relation: "A nail is driven into wood with each swing of the hammer.",
      },
      {
        word: "FORGE",
        relation: "A forge is the fiery workshop where a hammer shapes hot metal.",
      },
      {
        word: "SMITHY",
        relation: "A smithy is the place where a hammer rings against the anvil all day.",
      },
    ],
  },
  {
    id: 88,
    themeWord: "SAILOR",
    words: [
      {
        word: "MAST",
        relation: "A mast holds the sails that a sailor relies on for wind power.",
      },
      {
        word: "NAVAL",
        relation: "Naval service is the military branch where many sailors serve.",
      },
      {
        word: "VOYAGE",
        relation: "A voyage is the long journey a sailor undertakes across the sea.",
      },
    ],
  },
  {
    id: 89,
    themeWord: "HUNTER",
    words: [
      {
        word: "TRAP",
        relation: "A trap is a device a hunter sets to capture game.",
      },
      {
        word: "TRACK",
        relation: "To track an animal through the wild is a core hunter skill.",
      },
      {
        word: "QUARRY",
        relation: "The quarry is the animal or bird a hunter is pursuing.",
      },
    ],
  },
  {
    id: 90,
    themeWord: "BARBER",
    words: [
      {
        word: "TRIM",
        relation: "A trim is the quick cut a barber gives to tidy up hair.",
      },
      {
        word: "SHAVE",
        relation: "A close shave with a straight razor is a barber's signature service.",
      },
      {
        word: "LATHER",
        relation: "Lather is the soapy foam a barber applies before shaving.",
      },
    ],
  },
  {
    id: 91,
    themeWord: "FARMER",
    words: [
      {
        word: "PLOW",
        relation: "A plow turns the soil so the farmer can plant a new crop.",
      },
      {
        word: "CROPS",
        relation: "Crops are the plants a farmer grows and harvests each season.",
      },
      {
        word: "BARLEY",
        relation: "Barley is a hardy grain commonly grown by farmers worldwide.",
      },
    ],
  },
  {
    id: 92,
    themeWord: "BUTLER",
    words: [
      {
        word: "TRAY",
        relation: "A tray is carried by the butler to deliver drinks and food.",
      },
      {
        word: "MANOR",
        relation: "A manor is the grand estate where a butler manages the household.",
      },
      {
        word: "FORMAL",
        relation: "Formal attire and manners define the professional butler.",
      },
    ],
  },
  {
    id: 93,
    themeWord: "MINER",
    words: [
      {
        word: "COAL",
        relation: "Coal is the black mineral a miner extracts deep underground.",
      },
      {
        word: "SHAFT",
        relation: "A shaft is the vertical passage a miner descends to reach ore.",
      },
      {
        word: "GROTTO",
        relation: "A grotto is a small cave a miner may discover while digging.",
      },
    ],
  },
  {
    id: 94,
    themeWord: "PILOT",
    words: [
      {
        word: "WING",
        relation: "A wing generates the lift that keeps the pilot's aircraft aloft.",
      },
      {
        word: "RADAR",
        relation: "Radar guides the pilot through poor visibility and crowded skies.",
      },
      {
        word: "RUNWAY",
        relation: "The runway is the strip of tarmac where a pilot lands the plane.",
      },
    ],
  },
  {
    id: 95,
    themeWord: "LAWYER",
    words: [
      {
        word: "CASE",
        relation: "A case is the legal matter a lawyer argues in court.",
      },
      {
        word: "BRIEF",
        relation: "A brief is the written argument a lawyer submits to the judge.",
      },
      {
        word: "RULING",
        relation: "A ruling is the decision handed down after a lawyer presents a case.",
      },
    ],
  },
  {
    id: 96,
    themeWord: "ARTIST",
    words: [
      {
        word: "DRAW",
        relation: "To draw is the fundamental skill every artist develops first.",
      },
      {
        word: "MURAL",
        relation: "A mural is a large painting an artist creates directly on a wall.",
      },
      {
        word: "PASTEL",
        relation: "A pastel is a soft, chalky medium favoured by many artists.",
      },
    ],
  },
  {
    id: 97,
    themeWord: "AUTHOR",
    words: [
      {
        word: "PLOT",
        relation: "A plot is the sequence of events an author crafts into a story.",
      },
      {
        word: "NOVEL",
        relation: "A novel is the long-form work of fiction an author writes.",
      },
      {
        word: "MEMOIR",
        relation: "A memoir is a personal account an author writes from lived experience.",
      },
    ],
  },
  {
    id: 98,
    themeWord: "RANGER",
    words: [
      {
        word: "HIKE",
        relation: "A hike along backcountry paths is guided by the park ranger.",
      },
      {
        word: "SCOUT",
        relation: "To scout the terrain ahead is part of a ranger's daily patrol.",
      },
      {
        word: "PATROL",
        relation: "A patrol is the regular route a ranger walks to monitor the land.",
      },
    ],
  },
  {
    id: 99,
    themeWord: "DOCTOR",
    words: [
      {
        word: "CURE",
        relation: "A cure is the treatment a doctor seeks for every illness.",
      },
      {
        word: "NURSE",
        relation: "A nurse assists the doctor in caring for patients.",
      },
      {
        word: "REMEDY",
        relation: "A remedy is the medicine a doctor prescribes to restore health.",
      },
    ],
  },
  {
    id: 100,
    themeWord: "BANKER",
    words: [
      {
        word: "LOAN",
        relation: "A loan is the credit a banker extends to a borrower.",
      },
      {
        word: "VAULT",
        relation: "A vault is the secure room where a banker stores valuables.",
      },
      {
        word: "PROFIT",
        relation: "Profit is the financial return a banker earns on investments.",
      },
    ],
  },
  {
    id: 101,
    themeWord: "BUDGET",
    words: [
      {
        word: "DEBT",
        relation: "Debt grows when spending exceeds the limits of the budget.",
      },
      {
        word: "AUDIT",
        relation: "An audit reviews the numbers to ensure the budget is accurate.",
      },
      {
        word: "SAVING",
        relation: "Saving is the portion of income set aside within a careful budget.",
      },
    ],
  },
  {
    id: 102,
    themeWord: "RECIPE",
    words: [
      {
        word: "CHEF",
        relation: "A chef follows a recipe to create a perfect dish every time.",
      },
      {
        word: "BLEND",
        relation: "To blend ingredients together is a common step in any recipe.",
      },
      {
        word: "SIMMER",
        relation: "To simmer on low heat is an instruction found in many recipes.",
      },
    ],
  },
  {
    id: 103,
    themeWord: "GUITAR",
    words: [
      {
        word: "PICK",
        relation: "A pick is the small, flat tool used to strum a guitar.",
      },
      {
        word: "CHORD",
        relation: "A chord is a combination of notes played together on a guitar.",
      },
      {
        word: "STRUNG",
        relation: "A freshly strung guitar produces a bright, resonant tone.",
      },
    ],
  },
  {
    id: 104,
    themeWord: "VIOLIN",
    words: [
      {
        word: "BOWS",
        relation: "Bows are drawn across the strings to make a violin sing.",
      },
      {
        word: "CELLO",
        relation: "A cello is the violin's larger, deeper-voiced cousin.",
      },
      {
        word: "STRING",
        relation: "A string vibrates to produce the rich sound of the violin.",
      },
    ],
  },
  {
    id: 105,
    themeWord: "RHYTHM",
    words: [
      {
        word: "DRUM",
        relation: "A drum is the instrument that anchors the rhythm of a band.",
      },
      {
        word: "TEMPO",
        relation: "Tempo is the speed at which a musical rhythm is performed.",
      },
      {
        word: "GROOVE",
        relation: "A groove is the infectious, repeating rhythm that makes people dance.",
      },
    ],
  },
  {
    id: 106,
    themeWord: "POETRY",
    words: [
      {
        word: "POEM",
        relation: "A poem is the individual work a poet creates within the art of poetry.",
      },
      {
        word: "VERSE",
        relation: "A verse is a single stanza or line that forms the body of poetry.",
      },
      {
        word: "SONNET",
        relation: "A sonnet is a fourteen-line form that is a pillar of classical poetry.",
      },
    ],
  },
  {
    id: 107,
    themeWord: "CINEMA",
    words: [
      {
        word: "FILM",
        relation: "A film is the motion picture shown on the big screen at the cinema.",
      },
      {
        word: "SCENE",
        relation: "A scene is a single continuous sequence within a cinema production.",
      },
      {
        word: "HORROR",
        relation: "Horror is a genre of cinema designed to frighten and thrill audiences.",
      },
    ],
  },
  {
    id: 108,
    themeWord: "CIRCUS",
    words: [
      {
        word: "TENT",
        relation: "A tent is the massive canvas structure that houses the circus.",
      },
      {
        word: "CLOWN",
        relation: "A clown entertains the crowd with comedy and antics at the circus.",
      },
      {
        word: "JUGGLE",
        relation: "To juggle objects in the air is a signature circus performance.",
      },
    ],
  },
  {
    id: 109,
    themeWord: "COMEDY",
    words: [
      {
        word: "JOKE",
        relation: "A joke is the basic unit of humour that drives a comedy.",
      },
      {
        word: "LAUGH",
        relation: "A laugh is the joyful response that every comedy aims to provoke.",
      },
      {
        word: "SITCOM",
        relation: "A sitcom is a television comedy set in recurring locations.",
      },
    ],
  },
  {
    id: 110,
    themeWord: "DINING",
    words: [
      {
        word: "FORK",
        relation: "A fork is the pronged utensil placed at every dining setting.",
      },
      {
        word: "PLATE",
        relation: "A plate is the dish on which food is served while dining.",
      },
      {
        word: "NAPKIN",
        relation: "A napkin is the cloth placed on the lap during fine dining.",
      },
    ],
  },
  {
    id: 111,
    themeWord: "PUZZLE",
    words: [
      {
        word: "CLUE",
        relation: "A clue is the hint that leads you closer to solving a puzzle.",
      },
      {
        word: "SOLVE",
        relation: "To solve is to find the answer that completes the puzzle.",
      },
      {
        word: "RIDDLE",
        relation: "A riddle is a verbal puzzle that tests wit and wordplay.",
      },
    ],
  },
  {
    id: 112,
    themeWord: "CANOPY",
    words: [
      {
        word: "RAIN",
        relation: "Rain is intercepted by the canopy before reaching the forest floor.",
      },
      {
        word: "DENSE",
        relation: "Dense layers of leaves form the thick canopy overhead.",
      },
      {
        word: "TROPIC",
        relation: "A tropic rainforest has the richest canopy on Earth.",
      },
    ],
  },
  {
    id: 113,
    themeWord: "MEADOW",
    words: [
      {
        word: "DEER",
        relation: "A deer grazes peacefully in the open meadow at dawn.",
      },
      {
        word: "GRASS",
        relation: "Grass covers every inch of a sunlit meadow.",
      },
      {
        word: "FLOWER",
        relation: "Wildflowers dot the meadow with splashes of colour.",
      },
    ],
  },
  {
    id: 114,
    themeWord: "CANYON",
    words: [
      {
        word: "DEEP",
        relation: "A deep drop from rim to river floor defines the canyon's scale.",
      },
      {
        word: "CLIFF",
        relation: "A cliff forms the sheer rock wall along the edge of a canyon.",
      },
      {
        word: "RAVINE",
        relation: "A ravine is a small, deep canyon cut into the landscape.",
      },
    ],
  },
  {
    id: 115,
    themeWord: "VALLEY",
    words: [
      {
        word: "DALE",
        relation: "A dale is a broad, open valley found in the rolling countryside.",
      },
      {
        word: "BASIN",
        relation: "A basin is the low, bowl-shaped floor of a wide valley.",
      },
      {
        word: "HOLLOW",
        relation: "A hollow is a sheltered depression nestled within a valley.",
      },
    ],
  },
  {
    id: 116,
    themeWord: "SUMMIT",
    words: [
      {
        word: "PEAK",
        relation: "A peak is the pointed top that defines the summit of a mountain.",
      },
      {
        word: "RIDGE",
        relation: "A ridge is the narrow crest that connects summits along a range.",
      },
      {
        word: "ALPINE",
        relation: "Alpine conditions of thin air and cold greet climbers near the summit.",
      },
    ],
  },
  {
    id: 117,
    themeWord: "ICECAP",
    words: [
      {
        word: "MELT",
        relation: "To melt is the fate of an icecap under rising global temperatures.",
      },
      {
        word: "ICIER",
        relation: "Icier conditions closer to the poles sustain the vast icecaps.",
      },
      {
        word: "TUNDRA",
        relation: "Tundra is the frozen landscape that borders the polar icecap.",
      },
    ],
  },
  {
    id: 118,
    themeWord: "CAVERN",
    words: [
      {
        word: "DAMP",
        relation: "Damp, dripping walls are a constant feature inside a cavern.",
      },
      {
        word: "TORCH",
        relation: "A torch is needed to light the pitch-black depths of a cavern.",
      },
      {
        word: "GROTTO",
        relation: "A grotto is a small, picturesque cavern often near the sea.",
      },
    ],
  },
  {
    id: 119,
    themeWord: "CRATER",
    words: [
      {
        word: "LAVA",
        relation: "Lava fills the crater of a volcano during an eruption.",
      },
      {
        word: "ERUPT",
        relation: "To erupt is the violent event that blasts open a volcanic crater.",
      },
      {
        word: "MOLTEN",
        relation: "Molten rock pools at the bottom of an active crater.",
      },
    ],
  },
  {
    id: 120,
    themeWord: "BAMBOO",
    words: [
      {
        word: "REED",
        relation: "A reed is a slender plant similar to the hollow stalks of bamboo.",
      },
      {
        word: "GROVE",
        relation: "A grove of bamboo shoots can spread across an entire hillside.",
      },
      {
        word: "GROWTH",
        relation: "Rapid growth allows bamboo to gain height faster than any other plant.",
      },
    ],
  },
  {
    id: 121,
    themeWord: "PILLOW",
    words: [
      {
        word: "FOAM",
        relation: "Foam is a popular filling that gives a pillow its supportive shape.",
      },
      {
        word: "DOWNY",
        relation: "Downy feathers create the softest, most luxurious type of pillow.",
      },
      {
        word: "FLUFFY",
        relation: "A fluffy pillow is freshly plumped and ready for a good night's rest.",
      },
    ],
  },
  {
    id: 122,
    themeWord: "CLOSET",
    words: [
      {
        word: "HANG",
        relation: "To hang clothes on a rod is the main use of a closet.",
      },
      {
        word: "SHELF",
        relation: "A shelf inside the closet holds folded items and accessories.",
      },
      {
        word: "HANGER",
        relation: "A hanger is the hook-shaped device that keeps clothes neat in a closet.",
      },
    ],
  },
  {
    id: 123,
    themeWord: "LAGOON",
    words: [
      {
        word: "CALM",
        relation: "Calm, sheltered water is the defining quality of a lagoon.",
      },
      {
        word: "ATOLL",
        relation: "An atoll is a ring-shaped reef that encloses a central lagoon.",
      },
      {
        word: "SHOALS",
        relation: "Shoals of fish thrive in the shallow, warm waters of a lagoon.",
      },
    ],
  },
  {
    id: 124,
    themeWord: "MARBLE",
    words: [
      {
        word: "SLAB",
        relation: "A slab of marble is cut and polished for countertops and floors.",
      },
      {
        word: "VEINS",
        relation: "Veins of colour streak through marble, making each piece unique.",
      },
      {
        word: "QUARRY",
        relation: "A quarry is the open pit from which blocks of marble are extracted.",
      },
    ],
  },
  {
    id: 125,
    themeWord: "CEMENT",
    words: [
      {
        word: "POUR",
        relation: "To pour wet cement into forms is the first step of laying a foundation.",
      },
      {
        word: "MIXER",
        relation: "A mixer is the revolving drum that keeps cement from hardening too soon.",
      },
      {
        word: "GRAVEL",
        relation: "Gravel is blended with cement to produce strong concrete.",
      },
    ],
  },
  {
    id: 126,
    themeWord: "LUMBER",
    words: [
      {
        word: "LOGS",
        relation: "Logs are the raw tree trunks processed at a lumber mill.",
      },
      {
        word: "PLANK",
        relation: "A plank is a flat, sawn board produced from lumber.",
      },
      {
        word: "SAWING",
        relation: "Sawing is the act of cutting lumber into usable boards.",
      },
    ],
  },
  {
    id: 127,
    themeWord: "THRONE",
    words: [
      {
        word: "DUKE",
        relation: "A duke is a nobleman who owes allegiance to the throne.",
      },
      {
        word: "REIGN",
        relation: "A reign is the period during which a monarch occupies the throne.",
      },
      {
        word: "CROWNS",
        relation: "Crowns rest upon the heads of those who claim the throne.",
      },
    ],
  },
  {
    id: 128,
    themeWord: "EMPIRE",
    words: [
      {
        word: "ARMY",
        relation: "An army enforces the will of the empire across its territories.",
      },
      {
        word: "REALM",
        relation: "A realm is a kingdom or domain within a vast empire.",
      },
      {
        word: "COLONY",
        relation: "A colony is a distant territory governed by the empire.",
      },
    ],
  },
  {
    id: 129,
    themeWord: "TREATY",
    words: [
      {
        word: "PACT",
        relation: "A pact is a binding agreement, much like a treaty between nations.",
      },
      {
        word: "TRUCE",
        relation: "A truce is the ceasefire that often precedes a formal treaty.",
      },
      {
        word: "ACCORD",
        relation: "An accord is a mutual understanding reached through treaty negotiations.",
      },
    ],
  },
  {
    id: 130,
    themeWord: "BATTLE",
    words: [
      {
        word: "TANK",
        relation: "A tank is the armored vehicle that dominates the modern battle field.",
      },
      {
        word: "SIEGE",
        relation: "A siege is a prolonged battle to capture a fortified position.",
      },
      {
        word: "COMBAT",
        relation: "Combat is the direct, armed clash at the heart of every battle.",
      },
    ],
  },
  {
    id: 131,
    themeWord: "SHIELD",
    words: [
      {
        word: "DENT",
        relation: "A dent in the metal shows where a blow struck the shield.",
      },
      {
        word: "ARMOR",
        relation: "Armor and a shield together form a warrior's full defense.",
      },
      {
        word: "BUCKLE",
        relation: "A buckle fastens the shield's strap securely to the forearm.",
      },
    ],
  },
  {
    id: 132,
    themeWord: "CANNON",
    words: [
      {
        word: "BOOM",
        relation: "A boom echoes across the field when a cannon fires.",
      },
      {
        word: "SHELL",
        relation: "A shell is the explosive projectile launched from a cannon.",
      },
      {
        word: "VOLLEY",
        relation: "A volley is a simultaneous firing of many cannons at once.",
      },
    ],
  },
  {
    id: 133,
    themeWord: "PIGEON",
    words: [
      {
        word: "COOP",
        relation: "A coop is the small shelter built to house pigeons.",
      },
      {
        word: "ROOST",
        relation: "To roost on ledges and rooftops is typical pigeon behaviour.",
      },
      {
        word: "HOMING",
        relation: "A homing instinct lets trained pigeons find their way back from afar.",
      },
    ],
  },
  {
    id: 134,
    themeWord: "FERRET",
    words: [
      {
        word: "BURR",
        relation: "A burr caught in the fur is a common nuisance for a ferret.",
      },
      {
        word: "SCENT",
        relation: "A strong, musky scent is a well-known trait of the ferret.",
      },
      {
        word: "TUNNEL",
        relation: "A tunnel or tube is the favourite playground of a pet ferret.",
      },
    ],
  },
  {
    id: 135,
    themeWord: "OYSTER",
    words: [
      {
        word: "OPEN",
        relation: "To open an oyster requires a sturdy knife and a firm grip.",
      },
      {
        word: "PEARL",
        relation: "A pearl forms inside an oyster as a response to an irritant.",
      },
      {
        word: "SHUCKS",
        relation: "To shuck oysters is to pry them open and remove the meat.",
      },
    ],
  },
  {
    id: 136,
    themeWord: "FOSSIL",
    words: [
      {
        word: "BONE",
        relation: "A bone preserved in rock for millions of years becomes a fossil.",
      },
      {
        word: "AMBER",
        relation: "Amber can trap insects and preserve them as perfect fossils.",
      },
      {
        word: "STRATA",
        relation: "Strata are the rock layers in which fossils are discovered.",
      },
    ],
  },
  {
    id: 137,
    themeWord: "ENZYME",
    words: [
      {
        word: "CELL",
        relation: "Every cell in the body relies on enzymes to carry out reactions.",
      },
      {
        word: "YEAST",
        relation: "Yeast produces enzymes that ferment sugars into alcohol.",
      },
      {
        word: "LIPASE",
        relation: "Lipase is an enzyme that breaks down fats during digestion.",
      },
    ],
  },
  {
    id: 138,
    themeWord: "NEURON",
    words: [
      {
        word: "AXON",
        relation: "An axon is the long fiber that carries signals away from a neuron.",
      },
      {
        word: "BRAIN",
        relation: "The brain contains billions of neurons forming vast networks.",
      },
      {
        word: "CORTEX",
        relation: "The cortex is the outer brain layer packed with neurons.",
      },
    ],
  },
  {
    id: 139,
    themeWord: "PHOTON",
    words: [
      {
        word: "BEAM",
        relation: "A beam of light is a stream of countless photons.",
      },
      {
        word: "LIGHT",
        relation: "Light is the visible energy carried by photons.",
      },
      {
        word: "PRISMS",
        relation: "Prisms split photons of white light into a rainbow of colours.",
      },
    ],
  },
  {
    id: 140,
    themeWord: "CARBON",
    words: [
      {
        word: "ATOM",
        relation: "The carbon atom is the essential building block of organic chemistry.",
      },
      {
        word: "FIBER",
        relation: "Carbon fiber is an extremely strong material used in aerospace.",
      },
      {
        word: "BONDED",
        relation: "Bonded carbon atoms form structures from diamond to graphite.",
      },
    ],
  },
  {
    id: 141,
    themeWord: "COPPER",
    words: [
      {
        word: "WIRE",
        relation: "Wire made of copper carries electricity through homes and devices.",
      },
      {
        word: "ALLOY",
        relation: "An alloy like bronze is created by mixing copper with tin.",
      },
      {
        word: "PATINA",
        relation: "A green patina forms on copper surfaces exposed to the elements.",
      },
    ],
  },
  {
    id: 142,
    themeWord: "OXYGEN",
    words: [
      {
        word: "LUNG",
        relation: "The lung is the organ that extracts oxygen from the air we breathe.",
      },
      {
        word: "OZONE",
        relation: "Ozone is a molecule made of three oxygen atoms that shields the Earth.",
      },
      {
        word: "BREATH",
        relation: "Every breath delivers a fresh supply of oxygen to the body.",
      },
    ],
  },
  {
    id: 143,
    themeWord: "PRISM",
    words: [
      {
        word: "RAYS",
        relation: "Rays of white light enter a prism and emerge as a spectrum.",
      },
      {
        word: "COLOR",
        relation: "Each color of the rainbow is separated by passing light through a prism.",
      },
      {
        word: "OPTICS",
        relation: "Optics is the branch of physics that explains how a prism bends light.",
      },
    ],
  },
  {
    id: 144,
    themeWord: "QUARTZ",
    words: [
      {
        word: "GEMS",
        relation: "Gems like amethyst and citrine are coloured varieties of quartz.",
      },
      {
        word: "CLEAR",
        relation: "Clear, transparent quartz is sometimes called rock crystal.",
      },
      {
        word: "SILICA",
        relation: "Silica is the mineral compound that makes up quartz.",
      },
    ],
  },
  {
    id: 145,
    themeWord: "PLASMA",
    words: [
      {
        word: "IONS",
        relation: "Ions are the charged particles that make up a plasma.",
      },
      {
        word: "SOLAR",
        relation: "Solar flares release vast plumes of superheated plasma.",
      },
      {
        word: "HEATED",
        relation: "Heated gas becomes plasma when its atoms lose electrons.",
      },
    ],
  },
  {
    id: 146,
    themeWord: "HEALTH",
    words: [
      {
        word: "ACHE",
        relation: "An ache is a persistent pain that signals declining health.",
      },
      {
        word: "TONIC",
        relation: "A tonic is a restorative drink believed to boost health.",
      },
      {
        word: "CLINIC",
        relation: "A clinic is a facility where people go to maintain their health.",
      },
    ],
  },
  {
    id: 147,
    themeWord: "MUSCLE",
    words: [
      {
        word: "FLEX",
        relation: "To flex is to contract and tighten a muscle.",
      },
      {
        word: "BICEP",
        relation: "The bicep is the prominent muscle on the front of the upper arm.",
      },
      {
        word: "STRAIN",
        relation: "A strain is an injury caused by overstretching a muscle.",
      },
    ],
  },
  {
    id: 148,
    themeWord: "VISION",
    words: [
      {
        word: "BLUR",
        relation: "A blur is the loss of sharpness that impairs vision.",
      },
      {
        word: "SIGHT",
        relation: "Sight is the sense most closely associated with vision.",
      },
      {
        word: "RETINA",
        relation: "The retina is the layer at the back of the eye that enables vision.",
      },
    ],
  },
  {
    id: 149,
    themeWord: "TONGUE",
    words: [
      {
        word: "TANG",
        relation: "A tang is a sharp, biting flavour detected by the tongue.",
      },
      {
        word: "TASTE",
        relation: "Taste is the sense carried by receptors on the tongue.",
      },
      {
        word: "PALATE",
        relation: "The palate works with the tongue to perceive complex flavours.",
      },
    ],
  },
  {
    id: 150,
    themeWord: "SPIRIT",
    words: [
      {
        word: "AURA",
        relation: "An aura is the subtle energy field said to surround a spirit.",
      },
      {
        word: "GHOST",
        relation: "A ghost is a spirit that lingers in the world of the living.",
      },
      {
        word: "SEANCE",
        relation: "A seance is a gathering held to contact spirits of the departed.",
      },
    ],
  },
  {
    id: 151,
    themeWord: "WEALTH",
    words: [
      {
        word: "CASH",
        relation: "Cash is the most liquid form of personal wealth.",
      },
      {
        word: "PURSE",
        relation: "A purse holds the coins and notes that represent everyday wealth.",
      },
      {
        word: "RICHES",
        relation: "Riches describe an abundance of wealth and valuable possessions.",
      },
    ],
  },
  {
    id: 152,
    themeWord: "BARTER",
    words: [
      {
        word: "SWAP",
        relation: "A swap is a direct exchange of goods at the heart of barter.",
      },
      {
        word: "TRADE",
        relation: "Trade without money is the essence of a barter system.",
      },
      {
        word: "HAGGLE",
        relation: "To haggle over fair value is a key part of bartering.",
      },
    ],
  },
  {
    id: 153,
    themeWord: "LEDGER",
    words: [
      {
        word: "BOOK",
        relation: "A book of accounts is the traditional form of a ledger.",
      },
      {
        word: "DEBIT",
        relation: "A debit is an entry on one side of a ledger recording money owed.",
      },
      {
        word: "RECORD",
        relation: "A record of every transaction is kept inside the ledger.",
      },
    ],
  },
  {
    id: 154,
    themeWord: "INVEST",
    words: [
      {
        word: "BOND",
        relation: "A bond is a fixed-income instrument people invest in for steady returns.",
      },
      {
        word: "YIELD",
        relation: "Yield is the income earned on money you invest.",
      },
      {
        word: "RETURN",
        relation: "A return is the profit or loss realized on an investment.",
      },
    ],
  },
  {
    id: 155,
    themeWord: "PALACE",
    words: [
      {
        word: "HALL",
        relation: "A hall is the grand, echoing room at the heart of a palace.",
      },
      {
        word: "GRAND",
        relation: "Grand architecture and lavish decor define every palace.",
      },
      {
        word: "LAVISH",
        relation: "Lavish furnishings fill the rooms of a royal palace.",
      },
    ],
  },
  {
    id: 156,
    themeWord: "TEMPLE",
    words: [
      {
        word: "PRAY",
        relation: "To pray is the central act of devotion performed at a temple.",
      },
      {
        word: "ALTAR",
        relation: "An altar is the sacred platform at the centre of a temple.",
      },
      {
        word: "SACRED",
        relation: "Sacred rituals and rites take place within the temple walls.",
      },
    ],
  },
  {
    id: 157,
    themeWord: "STATUE",
    words: [
      {
        word: "POSE",
        relation: "A pose is the fixed position captured forever in a statue.",
      },
      {
        word: "STONE",
        relation: "Stone is the enduring material from which many statues are carved.",
      },
      {
        word: "BRONZE",
        relation: "Bronze is a metal alloy commonly cast into public statues.",
      },
    ],
  },
  {
    id: 158,
    themeWord: "BEACON",
    words: [
      {
        word: "GLOW",
        relation: "A glow from the beacon guides travellers through the darkness.",
      },
      {
        word: "GUIDE",
        relation: "To guide ships safely is the primary purpose of a beacon.",
      },
      {
        word: "SIGNAL",
        relation: "A signal from a beacon warns of danger or marks a safe route.",
      },
    ],
  },
  {
    id: 159,
    themeWord: "BORDER",
    words: [
      {
        word: "GATE",
        relation: "A gate controls who passes through the border crossing.",
      },
      {
        word: "FENCE",
        relation: "A fence marks the physical line along a border.",
      },
      {
        word: "PICKET",
        relation: "A picket fence is a classic border between neighbouring properties.",
      },
    ],
  },
  {
    id: 160,
    themeWord: "STABLE",
    words: [
      {
        word: "BARN",
        relation: "A barn often adjoins the stable where horses are kept.",
      },
      {
        word: "HORSE",
        relation: "A horse is fed, groomed, and sheltered inside a stable.",
      },
      {
        word: "CORRAL",
        relation: "A corral is the fenced enclosure next to a stable for exercise.",
      },
    ],
  },
  {
    id: 161,
    themeWord: "KENNEL",
    words: [
      {
        word: "BARK",
        relation: "A bark echoes from the kennel whenever a stranger approaches.",
      },
      {
        word: "LEASH",
        relation: "A leash hangs by the kennel door, ready for the daily walk.",
      },
      {
        word: "CANINE",
        relation: "A canine is the four-legged resident of every kennel.",
      },
    ],
  },
  {
    id: 162,
    themeWord: "BAKERY",
    words: [
      {
        word: "LOAF",
        relation: "A loaf of bread is the staple product of any bakery.",
      },
      {
        word: "DOUGH",
        relation: "Dough is mixed and kneaded fresh each morning at the bakery.",
      },
      {
        word: "PASTRY",
        relation: "Pastry is the flaky, buttery creation showcased in the bakery window.",
      },
    ],
  },
  {
    id: 163,
    themeWord: "CELLAR",
    words: [
      {
        word: "WINE",
        relation: "Wine is stored in cool racks that line the cellar walls.",
      },
      {
        word: "AGING",
        relation: "Aging in a dark cellar allows wine to develop complex flavours.",
      },
      {
        word: "STORED",
        relation: "Stored provisions fill the shelves of a well-stocked cellar.",
      },
    ],
  },
  {
    id: 164,
    themeWord: "PANTRY",
    words: [
      {
        word: "CANS",
        relation: "Cans of food line the shelves of a well-organized pantry.",
      },
      {
        word: "SHELF",
        relation: "A shelf in the pantry holds dry goods and staple ingredients.",
      },
      {
        word: "LARDER",
        relation: "A larder is an old-fashioned word for a cool pantry for perishables.",
      },
    ],
  },
  {
    id: 165,
    themeWord: "GALLEY",
    words: [
      {
        word: "COOK",
        relation: "A cook prepares meals for the crew in the ship's galley.",
      },
      {
        word: "STOVE",
        relation: "A stove is bolted to the floor of the galley to stay put at sea.",
      },
      {
        word: "RATION",
        relation: "A ration is the measured portion of food served from the galley.",
      },
    ],
  },
  {
    id: 166,
    themeWord: "WOOL",
    words: [
      {
        word: "LAMB",
        relation: "A lamb provides the soft fleece that is shorn for wool.",
      },
      {
        word: "SHEAR",
        relation: "To shear a sheep is to clip its coat and collect the wool.",
      },
      {
        word: "FLEECE",
        relation: "A fleece is the entire coat of wool removed in one piece.",
      },
    ],
  },
  {
    id: 167,
    themeWord: "DENIM",
    words: [
      {
        word: "JEAN",
        relation: "A jean is the classic garment tailored from durable denim.",
      },
      {
        word: "RIVET",
        relation: "A rivet reinforces stress points on denim clothing.",
      },
      {
        word: "FADING",
        relation: "Fading gives worn denim its prized, lived-in character.",
      },
    ],
  },
  {
    id: 168,
    themeWord: "SILK",
    words: [
      {
        word: "WORM",
        relation: "A worm spins the fine filament that becomes silk thread.",
      },
      {
        word: "SHEEN",
        relation: "A lustrous sheen is the hallmark of genuine silk fabric.",
      },
      {
        word: "SMOOTH",
        relation: "Smooth to the touch, silk glides effortlessly against the skin.",
      },
    ],
  },
  {
    id: 169,
    themeWord: "NYLON",
    words: [
      {
        word: "KNIT",
        relation: "Knit stockings were among the first consumer products made of nylon.",
      },
      {
        word: "FIBER",
        relation: "A nylon fiber is strong, elastic, and resistant to abrasion.",
      },
      {
        word: "WEAVER",
        relation: "A weaver can produce lightweight, durable cloth from nylon thread.",
      },
    ],
  },
  {
    id: 170,
    themeWord: "SUEDE",
    words: [
      {
        word: "SOFT",
        relation: "Soft, velvety texture is the defining quality of suede.",
      },
      {
        word: "BRUSH",
        relation: "A brush restores the nap and removes dirt from suede.",
      },
      {
        word: "SUPPLE",
        relation: "Supple and flexible, suede drapes beautifully in garments.",
      },
    ],
  },
  {
    id: 171,
    themeWord: "ZIPPER",
    words: [
      {
        word: "PULL",
        relation: "A pull tab is the small handle you grip to open a zipper.",
      },
      {
        word: "CLASP",
        relation: "A clasp at the base locks the two halves of a zipper together.",
      },
      {
        word: "FASTEN",
        relation: "To fasten a garment quickly is the main purpose of a zipper.",
      },
    ],
  },
  {
    id: 172,
    themeWord: "BONNET",
    words: [
      {
        word: "LACE",
        relation: "Lace trim decorates the edges of a traditional bonnet.",
      },
      {
        word: "VISOR",
        relation: "A visor-like brim shades the face from the sun on a wide bonnet.",
      },
      {
        word: "RIBBON",
        relation: "A ribbon ties beneath the chin to hold a bonnet in place.",
      },
    ],
  },
  {
    id: 173,
    themeWord: "JACKET",
    words: [
      {
        word: "COAT",
        relation: "A coat and a jacket both serve to keep the body warm.",
      },
      {
        word: "LAPEL",
        relation: "A lapel is the folded flap on the front of a jacket.",
      },
      {
        word: "BUTTON",
        relation: "A button fastens the front of a jacket closed against the cold.",
      },
    ],
  },
  {
    id: 174,
    themeWord: "BLOUSE",
    words: [
      {
        word: "CUFF",
        relation: "A cuff is the folded band at the end of a blouse sleeve.",
      },
      {
        word: "SKIRT",
        relation: "A skirt is often paired with a blouse for a polished look.",
      },
      {
        word: "COLLAR",
        relation: "A collar frames the neckline of a well-tailored blouse.",
      },
    ],
  },
  {
    id: 175,
    themeWord: "VANITY",
    words: [
      {
        word: "VAIN",
        relation: "A vain person is driven by vanity and self-admiration.",
      },
      {
        word: "PRIDE",
        relation: "Excessive pride in one's appearance is a sign of vanity.",
      },
      {
        word: "ADMIRE",
        relation: "To admire one's own reflection is an act of pure vanity.",
      },
    ],
  },
  {
    id: 176,
    themeWord: "ANGER",
    words: [
      {
        word: "FURY",
        relation: "Fury is anger taken to its most intense extreme.",
      },
      {
        word: "STORM",
        relation: "To storm out of a room is a dramatic display of anger.",
      },
      {
        word: "TEMPER",
        relation: "A temper is the tendency to erupt in sudden anger.",
      },
    ],
  },
  {
    id: 177,
    themeWord: "GRIEF",
    words: [
      {
        word: "WEEP",
        relation: "To weep is the natural release of tears brought on by grief.",
      },
      {
        word: "MOURN",
        relation: "To mourn is to express grief over the loss of someone dear.",
      },
      {
        word: "SORROW",
        relation: "Sorrow is the deep sadness that accompanies prolonged grief.",
      },
    ],
  },
  {
    id: 178,
    themeWord: "TRUST",
    words: [
      {
        word: "BOND",
        relation: "A bond between people is built on mutual trust.",
      },
      {
        word: "FAITH",
        relation: "Faith is the confident belief that underpins trust.",
      },
      {
        word: "HONEST",
        relation: "Honest behaviour is the foundation on which trust is built.",
      },
    ],
  },
  {
    id: 179,
    themeWord: "HONOR",
    words: [
      {
        word: "DUTY",
        relation: "Duty is the obligation one fulfils to uphold personal honor.",
      },
      {
        word: "VALOR",
        relation: "Valor is the courage shown in battle that earns lasting honor.",
      },
      {
        word: "SALUTE",
        relation: "A salute is a gesture of respect that honors a fellow soldier.",
      },
    ],
  },
  {
    id: 180,
    themeWord: "WISDOM",
    words: [
      {
        word: "SAGE",
        relation: "A sage is a person revered for deep wisdom and insight.",
      },
      {
        word: "LEARN",
        relation: "To learn from experience is the surest path to wisdom.",
      },
      {
        word: "SHREWD",
        relation: "A shrewd judgement reflects practical wisdom in action.",
      },
    ],
  },
  {
    id: 181,
    themeWord: "BEAUTY",
    words: [
      {
        word: "FAIR",
        relation: "Fair features have long been celebrated as a mark of beauty.",
      },
      {
        word: "GRACE",
        relation: "Grace in movement is an effortless expression of beauty.",
      },
      {
        word: "ALLURE",
        relation: "Allure is the magnetic quality that draws others toward beauty.",
      },
    ],
  },
  {
    id: 182,
    themeWord: "DESIRE",
    words: [
      {
        word: "WANT",
        relation: "To want something deeply is the simplest form of desire.",
      },
      {
        word: "YEARN",
        relation: "To yearn is to feel a powerful, aching desire for something.",
      },
      {
        word: "FERVOR",
        relation: "Fervor is the intense passion that fuels an overwhelming desire.",
      },
    ],
  },
  {
    id: 183,
    themeWord: "MEMORY",
    words: [
      {
        word: "PAST",
        relation: "The past is the storehouse from which every memory is drawn.",
      },
      {
        word: "VIVID",
        relation: "A vivid memory replays in the mind with striking clarity.",
      },
      {
        word: "RECALL",
        relation: "To recall is to retrieve a memory from the depths of the mind.",
      },
    ],
  },
  {
    id: 184,
    themeWord: "WONDER",
    words: [
      {
        word: "GAPE",
        relation: "To gape open-mouthed is a natural reaction to wonder.",
      },
      {
        word: "AMAZE",
        relation: "To amaze is to fill someone with a sudden sense of wonder.",
      },
      {
        word: "MARVEL",
        relation: "A marvel is something so extraordinary it inspires wonder.",
      },
    ],
  },
  {
    id: 185,
    themeWord: "SORROW",
    words: [
      {
        word: "WAIL",
        relation: "A wail is the mournful cry that gives voice to deep sorrow.",
      },
      {
        word: "TEARS",
        relation: "Tears fall freely when sorrow overwhelms the heart.",
      },
      {
        word: "LAMENT",
        relation: "A lament is a song or poem expressing profound sorrow.",
      },
    ],
  },
  {
    id: 186,
    themeWord: "PEACE",
    words: [
      {
        word: "CALM",
        relation: "Calm is the quiet stillness that prevails during times of peace.",
      },
      {
        word: "QUIET",
        relation: "Quiet settles over the land when peace replaces conflict.",
      },
      {
        word: "SERENE",
        relation: "A serene atmosphere is the hallmark of lasting peace.",
      },
    ],
  },
  {
    id: 187,
    themeWord: "CHAOS",
    words: [
      {
        word: "RIOT",
        relation: "A riot is an eruption of chaos in the streets.",
      },
      {
        word: "HAVOC",
        relation: "Havoc is the widespread destruction that chaos leaves behind.",
      },
      {
        word: "TUMULT",
        relation: "Tumult is the loud confusion and disorder born of chaos.",
      },
    ],
  },
  {
    id: 188,
    themeWord: "DANGER",
    words: [
      {
        word: "RISK",
        relation: "Risk is the chance of harm that comes with any danger.",
      },
      {
        word: "PERIL",
        relation: "Peril is a state of serious and immediate danger.",
      },
      {
        word: "THREAT",
        relation: "A threat is a warning that danger may be near.",
      },
    ],
  },
  {
    id: 189,
    themeWord: "REFUGE",
    words: [
      {
        word: "SAFE",
        relation: "A safe place is exactly what a refuge provides.",
      },
      {
        word: "HAVEN",
        relation: "A haven is a secure refuge from the storm outside.",
      },
      {
        word: "ASYLUM",
        relation: "Asylum is the formal protection offered as refuge from persecution.",
      },
    ],
  },
  {
    id: 190,
    themeWord: "VOYAGE",
    words: [
      {
        word: "SAIL",
        relation: "To sail across the ocean is to embark on a grand voyage.",
      },
      {
        word: "ROUTE",
        relation: "A route is the planned course charted for a voyage.",
      },
      {
        word: "CRUISE",
        relation: "A cruise is a leisure voyage taken aboard a passenger ship.",
      },
    ],
  },
  {
    id: 191,
    themeWord: "SAFARI",
    words: [
      {
        word: "JEEP",
        relation: "A jeep carries tourists across rough terrain on a safari.",
      },
      {
        word: "LIONS",
        relation: "Lions are among the most sought-after sightings on a safari.",
      },
      {
        word: "GUIDED",
        relation: "A guided safari ensures visitors see the best wildlife safely.",
      },
    ],
  },
  {
    id: 192,
    themeWord: "TRAVEL",
    words: [
      {
        word: "PACK",
        relation: "To pack a bag is the first step before any travel begins.",
      },
      {
        word: "HOTEL",
        relation: "A hotel provides lodging for people who travel far from home.",
      },
      {
        word: "ABROAD",
        relation: "Abroad describes travel to a foreign country.",
      },
    ],
  },
  {
    id: 193,
    themeWord: "MUSEUM",
    words: [
      {
        word: "ARTS",
        relation: "Arts and artefacts fill the galleries of a great museum.",
      },
      {
        word: "RELIC",
        relation: "A relic is an ancient object preserved and displayed in a museum.",
      },
      {
        word: "CURATE",
        relation: "To curate is to select and organize the works shown in a museum.",
      },
    ],
  },
  {
    id: 194,
    themeWord: "PARADE",
    words: [
      {
        word: "DRUM",
        relation: "A drum sets the marching beat at the head of a parade.",
      },
      {
        word: "MARCH",
        relation: "To march in formation is the backbone of a parade.",
      },
      {
        word: "FLOATS",
        relation: "Floats are the decorated platforms that roll through a parade.",
      },
    ],
  },
  {
    id: 195,
    themeWord: "TAVERN",
    words: [
      {
        word: "ALES",
        relation: "Ales are the traditional brews served on tap at a tavern.",
      },
      {
        word: "DRINK",
        relation: "To drink with friends is the main reason people visit a tavern.",
      },
      {
        word: "SALOON",
        relation: "A saloon is a rustic tavern found in frontier towns.",
      },
    ],
  },
  {
    id: 196,
    themeWord: "TURNIP",
    words: [
      {
        word: "ROOT",
        relation: "The root is the edible, bulbous part of the turnip plant.",
      },
      {
        word: "PATCH",
        relation: "A patch of turnips grows in neat rows in the garden.",
      },
      {
        word: "PURPLE",
        relation: "Purple skin fading to white is the classic colour of a turnip.",
      },
    ],
  },
  {
    id: 197,
    themeWord: "GEYSER",
    words: [
      {
        word: "VENT",
        relation: "A vent in the earth releases the pressure that feeds a geyser.",
      },
      {
        word: "STEAM",
        relation: "Steam rises in a column when a geyser erupts.",
      },
      {
        word: "EJECTS",
        relation: "A geyser ejects boiling water high into the air.",
      },
    ],
  },
  {
    id: 198,
    themeWord: "MORTAR",
    words: [
      {
        word: "CLAY",
        relation: "Clay is a base ingredient mixed into mortar for binding bricks.",
      },
      {
        word: "BRICK",
        relation: "A brick is held in place by a layer of mortar between courses.",
      },
      {
        word: "PESTLE",
        relation: "A pestle grinds ingredients inside a mortar bowl.",
      },
    ],
  },
  {
    id: 199,
    themeWord: "CRADLE",
    words: [
      {
        word: "BABY",
        relation: "A baby sleeps soundly while rocked in a cradle.",
      },
      {
        word: "SWING",
        relation: "A gentle swing back and forth soothes the child in the cradle.",
      },
      {
        word: "INFANT",
        relation: "An infant is the tiny occupant nestled inside a cradle.",
      },
    ],
  },
  {
    id: 200,
    themeWord: "GALAXY",
    words: [
      {
        word: "STAR",
        relation: "A star is one of billions of luminous bodies within a galaxy.",
      },
      {
        word: "ORBIT",
        relation: "Stars orbit the dense centre of their galaxy.",
      },
      {
        word: "NEBULA",
        relation: "A nebula is a cloud of gas and dust found within a galaxy.",
      },
    ],
  },
  {
    id: 201,
    themeWord: "PLAQUE",
    words: [
      {
        word: "ETCH",
        relation: "To etch words into metal is how a commemorative plaque is made.",
      },
      {
        word: "AWARD",
        relation: "An award is often presented in the form of an engraved plaque.",
      },
      {
        word: "DENTAL",
        relation: "Dental plaque is the sticky film that builds up on teeth.",
      },
    ],
  },
  {
    id: 202,
    themeWord: "WREATH",
    words: [
      {
        word: "PINE",
        relation: "Pine boughs are woven into a traditional holiday wreath.",
      },
      {
        word: "HOLLY",
        relation: "Holly with its red berries is a classic wreath decoration.",
      },
      {
        word: "CIRCLE",
        relation: "A circle of evergreen branches forms the shape of a wreath.",
      },
    ],
  },
  {
    id: 203,
    themeWord: "MOSAIC",
    words: [
      {
        word: "TILE",
        relation: "A tile is the small, coloured piece that makes up a mosaic.",
      },
      {
        word: "GROUT",
        relation: "Grout fills the gaps between tiles in a mosaic.",
      },
      {
        word: "DESIGN",
        relation: "A design emerges as thousands of tiles are placed in a mosaic.",
      },
    ],
  },
  {
    id: 204,
    themeWord: "BRUNCH",
    words: [
      {
        word: "EGGS",
        relation: "Eggs in every style are the centrepiece of a good brunch.",
      },
      {
        word: "TOAST",
        relation: "Toast is served alongside nearly every brunch dish.",
      },
      {
        word: "WAFFLE",
        relation: "A waffle topped with fruit is a beloved brunch favourite.",
      },
    ],
  },
  {
    id: 205,
    themeWord: "SUNDAE",
    words: [
      {
        word: "CONE",
        relation: "A cone is an alternative to a bowl for serving a sundae.",
      },
      {
        word: "SCOOP",
        relation: "A scoop of ice cream is the foundation of every sundae.",
      },
      {
        word: "CHERRY",
        relation: "A cherry on top is the classic finishing touch on a sundae.",
      },
    ],
  },
  {
    id: 206,
    themeWord: "PENCIL",
    words: [
      {
        word: "LEAD",
        relation: "Lead is the graphite core that leaves a mark inside a pencil.",
      },
      {
        word: "ERASE",
        relation: "To erase is to remove the marks a pencil leaves behind.",
      },
      {
        word: "SKETCH",
        relation: "A sketch is a quick drawing made with a pencil.",
      },
    ],
  },
  {
    id: 207,
    themeWord: "CRAYON",
    words: [
      {
        word: "DRAW",
        relation: "To draw bold, colourful pictures is what a crayon is made for.",
      },
      {
        word: "COLOR",
        relation: "A crayon brings colour to the pages of a colouring book.",
      },
      {
        word: "PASTEL",
        relation: "A pastel shade is a soft, muted colour found in many crayon sets.",
      },
    ],
  },
  {
    id: 208,
    themeWord: "ERASER",
    words: [
      {
        word: "MARK",
        relation: "A mark left by pencil is easily removed with an eraser.",
      },
      {
        word: "CHALK",
        relation: "Chalk dust is wiped from a blackboard with a felt eraser.",
      },
      {
        word: "RUBBED",
        relation: "Rubbed across the page, an eraser lifts graphite cleanly away.",
      },
    ],
  },
  {
    id: 209,
    themeWord: "MAGPIE",
    words: [
      {
        word: "NEST",
        relation: "A nest of sticks and mud is where the magpie raises its young.",
      },
      {
        word: "SHINY",
        relation: "Shiny objects are said to catch the curious eye of a magpie.",
      },
      {
        word: "HOARDS",
        relation: "A magpie hoards trinkets and treasures in its hidden stash.",
      },
    ],
  },
  {
    id: 210,
    themeWord: "COYOTE",
    words: [
      {
        word: "HOWL",
        relation: "A howl pierces the night as the coyote calls to its pack.",
      },
      {
        word: "PROWL",
        relation: "To prowl through the scrubland is how a coyote hunts for prey.",
      },
      {
        word: "CRAFTY",
        relation: "Crafty and resourceful, the coyote thrives in many habitats.",
      },
    ],
  },
  {
    id: 211,
    themeWord: "GOBLET",
    words: [
      {
        word: "STEM",
        relation: "A stem is the slender column that supports a goblet's bowl.",
      },
      {
        word: "TOAST",
        relation: "A toast is raised with goblets held high in celebration.",
      },
      {
        word: "FLAGON",
        relation: "A flagon is a large vessel from which a goblet is filled.",
      },
    ],
  },
  {
    id: 212,
    themeWord: "CLOVER",
    words: [
      {
        word: "LEAF",
        relation: "A leaf with three lobes is the recognisable shape of clover.",
      },
      {
        word: "LUCKY",
        relation: "A lucky four-leaf clover is a rare and treasured find.",
      },
      {
        word: "TRIPLE",
        relation: "A triple set of leaflets is the standard form of a clover.",
      },
    ],
  },
  {
    id: 213,
    themeWord: "PEBBLE",
    words: [
      {
        word: "SKIP",
        relation: "To skip a pebble across water is a timeless pastime.",
      },
      {
        word: "ROUND",
        relation: "Round and polished by the current, a river pebble feels smooth.",
      },
      {
        word: "SMOOTH",
        relation: "Smooth surfaces result from centuries of water tumbling a pebble.",
      },
    ],
  },
  {
    id: 214,
    themeWord: "ICICLE",
    words: [
      {
        word: "DRIP",
        relation: "A drip of meltwater runs down the length of a warming icicle.",
      },
      {
        word: "THAWS",
        relation: "An icicle thaws as temperatures rise above freezing.",
      },
      {
        word: "FROZEN",
        relation: "Frozen water takes the tapered shape of a hanging icicle.",
      },
    ],
  },
  {
    id: 215,
    themeWord: "BLAZE",
    words: [
      {
        word: "HEAT",
        relation: "Intense heat radiates outward from a roaring blaze.",
      },
      {
        word: "EMBER",
        relation: "An ember glows among the ashes after the blaze dies down.",
      },
      {
        word: "SCORCH",
        relation: "To scorch the earth is the destructive power of an unchecked blaze.",
      },
    ],
  },
  {
    id: 216,
    themeWord: "COMET",
    words: [
      {
        word: "TAIL",
        relation: "A tail of gas and dust streams behind a comet as it nears the sun.",
      },
      {
        word: "ORBIT",
        relation: "An elliptical orbit brings a comet close to the sun and then far away.",
      },
      {
        word: "SHOWER",
        relation: "A meteor shower occurs when Earth passes through a comet's debris trail.",
      },
    ],
  },
  {
    id: 217,
    themeWord: "LOCKET",
    words: [
      {
        word: "GOLD",
        relation: "Gold is the precious metal from which many lockets are crafted.",
      },
      {
        word: "CHAIN",
        relation: "A chain hangs around the neck to keep a locket close to the heart.",
      },
      {
        word: "HINGED",
        relation: "A hinged cover opens to reveal the tiny photo inside a locket.",
      },
    ],
  },
  {
    id: 218,
    themeWord: "KITTEN",
    words: [
      {
        word: "PURR",
        relation: "A purr is the contented vibration a happy kitten makes.",
      },
      {
        word: "FURRY",
        relation: "Furry and soft, a kitten is irresistible to pet.",
      },
      {
        word: "FELINE",
        relation: "A kitten is a young feline still discovering the world.",
      },
    ],
  },
  {
    id: 219,
    themeWord: "RIBBON",
    words: [
      {
        word: "TIED",
        relation: "Tied in a bow, a ribbon adds elegance to any gift.",
      },
      {
        word: "SATIN",
        relation: "Satin ribbon has a glossy sheen that catches the light.",
      },
      {
        word: "CURLED",
        relation: "Curled with scissors, a ribbon spirals into a festive decoration.",
      },
    ],
  },
  {
    id: 220,
    themeWord: "METEOR",
    words: [
      {
        word: "FALL",
        relation: "A fiery fall through the atmosphere marks the arrival of a meteor.",
      },
      {
        word: "BLAZE",
        relation: "A blaze of light streaks across the sky when a meteor burns up.",
      },
      {
        word: "STREAK",
        relation: "A bright streak is the visible trail left behind by a meteor.",
      },
    ],
  },
  {
    id: 221,
    themeWord: "PADDLE",
    words: [
      {
        word: "OARS",
        relation: "Oars and paddles both propel a boat through the water.",
      },
      {
        word: "CANOE",
        relation: "A canoe is the lightweight craft driven forward by a paddle.",
      },
      {
        word: "KAYAKS",
        relation: "Kayaks are navigated with a double-bladed paddle.",
      },
    ],
  },
  {
    id: 222,
    themeWord: "WALRUS",
    words: [
      {
        word: "TUSK",
        relation: "A tusk is the long, curved tooth that identifies the walrus.",
      },
      {
        word: "IVORY",
        relation: "Ivory from walrus tusks was once highly prized by traders.",
      },
      {
        word: "ARCTIC",
        relation: "Arctic seas and ice floes are the natural home of the walrus.",
      },
    ],
  },
  {
    id: 223,
    themeWord: "SPHINX",
    words: [
      {
        word: "MYTH",
        relation: "Myth surrounds the sphinx as a creature of ancient legend.",
      },
      {
        word: "SANDY",
        relation: "Sandy dunes surround the Great Sphinx on the Giza plateau.",
      },
      {
        word: "RIDDLE",
        relation: "A riddle posed to travellers is the sphinx's famous challenge.",
      },
    ],
  },
  {
    id: 224,
    themeWord: "PICNIC",
    words: [
      {
        word: "ANTS",
        relation: "Ants are the uninvited guests that always find the picnic.",
      },
      {
        word: "GRASS",
        relation: "A blanket spread on the grass is where a picnic begins.",
      },
      {
        word: "BASKET",
        relation: "A basket packed with food is carried to the perfect picnic spot.",
      },
    ],
  },
  {
    id: 225,
    themeWord: "QUICHE",
    words: [
      {
        word: "EGGS",
        relation: "Eggs form the rich, custard filling at the heart of a quiche.",
      },
      {
        word: "CREAM",
        relation: "Cream is blended with eggs to give quiche its silky texture.",
      },
      {
        word: "PASTRY",
        relation: "Pastry forms the crisp, buttery shell that holds a quiche together.",
      },
    ],
  },
  {
    id: 226,
    themeWord: "DONUTS",
    words: [
      {
        word: "RING",
        relation: "A ring shape with a hole in the centre is the classic form of a donut.",
      },
      {
        word: "GLAZE",
        relation: "A sweet glaze coats the surface of a freshly fried donut.",
      },
      {
        word: "BATTER",
        relation: "Batter is the wet dough mixture from which donuts are formed.",
      },
    ],
  },
  {
    id: 227,
    themeWord: "IGLOO",
    words: [
      {
        word: "SNOW",
        relation: "Snow is the building material carved into blocks for an igloo.",
      },
      {
        word: "BLOCK",
        relation: "A block of packed snow is stacked to form the walls of an igloo.",
      },
      {
        word: "FROZEN",
        relation: "Frozen conditions keep the igloo solid and structurally sound.",
      },
    ],
  },
  {
    id: 228,
    themeWord: "SALUTE",
    words: [
      {
        word: "FLAG",
        relation: "A flag is raised while troops stand at attention and salute.",
      },
      {
        word: "TROOP",
        relation: "A troop snaps to attention and delivers a crisp salute.",
      },
      {
        word: "MARINE",
        relation: "A marine renders a sharp salute to a superior officer.",
      },
    ],
  },
  {
    id: 229,
    themeWord: "TURRET",
    words: [
      {
        word: "WALL",
        relation: "A wall supports the turret that rises above the fortress.",
      },
      {
        word: "TOWER",
        relation: "A tower capped with a turret gives defenders an elevated position.",
      },
      {
        word: "GUNNER",
        relation: "A gunner mans the turret to defend the stronghold.",
      },
    ],
  },
  {
    id: 230,
    themeWord: "SONATA",
    words: [
      {
        word: "KEYS",
        relation: "Keys of a piano bring a sonata to life under skilled fingers.",
      },
      {
        word: "PIANO",
        relation: "A piano is the instrument most associated with the classical sonata.",
      },
      {
        word: "MELODY",
        relation: "A melody weaves through the movements of a well-crafted sonata.",
      },
    ],
  },
  {
    id: 231,
    themeWord: "OPERA",
    words: [
      {
        word: "ARIA",
        relation: "An aria is the solo vocal piece that is the highlight of an opera.",
      },
      {
        word: "TENOR",
        relation: "A tenor sings the heroic lead in many a grand opera.",
      },
      {
        word: "SINGER",
        relation: "A singer trained in opera commands both stage and audience.",
      },
    ],
  },
  {
    id: 232,
    themeWord: "FLUTE",
    words: [
      {
        word: "REED",
        relation: "A reed instrument sits beside the flute in the woodwind family.",
      },
      {
        word: "NOTES",
        relation: "Clear, bright notes pour from a well-played flute.",
      },
      {
        word: "WOODEN",
        relation: "Wooden flutes were the original form before metal became standard.",
      },
    ],
  },
  {
    id: 233,
    themeWord: "CHORUS",
    words: [
      {
        word: "LINE",
        relation: "A line of singers stands shoulder to shoulder in the chorus.",
      },
      {
        word: "VOCAL",
        relation: "Vocal harmony is the essence of a well-blended chorus.",
      },
      {
        word: "UNISON",
        relation: "Singing in unison is the simplest and most powerful choral technique.",
      },
    ],
  },
  {
    id: 234,
    themeWord: "BREEZE",
    words: [
      {
        word: "GUST",
        relation: "A gust is a sudden, stronger burst within a gentle breeze.",
      },
      {
        word: "DRIFT",
        relation: "Leaves drift lazily through the air on a light breeze.",
      },
      {
        word: "GENTLE",
        relation: "A gentle breeze cools the skin without disturbing anything.",
      },
    ],
  },
  {
    id: 235,
    themeWord: "BAZAAR",
    words: [
      {
        word: "RUGS",
        relation: "Rugs of every pattern hang on display throughout the bazaar.",
      },
      {
        word: "SPICE",
        relation: "Spice stalls fill the bazaar with rich, exotic aromas.",
      },
      {
        word: "EXOTIC",
        relation: "Exotic goods from distant lands are traded at the bazaar.",
      },
    ],
  },
  {
    id: 236,
    themeWord: "COBALT",
    words: [
      {
        word: "BLUE",
        relation: "Blue is the vivid colour most associated with cobalt pigment.",
      },
      {
        word: "METAL",
        relation: "A metal used in alloys and batteries, cobalt is industrially vital.",
      },
      {
        word: "INDIGO",
        relation: "Indigo and cobalt are both deep blue hues prized by artists.",
      },
    ],
  },
  {
    id: 237,
    themeWord: "FUNGUS",
    words: [
      {
        word: "MOLD",
        relation: "Mold is a common type of fungus that grows on damp surfaces.",
      },
      {
        word: "SPORE",
        relation: "A spore is the tiny reproductive cell by which a fungus spreads.",
      },
      {
        word: "LICHEN",
        relation: "Lichen is a partnership between a fungus and an alga.",
      },
    ],
  },
  {
    id: 238,
    themeWord: "HERMIT",
    words: [
      {
        word: "LONE",
        relation: "A lone figure living apart from society is the image of a hermit.",
      },
      {
        word: "DWELL",
        relation: "To dwell in solitude is the chosen life of a hermit.",
      },
      {
        word: "CABINS",
        relation: "Remote cabins in the wilderness are the typical homes of hermits.",
      },
    ],
  },
  {
    id: 239,
    themeWord: "MINNOW",
    words: [
      {
        word: "FISH",
        relation: "A fish of tiny size, the minnow darts through shallow water.",
      },
      {
        word: "CREEK",
        relation: "A creek is the clear, shallow stream where minnows thrive.",
      },
      {
        word: "DARTED",
        relation: "Minnows darted in silver flashes beneath the surface.",
      },
    ],
  },
  {
    id: 240,
    themeWord: "PICKLE",
    words: [
      {
        word: "DILL",
        relation: "Dill is the herb that gives the classic pickle its signature flavour.",
      },
      {
        word: "CURED",
        relation: "Cured in brine, a cucumber transforms into a crunchy pickle.",
      },
      {
        word: "RELISH",
        relation: "Relish is a chopped pickle condiment served on hot dogs.",
      },
    ],
  },
  {
    id: 241,
    themeWord: "SANDAL",
    words: [
      {
        word: "SOLE",
        relation: "A sole is the flat bottom of a sandal that touches the ground.",
      },
      {
        word: "THONG",
        relation: "A thong is the strap that passes between the toes on a sandal.",
      },
      {
        word: "BUCKLE",
        relation: "A buckle secures the ankle strap on a sturdy sandal.",
      },
    ],
  },
  {
    id: 242,
    themeWord: "CLARET",
    words: [
      {
        word: "WINE",
        relation: "Wine from Bordeaux is traditionally known as claret.",
      },
      {
        word: "GRAPE",
        relation: "A grape variety grown in Bordeaux produces fine claret.",
      },
      {
        word: "MAROON",
        relation: "Maroon is the deep, reddish hue that describes a rich claret.",
      },
    ],
  },
  {
    id: 243,
    themeWord: "LOCKER",
    words: [
      {
        word: "BOLT",
        relation: "A bolt secures the door of a locker against intruders.",
      },
      {
        word: "COMBO",
        relation: "A combo is the numbered sequence that opens a locker's padlock.",
      },
      {
        word: "STORED",
        relation: "Personal belongings are stored safely inside a locker.",
      },
    ],
  },
  {
    id: 244,
    themeWord: "QUIVER",
    words: [
      {
        word: "DART",
        relation: "A dart, like an arrow, can be carried in a quiver.",
      },
      {
        word: "ARROW",
        relation: "An arrow is drawn from the quiver and fitted to the bowstring.",
      },
      {
        word: "SHAKER",
        relation: "To quiver is to shake, and a shaker trembles in the same way.",
      },
    ],
  },
  {
    id: 245,
    themeWord: "RAPTOR",
    words: [
      {
        word: "HAWK",
        relation: "A hawk is a swift and agile raptor that hunts small prey.",
      },
      {
        word: "TALON",
        relation: "A talon is the curved claw that gives a raptor its lethal grip.",
      },
      {
        word: "HUNTER",
        relation: "Every raptor is a born hunter with keen eyesight and speed.",
      },
    ],
  },
  {
    id: 246,
    themeWord: "TUNDRA",
    words: [
      {
        word: "SLED",
        relation: "A sled is the primary mode of transport across the frozen tundra.",
      },
      {
        word: "POLAR",
        relation: "Polar conditions of extreme cold define the tundra landscape.",
      },
      {
        word: "PERMIT",
        relation: "Permafrost beneath the tundra never fully thaws, even in summer.",
      },
    ],
  },
  {
    id: 247,
    themeWord: "VELVET",
    words: [
      {
        word: "SOFT",
        relation: "Soft to the touch, velvet is prized for its luxurious feel.",
      },
      {
        word: "PLUSH",
        relation: "A plush texture with a dense pile is what defines velvet.",
      },
      {
        word: "SWATHE",
        relation: "A swathe of velvet fabric drapes richly over any surface.",
      },
    ],
  },
  {
    id: 248,
    themeWord: "MITTEN",
    words: [
      {
        word: "WOOL",
        relation: "Wool is the warm, knitted material from which mittens are made.",
      },
      {
        word: "THUMB",
        relation: "A thumb compartment is the only separate finger in a mitten.",
      },
      {
        word: "WARMER",
        relation: "A hand warmer tucked inside a mitten fights the bitter cold.",
      },
    ],
  },
  {
    id: 249,
    themeWord: "PONCHO",
    words: [
      {
        word: "CAPE",
        relation: "A cape-like design with an open front defines the poncho.",
      },
      {
        word: "DRAPE",
        relation: "To drape loosely over the shoulders is how a poncho is worn.",
      },
      {
        word: "HOODED",
        relation: "A hooded poncho keeps both body and head dry in the rain.",
      },
    ],
  },
  {
    id: 250,
    themeWord: "BELFRY",
    words: [
      {
        word: "BELL",
        relation: "A bell hangs in the belfry and rings out across the town.",
      },
      {
        word: "SPIRE",
        relation: "A spire rises above the belfry at the top of the church.",
      },
      {
        word: "PARISH",
        relation: "A parish gathers when the belfry bell tolls on Sunday morning.",
      },
    ],
  },
  {
    id: 251,
    themeWord: "THATCH",
    words: [
      {
        word: "ROOF",
        relation: "A roof covered in thatch gives a cottage its rustic charm.",
      },
      {
        word: "STRAW",
        relation: "Straw is the dried plant material bundled to make thatch.",
      },
      {
        word: "RUSTIC",
        relation: "A rustic appearance is the hallmark of a thatched building.",
      },
    ],
  },
  {
    id: 252,
    themeWord: "CIDER",
    words: [
      {
        word: "PULP",
        relation: "Pulp is the crushed apple flesh from which cider is pressed.",
      },
      {
        word: "APPLE",
        relation: "An apple is the fruit that gives cider its sweet, tangy flavour.",
      },
      {
        word: "DRINKS",
        relation: "Cider is among the most popular drinks at autumn festivals.",
      },
    ],
  },
  {
    id: 253,
    themeWord: "AWNING",
    words: [
      {
        word: "FOLD",
        relation: "To fold the awning away protects it during strong winds.",
      },
      {
        word: "SHADE",
        relation: "Shade from the sun is the main purpose of an awning.",
      },
      {
        word: "CANVAS",
        relation: "Canvas is the durable fabric stretched over an awning frame.",
      },
    ],
  },
  {
    id: 254,
    themeWord: "QUARRY",
    words: [
      {
        word: "PICK",
        relation: "A pick breaks loose chunks of stone at the quarry face.",
      },
      {
        word: "MINED",
        relation: "Stone mined from a quarry is used for buildings and roads.",
      },
      {
        word: "GRAVEL",
        relation: "Gravel is a byproduct of crushing rock extracted from a quarry.",
      },
    ],
  },
  {
    id: 255,
    themeWord: "CLINIC",
    words: [
      {
        word: "PILL",
        relation: "A pill is the common form of medicine dispensed at a clinic.",
      },
      {
        word: "NURSE",
        relation: "A nurse greets and tends to patients arriving at the clinic.",
      },
      {
        word: "DOSAGE",
        relation: "The correct dosage is determined by a clinician at the clinic.",
      },
    ],
  },
  {
    id: 256,
    themeWord: "PARLOR",
    words: [
      {
        word: "SOFA",
        relation: "A sofa is the centrepiece of a comfortable parlor.",
      },
      {
        word: "DRAPE",
        relation: "Drapes frame the windows of a well-appointed parlor.",
      },
      {
        word: "LOUNGE",
        relation: "A lounge is another name for a parlor where guests relax.",
      },
    ],
  },
  {
    id: 257,
    themeWord: "GAZEBO",
    words: [
      {
        word: "VINE",
        relation: "A vine climbs the lattice walls of a garden gazebo.",
      },
      {
        word: "SHADE",
        relation: "Shade from the midday sun is what a gazebo provides.",
      },
      {
        word: "GARDEN",
        relation: "A garden is the typical setting for a decorative gazebo.",
      },
    ],
  },
  {
    id: 258,
    themeWord: "OPAL",
    words: [
      {
        word: "GLOW",
        relation: "A glow of shifting colours plays across the surface of an opal.",
      },
      {
        word: "JEWEL",
        relation: "A jewel prized for its iridescence, the opal is truly unique.",
      },
      {
        word: "PRIZED",
        relation: "Prized by collectors, a fine opal can rival a diamond in value.",
      },
    ],
  },
  {
    id: 259,
    themeWord: "PEARL",
    words: [
      {
        word: "DIVE",
        relation: "A dive to the ocean floor is how pearl divers harvest their treasure.",
      },
      {
        word: "SHEEN",
        relation: "A lustrous sheen gives the pearl its timeless elegance.",
      },
      {
        word: "LUSTRE",
        relation: "Lustre is the soft, glowing quality that makes a pearl beautiful.",
      },
    ],
  },
  {
    id: 260,
    themeWord: "RUBY",
    words: [
      {
        word: "RARE",
        relation: "A rare, flawless ruby is among the most valuable gemstones.",
      },
      {
        word: "STONE",
        relation: "A stone of deep crimson, the ruby has been coveted for centuries.",
      },
      {
        word: "FACETS",
        relation: "Facets are the precisely cut surfaces that make a ruby sparkle.",
      },
    ],
  },
  {
    id: 261,
    themeWord: "LYNX",
    words: [
      {
        word: "HUNT",
        relation: "To hunt silently in the snow is the lynx's speciality.",
      },
      {
        word: "STALK",
        relation: "To stalk prey with patience defines the lynx's approach.",
      },
      {
        word: "FELINE",
        relation: "The lynx is a wild feline adapted to cold northern forests.",
      },
    ],
  },
  {
    id: 262,
    themeWord: "BADGER",
    words: [
      {
        word: "SETT",
        relation: "A sett is the underground burrow system where badgers live.",
      },
      {
        word: "CLAWS",
        relation: "Strong claws help the badger dig through hard-packed earth.",
      },
      {
        word: "STRIPE",
        relation: "A bold black-and-white stripe runs along the badger's face.",
      },
    ],
  },
  {
    id: 263,
    themeWord: "ALPACA",
    words: [
      {
        word: "SPIT",
        relation: "To spit when annoyed is a well-known alpaca behaviour.",
      },
      {
        word: "LLAMA",
        relation: "A llama is the alpaca's larger and more commonly used cousin.",
      },
      {
        word: "WOOLEN",
        relation: "Woolen yarn spun from alpaca fiber is prized for its softness.",
      },
    ],
  },
  {
    id: 264,
    themeWord: "NUTMEG",
    words: [
      {
        word: "ZEST",
        relation: "Zest and nutmeg are both warm, aromatic additions to baking.",
      },
      {
        word: "SPICE",
        relation: "A spice grated from a dried seed, nutmeg adds warmth to dishes.",
      },
      {
        word: "GRATER",
        relation: "A grater shaves fine flakes of nutmeg over food and drinks.",
      },
    ],
  },
  {
    id: 265,
    themeWord: "QUILL",
    words: [
      {
        word: "PENS",
        relation: "Before modern pens, the quill was the primary writing instrument.",
      },
      {
        word: "WRITE",
        relation: "To write with a quill requires dipping the nib in ink.",
      },
      {
        word: "PENNED",
        relation: "Great works of literature were penned with a simple quill.",
      },
    ],
  },
  {
    id: 266,
    themeWord: "MANTLE",
    words: [
      {
        word: "ROBE",
        relation: "A robe drapes over the shoulders much like a mantle.",
      },
      {
        word: "CLOAK",
        relation: "A cloak is a mantle-like garment worn for warmth and concealment.",
      },
      {
        word: "DRAPED",
        relation: "Draped over the body, a mantle conveys authority and rank.",
      },
    ],
  },
  {
    id: 267,
    themeWord: "ARMADA",
    words: [
      {
        word: "SHIP",
        relation: "A ship is one vessel among the many that comprise an armada.",
      },
      {
        word: "FLEET",
        relation: "A fleet of warships assembled for battle forms a mighty armada.",
      },
      {
        word: "SAILED",
        relation: "The great armada sailed across the sea to meet the enemy.",
      },
    ],
  },
  {
    id: 268,
    themeWord: "GOBLIN",
    words: [
      {
        word: "CAVE",
        relation: "A cave is the dark, underground lair favoured by goblins.",
      },
      {
        word: "TRICK",
        relation: "A trick is the mischief a goblin plays on unsuspecting travellers.",
      },
      {
        word: "WICKED",
        relation: "Wicked behaviour and cunning schemes are the goblin's trademark.",
      },
    ],
  },
  {
    id: 269,
    themeWord: "TATTOO",
    words: [
      {
        word: "SKIN",
        relation: "Skin is the living canvas on which a tattoo is permanently drawn.",
      },
      {
        word: "INKED",
        relation: "An inked design marks the skin after a tattoo session.",
      },
      {
        word: "NEEDLE",
        relation: "A needle punctures the skin to deposit pigment during a tattoo.",
      },
    ],
  },
  {
    id: 270,
    themeWord: "FIDDLE",
    words: [
      {
        word: "TUNE",
        relation: "A lively tune pours from the strings of a well-played fiddle.",
      },
      {
        word: "BOWED",
        relation: "Bowed strings produce the warm, singing tone of a fiddle.",
      },
      {
        word: "STRING",
        relation: "A string stretched across the bridge gives the fiddle its voice.",
      },
    ],
  },
  {
    id: 271,
    themeWord: "STUCCO",
    words: [
      {
        word: "WALL",
        relation: "A wall coated in stucco has a smooth, finished appearance.",
      },
      {
        word: "CREAM",
        relation: "Cream-coloured stucco is a classic exterior finish in warm climates.",
      },
      {
        word: "RENDER",
        relation: "To render a wall is to apply a coat of stucco over masonry.",
      },
    ],
  },
  {
    id: 272,
    themeWord: "WRENCH",
    words: [
      {
        word: "BOLT",
        relation: "A bolt is the fastener a wrench grips and turns.",
      },
      {
        word: "TWIST",
        relation: "A twist of the wrench tightens or loosens a stubborn nut.",
      },
      {
        word: "SOCKET",
        relation: "A socket fits over a bolt head and attaches to a wrench.",
      },
    ],
  },
  {
    id: 273,
    themeWord: "DAMSEL",
    words: [
      {
        word: "GOWN",
        relation: "A gown of flowing fabric is the classic attire of a damsel.",
      },
      {
        word: "TOWER",
        relation: "A tower is where a damsel in distress awaits rescue in fairy tales.",
      },
      {
        word: "MAIDEN",
        relation: "A maiden is another word for the young damsel of legend.",
      },
    ],
  },
  {
    id: 274,
    themeWord: "GROUSE",
    words: [
      {
        word: "MOOR",
        relation: "A moor is the windswept highland habitat of the red grouse.",
      },
      {
        word: "COVEY",
        relation: "A covey is a small flock of grouse flushed from the heather.",
      },
      {
        word: "FLOCKS",
        relation: "Flocks of grouse gather on the moors during the autumn season.",
      },
    ],
  },
  {
    id: 275,
    themeWord: "MASCOT",
    words: [
      {
        word: "BEAR",
        relation: "A bear is a popular mascot for sports teams and schools.",
      },
      {
        word: "BADGE",
        relation: "A badge bearing the mascot's image is worn by loyal fans.",
      },
      {
        word: "SUITED",
        relation: "A suited performer brings the team mascot to life on game day.",
      },
    ],
  },
  {
    id: 276,
    themeWord: "KIOSK",
    words: [
      {
        word: "SELL",
        relation: "To sell quick snacks and goods is the purpose of a kiosk.",
      },
      {
        word: "BOOTH",
        relation: "A booth is a small, enclosed structure similar to a kiosk.",
      },
      {
        word: "VENDOR",
        relation: "A vendor operates the kiosk and serves customers all day.",
      },
    ],
  },
  {
    id: 277,
    themeWord: "NECTAR",
    words: [
      {
        word: "HIVE",
        relation: "A hive is where bees store the nectar they collect from flowers.",
      },
      {
        word: "SWEET",
        relation: "Sweet and fragrant, nectar is the sugary reward flowers offer.",
      },
      {
        word: "POLLEN",
        relation: "Pollen clings to bees as they sip nectar from each blossom.",
      },
    ],
  },
  {
    id: 278,
    themeWord: "PARCEL",
    words: [
      {
        word: "TAPE",
        relation: "Tape seals the flaps of a parcel before it is shipped.",
      },
      {
        word: "STAMP",
        relation: "A stamp is affixed to a parcel to pay for its postage.",
      },
      {
        word: "POSTED",
        relation: "A posted parcel travels through the mail to its destination.",
      },
    ],
  },
  {
    id: 279,
    themeWord: "GADGET",
    words: [
      {
        word: "CHIP",
        relation: "A chip is the tiny circuit at the heart of every electronic gadget.",
      },
      {
        word: "GIZMO",
        relation: "A gizmo is an informal word for a clever little gadget.",
      },
      {
        word: "DEVICE",
        relation: "A device is the generic term for any useful gadget.",
      },
    ],
  },
  {
    id: 280,
    themeWord: "FIESTA",
    words: [
      {
        word: "BAND",
        relation: "A band plays lively music to keep the fiesta going all night.",
      },
      {
        word: "SALSA",
        relation: "Salsa dancing fills the streets during a spirited fiesta.",
      },
      {
        word: "DANCED",
        relation: "Everyone danced until dawn at the village fiesta.",
      },
    ],
  },
  {
    id: 281,
    themeWord: "COBWEB",
    words: [
      {
        word: "WISP",
        relation: "A wisp of cobweb drifts in the still air of an old attic.",
      },
      {
        word: "DUSTY",
        relation: "Dusty cobwebs drape the corners of abandoned rooms.",
      },
      {
        word: "SILKEN",
        relation: "Silken threads form the delicate structure of a cobweb.",
      },
    ],
  },
  {
    id: 282,
    themeWord: "TURBAN",
    words: [
      {
        word: "WRAP",
        relation: "To wrap cloth around the head is how a turban is formed.",
      },
      {
        word: "CLOTH",
        relation: "A long cloth is wound in layers to create a turban.",
      },
      {
        word: "FOLDED",
        relation: "Folded fabric is arranged with care to shape a proper turban.",
      },
    ],
  },
  {
    id: 283,
    themeWord: "TRIPOD",
    words: [
      {
        word: "LEGS",
        relation: "Three legs give the tripod its name and its stability.",
      },
      {
        word: "STAND",
        relation: "A stand for cameras and telescopes, the tripod holds them steady.",
      },
      {
        word: "CAMERA",
        relation: "A camera mounted on a tripod captures sharp, blur-free photos.",
      },
    ],
  },
  {
    id: 284,
    themeWord: "PELLET",
    words: [
      {
        word: "SHOT",
        relation: "A shot from an air rifle launches a small pellet at the target.",
      },
      {
        word: "ROUND",
        relation: "A round, compact pellet is loaded into the chamber.",
      },
      {
        word: "PISTOL",
        relation: "A pistol designed for target practice fires lightweight pellets.",
      },
    ],
  },
  {
    id: 285,
    themeWord: "RANSOM",
    words: [
      {
        word: "NOTE",
        relation: "A note demanding payment is the first sign of a ransom plot.",
      },
      {
        word: "SEIZE",
        relation: "To seize a hostage is the criminal act behind a ransom demand.",
      },
      {
        word: "KIDNAP",
        relation: "To kidnap someone and demand ransom is a serious crime.",
      },
    ],
  },
];

/**
 * Deterministic hash helper. Returns a 32-bit integer for any string key.
 */
function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h;
}

/**
 * Build a deterministic permutation of indices [0..n) seeded by `year`.
 * Uses a Fisher-Yates shuffle driven by a simple seeded PRNG.
 */
function shuffledIndices(n: number, year: number): number[] {
  const indices = Array.from({ length: n }, (_, i) => i);
  // Seed from year so the same year always gives the same order
  let seed = Math.abs(hashStr(`year-${year}`));
  for (let i = n - 1; i > 0; i--) {
    // Simple LCG step
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}

/**
 * Pick the level for a given local date.
 *
 * Computes the day-of-year (0-indexed) and uses a yearly shuffle so the
 * same 365 levels appear each year in a different, deterministic order.
 * The same date always returns the same level.
 */
export function getLevelForDate(date: Date): Level {
  const year = date.getFullYear();
  const startOfYear = new Date(year, 0, 1);
  const dayOfYear =
    Math.floor(
      (date.getTime() - startOfYear.getTime()) / 86400000
    );
  const perm = shuffledIndices(LEVELS.length, year);
  const index = perm[dayOfYear % LEVELS.length];
  return LEVELS[index];
}

/** Return today's day number (1-indexed, starting from 2026-01-01). */
export function getDayNumber(date: Date): number {
  const epoch = new Date(2026, 0, 1).getTime();
  const ms = date.getTime() - epoch;
  return Math.max(1, Math.floor(ms / 86400000) + 1);
}
