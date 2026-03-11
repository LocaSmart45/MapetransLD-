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
  Mail,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import NavHeader from "@/app/components/NavHeader";
import HomeHero from "@/app/components/HomeHero";

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
  "@type": "LocalBusiness",
  "name": "MAPETRANS LD",
  "description": "Société de transport et logistique basée à Orléans (Loiret). VTC & navettes aéroport, fret express, déménagement.",
  "url": "https://www.mapetransld.com",
  "telephone": "+33634605799",
  "email": "contact@mapetransld.com",
  "priceRange": "€€",
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
  "sameAs": ["https://www.mapetransld.com"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services MAPETRANS LD",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VTC & Navettes Aéroport Orléans", "description": "Navette privée Orléans vers Orly dès 180€ et Roissy CDG dès 210€. Prix fixe garanti." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transport & Logistique Fret" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Déménagement & Garde-meubles Orléans" } }
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
        <footer className="mt-auto">
          <div className="bg-blue-700 text-white py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex flex-col">
                <span className="text-lg font-bold">Une demande précise ? Des conditions particulières ?</span>
                <span className="text-blue-100 text-sm mt-1">Contactez-nous dès maintenant, réponse immédiate garantie.</span>
              </div>
              <a
                href="tel:0634605799"
                className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                CONTACT RAPIDE
              </a>
            </div>
          </div>

          <div id="contact" className="bg-black text-white py-12 px-6 border-b border-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="flex flex-col leading-none mb-6">
                  <span className="text-xl font-black tracking-tighter text-white">MAPETRANS <span className="text-blue-700">.LD</span></span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Solutions de Transport</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed text-justify">
                  Partenaire expert basé à Orléans. Nous assurons vos transports critiques, navettes VIP et déménagements avec une exigence de qualité unique. Licences et assurances à jour.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">Nos Services</h3>
                <div className="flex flex-col gap-3 text-sm font-medium text-slate-400">
                  <Link href="/agence" className="flex items-center gap-2 hover:text-white transition group">
                    <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> L&apos;Agence
                  </Link>
                  <Link href="/vtc" className="flex items-center gap-2 hover:text-white transition group">
                    <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> VTC &amp; Chauffeurs
                  </Link>
                  <Link href="/logistique" className="flex items-center gap-2 hover:text-white transition group">
                    <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Logistique &amp; Fret
                  </Link>
                  <Link href="/demenagement" className="flex items-center gap-2 hover:text-white transition group">
                    <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Déménagement
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">Nous Contacter</h3>
                <div className="flex flex-col gap-4 text-sm font-bold">
                  <a href="tel:0634605799" className="flex items-center gap-3 hover:text-blue-400 transition">
                    <Phone className="w-4 h-4 text-blue-600" /> 06 34 60 57 99
                  </a>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Phone className="w-4 h-4 text-blue-600" /> 09 59 07 04 33
                  </div>
                  <a href="mailto:contact@mapetransld.com" className="flex items-center gap-3 hover:text-blue-400 transition">
                    <Mail className="w-4 h-4 text-blue-600" /> contact@mapetransld.com
                  </a>
                  <div className="flex items-center gap-3 text-slate-400 mt-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> Orléans &amp; France Entière
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black py-6 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-wide gap-4">
              <span>Copyright 2025, Mapetrans LD. Tous droits réservés.</span>
              <div className="flex gap-6">
                <Link href="/mentions-legales" className="hover:text-slate-400 transition">Mentions Légales</Link>
                <Link href="/confidentialite" className="hover:text-slate-400 transition">Politique de Confidentialité</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
