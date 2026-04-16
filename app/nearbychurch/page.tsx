"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";

type ChurchResult = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  distanceKm: number;
  address: string;
};

type OverpassElement = {
  id: number;
  type: "node" | "way" | "relation";
  lat?: number;
  lon?: number;
  center?: {
    lat: number;
    lon: number;
  };
  tags?: Record<string, string>;
};

const OVERPASS_URL = "https://overpass-api.de/api/interpreter";

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function distanceKm(fromLat: number, fromLon: number, toLat: number, toLon: number) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(toLat - fromLat);
  const dLon = toRadians(toLon - fromLon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(fromLat)) * Math.cos(toRadians(toLat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function churchName(tags?: Record<string, string>) {
  if (!tags) {
    return "Christian Church";
  }
  return tags.name || tags["name:en"] || tags["official_name"] || "Christian Church";
}

function churchAddress(tags?: Record<string, string>) {
  if (!tags) {
    return "Address not provided";
  }

  const parts = [
    tags["addr:city"],
    tags["addr:suburb"],
    tags["addr:street"],
    tags["addr:housenumber"],
  ].filter(Boolean);

  return parts.length ? parts.join(", ") : "Address not provided";
}

export default function NearbyChurchPage() {
  const { t } = useLanguage();
  const [radiusKm, setRadiusKm] = useState(8);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [churches, setChurches] = useState<ChurchResult[]>([]);

  const radiusMeters = useMemo(() => Math.round(radiusKm * 1000), [radiusKm]);

  async function findNearbyChurches() {
    setError(null);
    setIsSearching(true);

    try {
      if (!navigator.geolocation) {
        throw new Error(t({ am: "ይህ አሳሽ የአካባቢ አገልግሎት አይደግፍም።", en: "This browser does not support geolocation." }));
      }

      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 300000,
        });
      });

      const { latitude, longitude } = position.coords;

      const query = `
        [out:json][timeout:30];
        (
          node(around:${radiusMeters},${latitude},${longitude})["amenity"="place_of_worship"]["religion"="christian"];
          way(around:${radiusMeters},${latitude},${longitude})["amenity"="place_of_worship"]["religion"="christian"];
          relation(around:${radiusMeters},${latitude},${longitude})["amenity"="place_of_worship"]["religion"="christian"];
        );
        out center tags;
      `;

      const response = await fetch(OVERPASS_URL, {
        method: "POST",
        body: query,
      });

      if (!response.ok) {
        throw new Error(t({ am: "የቤተ ክርስቲያን መረጃ ማግኘት አልተቻለም።", en: "Unable to fetch church data." }));
      }

      const data = (await response.json()) as { elements: OverpassElement[] };

      const parsed = data.elements
        .map((element) => {
          const lat = element.lat ?? element.center?.lat;
          const lon = element.lon ?? element.center?.lon;
          if (typeof lat !== "number" || typeof lon !== "number") {
            return null;
          }

          const km = distanceKm(latitude, longitude, lat, lon);
          return {
            id: `${element.type}-${element.id}`,
            name: churchName(element.tags),
            lat,
            lon,
            distanceKm: km,
            address: churchAddress(element.tags),
          } satisfies ChurchResult;
        })
        .filter((item): item is ChurchResult => item !== null)
        .sort((a, b) => a.distanceKm - b.distanceKm)
        .slice(0, 30);

      setChurches(parsed);
    } catch (caughtError) {
      setChurches([]);
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : t({ am: "ያልታወቀ ስህተት ተከስቷል።", en: "An unknown error occurred." }),
      );
    } finally {
      setIsSearching(false);
    }
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-serif text-4xl md:text-5xl">{t({ am: "ቅርብ ያሉ ቤተ ክርስቲያናት", en: "Nearby Church Finder" })}</h1>
        <p className="text-soft">
          {t({
            am: "ቅርብ ያሉ ክርስቲያናዊ ቤተ ክርስቲያናትን ለማግኘት የአካባቢ ፍቃድ ይስጡ።",
            en: "Allow location access to discover nearby Christian churches.",
          })}
        </p>
      </div>

      <div className="surface-card rounded-[2rem] p-5 md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <label className="flex max-w-sm flex-col gap-2 text-sm text-soft">
            <span>{t({ am: "የፍለጋ ርቀት", en: "Search Radius" })}: {radiusKm} km</span>
            <input
              type="range"
              min={2}
              max={40}
              step={1}
              value={radiusKm}
              onChange={(event) => setRadiusKm(Number(event.target.value))}
            />
          </label>

          <button
            type="button"
            onClick={() => void findNearbyChurches()}
            disabled={isSearching}
            className="inline-flex items-center justify-center rounded-2xl bg-[color:var(--ink)] px-5 py-3 text-sm font-medium text-[color:var(--bg)] disabled:opacity-65"
          >
            {isSearching
              ? t({ am: "በመፈለግ ላይ...", en: "Searching..." })
              : t({ am: "ቅርብ ያሉ ቤተ ክርስቲያናትን ፈልግ", en: "Find Nearby Churches" })}
          </button>
        </div>

        {error ? (
          <p className="mt-4 rounded-xl border border-red-400/35 bg-red-100/45 px-4 py-3 text-sm text-red-800">
            {error}
          </p>
        ) : null}
      </div>

      <div className="space-y-4">
        {churches.length ? (
          churches.map((church) => (
            <article key={church.id} className="surface-card rounded-[2rem] p-5 md:p-6">
              <h2 className="font-serif text-2xl">{church.name}</h2>
              <p className="mt-1 text-soft">{church.address}</p>
              <p className="mt-2 text-sm text-soft">
                {t({ am: "ርቀት", en: "Distance" })}: {church.distanceKm.toFixed(2)} km
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${church.lat},${church.lon}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-black/10 bg-white/40 px-4 py-2 text-sm text-soft"
                >
                  {t({ am: "በካርታ ላይ ክፈት", en: "Open in Maps" })}
                </a>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${church.lat}&mlon=${church.lon}#map=17/${church.lat}/${church.lon}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-black/10 bg-white/40 px-4 py-2 text-sm text-soft"
                >
                  OpenStreetMap
                </a>
              </div>
            </article>
          ))
        ) : (
          <p className="surface-card rounded-[2rem] p-5 text-soft md:p-6">
            {t({
              am: "ፍለጋ ለመጀመር የአካባቢ ፍቃድ ያግኙ እና ከላይ ያለውን አዝራር ይጫኑ።",
              en: "Grant location access and press the button above to start finding nearby churches.",
            })}
          </p>
        )}
      </div>
    </section>
  );
}