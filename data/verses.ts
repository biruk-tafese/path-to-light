import type { LocalizedText } from "@/lib/types";

export type VerseMoment = {
  id: string;
  verse: LocalizedText;
  ref: LocalizedText;
  details?: LocalizedText;
  context?: LocalizedText;
};

export const scriptureMoments: VerseMoment[] = [
  {
    id: "isaiah-9",
    verse: {
      am: "በጨለማ የሄደ ሕዝብ ታላቅ ብርሃን አየ፤ በሞት ጥላ አገርም ለኖሩ ብርሃን ወጣላቸው።",
      en: "The people walking in darkness have seen a great light; on those living in the land of the shadow of death a light has dawned.",
    },
    ref: { am: "ትንቢተ ኢሳይያስ 9:2", en: "Isaiah 9:2" },
  },
  {
    id: "matt-11",
    verse: {
      am: "እናንተ ደካሞች ሸክማችሁ የከበደ ሁሉ፥ ወደ እኔ ኑ፥ እኔም አሳርፋችኋለሁ። ቀንበሬን በላያችሁ ተሸከሙ ከእኔም ተማሩ፥ እኔ የዋህ በልቤም ትሑት ነኝና፥ ለነፍሳችሁም ዕረፍት ታገኛላችሁ።",
      en: "Come to me, all who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
    },
    ref: { am: "የማቴዎስ ወንጌል 11:28-29", en: "Matthew 11:28-29" },
  },
  {
    id: "john-3-16",
    verse: {
      am: "በእርሱ የሚያምን ሁሉ የዘላለም ሕይወት እንዲኖረው እንጂ እንዳይጠፋ እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና።",
      en: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    },
    ref: { am: "የዮሐንስ ወንጌል 3:16", en: "John 3:16" },
  },
  {
    id: "acts-4-12",
    verse: {
      am: "መድኃኒትም በሌላ በማንም የለም፤ እንድንበት ዘንድ የሚገባን ለሰዎች የተሰጠ ስም ከሰማይ በታች ሌላ የለምና።",
      en: "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.",
    },
    ref: { am: "የሐዋርያት ሥራ 4:12", en: "Acts 4:12" },
  },
  {
    id: "ephesians-2-8",
    verse: {
      am: "ጸጋው በእምነት አድኖአችኋልና፤ ይህም የእግዚአብሔር ስጦታ ነው እንጂ ከእናንተ አይደለም፤ ማንም እንዳይመካ ከሥራ አይደለም።",
      en: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
    },
    ref: { am: "ወደ ኤፌሶን ሰዎች 2:8-9", en: "Ephesians 2:8-9" },
  },
  {
    id: "romans-5-8",
    verse: {
      am: "ነገር ግን ገና ኃጢአተኞች ሳለን ክርስቶስ ስለ እኛ ሞቶአልና እግዚአብሔር ለእኛ ያለውን የራሱን ፍቅር በዚህ ያሳያል።",
      en: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
    },
    ref: { am: "ወደ ሮሜ ሰዎች 5:8", en: "Romans 5:8" },
  },
  {
    id: "john-14-6",
    verse: {
      am: "ኢየሱስም፦ እኔ መንገድና እውነት ሕይወትም ነኝ፤ በእኔ በቀር ወደ አብ የሚመጣ የለም አለው።",
      en: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
    },
    ref: { am: "የዮሐንስ ወንጌል 14:6", en: "John 14:6" },
  },
  {
    id: "titus-3-5",
    verse: {
      am: "እንደ ምሕረቱ መጠን ለአዲስ ልደት በሚሆነው መታጠብና በመንፈስ ቅዱስ በመታደስ አዳነን እንጂ፥ እኛ ስላደረግነው ስለ ጽድቅ ሥራ አይደለም።",
      en: "He saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit.",
    },
    ref: { am: "ወደ ቲቶ 3:5", en: "Titus 3:5" },
  },
];