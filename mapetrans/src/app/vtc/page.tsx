"use client";

import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle, Clock, MapPin, Building2, Truck, Users, MessageSquare, Box, Menu, X, Phone, Mail, Globe, ArrowUpRight, Star, Moon, Calendar, Info, Briefcase, Plane, User, Send, Loader2, Train, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function VTCPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  // Envoi formulaire réservation
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
        alert("✅ Demande envoyée !");
        setIsSending(false);
    }, 1000);
  };

  // Envoi demande de rappel PRO
  const handleCallbackRequest = (e: React.FormEvent) => {
    e.preventDefault();
    alert("📞 Demande de rappel enregistrée ! Un conseiller Pro vous rappelle dans 15min.");
    setIsCallbackModalOpen(false);
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
        .delay-300 { animation-delay: 0.3s; }
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
                <PhoneCall className="w-6 h-6" /> Rappel Prioritaire
              </h3>
              <p className="text-sm text-blue-100 mt-1">Service réservé aux entreprises.</p>
            </div>
            
            <form onSubmit={handleCallbackRequest} className="p-6 space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Nom de la société</label>
                <input type="text" required placeholder="Ex: Mapetrans SAS" className="w-full h-12 border border-slate-300 rounded-sm px-4 font-bold text-slate-800 outline-none focus:border-blue-700 bg-slate-50" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Numéro direct</label>
                <input type="tel" required placeholder="06 00 00 00 00" className="w-full h-12 border border-slate-300 rounded-sm px-4 font-bold text-slate-800 outline-none focus:border-blue-700 bg-slate-50" />
              </div>
              <button type="submit" className="w-full h-12 bg-slate-900 text-white font-bold uppercase tracking-wide rounded-sm hover:bg-black transition shadow-lg mt-2">
                Me faire rappeler
              </button>
              <p className="text-[10px] text-center text-slate-400">
                Nos conseillers sont disponibles de 8h à 19h.
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
            <span className="text-white font-bold">Astreinte 24h/24 7j/7</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 min-w-fit">
            <CheckCircle className="w-3 h-3 text-green-400" />
            <span className="hidden md:inline">Devis Gratuit & Réponse Immédiate</span>
            <span className="md:hidden">Réponse Immédiate</span>
          </div>
        </div>

        <nav className="border-b border-slate-200 h-20 md:h-24 flex items-center relative bg-white z-50">
          <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
            <div className="flex flex-col leading-none cursor-pointer group pr-2">
              <Link href="/">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">
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
              <Link href="/vtc" className="text-blue-700 px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0">
                <Users className="w-4 h-4 text-blue-700" /> VTC & Chauffeurs
              </Link>
              <Link href="/logistique" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0">
                <Truck className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> Logistique & Fret
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
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Urgence & Réservation</span>
                  <span className="text-lg font-bold text-slate-900 tracking-tight hover:text-blue-700 transition cursor-pointer font-mono">06 34 60 57 99</span>
                </div>
                <Link href="#booking" className="flex items-center gap-2 bg-slate-900 text-white text-[11px] px-5 py-3 rounded-sm font-bold hover:bg-blue-700 transition duration-300 shadow-lg tracking-wide uppercase">
                  Devis Express
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

      {/* === HERO VTC === */}
      <div className="relative h-[450px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
          alt="Chauffeur VTC Mapetrans Orléans" 
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4 bg-white/10 backdrop-blur-sm">
            Tarifs 2025 - 2026
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-lg">
            Votre Chauffeur VTC <br/> <span className="text-blue-500">Orléans & Île-de-France</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Spécialiste des navettes aéroports (Orly, Roissy, Beauvais) et transferts gares. <br/>
            Alternative Taxi haut de gamme, tarifs fixes et service de véhicule privatif non partagé.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* BOUTON MODIFIÉ : APPEL DIRECT ICI (Déclenche l'appel sur mobile/desktop) */}
            <a href="tel:0634605799" className="bg-white text-slate-900 px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition shadow-lg inline-flex items-center gap-2 transform hover:scale-105 duration-300">
              <Phone className="w-4 h-4"/> Une demande particulière ?
            </a>
            <span className="text-white text-xs font-medium opacity-80 md:hidden">ou</span>
            <Link href="#booking" className="bg-blue-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2">
              <Calendar className="w-4 h-4"/> Réserver une navette
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full py-16 animate-fade-in delay-100">
        
        {/* SECTION PRO & ENTREPRISES */}
        <div className="mb-20 bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2 block">Service B2B</span>
              <h2 className="text-3xl font-black uppercase mb-4">Professionnels & Entreprises</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Mapetrans.LD est le partenaire privilégié des entreprises du Loiret pour la gestion des déplacements collaborateurs et VIP. Solutions sur mesure adaptées à vos besoins réguliers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-blue-500"/> Facturation mensuelle fin de mois</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-blue-500"/> Navettes régulières (Matin/Soir)</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-blue-500"/> Priorité de réservation & Ligne dédiée</li>
              </ul>
              <div className="mt-8">
                {/* L'ancienne modale est conservée ici pour le rappel Pro (Moins urgent que le bouton Hero) */}
                <button onClick={() => setIsCallbackModalOpen(true)} className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase text-xs hover:text-white transition group">
                  Demander à être rappelé <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <Briefcase className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Navettes Salariés</h3>
              <p className="text-xs text-slate-400 mb-6">
                Mise en place de lignes régulières pour le transport de vos équipes entre la gare d'Orléans/Fleury et vos bureaux.
              </p>
              <div className="h-px w-full bg-white/10 mb-6"></div>
              <Building2 className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Événementiel</h3>
              <p className="text-xs text-slate-400">
                Gestion logistique complète pour vos séminaires, congrès et visites de sites industriels.
              </p>
            </div>
          </div>
        </div>

        {/* TITRE TARIFS */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-4">Nos Tarifs Premium</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          <p className="text-slate-500 text-sm mt-4 max-w-xl mx-auto">
            Des prix fixes au départ d'Orléans. <br/>
            <strong>Pas de partage :</strong> le véhicule est 100% réservé pour vous.
          </p>
        </div>

        {/* GRILLE TARIFS (COPIE DU CODE VALIDÉ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* ORLY */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-32 bg-blue-900 relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Orly" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 flex items-center justify-between px-6 text-white"><h3 className="text-2xl font-black uppercase">ORLY</h3><Plane className="w-6 h-6" /></div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">180 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 6 Passagers</span><span className="text-xl font-black text-slate-800">210 €</span></div>
              <div className="flex justify-between"><span className="text-sm font-bold text-slate-500">7 à 8 Passagers</span><span className="text-xl font-black text-slate-800">230 €</span></div>
            </div>
          </div>

          {/* ROISSY */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-32 bg-slate-900 relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Roissy" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 flex items-center justify-between px-6 text-white"><h3 className="text-2xl font-black uppercase">ROISSY</h3><Plane className="w-6 h-6" /></div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">210 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 6 Passagers</span><span className="text-xl font-black text-slate-800">240 €</span></div>
              <div className="flex justify-between"><span className="text-sm font-bold text-slate-500">6 à 8 Passagers</span><span className="text-xl font-black text-slate-800">260 €</span></div>
            </div>
          </div>

          {/* PARIS */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition duration-300">
            <div className="h-32 bg-blue-900 relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1558284422-b2f7034c7c59?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Paris Gare" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 flex items-center justify-between px-6 text-white"><h3 className="text-2xl font-black uppercase">PARIS</h3><Train className="w-6 h-6" /></div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">200 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 6 Passagers</span><span className="text-xl font-black text-slate-800">230 €</span></div>
              <div className="flex justify-between"><span className="text-sm font-bold text-slate-500">7 à 8 Passagers</span><span className="text-xl font-black text-slate-800">260 €</span></div>
            </div>
          </div>

          {/* BEAUVAIS */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition duration-300">
            <div className="h-32 bg-slate-800 relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1556382363-8967ac2b3543?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Beauvais" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 flex items-center justify-between px-6 text-white"><h3 className="text-2xl font-black uppercase">BEAUVAIS</h3><Plane className="w-6 h-6" /></div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">300 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 6 Passagers</span><span className="text-xl font-black text-slate-800">340 €</span></div>
              <div className="flex justify-between"><span className="text-sm font-bold text-slate-500">7 à 8 Passagers</span><span className="text-xl font-black text-slate-800">380 €</span></div>
            </div>
          </div>

          {/* TOURS */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition duration-300">
            <div className="h-32 bg-blue-900 relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Tours" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 flex items-center justify-between px-6 text-white"><h3 className="text-2xl font-black uppercase">TOURS</h3><Plane className="w-6 h-6" /></div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">200 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 6 Passagers</span><span className="text-xl font-black text-slate-800">220 €</span></div>
              <div className="flex justify-between"><span className="text-sm font-bold text-slate-500">7 à 8 Passagers</span><span className="text-xl font-black text-slate-800">240 €</span></div>
            </div>
          </div>

          {/* INFOS SUPP */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg flex flex-col justify-center">
            <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-2 text-slate-800"><Info className="w-6 h-6 text-blue-600"/> Infos & Suppléments</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li className="flex justify-between border-b border-slate-100 pb-3"><span className="flex items-center gap-2"><Moon className="w-4 h-4 text-slate-400"/> Nuit (20h-05h)</span><span className="text-slate-900 font-bold">+20€</span></li>
              <li className="flex justify-between border-b border-slate-100 pb-3"><span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400"/> Dimanche & Férié</span><span className="text-slate-900 font-bold">+20€</span></li>
              <li className="flex justify-between border-b border-slate-100 pb-3"><span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-slate-400"/> Bagages supp.</span><span className="text-slate-900 font-bold">10€ <span className="text-[10px] font-normal text-slate-400">/unité</span></span></li>
              <li className="flex justify-between"><span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400"/> Hors Agglo (&gt;10km)</span><span className="text-slate-900 font-bold">0,80€ <span className="text-[10px] font-normal text-slate-400">/km</span></span></li>
            </ul>
            <div className="mt-6 text-[11px] text-slate-500 italic bg-slate-50 p-4 rounded border border-slate-100">Attente retard avion/train : gratuite jusqu'à 35min, puis 30€/heure.</div>
          </div>
        </div>
      </div>

      {/* FORMULAIRE (Conserved) */}
      <div id="booking" className="relative z-20 px-4 max-w-5xl mx-auto w-full mb-20 animate-fade-in delay-200">
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 p-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3"><Calendar className="w-6 h-6 text-blue-500" /><div><h3 className="text-lg font-black uppercase">Demande de Réservation</h3><p className="text-xs text-slate-400">Confirmation de disponibilité sous 1h.</p></div></div>
            <div className="hidden md:block text-right"><div className="text-[10px] uppercase font-bold text-slate-500">Besoin d'aide ?</div><div className="font-mono font-bold text-lg">06 34 60 57 99</div></div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-5">
              <h4 className="text-sm font-black text-blue-800 uppercase border-b border-slate-100 pb-2 flex items-center gap-2"><MapPin className="w-4 h-4"/> Détails du trajet</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Date</label><input type="date" name="date" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-slate-50" /></div>
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Heure</label><input type="time" name="time" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-slate-50" /></div>
              </div>
              <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Adresse de Départ</label><input type="text" name="depart" placeholder="Ex: 10 rue de la République, Orléans" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" /></div>
              <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Destination</label><input type="text" name="destination" placeholder="Ex: Aéroport Orly Terminal 2..." required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" /></div>
              <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">N° de Vol / Train (Optionnel)</label><div className="relative"><Plane className="w-4 h-4 text-slate-400 absolute left-3 top-3" /><input type="text" name="vol_train" placeholder="Ex: AF1234 ou TGV 8540" className="w-full h-10 border border-slate-300 rounded-sm pl-9 pr-3 text-sm font-medium focus:border-blue-600 outline-none" /></div></div>
            </div>
            <div className="space-y-5">
              <h4 className="text-sm font-black text-blue-800 uppercase border-b border-slate-100 pb-2 flex items-center gap-2"><User className="w-4 h-4"/> Passagers & Contact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Nb Passagers</label><select name="passagers" className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white"><option value="1">1 personne</option><option value="2">2 personnes</option><option value="3">3 personnes</option><option value="4">4 personnes</option><option value="5-8">5 à 8 personnes</option></select></div>
                <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Véhicule</label><select name="vehicule" className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white"><option value="Berline">Berline Confort</option><option value="Van">Van (Groupe/Bagages)</option></select></div>
              </div>
              <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Vos Coordonnées</label><input type="text" name="user_name" placeholder="Nom complet + Téléphone" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" /></div>
              <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Email</label><input type="email" name="user_email" placeholder="votre@email.com" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" /></div>
              <div className="pt-2"><button type="submit" disabled={isSending} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-sm uppercase tracking-wide text-sm shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]">{isSending ? (<>Envoi en cours...</>) : (<><Send className="w-4 h-4" /> Envoyer la demande</>)}</button><p className="text-[10px] text-center text-slate-400 mt-2">Paiement sécurisé à bord ou sur facture.</p></div>
            </div>
          </form>
        </div>
      </div>

      {/* FOOTER (COPIE CONFORME ACCUEIL) */}
      <footer className="mt-auto">
        <div className="bg-blue-700 text-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="text-lg font-bold">Une demande précise ? Des conditions particulières ?</span>
              <span className="text-blue-100 text-sm mt-1">Contactez-nous dès maintenant, réponse immédiate garantie.</span>
            </div>
            {/* CORRECTION : Activation de l'appel téléphonique */}
            <a href="tel:0634605799" className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700">
              <Phone className="w-4 h-4 inline mr-2"/> CONTACT RAPIDE
            </a>
          </div>
        </div>

        <div id="contact" className="bg-black text-white py-12 px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col leading-none mb-6"><span className="text-xl font-black tracking-tighter text-white">MAPETRANS LD<span className="text-blue-700">.LD</span></span><span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Solutions de Transport</span></div>
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
            <span>Copyright 2025, Mapetrans LD. Tous droits réservés.</span>
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