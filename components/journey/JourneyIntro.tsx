"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";
import type { LocalizedText } from "@/lib/types";

export function JourneyIntro({
  question,
  subtitle,
}: {
  question: LocalizedText;
  subtitle: LocalizedText;
}) {
  const { t } = useLanguage();

  return (
    <section className="journey-scene px-4 pt-4 md:px-8">
      <article className="manuscript-scroll mx-auto w-full max-w-3xl p-7 text-center md:p-12">
        <motion.h1
          className="font-serif text-4xl md:text-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          {t(question)}
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 max-w-2xl text-soft"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
        >
          {t(subtitle)}
        </motion.p>
      </article>
    </section>
  );
}
