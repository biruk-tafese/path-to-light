import type { LocalizedText } from "@/lib/types";

export type VerseMoment = {
  id: string;
  verse: LocalizedText;
  ref: LocalizedText;
};

export const scriptureMoments: VerseMoment[] = [
  {
    id: "isaiah-9",
    verse: {
      am: "ሕዝቡ በጨለማ የተመላለሰ ታላቅ ብርሃን አየ።",
      en: "The people walking in darkness have seen a great light.",
    },
    ref: { am: "ኢሳይያስ 9:2", en: "Isaiah 9:2" },
  },
  {
    id: "matt-11",
    verse: {
      am: "ደክማችሁ የተሸከማችሁም ሁላችሁ ወደ እኔ ኑ።",
      en: "Come to me, all who are weary and burdened.",
    },
    ref: { am: "ማቴዎስ 11:28", en: "Matthew 11:28" },
  },
  {
    id: "john-1",
    verse: {
      am: "ብርሃኑ በጨለማ ይበራል።",
      en: "The light shines in the darkness.",
    },
    ref: { am: "ዮሐንስ 1:5", en: "John 1:5" },
  },
];
