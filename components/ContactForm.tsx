"use client";

import { useActionState } from "react";
import { sendeAnfrage, type KontaktState } from "@/app/kontakt/actions";

// Gehoert hierher, nicht in actions.ts: Eine "use server"-Datei darf nur
// async Funktionen exportieren, ein Objekt kaeme dort nicht heil an.
const initialKontaktState: KontaktState = {
  ok: false,
  message: "",
  fieldErrors: {},
  values: {},
};

const feld =
  "mt-2 w-full border-b border-sand bg-transparent pb-2 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-stone/70 focus:border-brass";
const label = "text-[0.65rem] uppercase tracking-[0.24em] text-stone";

function Fehler({ text }: { text?: string }) {
  if (!text) return null;
  return <p className="mt-2 text-[0.78rem] text-brass">{text}</p>;
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<KontaktState, FormData>(
    sendeAnfrage,
    initialKontaktState,
  );

  if (state.ok) {
    return (
      <div className="mt-14 border-t border-sand pt-10">
        <p className="font-display text-[clamp(1.5rem,4vw,2.2rem)] leading-[1.2] font-light">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="mt-14 border-t border-sand pt-10">
      {/* Honigtopf gegen Bots: fuer Menschen unsichtbar, deshalb auch aus
          dem Tabulator-Ablauf und der Vorlesereihenfolge genommen. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Bitte nicht ausfüllen</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="vorname">
            Vorname
          </label>
          <input
            id="vorname"
            name="vorname"
            type="text"
            required
            autoComplete="given-name"
            defaultValue={state.values.vorname}
            aria-invalid={Boolean(state.fieldErrors.vorname)}
            className={feld}
          />
          <Fehler text={state.fieldErrors.vorname} />
        </div>

        <div>
          <label className={label} htmlFor="nachname">
            Nachname
          </label>
          <input
            id="nachname"
            name="nachname"
            type="text"
            required
            autoComplete="family-name"
            defaultValue={state.values.nachname}
            aria-invalid={Boolean(state.fieldErrors.nachname)}
            className={feld}
          />
          <Fehler text={state.fieldErrors.nachname} />
        </div>

        <div>
          <label className={label} htmlFor="telefon">
            Telefon <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            defaultValue={state.values.telefon}
            className={feld}
          />
        </div>

        <div>
          <label className={label} htmlFor="email">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={state.values.email}
            aria-invalid={Boolean(state.fieldErrors.email)}
            className={feld}
          />
          <Fehler text={state.fieldErrors.email} />
        </div>
      </div>

      <div className="mt-8">
        <label className={label} htmlFor="anliegen">
          Ihr Anliegen
        </label>
        <textarea
          id="anliegen"
          name="anliegen"
          rows={5}
          required
          defaultValue={state.values.anliegen}
          aria-invalid={Boolean(state.fieldErrors.anliegen)}
          className={`${feld} resize-y`}
        />
        <Fehler text={state.fieldErrors.anliegen} />
      </div>

      {state.message ? (
        <p role="alert" className="mt-8 text-[0.9rem] leading-relaxed text-brass">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="group mt-10 inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-ink disabled:opacity-50"
      >
        {pending ? "Wird gesendet" : "Anfrage senden"}
        <span className="h-px w-8 bg-ink transition-all duration-500 group-hover:w-14" />
      </button>

      <p className="mt-8 text-[0.78rem] leading-relaxed text-stone">
        Ihre Angaben nutzen wir ausschließlich, um Ihre Anfrage zu
        beantworten. Näheres in unserer{" "}
        <a href="/datenschutz" className="underline underline-offset-4 hover:text-ink">
          Datenschutzerklärung
        </a>
        .
      </p>
    </form>
  );
}
