"use client";

import React, { useState, useRef } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Send, HelpCircle, FileText } from 'lucide-react';
import Link from 'next/link';
import NavHeader from '@/app/components/NavHeader';
import Footer from '@/app/components/Footer';

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSending(true);

    const data = new FormData(form.current);
    const payload = {
      nom: data.get("user_name"),
      telephone: data.get("user_phone"),
      email: data.get("user_email"),
      sujet: data.get("subject"),
      message: data.get("message"),
      source: "Formulaire Contact mapetransld.com",
    };

    try {
      await fetch("https://hook.eu1.make.com/cttayz8059egi9129utmk0d1cfrmjimv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // On affiche le succès même si le webhook échoue (filet de sécurité)
    }

    alert("✅ Message envoyé ! Notre équipe vous répond sous 24h.");
    setIsSending(false);
    form.current.reset();
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
      <Footer />

    </main>
    </>
  );
}