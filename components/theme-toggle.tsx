"use client";

import { useTheme } from "@/components/providers/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" aria-label="Toggle theme" onClick={toggleTheme} className="surface-card inline-flex h-11 w-11 items-center justify-center text-lg text-[var(--color-text)] transition-all duration-[900ms] hover:scale-[1.04]">
      {theme === "light" ? "☾" : "◌"}
    </button>
  );
}
