export type Message = {
  type: "Quran" | "Hadith" | "Quote";
  src: String | null;
  author: {
    ar: String | null;
    en: String | null;
  };
  text: {
    ar: String | null;
    en: String | null;
  };
};

export const MESSAGES: Array<Message> = [
  {
    type: "Quote",
    src: "https://tolkiengateway.net/wiki/Habbanan_beneath_the_Stars",
    author: {
      en: "J.R.R. Tolkien",
      ar: null,
    },
    text: {
      en: "Uncounted leagues away it lies from here....\n And foam there flowers upon the sea\n by cliffs of crystal carven clear\n on shining beaches flowing free",
      ar: null,
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/2:156/tafsirs/en-tafsir-maarif-ul-quran",
    author: {
      ar: "سورة البقرة - آية رقم ١٥٦",
      en: "Surah AL-baqarah - verse 156",
    },
    text: {
      ar: "ٱلَّذِينَ إِذَآ أَصَـٰبَتْهُم مُّصِيبَةٌۭ قَالُوٓا۟ إِنَّا لِلَّهِ وَإِنَّآ إِلَيْهِ رَٰجِعُونَ",
      en: "Who, when disaster strikes them, say, Indeed we belong to Allāh, and indeed to Him we will return",
    },
  },
  {
    type: "Hadith",
    src: "https://sunnah.com/bukhari:6351",
    author: {
      ar: "صحيح البخاري - 6351",
      en: "Sahih al-bukhari - 6351",
    },
    text: {
      ar: "لاَ يَتَمَنَّيَنَّ أَحَدٌ مِنْكُمُ الْمَوْتَ لِضُرٍّ نَزَلَ بِهِ، فَإِنْ كَانَ لاَ بُدَّ مُتَمَنِّيًا لِلْمَوْتِ فَلْيَقُلِ اللَّهُمَّ أَحْيِنِي مَا كَانَتِ الْحَيَاةُ خَيْرًا لِي، وَتَوَفَّنِي إِذَا كَانَتِ الْوَفَاةُ خَيْرًا لِي",
      en: "None of you should long for death because of a calamity that had befallen him, and if he cannot, but long for death, then he should say, O Allah! Let me live as long as life is better for me, and take my life if death is better for me",
    },
  },
];
