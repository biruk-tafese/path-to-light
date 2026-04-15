"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";
import type { LocalizedText } from "@/lib/types";

type Props = {
  verse: LocalizedText;
  reference: LocalizedText;
};

export function ScriptureCard({ verse, reference }: Props) {
  const { t } = useLanguage();

  return (
    <motion.article className="surface-card breathe rounded-[2rem] p-6 md:p-8" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.4, ease: "easeInOut" }} whileHover={{ boxShadow: "0 26px 58px rgba(156, 139, 92, 0.26)" }}>
      <p className="font-serif text-xl leading-relaxed md:text-2xl">{t(verse)}</p>
      <p className="mt-4 text-sm uppercase tracking-[0.2em] text-soft">{t(reference)}</p>
    </motion.article>
  );
}
