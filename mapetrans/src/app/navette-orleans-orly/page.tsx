import type { Metadata } from "next";
import Link from "next/link";
import NavHeader from "@/app/components/NavHeader";

export const metadata: Metadata = {
  title: "Navette Orléans → Orly | Prix Fixe 180€ | MAPETRANS LD",
  description:
    "Navette privée Orléans – Aéroport d'Orly dès 180€. Prix fixe garanti, chauffeur privé 24h/24 7j/7, départ depuis tout le Loiret. Réservez en 2 minutes.",
  alternates: {
    canonical: "https://www.mapetransld.com/navette-orleans-orly",
  },
  openGraph: {
    title: "Navette Orléans → Orly | Prix Fixe 180€ | MAPETRANS LD",
    description:
      "Transfert privé Orléans – Orly dès 180€. Chauffeur professionnel, ponctualité garantie, disponible 24h/24.",
    url: "https://www.mapetransld.com/navette-orleans-orly",
    siteName: "MAPETRANS LD",
    locale: "fr_FR",
    type: "website",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Navette Orléans → Aéroport d'Orly",
  description:
    "Transfert privé en voiture avec chauffeur depuis Orléans et le Loiret vers l'aéroport d'Orly (ORY). Prix fixe 180€.",
  url: "https://www.mapetransld.com/navette-orleans-orly",
  provider: {
    "@type": "LocalBusiness",
    name: "MAPETRANS LD",
    telephone: "+33634605799",
    email: "contact@mapetransld.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "105 Route Nationale 20",
      addressLocality: "Cercottes",
      postalCode: "45520",
      addressCountry: "FR",
    },
  },
  areaServed: [
    { "@type": "City", name: "Orléans" },
    { "@type": "AdministrativeArea", name: "Loiret" },
  ],
  offers: {
    "@type": "Offer",
    name: "Navette Orléans → Orly (1-3 passagers)",
    price: "180",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    validFrom: "2024-01-01",
  },
  additionalType: "https://schema.org/TaxiService",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel est le prix d'une navette Orléans → Orly ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le tarif est de 180€ en prix fixe pour 1 à 3 passagers avec bagages standards. Ce prix est garanti à la réservation, sans surprise liée au trafic.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure le trajet Orléans → Orly ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le trajet dure environ 1h15 à 1h45 selon la circulation et le point de départ dans l'agglomération orléanaise. Nous calculons le départ pour que vous soyez à l'aéroport 2h avant votre vol.",
      },
    },
    {
      "@type": "Question",
      name: "Depuis quelles villes du Loiret peut-on réserver ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous prenons en charge les passagers depuis Orléans, Saran, Fleury-les-Aubrais, Olivet, Saint-Jean-de-Braye, La Chapelle-Saint-Mesmin, Meung-sur-Loire et l'ensemble du Loiret.",
      },
    },
    {
      "@type": "Question",
      name: "Le chauffeur attend-il en cas de retard de vol ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, l'attente est gratuite jusqu'à 35 minutes. Nous suivons les arrivées de vols en temps réel quand vous fournissez votre numéro de vol.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on réserver une navette retour depuis Orly vers Orléans ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous assurons également le trajet retour Orly → Orléans au même tarif de 180€. Précisez votre vol de retour au moment de la réservation.",
      },
    },
  ],
};

