"use client";

import { useEffect, useState } from "react";
import { LuBookOpen, LuChevronDown, LuFocus, LuHash, LuHeart, LuScrollText, LuShare2 } from "react-icons/lu";
import { useLanguage } from "@/components/providers/language-provider";
import type { LocalizedText } from "@/lib/types";

type Props = {
  index: number;
  reference: LocalizedText;
  open: boolean;
  onToggle: () => void;
  liked: boolean;
  onLike: () => void;
  onShare: () => void;
  verse?: LocalizedText;
  verseBlocks?: LocalizedText[];
  detailBlocks?: LocalizedText[];
  contextBlocks?: LocalizedText[];
  details?: LocalizedText;
  context?: LocalizedText;
  photoUrl?: string;
  photoName?: string;
};

export function ScriptureCard({
  index,
  reference,
  open,
  onToggle,
  liked,
  onLike,
  onShare,
  verse,
  verseBlocks,
  detailBlocks,
  contextBlocks,
  details,
  context,
  photoUrl,
  photoName,
}: Props) {
  const { t } = useLanguage();
  const [isImageOpen, setIsImageOpen] = useState(false);
  const blockVerseList = verseBlocks?.length ? verseBlocks : verse ? [verse] : [];
  const blockDetailList = detailBlocks?.length ? detailBlocks : details ? [details] : [];
  const blockContextList = contextBlocks?.length ? contextBlocks : context ? [context] : [];
  const verseText = blockVerseList.length ? blockVerseList.map((block) => t(block)).join("\n\n") : "";
  const preview = verseText.length > 140 ? `${verseText.slice(0, 140)}...` : verseText;

  useEffect(() => {
    if (!isImageOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isImageOpen]);

  function downloadImage() {
    if (!photoUrl) {
      return;
    }

    const link = document.createElement("a");
    link.href = photoUrl;
    link.download = photoName || "scripture-image";
    link.rel = "noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <article
      className="surface-card breathe rounded-[2rem] p-5 md:p-7"
      style={{ boxShadow: "0 0 0 transparent" }}
    >
      <button
        type="button"
        className="w-full text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs tracking-[0.14em] text-soft md:uppercase md:tracking-[0.2em]">
              <span className="inline-flex items-center gap-1.5">
                <LuHash size={14} />
                {index}
              </span>
            </p>

            <p className="mt-1 text-sm tracking-[0.12em] text-soft md:uppercase md:tracking-[0.18em]">
              <span className="inline-flex items-center gap-2">
                <LuBookOpen size={15} />
                <span>{t(reference)}</span>
              </span>
            </p>

            <p className="mt-3 font-serif text-lg leading-relaxed md:text-2xl">{open ? verseText : preview}</p>
          </div>

          <span className="mt-1 text-soft" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
            <LuChevronDown size={20} />
          </span>
        </div>
      </button>

      {open ? (
        <div className="mt-5 space-y-4 overflow-hidden">
          {photoUrl ? (
            <>
              <button
                type="button"
                onClick={() => setIsImageOpen(true)}
                className="block w-full overflow-hidden rounded-[1.5rem] border border-black/10 bg-black/5 text-left"
                aria-label={t({ am: "ፎቶውን በሙሉ ክፈት", en: "Open image fullscreen" })}
              >
                <img src={photoUrl} alt={photoName || t({ am: "የተጨመረ ፎቶ", en: "Attached photo" })} className="h-64 w-full object-cover md:h-80" />
              </button>

              {isImageOpen ? (
                <div
                  className="fixed inset-0 z-[70] bg-black/90 p-4"
                  role="dialog"
                  aria-modal="true"
                  aria-label={photoName || t({ am: "ፎቶ እይታ", en: "Image viewer" })}
                  onClick={() => setIsImageOpen(false)}
                >
                  <div className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-4" onClick={(event) => event.stopPropagation()}>
                    <div className="flex items-center justify-between gap-3 text-white">
                      <p className="text-sm text-white/80">{photoName || t({ am: "የተጨመረ ፎቶ", en: "Attached photo" })}</p>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={downloadImage}
                          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
                        >
                          {t({ am: "አውርድ", en: "Download" })}
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsImageOpen(false)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                          aria-label={t({ am: "ዝጋ", en: "Close" })}
                        >
                          ×
                        </button>
                      </div>
                    </div>

                    <button type="button" onClick={() => setIsImageOpen(false)} className="block w-full">
                      <img
                        src={photoUrl}
                        alt={photoName || t({ am: "የተጨመረ ፎቶ", en: "Attached photo" })}
                        className="max-h-[calc(100vh-8rem)] w-full rounded-[2rem] object-contain shadow-2xl"
                      />
                    </button>
                  </div>
                </div>
              ) : null}
            </>
          ) : null}

          {blockVerseList.length > 0 ? (
            <div className="rounded-md border-l-2 border-black/20 pl-3">
              <p className="font-semibold text-soft">
                <span className="inline-flex items-center gap-2">
                  <LuBookOpen size={15} />
                  {t({ am: "ቃል", en: "Verse" })}
                </span>
              </p>
              <div className="mt-1 space-y-4 pl-4">
                {blockVerseList.map((item, blockIndex) => (
                  <p key={`verse-${blockIndex}`} className="indent-6 leading-7">{t(item)}</p>
                ))}
              </div>
            </div>
          ) : null}

          {blockDetailList.length > 0 ? (
            <div className="rounded-md border-l-2 border-black/20 pl-3">
              <p className="font-semibold text-soft">
                <span className="inline-flex items-center gap-2">
                  <LuScrollText size={15} />
                  {t({ am: "ዝርዝር ትርጓሜ", en: "Study Detail" })}
                </span>
              </p>
              <div className="mt-1 space-y-4 pl-4">
                {blockDetailList.map((item, blockIndex) => (
                  <p key={`detail-${blockIndex}`} className="indent-6 leading-7">{t(item)}</p>
                ))}
              </div>
            </div>
          ) : null}

          {blockContextList.length > 0 ? (
            <div className="rounded-md border-l-2 border-black/20 pl-3">
              <p className="font-semibold text-soft">
                <span className="inline-flex items-center gap-2">
                  <LuFocus size={15} />
                  {t({ am: "የማንበብ ትኩረት", en: "Reading Focus" })}
                </span>
              </p>
              <div className="mt-1 space-y-4 pl-4">
                {blockContextList.map((item, blockIndex) => (
                  <p key={`context-${blockIndex}`} className="indent-6 leading-7">{t(item)}</p>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={onLike}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                liked
                  ? "border-[#9d6b44] bg-[#9d6b44]/10 text-[#7d4f2d]"
                  : "border-black/10 bg-white/40 text-soft hover:bg-white/60"
              }`}
            >
              <LuHeart size={16} className={liked ? "fill-current" : ""} />
              {liked ? t({ am: "ወደድሁ", en: "Liked" }) : t({ am: "ውድ", en: "Like" })}
            </button>

            <button
              type="button"
              onClick={onShare}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-4 py-2 text-sm text-soft transition-colors hover:bg-white/60"
            >
              <LuShare2 size={16} />
              {t({ am: "አጋራ", en: "Share" })}
            </button>
          </div>

        </div>
      ) : null}
    </article>
  );
}
