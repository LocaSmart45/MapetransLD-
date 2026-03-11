import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Truck,
  Users,
  Box,
  Phone,
} from "lucide-react";
import Link from "next/link";
import NavHeader from "@/app/components/NavHeader";
import HomeHero from "@/app/components/HomeHero";
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: "VTC Orléans & Navette Aéroport | MAPETRANS LD — Loiret",
  description:
    "Chauffeur privé VTC à Orléans : navette Orly dès 180€, navette Roissy CDG dès 210€, transport express & déménagement. Prix fixe, 24h/24 7j/7. Devis gratuit.",
  keywords: [
    "VTC Orléans",
    "navette aéroport Orléans",
    "navette Orly Orléans",
    "navette Roissy CDG Orléans",
    "chauffeur privé Orléans",
    "transport Loiret",
    "déménagement Orléans",
    "transport express Orléans",
  ],
  alternates: { canonical: "https://www.mapetransld.com" },
  openGraph: {
    title: "VTC Orléans & Navette Aéroport | MAPETRANS LD",
    description:
      "Navette Orly dès 180€, Roissy CDG dès 210€. Chauffeur privé, transport express, déménagement. Basé à Orléans, disponible 24h/24.",
    url: "https://www.mapetransld.com",
    siteName: "Mapetrans LD",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "VTC Orléans - Navette aéroport MAPETRANS LD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VTC Orléans & Navette Aéroport | MAPETRANS LD",
    description: "Navette Orly dès 180€, Roissy CDG dès 210€. Chauffeur privé Orléans 24h/24.",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "name": "MAPETRANS LD",
  "description": "Société de transport et logistique basée à Orléans (Loiret). VTC & navettes aéroport, fret express, déménagement. Disponible 24h/24 7j/7.",
  "url": "https://www.mapetransld.com",
  "telephone": "+33634605799",
  "email": "contact@mapetransld.com",
  "priceRange": "€€",
  "image": "https://www.mapetransld.com/icon.svg",
  "logo": "https://www.mapetransld.com/icon.svg",
  "foundingDate": "2013",
  "areaServed": [
    { "@type": "City", "name": "Orléans" },
    { "@type": "AdministrativeArea", "name": "Loiret" },
    { "@type": "AdministrativeArea", "name": "Centre-Val de Loire" },
    { "@type": "Country", "name": "France" }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "105 Route Nationale 20",
    "addressLocality": "Cercottes",
    "addressRegion": "Centre-Val de Loire",
    "postalCode": "45520",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.9029,
    "longitude": 1.9039
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5"
  },
  "sameAs": [
    "https://www.mapetransld.com"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services MAPETRANS LD",
    "itemListElement": [
      {
        "@type": "Offer",
        "url": "https://www.mapetransld.com/vtc",
        "itemOffered": { "@type": "Service", "name": "VTC & Chauffeur Privé Orléans", "description": "Chauffeur privé VTC à Orléans, disponible 24h/24. Berline haut de gamme, tarifs fixes." }
      },
      {
        "@type": "Offer",
        "url": "https://www.mapetransld.com/navette-orleans-orly",
        "itemOffered": { "@type": "Service", "name": "Navette Orléans Orly", "description": "Navette privée Orléans → Orly à partir de 180€. Prix fixe, chauffeur professionnel." }
      },
      {
        "@type": "Offer",
        "url": "https://www.mapetransld.com/navette-orleans-roissy-cdg",
        "itemOffered": { "@type": "Service", "name": "Navette Orléans Roissy CDG", "description": "Navette privée Orléans → Roissy CDG à partir de 210€. Prix fixe, 24h/24." }
      },
      {
        "@type": "Offer",
        "url": "https://www.mapetransld.com/vtc-orleans-paris",
        "itemOffered": { "@type": "Service", "name": "VTC Orléans Paris", "description": "Trajet Orléans–Paris en berline privée. 1h30, prix fixe, chauffeur pro." }
      },
      {
        "@type": "Offer",
        "url": "https://www.mapetransld.com/chauffeur-mariage-evenement-orleans",
        "itemOffered": { "@type": "Service", "name": "Chauffeur Mariage & Événement Orléans", "description": "Chauffeur privé pour mariages et événements à Orléans. Véhicule haut de gamme, discrétion garantie." }
      },
      {
        "@type": "Offer",
        "url": "https://www.mapetransld.com/logistique",
        "itemOffered": { "@type": "Service", "name": "Transport & Logistique Fret", "description": "Fret express France & Europe depuis Orléans. Livraison J+1, traçabilité en temps réel." }
      },
      {
        "@type": "Offer",
        "url": "https://www.mapetransld.com/demenagement",
        "itemOffered": { "@type": "Service", "name": "Déménagement Orléans & Loiret", "description": "Déménagement clé en main à Orléans. Emballage, transport, garde-meuble." }
      }
    ]
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <NavHeader ctaLabel="Devis Express" ctaHref="/vtc#booking" />
      <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">
        {/* ARRIÈRE-PLAN */}
        <div className="absolute top-0 left-0 w-full h-[620px] bg-white -z-10 border-b border-slate-200">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top,_#1d4ed8_0,_transparent_55%),linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:100%_100%,40px_40px,40px_40px]" />
        </div>

        {/* === 1. HERO ACCUEIL ANIMÉ (Client Component) === */}
        <HomeHero />

        {/* === 2. BLOC : PLUS QU'UN TRANSPORTEUR === */}
        <section className="max-w-7xl mx-auto px-4 w-full mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Bloc texte */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">
                Plus qu&apos;un simple transporteur
              </h2>
              <div className="w-16 h-[3px] bg-blue-700 rounded-full" />
              <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                MAPETRANS LD est une entreprise de transport indépendante basée à
                Orléans. Nous avons fait le choix de privilégier le service, la
                proximité et la qualité plutôt que les plateformes
                impersonnelles. Chaque mission est suivie, préparée et réalisée
                avec la même exigence, qu&apos;il s&apos;agisse d&apos;une navette
                aéroport, d&apos;un déménagement familial ou d&apos;un transport
                express pour une entreprise.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                Nous accompagnons au quotidien les particuliers et les
                professionnels du Loiret, avec une connaissance fine du
                territoire, des contraintes horaires et des impératifs métiers.
                Vous disposez d&apos;un interlocuteur unique, capable d&apos;
                organiser et de coordonner l&apos;ensemble de vos besoins en
                mobilité et en logistique.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-2 text-[11px] text-slate-600">
                <div className="bg-white border border-slate-200 rounded-xl p-3">
                  <div className="font-bold text-slate-900 mb-1">Particuliers</div>
                  <p>Navettes aéroports, retours de soirées, déménagements et transferts longue distance.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3">
                  <div className="font-bold text-slate-900 mb-1">Professionnels</div>
                  <p>Déplacements collaborateurs, clients VIP, transport express de marchandises, événements.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3">
                  <div className="font-bold text-slate-900 mb-1">Sur mesure</div>
                  <p>Organisation complète, horaires adaptés, suivi personnalisé, solutions récurrentes ou ponctuelles.</p>
                </div>
              </div>
            </div>

            {/* Bloc domaines d'intervention */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.25em]">
                Nos domaines d&apos;intervention
              </h3>

              <div className="space-y-4">
                <Link
                  href="/vtc"
                  className="group block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-600 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="text-sm font-black uppercase text-slate-900">VTC &amp; Navettes Aéroports</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Orléans &rarr; Orly, Roissy, gares parisiennes &amp; grandes distances.</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Transferts privés, navettes collaborateurs, prise en charge personnalisée à domicile ou en entreprise, 7j/7.</p>
                </Link>

                <Link
                  href="/logistique"
                  className="group block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-600 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Truck className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="text-sm font-black uppercase text-slate-900">Transport &amp; Logistique</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Courses express, tournées régulières et transport dédié.</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Livraison urgente de pièces, documents et marchandises sensibles, avec suivi et interlocuteur unique.</p>
                </Link>

                <Link
                  href="/demenagement"
                  className="group block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-600 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Box className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="text-sm font-black uppercase text-slate-900">Déménagement &amp; Stockage</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Déménagements locaux &amp; nationaux, garde-meubles.</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Accompagnement complet, de la préparation à l&apos;installation, avec des solutions de stockage adaptées.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === 3. BLOC : ENGAGEMENTS & RASSURANCE === */}
        <section className="max-w-7xl mx-auto px-4 w-full mb-20">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-start">
              <div>
                <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                  Engagements &amp; conformité
                </span>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-4">
                  Une entreprise de transport
                  <br />
                  fiable &amp; déclarée
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  Tous nos véhicules et chauffeurs sont déclarés, assurés et contrôlés.
                  Nous travaillons dans le respect des réglementations VTC et transport
                  de marchandises, pour une collaboration sereine, transparente et durable.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Que vous soyez un particulier ou une entreprise, vous bénéficiez des
                  mêmes garanties de ponctualité, de sécurité et de suivi. Un interlocuteur
                  dédié coordonne vos demandes, de la première prise de contact jusqu&apos;à
                  la facturation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="font-bold">Licences &amp; assurances</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">Véhicules conformes, chauffeurs déclarés, assurances à jour pour le transport de personnes et de marchandises.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="font-bold">Réactivité 24h/24</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">Astreinte de nuit, gestion des urgences, prises en charge tôt le matin, tard le soir, week-ends et jours fériés.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="font-bold">Ancrage local</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">Une entreprise basée à Orléans, qui connaît le terrain, les accès, les zones d&apos;activités et les contraintes locales.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="font-bold">Contact direct</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">Pas de plateforme anonyme : une ligne directe et une équipe disponible pour répondre à vos demandes spécifiques.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === AVIS CLIENTS === */}
        <section className="bg-slate-50 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-[0.3em] mb-3">Ce qu&apos;ils disent de nous</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">Ils nous font confiance</h2>
              <div className="flex items-center justify-center gap-1 mt-4">
                {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-xl">★</span>)}
                <span className="ml-2 text-slate-500 text-sm font-medium">4.9 / 5 — 47 avis vérifiés</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  nom: "Sophie M.",
                  trajet: "Orléans → Orly",
                  texte: "Chauffeur ponctuel, véhicule impeccable et très professionnel. J'utilise MAPETRANS LD pour tous mes déplacements professionnels. Je recommande vivement.",
                  note: 5,
                },
                {
                  nom: "Jean-Pierre L.",
                  trajet: "Client entreprise",
                  texte: "Nous faisons appel à eux régulièrement pour le transport de nos collaborateurs. Fiables, réactifs et toujours disponibles même en urgence. Excellent service.",
                  note: 5,
                },
                {
                  nom: "Isabelle R.",
                  trajet: "Orléans → CDG",
                  texte: "Première fois que j'utilisais un VTC pour l'aéroport. Le chauffeur était là 10 minutes en avance, très agréable. Prix clair, aucune surprise. À refaire sans hésiter.",
                  note: 5,
                },
              ].map((avis) => (
                <div key={avis.nom} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">★</span>)}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">&ldquo;{avis.texte}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-sm">
                      {avis.nom.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{avis.nom}</p>
                      <p className="text-slate-400 text-xs">{avis.trajet}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FAQ + RICH SNIPPET === */}
        <section className="bg-slate-50 py-20 px-4">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Quel est le prix d'une navette Orléans → Orly ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "La navette Orléans–Orly est à partir de 180 € en berline privée, prix fixe sans supplément. Réservation 24h/24 au 06 34 60 57 99." }
                },
                {
                  "@type": "Question",
                  "name": "Quel est le tarif pour une navette Orléans → Roissy CDG ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "La navette Orléans–Roissy CDG est à partir de 210 € en berline privée, prix fixe. Disponible 24h/24, 7j/7 avec chauffeur professionnel." }
                },
                {
                  "@type": "Question",
                  "name": "MAPETRANS LD est-il disponible la nuit et le week-end ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Oui, nous sommes disponibles 24h/24, 7j/7, y compris les nuits, week-ends et jours fériés. Appelez le 06 34 60 57 99 pour toute urgence ou réservation." }
                },
                {
                  "@type": "Question",
                  "name": "Proposez-vous des tarifs pour les entreprises ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Oui, MAPETRANS LD propose des comptes entreprises avec facturation mensuelle, tarifs négociés et interlocuteur dédié. Contactez-nous via le formulaire entreprises pour un devis sous 2h." }
                },
                {
                  "@type": "Question",
                  "name": "Faites-vous du transport de marchandises et du déménagement ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Oui, en plus du VTC, nous assurons le transport de marchandises (fret express France & Europe) et le déménagement clé en main. Contactez notre équipe transport au 07 49 70 95 77." }
                },
                {
                  "@type": "Question",
                  "name": "Quelle zone géographique couvrez-vous ?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Basés à Orléans (Loiret), nous intervenons dans tout le Centre-Val de Loire, l'Île-de-France et partout en France et en Europe pour le fret. Aucun déplacement trop loin pour nous." }
                }
              ]
            })}}
          />
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-[0.3em] mb-3">Questions fréquentes</p>
              <h2 className="text-3xl font-black text-slate-900 uppercase">Tout ce que vous devez savoir</h2>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: "Quel est le prix d'une navette Orléans → Orly ?",
                  a: "À partir de 180 € en berline privée, prix fixe sans supplément. Réservation 24h/24 au 06 34 60 57 99."
                },
                {
                  q: "Quel est le tarif pour une navette Orléans → Roissy CDG ?",
                  a: "À partir de 210 € en berline privée, prix fixe. Disponible 24h/24, 7j/7 avec chauffeur professionnel."
                },
                {
                  q: "Êtes-vous disponibles la nuit et le week-end ?",
                  a: "Oui, 24h/24, 7j/7 — nuits, week-ends et jours fériés inclus. Appelez le 06 34 60 57 99 pour toute urgence."
                },
                {
                  q: "Proposez-vous des tarifs entreprises ?",
                  a: "Oui : compte entreprise, facturation mensuelle, tarifs négociés et interlocuteur dédié. Devis sous 2h via notre formulaire entreprises."
                },
                {
                  q: "Faites-vous du transport de marchandises et du déménagement ?",
                  a: "Oui, en plus du VTC nous gérons le fret express France & Europe et le déménagement clé en main. Contactez le 07 49 70 95 77."
                },
                {
                  q: "Quelle zone géographique couvrez-vous ?",
                  a: "Basés à Orléans, nous intervenons dans tout le Centre-Val de Loire, l'Île-de-France et toute la France/Europe pour le fret."
                },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-bold text-slate-900 text-sm hover:text-blue-700 transition">
                    {q}
                    <span className="text-blue-700 text-xl font-black shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* === BANDEAU PARTENAIRES === */}
        <section className="border-t border-b border-slate-100 bg-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Ils nous font confiance</p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {[
                { nom: "FedEx", logo: "/logos/FedEx.png", width: "w-24" },
                { nom: "Darty", logo: "/logos/Darty.png", width: "w-20" },
                { nom: "LOreal", logo: "/logos/Loreal.png", width: "w-24" },
                { nom: "Servier", logo: "/logos/Servier.png", width: "w-28" },
              ].map((p) => (
                <img key={p.nom} src={p.logo} alt={p.nom} className={`${p.width} object-contain grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300`} />
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
