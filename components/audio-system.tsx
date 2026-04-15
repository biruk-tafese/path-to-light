"use client";

import { motion } from "framer-motion";
import { useAudio } from "@/components/providers/audio-provider";
import { useLanguage } from "@/components/providers/language-provider";
import { audioCopy } from "@/lib/content";

export function AudioSystem() {
  const { t } = useLanguage();
  const {
    isMusicOn,
    isNarrationOn,
    musicVolume,
    narrationVolume,
    isMusicMuted,
    isNarrationMuted,
    toggleMusic,
    toggleNarration,
    setMusicVolume,
    setNarrationVolume,
    toggleMusicMute,
    toggleNarrationMute,
  } = useAudio();

  return (
    <section className="surface-card rounded-[2rem] p-6 md:p-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-serif text-2xl md:text-3xl">{t(audioCopy.title)}</h2>
        <motion.div
          className="h-2 w-28 overflow-hidden rounded-full bg-white/25"
          animate={{ opacity: isMusicOn ? [0.35, 0.75, 0.35] : 0.18 }}
          transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="h-full rounded-full bg-[color:var(--sky)]"
            animate={{ x: ["-30%", "120%"] }}
            transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <button
          onClick={toggleMusic}
          className="rounded-2xl bg-white/30 px-4 py-3 text-left text-sm text-soft transition-opacity duration-700 hover:opacity-90"
        >
          {isMusicOn ? t({ am: "የጀርባ ሙዚቃ ክፍት", en: "Background music on" }) : t({ am: "የጀርባ ሙዚቃ ዝግ", en: "Background music off" })}
        </button>

        <button
          onClick={toggleNarration}
          className="rounded-2xl bg-white/30 px-4 py-3 text-left text-sm text-soft transition-opacity duration-700 hover:opacity-90"
        >
          {isNarrationOn ? t({ am: "ትረካ ክፍት", en: "Narration on" }) : t({ am: "ትረካ ዝግ", en: "Narration off" })}
        </button>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-soft">
            <span>{t({ am: "የጀርባ ሙዚቃ ድምጽ", en: "Music volume" })}</span>
            <button onClick={toggleMusicMute} className="rounded-xl bg-white/30 px-2 py-1 text-xs">
              {isMusicMuted ? t({ am: "ዝም", en: "Muted" }) : t({ am: "አብራ", en: "Mute" })}
            </button>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <button onClick={() => setMusicVolume(musicVolume - 0.01)} className="rounded-xl bg-white/30 px-2 py-1 text-xs">-</button>
            <input
              type="range"
              min={0.1}
              max={0.2}
              step={0.01}
              value={musicVolume}
              onChange={(event) => setMusicVolume(Number(event.target.value))}
              className="w-full accent-[color:var(--gold)]"
            />
            <button onClick={() => setMusicVolume(musicVolume + 0.01)} className="rounded-xl bg-white/30 px-2 py-1 text-xs">+</button>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-soft">
            <span>{t({ am: "ትረካ ድምጽ", en: "Narration volume" })}</span>
            <button onClick={toggleNarrationMute} className="rounded-xl bg-white/30 px-2 py-1 text-xs">
              {isNarrationMuted ? t({ am: "ዝም", en: "Muted" }) : t({ am: "አብራ", en: "Mute" })}
            </button>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <button onClick={() => setNarrationVolume(narrationVolume - 0.01)} className="rounded-xl bg-white/30 px-2 py-1 text-xs">-</button>
            <input
              type="range"
              min={0.1}
              max={0.2}
              step={0.01}
              value={narrationVolume}
              onChange={(event) => setNarrationVolume(Number(event.target.value))}
              className="w-full accent-[color:var(--gold)]"
            />
            <button onClick={() => setNarrationVolume(narrationVolume + 0.01)} className="rounded-xl bg-white/30 px-2 py-1 text-xs">+</button>
          </div>
        </div>
      </div>
    </section>
  );
}
