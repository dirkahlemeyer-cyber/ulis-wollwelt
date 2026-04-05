// App.tsx – Ulis-Wolle-Welt
// Stil: Bunte Häkelwelt – Light Theme, Nunito + Pacifico, Koralle als Primärfarbe
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { AdminProvider } from "@/contexts/AdminContext";
import Home from "@/pages/Home";
import Kategorien from "@/pages/Kategorien";
import UeberUns from "@/pages/UeberUns";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import Wunschliste from "@/pages/Wunschliste";
import Admin from "@/pages/Admin";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/kategorien" component={Kategorien} />
      <Route path="/ueber-uns" component={UeberUns} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/wunschliste" component={Wunschliste} />
      <Route path="/admin" component={Admin} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AdminProvider>
        <WishlistProvider>
          <ThemeProvider defaultTheme="light">
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </ThemeProvider>
        </WishlistProvider>
      </AdminProvider>
    </ErrorBoundary>
  );
}

export default App;
