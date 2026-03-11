import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* CTA BAR */}
      <div className="bg-blue-700 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col">
            <span className="text-lg font-bold">Une demande précise ? Des conditions particulières ?</span>
            <span className="text-blue-100 text-sm mt-1">Contactez-nous dès maintenant, réponse immédiate garantie.</span>
          </div>
          <a href="tel:0634605799" className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700">
            <Phone className="w-4 h-4 inline mr-2" />
            CONTACT RAPIDE
          </a>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-black text-white py-12 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COL 1 — BRAND */}
          <div>
            <div className="flex flex-col leading-none mb-6">
              <span className="text-xl font-black tracking-tighter text-white">MAPETRANS<span className="text-blue-700">.LD</span></span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Solutions de Transport</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Partenaire expert basé à Orléans depuis 2013. Navettes VIP, VTC, logistique et déménagement avec une exigence de qualité unique. Licences et assurances à jour.
            </p>
          </div>

          {/* COL 2 — SERVICES PRINCIPAUX */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">Nos Services</h3>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-400">
              <Link href="/agence" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> L&apos;Agence
              </Link>
              <Link href="/vtc" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> VTC &amp; Chauffeurs
              </Link>
              <Link href="/logistique" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Logistique &amp; Fret
              </Link>
              <Link href="/demenagement" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Déménagement
              </Link>
              <Link href="/entreprises" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Solutions Entreprises
              </Link>
              <Link href="/contact" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Contact
              </Link>
            </div>
          </div>

          {/* COL 3 — PAGES SEO VTC */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">VTC &amp; Navettes</h3>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-400">
              <Link href="/tarifs-vtc-orleans" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Tarifs VTC Orléans
              </Link>
              <Link href="/vtc-orleans-paris" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> VTC Orléans → Paris
              </Link>
              <Link href="/navette-orleans-orly" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Navette Orly
              </Link>
              <Link href="/navette-orleans-roissy-cdg" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Navette Roissy CDG
              </Link>
              <Link href="/chauffeur-mariage-evenement-orleans" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Chauffeur Mariage
              </Link>
              <Link href="/vtc-gare-orleans" className="flex items-center gap-2 hover:text-white transition group">
                <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> VTC Gare d&apos;Orléans
              </Link>
            </div>
          </div>

          {/* COL 4 — CONTACT */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">Nous Contacter</h3>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">VTC &amp; Navettes</p>
                <a href="tel:0634605799" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition font-bold">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" /> 06 34 60 57 99
                </a>
                <a href="mailto:contact@mapetransld.com" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition mt-1.5 text-xs">
                  <Mail className="w-3 h-3 text-blue-600 shrink-0" /> contact@mapetransld.com
                </a>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Transport &amp; Logistique</p>
                <a href="tel:0749709577" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition font-bold">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" /> 07 49 70 95 77
                </a>
                <a href="mailto:transport@mapetransld.com" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition mt-1.5 text-xs">
                  <Mail className="w-3 h-3 text-blue-600 shrink-0" /> transport@mapetransld.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-xs">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" /> Orléans &amp; France Entière
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-black py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-wide gap-4">
          <span>© 2025 Mapetrans LD. Tous droits réservés.</span>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-slate-400 transition">Mentions Légales</Link>
            <Link href="/confidentialite" className="hover:text-slate-400 transition">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
