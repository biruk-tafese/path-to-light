"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <button type="button" aria-label="Switch language" onClick={() => setLocale(locale === "am" ? "en" : "am")} className="surface-card inline-flex h-11 w-11 items-center justify-center text-sm font-semibold text-[var(--color-text)] transition-all duration-[900ms] hover:scale-[1.04]">
      {locale === "am" ? "አ" : "EN"}
    </button>
  );
}
