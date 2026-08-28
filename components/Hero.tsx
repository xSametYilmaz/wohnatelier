import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="snap-panel relative h-svh min-h-[600px] w-full overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt="Raum mit bodenlangen Vorhängen im Nachmittagslicht"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay für Lesbarkeit */}
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/60" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-linen">
        <h1
          className="rise font-display mt-6 text-[clamp(2.6rem,9vw,6.5rem)] leading-[0.95] font-light"
          style={{ animationDelay: "0.35s" }}
        >
          Wohnatelier
          <span className="block italic">Adakli</span>
        </h1>

        <div
          className="rise mt-8 h-px w-16 bg-sand/70"
          style={{ animationDelay: "0.6s" }}
        />

        {/* Bewusst ohne `uppercase`: text-transform macht aus "Maße" ein
            "MASSE", der Satz laese sich dann als "in voller Masse" und das
            Wortspiel waere hin. */}
        <p
          className="rise mt-8 max-w-md text-[0.95rem] leading-relaxed tracking-[0.1em] md:text-lg"
          style={{ animationDelay: "0.75s" }}
        >
          Meisterhandwerk in vollem Maße
        </p>
      </div>

      <a
        href="#massvorhaenge"
        aria-label="Zum ersten Abschnitt scrollen"
        className="rise absolute bottom-10 left-1/2 -translate-x-1/2 text-linen"
        style={{ animationDelay: "1.1s" }}
      >
        <span className="nudge block">
          <svg width="22" height="30" viewBox="0 0 22 30" fill="none" aria-hidden="true">
            <path
              d="M11 0v27M4 20l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
            />
          </svg>
        </span>
      </a>
    </section>
  );
}
