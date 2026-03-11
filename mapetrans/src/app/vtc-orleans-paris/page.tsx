import type { Metadata } from "next";
import Link from "next/link";
import NavHeader from "@/app/components/NavHeader";
import { CheckCircle, Phone, ArrowRight, Clock, MapPin, Train } from "lucide-react";

export const metadata: Metadata = {
  title: "VTC Orléans Paris | Trajet Orléans → Paris Prix Fixe | MAPETRANS LD",
  description:
    "VTC Orléans Paris en berline privée. Trajet Orléans → Paris en 1h30, prise en charge à domicile, chauffeur professionnel. Prix fixe, disponible 24h/24. Devis gratuit.",
  keywords: [
    "VTC Orléans Paris",
    "trajet Orléans Paris voiture",
    "chauffeur privé Orléans Paris",
    "transfert Orléans Paris prix fixe",
    "VTC Orléans gare Montparnasse",
    "navette Orléans Paris",
    "transfert Orléans Paris entreprise",
  ],
  alternates: { canonical: "https://www.mapetransld.com/vtc-orleans-paris" },
  openGraph: {
    title: "VTC Orléans Paris | Berline Privée Prix Fixe | MAPETRANS LD",
    description: "Trajet Orléans → Paris en berline privée. 1h30, prix fixe, chauffeur pro 24h/24.",
    url: "https://www.mapetransld.com/vtc-orleans-paris",
    siteName: "Mapetrans LD",
    locale: "fr_FR",
    type: "website",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "VTC Orléans Paris — Transfert Privé",
  "description": "Chauffeur privé VTC pour le trajet Orléans vers Paris. Berline ou van, prix fixe, prise en charge à domicile.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "MAPETRANS LD",
    "telephone": "+33634605799",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cercottes",
      "postalCode": "45520",
      "addressCountry": "FR",
    },
  },
  "areaServed": [
    { "@type": "City", "name": "Orléans" },
    { "@type": "City", "name": "Paris" },
    { "@type": "AdministrativeArea", "name": "Loiret" },
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte un VTC Orléans Paris ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le tarif d'un VTC Orléans Paris démarre à partir de 150€ en berline pour 1 à 3 passagers. Le prix est fixé à l'avance, aucune surprise. Contactez-nous pour un devis personnalisé selon votre destination exacte à Paris.",
      },
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure le trajet Orléans Paris en VTC ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le trajet Orléans Paris en VTC dure environ 1h30 depuis le centre d'Orléans, selon le trafic et votre destination parisienne (Montparnasse, La Défense, aéroports, etc.).",
      },
    },
    {
      "@type": "Question",
      "name": "VTC Orléans Paris : est-ce moins cher que le train ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le VTC est compétitif pour 2 personnes ou plus, car le tarif est par véhicule. Il offre en plus la prise en charge à domicile, sans métro ni bagage à porter, ce que le train ne peut pas offrir.",
      },
    },
    {
      "@type": "Question",
      "name": "Proposez-vous des navettes régulières Orléans Paris pour les entreprises ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Nous proposons des navettes récurrentes Orléans Paris pour les entreprises avec facturation mensuelle et tarifs négociés. Idéal pour les déplacements hebdomadaires vers Paris.",
      },
    },
  ],
};

