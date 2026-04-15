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
    <p className="max-w-3xl text-base leading-8 text-soft md:text-lg">
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
      <p className="mx-auto max-w-3xl px-3 text-sm leading-7 text-soft md:px-0 md:text-base">
        {t(timelineCopy.intro)}
      </p>

      <div
        ref={containerRef}
        className="h-screen snap-y snap-mandatory overflow-y-auto rounded-[2rem] px-2 transition-[background] duration-[2200ms]"
        style={{ background: "transparent" }}
      >
      {scenes.map((scene) => (
        <section
          key={scene.id}
          className="scene-block h-screen snap-start px-4 py-8 md:px-8"
        >
          <div className="flex h-full items-center justify-center">
            <article className="manuscript-scroll w-full max-w-3xl p-6 md:p-10">
              <p className="text-sm tracking-wide text-soft">📅 {t(scene.historical.year)} • 📍 {t(scene.historical.location)}</p>
              <h3 className="mt-2 font-serif text-3xl md:text-5xl">{t(scene.title)}</h3>
              <p className="mt-3 text-soft">{t(scene.text)}</p>

              <div className="mt-6 space-y-4 text-sm md:text-base">
                <div>
                  <p className="font-semibold text-soft">📖 {t(timelineCopy.labels.scripture)}</p>
                  <p className="font-medium">{t(scene.biblical.reference)}</p>
                  <p className="mt-1">{t(scene.biblical.excerpt)}</p>
                </div>

                <div>
                  <p className="font-semibold text-soft">{t({ am: "ምን ተከሰተ?", en: "What happened?" })}</p>
                  <WordByWord text={t(scene.wordsActions)} />
                </div>

                <div>
                  <p className="font-semibold text-soft">{t({ am: "በዚያን ዘመን", en: "At that time" })}</p>
                  <p>{t(scene.historical.context)}</p>
                </div>

                <div>
                  <p className="font-semibold text-soft">{t({ am: "ለምን አስፈላጊ ነው?", en: "Why it matters" })}</p>
                  <p>{t(scene.evidence)}</p>
                </div>

                <div>
                  <p className="font-semibold text-soft">🕊️ {t(timelineCopy.labels.spiritual)}</p>
                  <p>{t(scene.spiritualMeaning)}</p>
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
