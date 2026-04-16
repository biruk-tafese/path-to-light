"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuPlus, LuX, LuMinus } from "react-icons/lu";
import { ScriptureCard } from "@/components/scripture-card";
import { useLanguage } from "@/components/providers/language-provider";
import { scriptureMoments } from "@/lib/content";
import { scriptureCopy } from "@/lib/content";
import type { LocalizedText } from "@/lib/types";

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

type ScripturePost = {
  id: string;
  verse: LocalizedText;
  ref: LocalizedText;
  details: LocalizedText;
  context: LocalizedText;
};

const emptyLocalizedText: LocalizedText = { am: "", en: "" };

type ComposerBlock = {
  am: string;
  en: string;
};

type ComposerDraft = {
  id: string;
  ref: LocalizedText;
  verseBlocks: ComposerBlock[];
  detailBlocks: ComposerBlock[];
  contextBlocks: ComposerBlock[];
};

function createEmptyPost(): ScripturePost {
  return {
    id: `custom-${Date.now()}`,
    verse: { ...emptyLocalizedText },
    ref: { ...emptyLocalizedText },
    details: { ...emptyLocalizedText },
    context: { ...emptyLocalizedText },
  };
}

function createComposerBlock(): ComposerBlock {
  return { am: "", en: "" };
}

function createEmptyDraft(): ComposerDraft {
  return {
    id: `draft-${Date.now()}`,
    ref: { ...emptyLocalizedText },
    verseBlocks: [createComposerBlock()],
    detailBlocks: [createComposerBlock()],
    contextBlocks: [createComposerBlock()],
  };
}

function mergeBlocks(blocks: ComposerBlock[]) {
  return {
    am: blocks.map((block) => block.am.trim()).filter(Boolean).join("\n\n"),
    en: blocks.map((block) => block.en.trim()).filter(Boolean).join("\n\n"),
  };
}

