"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/particle-background";
import { homeCopy } from "@/lib/content";
import { useLanguage } from "@/components/providers/language-provider";

export default function Home() {
  const { t } = useLanguage();
  const router = useRouter();
  const [isEntering, setIsEntering] = useState(false);

  const startJourney = () => {
    if (isEntering) {
      return;
    }
    setIsEntering(true);
    window.setTimeout(() => {
      router.push("/timeline");
    }, 850);
  };

  return (
    <motion.section
      className="relative flex min-h-[84vh] items-center justify-center overflow-hidden rounded-[2rem] px-6 py-16 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: isEntering ? 0 : 1, scale: isEntering ? 1.03 : 1 }}
      transition={{ duration: isEntering ? 0.8 : 3.8, ease: "easeInOut" }}
    >
      <ParticleBackground />

      <div className="relative z-10 w-full max-w-4xl text-center">
        <motion.h1
          className="font-serif text-5xl leading-tight md:text-7xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
        >
          {t(homeCopy.heading)}
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-soft md:text-xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3.8, ease: "easeInOut", delay: 0.35 }}
        >
          {t(homeCopy.intro)}
        </motion.p>

        <motion.div
          className="relative mx-auto mt-14 flex h-64 w-full max-w-xl items-end justify-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4, delay: 0.8, ease: "easeInOut" }}
        >
          <div className="pointer-events-none absolute inset-x-1/2 top-0 h-full w-3 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(232,211,167,0.15),rgba(232,211,167,0.8),rgba(232,211,167,0.15))] blur-[0.5px]" />
          <div className="pointer-events-none absolute inset-x-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-[rgba(89,65,30,0.45)]" />
          <motion.div
            className="pointer-events-none absolute inset-x-1/2 top-2 h-7 w-7 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,239,193,0.95),rgba(245,210,132,0.35),transparent_72%)]"
            animate={{ y: [0, 170, 0], opacity: [0.65, 0.95, 0.65] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <button
            type="button"
            onClick={startJourney}
            disabled={isEntering}
            className="surface-card breathe inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-lg font-medium disabled:opacity-70"
          >
            <span aria-hidden="true">🛤️</span>
            {t(homeCopy.cta)}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
