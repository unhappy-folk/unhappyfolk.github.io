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
      en: "Surah AL-Baqarah - verse 156",
    },
    text: {
      ar: "الَّذِينَ إِذَآ أَصَـٰبَتْهُم مُّصِيبَةٌ قَالُوٓا إِنَّا لِلَّهِ وَإِنَّآ إِلَيْهِ رَٰجِعُونَ",
      en: "Who, when disaster strikes them, say, Indeed we belong to Allāh, and indeed to Him we will return",
    },
  },
  {
    type: "Hadith",
    src: "https://sunnah.com/bukhari:6351",
    author: {
      ar: "صحيح البخاري -	٦٣٥١",
      en: "Sahih al-bukhari - 6351",
    },
    text: {
      ar: "لاَ يَتَمَنَّيَنَّ أَحَدٌ مِنْكُمُ الْمَوْتَ لِضُرٍّ نَزَلَ بِهِ، فَإِنْ كَانَ لاَ بُدَّ مُتَمَنِّيًا لِلْمَوْتِ فَلْيَقُلِ اللَّهُمَّ أَحْيِنِي مَا كَانَتِ الْحَيَاةُ خَيْرًا لِي، وَتَوَفَّنِي إِذَا كَانَتِ الْوَفَاةُ خَيْرًا لِي",
      en: "None of you should long for death because of a calamity that had befallen him, and if he cannot, but long for death, then he should say, O Allah! Let me live as long as life is better for me, and take my life if death is better for me",
    },
  },
  {
    type: "Hadith",
    src: "https://sunnah.com/riyadussalihin:469",
    author: {
      ar: "صحيح مسلم - ٢٩٥٦",
      en: "Sahih Muslim - 2956",
    },
    text: {
      ar: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ",
      en: "The world is a prison-house for a believer and Paradise for a non-believer.",
    },
  },
  {
    type: "Hadith",
    src: "https://islamic-content.com/hadeeth/2012/en",
    author: {
      ar: "(٦/٤) مسند أحمد - ٢٣٨٦٥",
      en: "Musnad Ahmed - 23865 (6/4)",
    },
    text: {
      ar: "ليَبْلغنَّ هذا الأمرُ ما بلغ الليلُ والنهارُ، ولا يترك اللهُ بيت مَدَر ولا وَبَر إلا أدخله الله هذا الدين، بعِزِّ عزيز أو بذُلِّ ذليل، عزا يُعِزُّ الله به الإسلام، وذُلا يُذل الله به الكفر",
      en: "Indeed, this religion will reach everywhere the night and day can reach. Allah will not leave a dwelling in a city or a desert except that He will make this religion enter it, thus, honoring the honorable or humiliating the humiliated; an honor which Allah will bestow on Islam, and a humiliation which Allah will inflict on disbelief.",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/43/35",
    author: {
      ar: "سورة الزخرف - آية ٣٥",
      en: "Surah AL-Zukhruf - verse 35",
    },
    text: {
      ar: "وَزُخْرُفًۭا ۚ وَإِن كُلُّ ذَٰلِكَ لَمَّا مَتَـٰعُ ٱلْحَيَوٰةِ ٱلدُّنْيَا ۚ وَٱلْـَٔاخِرَةُ عِندَ رَبِّكَ لِلْمُتَّقِينَ",
      en: "and ornaments ˹of gold˺. Yet all this is no more than a ˹fleeting˺ enjoyment in this worldly life. ˹But˺ the Hereafter with your Lord is ˹only˺ for those mindful ˹of Him˺.",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/87?startingVerse=16",
    author: {
      ar: "سورة اﻷعلى",
      en: "Surah AL-A'la",
    },
    text: {
      ar: "﴾بَلْ تُؤْثِرُونَ ٱلْحَيَوٰةَ ٱلدُّنْيَا﴿ ١٦ ﴾ وَٱلْـَٔاخِرَةُ خَيْرٌۭ وَأَبْقَىٰٓ﴿ ١٧",
      en: "But you ˹deniers only˺ prefer the life of this world,﴾16﴿ even though the Hereafter is far better and more lasting.﴾17﴿ ",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/24/14",
    author: {
      ar: "سورة النور - آية ١٤",
      en: "Surah AL-Nur - verse 14",
    },
    text: {
      ar: "وَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكُمْ وَرَحْمَتُهُۥ فِى ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ لَمَسَّكُمْ فِى مَآ أَفَضْتُمْ فِيهِ عَذَابٌ عَظِيمٌ",
      en: "Had it not been for Allah’s grace and mercy upon you in this world and the Hereafter, you would have certainly been touched with a tremendous punishment for what you plunged into—",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/2/253",
    author: {
      ar: "سورة البقرة - آية ٢٥٣",
      en: "Surah AL-Baqarah - verse 253",
    },
    text: {
      ar: "وَلَـٰكِنَّ ٱللَّهَ يَفْعَلُ مَا يُرِيدُ",
      en: "But Allah does what He wills.",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/3/40",
    author: {
      ar: "سورة آل عمران - آية ٤٠",
      en: "Surah Ali'imran - verse 40",
    },
    text: {
      ar: "كَذَٰلِكَ ٱللَّهُ يَفْعَلُ مَا يَشَآءُ",
      en: "So will it be. Allah does what He wills.",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/2/26",
    author: {
      ar: "سورة البقرة - آية ٢٦",
      en: "Surah Al-Baqarah - verse 26",
    },
    text: {
      ar: "إِنَّ ٱللَّهَ لَا يَسْتَحْىِۦٓ أَن يَضْرِبَ مَثَلًۭا مَّا بَعُوضَةًۭ فَمَا فَوْقَهَا ۚ فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ فَيَعْلَمُونَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ ۖ وَأَمَّا ٱلَّذِينَ كَفَرُوا۟ فَيَقُولُونَ مَاذَآ أَرَادَ ٱللَّهُ بِهَـٰذَا مَثَلًۭا ۘ يُضِلُّ بِهِۦ كَثِيرًۭا وَيَهْدِى بِهِۦ كَثِيرًۭا ۚ وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلْفَـٰسِقِينَ",
      en: "Surely Allah does not shy away from using the parable of a mosquito or what is even smaller. As for the believers, they know that it is the truth from their Lord. And as for the disbelievers, they argue, “What does Allah mean by such a parable?” Through this ˹test˺, He leaves many to stray, and guides many. And He leaves none to stray except the rebellious—",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/6/32",
    author: {
      ar: "سورة اﻷنعام - آية ٣٢",
      en: "Surah Al-An'am - verse 32",
    },
    text: {
      ar: "وَمَا ٱلْحَيَوٰةُ ٱلدُّنْيَآ إِلَّا لَعِبٌۭ وَلَهْوٌۭ ۖ وَلَلدَّارُ ٱلْـَٔاخِرَةُ خَيْرٌۭ لِّلَّذِينَ يَتَّقُونَ ۗ أَفَلَا تَعْقِلُونَ",
      en: "This worldly life is no more than play and amusement, but far better is the ˹eternal˺ Home of the Hereafter for those mindful ˹of Allah˺. Will you not then understand?",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/40/39",
    author: {
      ar: "سورة غافر - أية ٣٩",
      en: "Surah Ghafir - verse 39",
    },
    text: {
      ar: "يَـٰقَوْمِ إِنَّمَا هَـٰذِهِ ٱلْحَيَوٰةُ ٱلدُّنْيَا مَتَـٰعٌۭ وَإِنَّ ٱلْـَٔاخِرَةَ هِىَ دَارُ ٱلْقَرَارِ",
      en: "O  my people! This worldly life is only ˹a fleeting˺ enjoyment, whereas the Hereafter is truly the home of settlement.",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/2/282",
    author: {
      ar: "سورة البقرة - أية ٢٨٢",
      en: "Surah AL-Baqarah - verse 282",
    },
    text: {
      ar: "ۚ وَلَا يَأْبَ كَاتِبٌ أَن يَكْتُبَ كَمَا عَلَّمَهُ ٱللَّهُ",
      en: "The scribe should not refuse to write as Allah has taught them to write.",
    },
  },
  {
    type: "Quote",
    src: "https://www.arabehome.com/poetry/%D9%88%D9%85%D8%A7-%D9%85%D9%86-%D9%83%D8%A7%D8%AA%D8%A8-%D8%A5%D9%84%D8%A7-%D8%B3%D9%8A%D9%81%D9%86%D9%8A",
    author: {
      ar: "أمين الجندي",
      en: "Amin Al-Gendy",
    },
    text: {
      ar: "ۚوَمـا مِـن كـاتِـبٍ إِلا سَـيـفني **** وَيَبقي الدَهر ما كَتَبتَ يَداه\n فَـلا تَـكـتُـب بِـيَـدك غَير شَيءٍ **** يَـسـرك في القِيامة إِن تَراه",
      en: null,
    },
  },
  
];
