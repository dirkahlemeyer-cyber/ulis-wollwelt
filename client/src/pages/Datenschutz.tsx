// Datenschutz – Uli's Wollwelt
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Datenschutzerklärung</h1>

        <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-8 space-y-6 text-gray-700 leading-relaxed text-sm">
          <section>
            <h2 className="font-bold text-base text-gray-800 mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold text-gray-700 mb-1">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base text-gray-800 mb-2">2. Datenerfassung auf dieser Website</h2>
            <h3 className="font-semibold text-gray-700 mb-1">Wer ist verantwortlich für die Datenerfassung?</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <h3 className="font-semibold text-gray-700 mt-3 mb-1">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Diese Website ist eine statische Website ohne eigene Datenbank oder 
              Benutzerkonten. Daten werden nur dann erhoben, wenn Sie aktiv eine Bestellung 
              über PayPal aufgeben. In diesem Fall werden Ihre Daten direkt an PayPal 
              übermittelt und dort verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base text-gray-800 mb-2">3. PayPal</h2>
            <p>
              Auf dieser Website wird PayPal als Zahlungsdienstleister eingesetzt. Anbieter 
              dieses Zahlungsdienstes ist die PayPal (Europe) S.à.r.l. et Cie, S.C.A., 
              22-24 Boulevard Royal, L-2449 Luxembourg.
            </p>
            <p className="mt-2">
              Wenn Sie mit PayPal bezahlen, werden die von Ihnen eingegebenen Zahlungsdaten 
              an PayPal übermittelt. Die Übermittlung Ihrer Daten an PayPal erfolgt auf 
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 
              lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags).
            </p>
            <p className="mt-2">
              Details entnehmen Sie der Datenschutzerklärung von PayPal:{" "}
              <a
                href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                https://www.paypal.com/de/webapps/mpp/ua/privacy-full
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base text-gray-800 mb-2">4. Server-Log-Dateien</h2>
            <p>
              Der Hosting-Anbieter dieser Website erhebt und speichert automatisch Informationen 
              in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. 
              Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, 
              Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage 
              und IP-Adresse.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base text-gray-800 mb-2">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der 
              Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. 
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit 
              an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base text-gray-800 mb-2">6. Kontakt</h2>
            <p>
              Bei Fragen zum Datenschutz wenden Sie sich bitte an:{" "}
              <a href="mailto:uli.albrecht@p" className="text-orange-500 hover:underline">
                uli.albrecht@p
              </a>
            </p>
          </section>

          <div className="bg-orange-50 rounded-xl p-4 text-orange-700 border border-orange-200">
            <strong>⚠️ Hinweis:</strong> Diese Datenschutzerklärung ist ein Muster und sollte 
            von einem Rechtsexperten geprüft und an Ihre spezifische Situation angepasst werden.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
