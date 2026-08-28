import type { Metadata } from "next";
import { Bodoni_Moda, Karla } from "next/font/google";
import HydrationFlag from "@/components/HydrationFlag";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
});

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "Wohnatelier Adakli – Raumausstattung nach Maß",
  description:
    "Maßvorhänge, Plissees, Rollos und Jalousien nach Aufmaß. Beratung und Montage vom Raumausstatter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${bodoni.variable} ${karla.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Scroll-Animationen sind Progressive Enhancement. Die `js`-Klasse
            versteckt den Startzustand ohne Aufblitzen. Hydratisiert React
            nicht (Bundle blockiert, JS-Fehler), wird die Klasse wieder
            entfernt – sonst bliebe die Seite dauerhaft leer. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js");setTimeout(function(){if(!document.documentElement.hasAttribute("data-hydrated"))document.documentElement.classList.remove("js")},5000)`,
          }}
        />
      </head>
      <body>
        <HydrationFlag />
        {children}
      </body>
    </html>
  );
}
