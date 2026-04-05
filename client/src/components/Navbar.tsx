// Navbar – Uli's Wollwelt
// Stil: Bunte Häkelwelt – cremeweiß, Koralle als Akzent, Nunito + Pacifico
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";

const navLinks = [
  { href: "/", label: "Shop" },
  { href: "/kategorien", label: "Kategorien" },
  { href: "/ueber-uns", label: "Über uns" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { count } = useWishlist();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-orange-100 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🧶</span>
          <span
            className="font-display text-2xl leading-none"
            style={{ color: "oklch(0.62 0.17 28)" }}
          >
            Ulis-Wolle-Welt
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-semibold text-sm transition-colors hover:text-orange-500 ${
                location === link.href
                  ? "text-orange-500 border-b-2 border-orange-400 pb-0.5"
                  : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Wunschliste + Mobile Menu */}
        <div className="flex items-center gap-2">
          <Link
            href="/wunschliste"
            className="relative p-2 rounded-full hover:bg-red-50 transition-colors"
            title="Wunschliste"
          >
            <Heart
              size={22}
              className={count > 0 ? "text-red-500" : "text-gray-400"}
              fill={count > 0 ? "currentColor" : "none"}
            />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </Link>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-orange-100 px-4 py-3 flex flex-col gap-2 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 px-3 rounded-lg font-semibold text-sm transition-colors ${
                location === link.href
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-700 hover:bg-orange-50"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
