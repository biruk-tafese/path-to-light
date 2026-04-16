"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { LuImagePlus, LuPlus, LuX, LuMinus } from "react-icons/lu";
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
  ref: LocalizedText;
  verseBlocks: LocalizedText[];
  detailBlocks: LocalizedText[];
  contextBlocks: LocalizedText[];
  photoUrl?: string;
  photoName?: string;
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
  photoUrl: string;
  photoName: string;
};

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
    photoUrl: "",
    photoName: "",
  };
}

function blockListToLocalizedText(blocks: ComposerBlock[]) {
  return blocks.map((block) => ({
    am: block.am.trim(),
    en: block.en.trim(),
  })).filter((block) => block.am || block.en);
}

export default function ScripturePage() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(scriptureMoments[0]?.id ?? null);
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [postedVerses, setPostedVerses] = useState<ScripturePost[]>([]);
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [draft, setDraft] = useState<ComposerDraft>(createEmptyDraft);

  useEffect(() => {
    return () => {
      if (draft.photoUrl.startsWith("blob:")) {
        URL.revokeObjectURL(draft.photoUrl);
      }
    };
  }, [draft.photoUrl]);

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

  function toggleLike(id: string) {
    setLikedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  async function shareVerse(item: {
    ref: LocalizedText;
    verseBlocks?: LocalizedText[];
    verse?: LocalizedText;
    detailBlocks?: LocalizedText[];
    details?: LocalizedText;
    contextBlocks?: LocalizedText[];
    context?: LocalizedText;
  }) {
    const verseText = item.verseBlocks?.length ? item.verseBlocks.map((block) => t(block)).join("\n\n") : item.verse ? t(item.verse) : "";
    const detailText = item.detailBlocks?.length ? item.detailBlocks.map((block) => t(block)).join("\n\n") : item.details ? t(item.details) : "";
    const contextText = item.contextBlocks?.length ? item.contextBlocks.map((block) => t(block)).join("\n\n") : item.context ? t(item.context) : "";
    const shareText = `${t(item.ref)}\n${verseText}${detailText ? `\n\n${detailText}` : ""}${contextText ? `\n\n${contextText}` : ""}`;

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

  function handlePhotoChange(file: File | null) {
    if (!file) {
      setDraft((current) => ({ ...current, photoUrl: "", photoName: "" }));
      return;
    }

    setDraft((current) => ({
      ...current,
      photoUrl: URL.createObjectURL(file),
      photoName: file.name,
    }));
  }

  function handlePostSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const verseBlocks = blockListToLocalizedText(draft.verseBlocks);
    const detailBlocks = blockListToLocalizedText(draft.detailBlocks);
    const contextBlocks = blockListToLocalizedText(draft.contextBlocks);

    const nextPost: ScripturePost = {
      id: `custom-${Date.now()}`,
      ref: draft.ref,
      verseBlocks,
      detailBlocks,
      contextBlocks,
      photoUrl: draft.photoUrl,
      photoName: draft.photoName,
    };

    setPostedVerses((current) => [nextPost, ...current]);
    setOpenId(nextPost.id);
    setIsComposerOpen(false);
    setDraft(createEmptyDraft());
  }

  function clearComposerPhoto() {
    if (draft.photoUrl.startsWith("blob:")) {
      URL.revokeObjectURL(draft.photoUrl);
    }

    setDraft((current) => ({ ...current, photoUrl: "", photoName: "" }));
  }

  return (
    <section className="space-y-6">
      <div className="space-y-3 rounded-[2rem] border border-black/10 bg-white/30 p-4 md:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">{t({ am: "የማህበራዊ ጉዞ", en: "Community Feed" })}</h2>
          </div>

          <button
            type="button"
            onClick={() => setIsComposerOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-sm text-soft transition-colors hover:bg-white/70"
          >
            <LuPlus size={16} />
            {t({ am: "አዲስ ቃል ጨምር", en: "Add Verse" })}
          </button>
        </div>

        {postedVerses.length ? (
          <div className="flex flex-col gap-4">
            {postedVerses.map((item, index) => (
              <ScriptureCard
                key={item.id}
                index={index + 1}
                reference={item.ref}
                open={openId === item.id}
                onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                liked={likedIds.includes(item.id)}
                onLike={() => toggleLike(item.id)}
                onShare={() => void shareVerse(item)}
                verseBlocks={item.verseBlocks}
                detailBlocks={item.detailBlocks}
                contextBlocks={item.contextBlocks}
                photoUrl={item.photoUrl}
                photoName={item.photoName}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-black/10 bg-white/35 px-4 py-6 text-sm text-soft">
            {t({ am: "እስካሁን የተጋራ ቃል የለም፤ ከላይ ያለውን + ይጫኑ እና መጀመሪያውን ይጋሩ።", en: "No shared scripture yet. Press the + button above and post the first one." })}
          </p>
        )}
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
                reference={item.ref}
                open={openId === item.id}
                onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                liked={likedIds.includes(item.id)}
                onLike={() => toggleLike(item.id)}
                onShare={() => void shareVerse(item)}
                verse={item.verse}
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
                reference={item.ref}
                open={openId === item.id}
                onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                liked={likedIds.includes(item.id)}
                onLike={() => toggleLike(item.id)}
                onShare={() => void shareVerse(item)}
                verse={item.verse}
                details={item.details}
                context={item.context}
              />
            ))}
          </div>
        </div>
      </div>

      {isComposerOpen ? (
        <div className="fixed inset-0 z-50 bg-black/45 px-3 backdrop-blur-sm">
          <div
            className="surface-card mx-auto mt-20 w-full max-w-4xl rounded-[2rem] p-5 shadow-2xl md:mt-24 md:p-8"
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

                <div className="space-y-3 rounded-[1.5rem] border border-black/10 bg-white/30 p-4 md:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-serif text-xl text-ink/90">{t({ am: "Photo", en: "Photo" })}</h4>
                    {draft.photoUrl ? (
                      <button
                        type="button"
                        onClick={clearComposerPhoto}
                        className="rounded-full border border-black/10 px-3 py-2 text-sm text-soft"
                      >
                        {t({ am: "ሰርዝ", en: "Remove" })}
                      </button>
                    ) : null}
                  </div>

                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-black/15 bg-white/45 px-4 py-4 text-sm text-soft transition hover:bg-white/60">
                    <LuImagePlus size={18} />
                    <span>{draft.photoName || t({ am: "ፎቶ ጨምር", en: "Add photo" })}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(event) => handlePhotoChange(event.target.files?.[0] ?? null)}
                    />
                  </label>

                  {draft.photoUrl ? (
                    <img
                      src={draft.photoUrl}
                      alt={draft.photoName || "Scripture attachment"}
                      className="max-h-64 w-full rounded-2xl object-cover"
                    />
                  ) : null}
                </div>

                <RepeatableSection
                  title={t({ am: "Verse", en: "Verse" })}
                  addLabel={t({ am: "ተጨማሪ ቃል ጨምር", en: "Add more" })}
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
                  addLabel={t({ am: "ተጨማሪ ዝርዝር ጨምር", en: "Add more" })}
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
                  addLabel={t({ am: "ተጨማሪ ማብራሪያ ጨምር", en: "Add more" })}
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
          </div>
        </div>
      ) : null}
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
              <span>{title} {index + 1}</span>
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
