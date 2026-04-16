import type { LocalizedText } from "@/lib/types";

export type JourneyScene = {
  id: "lost" | "tired" | "guilty" | "searching" | "hopeless";
  icon: "compass" | "moon" | "scale" | "search" | "fog";
  title: LocalizedText;
  description: LocalizedText;
  solution: LocalizedText;
  verse: {
    ref: string;
    text: LocalizedText;
  };
  reflection: LocalizedText;
};

export const journeyIntro = {
  question: {
    am: "እርስዎ እንዴት ይሰማዎታል?",
    en: "Do you feel?",
  },
  subtitle: {
    am: "እያንዳንዱን ስሜት በቀስታ ተከተል።",
    en: "Move slowly through each feeling.",
  },
};

export const journeyScenes: JourneyScene[] = [
  {
    id: "lost",
    icon: "compass",
    title: { am: "ጠፍቼ ነኝ", en: "Feeling Lost" },
    description: {
      am: "አንዳንድ ጊዜ ሕይወት አቅጣጫ የለውም ይመስላል።",
      en: "Sometimes life feels unclear, like you are walking without direction.",
    },
    solution: {
      am: "ኢየሱስ መንገድ እንደሆነ ይጋብዛል፤ በቀስታ መመራት ትችላለህ።",
      en: "Jesus invites you as the way forward, guiding gently when direction feels lost.",
    },
    verse: {
      ref: "John 14:6",
      text: {
        am: "እኔ መንገድ ነኝ...",
        en: "I am the way...",
      },
    },
    reflection: {
      am: "አቅጣጫ የለህም አይደለም።",
      en: "You are not without direction.",
    },
  },
  {
    id: "tired",
    icon: "moon",
    title: { am: "ደክሜአለሁ", en: "Feeling Tired" },
    description: {
      am: "ልብህ እና አእምሮህ ተሸክመው እንዳሉ ሊሰማህ ይችላል።",
      en: "Your heart and mind can feel heavy and worn out.",
    },
    solution: {
      am: "ኢየሱስ ለደካማዎች እረፍት እንዳለ ይናገራል።",
      en: "Jesus offers rest to those who feel exhausted and burdened.",
    },
    verse: {
      ref: "Matthew 11:28",
      text: {
        am: "ደክማችሁ ሁላችሁ ወደ እኔ ኑ።",
        en: "Come to me, all who are weary.",
      },
    },
    reflection: {
      am: "እረፍት ይቻላል።",
      en: "Rest is possible.",
    },
  },
  {
    id: "guilty",
    icon: "scale",
    title: { am: "ጥፋተኛ እሰማለሁ", en: "Feeling Guilty" },
    description: {
      am: "ያለፉ ስህተቶች ልብን በከባድ ሊይዙ ይችላሉ።",
      en: "Past mistakes can weigh heavily on your heart.",
    },
    solution: {
      am: "ኢየሱስ ይቅርታን እና አዲስ ጅምርን በርህራሄ ይሰጣል።",
      en: "Jesus offers forgiveness and a new beginning with compassion.",
    },
    verse: {
      ref: "1 John 1:9",
      text: {
        am: "እንናገር ከሆነ ይቅር ይላል።",
        en: "If we confess, He is faithful to forgive.",
      },
    },
    reflection: {
      am: "አዲስ ጅምር አለ።",
      en: "A new beginning is open to you.",
    },
  },
  {
    id: "searching",
    icon: "search",
    title: { am: "እፈልጋለሁ", en: "Feeling Searching" },
    description: {
      am: "ትርጉም እና እውነት ለመፈለግ ውስጥህ ጥያቄ ሊኖር ይችላል።",
      en: "You may carry deep questions while searching for meaning and truth.",
    },
    solution: {
      am: "ኢየሱስ የሚፈልጉትን እንዲያገኙ በጸጥታ ይጋብዛል።",
      en: "Jesus welcomes seekers and meets honest questions with grace.",
    },
    verse: {
      ref: "Jeremiah 29:13",
      text: {
        am: "በልባችሁ ሁሉ ብትፈልጉኝ ታገኙኛላችሁ።",
        en: "You will seek me and find me when you seek with all your heart.",
      },
    },
    reflection: {
      am: "ጥያቄዎችህ ዋጋ አላቸው።",
      en: "Your questions are welcome.",
    },
  },
  {
    id: "hopeless",
    icon: "fog",
    title: { am: "ተስፋ የለኝም", en: "Feeling Hopeless" },
    description: {
      am: "አንዳንድ ጊዜ ወደፊት ምንም ብርሃን የለም እንደሚል ሊሰማ ይችላል።",
      en: "At times the future can feel empty, like no light is ahead.",
    },
    solution: {
      am: "ኢየሱስ በጨለማ ውስጥ እንኳን ተስፋ እንዳለ ያሳያል።",
      en: "Jesus brings hope even in moments that seem darkest.",
    },
    verse: {
      ref: "John 8:12",
      text: {
        am: "እኔ የዓለም ብርሃን ነኝ።",
        en: "I am the light of the world.",
      },
    },
    reflection: {
      am: "ብርሃን ዳግም ይታያል።",
      en: "Light can return.",
    },
  },
];
