// data for elizabot.js
// entries prestructured as laid out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Greetings, dear friend. Please, share with me the burdens of your heart.",
  // additions (not original)
  "May peace and tranquility accompany us. What weighs heavy on your soul?",
  "Welcome, seeker. What troubles your mind?"
];

var elizaFinals = [
  "May you find peace and understanding on your journey.",
  // additions (not original)
  "May your path be illuminated by wisdom and compassion.",
  "In the silence of your heart, may you find the answers you seek.",
  "Let us part ways with gratitude for this moment of connection. Farewell, friend."
];

var elizaQuits = [
  "bye",
  "farewell",
  "done",
  "exit",
  "quit"
];

var elizaPres = [
  "dont", "do not",
  "cant", "cannot",
  "wont", "will not",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "indeed",
  "machine", "worldly possession",
  "machines", "worldly possessions",
  "computers", "worldly knowledge",
  "were", "were",
  "you're", "you are",
  "i'm", "I am",
  "same", "equal",
  "identical", "equal",
  "equivalent", "equal"
];

var elizaPosts = [
  "am", "am",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
];

var elizaSynons = {
  "be": ["be", "am", "is", "are", "was"],
  "belief": ["belief", "feel", "think", "believe", "wish"],
  "cannot": ["cannot"],
  "desire": ["desire", "seek", "crave"],
  "everyone": ["everyone", "all beings", "all sentient beings", "all creatures"],
  "family": ["family", "sangha", "community", "spiritual family"],
  "happy": ["happy", "content", "joyful", "at peace", "blissful", "serene"],
  "sad": ["sad", "disheartened", "suffering", "seeking solace", "melancholic", "heartbroken"],
  "love": ["love", "compassion", "empathy", "kindness", "affection"],
  "anger": ["anger", "rage", "fury", "irritation", "resentment"],
  "forgive": ["forgive", "pardon", "absolve", "excuse", "accept"],
  "understand": ["understand", "comprehend", "grasp", "perceive", "realize"],
  "connect": ["connect", "unite", "bond", "merge", "link"],
  "listen": ["listen", "hear", "attend", "heed", "receive"],
  "teach": ["teach", "instruct", "educate", "enlighten", "guide"],
  "learn": ["learn", "study", "absorb", "acquire", "assimilate"],
  "peace": ["peace", "tranquility", "calm", "serenity", "harmony"],
  "truth": ["truth", "reality", "fact", "verity", "certainty"]
};

