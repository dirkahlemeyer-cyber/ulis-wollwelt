// Admin – Ulis-Wolle-Welt
// Passwortgeschützter Adminbereich – nicht öffentlich verlinkt
// Erreichbar unter: /admin
import { useState } from "react";
import { useAdmin } from "@/contexts/AdminContext";
import { Lock, LogOut, Key, BookOpen, ShoppingBag, Tag, Palette, ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react";

// ── LOGIN ──────────────────────────────────────────────────────────────────
function AdminLogin() {
  const { login } = useAdmin();
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(password);
    if (!ok) {
      setError("Falsches Passwort. Bitte erneut versuchen.");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm border border-orange-100">
        <div className="text-center mb-6">
          <span className="text-5xl">🧶</span>
          <h1 className="font-display text-2xl mt-2" style={{ color: "oklch(0.62 0.17 28)" }}>
            Ulis-Wolle-Welt
          </h1>
          <p className="text-gray-500 text-sm mt-1">Adminbereich – Bitte einloggen</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPw ? "text" : "password"}
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="Passwort"
              className="w-full pl-9 pr-10 py-3 border border-orange-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-orange-50"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors"
          >
            Einloggen
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-4">
          Standard-Passwort: <strong>1234</strong> (bitte nach dem ersten Login ändern)
        </p>
      </div>
    </div>
  );
}

// ── PASSWORT ÄNDERN ────────────────────────────────────────────────────────
function ChangePasswordSection() {
  const { changePassword } = useAdmin();
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPw !== confirmPw) {
      setMsg({ type: "err", text: "Die neuen Passwörter stimmen nicht überein." });
      return;
    }
    if (newPw.length < 4) {
      setMsg({ type: "err", text: "Das neue Passwort muss mindestens 4 Zeichen haben." });
      return;
    }
    const ok = changePassword(oldPw, newPw);
    if (ok) {
      setMsg({ type: "ok", text: "✅ Passwort erfolgreich geändert!" });
      setOldPw(""); setNewPw(""); setConfirmPw("");
    } else {
      setMsg({ type: "err", text: "Altes Passwort falsch." });
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-6">
      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Key size={18} className="text-orange-500" /> Passwort ändern
      </h3>
      <form onSubmit={handleChange} className="space-y-3 max-w-sm">
        <input
          type="password"
          value={oldPw}
          onChange={(e) => { setOldPw(e.target.value); setMsg(null); }}
          placeholder="Aktuelles Passwort"
          className="w-full px-4 py-2.5 border border-orange-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <input
          type="password"
          value={newPw}
          onChange={(e) => { setNewPw(e.target.value); setMsg(null); }}
          placeholder="Neues Passwort (min. 4 Zeichen)"
          className="w-full px-4 py-2.5 border border-orange-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <input
          type="password"
          value={confirmPw}
          onChange={(e) => { setConfirmPw(e.target.value); setMsg(null); }}
          placeholder="Neues Passwort bestätigen"
          className="w-full px-4 py-2.5 border border-orange-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        {msg && (
          <p className={`text-xs ${msg.type === "ok" ? "text-green-600" : "text-red-500"}`}>
            {msg.text}
          </p>
        )}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
        >
          Passwort ändern
        </button>
      </form>
    </div>
  );
}

// ── ANLEITUNG ABSCHNITT ────────────────────────────────────────────────────
function GuideSection({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-orange-50 transition-colors"
      >
        <span className="font-bold text-gray-800 flex items-center gap-2">
          {icon} {title}
        </span>
        {open ? <ChevronUp size={18} className="text-orange-400" /> : <ChevronDown size={18} className="text-orange-400" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-gray-700 leading-relaxed space-y-3 border-t border-orange-50">
          {children}
        </div>
      )}
    </div>
  );
}

