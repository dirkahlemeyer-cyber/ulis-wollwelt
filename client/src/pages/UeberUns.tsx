// Über uns – Uli's Wollwelt
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SHOP_INFO } from "@/lib/data";

const ABOUT_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663509974545/cwwhc68h9DwLtFTU2HndRY/about_uli-QUF5i2U3ZEXrysTbM3kjCa.webp";

export default function UeberUns() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-orange-50 py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
                  💛 Über Uli's Wollwelt
                </h1>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {SHOP_INFO.description}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jedes Stück entsteht in liebevoller Handarbeit – mit viel Geduld, bunter Wolle und einem Lächeln. 
                  Ob als Geschenk für Freunde, als Dekoration oder einfach zum Knuddeln: Hier findet jeder etwas, 
                  das das Herz wärmt.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Da alle Artikel Einzelstücke oder Kleinserien sind, kann es vorkommen, dass ein Artikel 
                  bereits vergriffen ist. Bei Fragen oder Sonderwünschen einfach eine E-Mail schreiben!
                </p>
                <div className="mt-6 p-4 bg-white rounded-2xl border border-orange-100 shadow-sm">
                  <p className="text-sm font-semibold text-gray-700">📬 Kontakt</p>
                  <p className="text-sm text-gray-600 mt-1">
                    E-Mail:{" "}
                    <a
                      href={`mailto:${SHOP_INFO.email}`}
                      className="text-orange-500 hover:underline font-medium"
                    >
                      {SHOP_INFO.email}
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Versand: {SHOP_INFO.shippingInfo}
                  </p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={ABOUT_IMAGE}
                  alt="Uli's Häkelecke"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Werte */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-8 text-center">
              Was Uli's Wollwelt besonders macht
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  emoji: "🧶",
                  title: "100% Handarbeit",
                  text: "Jedes Stück wird von Hand gehäkelt oder gestrickt – mit viel Liebe zum Detail.",
                },
                {
                  emoji: "🌈",
                  title: "Bunte Vielfalt",
                  text: "Von Koralle bis Türkis – die Farben sind so bunt wie das Leben.",
                },
                {
                  emoji: "🎁",
                  title: "Perfekte Geschenke",
                  text: "Ob Geburtstag, Weihnachten oder einfach so – handgemachte Geschenke kommen von Herzen.",
                },
                {
                  emoji: "💌",
                  title: "Mit Herz gemacht",
                  text: "Jedes Tier, jedes Püppchen trägt ein kleines Stück Uli's Herzblut in sich.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm text-center"
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
