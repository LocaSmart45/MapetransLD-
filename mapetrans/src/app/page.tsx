"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Shield, Clock, MapPin, Building2, Truck, Users, MessageSquare, Search, ChevronDown, Package, Box, Layers, Menu, X, Phone, Mail, FileText, Globe, ArrowUpRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'vtc' | 'fret' | 'move'>('vtc');
  const router = useRouter();

  // Données pour le sélecteur intelligent
  const servicesData = {
    vtc: [
      "Navette Aéroport ORLY",
      "Navette Aéroport ROISSY CDG",
      "Navette Aéroport BEAUVAIS",
      "Navette Aéroport TOURS",
      "Navette GARES PARISIENNES",
      "Berline / Trajet sur mesure"
    ],
    fret: [
      "Pli Urgent / Colis (Véhicule Léger)",
      "14m³ / 20m³ (Messagerie/Palette)",
      "Porteur Poids Lourd",
      "Semi-Remorque (Complet 44T)",
      "Transport Frigorifique"
    ],
    move: [
      "Déménagement Particulier",
      "Transfert d'Entreprise",
      "Garde-Meubles (Stockage)",
      "Location Monte-Meuble"
    ]
  };

  // FONCTION DE REDIRECTION INTELLIGENTE
  const handleEstimate = () => {
    if (activeTab === 'vtc') {
      router.push('/vtc');
    } else if (activeTab === 'fret') {
      router.push('/logistique');
    } else if (activeTab === 'move') {
      router.push('/demenagement'); // Redirection correcte vers Déménagement
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
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
              <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">
                MAPETRANS<span className="text-blue-700">.LD</span>
              </span>
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
              <Link href="/demenagement" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0">
                <Box className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> Déménagement
              </Link>
              <Link href="#contact" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group">
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
                <Link href="#contact" className="flex items-center gap-2 bg-slate-900 text-white text-[11px] px-5 py-3 rounded-sm font-bold hover:bg-blue-700 transition duration-300 shadow-lg tracking-wide uppercase">
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

      {/* 2. HERO SECTION */}
      <div className="relative z-10 pb-8 md:pb-16 px-4 md:px-6 max-w-7xl mx-auto pt-8 md:pt-12 w-full">
        <div className="max-w-5xl mx-auto mb-10 text-center">
          <h1 className="text-3xl md:text-6xl font-black tracking-tight text-slate-900 mb-8 uppercase leading-tight md:leading-none">
            Transport, Logistique <br/> <span className="text-slate-400">& Déménagement.</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-3 md:gap-10 text-[10px] md:text-sm font-bold text-slate-700 uppercase tracking-wider bg-white py-3 px-4 md:px-8 rounded-lg shadow-sm border border-slate-200 w-full md:w-fit mx-auto">
            <span className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full"></span> Transport de Personnes</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full"></span> Transport de Fret</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full"></span> Affrètement</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap"><span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full"></span> Stockage & Déménagement</span>
          </div>
        </div>

        {/* === TABLEAU DE BORD INTELLIGENT === */}
        <div className="bg-white rounded-lg shadow-xl shadow-slate-200 border border-slate-200 max-w-7xl mx-auto overflow-hidden mb-12">
          
          <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('vtc')}
              className={`flex-1 py-4 px-4 text-[9px] md:text-xs font-black uppercase tracking-widest flex justify-center items-center gap-2 min-w-[120px] transition-colors
              ${activeTab === 'vtc' ? 'bg-white text-blue-700 border-t-2 border-blue-700' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100 border-t-2 border-transparent'}`}
            >
              <Users className="w-3 h-3 md:w-4 md:h-4" /> VTC & Pers.
            </button>
            <button 
              onClick={() => setActiveTab('fret')}
              className={`flex-1 py-4 px-4 text-[9px] md:text-xs font-black uppercase tracking-widest flex justify-center items-center gap-2 min-w-[120px] transition-colors
              ${activeTab === 'fret' ? 'bg-white text-blue-700 border-t-2 border-blue-700' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100 border-t-2 border-transparent'}`}
            >
              <Package className="w-3 h-3 md:w-4 md:h-4" /> Fret & Log.
            </button>
            <button 
              onClick={() => setActiveTab('move')}
              className={`flex-1 py-4 px-4 text-[9px] md:text-xs font-black uppercase tracking-widest flex justify-center items-center gap-2 min-w-[120px] transition-colors
              ${activeTab === 'move' ? 'bg-white text-blue-700 border-t-2 border-blue-700' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100 border-t-2 border-transparent'}`}
            >
              <Box className="w-3 h-3 md:w-4 md:h-4" /> Déménagement
            </button>
          </div>

          <div className="p-4 md:p-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-end">
              
              <div className="md:col-span-3">
                <label className="block text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 md:mb-2">
                  {activeTab === 'vtc' ? 'Destination / Forfait' : 'Type de prestation'}
                </label>
                <div className="relative w-full bg-slate-50 h-10 md:h-12 border border-slate-200 rounded-sm px-4 flex items-center">
                  <select className="w-full bg-transparent text-xs md:text-sm font-bold text-slate-800 appearance-none focus:outline-none cursor-pointer z-10">
                    {servicesData[activeTab].map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-slate-400 absolute right-4 pointer-events-none" />
                </div>
              </div>

              {activeTab === 'vtc' ? (
                <>
                  <div className="md:col-span-3">
                    <label className="block text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 md:mb-2">Lieu de prise en charge</label>
                    <div className="w-full bg-slate-50 h-10 md:h-12 border border-slate-200 rounded-sm px-4 flex items-center gap-3 hover:border-blue-500 transition cursor-text group focus-within:border-blue-500">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-slate-400 group-focus-within:text-blue-500" />
                      <input type="text" placeholder="Orléans ou alentours..." className="w-full bg-transparent outline-none text-xs md:text-sm font-bold text-slate-800 placeholder-slate-400" />
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 md:mb-2">Passagers</label>
                    <div className="relative w-full bg-slate-50 h-10 md:h-12 border border-slate-200 rounded-sm px-4 flex items-center">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-slate-400 mr-2" />
                      <select className="w-full bg-transparent text-xs md:text-sm font-bold text-slate-800 appearance-none focus:outline-none cursor-pointer z-10">
                        <option>1 à 3 personnes</option>
                        <option>4 à 6 personnes</option>
                        <option>7 à 8 personnes</option>
                      </select>
                      <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-slate-400 absolute right-4 pointer-events-none" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:col-span-3">
                    <label className="block text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 md:mb-2">Départ</label>
                    <div className="w-full bg-slate-50 h-10 md:h-12 border border-slate-200 rounded-sm px-4 flex items-center gap-3 hover:border-blue-500 transition cursor-text group focus-within:border-blue-500">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-slate-400 group-focus-within:text-blue-500" />
                      <input type="text" placeholder="Ville ou Code Postal..." className="w-full bg-transparent outline-none text-xs md:text-sm font-bold text-slate-800 placeholder-slate-400" />
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 md:mb-2">Arrivée</label>
                    <div className="w-full bg-slate-50 h-10 md:h-12 border border-slate-200 rounded-sm px-4 flex items-center gap-3 hover:border-blue-500 transition cursor-text group focus-within:border-blue-500">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-slate-400 group-focus-within:text-blue-500" />
                      <input type="text" placeholder="Destination..." className="w-full bg-transparent outline-none text-xs md:text-sm font-bold text-slate-800 placeholder-slate-400" />
                    </div>
                  </div>
                </>
              )}

              <div className="md:col-span-3">
                <button onClick={handleEstimate} className="w-full h-10 md:h-12 bg-blue-700 text-white rounded-sm font-bold uppercase tracking-wide text-xs flex items-center justify-center gap-2 hover:bg-slate-900 transition shadow-lg">
                  <Search className="w-3 h-3 md:w-4 md:h-4" /> Estimer tarif
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* 3 CARTES AVEC LIENS ACTIFS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <Link href="/vtc" className="group relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-xl shadow-slate-200 hover:shadow-2xl transition-all duration-500 border border-slate-200 block">
            <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" alt="Transport Prestige Volant" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="bg-white/10 backdrop-blur-md w-fit px-3 py-1 rounded-full text-[9px] font-bold text-white mb-3 border border-white/20 tracking-wider uppercase">Voyageurs</div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-2 uppercase">VTC & Affaires</h2>
              <p className="text-slate-300 text-xs max-w-xs leading-relaxed font-medium mb-4">Navettes aéroports, Gares & Chauffeurs privés.</p>
              <div className="flex items-center gap-2 text-white font-bold text-[10px] group-hover:gap-4 transition-all uppercase">Réserver <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" /></div>
            </div>
          </Link>
          
          <Link href="/logistique" className="group relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-xl shadow-slate-200 hover:shadow-2xl transition-all duration-500 border border-slate-200 block">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" alt="Logistique Camion" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="bg-white/10 backdrop-blur-md w-fit px-3 py-1 rounded-full text-[9px] font-bold text-white mb-3 border border-white/20 tracking-wider uppercase">Logistique</div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-2 uppercase">Fret Express</h2>
              <p className="text-blue-100 text-xs max-w-xs leading-relaxed font-medium mb-4">Marchandises, Palettes, Complet 44T.</p>
              <div className="flex items-center gap-2 text-white font-bold text-[10px] group-hover:gap-4 transition-all uppercase">Cotation <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" /></div>
            </div>
          </Link>

          <Link href="/demenagement" className="group relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-xl shadow-slate-200 hover:shadow-2xl transition-all duration-500 border border-slate-200 block">
            <img src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2070&auto=format&fit=crop" alt="Stockage Entrepôt" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="bg-white/10 backdrop-blur-md w-fit px-3 py-1 rounded-full text-[9px] font-bold text-white mb-3 border border-white/20 tracking-wider uppercase">Solutions Globales</div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-2 uppercase">Déménagement & Stockage</h2>
              <p className="text-slate-300 text-xs max-w-xs leading-relaxed font-medium mb-4">Transferts d'entreprises, garde-meubles sécurisé et logistique dédiée.</p>
              <div className="flex items-center gap-2 text-white font-bold text-[10px] group-hover:gap-4 transition-all uppercase">Devis sur mesure <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" /></div>
            </div>
          </Link>
        </div>

        {/* SLIDER */}
        <div className="mt-8 w-full overflow-hidden bg-white border-y border-slate-100 py-6">
          <div className="flex w-fit animate-scroll gap-16">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center whitespace-nowrap">
                <div className="flex items-center gap-3"><Shield className="w-6 h-6 text-slate-400" /><div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase">Sécurité</span><span className="text-sm font-black text-slate-800 uppercase">Assurances & Licences</span></div></div>
                <div className="flex items-center gap-3"><Layers className="w-6 h-6 text-slate-400" /><div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase">Stockage</span><span className="text-sm font-black text-slate-800 uppercase">Garde-Meubles & Box</span></div></div>
                <div className="flex items-center gap-3"><Clock className="w-6 h-6 text-slate-400" /><div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase">Disponibilité</span><span className="text-sm font-black text-slate-800 uppercase">Service 24h/24 et 7j/7</span></div></div>
                <div className="flex items-center gap-3"><MapPin className="w-6 h-6 text-slate-400" /><div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase">Zone</span><span className="text-sm font-black text-slate-800 uppercase">France & Europe</span></div></div>
                <div className="flex items-center gap-3"><FileText className="w-6 h-6 text-slate-400" /><div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase">Tarifs</span><span className="text-sm font-black text-slate-800 uppercase">Devis Gratuit sous 1h</span></div></div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER */}
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