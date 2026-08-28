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
      className={`snap-panel relative scroll-mt-20 lg:h-svh ${
        inView ? "is-active" : ""
      }`}
    >
      {/* Stufe 1, nur am grossen Bildschirm: Kapitelnummer und Titel als
          Karte, die sich selbst wieder ausblendet und Stufe 2 freigibt.
          Fuer Screenreader unsichtbar, weil der Titel unten als
          Ueberschrift noch einmal auftaucht. */}
      <div
        aria-hidden="true"
        className="stage-intro pointer-events-none absolute inset-x-0 top-0 h-svh items-center justify-center bg-linen px-6"
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
      <div className="stage-content mx-auto flex h-full max-w-6xl flex-col justify-center pb-24 lg:flex-row lg:items-center lg:gap-20 lg:px-10 lg:pb-0">
        {/* Bild – am Handy randlos, mit Titel darauf */}
        <div className={`relative w-full lg:w-[55%] ${flipped ? "lg:order-2" : ""}`}>
          <div
            className={`curtain relative h-[75svh] w-full overflow-hidden lg:h-[66svh] ${
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

          {/* Titel auf dem Bild. Der Verlauf haelt die Schrift lesbar,
              egal wie hell das Bild an der Stelle ist. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent px-6 pt-28 pb-10 lg:hidden">
            <span
              className={`reveal reveal-delay-2 ${state} font-body block text-xs tracking-[0.3em] text-brass`}
            >
              {section.index}
            </span>
            <h2
              className={`reveal reveal-delay-3 ${state} font-display mt-3 text-[clamp(2.2rem,11vw,3.4rem)] leading-[1.02] font-light text-linen`}
            >
              {section.title}
            </h2>
          </div>
        </div>

        {/* Text */}
        <div
          className={`px-6 pt-10 md:px-10 lg:w-[45%] lg:px-0 lg:pt-0 ${
            flipped ? "lg:order-1" : ""
          }`}
        >
          <div className={`reveal ${state} flex items-center gap-4`}>
            <span className="font-body hidden text-xs tracking-[0.3em] text-brass lg:inline">
              {section.index}
            </span>
            <span className="hidden h-px w-10 bg-sand lg:block" />
            <span className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              {section.eyebrow}
            </span>
          </div>

          {/* Am Handy steht der Titel schon auf dem Bild. */}
          <h2
            className={`reveal reveal-delay-1 ${state} font-display mt-6 hidden text-[clamp(2.2rem,6vw,4rem)] leading-[1.02] font-light lg:block`}
          >
            {section.title}
          </h2>

          <p
            className={`reveal reveal-delay-2 ${state} mt-6 max-w-prose text-[0.98rem] leading-[1.85] text-ash`}
          >
            {section.body}
          </p>

          <a
            href="#kontakt"
            className={`reveal reveal-delay-3 ${state} group mt-9 inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-ink`}
          >
            Beratung anfragen
            <span className="h-px w-8 bg-ink transition-all duration-500 group-hover:w-14" />
          </a>
        </div>
      </div>
    </section>
  );
}
