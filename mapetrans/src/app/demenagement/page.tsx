"use client";

import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Smile, Package, Home, Box, CheckCircle, X } from 'lucide-react';
import Link from 'next/link';
import NavHeader from '@/app/components/NavHeader';

export default function DemenagementPage() {

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    "name": "MAPETRANS LD — Déménagement & Garde-meubles",
    "description": "Déménagement particuliers et entreprises à Orléans et dans le Loiret. Service de garde-meubles, emballage, montage meubles. Devis gratuit.",
    "url": "https://www.mapetransld.com/demenagement",
    "telephone": "+33634605799",
    "email": "contact@mapetransld.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "105 Route Nationale 20",
      "addressLocality": "Cercottes",
      "addressRegion": "Centre-Val de Loire",
      "postalCode": "45520",
      "addressCountry": "FR"
    },
    "areaServed": [
      { "@type": "City", "name": "Orléans" },
      { "@type": "AdministrativeArea", "name": "Loiret" },
      { "@type": "Country", "name": "France" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Déménagement",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Déménagement particuliers Orléans", "description": "Déménagement clé en main pour particuliers en Loiret et Centre-Val de Loire." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Déménagement entreprises", "description": "Transfert de bureaux, équipements et archives pour professionnels." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garde-meubles & stockage", "description": "Stockage sécurisé de vos biens mobiliers sur courte ou longue durée." } }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <NavHeader ctaLabel="Devis Gratuit" ctaHref="#contact-hub" topBarRight="Déménagement Particuliers & Bureaux" />
      <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-[120px] flex flex-col">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>

      {/* 0. ARRIÈRE-PLAN */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-white -z-10 border-b border-slate-200">
         <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* === HEADER === */}

      {/* === HERO DÉMÉNAGEMENT === */}
      <div className="relative h-[450px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
        <img 
          src="https://images.pexels.com/photos/4246202/pexels-photo-4246202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Déménagement Mapetrans" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4 bg-white/10 backdrop-blur-sm">
            Orléans - France - Europe
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-lg">
            Déménagement <br/> <span className="text-blue-500">Serein & Sécurisé</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Du studio à la maison familiale, ou transfert de bureaux. <br/>
            Nos équipes s'occupent de tout : emballage, protection, montage et transport.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="#contact-hub" className="bg-blue-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2 transform hover:scale-105 duration-300">
              <Box className="w-4 h-4"/> Obtenir mon devis
            </Link>
          </div>
        </div>
      </div>

      {/* === HUB DE CONTACT (REMPLACE LE FORMULAIRE) === */}
      <div id="contact-hub" className="relative z-20 -mt-10 px-4 max-w-5xl mx-auto w-full mb-20 animate-fade-in delay-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* OPTION 1 : ESTIMATION RAPIDE (TEL) */}
            <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col p-8 md:p-10 text-center items-center hover:scale-[1.01] transition duration-300 border border-slate-700">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                    <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-2">Estimation Rapide</h3>
                <p className="text-slate-400 text-sm mb-8 max-w-xs mx-auto">
                    Vous connaissez votre volume ? Appelez-nous pour une estimation tarifaire immédiate et réserver votre date.
                </p>
                <a href="tel:0749709577" className="w-full bg-white text-slate-900 font-black h-14 rounded-sm uppercase tracking-wide text-sm shadow-xl hover:bg-slate-100 transition flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" /> Appeler le 07 49 70 95 77
                </a>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-4">Disponible du Lundi au Samedi</span>
            </div>

            {/* OPTION 2 : VISITE TECHNIQUE (EMAIL) */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col p-8 md:p-10 text-center items-center hover:scale-[1.01] transition duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Home className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase mb-2">Visite Technique</h3>
                <p className="text-slate-500 text-sm mb-8 max-w-xs mx-auto">
                    Pour les gros volumes : demandez une visite gratuite (physique ou visio) pour un devis précis et garanti.
                </p>
                <a href="mailto:contact@mapetransld.com?subject=Demande de Visite Déménagement" className="w-full bg-blue-700 text-white font-black h-14 rounded-sm uppercase tracking-wide text-sm shadow-xl hover:bg-blue-800 transition flex items-center justify-center gap-3">
                    <Mail className="w-5 h-5" /> Demander une visite
                </a>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-4">contact@mapetransld.com</span>
            </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full pb-16 animate-fade-in delay-200">
        
        {/* TITRE FORMULES */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-4">Nos Formules Adaptées</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          <p className="text-slate-500 text-sm mt-4 max-w-xl mx-auto">
            Du simple transport de meubles à la prise en charge complète, choisissez le niveau de service qui vous convient.
          </p>
        </div>

        {/* GRILLE FORMULES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* 1. ÉCONOMIQUE */}
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-400 overflow-hidden hover:-translate-y-1 transition duration-300 p-6 flex flex-col">
            <h3 className="text-xl font-black text-slate-900 uppercase mb-2">Formule Éco</h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">Pour les petits budgets qui participent.</p>
            <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <span>Mise à disposition Camion + Chauffeur</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <span>Protection des meubles sous couvertures</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <span>Transport & Assurance</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-400"><X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5"/> <span className="line-through decoration-slate-300">Manutention par nos soins</span></li>
            </ul>
            <div className="bg-slate-50 p-3 rounded text-center text-xs font-bold text-blue-700 border border-blue-100">
                Idéal étudiants & petits volumes
            </div>
          </div>

          {/* 2. STANDARD */}
          <div className="bg-white rounded-xl shadow-2xl border-t-4 border-blue-700 overflow-hidden hover:-translate-y-1 transition duration-300 p-6 flex flex-col transform scale-105 md:scale-100 lg:scale-105 z-10 relative">
            <div className="absolute top-0 right-0 bg-blue-700 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">Le + Choisi</div>
            <h3 className="text-xl font-black text-slate-900 uppercase mb-2">Formule Standard</h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">Le meilleur rapport qualité/prix.</p>
            <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-800 font-bold"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5"/> <span>Chargement & Déchargement complet</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <span>Protection du mobilier</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <span>Montage & Démontage des meubles</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <span>Mise en place dans les pièces</span></li>
            </ul>
            <div className="bg-blue-50 p-3 rounded text-center text-xs font-bold text-blue-800 border border-blue-100">
                Vous faites seulement les cartons
            </div>
          </div>

          {/* 3. CONFORT / LUXE */}
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-slate-900 overflow-hidden hover:-translate-y-1 transition duration-300 p-6 flex flex-col">
            <h3 className="text-xl font-black text-slate-900 uppercase mb-2">Formule Confort</h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">Déménagez sans lever le petit doigt.</p>
            <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <span>Tout inclus (Standard)</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-800 font-bold"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5"/> <span>Emballage de la vaisselle & fragile</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <span>Emballage des vêtements (Penderies)</span></li>
                <li className="flex items-start gap-3 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> <span>Déballage complet à l'arrivée</span></li>
            </ul>
            <div className="bg-slate-900 p-3 rounded text-center text-xs font-bold text-white border border-slate-700">
                Solution Clé en main
            </div>
          </div>

        </div>

        {/* SECTION ARGUMENTS */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-black uppercase mb-6">Un Déménagement en toute sérénité</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center flex-shrink-0"><ShieldCheck className="w-6 h-6" /></div>
                  <div><h4 className="font-bold uppercase text-sm mb-1">Assurance Ad Valorem</h4><p className="text-xs text-slate-400 leading-relaxed">Vos biens sont couverts à leur valeur réelle pendant tout le transport.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center flex-shrink-0"><Smile className="w-6 h-6" /></div>
                  <div><h4 className="font-bold uppercase text-sm mb-1">Équipe Respectueuse</h4><p className="text-xs text-slate-400 leading-relaxed">Nos déménageurs sont formés, polis et prennent soin de votre intérieur (protection des sols).</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center flex-shrink-0"><Package className="w-6 h-6" /></div>
                  <div><h4 className="font-bold uppercase text-sm mb-1">Fournitures Incluses</h4><p className="text-xs text-slate-400 leading-relaxed">Nous fournissons cartons, adhésifs et penderies pour les formules Standard et Confort.</p></div>
                </div>
              </div>
            </div>
            {/* IMAGE SOBRE */}
            <div className="relative h-64 md:h-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
               <img src="https://images.pexels.com/photos/4506266/pexels-photo-4506266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Cartons Déménagement" />
            </div>
          </div>
        </div>

      </div>

      {/* === SECTION SEO — CONTENU ÉDITORIAL === */}
      <section className="max-w-4xl mx-auto px-4 py-16 w-full">
        <h2 className="text-3xl font-black text-slate-900 mb-6">
          Déménagement à Orléans et dans le Loiret — MAPETRANS LD
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          <strong>MAPETRANS LD</strong> est une société de déménagement basée dans l&apos;agglomération
          orléanaise, active depuis 2013. Nous réalisons des déménagements pour les particuliers
          et les entreprises dans tout le <strong>Loiret (45)</strong>, en région Centre-Val de Loire
          et sur l&apos;ensemble du territoire national.
        </p>

        <h3 className="text-xl font-black text-slate-900 mb-4 mt-10">
          Déménagement particuliers à Orléans et dans le Loiret
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          Que vous déménagiez d&apos;un studio à Fleury-les-Aubrais ou d&apos;une maison familiale à Olivet,
          nos équipes prennent en charge l&apos;intégralité de votre déménagement. Emballage, protection
          des meubles, chargement, transport et livraison avec montage : nous adaptons notre intervention
          à vos besoins et à votre budget.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Nous intervenons dans toutes les communes de l&apos;agglomération orléanaise : Orléans,
          Saran, Saint-Jean-de-Braye, La Chapelle-Saint-Mesmin, Saint-Jean-de-la-Ruelle, Ingré,
          Olivet, Chécy, et au-delà dans tout le département.
        </p>

        <h3 className="text-xl font-black text-slate-900 mb-4 mt-10">
          Déménagement d&apos;entreprise — transfert de bureaux
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          Le <strong>déménagement d&apos;entreprise</strong> exige une organisation rigoureuse pour minimiser
          l&apos;interruption d&apos;activité. MAPETRANS LD planifie votre transfert de bureaux en dehors
          des heures ouvrées si nécessaire : déménagement le week-end, déplacement d&apos;archives,
          transport de matériel informatique sécurisé, signalétique et mobilier de bureau.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Nous avons accompagné des PME et des filiales de grands groupes dans leurs relocalisations
          au sein du Loiret et en Île-de-France.
        </p>

        <h3 className="text-xl font-black text-slate-900 mb-4 mt-10">
          Garde-meubles & stockage sécurisé
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          Vous avez besoin de stocker vos meubles pendant des travaux, une transition de logement ou
          une expatriation ? MAPETRANS LD vous propose un service de <strong>garde-meubles à Orléans</strong>
          avec stockage sécurisé, accessible sur rendez-vous, pour des durées courtes ou longues.
          Vos biens sont couverts par notre assurance Ad Valorem pendant toute la durée du stockage.
        </p>

        <h3 className="text-xl font-black text-slate-900 mb-4 mt-10">
          Pourquoi choisir MAPETRANS LD pour votre déménagement ?
        </h3>
        <ul className="space-y-3 mb-8">
          {[
            "Devis gratuit sous 24h — visite physique ou visio selon votre préférence",
            "Équipes formées et expérimentées, respectueuses de votre domicile",
            "Assurance Ad Valorem incluse : vos biens couverts à leur valeur réelle",
            "3 formules adaptées à tous les budgets : Éco, Standard et Confort",
            "Matériel de protection fourni : cartons, adhésifs, penderies, couvertures",
            "Depuis 2013 : des centaines de déménagements réalisés dans le Loiret",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-700">
              <span className="text-blue-700 shrink-0 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <p className="font-bold text-blue-900 mb-2">
            Vous préparez un déménagement à Orléans ou dans le Loiret ?
          </p>
          <p className="text-blue-800 text-sm mb-4">
            Appelez-nous pour une estimation immédiate ou demandez une visite technique gratuite.
            Devis détaillé garanti sous 24h.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:0749709577"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-800 transition"
            >
              📞 07 49 70 95 77
            </a>
            <a
              href="mailto:contact@mapetransld.com"
              className="inline-flex items-center gap-2 bg-white text-blue-700 border border-blue-200 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-50 transition"
            >
              ✉ contact@mapetransld.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto">
        <div className="bg-blue-700 text-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="text-lg font-bold">Vous préparez votre déménagement ?</span>
              <span className="text-blue-100 text-sm mt-1">Ne stressez plus. Contactez Mapetrans pour une visite gratuite.</span>
            </div>
            <a href="tel:0749709577" className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700">
              <Phone className="w-4 h-4 inline mr-2"/> APPELER MAINTENANT
            </a>
          </div>
        </div>

        <div id="contact" className="bg-black text-white py-12 px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col leading-none mb-6"><span className="text-xl font-black tracking-tighter text-white">MAPETRANS<span className="text-blue-700">.LD</span></span><span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Solutions de Transport</span></div>
              <p className="text-slate-400 text-xs leading-relaxed text-justify">Partenaire expert depuis 2013. Nous assurons vos transports critiques, navettes VIP et déménagements.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">Nos Services</h3>
              <div className="flex flex-col gap-3 text-sm font-medium text-slate-400">
                <Link href="/agence" className="flex items-center gap-2 hover:text-white transition group"><ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> L'Agence</Link>
                <Link href="/vtc" className="flex items-center gap-2 hover:text-white transition group"><ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> VTC & Chauffeurs</Link>
                <Link href="/logistique" className="flex items-center gap-2 hover:text-white transition group"><ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Logistique & Fret</Link>
                <Link href="/demenagement" className="flex items-center gap-2 hover:text-white transition group"><ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Déménagement</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">Nous Contacter</h3>
              <div className="flex flex-col gap-4 text-sm font-bold">
                <a href="tel:0749709577" className="flex items-center gap-3 hover:text-blue-400 transition"><Phone className="w-4 h-4 text-blue-600" /> 07 49 70 95 77</a>
                <div className="flex items-center gap-3 text-slate-400"><Phone className="w-4 h-4 text-blue-600" /> 09 59 07 04 33</div>
                <a href="mailto:contact@mapetransld.com" className="flex items-center gap-3 hover:text-blue-400 transition"><Mail className="w-4 h-4 text-blue-600" /> contact@mapetransld.com</a>
                <div className="flex items-center gap-3 text-slate-400 mt-2"><MapPin className="w-4 h-4 text-blue-600" /> Orléans & France Entière</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-wide gap-4">
            <span>Copyright 2025, MapetransLD. Tous droits réservés.</span>
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