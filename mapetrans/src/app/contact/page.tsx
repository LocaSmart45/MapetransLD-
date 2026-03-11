"use client";

import React, { useState, useRef } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Send, HelpCircle, FileText, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import NavHeader from '@/app/components/NavHeader';

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulation d'envoi
    setTimeout(() => {
        alert("✅ Message envoyé ! Notre équipe administrative vous répond sous 24h.");
        setIsSending(false);
        if (form.current) form.current.reset();
    }, 1500);
  };

  return (
    <>
      <NavHeader ctaLabel="Nous Écrire" ctaHref="#form" />
      <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">
      
      {/* CSS ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* 0. ARRIÈRE-PLAN */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-white -z-10 border-b border-slate-200">
         <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* === HEADER === */}

      {/* === HERO CONTACT === */}
      <div className="relative h-[300px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
         <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact Mapetrans" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 animate-fade-in"
         />
         <div className="absolute inset-0 bg-slate-900/60"></div>
         <div className="relative z-10 text-center px-4 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
               Contactez-nous
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto font-medium">
               Une urgence ? Un projet complexe ? Ou simplement besoin d'un renseignement ? Nos équipes vous répondent.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full py-16 animate-fade-in">
        
        <div className="grid lg:grid-cols-2 gap-16">
            
            {/* COLONNE GAUCHE : COORDONNÉES */}
            <div>
                <h2 className="text-2xl font-black text-slate-900 uppercase mb-8">Coordonnées Directes</h2>
                
                <div className="space-y-6">
                    {/* VTC & NAVETTES */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                        <p className="text-[10px] font-black text-blue-700 uppercase tracking-[0.25em] mb-4">🚘 VTC, Navettes & Mariage</p>
                        <div className="space-y-4">
                            <a href="tel:0634605799" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition">
                                    <Phone className="w-4 h-4 text-blue-600 group-hover:text-white transition" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Urgence & Réservation 24h/24</p>
                                    <p className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition font-mono">06 34 60 57 99</p>
                                </div>
                            </a>
                            <a href="mailto:contact@mapetransld.com" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition">
                                    <Mail className="w-4 h-4 text-blue-600 group-hover:text-white transition" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email VTC</p>
                                    <p className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition">contact@mapetransld.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* TRANSPORT & DÉMÉNAGEMENT */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                        <p className="text-[10px] font-black text-blue-700 uppercase tracking-[0.25em] mb-4">📦 Transport, Logistique & Déménagement</p>
                        <div className="space-y-4">
                            <a href="tel:0749709577" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition">
                                    <Phone className="w-4 h-4 text-blue-600 group-hover:text-white transition" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cotation & Exploitation</p>
                                    <p className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition font-mono">07 49 70 95 77</p>
                                </div>
                            </a>
                            <a href="mailto:transport@mapetransld.com" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition">
                                    <Mail className="w-4 h-4 text-blue-600 group-hover:text-white transition" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email Transport</p>
                                    <p className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition">transport@mapetransld.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* ADRESSE */}
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                            <MapPin className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Siège Social</p>
                            <p className="text-sm font-bold text-slate-900 leading-snug">105 Route Nationale 20, 45520 Cercottes</p>
                            <p className="text-xs text-slate-500 mt-1 italic">Uniquement sur rendez-vous.</p>
                        </div>
                    </div>
                </div>

                {/* FAQ RAPIDE */}
                <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h3 className="text-sm font-black text-slate-900 uppercase mb-4 flex items-center gap-2"><HelpCircle className="w-4 h-4"/> Questions Fréquentes</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-bold text-slate-700">Le devis est-il gratuit ?</p>
                            <p className="text-xs text-slate-500">Oui, 100% gratuit et sans engagement pour tous nos services.</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-700">Quelle est votre zone d'intervention ?</p>
                            <p className="text-xs text-slate-500">Basés à Orléans, nous intervenons dans tout le Loiret, la région Centre, l'Île-de-France et partout en France/Europe pour le Fret.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* COLONNE DROITE : FORMULAIRE GÉNÉRAL */}
            <div id="form" className="bg-white rounded-xl shadow-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-black text-slate-900 uppercase mb-6">Envoyer un message</h3>
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Nom</label>
                            <input type="text" name="user_name" required className="w-full h-12 bg-slate-50 border border-slate-200 rounded-sm px-4 text-sm font-bold text-slate-800 outline-none focus:border-blue-600 transition" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Téléphone</label>
                            <input type="tel" name="user_phone" required className="w-full h-12 bg-slate-50 border border-slate-200 rounded-sm px-4 text-sm font-bold text-slate-800 outline-none focus:border-blue-600 transition" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Email</label>
                        <input type="email" name="user_email" required className="w-full h-12 bg-slate-50 border border-slate-200 rounded-sm px-4 text-sm font-bold text-slate-800 outline-none focus:border-blue-600 transition" />
                    </div>

                    <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Sujet</label>
                        <select name="subject" className="w-full h-12 bg-slate-50 border border-slate-200 rounded-sm px-4 text-sm font-bold text-slate-800 outline-none focus:border-blue-600 transition">
                            <option>Demande d'information générale</option>
                            <option>Partenariat / B2B</option>
                            <option>Recrutement (Chauffeur/Manutentionnaire)</option>
                            <option>Réclamation / SAV</option>
                            <option>Autre</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Message</label>
                        <textarea name="message" required rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-sm p-4 text-sm font-medium text-slate-800 outline-none focus:border-blue-600 transition resize-none"></textarea>
                    </div>

                    <button type="submit" disabled={isSending} className="w-full h-12 bg-slate-900 text-white font-bold uppercase tracking-wide rounded-sm hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-50">
                        {isSending ? 'Envoi en cours...' : <><Send className="w-4 h-4" /> Envoyer le message</>}
                    </button>
                    
                    <p className="text-[10px] text-center text-slate-400 mt-4">
                        En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                    </p>
                </form>
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
            {/* CORRECTION : LIEN TÉLÉPHONIQUE DIRECT */}
            <a href="tel:0634605799" className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700">
              <Phone className="w-4 h-4 inline mr-2"/> CONTACTER LA DIRECTION
            </a>
          </div>
        </div>

        <div id="contact" className="bg-black text-white py-12 px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col leading-none mb-6"><span className="text-xl font-black tracking-tighter text-white">MAPETRANS<span className="text-blue-700">.LD</span></span><span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Solutions de Transport</span></div>
              <p className="text-slate-400 text-xs leading-relaxed text-justify">Partenaire expert depuis 2013. Nous assurons vos transports critiques, navettes VIP et déménagements avec une exigence de qualité unique. Licences et assurances à jour.</p>
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
              <Link href="/mentions-legales" className="hover:text-slate-400 transition">Mentions Légales</Link>
              <Link href="/confidentialité" className="hover:text-slate-400 transition">Politique de Confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
    </>
  );
}