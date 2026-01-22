"use client";

import React, { useState } from 'react';
import { CheckCircle, Clock, MapPin, Building2, Truck, Users, MessageSquare, Box, Menu, X, Phone, Mail, ArrowUpRight, ShieldCheck, Smile, Package, Home } from 'lucide-react';
import Link from 'next/link';

export default function DemenagementPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
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
      <header className="fixed top-0 w-full z-50 shadow-sm bg-white transition-all duration-300">
        <div className="bg-slate-900 text-slate-300 h-9 md:h-10 flex items-center justify-between text-[9px] md:text-[11px] font-medium tracking-wide uppercase px-4 overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-1.5 md:gap-2 min-w-fit">
            <Clock className="w-3 h-3 text-blue-400" />
            <span className="text-white font-bold">Devis sous 24h</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 min-w-fit">
            <CheckCircle className="w-3 h-3 text-green-400" />
            <span className="hidden md:inline">Particuliers & Bureaux</span>
            <span className="md:hidden">Déménagement Pro</span>
          </div>
        </div>

        <nav className="border-b border-slate-200 h-20 md:h-24 flex items-center relative bg-white z-50">
          <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center gap-4">
            <div className="flex flex-col leading-none cursor-pointer group pr-2 shrink-0">
              <Link href="/">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 whitespace-nowrap">
                  MAPETRANS <span className="text-blue-700">LD</span>
                </span>
              </Link>
              <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1 ml-0.5">
                Solutions de Transport
              </span>
            </div>
            
            <div className="hidden xl:flex items-center text-[10px] font-extrabold text-slate-600 tracking-widest uppercase">
              <Link href="/agence" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0">
                <Building2 className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> L'Agence
              </Link>
              <Link href="/vtc" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0">
                <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> VTC & Chauffeurs
              </Link>
              <Link href="/logistique" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0">
                <Truck className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> Logistique & Fret
              </Link>
              <Link href="/demenagement" className="text-blue-700 px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0">
                <Box className="w-4 h-4 text-blue-700" /> Déménagement
              </Link>
              <Link href="/contact" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group">
                <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> Contact
              </Link>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <a href="tel:0634605799" className="xl:hidden flex items-center gap-2 bg-blue-700 text-white px-3 py-2 rounded-sm shadow-md hover:bg-blue-800 transition">
                <Phone className="w-3 h-3" /> <span className="text-[10px] font-black tracking-wider">06 34 60 57 99</span>
              </a>
              <div className="hidden xl:flex items-center gap-6 pl-6">
                <div className="flex flex-col items-end text-right">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Besoin d'un tarif ?</span>
                  <a href="tel:0634605799" className="text-lg font-bold text-slate-900 tracking-tight hover:text-blue-700 transition cursor-pointer font-mono whitespace-nowrap">
                    06 34 60 57 99
                  </a>
                </div>
                <Link href="#contact-hub" className="flex items-center gap-2 bg-slate-900 text-white text-[11px] px-5 py-3 rounded-sm font-bold hover:bg-blue-700 transition duration-300 shadow-lg tracking-wide uppercase">
                  Devis Gratuit
                </Link>
              </div>
              <button className="xl:hidden p-1 text-slate-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-28 z-40 bg-white border-t border-slate-100 p-6 flex flex-col gap-6 xl:hidden overflow-y-auto pb-32">
            <div className="flex flex-col gap-4 text-sm font-black uppercase tracking-wider text-slate-800">
              <Link href="/agence" className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100" onClick={() => setIsMobileMenuOpen(false)}><Building2 className="w-5 h-5 text-blue-700" /> L'Agence</Link>
              <Link href="/vtc" className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100" onClick={() => setIsMobileMenuOpen(false)}><Users className="w-5 h-5 text-blue-700" /> VTC & Chauffeurs</Link>
              <Link href="/logistique" className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100" onClick={() => setIsMobileMenuOpen(false)}><Truck className="w-5 h-5 text-blue-700" /> Logistique & Fret</Link>
              <Link href="/demenagement" className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100" onClick={() => setIsMobileMenuOpen(false)}><Box className="w-5 h-5 text-blue-700" /> Déménagement</Link>
              <Link href="/contact" className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100" onClick={() => setIsMobileMenuOpen(false)}><MessageSquare className="w-5 h-5 text-blue-700" /> Contact</Link>
            </div>
          </div>
        )}
      </header>

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
                <a href="tel:0634605799" className="w-full bg-white text-slate-900 font-black h-14 rounded-sm uppercase tracking-wide text-sm shadow-xl hover:bg-slate-100 transition flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" /> Appeler le 06 34 60 57 99
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

      {/* FOOTER */}
      <footer className="mt-auto">
        <div className="bg-blue-700 text-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="text-lg font-bold">Vous préparez votre déménagement ?</span>
              <span className="text-blue-100 text-sm mt-1">Ne stressez plus. Contactez Mapetrans pour une visite gratuite.</span>
            </div>
            <a href="tel:0634605799" className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700">
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
                <a href="tel:0634605799" className="flex items-center gap-3 hover:text-blue-400 transition"><Phone className="w-4 h-4 text-blue-600" /> 06 34 60 57 99</a>
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
              <Link href="#" className="hover:text-slate-400 transition">Mentions Légales</Link>
              <Link href="#" className="hover:text-slate-400 transition">Politique de Confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}