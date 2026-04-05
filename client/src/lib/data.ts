// ============================================================
// ULI'S WOLLWELT – Produkt- und Kategoriedaten
// Diese Datei kann einfach bearbeitet werden, um Produkte
// hinzuzufügen, zu ändern oder zu entfernen.
// ============================================================

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in Euro
  category: string; // Kategorie-ID
  image?: string; // URL zum Produktbild (optional)
  available: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
  color: string; // Tailwind-Farbklasse für den Hintergrund
  textColor: string;
}

// ============================================================
// KATEGORIEN – können frei umbenannt und angepasst werden
// ============================================================
export const categories: Category[] = [
  {
    id: "baeren",
    name: "Bären & Freunde",
    emoji: "🐻",
    description: "Kuschelige Bären in allen Farben und Größen",
    color: "bg-amber-100",
    textColor: "text-amber-800",
  },
  {
    id: "hasen",
    name: "Hasen & Kaninchen",
    emoji: "🐰",
    description: "Süße Häschen mit langen Ohren",
    color: "bg-pink-100",
    textColor: "text-pink-800",
  },
  {
    id: "katzen",
    name: "Katzen & Kätzchen",
    emoji: "🐱",
    description: "Verspielte Katzen für große und kleine Fans",
    color: "bg-orange-100",
    textColor: "text-orange-800",
  },
  {
    id: "voegel",
    name: "Vögel & Federvieh",
    emoji: "🐦",
    description: "Bunte Vögel – von Eulen bis Papageien",
    color: "bg-sky-100",
    textColor: "text-sky-800",
  },
  {
    id: "meerestiere",
    name: "Meerestiere",
    emoji: "🐙",
    description: "Oktopusse, Fische und mehr aus dem Meer",
    color: "bg-teal-100",
    textColor: "text-teal-800",
  },
  {
    id: "bauernhof",
    name: "Bauernhoftiere",
    emoji: "🐄",
    description: "Kühe, Schafe, Schweine und Co.",
    color: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    id: "pueppchen",
    name: "Püppchen & Figuren",
    emoji: "🧸",
    description: "Kleine Püppchen und fantasievolle Figuren",
    color: "bg-purple-100",
    textColor: "text-purple-800",
  },
  {
    id: "saisonal",
    name: "Saisonal & Festlich",
    emoji: "🎄",
    description: "Weihnachten, Ostern und andere Feste",
    color: "bg-red-100",
    textColor: "text-red-800",
  },
  {
    id: "gestrickt",
    name: "Gestricktes",
    emoji: "🧶",
    description: "Handgestrickte Kleinteile mit Liebe gemacht",
    color: "bg-indigo-100",
    textColor: "text-indigo-800",
  },
  {
    id: "sonstiges",
    name: "Sonstiges & Besonderes",
    emoji: "✨",
    description: "Einzigartige Einzelstücke und Überraschungen",
    color: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
];

// Platzhalter-Bild für Produkte ohne eigenes Bild
export const PLACEHOLDER_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663509974545/cwwhc68h9DwLtFTU2HndRY/product_placeholder-MCgC5sghrF4HL2M4x8Wnfu.webp";

// ============================================================
// BEISPIEL-PRODUKTE – bitte durch echte Produkte ersetzen!
// Einfach neue Objekte nach dem gleichen Schema hinzufügen.
// ============================================================
export const products: Product[] = [
  {
    id: "baer-koralle",
    name: "Kleiner Bär in Koralle",
    description: "Ein herziger kleiner Bär in warmem Korallrot, ca. 15 cm groß. Handgehäkelt mit weicher Baumwollwolle.",
    price: 12.0,
    category: "baeren",
    image: PLACEHOLDER_IMAGE,
    available: true,
    tags: ["Bär", "Koralle", "klein"],
  },
  {
    id: "hase-mint",
    name: "Häschen in Mintgrün",
    description: "Süßes Häschen mit langen Ohren in frischem Mintgrün, ca. 18 cm. Perfekt als Geschenk.",
    price: 14.0,
    category: "hasen",
    image: PLACEHOLDER_IMAGE,
    available: true,
    tags: ["Hase", "Mint", "Geschenk"],
  },
  {
    id: "katze-gelb",
    name: "Kätzchen in Sonnengelb",
    description: "Verspieltes Kätzchen in leuchtendem Gelb, ca. 12 cm. Mit kleinen Schnurrhaaren aus Garn.",
    price: 11.0,
    category: "katzen",
    image: PLACEHOLDER_IMAGE,
    available: true,
    tags: ["Katze", "Gelb"],
  },
  {
    id: "eule-bunt",
    name: "Bunte Eule",
    description: "Eine farbenfrohe Eule mit großen Knopfaugen, ca. 10 cm. Jede Eule ist ein Unikat!",
    price: 10.0,
    category: "voegel",
    image: PLACEHOLDER_IMAGE,
    available: true,
    tags: ["Eule", "Bunt"],
  },
  {
    id: "oktopus-lila",
    name: "Oktopus in Lila",
    description: "Ein fröhlicher Oktopus in zartem Lila mit 8 Tentakeln, ca. 12 cm. Sehr beliebt!",
    price: 13.0,
    category: "meerestiere",
    image: PLACEHOLDER_IMAGE,
    available: true,
    tags: ["Oktopus", "Lila", "Beliebt"],
  },
  {
    id: "schaf-weiss",
    name: "Kleines Schaf",
    description: "Ein flauschiges weißes Schaf mit schwarzen Beinen, ca. 10 cm. Zum Knuddeln!",
    price: 10.0,
    category: "bauernhof",
    image: PLACEHOLDER_IMAGE,
    available: true,
    tags: ["Schaf", "Weiß"],
  },
  {
    id: "pueppchen-rosa",
    name: "Kleines Püppchen",
    description: "Ein niedliches kleines Püppchen in Rosa, ca. 20 cm. Mit Kleidchen und Haaren aus Wolle.",
    price: 18.0,
    category: "pueppchen",
    image: PLACEHOLDER_IMAGE,
    available: true,
    tags: ["Püppchen", "Rosa"],
  },
  {
    id: "weihnachtsmann",
    name: "Kleiner Weihnachtsmann",
    description: "Ein herziger Weihnachtsmann, ca. 15 cm. Perfekt als Weihnachtsdekoration oder Geschenk.",
    price: 12.0,
    category: "saisonal",
    image: PLACEHOLDER_IMAGE,
    available: true,
    tags: ["Weihnachten", "Dekoration"],
  },
  {
    id: "mütze-gestreift",
    name: "Gestrickte Babymütze",
    description: "Eine handgestrickte Babymütze in bunten Streifen. Größe 0-3 Monate. Sehr weich.",
    price: 9.0,
    category: "gestrickt",
    image: PLACEHOLDER_IMAGE,
    available: true,
    tags: ["Mütze", "Baby", "Gestrickt"],
  },
  {
    id: "regenbogen-faultier",
    name: "Regenbogen-Faultier",
    description: "Ein besonderes Faultier in Regenbogenfarben, ca. 18 cm. Ein echtes Unikat!",
    price: 16.0,
    category: "sonstiges",
    image: PLACEHOLDER_IMAGE,
    available: true,
    tags: ["Faultier", "Regenbogen", "Unikat"],
  },
];

// PayPal Konfiguration
export const PAYPAL_EMAIL = "uli.albrecht@p"; // Bitte vollständige E-Mail eintragen

// Shop-Informationen
export const SHOP_INFO = {
  name: "Ulis-Wolle-Welt",
  tagline: "Handgemacht mit Herz & Wolle",
  description:
    "Willkommen bei Ulis-Wolle-Welt! Hier findest du liebevoll handgehäkelte und gestrickte Kleinode – von süßen Tierchen bis hin zu bunten Püppchen. Alles wird mit viel Liebe und Sorgfalt von Hand gefertigt.",
  owner: "Ulrike Albrecht",
  email: "uli.albrecht@p", // Bitte vollständige E-Mail eintragen
  shippingInfo:
    "Versand innerhalb von 1–2 Werktagen nach Zahlungseingang. Versand innerhalb Deutschlands.",
  paypalNote:
    "Bezahlung sicher über PayPal. Nach dem Kauf erhalten Sie eine Bestätigungs-E-Mail.",
};
