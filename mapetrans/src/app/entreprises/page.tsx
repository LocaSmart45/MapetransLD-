"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone, Mail, MapPin, ArrowUpRight, Clock, CheckCircle,
  Plane, Users, Truck, Building2, Box, MessageSquare,
  FileText, Shield, Wrench, Receipt, Star, CreditCard, Zap, ShieldCheck,
} from "lucide-react";
import NavHeader from "@/app/components/NavHeader";
import Footer from '@/app/components/Footer';

const ARGUMENTS = [
  {
    icon: CreditCard,
    title: "Facturation mensuelle",
    text: "Une seule facture par mois regroupant toutes vos courses. Zéro friction pour votre comptabilité.",
    highlight: true,
  },
  {
    icon: Star,
    title: "Réservation prioritaire",
    text: "Vos demandes passent en tête de file. Un interlocuteur dédié, joignable 24h/24.",
    highlight: true,
  },
  {
    icon: Receipt,
    title: "Tarifs dégressifs",
    text: "Plus votre volume augmente, plus votre tarif baisse. Proposition sur-mesure selon vos courses.",
    highlight: true,
  },
  {
    icon: Zap,
    title: "Confirmation en 2h",
    text: "Devis personnalisé et activation du compte sous 2h ouvrées. Sans engagement minimum.",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "Conformité totale",
    text: "Licences VTC et transport à jour. Chauffeurs déclarés, véhicules assurés. Zéro risque juridique.",
    highlight: false,
  },
  {
    icon: FileText,
    title: "Suivi & reporting",
    text: "Récapitulatif mensuel de toutes vos courses : dates, destinations, passagers. Tout est traçable.",
    highlight: false,
  },
];

const OFFRES = [
  {
    icon: Plane,
    title: "Navettes Aéroports & Gares",
    badge: "VTC • 7j/7",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
    features: ["Orly, Roissy CDG, Beauvais, gares parisiennes", "Suivi du vol en temps réel", "Prise en charge à l'adresse souhaitée"],
  },
  {
    icon: Users,
    title: "Déplacements Collaborateurs",
    badge: "Chauffeur attitré",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    features: ["Chauffeur identifié et attitré", "Réservation récurrente planifiée", "Rapport mensuel des courses"],
  },
  {
    icon: Truck,
    title: "Transport Express & Logistique",
    badge: "Express 24/7",
    img: "https://images.pexels.com/photos/4506245/pexels-photo-4506245.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Courses express dans le Loiret", "Transport dédié France entière", "Certificat de livraison sur demande"],
  },
  {
    icon: Wrench,
    title: "Solution sur-mesure",
    badge: "Sans engagement",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    features: ["Tournées récurrentes planifiées", "Organisation d'événements complets", "Transport de nuit si besoin"],
  },
];

