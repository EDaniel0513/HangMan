class Words {

  constructor() {
    this.difficulty;
    this.listOfHard = [
      "abruptly",
      "absurd",
      "abyss",
      "affix",
      "askew",
      "avenue",
      "awkward",
      "axiom",
      "azure",
      "bagpipes",
      "bandwagon",
      "banjo",
      "bayou",
      "beekeeper",
      "bikini",
      "blitz",
      "blizzard",
      "boggle",
      "bookworm",
      "boxcar",
      "boxful",
      "buckaroo",
      "buffalo",
      "buffoon",
      "buxom",
      "buzzard",
      "buzzing",
      "buzzwords",
      "caliph",
      "cobweb",
      "cockiness",
      "croquet",
      "crypt",
      "curacao",
      "cycle",
      "daiquiri",
      "dirndl",
      "disavow",
      "dizzying",
      "duplex",
      "dwarves",
      "embezzle",
      "equip",
      "espionage",
      "euouae",
      "exodus",
      "faking",
      "fishhook",
      "fixable",
      "fjord",
      "flapjack",
      "flopping",
      "fluffiness",
      "flyby",
      "foxglove",
      "frazzled",
      "frizzled",
      "fuchsia",
      "funny",
      "gabby",
      "galaxy",
      "galvanize",
      "gazebo",
      "giaour",
      "gizmo",
      "glowworm",
      "glyph",
      "gnarly",
      "gnostic",
      "gossip",
      "grogginess",
      "haiku",
      "haphazard",
      "hyphen",
      "iatrogenic",
      "icebox",
      "injury",
      "ivory",
      "ivy",
      "jackpot",
      "jaundice",
      "jawbreaker",
      "jaywalk",
      "jazziest",
      "jazzy",
      "jelly",
      "jigsaw",
      "jinx",
      "jiujitsu",
      "jockey",
      "jogging",
      "joking",
      "jovial",
      "joyful",
      "juicy",
      "jukebox",
      "jumbo",
      "kayak",
      "kazoo",
      "keyhole",
      "khaki",
      "kilobyte",
      "kiosk",
      "kitsch",
      "kiwifruit",
      "klutz",
      "knapsack",
      "larynx",
      "lengths",
      "lucky",
      "luxury",
      "lymph",
      "marquis",
      "matrix",
      "megahertz",
      "microwave",
      "mnemonic",
      "mystify",
      "naphtha",
      "nightclub",
      "nowadays",
      "numbskull",
      "nymph",
      "onyx",
      "ovary",
      "oxidize",
      "oxygen",
      "pajama",
      "peekaboo",
      "phlegm",
      "pixel",
      "pizazz",
      "pneumonia",
      "polka",
      "pshaw",
      "psyche",
      "puppy",
      "puzzling",
      "quartz",
      "queue",
      "quips",
      "quixotic",
      "quiz",
      "quizzes",
      "quorum",
      "razzmatazz",
      "rhubarb",
      "rhythm",
      "rickshaw",
      "schnapps",
      "scratch",
      "shiv",
      "snazzy",
      "sphinx",
      "spritz",
      "squawk",
      "staff",
      "strength",
      "strengths",
      "stretch",
      "stronghold",
      "stymied",
      "subway",
      "swivel",
      "syndrome",
      "thriftless",
      "thumbscrew",
      "topaz",
      "transcript",
      "transgress",
      "transplant",
      "triphthong",
      "twelfth",
      "twelfths",
      "unknown",
      "unworthy",
      "unzip",
      "uptown",
      "vaporize",
      "vixen",
      "vodka",
      "voodoo",
      "vortex",
      "voyeurism",
      "walkway",
      "waltz",
      "wave",
      "wavy",
      "waxy",
      "wellspring",
      "wheezy",
      "whiskey",
      "whizzing",
      "whomever",
      "wimpy",
      "witchcraft",
      "wizard",
      "woozy",
      "wristwatch",
      "wyvern",
      "xylophone",
      "yachtsman",
      "yippee",
      "yoked",
      "youthful",
      "yummy",
      "zephyr",
      "zigzag",
      "zigzagging",
      "zilch",
      "zipper",
      "zodiac",
      "zombie",
    ];

    this.listOfMedium = [
      "taxi cab",
      "standing ovation",
      "alarm clock",
      "tool",
      "banana peel",
      "flagpole",
      "money",
      "wallet",
      "ballpoint pen",
      "sunburn",
      "wedding ring",
      "spy",
      "baby - sitter",
      "aunt",
      "acne",
      "bib",
      "puzzle piece",
      "pawn",
      "astronaut",
      "tennis shoes",
      "blue jeans",
      "twig",
      "outer space",
      "banister",
      "batteries",
      "doghouse",
      "campsite",
      "plumber",
      "bedbug",
      "throne",
      "tiptoe",
      "log",
      "mute",
      "pogo",
      "stick stoplight",
      "ceiling fan",
      "bedspread",
      "bite",
      "stove",
      "windmill",
      "nightmare",
      "stripe",
      "spring",
      "wristwatch",
      "eat",
      "matchstick",
      "gumball",
      "bobsled",
      "bonnet",
      "flock",
      "sprinkler",
      "living room",
      "laugh",
      "snuggle",
      "sneeze",
      "bud",
      "elf",
      "headache",
      "slam dunk",
      "Internet",
      "saddle",
      "ironing board",
      "bathroom scale",
      "kiss",
      "shopping cart",
      "shipwreck",
      "funny",
      "glide",
      "lamp",
      "candlestick",
      "grandfather rocket",
      "home",
      "movies",
      "seesaw rollerblades",
      "smog",
      "grill",
      "goblin",
      "coach",
      "claw",
      "cloud",
      "shelf",
      "recycle",
      "glue stick",
      "Christmas carolers",
      "front porch",
      "earache",
      "robot",
      "foil",
      "rib",
      "robe",
      "crumb",
      "paperback",
      "hurdle",
      "rattle",
      "fetch",
      "date",
      "iPod",
      "dance",
      "cello",
      "flute",
      "dock",
      "prize",
      "dollar",
      "puppet",
      "brass",
      "firefighter",
      "huddle",
      "easel",
      "pigpen",
      "bunk bed",
      "bowtie",
      "fiddle",
      "dentist",
      "baseboards",
      "letter opener",
      "photographer",
      "magic Old Spice monster",


    ]

    this.listOfEasy = [
      "cat",
      "sun",
      "cup",
      "ghost",
      "flower",
      "pie",
      "cow",
      "banana",
      "snowflake",
      "bug",
      "book",
      "jar",
      "snake",
      "light",
      "tree",
      "lips",
      "apple",
      "slide",
      "socks",
      "smile",
      "swing",
      "coat",
      "shoe",
      "water",
      "heart",
      "hat",
      "ocean",
      "kite",
      "milk",
      "duck",
      "eyes",
      "skateboard",
      "bird",
      "boy",
      "apple",
      "person",
      "girl",
      "mouse",
      "ball",
      "house",
      "star",
      "nose",
      "bed",
      "whale",
      "jacket",
      "shirt",
      "hippo",
      "beach",
      "egg",
      "face",
      "cookie",
      "cheese",
      "drum",
      "circle",
      "spoon",
      "worm",
      "baby",
      "door",
      "banana",
      "finger",
      "fence big",
      "swimming pool",
      "sun",
      "church",
      "yo - yo",
      "boy",
      "bag",
      "alligator",
      "mouse",
      "birthday",
      "winter",
      "beach",
      "tree",
      "teacher",
      "king",
      "telephone",
      "eye",
      "water",
      "jelly",
      "balloon",
      "toothbrush",
      "pants",
      "mom",
      "body",
      "bike",
      "toilet paper",
      "baseball",
      "pig",
      "fire",
      "school",
      "belt",
      "pajamas",
      "mud",
      "ice cream cone",
      "arm",
      "drums",
      "spider",
      "shark",
      "seashell",
      "computer",
      "grandma",
      "pillow",
      "kite",
      "homework",
      "ladybug",
      "bed",
      "bird",
      "gum",
      "book",
      "dress",
      "queen",
      "puppy",
      "happy",
      "doctor",
      "frog",
      "blanket",
      "popsicle",
      "pen",
      "sandwich",
      "boat",
      "dad",
      "lunchbox",
      "ice",
      "bottle",
      "elbow",
      "penny",
      "broom",
      "dog",
      "rose",
      "picnic",
      "chair",
      "duck",
      "hair",
      "zoo",
      "party",
      "piano",
      "key",
      "apple",
      "chalk",
      "park",
      "clock",
      "pencil",
      "hill",
      "flag",
      "lollipop",
      "candle",
      "flower",
      "basketball",
      "hug",
      "clown",
      "paper",
      "mountain",
      "nose",
      "cow",
      "grown - up",
      "grass",
      "rainbow",
      "hide - and - seek",
      "pocket",
      "grape",
      "cowboy",
      "doll",
      "forehead",
      "football",
      "crayon",
      "desk",
      "TV",
      "bedtime",
      "hopscotch",
      "dump truck",
      "cold",
      "paint",
      "ear",
      "moon",
    ]
    this.Phrases = [
      "blessing in disguise",
      "A dime a dozen",
      "Beat around the bush",
      "Better late than never",
      "Bite the bullet",
      "Break a leg",
      "Call it a day",
      "Cut somebody some slack",
      "Cutting corners",
      "Easy does it",
      "Get out of hand",
      "Get something out of your system",
      "Get your act together",
      "Go back to the drawing board",
      "Hang in there",
      "Hit the sack",
      "It's not rocket science",
      "Let someone off the hook",
      "Make a long story short",
      "Miss the boat",
      "No pain, no gain",
      "On the ball",
      "Pull someone's leg",
      "Pull yourself together",
      "So far so good",
      "Speak of the devil",
      "That's the last straw",
      "The best of both worlds",
      "Time flies when you're having fun",
      "To get bent out of shape",
      "To make matters worse",
      "Under the weather",
      "You can say that again",
      "Your guess is as good as mine",
      "A penny for your thoughts",
      "A penny saved is a penny earned",
      "A perfect storm",
      "A picture is worth 1000 words",
      "Actions speak louder than words",
      "Add insult to injury",
      "Barking up the wrong tree",
      "Bite off more than you can chew",
      "Break the ice",
      "By the skin of your teeth",
      "Comparing apples to oranges",
      "Costs an arm and a leg",
      "Do something at the drop of a hat",
      "Don't cry over spilt milk",
      "Don't give up your day job",
      "Every cloud has a silver lining",
      "Get a taste of your own medicine",
      "Give someone the cold shoulder",
      "Go on a wild goose chase",
      "He has bigger fish to fry",
      "He's a chip off the old block",
      "Hit the nail on the head",
      "Ignorance is bliss",
      "It ain't over till the fat lady sings",
      "It takes one to know one",
      "It's a piece of cake",
      "It's raining cats and dogs",
      "Kill two birds with one stone",
      "Let the cat out of the bag",
      "Live and learn",
      "Look before you leap",
      "On thin ice",
      "Once in a blue moon",
      "Play devil's advocate",
      "Put something on ice",
      "Rain on someone's parade",
      "Saving for a rainy day",
      "Slow and steady wins the race",
      "Spill the beans",
      "Take a rain check",
      "Take it with a grain of salt",
      "The ball is in your court",
      "The best thing since sliced bread",
      "The devil is in the details",
      "The early bird gets the worm",
      "The elephant in the room",
      "The whole nine yards",
      "There are other fish in the sea",
      "There's a method to his madness",
      "Throw caution to the wind",
      "A snowball effect",
      "A snowball's chance in hell",
      "A stitch in time saves nine",
      "A storm in a teacup",
      "As right as rain",
      "Bolt from the blue",
      "Burn bridges",
      "Calm before the storm",
      "Come rain or shine",
      "Curiosity killed the cat",
      "Cut the mustard",
      "Don't beat a dead horse",
      "Every dog has his day",
      "Familiarity breeds contempt",
      "Fit as a fiddle",
      "Fortune favours the bold",
      "Get a second wind",
      "Get wind of something",
      "Go down in flames",
      "Haste makes waste",
      "Have your head in the clouds",
      "He's not playing with a full deck",
      "He's off his rocker",
      "He's sitting on the fence",
      "It takes two to tango",
      "Jump on the bandwagon",
      "Leave no stone unturned",
      "Let sleeping dogs lie",
      "Like riding a bicycle",
      "Like two peas in a pod",
      "Make hay while the sun shines",
      "On cloud nine",
      "Once bitten, twice shy",
      "Run like the wind",
      "Shape up or ship out",
      "Snowed under",
      "That ship has sailed",
      "The pot calling the kettle black",
      "There are clouds on the horizon",
      "Through thick and thin",
      "Time is money",
      "Waste not, want not",
      "We see eye to eye",
      "Weather the storm",
      "Well begun is half done",
      "When it rains it pours",
    ]

  }
  //choes a random word from the list bassed on the dificalty
  randomWord(diff) {
    this.difficulty = diff;
    if (this.difficulty == 4) {
      return (random(this.Phrases));

    } else if (this.difficulty == 2) {
      return (random(this.listOfMedium));

    } else if (this.difficulty == 3) {
      return (random(this.listOfHard));

    } else {
      return (random(this.listOfEasy));
    }
  }









}