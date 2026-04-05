// Kategorien – Uli's Wollwelt
import { Link } from "wouter";
import { categories, products } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Kategorien() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          🐾 Alle Kategorien
        </h1>
        <p className="text-gray-500 mb-8">
          Stöbere durch alle Kategorien und entdecke Uli's bunte Häkelwelt.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/?kategorie=${cat.id}`}
                className={`category-tile rounded-2xl p-6 border border-orange-100 shadow-sm flex items-start gap-4 ${cat.color} no-underline`}
              >
                <span className="text-4xl">{cat.emoji}</span>
                <div>
                  <h2 className={`font-extrabold text-lg ${cat.textColor} mb-1`}>
                    {cat.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">{cat.description}</p>
                  <span className="text-xs font-semibold text-gray-500">
                    {count} {count === 1 ? "Produkt" : "Produkte"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
