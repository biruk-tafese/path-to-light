export {
  appTitle,
  navLabels,
  homeCopy,
  timelineCopy,
  journeyCopy,
  scriptureCopy,
  audioCopy,
  pauseCopy,
} from "@/data/timeline";

export { scenes, emotionChoices } from "@/data/scenes";
export { scriptureMoments } from "@/data/verses";
import type { EmotionChoice, LocalizedText, Scene } from "@/lib/types";

export const appTitle: LocalizedText = {
  am: "ወደ ብርሃን መንገድ",
  en: "Path to Light",
};

export const navLabels = {
  home: { am: "መነሻ", en: "Home" },
  timeline: { am: "ታሪክ መስመር", en: "Timeline" },
  journey: { am: "የልብ ጉዞ", en: "Emotional Journey" },
  scripture: { am: "ቃል እና ጸጥታ", en: "Scripture" },
  audio: { am: "ድምጽ መገኘት", en: "Audio Presence" },
  pause: { am: "ለአፍታ ቁም", en: "Pause" },
};

export const homeCopy = {
  heading: {
    am: "ቀስ ብለን ወደ ብርሃን",
    en: "A Quiet Walk Toward Light",
  },
  intro: {
    am: "ይህ ቦታ ጫጫታ አይደለም፤ ለልብህ እረፍት ነው።",
    en: "This is not a loud place. It is a gentle space where your heart can breathe.",
  },
  cta: {
    am: "ጉዞውን ጀምር",
    en: "Start Journey",
  },
};

export const timelineCopy = {
  title: { am: "ታሪክ መስመር", en: "Story Timeline" },
  intro: {
    am: "በጸጥታ ተንቀሳቀስ። ትንቢት፣ ልደት፣ ምሕረት፣ መስቀል እና ትንሣኤ በቀስታ ይከፈታሉ።",
    en: "Move gently. Prophecy, birth, mercy, the cross, and resurrection unfold slowly.",
  },
};

export const journeyCopy = {
  title: { am: "የልብ ጉዞ", en: "Emotional Journey" },
  intro: {
    am: "የልብህን ሁኔታ ምረጥ እና ጉዞው በቀስታ ይመራል።",
    en: "Choose your heart's condition and let the journey guide you slowly.",
  },
};

export const scriptureCopy = {
  title: { am: "ቃል እና ጸጥታ", en: "Scripture Moments" },
  intro: {
    am: "እነዚህ ቃላት ለማንበብ ብቻ አይደሉም፤ ለማረፍ ናቸው።",
    en: "These words are not for rushing through. They are for resting with.",
  },
};

export const audioCopy = {
  title: { am: "የድምጽ መገኘት", en: "Audio Presence" },
  intro: {
    am: "ድምፅ ከፈለግህ ብቻ ይጀምራል። ጸጥታ እስከዚያ ድረስ ይኖራል።",
    en: "Sound begins only if you want it. Until then, silence remains.",
  },
};

export const pauseCopy = {
  title: { am: "ጸጥ በል...", en: "Be still..." },
  label: { am: "እረፍት", en: "Pause" },
};

export const scenes: Scene[] = [
  {
    id: "promise",
    title: { am: "ተስፋ በጨለማ ውስጥ", en: "Promise in the Dark" },
    text: {
      am: "በድንግዝግዝ ዘመን ውስጥ ብርሃን ይመጣል የሚል ቃል ተሰጠ።",
      en: "In uncertain centuries, a promise remained: light would come.",
    },
    background: "linear-gradient(140deg, #28313c 0%, #49586f 60%, #7a8996 100%)",
    emotion: "dark",
  },
  {
    id: "birth",
    title: { am: "ሰላም በልደት", en: "Peace in a Birth" },
    text: {
      am: "በአንድ ጸጥ ሌሊት ተስፋ ሰው ሆኖ መጣ።",
      en: "On a quiet night, hope took on flesh and came near.",
    },
    background: "linear-gradient(140deg, #f7efe0 0%, #e9dcc6 45%, #d4c3a4 100%)",
    emotion: "hope",
  },
  {
    id: "ministry",
    title: { am: "ከተራመዱ ጋር መራመድ", en: "Walking with the Wounded" },
    text: {
      am: "እርሱ የተሰበሩትን ልቦች በርህራሄ ነካ።",
      en: "He moved among the weary and touched broken hearts with mercy.",
    },
    background: "linear-gradient(145deg, #ddebf0 0%, #bfd5db 50%, #a8c8d1 100%)",
    emotion: "calm",
  },
  {
    id: "cross",
    title: { am: "ፍቅር የከፈለው", en: "The Cost of Love" },
    text: {
      am: "በመስቀል ላይ ዝምታ ነበር፣ ነገር ግን ፍቅር እየተናገረ ነበር።",
      en: "At the cross there was silence, yet love was speaking loudly.",
    },
    background: "linear-gradient(145deg, #2a2d33 0%, #3f474f 50%, #5a6872 100%)",
    emotion: "reflection",
  },
  {
    id: "resurrection",
    title: { am: "አዲስ ንጋት", en: "A New Dawn" },
    text: {
      am: "ቀብር ቦታ መጨረሻ አልሆነም፤ ብርሃን እንደገና ተበራ።",
      en: "The tomb was not the end. Light rose again like morning.",
    },
    background: "linear-gradient(145deg, #f6f5eb 0%, #dce7d4 50%, #c6d8ba 100%)",
    emotion: "hope",
  },
];

