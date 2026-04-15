"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";
import type { Scene } from "@/lib/types";

type Props = {
  scene: Scene;
  index?: number;
};

export function SceneRenderer({ scene, index = 0 }: Props) {
  const { t } = useLanguage();

  return (
    <motion.article
      className="rounded-[2rem] p-8 md:p-12"
      style={{ background: scene.background }}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.55 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.1 }}
    >
      <p className="mb-4 text-xs uppercase tracking-[0.24em] text-white/70">
        {scene.audio ? "Audio scene" : "Silent scene"}
      </p>
      <h3 className="font-serif text-3xl text-white md:text-4xl">{t(scene.title)}</h3>
      <p className="mt-5 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
        {t(scene.text)}
      </p>
    </motion.article>
  );
}
