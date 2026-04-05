// Home – Uli's Wollwelt
// Stil: Bunte Häkelwelt – Hero mit Bild, Kategorien-Kacheln, Produktgrid
// Farben: Cremeweiß, Koralle, Türkis, Sonnengelb, Mint
import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Search, ChevronDown, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { products, categories, SHOP_INFO } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663509974545/cwwhc68h9DwLtFTU2HndRY/hero_banner-9fRHcn2AxxQu4sg6Pz5KPg.webp";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none");

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }
    if (sortOrder === "asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [search, activeCategory, sortOrder]);

  const cycleSortOrder = () => {
    setSortOrder((prev) =>
      prev === "none" ? "asc" : prev === "asc" ? "desc" : "none"
    );
  };

  const sortLabel =
    sortOrder === "asc"
      ? "Preis aufsteigend"
      : sortOrder === "desc"
      ? "Preis absteigend"
      : "Sortierung";

  const SortIcon =
    sortOrder === "asc" ? ArrowUp : sortOrder === "desc" ? ArrowDown : ArrowUpDown;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] md:h-[520px]">
          <img
            src={HERO_IMAGE}
            alt="Ulis-Wolle-Welt – handgemachte Häkelarbeiten"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl text-white leading-tight drop-shadow-lg mb-3">
              Ulis-Wolle-Welt
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-semibold drop-shadow mb-2">
              {SHOP_INFO.tagline}
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed drop-shadow mb-6 max-w-md">
              Liebevoll handgehäkelte Tierchen, Püppchen und mehr – direkt von Uli zu dir.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-orange-50 transition-colors w-fit text-sm"
            >
              Jetzt stöbern
              <ChevronDown size={16} />
            </a>
          </div>
        </div>
        {/* Wellen-Divider */}
        <div className="wave-divider -mt-1">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
              fill="oklch(0.985 0.008 80)"
            />
          </svg>
        </div>
      </section>

      {/* ── KATEGORIEN ── */}
      <section className="py-10" id="kategorien">
        <div className="container">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">
            🐾 Kategorien
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`category-tile rounded-2xl p-3 text-center border-2 transition-all ${
                activeCategory === null
                  ? "border-orange-400 bg-orange-50 shadow-md"
                  : "border-transparent bg-white hover:border-orange-200"
              }`}
            >
              <div className="text-2xl mb-1">🌈</div>
              <div className="text-xs font-bold text-gray-700">Alle</div>
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.id ? null : cat.id)
                }
                className={`category-tile rounded-2xl p-3 text-center border-2 transition-all ${
                  activeCategory === cat.id
                    ? "border-orange-400 shadow-md " + cat.color
                    : "border-transparent bg-white hover:border-orange-200"
                }`}
              >
                <div className="text-2xl mb-1">{cat.emoji}</div>
                <div className="text-xs font-bold text-gray-700 leading-tight">
                  {cat.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP ── */}
      <section className="py-6 flex-1" id="shop">
        <div className="container">
          {/* Suchleiste */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 items-center justify-between">
            <h2 className="text-2xl font-extrabold text-gray-800">
              🛍️ Alle Produkte
              {activeCategory && (
                <span className="ml-2 text-base font-semibold text-orange-500">
                  · {categories.find((c) => c.id === activeCategory)?.name}
                </span>
              )}
            </h2>
            <div className="flex gap-2 w-full sm:w-auto">
              {/* Suchfeld */}
              <div className="relative flex-1 sm:w-56">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Suchen..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-full border border-orange-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 font-medium"
                />
              </div>
              {/* Preis-Sortierung */}
              <button
                onClick={cycleSortOrder}
                title="Nach Preis sortieren"
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                  sortOrder !== "none"
                    ? "bg-orange-500 text-white border-orange-500 shadow-md"
                    : "bg-white text-gray-600 border-orange-200 hover:border-orange-400 hover:text-orange-500"
                }`}
              >
                <SortIcon size={14} />
                <span className="hidden sm:inline">{sortLabel}</span>
              </button>
            </div>
          </div>

          {/* Produktgrid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product, i) => (
                <div
                  key={product.id}
                  className="fade-in-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-semibold text-lg">Keine Produkte gefunden</p>
              <p className="text-sm mt-1">Versuche einen anderen Suchbegriff oder eine andere Kategorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── INFO-BANNER ── */}
      <section className="bg-orange-50 border-y border-orange-100 py-8 mt-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-bold text-gray-800 mb-1">Handgemacht</h3>
              <p className="text-sm text-gray-600">Jedes Stück wird mit Liebe von Hand gefertigt – kein Massenprodukt!</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📦</div>
              <h3 className="font-bold text-gray-800 mb-1">Schneller Versand</h3>
              <p className="text-sm text-gray-600">Versand innerhalb von 1–2 Werktagen nach Zahlungseingang.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💙</div>
              <h3 className="font-bold text-gray-800 mb-1">Sicher bezahlen</h3>
              <p className="text-sm text-gray-600">Einfache und sichere Bezahlung über PayPal.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
