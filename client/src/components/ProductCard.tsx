// ProductCard – Uli's Wollwelt
// Stil: Bunte Häkelwelt – weiche Karten mit Hover-Effekt, PayPal-Button und Herz-Button
import { Product, SHOP_INFO } from "@/lib/data";
import { Package, Heart } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toggle, isWished } = useWishlist();
  const wished = isWished(product.id);

  const handlePayPal = () => {
    // PayPal-Bezahlung über den "Jetzt kaufen"-Button
    // Öffnet PayPal mit vorausgefüllten Daten
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${encodeURIComponent(
      SHOP_INFO.email
    )}&item_name=${encodeURIComponent(product.name)}&amount=${product.price.toFixed(
      2
    )}&currency_code=EUR&return=${encodeURIComponent(
      window.location.href
    )}&cancel_return=${encodeURIComponent(window.location.href)}`;
    window.open(paypalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden border border-orange-100 shadow-sm flex flex-col">
      {/* Produktbild */}
      <div className="relative aspect-square overflow-hidden bg-orange-50">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package size={48} className="text-orange-200" />
          </div>
        )}
        {/* Herz-Button */}
        <button
          onClick={() => toggle(product.id)}
          title={wished ? "Von Wunschliste entfernen" : "Zur Wunschliste hinzufügen"}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
            wished
              ? "bg-red-500 text-white scale-110"
              : "bg-white/80 text-gray-400 hover:text-red-400 hover:bg-white"
          }`}
        >
          <Heart size={15} fill={wished ? "currentColor" : "none"} />
        </button>
        {!product.available && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            <span className="bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              Vergriffen
            </span>
          </div>
        )}
      </div>

      {/* Produktinfo */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-base leading-snug mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-3">
          {product.description}
        </p>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Preis und Kaufen */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-extrabold" style={{ color: "oklch(0.62 0.17 28)" }}>
            {product.price.toFixed(2).replace(".", ",")} €
          </span>

          {product.available ? (
            <button
              onClick={handlePayPal}
              className="paypal-btn"
              title="Mit PayPal bezahlen"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
              </svg>
              Kaufen
            </button>
          ) : (
            <span className="text-xs text-gray-400 font-semibold">Nicht verfügbar</span>
          )}
        </div>
      </div>
    </div>
  );
}
