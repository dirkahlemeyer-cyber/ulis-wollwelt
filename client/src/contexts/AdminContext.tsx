// AdminContext – Ulis-Wolle-Welt
// Einfacher passwortbasierter Admin-Login mit localStorage-Persistenz
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const ADMIN_SESSION_KEY = "ulis-wolle-welt-admin-session";
const ADMIN_PASSWORD_KEY = "ulis-wolle-welt-admin-password";
const DEFAULT_PASSWORD = "1234";

interface AdminContextType {
  isLoggedIn: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  changePassword: (oldPassword: string, newPassword: string) => boolean;
}

const AdminContext = createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem(ADMIN_SESSION_KEY);
    if (session === "true") {
      setIsLoggedIn(true);
    }
    // Passwort initialisieren falls noch nicht gesetzt
    if (!localStorage.getItem(ADMIN_PASSWORD_KEY)) {
      localStorage.setItem(ADMIN_PASSWORD_KEY, DEFAULT_PASSWORD);
    }
  }, []);

  const login = (password: string): boolean => {
    const stored = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
    if (password === stored) {
      setIsLoggedIn(true);
      sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  };

  const changePassword = (oldPassword: string, newPassword: string): boolean => {
    const stored = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
    if (oldPassword === stored && newPassword.length >= 4) {
      localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
      return true;
    }
    return false;
  };

  return (
    <AdminContext.Provider value={{ isLoggedIn, login, logout, changePassword }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}
