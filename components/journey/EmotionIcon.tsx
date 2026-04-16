"use client";

import { motion } from "framer-motion";
import { LuCompass, LuCloudFog, LuMoon, LuScale, LuSearch } from "react-icons/lu";

type IconName = "compass" | "moon" | "scale" | "search" | "fog";

const iconMap = {
  compass: LuCompass,
  moon: LuMoon,
  scale: LuScale,
  search: LuSearch,
  fog: LuCloudFog,
};

export function EmotionIcon({ icon }: { icon: IconName }) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      className="text-[color:var(--text-soft)]/70"
      animate={{ y: [0, -5, 0], opacity: [0.35, 0.55, 0.35] }}
      transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <Icon size={44} />
    </motion.div>
  );
}
