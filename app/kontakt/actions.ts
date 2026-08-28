"use server";

import nodemailer from "nodemailer";

export type KontaktState = {
  ok: boolean;
  message: string;
  fieldErrors: Record<string, string>;
  /** Eingaben zurueckgeben, damit bei einem Fehler nichts neu getippt werden muss. */
  values: Record<string, string>;
};

const EMPFAENGER = process.env.KONTAKT_EMPFAENGER ?? "wohnatelier@adakli.de";

function text(formData: FormData, name: string) {
  const v = formData.get(name);
  return typeof v === "string" ? v.trim() : "";
}

export async function sendeAnfrage(
  _prev: KontaktState,
  formData: FormData,
): Promise<KontaktState> {
  const values = {
    vorname: text(formData, "vorname"),
    nachname: text(formData, "nachname"),
    telefon: text(formData, "telefon"),
    email: text(formData, "email"),
    anliegen: text(formData, "anliegen"),
  };

  // Honigtopf: Ein fuer Menschen unsichtbares Feld. Bots fuellen es aus,
  // echte Besucher nie. Wir tun so, als waere alles gut gegangen, damit
  // der Bot es nicht erneut versucht.
  if (text(formData, "website")) {
    return { ok: true, message: "Danke, Ihre Anfrage ist unterwegs.", fieldErrors: {}, values: {} };
  }

  const fieldErrors: Record<string, string> = {};
  if (!values.vorname) fieldErrors.vorname = "Bitte tragen Sie Ihren Vornamen ein.";
  if (!values.nachname) fieldErrors.nachname = "Bitte tragen Sie Ihren Nachnamen ein.";
  if (!values.email) {
    fieldErrors.email = "Bitte tragen Sie Ihre E-Mail-Adresse ein.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    fieldErrors.email = "Diese E-Mail-Adresse sieht nicht richtig aus.";
  }
  if (!values.anliegen) {
    fieldErrors.anliegen = "Bitte beschreiben Sie kurz Ihr Anliegen.";
  } else if (values.anliegen.length > 5000) {
    fieldErrors.anliegen = "Bitte fassen Sie sich etwas kürzer.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, message: "", fieldErrors, values };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    console.error(
      "Kontaktformular: SMTP_HOST, SMTP_USER oder SMTP_PASSWORD fehlt in den Umgebungsvariablen.",
    );
    return {
      ok: false,
      message:
        "Der Versand ist gerade nicht möglich. Bitte rufen Sie uns an oder schreiben Sie direkt an " +
        EMPFAENGER + ".",
      fieldErrors: {},
      values,
    };
  }

  const port = Number(SMTP_PORT ?? 587);

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      // Port 465 spricht von Anfang an TLS, 587 steigt per STARTTLS um.
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    await transporter.sendMail({
      // Absender muss das eigene Postfach sein, sonst weisen die meisten
      // Server die Mail als Faelschung ab. Die Adresse des Besuchers
      // kommt als Antwortadresse dazu.
      from: `"Kontaktformular" <${process.env.SMTP_FROM ?? SMTP_USER}>`,
      to: EMPFAENGER,
      replyTo: `"${values.vorname} ${values.nachname}" <${values.email}>`,
      subject: `Anfrage über die Website – ${values.vorname} ${values.nachname}`,
      text: [
        `Name:     ${values.vorname} ${values.nachname}`,
        `E-Mail:   ${values.email}`,
        `Telefon:  ${values.telefon || "– nicht angegeben –"}`,
        "",
        "Anliegen:",
        values.anliegen,
      ].join("\n"),
    });

    return {
      ok: true,
      message: "Danke, Ihre Anfrage ist angekommen. Wir melden uns zeitnah bei Ihnen.",
      fieldErrors: {},
      values: {},
    };
  } catch (err) {
    // Die genaue Ursache bleibt im Serverlog, nach aussen nur ein Hinweis
    // mit einem Weg, der auch ohne Formular funktioniert.
    console.error("Kontaktformular: Versand fehlgeschlagen.", err);
    return {
      ok: false,
      message:
        "Die Anfrage konnte gerade nicht versendet werden. Bitte versuchen Sie es später noch einmal oder schreiben Sie direkt an " +
        EMPFAENGER + ".",
      fieldErrors: {},
      values,
    };
  }
}
