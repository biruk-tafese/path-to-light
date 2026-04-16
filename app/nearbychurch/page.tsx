"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { churches } from "@/data/churches";
import type { Church, LocalizedText, Locale } from "@/lib/types";

type UserLocation = {
  lat: number;
  lng: number;
};

function localize(value: LocalizedText, locale: Locale) {
  return locale === "am" ? value.am : value.en;
}

function distanceKm(from: UserLocation, to: UserLocation) {
  const earthRadiusKm = 6371;
  const dLat = ((to.lat - from.lat) * Math.PI) / 180;
  const dLon = ((to.lng - from.lng) * Math.PI) / 180;
  const fromLat = (from.lat * Math.PI) / 180;
  const toLat = (to.lat * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(fromLat) * Math.cos(toLat) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function matchesQuery(church: Church, query: string) {
  if (!query.trim()) {
    return true;
  }

  const haystack = [
    church.name.am,
    church.name.en,
    church.leader.am,
    church.leader.en,
    church.locationName.am,
    church.locationName.en,
    church.address.am,
    church.address.en,
    church.statementOfFaith.am,
    church.statementOfFaith.en,
    church.socials.website ?? "",
    church.socials.facebook ?? "",
    church.socials.telegram ?? "",
    church.socials.youtube ?? "",
    church.socials.instagram ?? "",
    church.leaderContact.phone,
    church.leaderContact.email ?? "",
    church.leaderContact.whatsapp ?? "",
    church.donation.accountNumber,
    church.donation.accountName.am,
    church.donation.accountName.en,
    ...church.events.flatMap((event) => [event.title.am, event.title.en, event.description.am, event.description.en, event.schedule.am, event.schedule.en]),
    ...church.weeklyPrograms.flatMap((program) => [program.day.am, program.day.en, program.activity.am, program.activity.en, program.time]),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

export default function NearbyChurchPage() {
  const { t, locale } = useLanguage();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [locationStatus, setLocationStatus] = useState<"idle" | "loading" | "granted" | "denied">("idle");
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);

  const requestLocation = async () => {
    setLocationStatus("loading");

    try {
      if (!navigator.geolocation) {
        setLocationStatus("denied");
        return;
      }

      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 300000,
        });
      });

      setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
      setLocationStatus("granted");
    } catch {
      setUserLocation(null);
      setLocationStatus("denied");
    }
  };

  const filterOptions = useMemo(
    () => [
      { value: "all", label: t({ am: "ሁሉም ቤተክርስቲያኖች", en: "All churches" }) },
      { value: "sarbet", label: t({ am: "ሳርቤት", en: "Sarbet" }) },
      { value: "megenagna", label: t({ am: "መገናኛ", en: "Megenagna" }) },
      { value: "kirkos", label: t({ am: "ቂርቆስ", en: "Kirkos" }) },
      { value: "yeka", label: t({ am: "የካ", en: "Yeka" }) },
      { value: "bole", label: t({ am: "ቦሌ", en: "Bole" }) },
    ],
    [t],
  );

  const visibleChurches = useMemo(() => {
    return churches
      .filter((church) => matchesQuery(church, query))
      .filter((church) => {
        if (filter === "all") {
          return true;
        }

        const target = `${church.locationName.am} ${church.locationName.en} ${church.address.am} ${church.address.en}`.toLowerCase();
        return target.includes(filter.toLowerCase());
      })
      .map((church) => {
        const distance = userLocation ? distanceKm(userLocation, church.coordinates) : null;
        return { church, distance };
      })
      .sort((a, b) => {
        if (a.distance !== null && b.distance !== null) {
          return a.distance - b.distance;
        }

        if (a.distance !== null) {
          return -1;
        }

        if (b.distance !== null) {
          return 1;
        }

        return localize(a.church.name, locale).localeCompare(localize(b.church.name, locale));
      });
  }, [filter, locale, query, userLocation]);

  const suggestions = userLocation ? visibleChurches.slice(0, 3) : visibleChurches.slice(0, 3);

  return (
    <section className="space-y-6">
      <div className="surface-card rounded-[2rem] p-5 md:p-7">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h1 className="font-serif text-4xl md:text-5xl">{t({ am: "ቅርብ ያሉ ቤተ ክርስቲያናት", en: "Nearby Churches" })}</h1>
              <p className="max-w-3xl text-soft">
                {t({
                  am: "በአዲስ አበባ ያሉ ክርስቲያናዊ ቤተክርስቲያኖችን በፍለጋ እና በማጣሪያ ይመልከቱ።",
                  en: "Browse Addis Ababa Christian churches with search and filtering.",
                })}
              </p>
            </div>

            <button
              type="button"
              onClick={() => void requestLocation()}
              className="inline-flex items-center justify-center rounded-2xl bg-[color:var(--ink)] px-5 py-3 text-sm font-medium text-[color:var(--bg)]"
            >
              {locationStatus === "loading"
                ? t({ am: "የአካባቢ ፍቃድ በመጠየቅ ላይ...", en: "Requesting location access..." })
                : t({ am: "አካባቢዬን ፈትሽ", en: "Use My Location" })}
            </button>
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_16rem]">
            <label>
              <span className="mb-2 block text-sm text-soft">{t({ am: "ፍለጋ", en: "Search" })}</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t({ am: "ቤተክርስቲያን, ሳርቤት, ፓስተር, ጸሎት...", en: "Church, Sarbet, pastor, prayer..." })}
                className="w-full rounded-2xl border border-black/10 bg-white/55 px-4 py-3 outline-none placeholder:text-soft/70"
              />
            </label>

            <label>
              <span className="mb-2 block text-sm text-soft">{t({ am: "ማጣሪያ", en: "Filter" })}</span>
              <select
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                className="w-full rounded-2xl border border-black/10 bg-white/55 px-4 py-3 outline-none"
              >
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-soft">
            <span>{t({ am: "የአቀማመጥ ሁኔታ", en: "Location status" })}: {locationStatus}</span>
            {userLocation ? (
              <span>
                {t({ am: "አካባቢ", en: "Location" })}: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
              </span>
            ) : null}
            <span>{t({ am: "ተገኙ", en: "Found" })}: {visibleChurches.length}</span>
          </div>
        </div>
      </div>

      {userLocation ? (
        <div className="surface-card rounded-[2rem] p-5 md:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-serif text-2xl md:text-3xl">{t({ am: "የእርስዎ ምርጥ ምክረ ሃሳቦች", en: "Top Suggestions Near You" })}</h2>
            <p className="text-sm text-soft">{t({ am: "በርቀት መሰረት የተደረደሩ", en: "Ordered by distance" })}</p>
          </div>
          <div className="mt-4 flex gap-4 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory]">
            {suggestions.map(({ church, distance }) => (
              <Link
                key={`suggestion-${church.id}`}
                href={`/nearbychurch/${church.id}`}
                className="min-w-[16rem] snap-start rounded-[1.75rem] border border-black/10 bg-white/40 p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-soft">{distance !== null ? `${distance.toFixed(1)} km` : t({ am: "ቅርብ", en: "Nearby" })}</p>
                <h3 className="mt-2 font-serif text-xl">{localize(church.name, locale)}</h3>
                <p className="mt-1 text-sm text-soft">{localize(church.locationName, locale)}</p>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {visibleChurches.length ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleChurches.map(({ church, distance }) => (
            <Link
              key={church.id}
              href={`/nearbychurch/${church.id}`}
              className="group overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg)] text-left transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-56">
                <img
                  src={church.image}
                  alt={localize(church.name, locale)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,10,0.06),rgba(12,12,10,0.62))]" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/70">{localize(church.locationName, locale)}</p>
                  <h2 className="mt-1 font-serif text-2xl leading-tight">{localize(church.name, locale)}</h2>
                </div>
              </div>

              <div className="space-y-3 p-4 md:p-5">
                <div className="flex items-center justify-between gap-3 text-sm text-soft">
                  <span>{localize(church.leader, locale)}</span>
                  <span>{distance !== null ? `${distance.toFixed(1)} km` : t({ am: "አካባቢ አልተወሰነም", en: "Location not set" })}</span>
                </div>
                <p className="line-clamp-3 text-sm leading-7 text-soft">{localize(church.statementOfFaith, locale)}</p>
                <div className="flex flex-wrap gap-2 text-xs text-soft">
                  {church.weeklyPrograms.slice(0, 2).map((program) => (
                    <span key={`${church.id}-${program.day.en}`} className="rounded-full border border-black/10 bg-white/40 px-3 py-1">
                      {localize(program.day, locale)} {program.time}
                    </span>
                  ))}
                </div>
                  <div className="space-y-2">
                    {church.events.slice(0, 1).map((event) => (
                      <div key={`${church.id}-${event.title.en}`} className="rounded-2xl bg-[color:var(--surface)]/60 p-3 text-sm">
                        <p className="font-medium">{localize(event.title, locale)}</p>
                        <p className="text-soft">{localize(event.schedule, locale)}</p>
                      </div>
                    ))}
                  </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="surface-card rounded-[2rem] p-6 text-soft">
          {t({ am: "የተያያዘ ቤተክርስቲያን አልተገኘም።", en: "No matching church found." })}
        </div>
      )}
    </section>
  );
}