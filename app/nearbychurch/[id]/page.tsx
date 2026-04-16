"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { churches } from "@/data/churches";
import { useLanguage } from "@/components/providers/language-provider";

function localize(value: { am: string; en: string }, locale: "am" | "en") {
  return locale === "am" ? value.am : value.en;
}

export default function ChurchDetailsPage() {
  const { locale, t } = useLanguage();
  const params = useParams<{ id: string }>();
  const church = churches.find((entry) => entry.id === params.id);

  if (!church) {
    return (
      <section className="surface-card rounded-[2rem] p-6 md:p-8">
        <p className="text-soft">{t({ am: "ቤተክርስቲያኑ አልተገኘም።", en: "Church not found." })}</p>
        <Link href="/nearbychurch" className="mt-4 inline-flex rounded-2xl bg-[color:var(--ink)] px-5 py-3 text-sm text-[color:var(--bg)]">
          {t({ am: "ወደ ዝርዝር ተመለስ", en: "Back to list" })}
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="surface-card overflow-hidden rounded-[2rem]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[22rem] lg:min-h-[32rem]">
            <img src={church.image} alt={localize(church.name, locale)} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.1),rgba(10,10,10,0.72))]" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-white/70">Nearby Churches</p>
              <h1 className="mt-2 font-serif text-4xl md:text-6xl">{localize(church.name, locale)}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/85 md:text-base">{localize(church.locationName, locale)}</p>
            </div>
          </div>

          <div className="space-y-5 p-5 md:p-8">
            <div>
              <Link href="/nearbychurch" className="text-sm text-soft underline">
                {t({ am: "ወደ ቤተክርስቲያኖች ተመለስ", en: "Back to churches" })}
              </Link>
              <h2 className="mt-4 font-serif text-2xl md:text-3xl">{localize(church.leader, locale)}</h2>
              <p className="text-soft">{localize(church.address, locale)}</p>
            </div>

            <div className="grid gap-3 text-sm md:grid-cols-2">
              <div className="rounded-2xl bg-white/35 p-4">
                <p className="text-soft">{t({ am: "መገናኛ", en: "Leader contact" })}</p>
                <p className="mt-1">{church.leaderContact.phone}</p>
                {church.leaderContact.email ? <p>{church.leaderContact.email}</p> : null}
                {church.leaderContact.whatsapp ? <p>WhatsApp: {church.leaderContact.whatsapp}</p> : null}
              </div>
              <div className="rounded-2xl bg-white/35 p-4">
                <p className="text-soft">{t({ am: "መዋጮ / ድጋፍ", en: "Donation / Support" })}</p>
                <p className="mt-1">{localize(church.donation.method, locale)}</p>
                <p>{localize(church.donation.accountName, locale)}</p>
                <p>{church.donation.accountNumber}</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/35 p-4">
              <p className="text-sm text-soft">{t({ am: "የእምነት መግለጫ", en: "Statement of faith" })}</p>
              <p className="mt-2 leading-8">{localize(church.statementOfFaith, locale)}</p>
            </div>

            <div className="rounded-2xl bg-white/35 p-4">
              <p className="text-sm text-soft">{t({ am: "የሳምንቱ ፕሮግራሞች", en: "Weekly programs" })}</p>
              <div className="mt-3 space-y-3 text-sm">
                {church.weeklyPrograms.map((program) => (
                  <div key={`${program.day.en}-${program.time}`} className="flex items-start justify-between gap-4 rounded-xl bg-white/50 px-3 py-3">
                    <div>
                      <p className="font-medium">{localize(program.day, locale)}</p>
                      <p className="text-soft">{program.time}</p>
                    </div>
                    <p className="text-right text-soft">{localize(program.activity, locale)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/35 p-4">
              <p className="text-sm text-soft">{t({ am: "ዝግጅቶች / ኮንፈረንሶች", en: "Events / Conferences" })}</p>
              <div className="mt-3 space-y-3 text-sm">
                {church.events.map((event) => (
                  <div key={`${event.title.en}-${event.schedule.en}`} className="rounded-xl bg-white/50 px-3 py-3">
                    <p className="font-medium">{localize(event.title, locale)}</p>
                    <p className="mt-1 text-soft">{localize(event.description, locale)}</p>
                    <p className="mt-2 text-soft">{localize(event.schedule, locale)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/35 p-4">
              <p className="text-sm text-soft">{t({ am: "ሶሻል እና ድር ጣቢያ", en: "Socials and website" })}</p>
              <div className="mt-2 space-y-1 text-sm">
                {church.socials.website ? <a className="block underline" href={church.socials.website} target="_blank" rel="noreferrer">Website</a> : null}
                {church.socials.facebook ? <p>Facebook: {church.socials.facebook}</p> : null}
                {church.socials.telegram ? <p>Telegram: {church.socials.telegram}</p> : null}
                {church.socials.youtube ? <p>YouTube: {church.socials.youtube}</p> : null}
                {church.socials.instagram ? <p>Instagram: {church.socials.instagram}</p> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}