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
    details: {
      am: "ይህ ቃል በጨለማ ዘመን የነበረውን ሕዝብ ለሚመጣው መሲህ ብርሃን የሚያዘጋጅ ትንቢት ነው። ብርሃኑ የፖለቲካ ብቻ ሳይሆን የነፍስ መዳን ብርሃን ነው።",
      en: "This prophecy prepares a people in darkness for the coming light of the Messiah. The light is not merely political relief but salvation light for the soul.",
    },
    context: {
      am: "ኢየሱስ መምጣቱ እግዚአብሔር ተስፋን እንደማይተው ያሳያል፤ በጨለማ ውስጥ ያሉ ልቦች ተስፋ ሊያገኙ ይችላሉ።",
      en: "Christ's coming shows that God does not abandon promise; hearts in darkness can still receive hope.",
    },
  },
  {
    id: "matt-11",
    verse: {
      am: "እናንተ ደካሞች ሸክማችሁ የከበደ ሁሉ፥ ወደ እኔ ኑ፥ እኔም አሳርፋችኋለሁ። ቀንበሬን በላያችሁ ተሸከሙ ከእኔም ተማሩ፥ እኔ የዋህ በልቤም ትሑት ነኝና፥ ለነፍሳችሁም ዕረፍት ታገኛላችሁ።",
      en: "Come to me, all who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
    },
    ref: { am: "የማቴዎስ ወንጌል 11:28-29", en: "Matthew 11:28-29" },
    details: {
      am: "ጌታ ወደ እርሱ መጡ ሲል የሚጠራው የሥጋ ድካም ብቻ አይደለም፤ የኃጢአት ሸክምና የነፍስ ግፊት ደግሞ ነው። እረፍቱ በእርሱ ላይ ታመን በማለት የሚገኝ መንፈሳዊ እረፍት ነው።",
      en: "When Jesus invites the weary, He addresses more than physical exhaustion; He also calls those burdened by sin and inner pressure. His rest is spiritual rest found in trusting Him.",
    },
    context: {
      am: "በየቀኑ የሚጫኑን ፍርሃቶችና ጭንቀቶች በጸሎት ለክርስቶስ ማስረከብ ይገባል።",
      en: "In daily life, this calls us to hand over our fears and burdens to Christ in prayer.",
    },
  },
  {
    id: "john-3-16",
    verse: {
      am: "በእርሱ የሚያምን ሁሉ የዘላለም ሕይወት እንዲኖረው እንጂ እንዳይጠፋ እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና።",
      en: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    },
    ref: { am: "የዮሐንስ ወንጌል 3:16", en: "John 3:16" },
    details: {
      am: "የመዳን መነሻ የሰው ጥረት ሳይሆን የእግዚአብሔር ፍቅር መሆኑን ቃሉ ያሳያል። የልጁን መስጠት የመስቀል መሥዋዕትን ያመለክታል።",
      en: "This verse shows that salvation begins with God's love, not human effort. The giving of the Son points to the sacrifice of the cross.",
    },
    context: {
      am: "እምነት ማለት እውነትን መቀበል ብቻ ሳይሆን በክርስቶስ ላይ ሕይወትን ማስመራት ነው።",
      en: "Faith here means more than agreement; it is entrusting life to Christ.",
    },
  },
  {
    id: "acts-4-12",
    verse: {
      am: "መድኃኒትም በሌላ በማንም የለም፤ እንድንበት ዘንድ የሚገባን ለሰዎች የተሰጠ ስም ከሰማይ በታች ሌላ የለምና።",
      en: "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.",
    },
    ref: { am: "የሐዋርያት ሥራ 4:12", en: "Acts 4:12" },
    details: {
      am: "ሐዋርያት የሚያስተምሩት መዳን በብዙ መንገዶች እንደማይገኝ ነው፤ የክርስቶስ ስም ብቻ የሚያድን ስልጣን አለው።",
      en: "The apostles teach that salvation is not found in many competing paths; the name of Christ alone carries saving authority.",
    },
    context: {
      am: "ይህ ቃል ክርስቲያናዊ ምስክርነትን ያጠናክራል፤ እምነታችን በግልጽ እውነት ላይ እንዲቆም ይጠራናል።",
      en: "This strengthens Christian witness and calls us to stand on a clear confession of Christ.",
    },
  },
  {
    id: "ephesians-2-8",
    verse: {
      am: "ጸጋው በእምነት አድኖአችኋልና፤ ይህም የእግዚአብሔር ስጦታ ነው እንጂ ከእናንተ አይደለም፤ ማንም እንዳይመካ ከሥራ አይደለም።",
      en: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
    },
    ref: { am: "ወደ ኤፌሶን ሰዎች 2:8-9", en: "Ephesians 2:8-9" },
    details: {
      am: "ጳውሎስ መዳን የጸጋ ስጦታ መሆኑን ይገልጣል። ሥራ መልካም ቢሆንም የመዳን ምክንያት አይደለም፤ የመዳን ፍሬ ነው።",
      en: "Paul explains that salvation is a gift of grace. Good works matter, but they are the fruit of salvation, not its cause.",
    },
    context: {
      am: "በመንፈሳዊ ሕይወት ትሕትና ይፈጠራል፤ ድነታችንን በእግዚአብሔር ምሕረት ላይ እንመሠርታለን።",
      en: "This produces humility in spiritual life by rooting confidence in God's mercy rather than self-righteousness.",
    },
  },
  {
    id: "romans-5-8",
    verse: {
      am: "ነገር ግን ገና ኃጢአተኞች ሳለን ክርስቶስ ስለ እኛ ሞቶአልና እግዚአብሔር ለእኛ ያለውን የራሱን ፍቅር በዚህ ያሳያል።",
      en: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
    },
    ref: { am: "ወደ ሮሜ ሰዎች 5:8", en: "Romans 5:8" },
    details: {
      am: "የእግዚአብሔር ፍቅር ሰው ሲገባው ካለፈ በኋላ አይጀምርም፤ ሰው ገና በኃጢአት ሲኖር ይገለጣል። መስቀሉ የምሕረት ከፍተኛ መግለጫ ነው።",
      en: "God's love does not begin after we become worthy; it is revealed while we are still sinners. The cross is the highest revelation of mercy.",
    },
    context: {
      am: "ራሳችንን ስንፈርድ እንኳን የክርስቶስ ፍቅር ለመመለስ መንገድ እንዳለ ያስታውሰናል።",
      en: "Even when we condemn ourselves, this verse reminds us there is a path back through Christ's love.",
    },
  },
  {
    id: "john-14-6",
    verse: {
      am: "ኢየሱስም፦ እኔ መንገድና እውነት ሕይወትም ነኝ፤ በእኔ በቀር ወደ አብ የሚመጣ የለም አለው።",
      en: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
    },
    ref: { am: "የዮሐንስ ወንጌል 14:6", en: "John 14:6" },
    details: {
      am: "ክርስቶስ መንገድ እውነት ሕይወት ነኝ ሲል መዳን ወደ ግል ግንኙነት እንጂ ወደ ሀሳብ ስርዓት ብቻ አይገደብም ብሎ ያሳያል።",
      en: "When Christ says He is the way, truth, and life, He shows that salvation is personal communion with Him, not merely an abstract system of ideas.",
    },
    context: {
      am: "የዕለታዊ ውሳኔዎችን በወንጌል እውነት መመዘንና በክርስቶስ ፈቃድ መመራት ይጠራናል።",
      en: "It calls us to measure daily decisions by Gospel truth and be guided by Christ's will.",
    },
  },
  {
    id: "titus-3-5",
    verse: {
      am: "እንደ ምሕረቱ መጠን ለአዲስ ልደት በሚሆነው መታጠብና በመንፈስ ቅዱስ በመታደስ አዳነን እንጂ፥ እኛ ስላደረግነው ስለ ጽድቅ ሥራ አይደለም።",
      en: "He saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit.",
    },
    ref: { am: "ወደ ቲቶ 3:5", en: "Titus 3:5" },
    details: {
      am: "እዚህ መዳን በእግዚአብሔር ምሕረት እና በመንፈስ ቅዱስ ማደስ እንደሚሆን በግልጽ ይታያል። ይህ ውጫዊ ልማድ ብቻ ሳይሆን ውስጣዊ አዲስነት ነው።",
      en: "This text clearly presents salvation as God's mercy and renewal by the Holy Spirit. It is not merely external religion but inner re-creation.",
    },
    context: {
      am: "በንስሐ እና በተስፋ የተጀመረ አዲስ ሕይወት በመንፈስ ቅዱስ በየቀኑ እየታደሰ መጓዝ አለበት።",
      en: "A new life begun in repentance and hope must continue in daily renewal by the Holy Spirit.",
    },
  },
];