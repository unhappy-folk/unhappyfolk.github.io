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
      en: "Uncounted leagues away it lies from here\n And foam there flowers upon the sea\n by cliffs of crystal carven clear\n on shining beaches flowing free",
      ar: null,
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/2/156",
    author: {
      ar: "سورة البقرة - آية رقم ١٥٦",
      en: "Chapter 2 (The Cow), 156",
    },
    text: {
      ar: "الَّذِينَ إِذَآ أَصَـٰبَتْهُم مُّصِيبَةٌ قَالُوٓا إِنَّا لِلَّهِ وَإِنَّآ إِلَيْهِ رَٰجِعُونَ",
      en: 'Who say, when afflicted with calamity: "To Allah We belong, and to Him is our return"',
    },
  },
  {
    type: "Hadith",
    src: "https://sunnah.com/bukhari:6351",
    author: {
      ar: "صحيح البخاري -	٦٣٥١",
      en: "Prophet Muhammad (ﷺ)",
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
      en: "Prophet Muhammad (ﷺ)",
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
      en: "Prophet Muhammad (ﷺ)",
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
      en: "And also adornments of gold. But all this were nothing but conveniences of the present life: The Hereafter, in the sight of thy Lord is for the Righteous.",
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
      ar: "﴾بَلْ تُؤْثِرُونَ ٱلْحَيَوٰةَ ٱلدُّنْيَا ﴿١٦﴾ وَٱلْـَٔاخِرَةُ خَيْرٌۭ وَأَبْقَىٰٓ ﴿١٧",
      en: "Nay (behold), ye prefer the life of this world; But the Hereafter is better and more enduring.",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/24/14",
    author: {
      ar: "سورة النور - آية ١٤",
      en: "Chapter 24 (The Light), 14",
    },
    text: {
      ar: "وَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكُمْ وَرَحْمَتُهُۥ فِى ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ لَمَسَّكُمْ فِى مَآ أَفَضْتُمْ فِيهِ عَذَابٌ عَظِيمٌ",
      en: "Were it not for the grace and mercy of Allah on you, in this world and the Hereafter, a grievous penalty would have seized you in that ye rushed glibly into this affair.",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/2/253",
    author: {
      ar: "سورة البقرة - آية ٢٥٣",
      en: "Chapter 2 (The Cow), verse 253",
    },
    text: {
      ar: "وَلَـٰكِنَّ ٱللَّهَ يَفْعَلُ مَا يُرِيدُ...",
      en: "....but Allah Fulfilleth His plan.",
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
      en: "Doth Allah accomplish what He willeth.",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/2/26",
    author: {
      ar: "سورة البقرة - آية ٢٦",
      en: "Chapter 2 (The Cow), 26",
    },
    text: {
      ar: "إِنَّ ٱللَّهَ لَا يَسْتَحْىِۦٓ أَن يَضْرِبَ مَثَلًۭا مَّا بَعُوضَةًۭ فَمَا فَوْقَهَا ۚ فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ فَيَعْلَمُونَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ ۖ وَأَمَّا ٱلَّذِينَ كَفَرُوا۟ فَيَقُولُونَ مَاذَآ أَرَادَ ٱللَّهُ بِهَـٰذَا مَثَلًۭا ۘ يُضِلُّ بِهِۦ كَثِيرًۭا وَيَهْدِى بِهِۦ كَثِيرًۭا ۚ وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلْفَـٰسِقِينَ",
      en: 'Allah disdains not to use the similitude of things, lowest as well as highest. Those who believe know that it is truth from their Lord; but those who reject Faith say: "What means Allah by this similitude?" By it He causes many to stray, and many He leads into the right path; but He causes not to stray, except those who forsake (the path)',
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
      en: "What is the life of this world but play and amusement? But best is the home in the hereafter, for those who are righteous. Will ye not then understand?",
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
      en: "O my people! This worldly life is only ˹a fleeting˺ enjoyment, whereas the Hereafter is truly the home of settlement.",
    },
  },
  {
    type: "Quran",
    src: "https://quran.com/2/282",
    author: {
      ar: "سورة البقرة - أية ٢٨٢",
      en: "Chapter 2 (The Cow), 282",
    },
    text: {
      ar: "ۚ وَلَا يَأْبَ كَاتِبٌ أَن يَكْتُبَ كَمَا عَلَّمَهُ ٱللَّهُ...",
      en: "...Let not the scribe refuse to write: as Allah Has taught him.",
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
      ar: "ۚوَمـا مِـن كـاتِـبٍ إِلا سَـيـفني وَيَبقي الدَهر ما كَتَبتَ يَداه\n فَـلا تَـكـتُـب بِـيَـدك غَير شَيءٍ يَـسـرك في القِيامة إِن تَراه",
      en: null,
    },
  },
];