export default function ScripturePage() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(scriptureMoments[0]?.id ?? null);
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [postedVerses, setPostedVerses] = useState<ScripturePost[]>([]);
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [draft, setDraft] = useState<ComposerDraft>(createEmptyDraft);

  const grouped = useMemo(() => {
    const allMoments = [...postedVerses, ...scriptureMoments];

    const oldTestament = allMoments.filter((item) => {
      const book = referenceBook(item.ref.en);
      return oldTestamentBooks.includes(book);
    });

    const newTestament = allMoments.filter((item) => {
      const book = referenceBook(item.ref.en);
      return !oldTestamentBooks.includes(book);
    });

    return { oldTestament, newTestament };
  }, [postedVerses]);

  function toggleLike(id: string) {
    setLikedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  async function shareVerse(item: { verse: LocalizedText; ref: LocalizedText; details?: LocalizedText; context?: LocalizedText }) {
    const shareText = `${t(item.ref)}\n${t(item.verse)}${item.details ? `\n\n${t(item.details)}` : ""}${item.context ? `\n\n${t(item.context)}` : ""}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: t(item.ref),
          text: shareText,
        });
        return;
      } catch {
        // Fall through to clipboard copy.
      }
    }

    await navigator.clipboard.writeText(shareText);
  }

  function handlePostSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const verse = mergeBlocks(draft.verseBlocks);
    const details = mergeBlocks(draft.detailBlocks);
    const context = mergeBlocks(draft.contextBlocks);

    const nextPost: ScripturePost = {
      id: `custom-${Date.now()}`,
      ref: draft.ref,
      verse,
      details,
      context,
    };

    setPostedVerses((current) => [nextPost, ...current]);
    setOpenId(nextPost.id);
    setIsComposerOpen(false);
    setDraft(createEmptyDraft());
  }

  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h1 className="font-serif text-4xl md:text-5xl">{t(scriptureCopy.title)}</h1>
            <p className="text-soft">{t(scriptureCopy.intro)}</p>
          </div>

          <button
            type="button"
            onClick={() => setIsComposerOpen(true)}
            className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white/45 px-4 py-2 text-sm text-soft transition-colors hover:bg-white/65"
          >
            <LuPlus size={16} />
            {t({ am: "መጽሐፍ ቅዱስ አጋራ", en: "Share Scripture" })}
          </button>
        </div>
      </motion.div>

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
                liked={likedIds.includes(item.id)}
                onLike={() => toggleLike(item.id)}
                onShare={() => void shareVerse(item)}
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
                liked={likedIds.includes(item.id)}
                onLike={() => toggleLike(item.id)}
                onShare={() => void shareVerse(item)}
                details={item.details}
                context={item.context}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isComposerOpen ? (
          <motion.div
            className="fixed inset-0 z-50 bg-black/45 px-3 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="surface-card mx-auto mt-20 w-full max-w-4xl rounded-[2rem] p-5 shadow-2xl md:mt-24 md:p-8"
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ maxHeight: "calc(100vh - 6rem)", overflowY: "auto" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">{t({ am: "መጽሐፍ ቅዱስ አጋራ", en: "Share Scripture" })}</h3>
                  <p className="mt-2 text-sm text-soft">
                    {t({ am: "የቃሉን ጥቅስ እና ትርጓሜ እዚህ አስገቡ።", en: "Add the verse text, reference, and reading notes here." })}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsComposerOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/50 text-soft"
                  aria-label={t({ am: "ዝጋ", en: "Close" })}
                >
                  <LuX size={18} />
                </button>
              </div>

              <form className="mt-6 space-y-5" onSubmit={handlePostSubmit}>
                <LocalizedTextEditor
                  label={t({ am: "የቁጥር መጽሐፍ / Reference", en: "Reference" })}
                  value={draft.ref}
                  onChange={(next) => setDraft((current) => ({ ...current, ref: next }))}
                  compact
                />

                <RepeatableSection
                  title={t({ am: "Verse", en: "Verse" })}
                  addLabel={t({ am: "ተጨማሪ ቃል ጨምር", en: "Add more verse" })}
                  blocks={draft.verseBlocks}
                  onAdd={() => setDraft((current) => ({ ...current, verseBlocks: [...current.verseBlocks, createComposerBlock()] }))}
                  onRemove={(index) =>
                    setDraft((current) => ({
                      ...current,
                      verseBlocks: current.verseBlocks.length > 1 ? current.verseBlocks.filter((_, blockIndex) => blockIndex !== index) : current.verseBlocks,
                    }))
                  }
                  onChange={(index, next) =>
                    setDraft((current) => ({
                      ...current,
                      verseBlocks: current.verseBlocks.map((block, blockIndex) => (blockIndex === index ? next : block)),
                    }))
                  }
                />

                <RepeatableSection
                  title={t({ am: "Details", en: "Details" })}
                  addLabel={t({ am: "ተጨማሪ ዝርዝር ጨምር", en: "Add more details" })}
                  blocks={draft.detailBlocks}
                  onAdd={() => setDraft((current) => ({ ...current, detailBlocks: [...current.detailBlocks, createComposerBlock()] }))}
                  onRemove={(index) =>
                    setDraft((current) => ({
                      ...current,
                      detailBlocks: current.detailBlocks.length > 1 ? current.detailBlocks.filter((_, blockIndex) => blockIndex !== index) : current.detailBlocks,
                    }))
                  }
                  onChange={(index, next) =>
                    setDraft((current) => ({
                      ...current,
                      detailBlocks: current.detailBlocks.map((block, blockIndex) => (blockIndex === index ? next : block)),
                    }))
                  }
                />

                <RepeatableSection
                  title={t({ am: "Context", en: "Context" })}
                  addLabel={t({ am: "ተጨማሪ ማብራሪያ ጨምር", en: "Add more context" })}
                  blocks={draft.contextBlocks}
                  onAdd={() => setDraft((current) => ({ ...current, contextBlocks: [...current.contextBlocks, createComposerBlock()] }))}
                  onRemove={(index) =>
                    setDraft((current) => ({
                      ...current,
                      contextBlocks: current.contextBlocks.length > 1 ? current.contextBlocks.filter((_, blockIndex) => blockIndex !== index) : current.contextBlocks,
                    }))
                  }
                  onChange={(index, next) =>
                    setDraft((current) => ({
                      ...current,
                      contextBlocks: current.contextBlocks.map((block, blockIndex) => (blockIndex === index ? next : block)),
                    }))
                  }
                />

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#9d6b44] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#8b5d3b]"
                  >
                    <LuPlus size={16} />
                    {t({ am: "አጋራ", en: "Post" })}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsComposerOpen(false)}
                    className="rounded-full border border-black/10 px-5 py-3 text-sm text-soft"
                  >
                    {t({ am: "ሰርዝ", en: "Cancel" })}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function LocalizedTextEditor({
  label,
  value,
  onChange,
  compact = false,
}: {
  label: string;
  value: LocalizedText;
  onChange: (next: LocalizedText) => void;
  compact?: boolean;
}) {
  return (
    <label className="space-y-2 text-sm text-soft">
      <span className="block font-medium text-ink/80">{label}</span>
      <div className={`grid gap-2 ${compact ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
        <textarea
          value={value.am}
          onChange={(event) => onChange({ ...value, am: event.target.value })}
          placeholder="Amharic"
          className="min-h-28 rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-ink outline-none transition focus:border-[#9d6b44]"
        />
        <textarea
          value={value.en}
          onChange={(event) => onChange({ ...value, en: event.target.value })}
          placeholder="English"
          className="min-h-28 rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-ink outline-none transition focus:border-[#9d6b44]"
        />
      </div>
    </label>
  );
}

function RepeatableSection({
  title,
  addLabel,
  blocks,
  onAdd,
  onRemove,
  onChange,
}: {
  title: string;
  addLabel: string;
  blocks: ComposerBlock[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (index: number, next: ComposerBlock) => void;
}) {
  return (
    <div className="space-y-3 rounded-[1.5rem] border border-black/10 bg-white/30 p-4 md:p-5">
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-serif text-xl text-ink/90">{title}</h4>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-3 py-2 text-sm text-soft transition-colors hover:bg-white/70"
        >
          <LuPlus size={15} />
          {addLabel}
        </button>
      </div>

      <div className="space-y-4">
        {blocks.map((block, index) => (
          <div key={`${title}-${index}`} className="space-y-3 rounded-2xl border border-black/8 bg-white/45 p-3 md:p-4">
            <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-[0.18em] text-soft/70">
              <span>Amharic / English</span>
              {blocks.length > 1 ? (
                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="inline-flex items-center gap-1 rounded-full border border-black/10 px-2.5 py-1 text-[11px] normal-case tracking-normal text-soft"
                >
                  <LuMinus size={12} />
                  Remove
                </button>
              ) : null}
            </div>

            <div className="grid gap-2 md:grid-cols-2">
              <textarea
                value={block.am}
                onChange={(event) => onChange(index, { ...block, am: event.target.value })}
                placeholder="Amharic"
                className="min-h-28 rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-ink outline-none transition focus:border-[#9d6b44]"
              />
              <textarea
                value={block.en}
                onChange={(event) => onChange(index, { ...block, en: event.target.value })}
                placeholder="English"
                className="min-h-28 rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-ink outline-none transition focus:border-[#9d6b44]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
