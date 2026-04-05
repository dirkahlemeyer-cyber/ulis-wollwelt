# 🧶 Uli's Wollwelt – Vollständige Anleitung

> Alles Wichtige auf einen Blick: Deployment, Produkte bearbeiten, PayPal einrichten und mehr.

---

## 📋 Inhaltsverzeichnis

1. [Schritt 1: Code auf GitHub hochladen](#schritt-1-code-auf-github-hochladen)
2. [Schritt 2: Auf Vercel deployen](#schritt-2-auf-vercel-deployen)
3. [Schritt 3: PayPal-E-Mail eintragen](#schritt-3-paypal-e-mail-eintragen)
4. [Schritt 4: Produkte hinzufügen und bearbeiten](#schritt-4-produkte-hinzufügen-und-bearbeiten)
5. [Schritt 5: Impressum ausfüllen](#schritt-5-impressum-ausfüllen)
6. [Kategorien-Übersicht](#kategorien-übersicht)
7. [Technische Details](#technische-details)
8. [Häufige Fragen](#häufige-fragen)

---

## Schritt 1: Code auf GitHub hochladen

### Option A – Über die GitHub-Webseite (einfachste Methode)

1. Gehe zu [github.com](https://github.com) und melde dich an
2. Klicke oben rechts auf **„+"** → **„New repository"**
3. Repository-Name: `ulis-wollwelt`
4. Sichtbarkeit: **Public** (für Vercel kostenlos nötig) oder **Private**
5. Klicke auf **„Create repository"**
6. Klicke auf **„uploading an existing file"**
7. Ziehe **alle Dateien und Ordner** aus dem Projektordner in das Upload-Fenster
8. Klicke auf **„Commit changes"**

### Option B – Per Terminal (für Fortgeschrittene)

```bash
cd /pfad/zum/projekt
git init
git add .
git commit -m "Uli's Wollwelt – erster Commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/ulis-wollwelt.git
git push -u origin main
```

---

## Schritt 2: Auf Vercel deployen

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke auf **„Continue with GitHub"** und melde dich an
3. Klicke auf **„New Project"**
4. Wähle dein Repository **„ulis-wollwelt"** aus und klicke auf **„Import"**
5. Trage folgende Build-Einstellungen ein:

| Einstellung | Wert |
|---|---|
| **Framework Preset** | Vite |
| **Root Directory** | `client` |
| **Build Command** | `pnpm build` |
| **Output Directory** | `dist` |

6. Klicke auf **„Deploy"**
7. Nach ca. 1–2 Minuten erhältst du eine Live-URL (z.B. `ulis-wollwelt.vercel.app`) 🎉

### Eigene Domain verbinden (optional)

1. In Vercel: Gehe zu deinem Projekt → **„Settings"** → **„Domains"**
2. Trage deine Domain ein (z.B. `ulis-wollwelt.de`)
3. Folge den Anweisungen zum DNS-Eintrag bei deinem Domain-Anbieter

---

## Schritt 3: PayPal-E-Mail eintragen

Öffne die Datei:
```
client/src/lib/data.ts
```

Suche nach dieser Zeile (ganz oben in der Datei):
```typescript
export const SHOP_INFO = {
  name: "Uli's Wollwelt",
  email: "uli.albrecht@p",   // ← HIER die vollständige PayPal-E-Mail eintragen
  ...
```

Ändere `"uli.albrecht@p"` auf deine vollständige PayPal-E-Mail-Adresse, z.B.:
```typescript
email: "uli.albrecht@gmail.com",
```

**Wichtig:** Die E-Mail muss mit deinem PayPal-Konto verknüpft sein!

---

## Schritt 4: Produkte hinzufügen und bearbeiten

Alle Produkte befinden sich in:
```
client/src/lib/data.ts
```

### Neues Produkt hinzufügen

Füge ein neues Objekt in das `products`-Array ein:

```typescript
{
  id: "einzigartiger-name",        // Keine Leerzeichen, keine Sonderzeichen
  name: "Gehäkelter Teddybär",     // Anzeigename im Shop
  description: "Ein süßer Bär...", // Kurze Beschreibung (1–2 Sätze)
  price: 15.00,                    // Preis in Euro (Punkt statt Komma!)
  category: "baeren",              // Kategorie-ID (siehe Tabelle unten)
  image: "https://...",            // Bild-URL (oder weglassen für Platzhalter)
  available: true,                 // true = verfügbar, false = vergriffen
  tags: ["Bär", "Geschenk"],      // Suchbegriffe (optional)
},
```

### Produkt als "Vergriffen" markieren

Setze `available: false`:
```typescript
available: false,
```

Das Produkt erscheint dann mit einem „Vergriffen"-Badge und ohne Kaufen-Button.

### Produktbilder hochladen

**Kostenlose Optionen:**
- [imgur.com](https://imgur.com) – Bild hochladen → Rechtsklick → „Bild-URL kopieren"
- [cloudinary.com](https://cloudinary.com) – Professioneller, mit Bildbearbeitung
- [postimages.org](https://postimages.org) – Einfach und kostenlos

Die URL muss direkt auf das Bild zeigen (endet auf `.jpg`, `.png` oder `.webp`).

---

## Schritt 5: Impressum ausfüllen

**Pflicht nach deutschem Recht!** Öffne:
```
client/src/pages/Impressum.tsx
```

Ersetze die Platzhalter mit echten Daten:
- Vor- und Nachname
- Straße und Hausnummer
- PLZ und Ort
- E-Mail-Adresse
- Telefonnummer (optional)

> **Hinweis:** Da es sich um einen privaten/gewerblichen Shop handelt, empfiehlt sich eine Prüfung durch einen Rechtsanwalt oder die Nutzung eines Impressum-Generators (z.B. [e-recht24.de](https://www.e-recht24.de/impressum-generator.html)).

---

## Kategorien-Übersicht

| Kategorie-ID | Anzeigename | Emoji |
|---|---|---|
| `baeren` | Bären & Freunde | 🐻 |
| `hasen` | Hasen & Kaninchen | 🐰 |
| `katzen` | Katzen & Kätzchen | 🐱 |
| `voegel` | Vögel & Federvieh | 🐦 |
| `meerestiere` | Meerestiere | 🐠 |
| `bauernhof` | Bauernhoftiere | 🐄 |
| `pueppchen` | Püppchen & Figuren | 🧸 |
| `saisonal` | Saisonal & Festlich | 🎄 |
| `gestrickt` | Gestricktes | 🧣 |
| `sonstiges` | Sonstiges & Besonderes | ✨ |

---

## Technische Details

### Projektstruktur

```
ulis-wollwelt/
├── client/
│   ├── src/
│   │   ├── pages/          ← Alle Seiten (Home, Kategorien, Über uns, ...)
│   │   ├── components/     ← Wiederverwendbare Komponenten (Navbar, Footer, ProductCard)
│   │   ├── contexts/       ← Wunschliste (WishlistContext)
│   │   ├── lib/
│   │   │   └── data.ts     ← ⭐ HIER Produkte und Kategorien bearbeiten!
│   │   ├── App.tsx         ← Routen-Konfiguration
│   │   └── index.css       ← Globales Styling
│   └── index.html
├── vercel.json             ← Vercel-Konfiguration (SPA-Routing)
├── ANLEITUNG.md            ← Diese Datei
└── README.md               ← Kurzanleitung
```

### Seiten und URLs

| Seite | URL | Beschreibung |
|---|---|---|
| Shop (Startseite) | `/` | Alle Produkte mit Filter und Suche |
| Kategorien | `/kategorien` | Übersicht aller Kategorien |
| Wunschliste | `/wunschliste` | Gemerkte Lieblingsprodukte |
| Über uns | `/ueber-uns` | Über Uli und ihre Arbeit |
| Impressum | `/impressum` | Rechtliche Pflichtangaben |
| Datenschutz | `/datenschutz` | Datenschutzerklärung |

### Funktionen

| Funktion | Beschreibung |
|---|---|
| **Kategoriefilter** | Produkte nach Kategorie filtern |
| **Suche** | Produkte nach Name, Beschreibung oder Tags suchen |
| **Preissortierung** | Aufsteigend / Absteigend nach Preis sortieren |
| **Wunschliste** | Produkte mit Herz-Button merken (wird im Browser gespeichert) |
| **PayPal-Kauf** | Direkt zu PayPal weiterleiten mit vorausgefüllten Daten |
| **Vergriffen-Badge** | Produkte als nicht verfügbar markieren |

### Tech-Stack

| Technologie | Version | Zweck |
|---|---|---|
| React | 19 | UI-Framework |
| TypeScript | 5.6 | Typsicherheit |
| Tailwind CSS | 4 | Styling |
| Vite | 7 | Build-Tool |
| Wouter | 3 | Routing (leichtgewichtig) |
| Lucide React | 0.453 | Icons |
| Framer Motion | 12 | Animationen |

---

## Häufige Fragen

**F: Wie aktualisiere ich die Seite nach Änderungen?**
> Lade die geänderten Dateien auf GitHub hoch. Vercel erkennt die Änderung automatisch und deployt die neue Version innerhalb von 1–2 Minuten.

**F: Kann ich die Kategorien umbenennen oder neue hinzufügen?**
> Ja! In `client/src/lib/data.ts` das `categories`-Array bearbeiten. Jede Kategorie hat `id`, `name`, `emoji` und `color`.

**F: Was passiert, wenn jemand auf „Kaufen" klickt?**
> Der Benutzer wird zu PayPal weitergeleitet. Dort sieht er den Produktnamen und den Preis. Nach der Zahlung erhält Uli eine E-Mail von PayPal.

**F: Kann ich das Design ändern?**
> Ja! Die Farben und Schriften sind in `client/src/index.css` definiert. Die Hauptfarbe (Koralle/Orange) kann dort angepasst werden.

**F: Ist die Wunschliste für alle Besucher sichtbar?**
> Nein. Die Wunschliste wird nur im Browser des jeweiligen Besuchers gespeichert (localStorage). Jeder hat seine eigene, private Wunschliste.

**F: Brauche ich ein PayPal-Geschäftskonto?**
> Nein, ein normales PayPal-Konto reicht aus. Allerdings empfiehlt PayPal für regelmäßige Verkäufe ein Geschäftskonto.

---

*Erstellt mit ❤️ für Uli's Wollwelt – April 2026*
