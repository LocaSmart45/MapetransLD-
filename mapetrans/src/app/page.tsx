"use client";

async function sendLead(payload: any) {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("lead_failed");
}


import React, { useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  MapPin,
  Building2,
  Truck,
  Users,
  MessageSquare,
  Search,
  ChevronDown,
  Package,
  Box,
  Layers,
  Menu,
  X,
  Phone,
  Mail,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Header / UI
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Assistant (2 pôles)
  const [activePole, setActivePole] = useState<"vtc" | "cargo">("vtc");
  const [cargoChoice, setCargoChoice] = useState<"logistique" | "demenagement">(
    "logistique"
  );

  // ✅ Modal "Être rappelé"
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  // Scroll helper (quand on clique une carte)
  const assistantRef = useRef<HTMLDivElement | null>(null);
  const scrollToAssistant = () =>
    assistantRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  // Données (on garde ton style de liste)
  const servicesData = {
    vtc: [
      "Navette Aéroport ORLY",
      "Navette Aéroport ROISSY CDG",
      "Navette Aéroport BEAUVAIS",
      "Navette Aéroport TOURS",
      "Navette GARES PARISIENNES",
      "Berline / Trajet sur mesure",
    ],
    cargo: [
      "Pli Urgent / Colis (Véhicule Léger)",
      "14m³ / 20m³ (Messagerie/Palette)",
      "Porteur Poids Lourd",
      "Semi-Remorque (Complet 44T)",
      "Transport Frigorifique",
      "Déménagement Particulier / Pro",
      "Garde-Meubles (Stockage)",
      "Location Monte-Meuble",
    ],
  };

  // ✅ Redirection selon choix (comme tu veux)
  const handleAssistantGo = () => {
    if (activePole === "vtc") {
      router.push("/vtc");
      return;
    }
    router.push(cargoChoice === "logistique" ? "/logistique" : "/demenagement");
  };

  return (
    <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">
      {/* Anim slider (ton code) */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>

      {/* 0. ARRIÈRE-PLAN (ton code) */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-white -z-10 border-b border-slate-200">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* === HEADER (ton style, + être rappelé modal) === */}
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
                MAPETRANS <span className="text-blue-700">LD</span>
              </span>
              <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1 ml-0.5">
                Solutions de Transport
              </span>
            </div>

            <div className="hidden xl:flex items-center text-[10px] font-extrabold text-slate-600 tracking-widest uppercase">
              <Link
                href="/agence"
                className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"
              >
                <Building2 className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" />{" "}
                L'Agence
              </Link>
              <Link
                href="/vtc"
                className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"
              >
                <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" />{" "}
                VTC & Chauffeurs
              </Link>
              <Link
                href="/logistique"
                className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"
              >
                <Truck className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" />{" "}
                Logistique
              </Link>
              <Link
                href="/demenagement"
                className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"
              >
                <Box className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" />{" "}
                Déménagement
              </Link>

              {/* ✅ au lieu de “#contact”, on ouvre le modal */}
              <button
                onClick={() => setIsCallbackOpen(true)}
                className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" />{" "}
                Être rappelé
              </button>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="tel:0634605799"
                className="xl:hidden flex items-center gap-2 bg-blue-700 text-white px-3 py-2 rounded-sm shadow-md hover:bg-blue-800 transition"
              >
                <Phone className="w-3 h-3" />{" "}
                <span className="text-[10px] font-black tracking-wider">
                  06 34 60 57 99
                </span>
              </a>

              <div className="hidden xl:flex items-center gap-6 pl-6">
                <div className="flex flex-col items-end text-right">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Urgence & Réservation
                  </span>
                  <a
                    href="tel:0634605799"
                    className="text-lg font-bold text-slate-900 tracking-tight hover:text-blue-700 transition cursor-pointer font-mono"
                  >
                    06 34 60 57 99
                  </a>
                </div>

                {/* ✅ Devis Express → ouvre modal aussi (optionnel mais cohérent) */}
                <button
                  onClick={() => setIsCallbackOpen(true)}
                  className="flex items-center gap-2 bg-slate-900 text-white text-[11px] px-5 py-3 rounded-sm font-bold hover:bg-blue-700 transition duration-300 shadow-lg tracking-wide uppercase"
                >
                  Devis Express
                </button>
              </div>

              <button
                className="xl:hidden p-1 text-slate-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-28 z-40 bg-white border-t border-slate-100 p-6 flex flex-col gap-6 xl:hidden overflow-y-auto pb-32">
            <div className="flex flex-col gap-4 text-sm font-black uppercase tracking-wider text-slate-800">
              <Link
                href="/agence"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Building2 className="w-5 h-5 text-blue-700" /> L'Agence
              </Link>
              <Link
                href="/vtc"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="w-5 h-5 text-blue-700" /> VTC & Chauffeurs
              </Link>
              <Link
                href="/logistique"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Truck className="w-5 h-5 text-blue-700" /> Logistique
              </Link>
              <Link
                href="/demenagement"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Box className="w-5 h-5 text-blue-700" /> Déménagement
              </Link>

              {/* ✅ mobile : ouvre modal */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCallbackOpen(true);
                }}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 text-left"
              >
                <MessageSquare className="w-5 h-5 text-blue-700" /> Être rappelé
              </button>
            </div>
          </div>
        )}
      </header>

      {/* === CONTENU === */}
      <div className="relative z-10 pb-8 md:pb-16 px-4 md:px-6 max-w-7xl mx-auto pt-8 md:pt-12 w-full">
        {/* 1) HERO (ton style) */}
        <div className="max-w-5xl mx-auto mb-10 text-center">
          <h1 className="text-3xl md:text-6xl font-black tracking-tight text-slate-900 mb-8 uppercase leading-tight md:leading-none">
            Transport, Logistique <br /> <span className="text-slate-400">& Déménagement.</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-3 md:gap-10 text-[10px] md:text-sm font-bold text-slate-700 uppercase tracking-wider bg-white py-3 px-4 md:px-8 rounded-lg shadow-sm border border-slate-200 w-full md:w-fit mx-auto">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full"></span> Transport de Personnes
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full"></span> Transport & Logistique
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full"></span> Déménagement & Stockage
            </span>
          </div>
        </div>

        {/* 2) ✅ 2 CARTES (ton style de carte premium) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <button
            type="button"
            onClick={() => {
              setActivePole("vtc");
              scrollToAssistant();
            }}
            className="group relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-xl shadow-slate-200 hover:shadow-2xl transition-all duration-500 border border-slate-200 block text-left"
          >
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
              alt="Transport Prestige Volant"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="bg-white/10 backdrop-blur-md w-fit px-3 py-1 rounded-full text-[9px] font-bold text-white mb-3 border border-white/20 tracking-wider uppercase">
                Voyageurs
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-2 uppercase">VTC & Affaires</h2>
              <p className="text-slate-300 text-xs max-w-xs leading-relaxed font-medium mb-4">
                Navettes aéroports, Gares & Chauffeurs privés.
              </p>
              <div className="flex items-center gap-2 text-white font-bold text-[10px] group-hover:gap-4 transition-all uppercase">
                Choisir <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              setActivePole("cargo");
              scrollToAssistant();
            }}
            className="group relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-xl shadow-slate-200 hover:shadow-2xl transition-all duration-500 border border-slate-200 block text-left"
          >
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
              alt="Logistique Camion"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="bg-white/10 backdrop-blur-md w-fit px-3 py-1 rounded-full text-[9px] font-bold text-white mb-3 border border-white/20 tracking-wider uppercase">
                Marchandises
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-2 uppercase">Transport & Logistique</h2>
              <p className="text-blue-100 text-xs max-w-sm leading-relaxed font-medium mb-4">
                Fret, déménagement & stockage (France & Europe).
              </p>
              <div className="flex items-center gap-2 text-white font-bold text-[10px] group-hover:gap-4 transition-all uppercase">
                Choisir <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>
        </div>

        {/* 3) ✅ ASSISTANT (remplace ton dashboard, même charte) */}
        <div
          ref={assistantRef}
          className="bg-white rounded-lg shadow-xl shadow-slate-200 border border-slate-200 max-w-7xl mx-auto overflow-hidden mb-12"
        >
          {/* Tabs 2 pôles */}
          <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto">
            <button
              onClick={() => setActivePole("vtc")}
              className={`flex-1 py-4 px-4 text-[9px] md:text-xs font-black uppercase tracking-widest flex justify-center items-center gap-2 min-w-[160px] transition-colors
              ${
                activePole === "vtc"
                  ? "bg-white text-blue-700 border-t-2 border-blue-700"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-100 border-t-2 border-transparent"
              }`}
            >
              <Users className="w-3 h-3 md:w-4 md:h-4" /> Transport Pers.
            </button>

            <button
              onClick={() => setActivePole("cargo")}
              className={`flex-1 py-4 px-4 text-[9px] md:text-xs font-black uppercase tracking-widest flex justify-center items-center gap-2 min-w-[160px] transition-colors
              ${
                activePole === "cargo"
                  ? "bg-white text-blue-700 border-t-2 border-blue-700"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-100 border-t-2 border-transparent"
              }`}
            >
              <Package className="w-3 h-3 md:w-4 md:h-4" /> Transport & Log.
            </button>
          </div>

          <div className="p-4 md:p-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-end">
              {/* Select service */}
              <div className="md:col-span-4">
                <label className="block text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 md:mb-2">
                  {activePole === "vtc" ? "Destination / Forfait" : "Type de prestation"}
                </label>

                <div className="relative w-full bg-slate-50 h-10 md:h-12 border border-slate-200 rounded-sm px-4 flex items-center">
                  <select className="w-full bg-transparent text-xs md:text-sm font-bold text-slate-800 appearance-none focus:outline-none cursor-pointer z-10">
                    {(activePole === "vtc" ? servicesData.vtc : servicesData.cargo).map((s, idx) => (
                      <option key={`${s}-${idx}`} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-slate-400 absolute right-4 pointer-events-none" />
                </div>
              </div>

              {/* Champs dynamiques */}
              {activePole === "vtc" ? (
                <>
                  <div className="md:col-span-4">
                    <label className="block text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 md:mb-2">
                      Lieu de prise en charge
                    </label>
                    <div className="w-full bg-slate-50 h-10 md:h-12 border border-slate-200 rounded-sm px-4 flex items-center gap-3 hover:border-blue-500 transition cursor-text group focus-within:border-blue-500">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-slate-400 group-focus-within:text-blue-500" />
                      <input
                        type="text"
                        placeholder="Orléans ou alentours..."
                        className="w-full bg-transparent outline-none text-xs md:text-sm font-bold text-slate-800 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 md:mb-2">
                      Passagers
                    </label>
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
                    <label className="block text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 md:mb-2">
                      Départ
                    </label>
                    <div className="w-full bg-slate-50 h-10 md:h-12 border border-slate-200 rounded-sm px-4 flex items-center gap-3 hover:border-blue-500 transition cursor-text group focus-within:border-blue-500">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-slate-400 group-focus-within:text-blue-500" />
                      <input
                        type="text"
                        placeholder="Ville ou Code Postal..."
                        className="w-full bg-transparent outline-none text-xs md:text-sm font-bold text-slate-800 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 md:mb-2">
                      Arrivée
                    </label>
                    <div className="w-full bg-slate-50 h-10 md:h-12 border border-slate-200 rounded-sm px-4 flex items-center gap-3 hover:border-blue-500 transition cursor-text group focus-within:border-blue-500">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-slate-400 group-focus-within:text-blue-500" />
                      <input
                        type="text"
                        placeholder="Destination..."
                        className="w-full bg-transparent outline-none text-xs md:text-sm font-bold text-slate-800 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {/* ✅ Choix route cargo */}
                  <div className="md:col-span-2">
                    <label className="block text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 md:mb-2">
                      Orientation
                    </label>
                    <div className="relative w-full bg-slate-50 h-10 md:h-12 border border-slate-200 rounded-sm px-4 flex items-center">
                      <Truck className="w-3 h-3 md:w-4 md:h-4 text-slate-400 mr-2" />
                      <select
                        value={cargoChoice}
                        onChange={(e) => setCargoChoice(e.target.value as "logistique" | "demenagement")}
                        className="w-full bg-transparent text-xs md:text-sm font-bold text-slate-800 appearance-none focus:outline-none cursor-pointer z-10"
                      >
                        <option value="logistique">Fret / Logistique</option>
                        <option value="demenagement">Déménagement / Stockage</option>
                      </select>
                      <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-slate-400 absolute right-4 pointer-events-none" />
                    </div>
                  </div>
                </>
              )}

              {/* CTA */}
              <div className="md:col-span-3">
                <button
                  onClick={handleAssistantGo}
                  className="w-full h-10 md:h-12 bg-blue-700 text-white rounded-sm font-bold uppercase tracking-wide text-xs flex items-center justify-center gap-2 hover:bg-slate-900 transition shadow-lg"
                >
                  <Search className="w-3 h-3 md:w-4 md:h-4" /> Continuer
                </button>

                <button
                  onClick={() => setIsCallbackOpen(true)}
                  className="w-full mt-2 h-10 md:h-12 bg-white text-slate-900 rounded-sm font-bold uppercase tracking-wide text-xs flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 transition"
                >
                  <MessageSquare className="w-3 h-3 md:w-4 md:h-4" /> Être rappelé
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDER (ton code inchangé) */}
        <div className="mt-8 w-full overflow-hidden bg-white border-y border-slate-100 py-6">
          <div className="flex w-fit animate-scroll gap-16">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-slate-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Sécurité</span>
                    <span className="text-sm font-black text-slate-800 uppercase">Assurances & Licences</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="w-6 h-6 text-slate-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Stockage</span>
                    <span className="text-sm font-black text-slate-800 uppercase">Garde-Meubles & Box</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-slate-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Disponibilité</span>
                    <span className="text-sm font-black text-slate-800 uppercase">Service 24h/24 et 7j/7</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-slate-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Zone</span>
                    <span className="text-sm font-black text-slate-800 uppercase">France & Europe</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-slate-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Tarifs</span>
                    <span className="text-sm font-black text-slate-800 uppercase">Devis Gratuit sous 1h</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER (ton code, inchangé sauf "depuis 2015" si tu veux le corriger) */}
      <footer className="mt-auto">
        <div className="bg-blue-700 text-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="text-lg font-bold">Une demande précise ? Des conditions particulières ?</span>
              <span className="text-blue-100 text-sm mt-1">Contactez-nous dès maintenant, réponse immédiate garantie.</span>
            </div>
            <a
              href="tel:0634605799"
              className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700"
            >
              <Phone className="w-4 h-4 inline mr-2" /> CONTACT RAPIDE
            </a>
          </div>
        </div>

        <div id="contact" className="bg-black text-white py-12 px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col leading-none mb-6">
                <span className="text-xl font-black tracking-tighter text-white">
                  MAPETRANS <span className="text-blue-700">LD</span>
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">
                  Solutions de Transport
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed text-justify">
                Partenaire expert depuis 2015. Nous assurons vos transports critiques, navettes VIP et déménagements avec une exigence de qualité unique. Licences et assurances à jour.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">Nos Services</h3>
              <div className="flex flex-col gap-3 text-sm font-medium text-slate-400">
                <Link href="/agence" className="flex items-center gap-2 hover:text-white transition group">
                  <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> L'Agence
                </Link>
                <Link href="/vtc" className="flex items-center gap-2 hover:text-white transition group">
                  <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> VTC & Chauffeurs
                </Link>
                <Link href="/logistique" className="flex items-center gap-2 hover:text-white transition group">
                  <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Logistique
                </Link>
                <Link href="/demenagement" className="flex items-center gap-2 hover:text-white transition group">
                  <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Déménagement & Stockage
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">Nous Contacter</h3>
              <div className="flex flex-col gap-4 text-sm font-bold">
                <a href="tel:0634605799" className="flex items-center gap-3 hover:text-blue-400 transition">
                  <Phone className="w-4 h-4 text-blue-600" /> 06 34 60 57 99
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <Phone className="w-4 h-4 text-blue-600" /> 09 59 07 04 33
                </div>
                <a href="mailto:contact@mapetransld.com" className="flex items-center gap-3 hover:text-blue-400 transition">
                  <Mail className="w-4 h-4 text-blue-600" /> contact@mapetransld.com
                </a>
                <div className="flex items-center gap-3 text-slate-400 mt-2">
                  <MapPin className="w-4 h-4 text-blue-600" /> Orléans & France Entière
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-wide gap-4">
            <span>Copyright 2025, Mapetrans LD. Tous droits réservés.</span>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-slate-400 transition">
                Mentions Légales
              </Link>
              <Link href="#" className="hover:text-slate-400 transition">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ✅ MODAL “Être rappelé” — style premium cohérent */}
      {isCallbackOpen && (
        <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-700" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-700">
                  Demande de rappel
                </span>
              </div>
              <button
                onClick={() => setIsCallbackOpen(false)}
                className="p-2 hover:bg-white rounded-md transition"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            <div className="px-6 py-6">
              <p className="text-sm text-slate-600 font-semibold mb-5">
                Laissez vos coordonnées. Réponse rapide (24/7 si urgence).
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-3" onSubmit={async (e) => {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  try {
    await sendLead({
      type: "callback",
      source: "home",
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    });
    alert("✅ Demande envoyée ! Nous vous rappelons rapidement.");
    setIsCallbackOpen(false);
    e.currentTarget.reset();
  } catch {
    alert("❌ Erreur d’envoi. Réessayez ou appelez-nous.");
  }
}}>
                <div className="md:col-span-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Nom *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-50 h-11 border border-slate-200 rounded-sm px-4 text-sm font-bold text-slate-800 outline-none focus:border-blue-600"
                    name="name" placeholder="Votre nom"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Société
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 h-11 border border-slate-200 rounded-sm px-4 text-sm font-bold text-slate-800 outline-none focus:border-blue-600"
                    name="company" placeholder="Entreprise (optionnel)"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Téléphone *
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-slate-50 h-11 border border-slate-200 rounded-sm px-4 text-sm font-bold text-slate-800 outline-none focus:border-blue-600"
                    name="phone" placeholder="06 xx xx xx xx"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <input
                    name="email" type="email"
                    className="w-full bg-slate-50 h-11 border border-slate-200 rounded-sm px-4 text-sm font-bold text-slate-800 outline-none focus:border-blue-600"
                    placeholder="email@exemple.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Message
                  </label>
                  <textarea name="message" name="message"
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:border-blue-600"
                    placeholder="Expliquez votre besoin (date, trajets, volume, urgence...)"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col md:flex-row gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setIsCallbackOpen(false)}
                    className="w-full md:w-1/3 h-11 bg-white border border-slate-200 rounded-sm font-bold uppercase tracking-wide text-xs hover:bg-slate-50 transition"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="w-full md:w-2/3 h-11 bg-blue-700 text-white rounded-sm font-bold uppercase tracking-wide text-xs hover:bg-slate-900 transition shadow-lg"
                  >
                    Envoyer la demande
                  </button>
                </div>

                <div className="md:col-span-2 mt-1">
                  <a
                    href="tel:0634605799"
                    className="text-[11px] font-black text-blue-700 hover:text-slate-900 transition inline-flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Besoin urgent ? Appeler maintenant
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
