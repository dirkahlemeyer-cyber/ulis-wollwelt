# 🧶 Uli's Wollwelt

**Handgemachte Häkelarbeiten mit Herz** – ein persönlicher Onlineshop für liebevoll handgefertigte Häkel- und Strickarbeiten.

---

## 🚀 Deployment auf Vercel (empfohlen)

### Schritt 1: Code auf GitHub hochladen

1. Gehe zu [github.com](https://github.com) und melde dich an
2. Klicke auf **"New repository"** (grüner Button)
3. Gib dem Repository einen Namen (z.B. `ulis-wollwelt`)
4. Klicke auf **"Create repository"**
5. Lade alle Dateien aus diesem Ordner hoch:
   - Entweder per **"uploading an existing file"** auf GitHub
   - Oder per Terminal:
     ```bash
     git init
     git add .
     git commit -m "Uli's Wollwelt - erster Commit"
     git branch -M main
     git remote add origin https://github.com/DEIN-USERNAME/ulis-wollwelt.git
     git push -u origin main
     ```

### Schritt 2: Auf Vercel deployen

1. Gehe zu [vercel.com](https://vercel.com) und melde dich mit deinem GitHub-Konto an
2. Klicke auf **"New Project"**
3. Wähle dein `ulis-wollwelt` Repository aus
4. Bei den Build-Einstellungen:
   - **Framework Preset:** Vite
   - **Build Command:** `pnpm build` (oder `npm run build`)
   - **Output Directory:** `dist`
   - **Root Directory:** `client`
5. Klicke auf **"Deploy"**
6. Nach ca. 1-2 Minuten ist die Seite live! 🎉

---

## ✏️ Produkte hinzufügen und bearbeiten

Alle Produkte und Kategorien befinden sich in einer einzigen Datei:

```
client/src/lib/data.ts
```

### Neues Produkt hinzufügen

Füge ein neues Objekt in das `products`-Array ein:

```typescript
{
  id: "mein-produkt-id",           // Eindeutige ID (keine Leerzeichen)
  name: "Mein Produkt",             // Name des Produkts
  description: "Beschreibung...",   // Kurze Beschreibung
  price: 12.50,                     // Preis in Euro
  category: "baeren",               // Kategorie-ID (siehe unten)
  image: "https://...",             // Bild-URL (optional)
  available: true,                  // true = verfügbar, false = vergriffen
  tags: ["Tag1", "Tag2"],          // Suchbegriffe (optional)
},
```

### Verfügbare Kategorien

| ID | Name |
|---|---|
| `baeren` | Bären & Freunde |
| `hasen` | Hasen & Kaninchen |
| `katzen` | Katzen & Kätzchen |
| `voegel` | Vögel & Federvieh |
| `meerestiere` | Meerestiere |
| `bauernhof` | Bauernhoftiere |
| `pueppchen` | Püppchen & Figuren |
| `saisonal` | Saisonal & Festlich |
| `gestrickt` | Gestricktes |
| `sonstiges` | Sonstiges & Besonderes |

### Produktbilder hochladen

1. Lade dein Bild auf einen kostenlosen Bildhosting-Dienst hoch (z.B. [imgur.com](https://imgur.com) oder [cloudinary.com](https://cloudinary.com))
2. Kopiere die direkte Bild-URL
3. Trage die URL beim `image`-Feld des Produkts ein

---

## ⚙️ Lokale Entwicklung

```bash
# Abhängigkeiten installieren
pnpm install

# Entwicklungsserver starten
pnpm dev

# Für Produktion bauen
pnpm build
```

---

## 💳 PayPal konfigurieren

In der Datei `client/src/lib/data.ts` die E-Mail-Adresse anpassen:

```typescript
export const PAYPAL_EMAIL = "deine-paypal-email@example.com";
// und
email: "deine-paypal-email@example.com",
```

---

## 📝 Impressum und Datenschutz

Bitte die Platzhalter in diesen Dateien durch echte Daten ersetzen:
- `client/src/pages/Impressum.tsx` – Adresse und Kontaktdaten eintragen
- `client/src/pages/Datenschutz.tsx` – ggf. an Rechtsexperten prüfen lassen

---

## 🛠️ Tech-Stack

- **React 19** + **TypeScript**
- **Tailwind CSS 4** für das Styling
- **Vite** als Build-Tool
- **Wouter** für das Routing
- **PayPal** für Zahlungen (kein Backend nötig!)

---

*Mit ❤️ und Wolle gemacht – Uli's Wollwelt*
