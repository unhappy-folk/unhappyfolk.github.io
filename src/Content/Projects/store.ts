import { Organisation } from "./model";

const orgs: Organisation[] = [
  {
    id: "nuqayah",
    name: { en: "Nuqayah", ar: "نُقاية" },
    about: {
      ar: "أنفع التطبيقات والمواقع لكل مسلم.",
      en: "Most useful apps and websites for every Muslim.",
    },
    logo: "https://nuqayah.com/assets/nuqayah.svg",
    links: {
      github: "https://github.com/nuqayah/deen-projects/issues",
      donation: "https://nuqayah.com/#donate",
      website: "https://nuqayah.com/",
      twitter: "https://twitter.com/nuqayah",
      telegram: "https://t.me/nuqayah",
    },
    contribution: {
      github: {
        org: "nuqayah",
        repo: "deen-projects",
      },
      authorGuide: "https://t.me/nuqayah/142",
      classification: {
        class1: [{ name: "urgency: 3" }, { name: "priority: high" }],
        class2: [{ name: "urgency: 2" }],
        class3: [{ name: "urgency: 1" }],
        ignored: [],
      },
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
  {
    id: "quran",
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
        contribution: {
          github: {
            org: "quran",
            repo: "quran_android",
          },
          classification: {
            class1: [
              { name: "data" },
              { name: "minor" },
              { name: "dependencies" },
            ],
            class2: [{ name: "improvement" }, { name: "major" }],
            class3: [{ name: "suggestions" }, { name: "new feature" }],
            ignored: [
              { name: "inquiry" },
              { name: "suggestions" },
              { name: "in progress" },
            ],
          },
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
        contribution: {
          github: {
            org: "quran",
            repo: "quran-ios",
          },
          classification: {
            class1: [
              { name: "Starter Task" },
              { name: "P1" },
              { name: "Code" },
            ],
            class2: [
              { name: "feature" },
              { name: "Quran.com" },
              { name: "Settings" },
              { name: "P2" },
            ],
            class3: [
              { name: "Support Different Mushafs" },
              { name: "users requested" },
              { name: "P3" },
              { name: "Advanced Audio Player" },
              { name: "Social interaction" },
            ],
            ignored: [{ name: "Need More Info" }],
          },
        },
      },
      {
        name: { en: "Quran.com Website", ar: "موقع قرآن.كوم" },
        links: {
          github: "https://github.com/quran/quran.com-frontend-next",
          website: "https://quran.com",
        },
        about: {
          en: "Next.js Frontend. Read, study, and learn the Quran",
        },
        contribution: {
          github: {
            org: "quran",
            repo: "quran.com-frontend-next",
          },
          classification: {
            // most labels are GitHub's standard labels
            class1: [{ name: "dependencies" }],
            class2: [],
            class3: [],
            ignored: [],
          },
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
        contribution: {
          github: {
            org: "quran",
            repo: "quran.com-api",
          },
          classification: {
            // most labels are GitHub's standard labels
            class1: [
              { name: "data" },
              { name: "dependencies" },
              { name: "translation error" },
              { name: "quranenc-update" },
            ],
            class2: [{ name: "new recitation" }, { name: "segment" }],
            class3: [{ name: "media" }, { name: "elasticsearch" }],
            ignored: [{ name: "planned" }],
          },
        },
      },
    ],
  },
  {
    id: "sunnah-com",
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
        contribution: {
          github: {
            org: "sunnah-com",
            repo: "api",
          },
          classification: {
            class1: [{ name: "dependencies" }],
            class2: [{ name: "Additional Feature" }],
            // most labels are GitHub's standard labels
            class3: [],
            ignored: [],
          },
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
        contribution: {
          github: {
            org: "sunnah-com",
            repo: "website",
          },
          classification: {
            // most labels are GitHub's standard labels
            class1: [{ name: "dependencies" }],
            class2: [],
            class3: [],
            ignored: [],
          },
        },
      },
    ],
  },
];

export default orgs;
