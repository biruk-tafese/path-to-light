import type { EmotionChoice, Scene } from "@/lib/types";

export const scenes: Scene[] = [
  {
    id: "promise",
    title: { am: "የተስፋ መጀመሪያ", en: "The First Promise" },
    text: {
      am: "በጨለማ ዘመን መካከል ብርሃን እንደሚመጣ ቃል ተሰጠ።",
      en: "In a dark age, a promise was spoken that light would come.",
    },
    historical: {
      year: { am: "ክ.በ. 700 አካባቢ", en: "Around 700 BCE" },
      location: { am: "ይሁዳ", en: "Judah" },
      context: {
        am: "አስቸጋሪ ፖለቲካዊ ጊዜ፣ ሕዝቡ በፍርሃት ውስጥ ነበር።",
        en: "A tense political era where people lived with fear and uncertainty.",
      },
    },
    biblical: {
      reference: { am: "ኢሳይያስ 9:2", en: "Isaiah 9:2" },
      excerpt: {
        am: "በጨለማ የሚሄዱ ሕዝቦች ታላቅ ብርሃን አዩ።",
        en: "The people walking in darkness have seen a great light.",
      },
    },
    wordsActions: {
      am: "እግዚአብሔር በምዕራብ እንኳን ተስፋ አለ ብሎ አናገረ።",
      en: "God spoke hope even before the dawn was visible.",
    },
    evidence: {
      am: "የቅዱስ ጽሑፍ ቅጂዎች እነዚህ ትንቢቶች በብዙ ክፍለ ዘመናት የተጠበቁ መሆናቸውን ያሳያሉ።",
      en: "Ancient manuscript traditions show these prophecies were preserved across centuries.",
    },
    spiritualMeaning: {
      am: "ተስፋ በጨለማ መካከል ይጀምራል።",
      en: "Hope can begin in the middle of darkness.",
    },
    audio: "/audio/narration/promise.mp3",
    background: "linear-gradient(155deg, #76684a 0%, #c8b07e 45%, #efe3bf 100%)",
    emotion: "reflection",
  },
  {
    id: "birth",
    title: { am: "ጸጥ ሌሊት ውስጥ ልደት", en: "Birth in a Quiet Night" },
    text: {
      am: "ታላቅ ታሪክ በትንሽ ስፍራ በጸጥታ ተጀመረ።",
      en: "A great story began quietly in a small place.",
    },
    historical: {
      year: { am: "ክ.አ. 4-6 አካባቢ", en: "Around 6-4 BCE" },
      location: { am: "ቤተልሔም", en: "Bethlehem" },
      context: {
        am: "ይሁዳ በሮማዊ ግዛት ስር ነበር።",
        en: "Judea was under Roman imperial administration.",
      },
    },
    biblical: {
      reference: { am: "ሉቃስ 2:11", en: "Luke 2:11" },
      excerpt: {
        am: "ዛሬ አዳኝ ተወለደላችሁ።",
        en: "Today a Savior has been born to you.",
      },
    },
    wordsActions: {
      am: "ሰማያዊ መልእክት በፍርሃት ላይ ሰላምን አመጣ።",
      en: "A heavenly message brought peace into fearful hearts.",
    },
    evidence: {
      am: "ቤተልሔም እና የዘመኑ ባህላዊ መረጃዎች እነዚህን ትርጓሜዎች ከታሪካዊ አውድ ጋር ያጣጣማሉ።",
      en: "Regional records and cultural context from Bethlehem align with the period described.",
    },
    spiritualMeaning: {
      am: "ብርሃን በትህትና ይገባል።",
      en: "Light often enters through humility.",
    },
    audio: "/audio/narration/birth.mp3",
    background: "linear-gradient(160deg, #8b704f 0%, #d4bd8e 50%, #f4e7cb 100%)",
    emotion: "hope",
  },
  {
    id: "ministry",
    title: { am: "በሕዝብ መካከል መራመድ", en: "Walking Among People" },
    text: {
      am: "እርሱ ደካሞችን አገኘ፣ ቁስለኞችን ነካ።",
      en: "He met the weary and touched the wounded.",
    },
    historical: {
      year: { am: "ክ.አ. 27-30", en: "Around 27-30 CE" },
      location: { am: "ገሊላ እና ይሁዳ", en: "Galilee and Judea" },
      context: {
        am: "በከባድ ግብር እና ማኅበራዊ ግፍ የተጫነ ማህበር።",
        en: "Communities burdened by taxation, hierarchy, and social pressure.",
      },
    },
    biblical: {
      reference: { am: "ማቴዎስ 11:28", en: "Matthew 11:28" },
      excerpt: {
        am: "ደክማችሁ የተሸከማችሁም ሁላችሁ ወደ እኔ ኑ።",
        en: "Come to me, all who are weary and burdened.",
      },
    },
    wordsActions: {
      am: "ሕመምን በቃል እና በርህራሄ አዳነ።",
      en: "He answered pain with words and acts of compassion.",
    },
    evidence: {
      am: "የመጀመሪያ ክፍለ ዘመን የይሁዳ ማህበረሰብ አውድ የወንጌል ታሪኮችን በተመጣጣኝ መልኩ ያበረታታል።",
      en: "First-century Judean social context supports the everyday settings described in the Gospels.",
    },
    spiritualMeaning: {
      am: "ምሕረት ወደ ደካማው ይሄዳል።",
      en: "Mercy walks toward the weary.",
    },
    audio: "/audio/narration/ministry.mp3",
    background: "linear-gradient(160deg, #6f674f 0%, #b9b08f 50%, #e5dcc1 100%)",
    emotion: "calm",
  },
  {
    id: "cross",
    title: { am: "የፍቅር ዋጋ", en: "The Cost of Love" },
    text: {
      am: "በመስቀል ላይ ዝምታ ነበር፣ ነገር ግን ፍቅር ተናገረ።",
      en: "At the cross there was silence, yet love was speaking.",
    },
    historical: {
      year: { am: "ክ.አ. 30 አካባቢ", en: "Around 30 CE" },
      location: { am: "የሩሳሌም", en: "Jerusalem" },
      context: {
        am: "በፋሲካ ወቅት ከተማዋ በብዙ ሕዝብ ተሞልታ ነበር።",
        en: "The city was crowded during Passover under close Roman security.",
      },
    },
    biblical: {
      reference: { am: "ዮሐንስ 19:30", en: "John 19:30" },
      excerpt: {
        am: "ተፈጸመ።",
        en: "It is finished.",
      },
    },
    wordsActions: {
      am: "በስቃይ ውስጥም ምሕረትን አልተወም።",
      en: "Even in suffering, He did not abandon mercy.",
    },
    evidence: {
      am: "የሮማዊ የመስቀል ቅጣት ሥርዓት በዚያን ዘመን በስፋት የታወቀ ነበር።",
      en: "Roman crucifixion practices are historically documented in this period.",
    },
    spiritualMeaning: {
      am: "ፍቅር እስከ መጨረሻ ይጸናል።",
      en: "Love remains faithful to the end.",
    },
    audio: "/audio/narration/cross.mp3",
    background: "linear-gradient(160deg, #5a4f44 0%, #9a8c77 48%, #d5c7ae 100%)",
    emotion: "dark",
  },
  {
    id: "resurrection",
    title: { am: "አዲስ ንጋት", en: "A New Dawn" },
    text: {
      am: "መቃብሩ መጨረሻ አልሆነም፤ ብርሃን ዳግም ተበራ።",
      en: "The tomb was not the end; light rose again.",
    },
    historical: {
      year: { am: "ክ.አ. 30 አካባቢ", en: "Around 30 CE" },
      location: { am: "የሩሳሌም አቅራቢያ", en: "Near Jerusalem" },
      context: {
        am: "የሐዘን እና ግርማ ሰዓት ወደ ተስፋ ተለወጠ።",
        en: "A moment of grief and fear turned into hope.",
      },
    },
    biblical: {
      reference: { am: "ማቴዎስ 28:6", en: "Matthew 28:6" },
      excerpt: {
        am: "እርሱ ተነስቶአል።",
        en: "He is risen.",
      },
    },
    wordsActions: {
      am: "ሞት የመጨረሻ ቃል እንዳይሆን አሳየ።",
      en: "He showed that death would not have the final word.",
    },
    evidence: {
      am: "የመጀመሪያ ማህበረ ክርስቲያን ምስክርነቶች በፍጥነት መተላለፋቸው ይህን ትርኢት በታሪክ ያሳያል።",
      en: "The rapid spread of early resurrection testimony is a notable historical feature.",
    },
    spiritualMeaning: {
      am: "አዲስ ሕይወት ይቻላል።",
      en: "New life is possible.",
    },
    audio: "/audio/narration/resurrection.mp3",
    background: "linear-gradient(160deg, #8a7c5f 0%, #d7c89f 50%, #f4ead0 100%)",
    emotion: "hope",
  },
  {
    id: "response",
    title: { am: "አሁን ምን ልታደርግ ነው?", en: "What Should You Do Now?" },
    text: {
      am: "እምነት ካለህ በእሱ ቀስ ብለህ ተቀመጥ፤ እምነት ካልነበረህም በጸጥታ ጥያቄ ይዘህ ቀጥል።",
      en: "If you believe, stay with it gently. If you do not yet believe, keep going with your questions in peace.",
    },
    historical: {
      year: { am: "ዛሬ", en: "Today" },
      location: { am: "የራስህ ልብ", en: "Your own heart" },
      context: {
        am: "ይህ ክፍል ለማሳየት እንጂ ለመጫን አይደለም።",
        en: "This moment is here to guide, not to pressure.",
      },
    },
    biblical: {
      reference: { am: "ዮሐንስ 20:31", en: "John 20:31" },
      excerpt: {
        am: "እነዚህ የተጻፉት ታምነው ሕይወት እንዲኖር ነው።",
        en: "These are written so that you may believe and have life.",
      },
    },
    wordsActions: {
      am: "አንተን የሚገፋ አይደለም፤ አንተን በቀስታ ይጋብዛል።",
      en: "This does not push you; it gently invites you.",
    },
    evidence: {
      am: "ሰዎች ብዙ ጊዜ መጀመሪያ በጥያቄ ይጀምራሉ። ያ ደግሞ እዚህ ቦታ ይችላል።",
      en: "Many people begin with questions. That is welcome here too.",
    },
    spiritualMeaning: {
      am: "ለማወቅ መጠየቅ ጥሩ መጀመሪያ ነው።",
      en: "Asking honest questions is a good beginning.",
    },
    audio: "/audio/narration/response.mp3",
    background: "linear-gradient(160deg, #8f8266 0%, #d8cab0 50%, #f3e7cf 100%)",
    emotion: "reflection",
  },
];

