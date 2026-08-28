import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Wohnatelier Adakli",
  description: "Informationen zur Verarbeitung personenbezogener Daten.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header solid />

      <main className="mx-auto max-w-2xl px-6 pt-32 pb-24 md:px-10 md:pt-44 md:pb-32">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-stone">
          Rechtliches
        </p>

        <h1 className="font-display mt-6 text-[clamp(2.2rem,6vw,3.6rem)] leading-[1.02] font-light">
          Datenschutz
        </h1>

        <div className="mt-14 space-y-12 text-[0.95rem] leading-[1.8] text-ash">
          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Verantwortlicher
            </h2>
            <p className="mt-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-4">
              Wohnatelier Adakli
              <br />
              [Inhaberin oder Inhaber: Vor- und Nachname]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ] [Ort]
              <br />
              Telefon: [Telefonnummer]
              <br />
              E-Mail: [E-Mail-Adresse]
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Keine Cookies, keine Analyse
            </h2>
            <p className="mt-4">
              Diese Website setzt keine Cookies. Es findet keine Analyse des
              Nutzungsverhaltens statt, es sind keine Zählpixel, kein
              Tracking und keine Werbenetzwerke eingebunden. Ein
              Cookie-Hinweis ist deshalb nicht erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Schriftarten
            </h2>
            <p className="mt-4">
              Die verwendeten Schriftarten werden beim Erstellen der Website
              heruntergeladen und von unserem eigenen Server ausgeliefert. Beim
              Aufruf der Seite baut Ihr Browser dadurch keine Verbindung zu
              Google-Servern auf, es werden keine Daten an Google übertragen.
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Verweis auf Instagram
            </h2>
            <p className="mt-4">
              Im Kopfbereich befindet sich ein Verweis auf unser
              Instagram-Profil. Es handelt sich um einen einfachen Link, nicht
              um eine eingebettete Ansicht. Beim Aufruf unserer Website werden
              deshalb keine Daten an Instagram übertragen. Erst wenn Sie den
              Link anklicken, verlassen Sie unsere Website und es gelten die
              Datenschutzbestimmungen der Meta Platforms Ireland Limited.
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Hosting und Server-Logfiles
            </h2>
            <p className="mt-4">
              Diese Website wird bei [Name und Anschrift des Hosting-Anbieters]
              gehostet. Der Anbieter erhebt in sogenannten Server-Logfiles
              automatisch Daten, die Ihr Browser übermittelt:
            </p>
            <p className="mt-4">
              Browsertyp und -version, verwendetes Betriebssystem,
              Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der
              Serveranfrage und IP-Adresse.
            </p>
            <p className="mt-4">
              Diese Daten werden nicht mit anderen Datenquellen
              zusammengeführt. Die Verarbeitung erfolgt auf Grundlage von Art.
              6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an
              der technisch fehlerfreien Darstellung und der Sicherheit unserer
              Website. Die Logfiles werden nach [Anzahl] Tagen gelöscht.
            </p>
            <p className="mt-4">
              Mit dem Anbieter besteht ein Vertrag über Auftragsverarbeitung
              nach Art. 28 DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Kontaktformular
            </h2>
            <p className="mt-4">
              Wenn Sie uns das Kontaktformular senden, verarbeiten wir die
              dort eingetragenen Angaben: Vorname, Nachname, E-Mail-Adresse,
              auf Wunsch Ihre Telefonnummer sowie Ihr Anliegen. Die Angaben
              werden nicht in einer Datenbank gespeichert, sondern
              ausschließlich als E-Mail an unser Postfach übertragen und dort
              wie jede andere Anfrage bearbeitet.
            </p>
            <p className="mt-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre
              Anfrage der Vorbereitung oder Durchführung eines Vertrags dient,
              sonst Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten
              Interesses an der Beantwortung von Anfragen. Die Angabe von
              Telefonnummer ist freiwillig, die übrigen Felder benötigen wir,
              um Ihnen antworten zu können.
            </p>
            <p className="mt-4">
              Der Versand erfolgt über den Mailserver von [Name und Anschrift
              des E-Mail-Anbieters]. Ein Weiterleiten an sonstige Dritte
              findet nicht statt.
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Kontaktaufnahme
            </h2>
            <p className="mt-4">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten
              wir die von Ihnen mitgeteilten Angaben, um Ihre Anfrage zu
              beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO,
              soweit die Anfrage der Vorbereitung oder Durchführung eines
              Vertrags dient, sonst Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres
              berechtigten Interesses an der Beantwortung von Anfragen.
            </p>
            <p className="mt-4">
              Die Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern oder der Zweck entfällt. Zwingende gesetzliche
              Aufbewahrungsfristen, insbesondere handels- und steuerrechtliche,
              bleiben unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Verschlüsselung
            </h2>
            <p className="mt-4">
              Diese Website nutzt zum Schutz der Übertragung eine
              SSL- beziehungsweise TLS-Verschlüsselung. Sie erkennen eine
              verschlüsselte Verbindung daran, dass die Adresszeile Ihres
              Browsers mit „https://" beginnt.
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Ihre Rechte
            </h2>
            <p className="mt-4">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger sowie den Zweck der Verarbeitung (Art. 15 DSGVO).
              Darüber hinaus haben Sie ein Recht auf Berichtigung (Art. 16),
              Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
              Datenübertragbarkeit (Art. 20) und Widerspruch gegen die
              Verarbeitung (Art. 21 DSGVO).
            </p>
            <p className="mt-4">
              Wenden Sie sich dafür an die oben genannte Adresse.
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p className="mt-4">
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten
              gegen die DSGVO verstößt, haben Sie das Recht, sich bei einer
              Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig ist in
              der Regel die Behörde Ihres Wohnsitzes oder die des Sitzes
              unseres Unternehmens: [zuständige Landesdatenschutzbehörde].
            </p>
          </section>

          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-stone">
              Stand
            </h2>
            <p className="mt-4">[Monat Jahr]</p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