export default function NavetteOrleansOrlyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NavHeader ctaLabel="Réserver ma navette" ctaHref="/vtc#booking" topBarRight="Navettes Aéroport 24h/24 7j/7" />
      <main className="min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36">

        {/* HERO */}
        <section className="pt-8 pb-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              ✈ Navette Aéroport · Prix Fixe Garanti
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-6">
              Navette Orléans → Aéroport d&apos;Orly
              <span className="block text-blue-700 mt-1">dès 180€</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Transfert privé depuis Orléans et tout le Loiret vers l&apos;aéroport d&apos;Orly (ORY).
              Chauffeur professionnel, ponctualité garantie, disponible 24h/24 et 7j/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0634605799"
                className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full font-bold text-base hover:bg-blue-800 transition shadow-lg"
              >
                📞 Réserver par téléphone
              </a>
              <Link
                href="/vtc#booking"
                className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-base hover:bg-slate-700 transition shadow-lg"
              >
                Demander un devis →
              </Link>
            </div>
          </div>
        </section>

        {/* TARIF + INFOS TRAJET */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black text-slate-900 mb-10">
              Tarif & détails du trajet Orléans – Orly
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="text-4xl font-black text-blue-700 mb-2">180€</div>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">Prix fixe</div>
                <div className="text-slate-500 text-sm">1 à 3 passagers · bagages inclus</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="text-4xl font-black text-slate-900 mb-2">~1h30</div>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">Durée moyenne</div>
                <div className="text-slate-500 text-sm">Variable selon la circulation</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="text-4xl font-black text-slate-900 mb-2">24h/24</div>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">Disponibilité</div>
                <div className="text-slate-500 text-sm">7j/7 · jours fériés inclus</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 mb-8">
              <h3 className="text-xl font-black text-slate-900 mb-4">Ce qui est inclus dans le tarif</h3>
              <ul className="space-y-3">
                {[
                  "Véhicule berline confortable ou van selon le nombre de passagers",
                  "Chauffeur professionnel, ponctuel et discret",
                  "Bagages standards inclus (valises soute + bagages cabine)",
                  "Attente gratuite jusqu'à 35 minutes en cas de retard de vol",
                  "Suivi en temps réel de votre vol sur numéro de vol fourni",
                  "Prix fixe garanti à la réservation — aucun supplément trafic",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="text-blue-700 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="font-black text-blue-900 mb-2">Supplément pour 4 passagers et plus</h3>
              <p className="text-blue-800 text-sm">
                Pour les groupes de 4 à 8 passagers, nous proposons des vans et minibus. Contactez-nous pour un devis adapté au nombre de voyageurs et de bagages.
              </p>
            </div>
          </div>
        </section>

        {/* ZONES DE PRISE EN CHARGE */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              Zones de prise en charge dans le Loiret
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Notre service de navette Orléans–Orly couvre l&apos;ensemble de l&apos;agglomération orléanaise
              et du département du Loiret. Nous venons vous chercher à domicile, en hôtel ou en entreprise.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Orléans (centre-ville, quartiers nord et sud)", "Départ standard"],
                ["Saran, Fleury-les-Aubrais", "Agglomération nord"],
                ["Olivet, Saint-Jean-de-la-Ruelle", "Agglomération sud/ouest"],
                ["Saint-Jean-de-Braye, Chécy", "Agglomération est"],
                ["La Chapelle-Saint-Mesmin, Ingré", "Agglomération ouest"],
                ["Meung-sur-Loire, Beaugency, Gien, Pithiviers", "Loiret étendu — devis sur demande"],
              ].map(([ville, label]) => (
                <div key={ville} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-blue-700 mt-0.5 shrink-0">📍</span>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{ville}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POURQUOI NOUS CHOISIR */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              Pourquoi choisir MAPETRANS LD pour votre navette Orly ?
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Contrairement aux plateformes VTC classiques, MAPETRANS LD est une société locale basée
              dans le Loiret depuis 2013. Vous avez un interlocuteur unique, disponible par téléphone,
              qui connaît parfaitement les routes et les aléas de trafic entre Orléans et Orly.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🏆",
                  title: "12 ans d'expérience",
                  desc: "Fondée en 2013, MAPETRANS LD réalise des centaines de transferts aéroport chaque année pour des particuliers et des entreprises du Loiret.",
                },
                {
                  icon: "📞",
                  title: "Joignable 24h/24",
                  desc: "Un numéro direct, un interlocuteur réel. Pas de bot, pas de formulaire. En cas d'imprévu (vol annulé, retard), nous trouvons une solution.",
                },
                {
                  icon: "💼",
                  title: "Clients entreprises (L'Oréal, Servier, FedEx…)",
                  desc: "Nos clients professionnels nous font confiance pour les déplacements de leurs collaborateurs. Facturation mensuelle disponible.",
                },
                {
                  icon: "🚗",
                  title: "Véhicules premium, sans surprise",
                  desc: "Berlines confortables pour 1 à 3 passagers, vans pour les groupes. Climatisation, eau à bord, bagages sécurisés.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-black text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black text-slate-900 mb-10">
              Questions fréquentes — Navette Orléans Orly
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Quel est le prix d'une navette Orléans → Orly ?",
                  a: "Le tarif est de 180€ en prix fixe pour 1 à 3 passagers avec bagages standards. Ce prix est garanti à la réservation, sans surprise liée au trafic.",
                },
                {
                  q: "Combien de temps dure le trajet Orléans → Orly ?",
                  a: "Le trajet dure environ 1h15 à 1h45 selon la circulation et votre point de départ dans l'agglomération. Nous calculons l'heure de départ pour vous garantir d'être à l'aéroport au moins 2h avant votre vol.",
                },
                {
                  q: "Depuis quelles villes du Loiret peut-on réserver ?",
                  a: "Nous prenons en charge les passagers depuis Orléans, Saran, Fleury-les-Aubrais, Olivet, Saint-Jean-de-Braye, La Chapelle-Saint-Mesmin, Meung-sur-Loire et l'ensemble du Loiret.",
                },
                {
                  q: "Le chauffeur attend-il en cas de retard de vol ?",
                  a: "Oui, l'attente est gratuite jusqu'à 35 minutes. Nous suivons les arrivées de vols en temps réel quand vous fournissez votre numéro de vol.",
                },
                {
                  q: "Peut-on réserver une navette retour depuis Orly vers Orléans ?",
                  a: "Oui, nous assurons le trajet retour Orly → Orléans au même tarif de 180€. Précisez votre vol de retour au moment de la réservation.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-slate-50 rounded-xl border border-slate-100 p-5">
                  <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-start justify-between gap-3">
                    {q}
                    <span className="text-blue-700 shrink-0 mt-0.5 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* AUTRES TRAJETS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Nos autres navettes aéroport depuis Orléans</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/navette-orleans-roissy-cdg"
                className="block bg-white rounded-xl border border-slate-100 shadow-sm p-5 hover:border-blue-200 hover:shadow-md transition group"
              >
                <div className="font-black text-slate-900 group-hover:text-blue-700 transition">
                  Navette Orléans → Roissy CDG
                </div>
                <div className="text-slate-500 text-sm mt-1">Dès 210€ · Prix fixe garanti</div>
              </Link>
              <Link
                href="/vtc"
                className="block bg-white rounded-xl border border-slate-100 shadow-sm p-5 hover:border-blue-200 hover:shadow-md transition group"
              >
                <div className="font-black text-slate-900 group-hover:text-blue-700 transition">
                  VTC & Chauffeur privé — tous trajets
                </div>
                <div className="text-slate-500 text-sm mt-1">Paris, gares, hôtels, entreprises</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-black mb-4">
              Réservez votre navette Orléans → Orly
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Réponse garantie en moins de 2h. Prix fixe confirmé par SMS ou email.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0634605799"
                className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-black text-base hover:bg-blue-50 transition shadow-xl"
              >
                📞 06 34 60 57 99
              </a>
              <Link
                href="/vtc#booking"
                className="flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-full font-black text-base hover:bg-blue-800 transition shadow-xl"
              >
                Formulaire de réservation →
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER MINIMAL */}
        <footer className="py-8 bg-slate-900 text-slate-400 text-center text-sm">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/" className="font-black text-white">MAPETRANS LD</Link>
            {" "}· Transport & Logistique · Orléans, Loiret ·{" "}
            <a href="tel:0634605799" className="hover:text-white transition">06 34 60 57 99</a>
            <div className="mt-2 flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/vtc" className="hover:text-white transition">VTC & Navettes</Link>
              <Link href="/navette-orleans-roissy-cdg" className="hover:text-white transition">Navette Roissy CDG</Link>
              <Link href="/logistique" className="hover:text-white transition">Logistique</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
              <Link href="/mentions-legales" className="hover:text-white transition">Mentions légales</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