export default function VtcOrleansParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <NavHeader ctaLabel="Devis Gratuit" ctaHref="/vtc#booking" />
      <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">
        {/* HERO */}
        <section className="bg-slate-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Prix fixe garanti</span>
              <span className="text-slate-400 text-xs">↔ 130 km</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
              VTC Orléans → Paris<br />
              <span className="text-blue-400">en Berline Privée</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mb-4">
              Trajet Orléans Paris en 1h30 avec un chauffeur professionnel, prise en charge à votre domicile ou entreprise. Prix fixe confirmé avant la course — pas de compteur, pas de surprise.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-8">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400" /> Disponible 24h/24 – 7j/7</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> Prise en charge à domicile</div>
              <div className="flex items-center gap-2"><Train className="w-4 h-4 text-blue-400" /> Toutes destinations parisiennes</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0634605799" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition">
                <Phone className="w-4 h-4" /> Devis immédiat
              </a>
              <Link href="/vtc#booking" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition">
                Réserver en ligne <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* AVANTAGES VTC vs TRAIN */}
        <section className="max-w-4xl mx-auto px-4 w-full py-16">
          <h2 className="text-2xl font-black uppercase text-slate-900 mb-2">VTC Orléans Paris vs Train</h2>
          <p className="text-sm text-slate-500 mb-10">Pourquoi choisir un chauffeur privé pour le trajet Orléans – Paris ?</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                titre: "Porte à porte",
                desc: "Prise en charge à votre domicile ou bureau à Orléans, dépôt à l'adresse exacte à Paris. Zéro taxi, zéro métro avec vos bagages.",
                icon: <MapPin className="w-6 h-6 text-blue-600" />,
              },
              {
                titre: "Jusqu'à 6 passagers",
                desc: "En berline (3 pass.) ou van (6 pass.), le tarif est par véhicule — pas par personne. Dès 2 personnes, le VTC est souvent moins cher que 2 billets TGV.",
                icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
              },
              {
                titre: "Flexible & fiable",
                desc: "Départ à l'heure que vous choisissez. Escales possibles (Versailles, La Défense…). Aucun retard ferroviaire, aucune grève.",
                icon: <Clock className="w-6 h-6 text-blue-600" />,
              },
            ].map(({ titre, desc, icon }) => (
              <div key={titre} className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="mb-3">{icon}</div>
                <div className="font-black text-sm uppercase text-slate-900 mb-2">{titre}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Destinations Paris */}
          <h3 className="font-black uppercase text-sm text-slate-700 mb-4">Destinations desservies à Paris</h3>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-600">
            {[
              { lieu: "Gare de Lyon", info: "TGV vers Lyon, Marseille, Nice" },
              { lieu: "Gare Montparnasse", info: "TGV vers Bordeaux, Nantes, Rennes" },
              { lieu: "Gare du Nord", info: "Eurostar, Thalys, TER" },
              { lieu: "La Défense", info: "Quartier d'affaires" },
              { lieu: "Paris centre (1er–8e)", info: "Hôtels, sièges sociaux, événements" },
              { lieu: "Orly & Roissy CDG", info: "Connexions vols internationaux" },
            ].map(({ lieu, info }) => (
              <div key={lieu} className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl p-3">
                <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">{lieu}</div>
                  <div className="text-slate-400">{info}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 w-full pb-16">
          <h2 className="text-xl font-black uppercase text-slate-900 mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Combien coûte un VTC Orléans Paris ?",
                a: "Le tarif démarre à partir de 150€ en berline pour 1 à 3 passagers. Prix fixe confirmé avant la course. Contactez-nous pour un devis selon votre destination exacte.",
              },
              {
                q: "Combien de temps dure le trajet Orléans Paris en VTC ?",
                a: "Environ 1h30 depuis le centre d'Orléans, hors trafic dense. Le chauffeur anticipe les conditions routières pour garantir votre ponctualité.",
              },
              {
                q: "Proposez-vous des navettes régulières Orléans Paris pour les entreprises ?",
                a: "Oui. Navettes hebdomadaires ou quotidiennes avec facturation mensuelle et tarifs dégressifs. Idéal pour les cadres et équipes commerciales basés dans le Loiret.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="font-bold text-sm text-slate-900 mb-2">{q}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-700 text-white py-12 px-6 mt-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-black uppercase mb-3">Réservez votre VTC Orléans Paris</h2>
            <p className="text-blue-100 text-sm mb-8">Devis gratuit et immédiat. Prix confirmé avant la course.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0634605799" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-50 transition">
                <Phone className="w-4 h-4" /> 06 34 60 57 99
              </a>
              <Link href="/vtc#booking" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-black transition">
                Réserver <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <footer className="bg-black text-white py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-wide gap-4">
            <span>Copyright 2025, Mapetrans LD. Tous droits réservés.</span>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-slate-400 transition">Mentions Légales</Link>
              <Link href="/confidentialite" className="hover:text-slate-400 transition">Politique de Confidentialité</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
