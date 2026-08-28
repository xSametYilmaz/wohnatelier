import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – Wohnatelier Adakli",
  description:
    "Anfrage für Maßvorhänge, Plissees, Rollos und Jalousien. Wir kommen zum Aufmaß zu Ihnen.",
};

export default function KontaktPage() {
  return (
    <>
      <Header solid />

      <main className="mx-auto max-w-2xl px-6 pt-32 pb-24 md:px-10 md:pt-44 md:pb-32">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-stone">
          Kontakt
        </p>

        <h1 className="font-display mt-6 text-[clamp(2.2rem,6vw,3.6rem)] leading-[1.05] font-light">
          Geht nicht? Gibt&rsquo;s nicht!
          <span className="mt-2 block italic">
            Wir freuen uns auf Ihre Anfrage.
          </span>
        </h1>

        <ContactForm />

        <div className="mt-16 border-t border-sand pt-8">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
            Geschäftsführer
          </p>
          <p className="mt-4 flex flex-col gap-2 text-[0.95rem] text-ash sm:flex-row sm:items-center sm:gap-4">
            <span>Cem Adakli</span>
            <span aria-hidden="true" className="hidden text-sand sm:inline">
              |
            </span>
            <a href="tel:+491746012271" className="hover:text-ink">
              +49 174 6012271
            </a>
            <span aria-hidden="true" className="hidden text-sand sm:inline">
              |
            </span>
            <a href="mailto:wohnatelier@adakli.de" className="hover:text-ink">
              wohnatelier@adakli.de
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
