import type { Metadata } from "next";
import Link from "next/link";
import NavHeader from "@/app/components/NavHeader";
import { CheckCircle, Phone, ArrowRight, Clock, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs VTC Orléans 2025 | Prix Navette Aéroport | MAPETRANS LD",
  description:
    "Tarifs VTC Orléans : navette Orly dès 180€, Roissy CDG dès 210€. Prix fixe garanti, aucune surprise. Devis gratuit en 2 minutes pour tout trajet depuis Orléans et le Loiret.",
  keywords: [
    "tarif VTC Orléans",
    "prix navette aéroport Orléans",
    "tarif navette Orly Orléans",
    "tarif navette Roissy Orléans",
    "prix chauffeur privé Orléans",
    "tarif transfert aéroport Loiret",
  ],
  alternates: { canonical: "https://www.mapetransld.com/tarifs-vtc-orleans" },
  openGraph: {
    title: "Tarifs VTC Orléans 2025 | Prix Navette Aéroport | MAPETRANS LD",
    description: "Navette Orly dès 180€, Roissy CDG dès 210€. Prix fixe, aucune surprise.",
    url: "https://www.mapetransld.com/tarifs-vtc-orleans",
    siteName: "Mapetrans LD",
    locale: "fr_FR",
    type: "website",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "VTC & Navette Aéroport Orléans — Tarifs 2025",
  "description": "Tarifs fixes pour navettes aéroport et VTC depuis Orléans et le Loiret. Orly dès 180€, Roissy CDG dès 210€.",
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
    { "@type": "AdministrativeArea", "name": "Loiret" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Forfaits VTC Orléans",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Navette Orléans → Aéroport d'Orly",
        "price": "180",
        "priceCurrency": "EUR",
        "description": "Transfert privé Orléans (Loiret) vers Orly. Prix fixe garanti pour 1 à 3 passagers.",
      },
      {
        "@type": "Offer",
        "name": "Navette Orléans → Roissy Charles de Gaulle",
        "price": "210",
        "priceCurrency": "EUR",
        "description": "Transfert privé Orléans (Loiret) vers CDG. Prix fixe garanti pour 1 à 3 passagers.",
      },
    ],
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le tarif d'une navette Orléans → Orly ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le tarif de la navette Orléans → Aéroport d'Orly démarre à 180€ pour 1 à 3 passagers, en berline. Prix fixe garanti, aucune surprise liée au trafic.",
      },
    },
    {
      "@type": "Question",
      "name": "Quel est le tarif d'une navette Orléans → Roissy CDG ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le tarif de la navette Orléans → Roissy Charles de Gaulle démarre à 210€ pour 1 à 3 passagers. Prix fixe, chauffeur professionnel, prise en charge à domicile.",
      },
    },
    {
      "@type": "Question",
      "name": "Y a-t-il des suppléments sur les tarifs VTC Orléans ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les suppléments éventuels sont : nuit (20h-5h) +20€, dimanche et jours fériés +20€, bagages supplémentaires 10€/unité, hors agglomération 0,80€/km. L'attente pour retard avion est gratuite jusqu'à 35 minutes.",
      },
    },
    {
      "@type": "Question",
      "name": "Le prix est-il le même depuis toute l'agglomération orléanaise ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nos forfaits incluent la prise en charge depuis Orléans centre, Saran, Olivet, Saint-Jean-de-Braye, Fleury-les-Aubrais, La Chapelle-Saint-Mesmin, Ingré, Semoy et Chécy. Pour les zones plus éloignées, un supplément kilométrique s'applique.",
      },
    },
  ],
};

