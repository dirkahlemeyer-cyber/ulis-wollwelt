// Footer – Uli's Wollwelt
// Stil: Warm, gemütlich, cremeweiß mit Koralle-Akzenten
import { Link } from "wouter";
import { Heart } from "lucide-react";
import { SHOP_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-orange-50 border-t border-orange-100 mt-16">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Marke */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🧶</span>
              <span
                className="font-display text-xl"
                style={{ color: "oklch(0.62 0.17 28)" }}
              >
                Ulis-Wolle-Welt
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {SHOP_INFO.tagline}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Handgemacht mit{" "}
              <Heart size={12} className="inline text-red-400 fill-red-400" />{" "}
              von {SHOP_INFO.owner}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/kategorien" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Kategorien
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Über uns
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">
              <p>Versand: {SHOP_INFO.shippingInfo}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-200 mt-8 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Ulis-Wolle-Welt · Alle Rechte vorbehalten
        </div>
      </div>
    </footer>
  );
}
