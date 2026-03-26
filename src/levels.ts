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
