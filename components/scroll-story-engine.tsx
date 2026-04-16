"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scenes } from "@/lib/content";
import { timelineCopy } from "@/data/timeline";
import { useLanguage } from "@/components/providers/language-provider";
import { useAudio } from "@/components/providers/audio-provider";

gsap.registerPlugin(ScrollTrigger);

function WordByWord({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <p className="max-w-3xl pl-5 text-base leading-8 text-soft indent-6 md:text-lg">
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-1 inline-block"
          initial={{ opacity: 0.05, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: index * 0.05, ease: "easeInOut" }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

export function ScrollStoryEngine() {
  const { t } = useLanguage();
  const { setActiveNarrationSource } = useAudio();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const root = containerRef.current;
    if (!root) {
      return;
    }

    const sections = gsap.utils.toArray<HTMLElement>(".scene-block", root);

    const triggers = sections.map((section, index) =>
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
      }),
    );

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  const activeScene = scenes[active] ?? scenes[0];

  useEffect(() => {
    setActiveNarrationSource(activeScene.audio);
  }, [activeScene.audio, setActiveNarrationSource]);

  return (
    <div className="space-y-4">
      <div className="mx-2 rounded-lg border border-black/10 bg-white/35 px-2.5 py-2 md:mx-auto md:max-w-3xl md:rounded-xl md:px-4 md:py-3">
        <p className="text-[11px] font-semibold tracking-[0.12em] text-soft md:text-sm md:uppercase md:tracking-[0.2em]">🎯 {t({ am: "ትኩረት", en: "Focus" })}</p>
        <p className="mt-1 pl-2 text-[13px] leading-6 text-soft md:pl-4 md:text-base md:leading-7 md:indent-6">{t(timelineCopy.intro)}</p>
      </div>

      <div
        ref={containerRef}
        className="h-screen snap-y snap-mandatory overflow-y-auto rounded-[2rem] px-0 md:px-2 transition-[background] duration-[2200ms]"
        style={{ background: "transparent" }}
      >
      {scenes.map((scene) => (
        <section
          key={scene.id}
          className="scene-block h-screen snap-start px-0 py-5 md:px-8 md:py-8"
        >
          <div className="flex h-full items-center justify-center">
            <article className="manuscript-scroll w-full max-w-3xl rounded-none p-4 md:rounded-[2rem] md:p-10">
              <p className="text-sm tracking-wide text-soft">📅 {t(scene.historical.year)} • 📍 {t(scene.historical.location)}</p>
              <h3 className="mt-2 font-serif text-3xl md:text-5xl">🧭 {t(scene.title)}</h3>

              <div className="mt-3 rounded-lg border-l-4 border-black/25 bg-black/5 px-3 py-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-soft md:text-sm">📝 {t({ am: "ዋና ርእስ", en: "Main Topic" })}</p>
                <p className="mt-1 pl-4 text-soft indent-6">{t(scene.text)}</p>
              </div>

              <div className="mt-6 space-y-4 text-sm md:text-base">
                <div className="rounded-md border-l-2 border-black/20 pl-3">
                  <p className="font-semibold text-soft">📖 {t(timelineCopy.labels.scripture)}</p>
                  <p className="font-medium">{t(scene.biblical.reference)}</p>
                  <p className="mt-1 pl-4 indent-6">{t(scene.biblical.excerpt)}</p>
                </div>

                <div className="rounded-md border-l-2 border-black/20 pl-3">
                  <p className="font-semibold text-soft">🎬 {t({ am: "ምን ተከሰተ?", en: "What happened?" })}</p>
                  <WordByWord text={t(scene.wordsActions)} />
                </div>

                <div className="rounded-md border-l-2 border-black/20 pl-3">
                  <p className="font-semibold text-soft">🏺 {t({ am: "በዚያን ዘመን", en: "At that time" })}</p>
                  <p className="pl-4 indent-6">{t(scene.historical.context)}</p>
                </div>

                <div className="rounded-md border-l-2 border-black/20 pl-3">
                  <p className="font-semibold text-soft">🔎 {t({ am: "ለምን አስፈላጊ ነው?", en: "Why it matters" })}</p>
                  <p className="pl-4 indent-6">{t(scene.evidence)}</p>
                </div>

                <div className="rounded-md border-l-2 border-black/20 pl-3">
                  <p className="font-semibold text-soft">🕊️ {t(timelineCopy.labels.spiritual)}</p>
                  <p className="pl-4 indent-6">{t(scene.spiritualMeaning)}</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      ))}
      </div>
    </div>
  );
}
