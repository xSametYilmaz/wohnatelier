"use client";

import Image from "next/image";
import type { Section } from "@/data/sections";
import { useInView } from "./useInView";

type Props = {
  section: Section;
  flipped: boolean;
};

export default function ProductSection({ section, flipped }: Props) {
  const { ref, inView } = useInView<HTMLElement>(0.2);
  const state = inView ? "is-visible" : "";

  return (
    <section
      id={section.id}
      ref={ref}
      className={`snap-panel relative h-svh min-h-[600px] scroll-mt-20 ${
        inView ? "is-active" : ""
      }`}
    >
      {/* Stufe 1: Kapitelnummer und Titel. Blendet sich von selbst wieder
          aus und gibt Stufe 2 frei. z-10, damit die Karte ueber Bild und
          Text liegt. Fuer Screenreader unsichtbar, weil der Titel unten
          als Ueberschrift noch einmal auftaucht. */}
      <div
        aria-hidden="true"
        className="stage-intro pointer-events-none absolute inset-0 z-10 items-center justify-center bg-linen px-6"
      >
        <div className="flex items-center gap-5 md:gap-8">
          <span className="font-body text-xs tracking-[0.3em] text-brass md:text-sm">
            {section.index}
          </span>
          <span className="h-px w-10 bg-sand md:w-16" />
          <span className="font-display text-[clamp(2rem,7vw,5rem)] leading-none font-light">
            {section.title}
          </span>
        </div>
      </div>

      {/* Stufe 2: Bild und Text */}
      <div className="stage-content mx-auto flex h-full max-w-6xl flex-col justify-center lg:flex-row lg:items-center lg:gap-20 lg:px-10">
        {/* Bild – am Handy fuellt es den ganzen Abschnitt, am Desktop
            steht es als Spalte neben dem Text. */}
        <div
          className={`absolute inset-0 lg:static lg:w-[55%] ${
            flipped ? "lg:order-2" : ""
          }`}
        >
          <div
            className={`curtain relative h-full w-full overflow-hidden lg:h-[66svh] ${
              inView ? "is-open" : ""
            }`}
          >
            <Image
              src={section.image}
              alt={section.alt}
              fill
              priority={section.index === "01"}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="curtain-inner object-cover"
            />
          </div>
        </div>

        {/* Text – am Handy im Bild auf einem Verlauf, damit der Abschnitt
            in eine Bildschirmhoehe passt und sauber einrasten kann. */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent px-6 pt-32 pb-14 lg:static lg:bg-none lg:p-0 lg:w-[45%] ${
            flipped ? "lg:order-1" : ""
          }`}
        >
          <div className={`reveal ${state} flex items-center gap-4`}>
            <span className="font-body text-xs tracking-[0.3em] text-brass">
              {section.index}
            </span>
            <span className="h-px w-10 bg-sand/60 lg:bg-sand" />
            <span className="text-[0.65rem] uppercase tracking-[0.24em] text-sand lg:text-stone">
              {section.eyebrow}
            </span>
          </div>

          <h2
            className={`reveal reveal-delay-1 ${state} font-display mt-4 text-[clamp(2rem,9vw,4rem)] leading-[1.02] font-light text-linen lg:mt-6 lg:text-ink`}
          >
            {section.title}
          </h2>

          <p
            className={`reveal reveal-delay-2 ${state} mt-4 max-w-prose text-[0.92rem] leading-[1.75] text-linen/85 lg:mt-6 lg:text-[0.98rem] lg:leading-[1.85] lg:text-ash`}
          >
            {section.body}
          </p>

          <a
            href="#kontakt"
            className={`reveal reveal-delay-3 ${state} group mt-7 inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-linen lg:mt-9 lg:text-ink`}
          >
            Beratung anfragen
            <span className="h-px w-8 bg-linen transition-all duration-500 group-hover:w-14 lg:bg-ink" />
          </a>
        </div>
      </div>
    </section>
  );
}