// ── HAUPTBEREICH ───────────────────────────────────────────────────────────
function AdminDashboard() {
  const { logout } = useAdmin();

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-white border-b border-orange-100 shadow-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧶</span>
            <span className="font-display text-xl" style={{ color: "oklch(0.62 0.17 28)" }}>
              Ulis-Wolle-Welt
            </span>
            <span className="ml-2 bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full">
              Admin
            </span>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors font-semibold"
          >
            <LogOut size={16} /> Abmelden
          </button>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-1">Willkommen im Adminbereich</h1>
          <p className="text-gray-500 text-sm">Hier findest du die Bedienungsanleitung und Einstellungen für Ulis-Wolle-Welt.</p>
        </div>

        {/* Schnellübersicht */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { emoji: "📦", label: "Produkte verwalten", desc: "In data.ts bearbeiten" },
            { emoji: "🎨", label: "Design geschützt", desc: "CSS-Variablen in index.css" },
            { emoji: "🔒", label: "Passwort ändern", desc: "Weiter unten auf dieser Seite" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl border border-orange-100 shadow-sm p-4 text-center">
              <div className="text-3xl mb-2">{item.emoji}</div>
              <p className="font-bold text-gray-800 text-sm">{item.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bedienungsanleitung */}
        <h2 className="text-xl font-extrabold text-gray-800 flex items-center gap-2 mt-2">
          <BookOpen size={20} className="text-orange-500" /> Bedienungsanleitung
        </h2>

        <GuideSection title="Produkte hinzufügen oder ändern" icon={<ShoppingBag size={18} className="text-orange-500" />}>
          <p className="pt-3">Alle Produkte befinden sich in der Datei:</p>
          <code className="block bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-xs font-mono">
            client/src/lib/data.ts
          </code>
          <p>Jedes Produkt hat folgende Felder:</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li><strong>id</strong> – Eindeutige Nummer (z.B. 1, 2, 3 …)</li>
            <li><strong>name</strong> – Name des Produkts (z.B. "Kleiner Hase")</li>
            <li><strong>description</strong> – Kurze Beschreibung</li>
            <li><strong>price</strong> – Preis in Euro (z.B. 12.50)</li>
            <li><strong>category</strong> – Kategorie-ID (z.B. "tiere-hasen")</li>
            <li><strong>image</strong> – Bild-URL (von einem Foto-Upload-Dienst)</li>
            <li><strong>available</strong> – true = verfügbar, false = ausverkauft</li>
          </ul>
          <p className="font-semibold text-orange-700">Nach jeder Änderung: Datei speichern → auf GitHub pushen → Vercel aktualisiert automatisch!</p>
        </GuideSection>

        <GuideSection title="Kategorien ändern" icon={<Tag size={18} className="text-orange-500" />}>
          <p className="pt-3">Die 10 Kategorien befinden sich ebenfalls in:</p>
          <code className="block bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-xs font-mono">
            client/src/lib/data.ts → export const categories = [...]
          </code>
          <p>Jede Kategorie hat:</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li><strong>id</strong> – Eindeutige ID (wird auch bei Produkten verwendet)</li>
            <li><strong>name</strong> – Angezeigter Name (z.B. "Hasen & Kaninchen")</li>
            <li><strong>emoji</strong> – Emoji-Symbol für die Kachel</li>
            <li><strong>color</strong> – Hintergrundfarbe der Kachel (Tailwind-Klasse)</li>
          </ul>
        </GuideSection>

        <GuideSection title="Design & Farben schützen" icon={<Palette size={18} className="text-orange-500" />}>
          <p className="pt-3">Das gesamte Design ist in einer einzigen Datei gespeichert:</p>
          <code className="block bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-xs font-mono">
            client/src/index.css
          </code>
          <p>Die wichtigsten Farben (als CSS-Variablen):</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { name: "Koralle (Primär)", value: "oklch(0.62 0.17 28)", color: "#d4603a" },
              { name: "Cremeweiß (Hintergrund)", value: "oklch(0.985 0.008 80)", color: "#fdf8f0" },
              { name: "Türkis (Akzent)", value: "oklch(0.72 0.12 195)", color: "#3db8b0" },
              { name: "Mint (Grün)", value: "oklch(0.80 0.10 160)", color: "#6dcca0" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-2 bg-orange-50 rounded-lg p-2">
                <div className="w-6 h-6 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.color }} />
                <div>
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-gray-400 font-mono">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-orange-700 font-semibold">⚠️ Diese Werte NICHT ändern, wenn das Design erhalten bleiben soll!</p>
          <p>Schriften: <strong>Pacifico</strong> (Titel/Logo) + <strong>Nunito</strong> (Fließtext)</p>
        </GuideSection>

        <GuideSection title="PayPal-E-Mail eintragen" icon={<span className="text-blue-500 font-bold text-sm">P</span>}>
          <p className="pt-3">Die PayPal-E-Mail-Adresse befindet sich in:</p>
          <code className="block bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-xs font-mono">
            client/src/lib/data.ts → export const PAYPAL_EMAIL = "..."
          </code>
          <p>Ersetze den Platzhalter durch die vollständige PayPal-E-Mail-Adresse von Uli.</p>
          <p>Der PayPal-Kaufbutton öffnet dann automatisch die richtige Zahlungsseite.</p>
        </GuideSection>

        <GuideSection title="Impressum & Datenschutz ausfüllen" icon={<span className="text-gray-500 font-bold text-sm">§</span>}>
          <p className="pt-3">Diese Seiten müssen mit echten Daten befüllt werden (gesetzliche Pflicht!):</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li><code>client/src/pages/Impressum.tsx</code> – Name, Adresse, E-Mail</li>
            <li><code>client/src/pages/Datenschutz.tsx</code> – Datenschutzerklärung</li>
          </ul>
          <p className="text-red-600 font-semibold">⚠️ Ohne Impressum ist der Shop in Deutschland nicht rechtskonform!</p>
        </GuideSection>

        <GuideSection title="Neue Bilder hochladen" icon={<span className="text-purple-500 font-bold text-sm">🖼</span>}>
          <p className="pt-3">Produktbilder müssen als URL angegeben werden. Empfohlene kostenlose Dienste:</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li><strong>imgbb.com</strong> – Bild hochladen → Link kopieren</li>
            <li><strong>postimages.org</strong> – Kostenlos, einfach</li>
            <li><strong>imgur.com</strong> – Weit verbreitet</li>
          </ul>
          <p>Den kopierten Link dann als <code>image</code>-Wert beim Produkt in data.ts eintragen.</p>
        </GuideSection>

        <GuideSection title="Änderungen veröffentlichen (GitHub → Vercel)" icon={<span className="text-green-500 font-bold text-sm">🚀</span>}>
          <p className="pt-3">Nach jeder Änderung an den Dateien:</p>
          <ol className="list-decimal list-inside space-y-1 text-xs">
            <li>Datei speichern</li>
            <li>GitHub Desktop öffnen (oder Terminal)</li>
            <li>Änderungen als "Commit" bestätigen</li>
            <li>Auf "Push" klicken → Vercel aktualisiert automatisch</li>
          </ol>
          <p>Vercel-URL: <strong>https://ulis-wollwelt.vercel.app</strong></p>
          <p>GitHub-Repository: <strong>github.com/dirkahlemeyer-cyber/ulis-wollwelt</strong></p>
        </GuideSection>

        {/* Passwort ändern */}
        <h2 className="text-xl font-extrabold text-gray-800 flex items-center gap-2 mt-2">
          <Key size={20} className="text-orange-500" /> Einstellungen
        </h2>
        <ChangePasswordSection />

        <div className="text-center text-xs text-gray-400 pb-4">
          Ulis-Wolle-Welt Adminbereich · Nicht öffentlich zugänglich
        </div>
      </main>
    </div>
  );
}

// ── EXPORT ─────────────────────────────────────────────────────────────────
export default function Admin() {
  const { isLoggedIn } = useAdmin();
  return isLoggedIn ? <AdminDashboard /> : <AdminLogin />;
}