export default function EntreprisesPage() {
  const [form, setForm] = useState({
    prenom: "", nom: "", societe: "", poste: "",
    email: "", tel: "", service: "", volume: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("https://hook.eu1.make.com/4xrhxw9kt57o7lpaqteinsba2j4ev9b3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prenom: form.prenom,
        nom: form.nom,
        societe: form.societe,
        poste: form.poste,
        email: form.email,
        telephone: form.tel,
        service: form.service,
        volume: form.volume,
        message: form.message,
        source: "Formulaire Devis Entreprises mapetransld.com",
      }),
    }).catch(() => null);
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <NavHeader ctaLabel="Demander un devis" ctaHref="#devis" topBarRight="Compte Entreprise · Facturation mensuelle" />
      <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-[600px] bg-white -z-10 border-b border-slate-200">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* HEADER */}

      {/* HERO */}
      <div className="relative h-[420px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Espace Entreprises MAPETRANS LD" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4 bg-white/10 backdrop-blur-sm">
            Solutions B2B — Orléans &amp; France entière
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-lg">
            Espace <span className="text-blue-400">Entreprises</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md mb-6">
            Compte dédié · Facturation mensuelle · Réservation prioritaire · Tarifs dégressifs
          </p>
          <Link href="#devis" className="bg-blue-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2 transform hover:scale-105 duration-300">
            <ArrowUpRight className="w-4 h-4" /> Demander un devis gratuit
          </Link>
        </div>
      </div>

      {/* ARGUMENTS CLÉS */}
      <div className="max-w-7xl mx-auto px-4 w-full mt-16 mb-16 animate-fade-in delay-100">

        {/* Bandeau 3 arguments phares */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-10 text-white mb-12">
          <div className="text-center mb-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Pourquoi ouvrir un compte pro ?</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase mt-2">Ce que vous gagnez avec MAPETRANS LD</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARGUMENTS.filter(a => a.highlight).map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-900/50">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-black uppercase text-sm mb-2">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 autres arguments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ARGUMENTS.filter(a => !a.highlight).map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h4 className="font-black uppercase text-sm text-slate-900 mb-1">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FORMULAIRE DEVIS — mis en avant */}
        <div id="devis" className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden mb-16">

          {/* Bandeau de réassurance */}
          <div className="bg-blue-700 text-white px-8 py-4 flex flex-wrap items-center justify-center gap-6 text-[11px] font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Devis personnalisé sous 2h</span>
            <span className="hidden md:block text-blue-400">•</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Sans engagement</span>
            <span className="hidden md:block text-blue-400">•</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Tarifs dégressifs selon volume</span>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">

              {/* Côté info */}
              <div>
                <h2 className="text-3xl font-black text-slate-900 uppercase mb-2">Demander un devis entreprise</h2>
                <div className="w-16 h-1 bg-blue-700 mb-6" />
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Remplissez ce formulaire avec votre volume estimé. Nous vous soumettons une proposition tarifaire sur-mesure sous 2h ouvrées.
                </p>

                <div className="flex flex-col gap-4 mb-8">
                  {[
                    { icon: Phone, content: <><span className="text-slate-400">Préférez un appel ? </span><a href="tel:0634605799" className="font-bold text-slate-900 hover:text-blue-700 transition">06 34 60 57 99</a></> },
                    { icon: Mail, content: <><span className="text-slate-400">Email : </span><a href="mailto:contact@mapetransld.com" className="font-bold text-slate-900 hover:text-blue-700 transition">contact@mapetransld.com</a></> },
                    { icon: MapPin, content: <><span className="text-slate-400">Basés à </span><strong className="font-bold text-slate-900">Orléans — France entière</strong></> },
                  ].map(({ icon: Icon, content }, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-blue-700" />
                      </div>
                      <span>{content}</span>
                    </div>
                  ))}
                </div>

                {/* Étapes rapides */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="text-[10px] font-black uppercase tracking-widest text-blue-700 mb-4">Comment ça se passe ?</div>
                  <div className="flex flex-col gap-4">
                    {[
                      { n: "1", t: "Vous envoyez ce formulaire" },
                      { n: "2", t: "On vous rappelle pour cerner vos besoins" },
                      { n: "3", t: "Vous recevez un devis sur-mesure sous 2h" },
                      { n: "4", t: "Première course sans minimum ni engagement" },
                    ].map(({ n, t }) => (
                      <div key={n} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-blue-700 text-white text-xs font-black flex items-center justify-center shrink-0">{n}</div>
                        <span className="text-sm text-slate-600 font-medium">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center gap-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 uppercase">Demande envoyée !</div>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">Nous vous recontactons sous 2h ouvrées avec une proposition tarifaire adaptée à votre volume.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Prénom *</label>
                      <input name="prenom" value={form.prenom} onChange={handleChange} required placeholder="Jean" className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 rounded-lg transition" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Nom *</label>
                      <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Dupont" className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 rounded-lg transition" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Société *</label>
                    <input name="societe" value={form.societe} onChange={handleChange} required placeholder="Nom de votre entreprise" className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 rounded-lg transition" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Votre poste</label>
                    <input name="poste" value={form.poste} onChange={handleChange} placeholder="Office Manager, DRH, Dirigeant..." className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 rounded-lg transition" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email pro *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jean@societe.fr" className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 rounded-lg transition" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Téléphone</label>
                      <input name="tel" type="tel" value={form.tel} onChange={handleChange} placeholder="06 XX XX XX XX" className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 rounded-lg transition" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Service(s) souhaité(s)</label>
                    <select name="service" value={form.service} onChange={handleChange} className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-700 rounded-lg transition">
                      <option value="">Sélectionner...</option>
                      <option>Navettes aéroports (Orly / CDG)</option>
                      <option>Déplacements collaborateurs</option>
                      <option>Transport express / logistique</option>
                      <option>Plusieurs services</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Volume estimé par mois *</label>
                    <select name="volume" value={form.volume} onChange={handleChange} required className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-700 rounded-lg transition">
                      <option value="">Estimation...</option>
                      <option>1 à 5 courses / mois</option>
                      <option>5 à 20 courses / mois</option>
                      <option>20 à 50 courses / mois</option>
                      <option>Plus de 50 courses / mois</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Précisions ou besoins spécifiques</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Horaires habituels, destinations récurrentes, contraintes particulières..." className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 rounded-lg transition resize-none" />
                  </div>
                  <p className="text-[11px] text-slate-400">Vos données sont utilisées uniquement pour vous recontacter. Aucun démarchage commercial tiers.</p>
                  <button type="submit" disabled={loading} className="w-full bg-blue-700 text-white h-14 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-blue-800 transition disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg">
                    {loading ? "Envoi en cours..." : <><ArrowUpRight className="w-4 h-4" /> Recevoir mon devis sous 2h</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* PRESTATIONS */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-4">Nos Prestations Entreprises</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFRES.map(({ icon: Icon, title, badge, img, features }) => (
            <div key={title} className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden group">
              <div className="h-40 bg-slate-100 relative overflow-hidden">
                <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={title} />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-bold px-2 py-1 uppercase rounded-sm">{badge}</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-blue-700" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900 uppercase leading-tight">{title}</h3>
                </div>
                <div className="space-y-1.5 border-t border-slate-100 pt-3 mt-2">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle className="w-3 h-3 text-blue-600 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
    </>
  );
}
