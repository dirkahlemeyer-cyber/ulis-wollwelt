// Impressum – Uli's Wollwelt
// HINWEIS: Bitte alle Platzhalter mit echten Daten ersetzen!
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Impressum</h1>

        <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="font-bold text-lg text-gray-800 mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Ulrike Albrecht</strong><br />
              {/* Bitte Adresse eintragen */}
              [Straße und Hausnummer]<br />
              [PLZ] [Ort]<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-gray-800 mb-2">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:uli.albrecht@p" className="text-orange-500 hover:underline">uli.albrecht@p</a><br />
              {/* Telefon optional: */}
              {/* Telefon: [Telefonnummer] */}
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-gray-800 mb-2">Hinweis zur gewerblichen Tätigkeit</h2>
            <p>
              Diese Website wird als privates Hobby-Projekt betrieben. Es handelt sich nicht um einen 
              gewerblichen Online-Shop. Die angebotenen Artikel sind handgefertigte Einzelstücke, die 
              im privaten Rahmen verkauft werden.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-gray-800 mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-gray-800 mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <div className="bg-orange-50 rounded-xl p-4 text-sm text-orange-700 border border-orange-200">
            <strong>⚠️ Hinweis:</strong> Bitte ersetzen Sie alle Platzhalter in eckigen Klammern 
            durch Ihre echten Daten. Das Impressum muss vollständige Kontaktdaten enthalten.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
