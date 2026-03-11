import type { Metadata } from "next";
import Link from "next/link";
import NavHeader from "@/app/components/NavHeader";
import { ArrowRight, Clock, Shield, Briefcase, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Chauffeur Privé Gare d'Orléans | MAPETRANS LD",
  description:
    "Prise en charge à la gare d'Orléans ou Les Aubrais par un chauffeur privé professionnel. Service discret et ponctuel pour dirigeants et cadres d'entreprise.",
  alternates: { canonical: "https://www.mapetransld.com/vtc-gare-orleans" },
  openGraph: {
    title: "Chauffeur Privé Gare d'Orléans | MAPETRANS LD",
    description:
      "Prise en charge à la gare d'Orléans ou Les Aubrais par un chauffeur privé professionnel.",
    url: "https://www.mapetransld.com/vtc-gare-orleans",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chauffeur Privé Gare d'Orléans",
  provider: {
    "@type": "LocalBusiness",
    name: "MAPETRANS LD",
    telephone: "+33634605799",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orléans",
      addressRegion: "Loiret",
      addressCountry: "FR",
    },
  },
  description:
    "Service de chauffeur privé avec prise en charge à la gare d'Orléans et gare des Aubrais. Transport professionnel pour cadres et dirigeants.",
  areaServed: { "@type": "City", name: "Orléans" },
  serviceType: "Chauffeur privé — Gare",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Intervenez-vous à la gare d'Orléans et aux Aubrais ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous assurons des prises en charge à la gare d'Orléans (centre-ville) et à la gare des Aubrais (TGV), selon votre point d'arrivée.",
          },
        },
        {
          "@type": "Question",
          name: "Comment se passe la prise en charge en gare ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Votre chauffeur suit l'heure réelle de votre train. Il vous attend à la sortie avec une pancarte nominative, sans supplément en cas de retard.",
          },
        },
        {
          "@type": "Question",
          name: "Proposez-vous des contrats réguliers pour les entreprises ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. Nous établissons des conventions de transport sur mesure pour les entreprises avec facturation mensuelle et reporting.",
          },
        },
      ],
    },
  ],
};

export default function VtcGareOrleansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <NavHeader ctaLabel="Demander un devis" ctaHref="/entreprises#devis" />

      <main>
        {/* HERO */}
        <section className="bg-slate-950 text-white pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.35em] mb-6">
              Chauffeur Privé · Gare d&apos;Orléans · Loiret
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Votre chauffeur vous attend{" "}
              <span className="text-blue-400">à la descente du train</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Gare d&apos;Orléans ou Les Aubrais — prise en charge nominative, véhicule
              haut de gamme, chauffeur professionnel. Votre agenda reprend là où
              il s&apos;était arrêté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/entreprises#devis"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition"
              >
                Demander un devis entreprise <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0634605799"
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-white text-white font-bold px-8 py-4 rounded-full transition"
              >
                <Phone className="w-4 h-4" /> 06 34 60 57 99
              </a>
            </div>
          </div>
        </section>

        {/* ENGAGEMENTS */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[10px] font-bold text-blue-700 uppercase tracking-[0.3em] mb-12">
              Notre standard de service
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  titre: "Suivi temps réel du train",
                  texte:
                    "Votre chauffeur monitore l'heure d'arrivée réelle de votre train. Aucun supplément en cas de retard SNCF — c'est notre engagement.",
                },
                {
                  icon: Shield,
                  titre: "Accueil nominatif",
                  texte:
                    "Pancarte à votre nom à la sortie. Pas de recherche, pas d'attente. Vous êtes pris en charge à la seconde où vous franchissez les portes.",
                },
                {
                  icon: Briefcase,
                  titre: "Confidentialité totale",
                  texte:
                    "Nos chauffeurs sont formés à la discrétion. Vos appels, vos documents, vos conversations restent dans le véhicule.",
                },
              ].map(({ icon: Icon, titre, texte }) => (
                <div key={titre} className="text-center px-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 mb-6">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-black text-slate-900 text-lg mb-3">{titre}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARES DESSERVIES */}
        <section className="bg-slate-50 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-12">
              Deux gares, un seul interlocuteur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-xl mb-3">
                  🚉 Gare d&apos;Orléans
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Terminus Intercités depuis Paris-Austerlitz. Idéale pour les
                  cadres en déplacement vers le centre d&apos;Orléans et le Loiret.
                </p>
                <p className="text-xs text-blue-700 font-bold uppercase tracking-wider">
                  Prise en charge hall principal
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-xl mb-3">
                  🚄 Gare des Aubrais
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Gare TGV desservant Paris, Lyon, Bordeaux et au-delà. Prise
                  en charge immédiate, sans temps de transfert supplémentaire.
                </p>
                <p className="text-xs text-blue-700 font-bold uppercase tracking-wider">
                  Prise en charge sortie voyageurs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ENTREPRISES */}
        <section className="bg-slate-950 text-white py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.35em] mb-4">
              Solution entreprise
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Vos collaborateurs méritent mieux qu&apos;un taxi
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Convention de transport sur mesure, facturation mensuelle
              centralisée, reporting kilométrique. Un interlocuteur unique pour
              tous vos déplacements dans le Loiret.
            </p>
            <Link
              href="/entreprises#devis"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition"
            >
              Obtenir notre offre entreprise <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-12">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Intervenez-vous à la gare d'Orléans et aux Aubrais ?",
                  r: "Oui, nous assurons des prises en charge à la gare d'Orléans (centre-ville) et à la gare des Aubrais (TGV), selon votre point d'arrivée.",
                },
                {
                  q: "Comment se passe la prise en charge en gare ?",
                  r: "Votre chauffeur suit l'heure réelle de votre train. Il vous attend à la sortie avec une pancarte nominative, sans supplément en cas de retard.",
                },
                {
                  q: "Proposez-vous des contrats réguliers pour les entreprises ?",
                  r: "Oui. Nous établissons des conventions de transport sur mesure avec facturation mensuelle et reporting. Contactez-nous pour un devis personnalisé.",
                },
              ].map(({ q, r }) => (
                <div key={q} className="border-b border-slate-100 pb-6">
                  <h3 className="font-bold text-slate-900 mb-2">{q}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
