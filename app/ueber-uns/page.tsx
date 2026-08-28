import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Über uns – Wohnatelier Adakli",
  description:
    "Wer hinter dem Wohnatelier Adakli steht: Raumausstattung nach Maß, Aufmaß vor Ort und persönliche Beratung.",
};

export default function UeberUnsPage() {
  return (
    <>
      <Header solid />

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 md:px-10 md:pt-44 md:pb-32">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-stone">
          Über uns
        </p>

        <h1 className="font-display mt-6 text-[clamp(2.2rem,6vw,4rem)] leading-[1.02] font-light">
          Handwerk mit Blick
          <span className="block italic">für Ihren Raum.</span>
        </h1>

        <div className="mt-12 space-y-7 text-[0.98rem] leading-[1.85] text-ash">
          <p>
            Das Wohnatelier Adakli ist ein Raumausstatter-Betrieb, der
            Vorhänge, Plissees, Rollos und Jalousien nach Maß fertigt. Kein
            Katalogprodukt von der Stange, sondern eine Lösung, die zu Ihrem
            Fenster, Ihrem Licht und Ihrem Alltag passt.
          </p>
          <p>
            Wir kommen zum Aufmaß zu Ihnen nach Hause. Dort sehen wir, wie
            das Licht im Raum steht, wie hoch die Fenster sind und welche
            Stoffe im eigenen Umfeld wirken. Erst danach beraten wir – ehrlich
            und ohne Druck.
          </p>
          <p>
            Genäht und montiert wird von uns selbst. Vom ersten Termin bis zur
            fertig hängenden Dekoration haben Sie einen Ansprechpartner, der
            das Projekt kennt.
          </p>
        </div>

        <div className="mt-16 border-t border-sand pt-10">
          <Link
            href="/#kontakt"
            className="group inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-ink"
          >
            Beratung anfragen
            <span className="h-px w-8 bg-ink transition-all duration-500 group-hover:w-14" />
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