export default function TarifsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <NavHeader ctaLabel="Devis Gratuit" ctaHref="/vtc#booking" />
      <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">
        {/* HERO */}
        <section className="bg-slate-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-blue-400 bg-blue-400/10 border border-blue-400/20 px-3 py-1 rounded-full mb-6">
              <MapPin className="w-3 h-3" /> Orléans & Loiret — Prix fixe garanti
            </span>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Tarifs VTC Orléans 2025
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Prix fixes sans surprise pour vos navettes aéroport, transferts gares et courses longue distance depuis Orléans et tout le Loiret. Le tarif est confirmé avant la course.
            </p>
            <a
              href="tel:0634605799"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition"
            >
              <Phone className="w-4 h-4" /> Devis immédiat : 06 34 60 57 99
            </a>
          </div>
        </section>

        {/* TABLEAU TARIFS AÉROPORTS */}
        <section className="max-w-4xl mx-auto px-4 w-full py-16">
          <h2 className="text-2xl font-black uppercase text-slate-900 mb-2 text-center">Forfaits Aéroports</h2>
          <p className="text-center text-sm text-slate-500 mb-10">Prix fixe par véhicule — jusqu&apos;à 3 passagers en berline, 6 en van</p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Orly */}
            <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 shadow-lg relative">
              <span className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Le plus demandé</span>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Orléans → Orly</div>
                  <div className="text-4xl font-black text-slate-900">180€</div>
                  <div className="text-xs text-slate-500 mt-1">Prix fixe · 1 à 3 passagers</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Prise en charge à domicile</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Attente retard avion gratuite 35 min</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Bagages standards inclus</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Disponible 24h/24 — 7j/7</li>
              </ul>
              <Link href="/navette-orleans-orly" className="block text-center bg-slate-900 text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition">
                Réserver cette navette
              </Link>
            </div>

            {/* Roissy */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Orléans → Roissy CDG</div>
                  <div className="text-4xl font-black text-slate-900">210€</div>
                  <div className="text-xs text-slate-500 mt-1">Prix fixe · 1 à 3 passagers</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Prise en charge à domicile</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Attente retard avion gratuite 35 min</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Bagages standards inclus</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Disponible 24h/24 — 7j/7</li>
              </ul>
              <Link href="/navette-orleans-roissy-cdg" className="block text-center bg-slate-900 text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition">
                Réserver cette navette
              </Link>
            </div>
          </div>

          {/* Suppléments */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="font-black uppercase text-sm text-slate-700 mb-4">Suppléments & Conditions</h3>
            <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-600">
              {[
                { label: "Nuit (20h – 5h)", value: "+20€" },
                { label: "Dimanche & Jours fériés", value: "+20€" },
                { label: "Bagage supplémentaire", value: "10€ / unité" },
                { label: "Hors agglomération (> 10 km)", value: "0,80€ / km" },
                { label: "Attente retard avion/train", value: "Gratuit jusqu'à 35 min" },
                { label: "Au-delà de 35 min d'attente", value: "30€ / heure" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                  <span>{label}</span>
                  <span className="font-bold text-slate-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ZONES DESSERVIES */}
        <section className="max-w-4xl mx-auto px-4 w-full pb-12">
          <h2 className="text-xl font-black uppercase text-slate-900 mb-4">Zones desservies depuis Orléans</h2>
          <p className="text-sm text-slate-600 mb-6">
            Nos forfaits incluent la prise en charge depuis toute l&apos;agglomération orléanaise, sans supplément kilométrique pour les zones suivantes :
          </p>
          <div className="flex flex-wrap gap-2">
            {["Orléans Centre", "Saran", "Olivet", "Saint-Jean-de-Braye", "Fleury-les-Aubrais", "La Chapelle-Saint-Mesmin", "Ingré", "Semoy", "Chécy", "Saint-Cyr-en-Val", "Boigny-sur-Bionne"].map((ville) => (
              <span key={ville} className="bg-white border border-slate-200 rounded-full px-3 py-1 text-xs font-medium text-slate-700">
                <MapPin className="w-3 h-3 inline text-blue-600 mr-1" />{ville}
              </span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 w-full pb-16">
          <h2 className="text-xl font-black uppercase text-slate-900 mb-8">Questions fréquentes sur les tarifs</h2>
          <div className="space-y-4">
            {[
              {
                q: "Quel est le tarif d'une navette Orléans → Orly ?",
                a: "Le forfait démarre à 180€ pour 1 à 3 passagers en berline, prix fixe garanti quelle que soit la durée du trajet due au trafic.",
              },
              {
                q: "Quel est le tarif d'une navette Orléans → Roissy CDG ?",
                a: "Le forfait démarre à 210€ pour 1 à 3 passagers en berline, prix fixe garanti. Pour 4 à 6 passagers, un van est disponible — contactez-nous pour le tarif.",
              },
              {
                q: "Peut-on payer par carte ou facture entreprise ?",
                a: "Oui. Paiement par virement, carte ou espèces. Les entreprises peuvent bénéficier d'une facturation mensuelle sur compte dédié.",
              },
              {
                q: "Le tarif change-t-il si mon vol est retardé ?",
                a: "Non. Nous suivons votre numéro de vol et l'attente est gratuite jusqu'à 35 minutes. Au-delà, 30€/heure s'applique.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="font-bold text-sm text-slate-900 mb-2">{q}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-blue-700 text-white py-12 px-6 mt-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-black uppercase mb-3">Votre devis personnalisé en 2 minutes</h2>
            <p className="text-blue-100 text-sm mb-8">Précisez votre point de départ, votre destination et votre horaire — réponse immédiate.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0634605799" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-50 transition">
                <Phone className="w-4 h-4" /> 06 34 60 57 99
              </a>
              <Link href="/vtc#booking" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-black transition">
                Réserver en ligne <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER minimal */}
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
