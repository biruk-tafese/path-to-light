"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";
import { pauseCopy } from "@/lib/content";

export function PauseScreen() {
  const { t } = useLanguage();

  return (
    <section className="app-gradient relative flex min-h-[70vh] items-center justify-center overflow-hidden rounded-[2rem] px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.2, ease: "easeInOut" }}
        className="text-center"
      >
        <p className="font-serif text-4xl md:text-6xl">{t(pauseCopy.title)}</p>
        <p className="mt-5 text-sm uppercase tracking-[0.2em] text-soft">{t(pauseCopy.label)}</p>
      </motion.div>
    </section>
  );
}
