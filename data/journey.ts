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
    am: "ምን ይሰማዎታል?",
    en: "Do you feel?",
  },
  subtitle: {
    am: "በእያንዳንዱ ስሜት ውስጥ በዝግታ ይለፉ።",
    en: "Move slowly through each feeling.",
  },
};

export const journeyScenes: JourneyScene[] = [
  {
    id: "lost",
    icon: "compass",
    title: { am: "መጥፋት", en: "Feeling Lost" },
    description: {
      am: "አንዳንድ ጊዜ ሕይወት አቅጣጫ እንደጠፋባትና ግራ የሚያጋባ ጉዞ እንደሆነ ሊሰማ ይችላል።",
      en: "Sometimes life feels unclear, like you are walking without direction.",
    },
    solution: {
      am: "ኢየሱስ እውነተኛው መንገድ እንደሆነ ይጋብዝዎታል፤ በዝግታም ይመራዎታል።",
      en: "Jesus invites you as the way forward, guiding gently when direction feels lost.",
    },
    verse: {
      ref: "John 14:6",
      text: {
        am: "እኔ መንገድና እውነት ሕይወትም ነኝ።",
        en: "I am the way...",
      },
    },
    reflection: {
      am: "ብቻዎንና ያለ አቅጣጫ አይደሉም።",
      en: "You are not without direction.",
    },
  },
  {
    id: "tired",
    icon: "moon",
    title: { am: "መድከም", en: "Feeling Tired" },
    description: {
      am: "ልብዎና አእምሮዎ በከባድ ሸክም እንደዛሉ ሊሰማዎት ይችላል።",
      en: "Your heart and mind can feel heavy and worn out.",
    },
    solution: {
      am: "ኢየሱስ ለደከሙና ለከበዳቸው ሁሉ እረፍት እንደሚሰጥ ቃል ይገባል።",
      en: "Jesus offers rest to those who feel exhausted and burdened.",
    },
    verse: {
      ref: "Matthew 11:28",
      text: {
        am: "እናንተ ደካሞች ሸክማችሁ የከበደ ሁሉ፥ ወደ እኔ ኑ፥ እኔም አሳርፋችኋለሁ።",
        en: "Come to me, all who are weary.",
      },
    },
    reflection: {
      am: "እውነተኛ እረፍት ማግኘት ይቻላል።",
      en: "Rest is possible.",
    },
  },
  {
    id: "guilty",
    icon: "scale",
    title: { am: "የበደለኛነት ስሜት", en: "Feeling Guilty" },
    description: {
      am: "ያለፉ ስህተቶችና በደሎች ልብዎን በጽኑ ሊያስጨንቁት ይችላሉ።",
      en: "Past mistakes can weigh heavily on your heart.",
    },
    solution: {
      am: "ኢየሱስ በርህራሄው ይቅርታንና አዲስ ጅምርን ይሰጥዎታል።",
      en: "Jesus offers forgiveness and a new beginning with compassion.",
    },
    verse: {
      ref: "1 John 1:9",
      text: {
        am: "በኃጢአታችን ብንናዘዝ ኃጢአታችንን ይቅር ሊለን ከዓመፃም ሁሉ ሊያነጻን የታመነና ጻድቅ ነው።",
        en: "If we confess, He is faithful to forgive.",
      },
    },
    reflection: {
      am: "አዲስ ጅምር ለሁላችን ክፍት ነው።",
      en: "A new beginning is open to you.",
    },
  },
  {
    id: "searching",
    icon: "search",
    title: { am: "መፈለግ", en: "Feeling Searching" },
    description: {
      am: "የሕይወትን ትርጉምና እውነት ለማግኘት በውስጥዎ ጥልቅ ጥያቄዎች ሊኖሩ ይችላሉ።",
      en: "You may carry deep questions while searching for meaning and truth.",
    },
    solution: {
      am: "ኢየሱስ ለሚፈልጉት ሁሉ መልስ አለው፤ ጥያቄዎንም በጸጋ ይቀበላል።",
      en: "Jesus welcomes seekers and meets honest questions with grace.",
    },
    verse: {
      ref: "Jeremiah 29:13",
      text: {
        am: "እናንተ ትሹኛላችሁ፥ በፍጹም ልባችሁም ከሻታችሁኝ ታገኙኛላችሁ።",
        en: "You will seek me and find me when you seek with all your heart.",
      },
    },
    reflection: {
      am: "ጥያቄዎችዎ ዋጋ አላቸው።",
      en: "Your questions are welcome.",
    },
  },
  {
    id: "hopeless",
    icon: "fog",
    title: { am: "ተስፋ መቁረጥ", en: "Feeling Hopeless" },
    description: {
      am: "አንዳንድ ጊዜ ወደፊት ምንም ብርሃን የሌለና ጨለማ ብቻ ሆኖ ሊታይ ይችላል።",
      en: "At times the future can feel empty, like no light is ahead.",
    },
    solution: {
      am: "ኢየሱስ በታላቅ ጨለማ ውስጥ እንኳን የሚያበራ ተስፋ መሆኑን ያሳያል።",
      en: "Jesus brings hope even in moments that seem darkest.",
    },
    verse: {
      ref: "John 8:12",
      text: {
        am: "እኔ የዓለም ብርሃን ነኝ፤ የሚከተለኝ የሕይወት ብርሃን ይሆንለታል እንጂ በጨለማ አይመላለስም።",
        en: "I am the light of the world.",
      },
    },
    reflection: {
      am: "ብርሃን ዳግም ይበራል።",
      en: "Light can return.",
    },
  },
];