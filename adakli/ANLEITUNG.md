# Wohnatelier Adakli – neue Landingpage

Alle Dateien liegen so, wie sie im Projekt liegen müssen. Wenn dein Projekt einen
`src/`-Ordner hat, kommen `app/`, `components/` und `data/` dort hinein – der
Import-Alias `@/` funktioniert in beiden Fällen.

---

## 1. Branch anlegen (in Cursor)

Terminal in Cursor öffnen (`Strg`/`Cmd` + `ö` oder Terminal → New Terminal):

```bash
git checkout -b redesign
```

Ab jetzt bist du auf `redesign`. Alles, was du hier änderst, lässt `main` – und
damit wohnatelier-adakli.de – unberührt.

## 2. Tailwind installieren

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Datei `postcss.config.mjs` im Projekt-Hauptordner anlegen (oder ersetzen):

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

> Falls `npm list tailwindcss` bei dir Version 3.x zeigt: dann brauchst du
> zusätzlich eine `tailwind.config.ts` und die Farben müssen dort statt in
> `globals.css` stehen. Sag mir Bescheid, dann liefere ich die Variante.

## 3. Dateien einsortieren

| Datei                            | Wohin                              |
| -------------------------------- | ---------------------------------- |
| `app/layout.tsx`                 | ersetzt deine bestehende Datei      |
| `app/page.tsx`                   | ersetzt deine bestehende Datei      |
| `app/globals.css`                | ersetzt deine bestehende Datei      |
| `components/*.tsx`, `useInView.ts` | neuer Ordner `components/`        |
| `data/sections.ts`               | neuer Ordner `data/`               |
| `public/images/*.jpg`            | neuer Ordner `public/images/`      |

Die fünf Bilder sind graue Stoff-Platzhalter. Später einfach die JPGs mit
gleichem Dateinamen überschreiben – im Code musst du nichts ändern.

## 4. Lokal ansehen

```bash
npm run dev
```

Dann http://localhost:3000 öffnen.

## 5. Auf Vercel testen

```bash
git add .
git commit -m "Neue Landingpage"
git push -u origin redesign
```

Vercel baut daraus automatisch ein Preview-Deployment mit eigener URL. Du
findest sie im Vercel-Dashboard unter Deployments (oder als Kommentar im
GitHub-Commit). Die Live-Domain bleibt auf `main` und ändert sich nicht.

## 6. Livegang – erst wenn alles passt

```bash
git checkout main
git merge redesign
git push
```

---

## Was noch fehlt

- Echte Fotos (Hero + 4 Sektionen)
- Kontaktdaten im Footer (`components/Footer.tsx`, Platzhalter markiert)
- Impressum und Datenschutz unter `/impressum` und `/datenschutz` –
  rechtlich Pflicht, bevor die Seite gewerblich online geht
- Vercel Pro, da Hobby keine kommerzielle Nutzung erlaubt

## Struktur zum Erweitern

Neue Punkte (z. B. Insektenschutz, Markisen) fügst du in `data/sections.ts`
hinzu – Nummerierung, Layoutwechsel und Seitennavigation ziehen automatisch mit.
