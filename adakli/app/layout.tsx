import type { Metadata } from "next";
import { Bodoni_Moda, Karla } from "next/font/google";
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
    <html lang="de" className={`${bodoni.variable} ${karla.variable}`}>
      <body>{children}</body>
    </html>
  );
}
