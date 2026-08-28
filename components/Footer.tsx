export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="snap-panel flex min-h-svh scroll-mt-20 items-center bg-ink text-linen"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-28">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-stone">
          Kontakt
        </p>

        <h2 className="font-display mt-6 text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] font-light">
          Wir kommen zum Aufmaß
          <span className="block italic">zu Ihnen.</span>
        </h2>

        {/* Am Handy zweispaltig, damit der Footer in eine Bildschirmhoehe
            passt und als Snap-Abschnitt vollstaendig sichtbar bleibt. */}
        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-ash pt-8 md:mt-14 md:gap-10 md:pt-10 lg:grid-cols-3">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Adresse
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Wohnatelier Adakli
              <br />
              Straße und Hausnummer
              <br />
              PLZ Ort
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Erreichbarkeit
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              <a href="tel:+49000000000" className="hover:text-sand">
                Telefonnummer
              </a>
              <br />
              <a href="mailto:info@adakli.de" className="hover:text-sand">
                info@adakli.de
              </a>
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Öffnungszeiten
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Mo – Fr, Uhrzeit
              <br />
              Sa nach Vereinbarung
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ash pt-6 text-[0.7rem] tracking-[0.16em] text-stone md:mt-16 md:pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Wohnatelier Adakli</p>
          <p className="flex gap-6">
            <a href="/impressum" className="hover:text-linen">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-linen">
              Datenschutz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
