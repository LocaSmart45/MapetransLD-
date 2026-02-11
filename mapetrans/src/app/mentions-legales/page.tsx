"use client";

import React, { useState } from 'react';
import { Building2, Truck, Users, MessageSquare, Box, Menu, X, Phone, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function MentionsLegalesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-[120px] flex flex-col">
      
      {/* HEADER (Identique aux autres pages) */}
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
              <Link href="/vtc" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0">
                <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> VTC & Chauffeurs
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

      {/* CONTENU MENTIONS LÉGALES */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 uppercase mb-8 border-b-4 border-blue-700 pb-4 inline-block">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-sm md:text-base text-slate-700 leading-relaxed text-justify">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Éditeur du site</h2>
            <p>
              Le site internet <strong>Mapetrans LD</strong> est édité par la société <strong>MAPETRANS LD</strong>, 
              immatriculée au Registre du Commerce et des Sociétés d'Orléans sous le numéro <strong>79368450700049</strong>.
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li><strong>Siège social :</strong> 105 Route National 20 45520 Cercottes</li>
              <li><strong>Téléphone :</strong> 06 34 60 57 99</li>
              <li><strong>Email :</strong> contact@mapetransld.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Hébergement</h2>
            <p>
              Le site est hébergé par la société <strong>Vercel Inc.</strong><br/>
              Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br/>
              Le stockage des données personnelles (formulaires) est assuré via l'infrastructure technique sécurisée.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              Toute reproduction, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Responsabilité</h2>
            <p>
              Mapetrans LD s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, la société ne pourra être tenue responsable des oublis, des inexactitudes et des carences dans la mise à jour.
              Les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d’évoluer.
            </p>
          </section>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-auto bg-black py-6 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-wide gap-4">
          <span>Copyright 2025, Mapetrans LD. Tous droits réservés.</span>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-slate-400 transition text-white">Mentions Légales</Link>
            <Link href="/confidentialite" className="hover:text-slate-400 transition">Politique de Confidentialité</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}