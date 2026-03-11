"use client";

import NavHeader from "@/app/components/NavHeader";
import Link from "next/link";

export default function MentionsLegalesPage() {
  return (
    <>
      <NavHeader ctaLabel="Nous Contacter" ctaHref="/contact" />
      <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-[116px] flex flex-col">

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
    </>
  );
}