// WishlistContext – Uli's Wollwelt
// Speichert die Wunschliste im localStorage des Browsers (bleibt nach Seiten-Reload erhalten)
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WishlistContextType {
  wishlist: string[]; // Array von Produkt-IDs
  toggle: (id: string) => void;
  isWished: (id: string) => boolean;
  count: number;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  toggle: () => {},
  isWished: () => false,
  count: 0,
});

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("ulis-wollwelt-wishlist");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("ulis-wollwelt-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggle = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isWished = (id: string) => wishlist.includes(id);

  return (
    <WishlistContext.Provider value={{ wishlist, toggle, isWished, count: wishlist.length }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
