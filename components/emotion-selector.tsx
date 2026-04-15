"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { emotionChoices, scenes } from "@/lib/content";
import { useLanguage } from "@/components/providers/language-provider";
import { SceneRenderer } from "@/components/scene-renderer";

export function EmotionSelector() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(emotionChoices[0].key);

  const selectedChoice = useMemo(() => emotionChoices.find((choice) => choice.key === selected) ?? emotionChoices[0], [selected]);

  const filteredScenes = useMemo(() => scenes.filter((scene) => selectedChoice.sceneIds.includes(scene.id)), [selectedChoice]);

  return (
    <div className="space-y-8">
      <div className="grid gap-3 md:grid-cols-4">
        {emotionChoices.map((choice) => (
          <motion.button
            key={choice.key}
            onClick={() => setSelected(choice.key)}
            className={`rounded-[1.5rem] px-4 py-4 text-left transition-all duration-700 ${selected === choice.key ? "surface-card scale-[1.01]" : "bg-white/20 hover:bg-white/30"}`}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <p className="font-serif text-xl">{t(choice.label)}</p>
            <p className="mt-1 text-xs text-soft">{t(choice.hint)}</p>
          </motion.button>
        ))}
      </div>

      <motion.div key={selected} initial={{ opacity: 0, filter: "blur(6px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1.2, ease: "easeInOut" }} className="space-y-6">
        {filteredScenes.map((scene, index) => (
          <SceneRenderer key={scene.id} scene={scene} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
