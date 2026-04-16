export type Locale = "am" | "en";

export type Language = Locale;

export type LocalizedText = {
  am: string;
  en: string;
};

export type Emotion = "calm" | "hope" | "reflection" | "dark";

export type EmotionState = "lost" | "tired" | "hopeful" | "searching";

export type SceneHistoricalLayer = {
  year: LocalizedText;
  location: LocalizedText;
  context: LocalizedText;
};

export type SceneBiblicalLayer = {
  reference: LocalizedText;
  excerpt: LocalizedText;
};

export type Scene = {
  id: string;
  title: LocalizedText;
  text: LocalizedText;
  historical: SceneHistoricalLayer;
  biblical: SceneBiblicalLayer;
  wordsActions: LocalizedText;
  evidence: LocalizedText;
  spiritualMeaning: LocalizedText;
  audio?: string;
  background: string;
  emotion: Emotion;
};

export type EmotionChoice = {
  key: EmotionState;
  label: LocalizedText;
  hint: LocalizedText;
  sceneIds: string[];
};

export type WeeklyProgram = {
  day: LocalizedText;
  time: string;
  activity: LocalizedText;
};

export type ChurchContact = {
  phone: string;
  email?: string;
  whatsapp?: string;
};

export type ChurchEvent = {
  title: LocalizedText;
  description: LocalizedText;
  schedule: LocalizedText;
};

export type Church = {
  id: string;
  name: LocalizedText;
  leader: LocalizedText;
  leaderContact: ChurchContact;
  locationName: LocalizedText;
  address: LocalizedText;
  coordinates: {
    lat: number;
    lng: number;
  };
  statementOfFaith: LocalizedText;
  weeklyPrograms: WeeklyProgram[];
  events: ChurchEvent[];
  socials: {
    website?: string;
    facebook?: string;
    telegram?: string;
    youtube?: string;
    instagram?: string;
  };
  donation: {
    method: LocalizedText;
    accountNumber: string;
    accountName: LocalizedText;
  };
  image: string;
};
