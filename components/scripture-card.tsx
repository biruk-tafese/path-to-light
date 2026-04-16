"use client";

import { motion } from "framer-motion";
import { LuBookOpen, LuChevronDown, LuFocus, LuHash, LuHeart, LuScrollText, LuShare2 } from "react-icons/lu";
import { useLanguage } from "@/components/providers/language-provider";
import type { LocalizedText } from "@/lib/types";

type Props = {
  index: number;
  verse: LocalizedText;
  reference: LocalizedText;
  open: boolean;
  onToggle: () => void;
  liked: boolean;
  onLike: () => void;
  onShare: () => void;
  details?: LocalizedText;
  context?: LocalizedText;
};

export function ScriptureCard({
  index,
  verse,
  reference,
  open,
  onToggle,
  liked,
  onLike,
  onShare,
  details,
  context,
}: Props) {
  const { t } = useLanguage();
  const verseText = t(verse);
  const preview = verseText.length > 140 ? `${verseText.slice(0, 140)}...` : verseText;

  return (
    <motion.article
      className="surface-card breathe rounded-[2rem] p-5 md:p-7"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      whileHover={{ boxShadow: "0 26px 58px rgba(156, 139, 92, 0.26)" }}
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

          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="mt-1 text-soft"
          >
            <LuChevronDown size={20} />
          </motion.span>
        </div>
      </button>

      {open ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="mt-5 space-y-4 overflow-hidden"
        >
          {details ? (
            <div className="rounded-md border-l-2 border-black/20 pl-3">
              <p className="font-semibold text-soft">
                <span className="inline-flex items-center gap-2">
                  <LuScrollText size={15} />
                  {t({ am: "ዝርዝር ትርጓሜ", en: "Study Detail" })}
                </span>
              </p>
              <p className="mt-1 pl-4 indent-6 leading-7">{t(details)}</p>
            </div>
          ) : null}

          {context ? (
            <div className="rounded-md border-l-2 border-black/20 pl-3">
              <p className="font-semibold text-soft">
                <span className="inline-flex items-center gap-2">
                  <LuFocus size={15} />
                  {t({ am: "የማንበብ ትኩረት", en: "Reading Focus" })}
                </span>
              </p>
              <p className="mt-1 pl-4 indent-6 leading-7">{t(context)}</p>
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

        </motion.div>
      ) : null}
    </motion.article>
  );
}
