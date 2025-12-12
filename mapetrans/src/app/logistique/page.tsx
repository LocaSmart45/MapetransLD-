"use client";

import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle, Clock, MapPin, Building2, Truck, Users, MessageSquare, Box, Menu, X, Phone, Mail, Globe, ArrowUpRight, Package, Scale, Ruler, Factory, Send, Info, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function LogistiquePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
        alert("✅ Demande de cotation envoyée ! Notre service exploitation vous répond sous 30 min.");
        setIsSending(false);
    }, 1500);
  };

  return (
    <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">
      
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
            <span className="text-white font-bold">Exploitation 24h/24 7j/7</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 min-w-fit">
            <CheckCircle className="w-3 h-3 text-green-400" />
            <span className="hidden md:inline">Transport Urgent & Affrètement</span>
            <span className="md:hidden">Service Urgent</span>
          </div>
        </div>

        <nav className="border-b border-slate-200 h-20 md:h-24 flex items-center relative bg-white z-50">
          <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
            <div className="flex flex-col leading-none cursor-pointer group pr-2">
              <Link href="/">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">
                  MAPETRANS<span className="text-blue-700">.LD</span>
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
              <Link href="/logistique" className="text-blue-700 px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0">
                <Truck className="w-4 h-4 text-blue-700" /> Logistique & Fret
              </Link>
              <Link href="/demenagement" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0">
                <Box className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> Déménagement
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
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Service Exploitation</span>
                  <span className="text-lg font-bold text-slate-900 tracking-tight hover:text-blue-700 transition cursor-pointer font-mono">06 34 60 57 99</span>
                </div>
                <Link href="#cotation" className="flex items-center gap-2 bg-slate-900 text-white text-[11px] px-5 py-3 rounded-sm font-bold hover:bg-blue-700 transition duration-300 shadow-lg tracking-wide uppercase">
                  Demande de Cotation
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

      {/* === HERO LOGISTIQUE (Image corrigée) === */}
      <div className="relative h-[450px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
        <img 
          src="https://images.pexels.com/photos/4506245/pexels-photo-4506245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Entrepôt Logistique" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4 bg-white/10 backdrop-blur-sm">
            National & International
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-lg">
            Transport de Marchandises <br/> <span className="text-blue-500">& Affrètement</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
            De la course urgente (1 palette) au lot complet (33 palettes). <br/>
            Solution dédiée pour industriels, e-commerçants et artisans.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="#cotation" className="bg-blue-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2 transform hover:scale-105 duration-300">
              <Truck className="w-4 h-4"/> Obtenir une cotation
            </Link>
          </div>
        </div>
      </div>

      {/* === FORMULAIRE DE COTATION === */}
      <div id="cotation" className="relative z-20 -mt-10 px-4 max-w-5xl mx-auto w-full mb-20 animate-fade-in delay-100">
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 p-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-lg font-black uppercase">Demande de Cotation Express</h3>
                <p className="text-xs text-slate-400">Réponse de l'exploitation sous 30 minutes.</p>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-[10px] uppercase font-bold text-slate-500">Service Exploitation</div>
              <div className="font-mono font-bold text-lg">06 34 60 57 99</div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-5">
              <h4 className="text-sm font-black text-blue-800 uppercase border-b border-slate-100 pb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4"/> Expédition
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Date d'enlèvement</label><input type="date" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-slate-50" /></div>
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Date de livraison</label><input type="date" className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-slate-50" /></div>
              </div>
              <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Ville d'Enlèvement (CP)</label><input type="text" placeholder="Ex: 45000 Orléans" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" /></div>
              <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Ville de Livraison (CP)</label><input type="text" placeholder="Ex: 75001 Paris" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" /></div>
              <div className="bg-slate-50 p-3 rounded border border-slate-100">
                <label className="flex items-center gap-3 text-xs font-bold text-slate-700 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" /> Besoin de hayon élévateur ?
                </label>
              </div>
            </div>

            <div className="space-y-5">
              <h4 className="text-sm font-black text-blue-800 uppercase border-b border-slate-100 pb-2 flex items-center gap-2">
                <Package className="w-4 h-4"/> Marchandise & Contact
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Conditionnement</label><select className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white"><option>Palettes Europe (80x120)</option><option>Palettes US (100x120)</option><option>Colis / Vrac</option><option>Grandes Longueurs</option></select></div>
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Quantité / Métrage</label><input type="text" placeholder="Ex: 3 palettes" className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Poids (kg)</label><input type="text" placeholder="Ex: 1200" className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" /></div>
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Société</label><input type="text" placeholder="Nom de l'entreprise" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" /></div>
              </div>
              <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Email & Téléphone</label><input type="text" placeholder="Contact direct" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" /></div>
              <div className="pt-2"><button type="submit" disabled={isSending} className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold h-12 rounded-sm uppercase tracking-wide text-sm shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]">{isSending ? (<>Envoi en cours...</>) : (<><Send className="w-4 h-4" /> Demander le tarif</>)}</button></div>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full pb-16 animate-fade-in delay-200">
        
        {/* TITRE FLOTTE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-4">Notre Flotte & Capacités</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          <p className="text-slate-500 text-sm mt-4 max-w-xl mx-auto">
            Une gamme complète de véhicules adaptés à vos contraintes de volume et de délais.
          </p>
        </div>

        {/* GRILLE FLOTTE 4 COLONNES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* 1. MESSAGERIE (3-17m3) */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden group">
            <div className="h-40 bg-slate-100 relative overflow-hidden">
               <img src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Fourgon Messagerie" />
               <div className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-bold px-2 py-1 uppercase rounded-sm">3 à 17m³</div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-black text-slate-900 uppercase mb-2">Messagerie Express</h3>
              <p className="text-[11px] text-slate-500 mb-3">Pour les plis urgents, colis et distribution fine en centre-ville.</p>
              <div className="space-y-1 border-t border-slate-100 pt-3">
                <div className="flex justify-between text-xs"><span className="text-slate-500">Volume</span><span className="font-bold text-slate-800">3 à 17 m³</span></div>
                <div className="flex justify-between text-xs"><span className="text-slate-500">Charge</span><span className="font-bold text-slate-800">1.2 Tonnes</span></div>
              </div>
            </div>
          </div>

          {/* 2. GRAND VOLUME 20m3 */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden group">
            <div className="h-40 bg-slate-100 relative overflow-hidden">
               <img src="https://images.pexels.com/photos/4506249/pexels-photo-4506249.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="20m3 Hayon" />
               <div className="absolute top-3 left-3 bg-slate-800 text-white text-[9px] font-bold px-2 py-1 uppercase rounded-sm">20m³ Hayon</div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-black text-slate-900 uppercase mb-2">Grand Volume</h3>
              <p className="text-[11px] text-slate-500 mb-3">Standard du déménagement et de la livraison palette dédiée.</p>
              <div className="space-y-1 border-t border-slate-100 pt-3">
                <div className="flex justify-between text-xs"><span className="text-slate-500">Capacité</span><span className="font-bold text-slate-800">8 Palettes</span></div>
                <div className="flex justify-between text-xs"><span className="text-slate-500">Hayon</span><span className="font-bold text-green-600">Oui</span></div>
              </div>
            </div>
          </div>

          {/* 3. PORTEUR 19T */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden group">
            <div className="h-40 bg-slate-100 relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Porteur 19T" />
               <div className="absolute top-3 left-3 bg-slate-800 text-white text-[9px] font-bold px-2 py-1 uppercase rounded-sm">19 Tonnes</div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-black text-slate-900 uppercase mb-2">Porteur 19T</h3>
              <p className="text-[11px] text-slate-500 mb-3">Distribution régionale et lots partiels (LTL) lourds.</p>
              <div className="space-y-1 border-t border-slate-100 pt-3">
                <div className="flex justify-between text-xs"><span className="text-slate-500">Capacité</span><span className="font-bold text-slate-800">18 Palettes</span></div>
                <div className="flex justify-between text-xs"><span className="text-slate-500">Charge</span><span className="font-bold text-slate-800">9 Tonnes</span></div>
              </div>
            </div>
          </div>

          {/* 4. SEMI REMORQUE */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden group">
            <div className="h-40 bg-slate-100 relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Semi Remorque" />
               <div className="absolute top-3 left-3 bg-slate-900 text-white text-[9px] font-bold px-2 py-1 uppercase rounded-sm">44 Tonnes</div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-black text-slate-900 uppercase mb-2">Semi 44T</h3>
              <p className="text-[11px] text-slate-500 mb-3">Transport national de lots complets (FTL) longue distance.</p>
              <div className="space-y-1 border-t border-slate-100 pt-3">
                <div className="flex justify-between text-xs"><span className="text-slate-500">Capacité</span><span className="font-bold text-slate-800">33 Palettes</span></div>
                <div className="flex justify-between text-xs"><span className="text-slate-500">Charge</span><span className="font-bold text-slate-800">25 Tonnes</span></div>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION ARGUMENTS */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-black uppercase mb-6">Pourquoi confier votre Fret à Mapetrans ?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center flex-shrink-0"><ShieldCheck className="w-6 h-6" /></div>
                  <div><h4 className="font-bold uppercase text-sm mb-1">Sécurité & Assurance</h4><p className="text-xs text-slate-400 leading-relaxed">Marchandises assurées Ad Valorem. Respect strict de la RSE.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6" /></div>
                  <div><h4 className="font-bold uppercase text-sm mb-1">Respect des Délais</h4><p className="text-xs text-slate-400 leading-relaxed">Nous savons qu'un retard peut bloquer une chaîne de production.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6" /></div>
                  <div><h4 className="font-bold uppercase text-sm mb-1">Suivi Temps Réel</h4><p className="text-xs text-slate-400 leading-relaxed">Géolocalisation de votre marchandise à tout moment.</p></div>
                </div>
              </div>
            </div>
            {/* IMAGE SOBRE */}
            <div className="relative h-64 md:h-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
               <img src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Logistique" />
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="mt-auto">
        <div className="bg-blue-700 text-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="text-lg font-bold">Un transport urgent à organiser ?</span>
              <span className="text-blue-100 text-sm mt-1">Nos exploitants trouvent une solution immédiatement.</span>
            </div>
            {/* CORRECTION : Activation de l'appel téléphonique */}
            <a href="tel:0634605799" className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700">
              <Phone className="w-4 h-4 inline mr-2"/> DEMANDER UN PRIX
            </a>
          </div>
        </div>

        <div id="contact" className="bg-black text-white py-12 px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col leading-none mb-6"><span className="text-xl font-black tracking-tighter text-white">MAPETRANS<span className="text-blue-700">.LD</span></span><span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Solutions de Transport</span></div>
              <p className="text-slate-400 text-xs leading-relaxed text-justify">Partenaire expert depuis 2015. Nous assurons vos transports critiques, navettes VIP et déménagements.</p>
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