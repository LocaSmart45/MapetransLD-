import type { Metadata } from "next";
import Link from "next/link";
import NavHeader from "@/app/components/NavHeader";
import { CheckCircle, Phone, ArrowRight, Heart, Star, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Chauffeur Mariage & Événement Orléans | VTC Privatisé | MAPETRANS LD",
  description:
    "Chauffeur privé VTC pour mariage, soirée, événement d'entreprise à Orléans et Loiret. Véhicule privatisé, ponctualité garantie, discrétion absolue. Devis gratuit.",
  keywords: [
    "chauffeur mariage Orléans",
    "VTC mariage Loiret",
    "chauffeur événement Orléans",
    "location voiture chauffeur mariage",
    "VTC soirée Orléans",
    "chauffeur privatisé Orléans",
    "transport événementiel Loiret",
  ],
  alternates: { canonical: "https://www.mapetransld.com/chauffeur-mariage-evenement-orleans" },
  openGraph: {
    title: "Chauffeur Mariage & Événement Orléans | MAPETRANS LD",
    description: "Chauffeur privé VTC pour mariages et événements à Orléans. Discrétion, ponctualité, véhicule haut de gamme.",
    url: "https://www.mapetransld.com/chauffeur-mariage-evenement-orleans",
    siteName: "Mapetrans LD",
    locale: "fr_FR",
    type: "website",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Chauffeur Mariage & Événement Orléans",
  "description": "Service de chauffeur privé VTC pour mariages, soirées et événements d'entreprise à Orléans et dans le Loiret.",
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
    { "@type": "AdministrativeArea", "name": "Centre-Val de Loire" },
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Proposez-vous un service de chauffeur pour les mariages à Orléans ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. MAPETRANS LD propose un service de chauffeur privé VTC pour les mariages dans le Loiret et Centre-Val de Loire. Véhicule privatisé pour la journée, ponctualité garantie, discrétion absolue. Nous assurons également le transport des invités.",
      },
    },
    {
      "@type": "Question",
      "name": "Combien coûte un chauffeur VTC pour un mariage ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le tarif dépend de la durée de mise à disposition et du nombre de véhicules. Contactez-nous pour un devis personnalisé gratuit selon votre programme et vos besoins.",
      },
    },
    {
      "@type": "Question",
      "name": "Pouvez-vous assurer le transport de plusieurs groupes d'invités ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous pouvons coordonner plusieurs véhicules pour le transport des invités entre la mairie, l'église, le lieu de réception et les hôtels. Contactez-nous pour organiser la logistique complète.",
      },
    },
  ],
};

export default function ChauffeurMariagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <NavHeader ctaLabel="Devis Gratuit" ctaHref="/contact" />
      <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">
        {/* HERO */}
        <section className="bg-slate-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-4 h-4 text-rose-400" />
              <span className="text-rose-400 font-bold text-xs uppercase tracking-widest">Mariage · Soirée · Événement</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Chauffeur Privé<br />
              <span className="text-blue-400">Mariage & Événements</span><br />
              <span className="text-2xl md:text-3xl">à Orléans & Loiret</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mb-8">
              Votre journée est unique — votre transport aussi. Véhicule privatisé, chauffeur en tenue, ponctualité absolue et discrétion totale pour votre mariage, gala ou événement d&apos;entreprise dans le Loiret et toute la région Centre.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0634605799" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition">
                <Phone className="w-4 h-4" /> Devis personnalisé
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition">
                Formulaire de contact <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-4xl mx-auto px-4 w-full py-16">
          <h2 className="text-2xl font-black uppercase text-slate-900 mb-2">Nos prestations événementielles</h2>
          <p className="text-sm text-slate-500 mb-10">Sur mesure, coordonnées et adaptées à votre programme exact.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titre: "Mariage",
                desc: "Transport des mariés, de la famille et des témoins. Coordination mairie → église → salle de réception. Mise à disposition à la journée.",
                items: ["Véhicule décoré sur demande", "Chauffeur en tenue", "Multi-véhicules pour invités", "Navettes hôtel ↔ réception"],
              },
              {
                titre: "Soirées & Galas",
                desc: "Retours de soirées sécurisés, mise à disposition pour vos invités VIP, navettes depuis plusieurs adresses.",
                items: ["Pas de contrainte d'horaire", "Discrétion garantie", "Prise en charge à domicile", "Toute la région Centre"],
              },
              {
                titre: "Événements d'entreprise",
                desc: "Séminaires, incentives, remises de prix, roadshows. Transport de vos équipes et clients depuis l'aéroport ou la gare.",
                items: ["Facturation entreprise", "Coordination groupes", "Chauffeur bilingue possible", "Planning détaillé"],
              },
              {
                titre: "Privatisation & Mise à disposition",
                desc: "Véhicule et chauffeur à votre disposition pour la demi-journée ou la journée entière, avec ou sans itinéraire défini.",
                items: ["Tarif à l'heure ou forfait journée", "Multi-arrêts et circuits", "Châteaux de la Loire", "Événements sportifs & culturels"],
              },
            ].map(({ titre, desc, items }) => (
              <div key={titre} className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-black uppercase text-slate-900 mb-2">{titre}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* GARANTIES */}
        <section className="bg-slate-900 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-black uppercase mb-8 text-center">Pourquoi nous choisir pour votre événement ?</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: <Clock className="w-6 h-6 text-blue-400" />, titre: "Ponctualité absolue", desc: "Nous anticipons chaque trajet. Votre chauffeur est toujours là avant l'heure convenue." },
                { icon: <Star className="w-6 h-6 text-blue-400" />, titre: "Discrétion & standing", desc: "Tenue professionnelle, véhicule impeccable, attitude neutre et efficace." },
                { icon: <CheckCircle className="w-6 h-6 text-blue-400" />, titre: "Coordination complète", desc: "Nous gérons l'ensemble de la logistique transport pour que vous n'ayez rien à organiser." },
              ].map(({ icon, titre, desc }) => (
                <div key={titre} className="text-center">
                  <div className="flex justify-center mb-3">{icon}</div>
                  <div className="font-black text-sm uppercase mb-2">{titre}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 w-full py-16">
          <h2 className="text-xl font-black uppercase text-slate-900 mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Proposez-vous un service de chauffeur pour les mariages à Orléans ?",
                a: "Oui. Nous assurons le transport des mariés et de leurs invités dans tout le Loiret et la région Centre. Mise à disposition à la journée, multi-véhicules sur demande.",
              },
              {
                q: "Pouvez-vous assurer le transport de plusieurs groupes d'invités ?",
                a: "Oui. Nous coordonnons plusieurs véhicules entre la mairie, l'église, le lieu de réception et les hôtels. Contactez-nous pour organiser la logistique complète.",
              },
              {
                q: "Vos chauffeurs interviennent-ils pour les Châteaux de la Loire ?",
                a: "Oui. Nous desservons tous les châteaux et domaines de la région Centre-Val de Loire pour vos réceptions et événements privés.",
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
            <h2 className="text-2xl font-black uppercase mb-3">Parlons de votre événement</h2>
            <p className="text-blue-100 text-sm mb-8">Chaque événement est unique. Décrivez votre projet, nous vous proposons une solution sur mesure.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0634605799" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-50 transition">
                <Phone className="w-4 h-4" /> 06 34 60 57 99
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-black transition">
                Formulaire de contact <ArrowRight className="w-4 h-4" />
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