export const emotionChoices: EmotionChoice[] = [
  {
    key: "lost",
    label: { am: "ጠፍቻለሁ", en: "Lost" },
    hint: {
      am: "ከጨለማ ወደ ብርሃን የሚመራ መንገድ",
      en: "A path that moves from darkness to light",
    },
    sceneIds: ["promise", "cross", "resurrection", "response"],
  },
  {
    key: "tired",
    label: { am: "ደክሜአለሁ", en: "Tired" },
    hint: {
      am: "የምሕረት እና እረፍት ጉዞ",
      en: "A journey of mercy and rest",
    },
    sceneIds: ["ministry", "cross", "resurrection", "response"],
  },
  {
    key: "hopeful",
    label: { am: "ተስፋ አለኝ", en: "Hopeful" },
    hint: {
      am: "ተስፋ ከትንቢት እስከ ትንሣኤ",
      en: "Hope from promise to resurrection",
    },
    sceneIds: ["promise", "birth", "resurrection", "response"],
  },
  {
    key: "searching",
    label: { am: "እፈልጋለሁ", en: "Searching" },
    hint: {
      am: "ትርጉምን እና ሰላምን በቀስታ መፈለግ",
      en: "A quiet search for peace and meaning",
    },
    sceneIds: ["birth", "ministry", "cross", "resurrection", "response"],
  },
];
