import type { EmotionChoice, Scene } from "@/lib/types";

export const scenes: Scene[] = [
  {
    id: "promise",
    title: { am: "የተስፋው መጀመሪያ", en: "The First Promise" },
    text: {
      am: "በጨለማና በድንቁርና ዘመን መካከል፣ ብርሃን ወደ ዓለም እንደሚመጣ የሚበስር ታላቅ ተስፋ ተሰጠ።",
      en: "In a dark age, a promise was spoken that light would come.",
    },
    historical: {
      year: { am: "ከክርስቶስ ልደት በፊት 700 ዓመተ ዓለም ገደማ", en: "Around 700 BCE" },
      location: { am: "ይሁዳ", en: "Judah" },
      context: {
        am: "ሕዝቡ በታላቅ የፖለቲካ ውጥረትና በፍርሃት ውስጥ የነበሩበት አስቸጋሪ ዘመን ነበር።",
        en: "A tense political era where people lived with fear and uncertainty.",
      },
    },
    biblical: {
      reference: { am: "ትንቢተ ኢሳይያስ 9:2", en: "Isaiah 9:2" },
      excerpt: {
        am: "በጨለማ የሄደ ሕዝብ ታላቅ ብርሃን አየ፤ በሞት ጥላ አገርም ለኖሩ ብርሃን ወጣላቸው።",
        en: "The people walking in darkness have seen a great light.",
      },
    },
    wordsActions: {
      am: "እግዚአብሔር ገና ንጋቱ ሳይታይ፣ በጨለማው መካከል ተስፋ መኖሩን ለሕዝቡ ተናገረ።",
      en: "God spoke hope even before the dawn was visible.",
    },
    evidence: {
      am: "ጥንታውያን የብራና ቅጂዎች እነዚህ ትንቢቶች ለብዙ ክፍለ ዘመናት ሳይበረዙ ተጠብቀው መቆየታቸውን ያረጋግጣሉ።",
      en: "Ancient manuscript traditions show these prophecies were preserved across centuries.",
    },
    spiritualMeaning: {
      am: "እውነተኛ ተስፋ የሚጀምረው በጨለማው መካከል ነው።",
      en: "Hope can begin in the middle of darkness.",
    },
    audio: "/audio/narration/promise.mp3",
    background: "linear-gradient(155deg, #76684a 0%, #c8b07e 45%, #efe3bf 100%)",
    emotion: "reflection",
  },
  {
    id: "birth",
    title: { am: "በጸጥታ ሌሊት የተከናወነ ልደት", en: "Birth in a Quiet Night" },
    text: {
      am: "የዓለምን ታሪክ የለወጠው ታላቅ ክስተት፣ በቤተልሔም በረት ውስጥ በታላቅ ትሕትና ተጀመረ።",
      en: "A great story began quietly in a small place.",
    },
    historical: {
      year: { am: "ከክርስቶስ ልደት በፊት ከ4-6 ዓመተ ዓለም ገደማ", en: "Around 6-4 BCE" },
      location: { am: "ቤተልሔም", en: "Bethlehem" },
      context: {
        am: "ይሁዳ በሮማውያን የቅኝ ግዛትና በታላቁ ሄሮድስ የጭቆና አገዛዝ ሥር ነበረች።",
        en: "Judea was under Roman imperial administration.",
      },
    },
    biblical: {
      reference: { am: "የሉቃስ ወንጌል 2:11", en: "Luke 2:11" },
      excerpt: {
        am: "ዛሬ በዳዊት ከተማ መድኃኒት እርሱም ክርስቶስ ጌታ የሆነ ተወልዶላችኋልና።",
        en: "Today a Savior has been born to you.",
      },
    },
    wordsActions: {
      am: "ሰማያዊው የምሥራች በሰው ልጆች ልብ ውስጥ በነገሠው ፍርሃት ላይ የሰላምን ብርሃን አበራ።",
      en: "A heavenly message brought peace into fearful hearts.",
    },
    evidence: {
      am: "የቤተልሔም ታሪካዊ አቀማመጥና የዘመኑ ባህላዊ መረጃዎች ከወንጌል ዘገባዎች ጋር ፍጹም ይጣጣማሉ።",
      en: "Regional records and cultural context from Bethlehem align with the period described.",
    },
    spiritualMeaning: {
      am: "የእግዚአብሔር ብርሃን ወደ ዓለም የሚገባው በትሕትና ነው።",
      en: "Light often enters through humility.",
    },
    audio: "/audio/narration/birth.mp3",
    background: "linear-gradient(160deg, #8b704f 0%, #d4bd8e 50%, #f4e7cb 100%)",
    emotion: "hope",
  },
  {
    id: "ministry",
    title: { am: "በሰዎች መካከል መመላለስ", en: "Walking Among People" },
    text: {
      am: "ኢየሱስ በመካከላችን ተመላለሰ፤ የዛሉትን አበረታ፣ የቆሰሉትንም ልባቸውን ጠገነ።",
      en: "He met the weary and touched the wounded.",
    },
    historical: {
      year: { am: "ከክርስቶስ ልደት በኋላ 27-30 ዓመተ ምሕረት", en: "Around 27-30 CE" },
      location: { am: "ገሊላ እና ይሁዳ", en: "Galilee and Judea" },
      context: {
        am: "ሕዝቡ በከባድ ግብርና በማኅበራዊ ግፍ ተጭኖ በነበረበት ጊዜ የነጻነትን ቃል አበሰረ።",
        en: "Communities burdened by taxation, hierarchy, and social pressure.",
      },
    },
    biblical: {
      reference: { am: "የማቴዎስ ወንጌል 11:28", en: "Matthew 11:28" },
      excerpt: {
        am: "እናንተ ደካሞች ሸክማችሁ የከበደ ሁሉ፥ ወደ እኔ ኑ፥ እኔም አሳርፋችኋለሁ።",
        en: "Come to me, all who are weary and burdened.",
      },
    },
    wordsActions: {
      am: "የሰዎችን ሕመም በርኅራኄ ተመለከተ፤ በቃሉም የታመሙትንና ልባቸው የተሰበረውን ፈወሰ።",
      en: "He answered pain with words and acts of compassion.",
    },
    evidence: {
      am: "የመጀመሪያው ክፍለ ዘመን የአይሁድ ማኅበረሰብ አውድ በወንጌላት ውስጥ የተጠቀሱትን ታሪኮች ትክክለኛነት ያረጋግጣል።",
      en: "First-century Judean social context supports the everyday settings described in the Gospels.",
    },
    spiritualMeaning: {
      am: "መለኮታዊ ምሕረት ወደ ደካማውና ወደ ተናቀው ይሄዳል።",
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
      am: "በመስቀል ላይ ታላቅ ዝምታ ሰፍኖ ነበር፤ ሆኖም ያ ዝምታ ከቃላት በላይ ስለ ፍቅር ተናገረ።",
      en: "At the cross there was silence, yet love was speaking.",
    },
    historical: {
      year: { am: "ከክርስቶስ ልደት በኋላ 30 ዓመተ ምሕረት ገደማ", en: "Around 30 CE" },
      location: { am: "ኢየሩሳሌም", en: "Jerusalem" },
      context: {
        am: "በፋሲካ በዓል ወቅት ከተማዋ በሕዝብ ተጥለቅልቃና በሮማውያን ጥብቅ ጥበቃ ሥር ነበረች።",
        en: "The city was crowded during Passover under close Roman security.",
      },
    },
    biblical: {
      reference: { am: "የዮሐንስ ወንጌል 19:30", en: "John 19:30" },
      excerpt: {
        am: "ኢየሱስም ሆምጣጤውን ከተቀበለ በኋላ፦ ተፈጸመ አለ፤ ራሱንም አዘንብሎ ነፍሱን አሳልፎ ሰጠ።",
        en: "It is finished.",
      },
    },
    wordsActions: {
      am: "በስቃዩና በመከራው መካከል እንኳን፣ ለበደሉት ምሕረትንና ይቅርታን ከመለመን አልተቆጠበም።",
      en: "Even in suffering, He did not abandon mercy.",
    },
    evidence: {
      am: "የሮማውያን የመስቀል ቅጣት አሰቃቂ ሥርዓት በታሪክና በአርኪኦሎጂ ማስረጃዎች በስፋት የተረጋገጠ ነው።",
      en: "Roman crucifixion practices are historically documented in this period.",
    },
    spiritualMeaning: {
      am: "እውነተኛ ፍቅር እስከ መጨረሻው መሥዋዕትነት ድረስ ይጸናል።",
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
      am: "መቃብሩ መጨረሻ አልነበረም፤ በሦስተኛው ቀን ሞትን ድል አድርጎ በመነሣት ለዓለም ብርሃን ሆነ።",
      en: "The tomb was not the end; light rose again.",
    },
    historical: {
      year: { am: "ከክርስቶስ ልደት በኋላ 30 ዓመተ ምሕረት ገደማ", en: "Around 30 CE" },
      location: { am: "በኢየሩሳሌም አቅራቢያ", en: "Near Jerusalem" },
      context: {
        am: "የሐዘንና የፍርሃት ሰዓት፣ ዓለምን ወደለወጠ ታላቅ ተስፋና ደስታ ተቀየረ።",
        en: "A moment of grief and fear turned into hope.",
      },
    },
    biblical: {
      reference: { am: "የማቴዎስ ወንጌል 28:6", en: "Matthew 28:6" },
      excerpt: {
        am: "እንደ ተናገረ ተነሥቶአልና በዚህ የለም፤ የተኛበትን ስፍራ ኑና እዩ።",
        en: "He is risen.",
      },
    },
    wordsActions: {
      am: "ሞት የመጨረሻ ቃል እንዳልሆነና ለሰው ልጆች ሁሉ የዘላለም ሕይወት መኖሩን አረጋገጠ።",
      en: "He showed that death would not have the final word.",
    },
    evidence: {
      am: "የመጀመሪያዎቹ ክርስቲያኖች ይህን እውነት ለማብሰር ሕይወታቸውን አሳልፈው መስጠታቸው የታሪክ ትልቅ ምዕራፍ ነው።",
      en: "The rapid spread of early resurrection testimony is a notable historical feature.",
    },
    spiritualMeaning: {
      am: "በክርስቶስ ትንሣኤ አዲስ ሕይወትና ተስፋ ለሁላችን ተሰጥቷል።",
      en: "New life is possible.",
    },
    audio: "/audio/narration/resurrection.mp3",
    background: "linear-gradient(160deg, #8a7c5f 0%, #d7c89f 50%, #f4ead0 100%)",
    emotion: "hope",
  },
  {
    id: "response",
    title: { am: "የእርስዎ ምላሽ ምንድን ነው?", en: "What Should You Do Now?" },
    text: {
      am: "ይህን ታሪክ ሲሰሙ እምነት ካደረብዎት በዚያ እውነት ውስጥ ያርፉ፤ ገና ጥያቄ ካለዎትም በሰላም መፈለግዎን ይቀጥሉ።",
      en: "If you believe, stay with it gently. If you do not yet believe, keep going with your questions in peace.",
    },
    historical: {
      year: { am: "ዛሬ", en: "Today" },
      location: { am: "በልብዎ ውስጥ", en: "Your own heart" },
      context: {
        am: "ይህ ጉዞ ዓላማው እውነትን ማሳየት እንጂ ማንንም ማስገደድ አይደለም።",
        en: "This moment is here to guide, not to pressure.",
      },
    },
    biblical: {
      reference: { am: "የዮሐንስ ወንጌል 20:31", en: "John 20:31" },
      excerpt: {
        am: "ነገር ግን ኢየሱስ እርሱ ክርስቶስ የእግዚአብሔር ልጅ እንደ ሆነ ታምኑ ዘንድ፥ አምናችሁም በስሙ ሕይወት ይሆንላችሁ ዘንድ ይህ ተጽፎአል።",
        en: "These are written so that you may believe and have life.",
      },
    },
    wordsActions: {
      am: "እግዚአብሔር በማንገላታት ሳይሆን፣ በፍቅርና በጸጥታ ወደ ራሱ ይጋብዝዎታል።",
      en: "This does not push you; it gently invites you.",
    },
    evidence: {
      am: "ብዙዎች ወደ እውነት የመጡት ከልብ በመነጨ ጥያቄ ነው፤ የእርስዎም ጥያቄ እዚህ ስፍራ ክብር አለው።",
      en: "Many people begin with questions. That is welcome here too.",
    },
    spiritualMeaning: {
      am: "እውነትን ለማወቅ በቅንነት መጠየቅ መልካም ጅምር ነው።",
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
    label: { am: "መጥፋት", en: "Lost" },
    hint: {
      am: "ከጨለማ ወደ ብርሃን የሚመራ የእውነት መንገድ",
      en: "A path that moves from darkness to light",
    },
    sceneIds: ["promise", "cross", "resurrection", "response"],
  },
  {
    key: "tired",
    label: { am: "መድከም", en: "Tired" },
    hint: {
      am: "መለኮታዊ ምሕረትና እውነተኛ እረፍት የሚገኝበት ጉዞ",
      en: "A journey of mercy and rest",
    },
    sceneIds: ["ministry", "cross", "resurrection", "response"],
  },
  {
    key: "hopeful",
    label: { am: "ተስፋ ማድረግ", en: "Hopeful" },
    hint: {
      am: "ከትቢት እስከ ትንሣኤ የጸና የተስፋ ጉዞ",
      en: "Hope from promise to resurrection",
    },
    sceneIds: ["promise", "birth", "resurrection", "response"],
  },
  {
    key: "searching",
    label: { am: "መፈለግ", en: "Searching" },
    hint: {
      am: "የሕይወትን ትርጉምና ሰላምን በጸጥታ የመፈለግ ጉዞ",
      en: "A quiet search for peace and meaning",
    },
    sceneIds: ["birth", "ministry", "cross", "resurrection", "response"],
  },
];