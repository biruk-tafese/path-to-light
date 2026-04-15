"use client";

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
  { href: "/audio", key: "audio" as const },
  { href: "/pause", key: "pause" as const },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const { t } = useLanguage();

  return (
    <div className="app-gradient min-h-screen">
      <header className="sticky top-0 z-30 mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="font-serif text-xl tracking-wide md:text-2xl">
          {t(appTitle)}
        </Link>

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

      <nav className="mx-auto mb-3 flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 pb-1 md:hidden">
        {navItems.map((item) => {
          const active = path === item.href;
          return (
            <Link
              key={`mobile-${item.href}`}
              href={item.href}
              className={`whitespace-nowrap rounded-2xl px-3 py-2 text-sm transition-opacity duration-700 ${
                active ? "surface-card" : "bg-white/25 text-soft"
              }`}
            >
              {t(navLabels[item.key])}
            </Link>
          );
        })}
      </nav>

      <main className="mx-auto w-full max-w-6xl px-4 pb-14 md:px-6 [perspective:1500px]">
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
