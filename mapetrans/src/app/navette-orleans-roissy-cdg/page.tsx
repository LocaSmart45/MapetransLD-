import type { Metadata } from "next";
import Link from "next/link";
import NavHeader from "@/app/components/NavHeader";

export const metadata: Metadata = {
  title: "Navette Orléans → Roissy CDG | Prix Fixe 210€ | MAPETRANS LD",
  description:
    "Navette privée Orléans – Aéroport Roissy Charles de Gaulle dès 210€. Prix fixe garanti, chauffeur privé 24h/24 7j/7, départ depuis tout le Loiret. Réservez en 2 minutes.",
  alternates: {
    canonical: "https://www.mapetransld.com/navette-orleans-roissy-cdg",
  },
  openGraph: {
    title: "Navette Orléans → Roissy CDG | Prix Fixe 210€ | MAPETRANS LD",
    description:
      "Transfert privé Orléans – Roissy Charles de Gaulle dès 210€. Chauffeur professionnel, ponctualité garantie, disponible 24h/24.",
    url: "https://www.mapetransld.com/navette-orleans-roissy-cdg",
    siteName: "MAPETRANS LD",
    locale: "fr_FR",
    type: "website",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Navette Orléans → Aéroport Roissy Charles de Gaulle (CDG)",
  description:
    "Transfert privé en voiture avec chauffeur depuis Orléans et le Loiret vers l'aéroport Roissy Charles de Gaulle (CDG). Prix fixe 210€.",
  url: "https://www.mapetransld.com/navette-orleans-roissy-cdg",
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
    name: "Navette Orléans → Roissy CDG (1-3 passagers)",
    price: "210",
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
      name: "Quel est le prix d'une navette Orléans → Roissy CDG ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le tarif est de 210€ en prix fixe pour 1 à 3 passagers avec bagages standards. Ce prix est garanti à la réservation, sans supplément trafic.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure le trajet Orléans → Roissy CDG ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le trajet Orléans–Roissy CDG dure environ 1h45 à 2h15 selon la circulation et votre point de départ. Nous planifions le départ pour garantir votre arrivée 2h avant le vol.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre Orly et Roissy CDG depuis Orléans ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roissy CDG est plus éloigné d'Orléans (environ 130 km contre 100 km pour Orly) et dessert davantage de compagnies internationales. Le trajet est plus long et le tarif est de 210€ contre 180€ pour Orly.",
      },
    },
    {
      "@type": "Question",
      name: "Le chauffeur attend-il en cas de retard de vol à Roissy ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, l'attente est gratuite jusqu'à 35 minutes. Nous suivons votre vol en temps réel. Pour les vols très retardés, nous nous adaptons et trouvons une solution.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on réserver pour un groupe de 4 personnes ou plus ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, pour 4 à 8 passagers nous proposons des vans et minibus. Contactez-nous directement pour un devis adapté à votre groupe.",
      },
    },
  ],
};

