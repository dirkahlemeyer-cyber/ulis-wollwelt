// Navbar – Uli's Wollwelt
// Stil: Bunte Häkelwelt – cremeweiß, Koralle als Akzent, Nunito + Pacifico
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { href: "/", label: "Shop" },
  { href: "/kategorien", label: "Kategorien" },
  { href: "/ueber-uns", label: "Über uns" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

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
            Uli's Wollwelt
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
