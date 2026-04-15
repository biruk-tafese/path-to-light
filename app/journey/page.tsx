"use client";

import { EmotionSelector } from "@/components/emotion-selector";
import { useLanguage } from "@/components/providers/language-provider";
import { journeyCopy } from "@/lib/content";

export default function JourneyPage() {
  const { t } = useLanguage();

  return (
    <section className="space-y-6">
      <h1 className="font-serif text-4xl md:text-5xl">{t(journeyCopy.title)}</h1>
      <p className="text-soft">{t(journeyCopy.intro)}</p>
      <EmotionSelector />
    </section>
  );
}
