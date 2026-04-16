"use client";

import { useMemo, useState } from "react";
import { ScriptureCard } from "@/components/scripture-card";
import { useLanguage } from "@/components/providers/language-provider";
import { scriptureMoments } from "@/lib/content";
import { scriptureCopy } from "@/lib/content";

const oldTestamentBooks = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Songs",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
];

function referenceBook(refEn: string) {
  const match = refEn.match(/^([1-3]?\s?[A-Za-z ]+)/);
  return match?.[1]?.trim() ?? "";
}

export default function ScripturePage() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(scriptureMoments[0]?.id ?? null);

  const grouped = useMemo(() => {
    const oldTestament = scriptureMoments.filter((item) => {
      const book = referenceBook(item.ref.en);
      return oldTestamentBooks.includes(book);
    });

    const newTestament = scriptureMoments.filter((item) => {
      const book = referenceBook(item.ref.en);
      return !oldTestamentBooks.includes(book);
    });

    return { oldTestament, newTestament };
  }, []);

  return (
    <section className="space-y-6">
      <h1 className="font-serif text-4xl md:text-5xl">{t(scriptureCopy.title)}</h1>
      <p className="text-soft">{t(scriptureCopy.intro)}</p>

      <div className="rounded-2xl border border-black/10 bg-white/25 px-4 py-3 text-sm text-soft md:px-5">
        <p>
          {t({ am: "ጥቅል ቁጥር", en: "Total verses" })}: {scriptureMoments.length}
          <span className="mx-2">•</span>
          {t({ am: "ብሉይ ኪዳን", en: "Old Testament" })}: {grouped.oldTestament.length}
          <span className="mx-2">•</span>
          {t({ am: "አዲስ ኪዳን", en: "New Testament" })}: {grouped.newTestament.length}
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="font-serif text-2xl md:text-3xl">{t({ am: "ብሉይ ኪዳን", en: "Old Testament" })}</h2>
          <p className="text-sm text-soft">{t({ am: "የተስፋ እና የትንቢት መሠረት", en: "Foundation of promise and prophecy" })}</p>

          <div className="flex flex-col gap-4">
            {grouped.oldTestament.map((item, index) => (
              <ScriptureCard
                key={item.id}
                index={index + 1}
                verse={item.verse}
                reference={item.ref}
                open={openId === item.id}
                onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                details={item.details}
                context={item.context}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl md:text-3xl">{t({ am: "አዲስ ኪዳን", en: "New Testament" })}</h2>
          <p className="text-sm text-soft">{t({ am: "የድነት ምስክርነት እና የክርስቶስ ሙላት", en: "Witness of salvation and the fullness of Christ" })}</p>

          <div className="flex flex-col gap-4">
            {grouped.newTestament.map((item, index) => (
              <ScriptureCard
                key={item.id}
                index={grouped.oldTestament.length + index + 1}
                verse={item.verse}
                reference={item.ref}
                open={openId === item.id}
                onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                details={item.details}
                context={item.context}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
