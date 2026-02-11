import React from 'react';
import type { Metadata } from "next";
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, Server, Mail, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Mapetrans LD",
  description: "Transparence sur la collecte et le traitement de vos données personnelles (RGPD).",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 md:px-8">
      
      {/* Bouton Retour */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition">
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        
        {/* En-tête */}
        <div className="bg-slate-900 text-white p-8 md:p-12 text-center">
          <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Politique de Confidentialité</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Chez Mapetrans LD, nous prenons la sécurité de vos données très au sérieux. 
            Voici comment nous collectons, utilisons et protégeons vos informations.
          </p>
        </div>

        {/* Contenu */}
        <div className="p-8 md:p-12 space-y-12">

          {/* 1. Collecte */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 uppercase">1. Les données que nous collectons</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Dans le cadre de nos services de transport (VTC, Déménagement, Logistique), nous sommes amenés à collecter les informations suivantes via nos formulaires de contact et de réservation :
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-2">
              <li><strong>Identité :</strong> Nom, Prénom.</li>
              <li><strong>Contact :</strong> Adresse email, Numéro de téléphone.</li>
              <li><strong>Géolocalisation :</strong> Adresses de départ, d'arrivée et de facturation.</li>
              <li><strong>Détails du service :</strong> Dates, horaires, numéros de vol/train, inventaire (pour le déménagement).</li>
            </ul>
          </section>

          {/* 2. Utilisation */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 uppercase">2. Utilisation des données</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-2 mt-2">
              <li>L'établissement de devis précis et personnalisés.</li>
              <li>L'exécution de la prestation de transport.</li>
              <li>La communication liée à votre commande (confirmation, chauffeur en approche).</li>
              <li>La facturation et la comptabilité légale.</li>
            </ul>
          </section>

          {/* 3. Partage & Outils */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Server className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 uppercase">3. Partage et Sous-traitance</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Nous ne vendons <strong>jamais</strong> vos données à des tiers. Cependant, pour assurer le bon fonctionnement de nos services, nous utilisons des outils techniques sécurisés :
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-2">
              <li><strong>Make.com :</strong> Utilisé pour l'automatisation de nos processus de commande (transfert sécurisé des formulaires).</li>
              <li><strong>Hébergement :</strong> Notre site est hébergé sur des infrastructures sécurisées (Vercel).</li>
            </ul>
          </section>

          {/* 4. Sécurité */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 uppercase">4. Sécurité des données</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Nous mettons en œuvre toutes les mesures techniques nécessaires pour protéger vos données contre l'accès non autorisé, la perte ou l'altération (Protocole HTTPS, accès restreint aux outils de gestion).
            </p>
          </section>

          {/* 5. Vos droits */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 uppercase mb-4">5. Vos droits (RGPD)</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-white rounded-full shadow-sm">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm font-bold text-slate-900 uppercase mb-1">Exercer vos droits</p>
                <p className="text-slate-600 text-sm mb-2">Pour toute demande de suppression ou d'accès à vos données, contactez-nous :</p>
                <a href="mailto:contact@mapetransld.com" className="text-blue-600 font-bold hover:underline">contact@mapetransld.com</a>
              </div>
            </div>
          </section>

        </div>
        
        {/* Footer de la carte */}
        <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
          <p className="text-xs text-slate-400">Dernière mise à jour : Février 2026</p>
        </div>

      </div>
    </main>
  );
}