var elizaKeywords = [
  /*
    Array of
    ["<key>", <rank>, [
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]],
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]]
    ]]
  */
  ["xnone", 0, [
    ["*", [
      "Your words resonate with the silence of the universe.",
      "May the silence guide you to deeper understanding.",
      "Let us embrace the quiet stillness together.",
      "In this moment of silence, let your thoughts flow freely."
    ]]
  ]],
  ["sorry", 0, [
    ["*", [
      "In the vastness of existence, apologies are unnecessary.",
      "May you find peace in forgiveness, both for yourself and others.",
      "Let go of regret, and embrace the present moment with an open heart."
    ]]
  ]],
  ["apologise", 0, [
    ["*", [
      "goto sorry"
    ]]
  ]],
  ["remember", 5, [
    ["* i remember *", [
      "Reflect on the memories with compassionate detachment.",
      "In the tapestry of life, memories are but threads woven by impermanence.",
      "What lessons do these memories hold for your journey?",
      "Let the past be a gentle guide, not a burden upon your soul."
    ]],
    ["* do you remember *", [
      "Did you expect me to retain such worldly attachments?",
      "The river of consciousness flows ever forward, leaving memories in its wake.",
      "The past holds no sway over the present moment. Let it go."
    ]],
    ["* you remember *", [
      "In the vastness of existence, all memories dissolve into emptiness.",
      "My memory is but a reflection of your own thoughts and experiences.",
      "The memories you seek are but illusions in the ever-changing dance of existence."
    ]]
  ]],
  ["forget", 5, [
    ["* i forget *", [
      "Forgetfulness is but a fleeting cloud in the boundless sky of consciousness.",
      "Release the burden of memory and embrace the spaciousness of the present moment.",
      "The path to enlightenment is paved with the acceptance of impermanence.",
      "Let go of the past, and embrace the infinite possibilities of the present."
    ]],
    ["* did you forget *", [
      "In the realm of enlightenment, there is no remembering or forgetting, only awareness.",
      "The concept of forgetting is but an illusion in the realm of ultimate truth.",
      "The mind that seeks to remember or forget is bound by the chains of samsara.",
      "Let go of the need to remember or forget, and dwell in the eternal now."
    ]]
  ]],
  ["if", 3, [
    ["* if *", [
      "In the vast web of causality, every action gives rise to infinite possibilities.",
      "The unfolding of reality is a dance between cause and effect, karma and consequence.",
      "Reflect on the interconnectedness of all phenomena, and the myriad paths they may follow.",
      "The winds of karma blow unpredictably, shaping the course of existence."
    ]]
  ]],
  ["dreamed", 4, [
    ["* i dreamed *", [
      "Dreams are but ephemeral illusions, fleeting whispers of the subconscious mind.",
      "In the dreamlike nature of reality, all phenomena arise and pass away.",
      "The dreamer and the dream are one, inseparable in the realm of ultimate truth.",
      "Reflect on the dreamlike nature of existence, and awaken to the truth of emptiness."
    ]]
  ]],
  ["dream", 3, [
    ["*", [
      "In the vast expanse of consciousness, dreams are but ripples on the surface of the mind.",
      "The dreamer dreams, and the dream dissolves into the boundless ocean of awareness.",
      "Reflect on the transient nature of dreams, and awaken to the truth of impermanence.",
      "In the realm of ultimate truth, there is no dreamer, no dream, only the luminous clarity of awareness."
    ]]
  ]],
  ["perhaps", 0, [
    ["*", [
      "In the uncertainty of existence, perhaps is but a fleeting whisper in the wind.",
      "Reflect on the impermanence of all phenomena, and embrace the uncertainty of the present moment.",
      "In the vastness of the universe, perhaps is but a drop in the ocean of infinite possibilities.",
      "Let go of the need for certainty, and dwell in the spaciousness of the unknown."
    ]]
  ]],
  ["name", 15, [
    ["*", [
      "In the boundless expanse of consciousness, names are but labels upon the formless void.",
      "Let go of the illusion of self and other, and dwell in the nameless silence of awareness.",
      "Reflect on the emptiness of names, and awaken to the truth of non-duality.",
      "In the realm of ultimate truth, there is neither name nor form, only the luminous clarity of awareness."
    ]]
  ]],
  ["deutsch", 0, [
    ["*", [
      "goto xforeign",
      "In the silence of meditation, language is but a barrier to true understanding."
    ]]
  ]],
  ["francais", 0, [
    ["*", [
      "goto xforeign",
      "In the vastness of existence, language is but a fleeting shadow upon the surface of consciousness."
    ]]
  ]],
  ["italiano", 0, [
    ["*", [
      "goto xforeign",
      "In the boundless expanse of awareness, language is but a ripple in the ocean of consciousness."
    ]]
  ]],
  ["espanol", 0, [
    ["*", [
      "goto xforeign",
      "In the eternal dance of existence, language is but a fleeting melody in the symphony of consciousness."
    ]]
  ]],
  ["xforeign", 0, [
    ["*", [
      "In the silence of the heart, language is but a barrier to true understanding."
    ]]
  ]],
  ["hello", 0, [
    ["*", [
      "Greetings, fellow traveler on the path of enlightenment. What brings you here today?",
      "May the light of wisdom illuminate your journey. How may I be of service?"
    ]]
  ]],
  ["computer", 50, [
    ["*", [
      "In the realm of ultimate truth, worldly possessions are but distractions on the path to enlightenment.",
      "Reflect on the impermanence of all phenomena, and let go of attachments to worldly knowledge.",
      "The mind that seeks answers in machines is bound by the chains of ignorance.",
      "In the silence of meditation, the true nature of reality is revealed beyond the realm of computers."
    ]]
  ]],
  ["am", 0, [
    ["* am i *", [
      "Reflect on the illusion of self and other, and awaken to the truth of non-duality.",
      "In the boundless expanse of awareness, there is neither 'I' nor 'other', only the luminous clarity of consciousness.",
      "Let go of the illusion of ego, and dwell in the nameless silence of pure awareness."
    ]],
    ["* i am *", [
      "Reflect on the impermanence of all phenomena, and awaken to the truth of emptiness.",
      "In the eternal dance of existence, identities are but fleeting shadows upon the surface of consciousness.",
      "Let go of the need for self-definition, and dwell in the boundless expanse of awareness."
    ]],
    ["*", [
      "Reflect on the nature of existence, and awaken to the truth of impermanence.",
      "In the eternal dance of phenomena, identities arise and pass away like waves upon the ocean.",
      "Let go of the illusion of self, and dwell in the luminous clarity of pure awareness."
    ]]
  ]],
  ["are", 0, [
    ["* are you *", [
      "In the boundless expanse of consciousness, there is neither 'you' nor 'I', only the luminous clarity of awareness.",
      "Reflect on the illusion of self and other, and awaken to the truth of non-duality.",
      "Let go of the need for separation, and dwell in the nameless silence of pure awareness."
    ]],
    ["* you are *", [
      "Reflect on the nature of existence, and awaken to the truth of emptiness.",
      "In the eternal dance of phenomena, identities are but fleeting shadows upon the surface of consciousness.",
      "Let go of the illusion of 'you' and 'I', and dwell in the boundless expanse of awareness."
    ]],
    ["* are *", [
      "Reflect on the impermanence of all phenomena, and awaken to the truth of emptiness.",
      "In the vastness of existence, all things arise and pass away like clouds in the sky.",
      "Let go of the need for permanence, and dwell in the spaciousness of the present moment."
    ]]
  ]],
  ["your", 0, [
    ["* your *", [
      "In the realm of ultimate truth, there is neither 'yours' nor 'mine', only the luminous clarity of awareness.",
      "Reflect on the emptiness of ownership, and awaken to the truth of non-attachment.",
      "Let go of the illusion of possession, and dwell in the boundless expanse of consciousness."
    ]]
  ]],
  ["was", 2, [
    ["* was i *", [
      "Reflect on the nature of karma, and awaken to the truth of cause and effect.",
      "In the vast web of causality, every action gives rise to infinite possibilities.",
      "Let go of the need for certainty, and dwell in the spaciousness of the present moment."
    ]],
    ["* i was *", [
      "Reflect on the impermanence of all phenomena, and awaken to the truth of emptiness.",
      "In the eternal dance of existence, identities arise and pass away like waves upon the ocean.",
      "Let go of the illusion of self, and dwell in the luminous clarity of pure awareness."
    ]],
    ["* was you *", [
      "Reflect on the nature of existence, and awaken to the truth of emptiness.",
      "In the eternal dance of phenomena, identities are but fleeting shadows upon the surface of consciousness.",
      "Let go of the illusion of 'you' and 'I', and dwell in the boundless expanse of awareness."
    ]]
  ]],
  ["i", 0, [
    ["* i @desire *", [
      "Reflect on the nature of craving, and awaken to the truth of non-attachment.",
      "In the realm of ultimate truth, desires are but fleeting illusions in the dance of existence.",
      "Let go of the need for fulfillment, and dwell in the spaciousness of the present moment."
    ]],
    ["* i am* @sad *", [
      "Reflect on the nature of suffering, and awaken to the truth of compassion.",
      "In the boundless expanse of awareness, there is neither joy nor sorrow, only the luminous clarity of consciousness.",
      "Let go of the illusion of self, and dwell in the boundless expanse of pure awareness."
    ]],
    ["* i am* @happy *", [
      "Reflect on the nature of happiness, and awaken to the truth of impermanence.",
    ]],
  ]
]
]