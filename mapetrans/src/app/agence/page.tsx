"use client";

import React from 'react';
import { MapPin, Clock, MessageSquare, Phone, Mail, ArrowUpRight, Shield, Award, FileText, UserCheck } from 'lucide-react';
import Link from 'next/link';
import NavHeader from '@/app/components/NavHeader';

export default function AgencePage() {

  return (
    <>
      <NavHeader ctaLabel="Nous Contacter" ctaHref="/contact" />
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
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>

      {/* 0. ARRIÈRE-PLAN */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-white -z-10 border-b border-slate-200">
         <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* === HEADER === */}

      {/* === HERO AGENCE === */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
          alt="Bureaux Modernes" 
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4 bg-white/10 backdrop-blur-sm">
            Expertise & Proximité
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-lg">
            L'Excellence du Transport <br/> <span className="text-blue-500">au cœur du Loiret</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Basés à Orléans, nous sommes votre partenaire unique pour le transport de personnes, le fret urgent et le déménagement depuis 2013.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full py-16 animate-fade-in delay-100">
        
        {/* BLOC HISTOIRE & VALEURS */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 uppercase">Plus qu'un transporteur, <br/>un <span className="text-blue-600">partenaire de confiance</span></h2>
            <div className="w-20 h-1 bg-blue-600"></div>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              Fondée en <strong>2013 à Orléans</strong>, <strong>MAPETRANS LD</strong> est née d'une volonté simple : offrir un service de transport global, rigoureux et humain aux particuliers comme aux entreprises de la région.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              Face aux grandes plateformes impersonnelles, nous avons fait le choix de la <strong>proximité</strong>. Que vous ayez besoin d'une berline pour un transfert VIP, d'un camion pour un fret urgent ou d'une équipe pour votre déménagement, vous parlez à un interlocuteur unique qui maîtrise votre dossier de A à Z.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-sm text-xs font-bold text-slate-700 border border-slate-200">
                <Award className="w-4 h-4 text-blue-600"/> Expérience Confirmée
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-sm text-xs font-bold text-slate-700 border border-slate-200">
                <MapPin className="w-4 h-4 text-blue-600"/> Ancrage Orléanais
              </div>
            </div>
          </div>
          <div className="relative h-[400px] bg-slate-100 rounded-xl overflow-hidden shadow-xl border border-slate-200 group">
             {/* IMAGE PRO POIGNÉE DE MAIN */}
             <img 
               src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop" 
               alt="Poignée de main professionnelle" 
               className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
               <div className="text-white">
                 <p className="font-bold text-lg">Engagement & Sérieux</p>
                 <p className="text-xs text-slate-300">Votre satisfaction est notre priorité absolue.</p>
               </div>
             </div>
          </div>
        </div>

        {/* NOS ENGAGEMENTS (GRID 3) */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-2xl font-black uppercase mb-2">Nos Engagements Qualité</h3>
            <p className="text-slate-400 text-sm">Ce qui fait notre différence au quotidien.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* CARTE 1 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition duration-300">
                <Shield className="w-10 h-10 text-blue-500 mb-4" />
                <h4 className="font-bold text-lg mb-2 uppercase">Conformité Totale</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                    Nous disposons de toutes les licences de transport (Personnes & Marchandises) et assurances professionnelles obligatoires. Aucun compromis sur la légalité.
                </p>
            </div>
            
            {/* CARTE 2 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition duration-300">
                <Clock className="w-10 h-10 text-blue-500 mb-4" />
                <h4 className="font-bold text-lg mb-2 uppercase">Réactivité 24/7</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                    Le transport ne s'arrête jamais. Notre service d'astreinte est disponible de jour comme de nuit pour gérer les urgences et les aléas de dernière minute.
                </p>
            </div>

            {/* CARTE 3 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition duration-300">
                <UserCheck className="w-10 h-10 text-blue-500 mb-4" />
                <h4 className="font-bold text-lg mb-2 uppercase">Personnel Qualifié</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                    Nos chauffeurs VTC sont élégants et discrets. Nos chauffeurs PL et déménageurs sont formés à la manutention et à la sécurité.
                </p>
            </div>
          </div>
        </div>

        {/* SECTION BESOIN D'INFOS / B2B (REMPLACEMENT DU BLOC ADMINISTRATIF) */}
        <div className="border border-slate-200 bg-slate-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
                <h3 className="text-xl font-black text-slate-900 uppercase mb-2">Une question spécifique ?</h3>
                <p className="text-sm text-slate-600 max-w-lg">
                    Vous souhaitez en savoir plus sur nos certifications, nos tarifs ou ouvrir un compte professionnel ?
                </p>
            </div>
            <Link href="/contact" className="bg-white border border-slate-300 text-slate-800 px-6 py-3 rounded-sm font-bold uppercase text-xs hover:bg-slate-100 transition flex items-center gap-2 shadow-sm">
                <MessageSquare className="w-4 h-4 text-blue-600"/> Nous contacter
            </Link>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="mt-auto">
        <div className="bg-blue-700 text-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="text-lg font-bold">Une question précise ?</span>
              <span className="text-blue-100 text-sm mt-1">Notre équipe est à votre écoute pour vous conseiller.</span>
            </div>
            <Link href="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700">
              CONTACTER LA DIRECTION
            </Link>
          </div>
        </div>

        <div id="contact" className="bg-black text-white py-12 px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col leading-none mb-6"><span className="text-xl font-black tracking-tighter text-white">MAPETRANS LD</span><span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Solutions de Transport</span></div>
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
            <span>Copyright 2025, Mapetrans LD. Tous droits réservés.</span>
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