export default function NavetteOrleansRoissyCDGPage() {
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
              Navette Orléans → Roissy CDG
              <span className="block text-blue-700 mt-1">dès 210€</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Transfert privé depuis Orléans et tout le Loiret vers l&apos;aéroport Roissy Charles de Gaulle
              (Terminal 1, 2 ou 3). Chauffeur professionnel, ponctualité garantie, disponible 24h/24 et 7j/7.
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
              Tarif & détails du trajet Orléans – Roissy CDG
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="text-4xl font-black text-blue-700 mb-2">210€</div>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">Prix fixe</div>
                <div className="text-slate-500 text-sm">1 à 3 passagers · bagages inclus</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="text-4xl font-black text-slate-900 mb-2">~2h</div>
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
                  "Prise en charge au Terminal 1, 2A, 2B, 2C, 2D, 2E, 2F ou 3 selon votre vol",
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
              <h3 className="font-black text-blue-900 mb-2">Roissy CDG : quel terminal ?</h3>
              <p className="text-blue-800 text-sm">
                Roissy Charles de Gaulle possède plusieurs terminaux (T1, T2A-F, T3). Précisez votre
                compagnie aérienne lors de la réservation afin que votre chauffeur vous dépose ou
                vous récupère au bon terminal.
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
              Notre navette Orléans–Roissy CDG dessert l&apos;ensemble de l&apos;agglomération orléanaise
              et du département du Loiret. Prise en charge à domicile, en hôtel ou en entreprise.
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
              Pourquoi choisir MAPETRANS LD pour votre navette Roissy CDG ?
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Le trajet Orléans–Roissy CDG est plus exigeant qu&apos;Orléans–Orly : trajet plus long,
              trafic francilien dense, multiples terminaux. MAPETRANS LD connaît parfaitement ce trajet
              et anticipe les aléas pour vous garantir l&apos;embarquement.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🕐",
                  title: "Ponctualité absolue",
                  desc: "Nous calcul le départ 30 minutes avant l'heure optimale pour absorber les imprévus sur la A10 et la Francilienne. Votre vol ne vous attend pas — nous si.",
                },
                {
                  icon: "📞",
                  title: "Joignable en permanence",
                  desc: "Numéro direct, disponible 24h/24. Modification de dernière minute, vol avancé ? Appelez, nous gérons.",
                },
                {
                  icon: "💼",
                  title: "Habitués des clients pro",
                  desc: "L'Oréal, Servier, FedEx, Darty nous font confiance pour leurs cadres et collaborateurs. Facturation entreprise disponible.",
                },
                {
                  icon: "🚐",
                  title: "Vans pour groupes & familles",
                  desc: "Départ en famille avec beaucoup de bagages ? Groupe d'entreprise ? Nos vans accueillent jusqu'à 8 passagers.",
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
              Questions fréquentes — Navette Orléans Roissy CDG
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Quel est le prix d'une navette Orléans → Roissy CDG ?",
                  a: "Le tarif est de 210€ en prix fixe pour 1 à 3 passagers avec bagages standards. Ce prix est garanti à la réservation, sans supplément trafic.",
                },
                {
                  q: "Combien de temps dure le trajet Orléans → Roissy CDG ?",
                  a: "Le trajet dure environ 1h45 à 2h15 selon la circulation et votre point de départ. Nous planifions l'heure de départ pour vous garantir d'arriver 2h avant votre vol.",
                },
                {
                  q: "Quelle est la différence entre Orly et Roissy CDG depuis Orléans ?",
                  a: "Roissy CDG est plus éloigné (environ 130 km contre 100 km pour Orly). Le tarif est de 210€ contre 180€ pour Orly. Roissy dessert plus de compagnies internationales et de vols long-courrier.",
                },
                {
                  q: "Le chauffeur attend-il en cas de retard de vol à Roissy ?",
                  a: "Oui, l'attente est gratuite jusqu'à 35 minutes. Nous suivons votre vol en temps réel. Pour les vols très retardés, nous nous adaptons et trouvons une solution.",
                },
                {
                  q: "Peut-on réserver pour un groupe de 4 personnes ou plus ?",
                  a: "Oui, pour 4 à 8 passagers nous proposons des vans et minibus. Contactez-nous directement pour un devis adapté à votre groupe.",
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
                href="/navette-orleans-orly"
                className="block bg-white rounded-xl border border-slate-100 shadow-sm p-5 hover:border-blue-200 hover:shadow-md transition group"
              >
                <div className="font-black text-slate-900 group-hover:text-blue-700 transition">
                  Navette Orléans → Aéroport d&apos;Orly
                </div>
                <div className="text-slate-500 text-sm mt-1">Dès 180€ · Prix fixe garanti</div>
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
              Réservez votre navette Orléans → Roissy CDG
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
              <Link href="/navette-orleans-orly" className="hover:text-white transition">Navette Orly</Link>
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
