import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <div className="text-8xl mb-6">🧶</div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            Ups! Seite nicht gefunden
          </h1>
          <p className="text-gray-500 mb-8 text-lg">
            Diese Seite scheint sich im Wollknäuel verirrt zu haben.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-md"
          >
            🏠 Zurück zum Shop
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
