"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";
import type { JourneyScene as JourneySceneType } from "@/data/journey";
import { useLanguage } from "@/components/providers/language-provider";
import { EmotionIcon } from "@/components/journey/EmotionIcon";

function SlowText({ value }: { value: string }) {
  const words = value.split(" ");

  return (
    <p className="max-w-3xl text-base leading-8 text-soft md:text-lg">
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-1 inline-block"
          initial={{ opacity: 0.08, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.2, delay: index * 0.04, ease: "easeInOut" }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

export function JourneyScene({ scene }: { scene: JourneySceneType }) {
  return <JourneyAccordionItem scene={scene} expanded={false} onToggle={() => {}} />;
}

export function JourneyAccordionItem({
  scene,
  expanded,
  onToggle,
}: {
  scene: JourneySceneType;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { t } = useLanguage();

  return (
    <section className="journey-scene px-4 md:px-8">
      <article className="manuscript-scroll mx-auto w-full max-w-3xl p-5 md:p-8">
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 text-left"
          aria-expanded={expanded}
        >
          <div className="flex items-center gap-4">
            <EmotionIcon icon={scene.icon} />
            <h2 className="font-serif text-2xl md:text-3xl">{t(scene.title)}</h2>
          </div>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="text-soft"
          >
            <LuChevronDown size={22} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-5 space-y-5">
                <div>
                  <p className="mb-2 font-semibold text-soft">{t({ am: "ስሜት", en: "Feeling" })}</p>
                  <SlowText value={t(scene.description)} />
                </div>

                <div>
                  <p className="mb-2 font-semibold text-soft">
                    {t({ am: "ክርስቶስ እንደ ፈውስ እና ማዳን", en: "Christ as Healing and Salvation" })}
                  </p>
                  <SlowText value={t(scene.solution)} />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-soft">{t({ am: "የመጽሐፍ ቅዱስ ቃል", en: "Bible Quote" })}</p>
                  <p className="font-medium">{scene.verse.ref}</p>
                  <p className="mt-1">{t(scene.verse.text)}</p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-soft">{t({ am: "እንደገና አስብ", en: "Reflection" })}</p>
                  <p>{t(scene.reflection)}</p>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </article>
    </section>
  );
}
