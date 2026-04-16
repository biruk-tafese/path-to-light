"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { appTitle, navLabels } from "@/lib/content";
import { useLanguage } from "@/components/providers/language-provider";

const navItems = [
  { href: "/", key: "home" as const },
  { href: "/timeline", key: "timeline" as const },
  { href: "/journey", key: "journey" as const },
  { href: "/scripture", key: "scripture" as const },
  { href: "/nearbychurch", key: "nearbychurch" as const },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [path]);

  return (
    <div className="app-gradient min-h-screen">
      <header className="sticky top-0 z-40 mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="surface-card inline-flex h-11 w-11 items-center justify-center rounded-2xl text-lg md:hidden"
          >
            ☰
          </button>

          <Link href="/" className="font-serif text-xl tracking-wide md:text-2xl">
            {t(appTitle)}
          </Link>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = path === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-3 py-2 text-sm transition-opacity duration-700 ${
                  active ? "surface-card" : "text-soft hover:opacity-85"
                }`}
              >
                {t(navLabels[item.key])}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-40 cursor-default bg-black/18 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.aside
              className="fixed left-0 top-0 z-50 h-full w-[86vw] max-w-sm border-r border-[color:var(--ring)]/40 bg-[color:var(--bg)] px-5 py-6 shadow-2xl md:hidden"
              initial={{ x: -340 }}
              animate={{ x: 0 }}
              exit={{ x: -340 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl">{t(appTitle)}</span>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="surface-card inline-flex h-11 w-11 items-center justify-center rounded-2xl text-lg"
                >
                  ✕
                </button>
              </div>

              <div className="mt-8 space-y-2">
                {navItems.map((item) => {
                  const active = path === item.href;
                  return (
                    <Link
                      key={`mobile-${item.href}`}
                      href={item.href}
                      className={`block rounded-2xl px-4 py-3 text-base transition-opacity duration-700 ${
                        active ? "surface-card" : "bg-white/20 text-soft"
                      }`}
                    >
                      {t(navLabels[item.key])}
                    </Link>
                  );
                })}
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>

      <main className="mx-auto w-full max-w-6xl px-3 pb-14 sm:px-4 md:px-6 [perspective:1500px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={path}
            initial={{ opacity: 0, rotateY: -9, transformOrigin: "left center" }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 8, transformOrigin: "right center" }}
            transition={{ duration: 1.25, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
