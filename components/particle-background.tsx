"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  top: `${(index * 17) % 88}%`,
  left: `${(index * 29) % 94}%`,
  size: 4 + (index % 4) * 3,
  duration: 14 + (index % 5) * 2,
  delay: index * 0.45,
}));

export function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((item) => (
        <motion.span
          key={item.id}
          className="absolute rounded-full bg-white/25 dark:bg-slate-100/15"
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
          }}
          animate={{
            y: [0, -26, 0],
            x: [0, 8, 0],
            opacity: [0.15, 0.32, 0.15],
          }}
          transition={{
            duration: item.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: item.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
