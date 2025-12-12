"use client";

import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle, Clock, MapPin, Building2, Truck, Users, MessageSquare, Box, Menu, X, Phone, Mail, Globe, ArrowUpRight, Package, Scale, Ruler, Factory, Send, Info, ShieldCheck, Home as HomeIcon, Layers, Sofa, Warehouse, Briefcase, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function DemenagementPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  // Ajout de l'état pour la modale de rappel
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
        alert("✅ Demande de devis envoyée ! Un expert déménagement va vous rappeler pour affiner le volume.");
        setIsSending(false);
    }, 1500);
  };

  // Envoi demande de rappel générique
  const handleCallbackRequest = (e: React.FormEvent) => {
    e.preventDefault();
    alert("📞 Demande de rappel enregistrée ! Un conseiller Déménagement vous rappelle rapidement.");
    setIsCallbackModalOpen(false);
  };

  // Fonction pour ouvrir la modale
  const openCallbackModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCallbackModalOpen(true);
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

      {/* === FENÊTRE MODALE DE RAPPEL (POP-UP) === */}
      {isCallbackModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative">
            <button 
              onClick={() => setIsCallbackModalOpen(false)}
              className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
            
            <div className="bg-blue-700 p-6 text-white">
              <h3 className="text-xl font-black uppercase flex items-center gap-2">
                <PhoneCall className="w-6 h-6" /> Être rappelé (Déménagement)
              </h3>
              <p className="text-sm text-blue-100 mt-1">Laissez-nous vos coordonnées pour une prise de rendez-vous.</p>
            </div>
            
            <form onSubmit={handleCallbackRequest} className="p-6 space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Nom (Contact)</label>
                <input type="text" required placeholder="Ex: Jean Dupont" className="w-full h-12 border border-slate-300 rounded-sm px-4 font-bold text-slate-800 outline-none focus:border-blue-700 bg-slate-50" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Numéro direct</label>
                <input type="tel" required placeholder="06 00 00 00 00" className="w-full h-12 border border-slate-300 rounded-sm px-4 font-bold text-slate-800 outline-none focus:border-blue-700 bg-slate-50" />
              </div>
              <button type="submit" className="w-full h-12 bg-slate-900 text-white font-bold uppercase tracking-wide rounded-sm hover:bg-black transition shadow-lg mt-2">
                Me faire rappeler pour un devis
              </button>
              <p className="text-[10px] text-center text-slate-400">
                Nos conseillers vous recontacteront pour organiser la visite technique.
              </p>
            </form>
          </div>
        </div>
      )}


      {/* === HEADER === */}
      <header className="fixed top-0 w-full z-50 shadow-sm bg-white transition-all duration-300">
        <div className="bg-slate-900 text-slate-300 h-9 md:h-10 flex items-center justify-between text-[9px] md:text-[11px] font-medium tracking-wide uppercase px-4 overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-1.5 md:gap-2 min-w-fit">
            <Clock className="w-3 h-3 text-blue-400" />
            <span className="text-white font-bold">Visite technique Gratuite</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 min-w-fit">
            <CheckCircle className="w-3 h-3 text-green-400" />
            <span className="hidden md:inline">Assurance Ad Valorem Incluse</span>
            <span className="md:hidden">Assurance Incluse</span>
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
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Service Déménagement</span>
                  <span className="text-lg font-bold text-slate-900 tracking-tight hover:text-blue-700 transition cursor-pointer font-mono">06 34 60 57 99</span>
                </div>
                <Link href="#devis" className="flex items-center gap-2 bg-slate-900 text-white text-[11px] px-5 py-3 rounded-sm font-bold hover:bg-blue-700 transition duration-300 shadow-lg tracking-wide uppercase">
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
              <Link href="/" className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100" onClick={() => setIsMobileMenuOpen(false)}><Building2 className="w-5 h-5 text-blue-700" /> L'Agence</Link>
              <Link href="/vtc" className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100" onClick={() => setIsMobileMenuOpen(false)}><Users className="w-5 h-5 text-blue-700" /> VTC & Chauffeurs</Link>
              <Link href="/logistique" className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100" onClick={() => setIsMobileMenuOpen(false)}><Truck className="w-5 h-5 text-blue-700" /> Logistique & Fret</Link>
              <Link href="/demenagement" className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100" onClick={() => setIsMobileMenuOpen(false)}><Box className="w-5 h-5 text-blue-700" /> Déménagement</Link>
              <Link href="#contact" className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100" onClick={() => setIsMobileMenuOpen(false)}><MessageSquare className="w-5 h-5 text-blue-700" /> Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* === HERO DEMENAGEMENT === */}
      <div className="relative h-[450px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
        <img 
          src="https://images.pexels.com/photos/4246202/pexels-photo-4246202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Couple Déménagement Cartons" 
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        />
        {/* VOILE NOIR POUR LISIBILITÉ */}
        <div className="absolute inset-0 bg-slate-900/60"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4 bg-white/10 backdrop-blur-sm">
            Particuliers & Entreprises
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-lg">
            Déménagement <br/> <span className="text-blue-500">& Stockage</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Changez de vie sans stress. Nous gérons votre projet de A à Z avec des solutions sur-mesure. <br/>
            Équipes professionnelles, matériel adapté et monte-meubles.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="#devis" className="bg-blue-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2 transform hover:scale-105 duration-300">
              <Box className="w-4 h-4"/> Devis en ligne
            </Link>
          </div>
        </div>
      </div>

      {/* === FORMULAIRE DEVIS DÉMÉNAGEMENT === */}
      <div id="devis" className="relative z-20 -mt-10 px-4 max-w-5xl mx-auto w-full mb-20 animate-fade-in delay-100">
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 p-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <HomeIcon className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-lg font-black uppercase">Votre Devis Déménagement</h3>
                <p className="text-xs text-slate-400">Gratuit et sans engagement. Visite technique possible.</p>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-[10px] uppercase font-bold text-slate-500">Service Client</div>
              <div className="font-mono font-bold text-lg">06 34 60 57 99</div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* COLONNE GAUCHE : DÉPART */}
            <div className="space-y-5">
              <h4 className="text-sm font-black text-blue-800 uppercase border-b border-slate-100 pb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4"/> Adresse de Départ
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Date souhaitée</label><input type="date" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-slate-50" /></div>
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Ville / CP</label><input type="text" placeholder="Ex: 45000" className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-slate-50" /></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Type Logement</label>
                  <select className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white">
                    <option>Appartement</option>
                    <option>Maison</option>
                    <option>Bureaux</option>
                    <option>Box / Cave</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Surface env. (m²)</label>
                  <input type="number" placeholder="Ex: 50" className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Étage</label>
                    <select className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white">
                        <option>RDC</option>
                        <option>1er</option>
                        <option>2ème</option>
                        <option>3ème</option>
                        <option>4ème et +</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Ascenseur ?</label>
                    <select className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white">
                        <option>Oui</option>
                        <option>Non</option>
                    </select>
                 </div>
              </div>
            </div>

            {/* COLONNE DROITE : ARRIVÉE & CONTACT */}
            <div className="space-y-5">
              <h4 className="text-sm font-black text-blue-800 uppercase border-b border-slate-100 pb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4"/> Adresse d'Arrivée
              </h4>

              <div className="grid grid-cols-2 gap-4">
                 <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Ville / CP</label><input type="text" placeholder="Ex: 75000" className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" /></div>
                 <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Type Logement</label>
                    <select className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white">
                        <option>Appartement</option>
                        <option>Maison</option>
                        <option>Bureaux</option>
                        <option>Garde-Meubles</option>
                    </select>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Étage Arrivée</label>
                    <select className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white">
                        <option>RDC</option>
                        <option>1er</option>
                        <option>2ème et +</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Ascenseur ?</label>
                    <select className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white">
                        <option>Oui</option>
                        <option>Non</option>
                    </select>
                 </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-4">
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Vos Coordonnées (Nom + Tél)</label>
                <input type="text" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" />
              </div>

              <div className="pt-2">
                <button type="submit" disabled={isSending} className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold h-12 rounded-sm uppercase tracking-wide text-sm shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]">
                  {isSending ? (<>Envoi en cours...</>) : (<><Send className="w-4 h-4" /> Recevoir mon devis</>)}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full pb-16 animate-fade-in delay-200">
        
        {/* TITRE SOLUTIONS */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-4">Une solution pour chaque projet</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          <p className="text-slate-500 text-sm mt-4 max-w-xl mx-auto">
            Nous intervenons pour les particuliers et les professionnels avec du matériel adapté.
          </p>
        </div>

        {/* SECTION PARTICULIERS / PROS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 group">
                <div className="bg-blue-50 p-4 rounded-full w-fit mb-6">
                    <HomeIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase mb-4">Déménagement Résidentiel</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Que vous changiez de maison, d'appartement ou de région, nous vous accompagnons à chaque étape. Nous définissons ensemble le niveau d'aide souhaité lors de la visite technique.
                </p>
                <ul className="space-y-2 text-xs font-bold text-slate-500">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Protection du mobilier</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Démontage / Remontage</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Mise en penderie</li>
                </ul>
                <div className="mt-6">
                    {/* Bouton qui ouvre la modale de rappel */}
                    <button onClick={openCallbackModal} className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase text-xs hover:text-blue-800 transition group">
                        <PhoneCall className="w-4 h-4"/> Demander un rappel pour un devis
                    </button>
                </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-20 -mr-10 -mt-10"></div>
                <div className="bg-white/10 p-4 rounded-full w-fit mb-6 relative z-10">
                    <Briefcase className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-black uppercase mb-4 relative z-10">Transfert d'Entreprise</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 relative z-10">
                    Déplacement de bureaux, archives, matériel informatique ou transfert de siège social. Nous assurons la continuité de votre activité avec des interventions possibles en horaires décalés.
                </p>
                <ul className="space-y-2 text-xs font-bold text-slate-400 relative z-10">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500"/> Gestion de parc informatique</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500"/> Manutention lourde (Coffres, Baies)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500"/> Destruction d'archives</li>
                </ul>
                <div className="mt-6">
                    {/* Bouton qui ouvre la modale de rappel */}
                    <button onClick={openCallbackModal} className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase text-xs hover:text-white transition group">
                        <PhoneCall className="w-4 h-4"/> Demander un rappel pour les pros
                    </button>
                </div>
            </div>
        </div>

        {/* SECTION STOCKAGE PRO & MONTE MEUBLES */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8 flex items-center gap-6 relative overflow-hidden group">
                <div className="bg-slate-100 p-4 rounded-full flex-shrink-0">
                    <Warehouse className="w-8 h-8 text-slate-700" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-lg font-black text-slate-900 uppercase mb-2">Stockage & Logistique Pro</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Solution de stockage brut en entrepôt sécurisé. Gestion de stock, palettes et matériel professionnel. (Pas de box individuel).
                    </p>
                    <span className="text-[10px] font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded uppercase">Sur devis uniquement</span>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 flex items-center gap-6 relative overflow-hidden group">
                <div className="bg-blue-50 p-4 rounded-full flex-shrink-0">
                    <Sofa className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                    <h3 className="text-lg font-black text-slate-900 uppercase mb-2">Location Monte-Meubles</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">Passage par fenêtre jusqu'au 8ème étage. Avec technicien qualifié pour la sécurité.</p>
                    <span className="text-[10px] font-bold text-blue-700 uppercase">Forfait demi-journée dispo</span>
                </div>
            </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="mt-auto">
        <div className="bg-blue-700 text-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="text-lg font-bold">Un projet de déménagement ?</span>
              <span className="text-blue-100 text-sm mt-1">Obtenez votre estimation gratuite en 2 minutes.</span>
            </div>
            {/* CORRECTION : Activation de l'appel téléphonique */}
            <a href="tel:0634605799" className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700">
              <Phone className="w-4 h-4 inline mr-2"/> COMMENCER MON DEVIS
            </a>
          </div>
        </div>

        <div id="contact" className="bg-black text-white py-12 px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col leading-none mb-6"><span className="text-xl font-black tracking-tighter text-white">MAPETRANS<span className="text-blue-700">.LD</span></span><span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Solutions de Transport</span></div>
              <p className="text-slate-400 text-xs leading-relaxed text-justify">Partenaire expert depuis 2015. Nous assurons vos transports critiques, navettes VIP et déménagements avec une exigence de qualité unique. Licences et assurances à jour.</p>
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