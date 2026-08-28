import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – Wohnatelier Adakli",
  description: "Anbieterkennzeichnung nach § 5 DDG.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Header solid />

      <main className="mx-auto max-w-2xl px-6 pt-32 pb-24 md:px-10 md:pt-44 md:pb-32">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-stone">
          Rechtliches
        </p>

        <h1 className="font-display mt-6 text-[clamp(2.2rem,6vw,3.6rem)] leading-[1.02] font-light">
          Impressum
        </h1>

        <div className="mt-14 space-y-12 text-[0.95rem] leading-[1.8] text-ash">
          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-4">
              Wohnatelier Adakli
              <br />
              [Inhaberin oder Inhaber: Vor- und Nachname]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ] [Ort]
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Kontakt
            </h2>
            <p className="mt-4">
              Telefon: [Telefonnummer]
              <br />
              E-Mail: [E-Mail-Adresse]
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="mt-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz: [USt-IdNr.]
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Berufsrechtliche Angaben
            </h2>
            <p className="mt-4">
              Berufsbezeichnung: Raumausstattermeister
              <br />
              Verliehen in: Deutschland
              <br />
              Zuständige Kammer: Handwerkskammer [Ort]
              <br />
              Eintragung: Handwerksrolle der Handwerkskammer [Ort],
              Betriebsnummer [Nummer]
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Redaktionell verantwortlich
            </h2>
            <p className="mt-4">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
              <br />
              [Vor- und Nachname], Anschrift wie oben
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Verbraucherstreitbeilegung
            </h2>
            <p className="mt-4">
              Wir sind nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Bildnachweis
            </h2>
            <p className="mt-4">
              Alle Abbildungen auf dieser Website: [Fotografin oder Fotograf
              beziehungsweise Bildquelle]
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
