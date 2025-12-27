export interface TarotCardData {
  id: string;
  name: string;
  image: string;
  keywords: string[];
  meaning: string;
}

export const tarotCards: TarotCardData[] = [
  {
    id: "00",
    name: "The Fool",
    image: "/card/0603205238985_00_93f05f199fe56df4354be531f1666b53.jpg",
    keywords: ["Innocence", "New Beginnings", "Free Spirit"],
    meaning: "The Fool represents the beginning of a journey, a leap of faith into the unknown."
  },
  {
    id: "01",
    name: "The Magician",
    image: "/card/0603205238985_02_5d4153da20d3d91dc0b84dd27247c1a5.jpg",
    keywords: ["Manifestation", "Resourcefulness", "Power"],
    meaning: "The Magician indicates that you have the tools and resources to manifest your desires."
  },
  {
    id: "02",
    name: "The High Priestess",
    image: "/card/0603205238985_03_5c4ec1905aeae9bec5909153315e0269.jpg",
    keywords: ["Intuition", "Sacred Knowledge", "Divine Feminine"],
    meaning: "The High Priestess suggests a time to look inward and trust your intuition."
  },
  {
    id: "03",
    name: "The Empress",
    image: "/card/0603205238985_04_e8af89ff25c8ad2180e1d6b564fe1930.jpg",
    keywords: ["Femininity", "Beauty", "Nature", "Abundance"],
    meaning: "The Empress represents growth, creativity, and the nurturing of new life."
  },
  {
    id: "04",
    name: "The Emperor",
    image: "/card/0603205238985_05_64a833c7ec42a8634fd0bbc92a1820a3.jpg",
    keywords: ["Authority", "Structure", "Control", "Fatherhood"],
    meaning: "The Emperor signifies a need for structure, discipline, and stable leadership."
  },
  {
    id: "05",
    name: "The Hierophant",
    image: "/card/0603205238985_06_2f083cd664f6a22ef6a6bb0033183204.jpg",
    keywords: ["Spiritual Wisdom", "Religious Beliefs", "Conformity", "Tradition"],
    meaning: "The Hierophant represents traditional values and spiritual counsel."
  },
  {
    id: "06",
    name: "The Lovers",
    image: "/card/0603205238985_07_7049a3682c6707cd661a0c92b0d4b8a0.jpg",
    keywords: ["Love", "Harmony", "Relationships", "Choices"],
    meaning: "The Lovers signifies a significant choice or a deep, harmonious relationship."
  },
  {
    id: "07",
    name: "The Chariot",
    image: "/card/0603205238985_08_c9344575d1cfb36a722090fa6f465eda.jpg",
    keywords: ["Control", "Willpower", "Success", "Action"],
    meaning: "The Chariot represents overcoming obstacles through determination and focused intent."
  },
  {
    id: "08",
    name: "Strength",
    image: "/card/0603205238985_09_fdb39f49409ce4c2a134479f4eb457f5.jpg",
    keywords: ["Strength", "Courage", "Persuasion", "Influence", "Compassion"],
    meaning: "Strength suggests that you have the inner power to master your impulses and handle challenges."
  },
  {
    id: "09",
    name: "The Hermit",
    image: "/card/0603205238985_10_73075cf1cc03d23a3c959b8d3907aa8c.jpg",
    keywords: ["Soul-Searching", "Introspection", "Being Alone", "Inner Guidance"],
    meaning: "The Hermit indicates a period of reflection and seeking wisdom from within."
  },
  {
    id: "10",
    name: "Wheel of Fortune",
    image: "/card/0603205238985_11_aa5c6d94399a6c68c5ccf0938200b98d.jpg",
    keywords: ["Good Luck", "Karma", "Life Cycles", "Destiny", "Turning Point"],
    meaning: "The Wheel of Fortune signifies that change is inevitable and fate is in motion."
  },
  {
    id: "11",
    name: "Justice",
    image: "/card/0603205238985_12_cb2452b3e455ec55a11fe96848da0f79.jpg",
    keywords: ["Justice", "Fairness", "Truth", "Cause and Effect", "Law"],
    meaning: "Justice indicates that a fair outcome will be reached based on truth and integrity."
  },
  {
    id: "12",
    name: "The Hanged Man",
    image: "/card/0603205238985_13_8a692ffa7c224b4ca161439322e33f37.jpg",
    keywords: ["Pause", "Surrender", "Letting Go", "New Perspectives"],
    meaning: "The Hanged Man suggests a time for pause and seeing things from a different angle."
  },
  {
    id: "13",
    name: "Death",
    image: "/card/0603205238985_14_b69ffe0fc74c305601c760be0000c7d9.jpg",
    keywords: ["Endings", "Change", "Transformation", "Transition"],
    meaning: "Death signifies the end of a major phase and the beginning of a transformation."
  },
  {
    id: "14",
    name: "Temperance",
    image: "/card/0603205238985_15_ad3f1fc96c2cae2a0b41441c428b6d7b.jpg",
    keywords: ["Balance", "Moderation", "Patience", "Purpose"],
    meaning: "Temperance indicates a need for balance, harmony, and moderate action."
  },
  {
    id: "15",
    name: "The Devil",
    image: "/card/0603205238985_16_3f282861b00f9fe6246cd8079fa7979e.jpg",
    keywords: ["Shadow Self", "Attachment", "Addiction", "Restriction", "Sexuality"],
    meaning: "The Devil represents being trapped by material desires or limiting beliefs."
  },
  {
    id: "16",
    name: "The Tower",
    image: "/card/0603205238985_17_9bdf22277b1ca874d5a917140147278b.jpg",
    keywords: ["Sudden Change", "Upheaval", "Chaos", "Revelation", "Awakening"],
    meaning: "The Tower signifies a sudden, radical change that clears the way for a new reality."
  },
  {
    id: "17",
    name: "The Star",
    image: "/card/0603205238985_18_6fbc854cb785a8cee939e015aa27dbf5.jpg",
    keywords: ["Hope", "Faith", "Purpose", "Renewal", "Spirituality"],
    meaning: "The Star brings a message of hope, inspiration, and cosmic guidance."
  },
  {
    id: "18",
    name: "The Moon",
    image: "/card/0603205238985_19_268a5422bfd02678fbae1d39b384078c.jpg",
    keywords: ["Illusion", "Fear", "Anxiety", "Subconscious", "Intuition"],
    meaning: "The Moon suggests that things are not as they seem and to trust your inner voice."
  },
  {
    id: "19",
    name: "The Sun",
    image: "/card/0603205238985_20_293caf99d19b4ba945159633c916d22a.jpg",
    keywords: ["Positivity", "Fun", "Warmth", "Success", "Vitality"],
    meaning: "The Sun represents success, joy, and the warmth of self-expression."
  },
  {
    id: "20",
    name: "Judgement",
    image: "/card/0603205238985_21_696ecb953297e3192d5f2c898e16b131.jpg",
    keywords: ["Judgement", "Rebirth", "Inner Calling", "Absolution"],
    meaning: "Judgement calls for a period of self-evaluation and rising to a higher purpose."
  },
  {
    id: "21",
    name: "The World",
    image: "/card/0603205238985_22_cb000efb9912b049b4ac4b2f450880b2.jpg",
    keywords: ["Completion", "Integration", "Accomplishment", "Travel"],
    meaning: "The World signifies the successful completion of a cycle and a sense of wholeness."
  }
];

export const getRandomCard = (): TarotCardData => {
  return tarotCards[Math.floor(Math.random() * tarotCards.length)];
};

