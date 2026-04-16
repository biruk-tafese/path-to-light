"use client";

import { useMemo, useState } from "react";
import { JourneyIntro } from "@/components/journey/JourneyIntro";
import { JourneyAccordionItem } from "@/components/journey/JourneyScene";
import { journeyIntro, journeyScenes } from "@/data/journey";

export default function JourneyPage() {
  const firstSceneId = useMemo(() => journeyScenes[0]?.id ?? null, []);
  const [openSceneId, setOpenSceneId] = useState<string | null>(firstSceneId);

  return (
    <div className="min-h-screen rounded-[2rem] pb-12">
      <JourneyIntro
        question={journeyIntro.question}
        subtitle={journeyIntro.subtitle}
      />

      <section className="mx-auto mt-4 flex w-full max-w-4xl flex-col gap-4 px-1 md:gap-5 md:px-3">
        {journeyScenes.map((scene) => {
          const isExpanded = openSceneId === scene.id;

          return (
            <JourneyAccordionItem
              key={scene.id}
              scene={scene}
              expanded={isExpanded}
              onToggle={() => setOpenSceneId((prev) => (prev === scene.id ? null : scene.id))}
            />
          );
        })}
      </section>
    </div>
  );
}
