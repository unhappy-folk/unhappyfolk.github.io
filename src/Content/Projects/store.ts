import { Organisation } from "./model";

const orgs: Organisation[] = [
  {
    name: {
      ar: "قرآن",
      en: "Quran",
    },
    logo: "https://avatars.githubusercontent.com/u/21640?v=4",
    links: {
      github: "https://github.com/quran",
      donation: "https://donate.quran.com/?showDonationPopup",
      website: "https://quran.com/",
    },
    about: {
      ar: "منصة للقرآن الكريم بلغات عدة ، ويمكن للمستخدم أن يستمع له بأصواتٍ لقُرّاء كُثُر",
      en: "Quran.com was founded in 1995. The website aims to make it easy for anyone to read, study, and learn the Quran.",
    },
    projects: [
      {
        name: { ar: "قرآن آندرويد", en: "Quran for Android" },
        about: {
          ar: "تطبيق قرآن آندرويد هو تطبيق مجاني، مفتوح المصدر، لأجهزة الآندرويد",
          en: "Quran for Android is a free Quran application for Android devices",
        },
        links: {
          website:
            "https://play.google.com/store/apps/details?id=com.quran.labs.androidquran&pli=1",
          github: "https://github.com/quran/quran_android",
        },
      },
      {
        name: { ar: "قرآن للأيفون", en: "Quran for iOS" },
        links: {
          website: "https://apps.apple.com/app/id1118663303",
          github: "https://github.com/quran/quran-ios",
        },
        about: {
          ar: "لقد أصبح من السهل قراءة القرآن بالشارع، وحفظه، والاستماع إلى قارئك المفضل",
          en: "Read the Quran on the go, memorize it and listen to your favorite reciters",
        },
      },
      {
        name: { en: "Quran.com Website", ar: "موقع قرآن.كوم" },
        links: {
          github: "https://github.com/quran/quran.com-frontend-next",
          website: "https://quran.com",
        },
        about: {
          en: "Read, study, and learn the Quran",
        },
      },
      {
        name: { en: "Quran.com API" },
        about: {
          en: "API for Quran.com",
        },
        links: {
          github: "https://github.com/quran/quran.com-api",
        },
      },
    ],
  },
  {
    name: { en: "Sunnah", ar: "سُنَّة" },
    logo: "https://avatars.githubusercontent.com/u/23619131?s=200&v=4",
    links: {
      github: "https://github.com/sunnah-com",
      donation: "https://sunnah.com/support",
      website: "https://sunnah.com/",
    },
    about: {
      ar: "منصة لاشهر كتب الحديث الموجودة في التراث الإسلامي بلغاتٍ عديدة ",
      en: "Our goal is to make authentic, comprehensive, and beneficial information pertaining to the sunnah of the Prophet Muhammad (saws) accessible to as many people around the world as possible in order to facilitate research and promote its mainstream and broadly accepted understanding.",
    },
    projects: [
      {
        name: { en: "Sunnah API" },
        about: { en: "API for sunnah.com" },
        links: {
          github: "https://github.com/sunnah-com/api",
        },
      },
      {
        name: { en: "Sunnah Website" },
        links: {
          github: "https://github.com/sunnah-com/website",
          website: "https://sunnah.com/",
        },
        about: {
          en: "The frontend for Sunnah website.",
        },
      },
    ],
  },
  {
    name: { en: "Nuqayah", ar: "نُقاية" },
    about: {
      ar: "أنفع التطبيقات والمواقع لكل مسلم",
      en: "Most useful apps and websites for every Muslim",
    },
    logo: "https://nuqayah.com/assets/nuqayah.svg",
    links: {
      github: "https://github.com/nuqayah/deen-projects/issues",
      donation: "https://nuqayah.com/#donate",
      website: "https://nuqayah.com/",
      twitter: "https://twitter.com/nuqayah",
      telegram: "https://t.me/nuqayah",
    },
    projects: [
      {
        name: { en: "Quranic Researcher", ar: "الباحث القرآني" },
        about: {
          ar: "الأول في تفسير القرآن وعلومه",
        },
        links: {
          website: "https://tafsir.app",
          github: "https://github.com/nuqayah/deen-projects/issues",
        },
      },
      {
        name: { en: "Hadith Researcher", ar: "الباحث الحديثي" },
        about: {
          ar: "بحث سريع في السنة",
        },
        links: {
          website: "https://sunnah.one",
          github: "https://github.com/nuqayah/deen-projects/issues",
        },
      },
      {
        name: { en: "Interactive Tafsir", ar: "التفسير التفاعلي" },
        about: {
          ar: "استمع إلى أربعة تفاسير",
        },
        links: {
          website: "https://read.tafsir.one",
          github: "https://github.com/nuqayah/deen-projects/issues",
        },
      },
    ],
  },
];

export default orgs;
