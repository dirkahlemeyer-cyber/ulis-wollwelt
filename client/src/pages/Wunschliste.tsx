// Wunschliste – Uli's Wollwelt
// Zeigt alle Produkte, die der Benutzer mit dem Herz-Button markiert hat
import { Link } from "wouter";
import { Heart, ArrowLeft } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Wunschliste() {
  const { wishlist } = useWishlist();
  const wishedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="container">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-500 transition-colors font-semibold"
            >
              <ArrowLeft size={16} />
              Zurück zum Shop
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <Heart size={28} className="text-red-500" fill="currentColor" />
            <h1 className="text-3xl font-extrabold text-gray-800">
              Meine Wunschliste
            </h1>
            {wishedProducts.length > 0 && (
              <span className="bg-red-100 text-red-600 text-sm font-bold px-3 py-1 rounded-full">
                {wishedProducts.length} {wishedProducts.length === 1 ? "Artikel" : "Artikel"}
              </span>
            )}
          </div>

          {/* Produkte */}
          {wishedProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {wishedProducts.map((product, i) => (
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
            <div className="text-center py-24">
              <div className="text-7xl mb-5">🧶</div>
              <h2 className="text-2xl font-extrabold text-gray-700 mb-3">
                Deine Wunschliste ist noch leer
              </h2>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                Klicke auf das Herz-Symbol bei einem Produkt, um es hier zu speichern.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-md"
              >
                Jetzt stöbern
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
