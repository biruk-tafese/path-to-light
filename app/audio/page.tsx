"use client";

import { AudioSystem } from "@/components/audio-system";
import { useLanguage } from "@/components/providers/language-provider";
import { audioCopy } from "@/lib/content";

export default function AudioPage() {
  const { t } = useLanguage();

  return (
    <section className="space-y-6">
      <h1 className="font-serif text-4xl md:text-5xl">{t(audioCopy.title)}</h1>
      <p className="text-soft">{t(audioCopy.intro)}</p>
      <AudioSystem />
    </section>
  );
}
