export type Section = {
  id: string;
  index: string;
  title: string;
  eyebrow: string;
  body: string;
  image: string;
  alt: string;
};

export const sections: Section[] = [
  {
    id: "massvorhaenge",
    index: "01",
    title: "Maßvorhänge",
    eyebrow: "Genäht nach Aufmaß",
    body: "Aufmaß bei Ihnen zu Hause, Stoffauswahl im eigenen Licht. Wir nähen Vorhänge, die auf Fensterhöhe, Raumklima und Lichteinfall abgestimmt sind – von der leichten Store bis zum schweren Blickdichten. Faltenband, Ösen oder Wellenfalte: Der Fall entscheidet, nicht der Katalog.",
    image: "/images/massvorhaenge.jpg",
    alt: "Bodenlanger Vorhang in weichem Fall vor einem hohen Fenster",
  },
  {
    id: "plissees",
    index: "02",
    title: "Plissees",
    eyebrow: "Für schräge und schwierige Fenster",
    body: "Dachschräge, Trapez, Rundbogen – Plissees sitzen dort, wo klassische Vorhänge an ihre Grenzen kommen. Sie lassen sich von oben und von unten verschieben, sodass Licht hereinkommt und Blicke draußen bleiben. Wabenplissees dämmen zusätzlich im Winter.",
    image: "/images/plissees.jpg",
    alt: "Plissee an einem Dachfenster, halb geöffnet",
  },
  {
    id: "rollos",
    index: "03",
    title: "Rollos",
    eyebrow: "Reduziert, direkt am Glas",
    body: "Klare Linie, wenig Aufbau. Rollos sitzen dicht am Fenster und verschwinden fast, wenn sie offen sind – als Verdunkelung im Schlafzimmer oder als lichtdurchlässiger Sonnenschutz im Arbeitszimmer. Mit Kassette oder offener Welle, mit Kette oder Motor.",
    image: "/images/rollos.jpg",
    alt: "Schlichtes Rollo, zur Hälfte heruntergelassen",
  },
  {
    id: "jalousien",
    index: "04",
    title: "Jalousien",
    eyebrow: "Licht stufenlos dosieren",
    body: "Der Klassiker für Räume, in denen sich das Licht über den Tag verändert. Über die Lamellenstellung regeln Sie die Helligkeit stufenlos, ohne den Blick nach draußen aufzugeben. In Aluminium für Bad und Küche, in Holz für Wohnräume.",
    image: "/images/jalousien.jpg",
    alt: "Holzjalousie mit schräg gestellten Lamellen",
  },
];
