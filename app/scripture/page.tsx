"use client";

import { ScriptureCard } from "@/components/scripture-card";
import { useLanguage } from "@/components/providers/language-provider";
import { scriptureMoments } from "@/lib/content";
import { scriptureCopy } from "@/lib/content";

export default function ScripturePage() {
  const { t } = useLanguage();

  return (
    <section className="space-y-6">
      <h1 className="font-serif text-4xl md:text-5xl">{t(scriptureCopy.title)}</h1>
      <p className="text-soft">{t(scriptureCopy.intro)}</p>
      <div className="grid gap-5 md:grid-cols-2">
        {scriptureMoments.map((item) => (
          <ScriptureCard key={item.id} verse={item.verse} reference={item.ref} />
        ))}
      </div>
    </section>
  );
}