export const emotionChoices: EmotionChoice[] = [
  {
    key: "lost",
    label: { am: "ጠፍቻለሁ", en: "Lost" },
    hint: { am: "ከጨለማ ተስፋ ወደ ብርሃን መንገድ", en: "From uncertainty to promise and light" },
    sceneIds: ["promise", "cross", "resurrection"],
  },
  {
    key: "tired",
    label: { am: "ደክሜአለሁ", en: "Tired" },
    hint: { am: "እረፍት የሚሰጥ የርህራሄ ጉዞ", en: "A gentle path of rest and mercy" },
    sceneIds: ["ministry", "cross", "resurrection"],
  },
  {
    key: "hopeful",
    label: { am: "ተስፋ አለኝ", en: "Hopeful" },
    hint: { am: "ተስፋን ከትውልድ ወደ ትንሣኤ", en: "Following hope from promise to resurrection" },
    sceneIds: ["promise", "birth", "resurrection"],
  },
  {
    key: "searching",
    label: { am: "እፈልጋለሁ", en: "Searching" },
    hint: { am: "ሰላምን እና ትርጉምን በቀስታ ማግኘት", en: "A quiet search for peace and meaning" },
    sceneIds: ["birth", "ministry", "cross", "resurrection"],
  },
];

export const scriptureMoments = [
  {
    id: "isaiah-9",
    verse: { am: "ሕዝቡ በጨለማ የተመላለሰ ታላቅ ብርሃን አየ።", en: "The people walking in darkness have seen a great light." },
    ref: { am: "ኢሳይያስ 9:2", en: "Isaiah 9:2" },
  },
  {
    id: "matt-11",
    verse: { am: "ደክማችሁ የተሸከማችሁም ሁላችሁ ወደ እኔ ኑ።", en: "Come to me, all who are weary and burdened." },
    ref: { am: "ማቴዎስ 11:28", en: "Matthew 11:28" },
  },
  {
    id: "john-1",
    verse: { am: "ብርሃኑ በጨለማ ይበራል።", en: "The light shines in the darkness." },
    ref: { am: "ዮሐንስ 1:5", en: "John 1:5" },
  },
];

export const scriptures: Array<{
  id: string;
  verse: LocalizedText;
  reference: LocalizedText;
}> = [
  {
    id: "isaiah-9-6",
    verse: {
      am: "ሕፃን ተወልዶልናል፤ ስሙም ድንቅ አማካሪ ይባላል።",
      en: "For to us a child is born... and He shall be called Wonderful Counselor.",
    },
    reference: {
      am: "ኢሳይያስ 9:6",
      en: "Isaiah 9:6",
    },
  },
  {
    id: "john-1-5",
    verse: {
      am: "ብርሃኑ በጨለማ ውስጥ ይበራል፤ ጨለማም አላሸነፈውም።",
      en: "The light shines in the darkness, and the darkness has not overcome it.",
    },
    reference: {
      am: "ዮሐንስ 1:5",
      en: "John 1:5",
    },
  },
  {
    id: "matthew-11-28",
    verse: {
      am: "ደካማዎች ሁሉ ወደ እኔ ኑ፤ እኔም አሳርፋችኋለሁ።",
      en: "Come to me, all who are weary, and I will give you rest.",
    },
    reference: {
      am: "ማቴዎስ 11:28",
      en: "Matthew 11:28",
    },
  },
  {
    id: "john-11-25",
    verse: {
      am: "እኔ ትንሣኤና ሕይወት ነኝ።",
      en: "I am the resurrection and the life.",
    },
    reference: {
      am: "ዮሐንስ 11:25",
      en: "John 11:25",
    },
  },
];

export const emotionLabels: Record<EmotionState, LocalizedText> = {
  lost: {
    am: "ጠፍቼ ነኝ",
    en: "Lost",
  },
  tired: {
    am: "ደክመኛል",
    en: "Tired",
  },
  hopeful: {
    am: "ተስፋ አለኝ",
    en: "Hopeful",
  },
  searching: {
    am: "እፈልጋለሁ",
    en: "Searching",
  },
};

export const emotionScenes: Record<EmotionState, string[]> = {
  lost: ["promise-beginning", "cross", "resurrection"],
  tired: ["prophets-waiting", "ministry", "fulfillment"],
  hopeful: ["birth", "resurrection", "fulfillment"],
  searching: ["promise-beginning", "ministry", "resurrection"],
};

export const pauseText: LocalizedText = {
  am: "ጸጥ ብለህ ተቀመጥ...",
  en: "Be still...",
};
