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
