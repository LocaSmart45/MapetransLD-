"use client";

import React, { useState, useRef } from 'react';
import {
  ArrowRight, CheckCircle, Clock, MapPin, Building2, Truck, Users, MessageSquare, Box, Menu, X, Phone, Mail, Globe, ArrowUpRight, Star, Moon, Calendar, Info, Briefcase, Plane, User, Send, Loader2, Train, PhoneCall, Repeat, ChevronDown, CreditCard, Zap,
} from "lucide-react";
import Link from "next/link";

// ============================================================
// ✅ CONFIGURATION : TON LIEN MAKE
// ============================================================
const WEBHOOK_URL = "https://hook.eu1.make.com/76i7gdoab1yczetrzb9ypfcyy8l7arc8";
// ============================================================

// === FONCTION HELPER POUR LE CRM (Interne) ===
async function postLead(payload: any) {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const out = await res.json().catch(() => ({}));
  if (!res.ok || out.ok === false) throw new Error(out.error || "lead_failed");
  return out;
}

export default function VTCPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [activeStep, setActiveStep] = useState<1 | 2>(1);

  // --- 1. MEMOIRE DU FORMULAIRE (State) ---
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    depart: "",
    destination: "",
    vol_train: "",
    date_retour: "",
    time_retour: "",
    destination_retour: "",
    vol_train_retour: "",
    passagers: "1",
    nom: "",
    prenom: "",
    telephone: "",
    user_email: "",
    details: ""
  });

  // --- 2. GESTION DES CHANGEMENTS (Mise à jour en direct) ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const form = useRef<HTMLFormElement>(null);

  // --- 3. ENVOI DES DONNÉES ---
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Calcul automatique du véhicule
    const vehiculeAuto = parseInt(formData.passagers) >= 4 ? "Van" : "Berline";

    const data = {
      "Date Demande": new Date().toLocaleString("fr-FR"),
      "Type Trajet": isRoundTrip ? "Aller-Retour" : "Aller Simple",
      "Nom": formData.nom,
      "Prénom": formData.prenom,
      "Adresse Facturation": "", // Vide volontairement
      "Téléphone": formData.telephone,
      "Email": formData.user_email,
      "Date Aller": formData.date,
      "Heure Vol/Train Aller": formData.time,
      "Départ Aller": formData.depart,
      "Destination Aller": formData.destination,
      "N° Vol/Train Aller": formData.vol_train,

      // Champs Retour (Vides si Aller Simple)
      "Date Retour": isRoundTrip ? formData.date_retour : "",
      "Heure Vol/Train Retour": isRoundTrip ? formData.time_retour : "",
      "N° Vol/Train Retour": isRoundTrip ? formData.vol_train_retour : "",
      "Adresse Dépose Retour": isRoundTrip ? formData.destination_retour : "",

      "Nb Passagers": formData.passagers,
      "Véhicule": vehiculeAuto,
      "Infos Spécifiques": formData.details,
      "Statut": "À TRAITER",
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("✅ Demande reçue ! Vous allez recevoir votre devis par email très rapidement.");
        // Remise à zéro
        setFormData({
            date: "", time: "", depart: "", destination: "", vol_train: "",
            date_retour: "", time_retour: "", destination_retour: "", vol_train_retour: "",
            passagers: "1", nom: "", prenom: "", telephone: "", user_email: "", details: ""
        });
        setIsRoundTrip(false);
        setActiveStep(1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert("❌ Une erreur est survenue lors de l'envoi. (Erreur Webhook)");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Problème de connexion. Vérifiez votre réseau.");
    } finally {
      setIsSending(false);
    }
  };

  const handleCallbackRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    const formEl = e.currentTarget as HTMLFormElement;
    const fd = new FormData(formEl);

    try {
      await postLead({
        type: "callback",
        source: "vtc",
        company: String(fd.get("company") || ""),
        phone: String(fd.get("phone") || ""),
        message: "Rappel Prioritaire (B2B)",
      });

      alert("✅ Demande envoyée ! Un conseiller Pro vous rappelle rapidement.");
      setIsCallbackModalOpen(false);
      formEl.reset();
    } catch (err: any) {
      alert("❌ Erreur d’envoi.");
    }
  };

  // --- 4. Validation simple avant étape 2 ---
  const goToStep2 = () => {
    if(!formData.date || !formData.time || !formData.depart || !formData.destination) {
        alert("Merci de remplir les informations obligatoires du trajet (Date, Heure, Départ, Destination) avant de continuer.");
        return;
    }
    setActiveStep(2);
  }

  return (
    <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* 0. ARRIÈRE-PLAN */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-white -z-10 border-b border-slate-200">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* === FENÊTRE MODALE DE RAPPEL === */}
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
              <p className="text-sm text-blue-100 mt-1">
                Service réservé aux entreprises.
              </p>
            </div>
            <form onSubmit={handleCallbackRequest} className="p-6 space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Nom de la société</label>
                <input type="text" required name="company" placeholder="Ex: Mapetrans SAS" className="w-full h-12 border border-slate-300 rounded-sm px-4 font-bold text-slate-800 outline-none focus:border-blue-700 bg-slate-50" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Numéro direct</label>
                <input type="tel" required name="phone" placeholder="06 00 00 00 00" className="w-full h-12 border border-slate-300 rounded-sm px-4 font-bold text-slate-800 outline-none focus:border-blue-700 bg-slate-50" />
              </div>
              <button type="submit" className="w-full h-12 bg-slate-900 text-white font-bold uppercase tracking-wide rounded-sm hover:bg-black transition shadow-lg mt-2">
                Me faire rappeler
              </button>
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
              <Link href="/agence" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"><Building2 className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> L'Agence</Link>
              <Link href="/vtc" className="text-blue-700 px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"><Users className="w-4 h-4 text-blue-700" /> VTC & Chauffeurs</Link>
              <Link href="/logistique" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"><Truck className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> Logistique & Fret</Link>
              <Link href="/demenagement" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"><Box className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> Déménagement</Link>
              <Link href="/contact" className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group"><MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" /> Contact</Link>
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

      {/* === 1. HERO VTC === */}
      <div className="relative h-[450px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" alt="Chauffeur VTC et Transport Express Orléans" className="absolute inset-0 w-full h-full object-cover animate-fade-in" />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4 bg-white/10 backdrop-blur-sm">Aéroport • Gares • Urgences</span>
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-lg">
            Navette VTC & <br /> <span className="text-blue-500">Service de Transport Prioritaire</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Alternative Taxi pour vos navettes aéroports (Orly, Roissy), gares et <strong>courses express</strong>. <br />
            Service disponible 24h/7j pour tous vos trajets, sans restriction de distance.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="tel:0634605799" className="bg-white text-slate-900 px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition shadow-lg inline-flex items-center gap-2 transform hover:scale-105 duration-300">
              <Phone className="w-4 h-4" /> Appeler (Urgence)
            </a>
            <span className="text-white text-xs font-medium opacity-80 md:hidden">ou</span>
            <Link href="#booking" className="bg-blue-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Réserver une navette
            </Link>
          </div>
        </div>
      </div>

      {/* === 2. FORMULAIRE MODERNE ÉTAPE 1 / ÉTAPE 2 === */}
      <div id="booking" className="relative z-20 px-4 max-w-5xl mx-auto w-full mt-12 mb-12 animate-fade-in delay-100">
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Bandeau titre */}
          <div className="bg-slate-900 p-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-lg font-black uppercase">Demande de Réservation</h3>
                <p className="text-xs text-slate-400">Étape {activeStep} : complétez votre demande.</p>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-[10px] uppercase font-bold text-slate-500">Besoin d'aide ?</div>
              <div className="font-mono font-bold text-lg">06 34 60 57 99</div>
            </div>
          </div>

          {/* Stepper */}
          <div className="px-6 md:px-8 pt-5 pb-3 border-b border-slate-100 bg-slate-50/60">
            <div className="flex items-center gap-3 md:gap-4">
              <button type="button" onClick={() => setActiveStep(1)} className={`flex-1 md:flex-none md:w-56 flex items-center justify-center gap-2 rounded-full text-xs font-bold uppercase tracking-wide border px-4 py-2 transition ${activeStep === 1 ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white text-slate-500 border-slate-200 hover:border-blue-400"}`}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-current text-[10px]">1</span> Détails du trajet
              </button>
              <button type="button" onClick={goToStep2} className={`flex-1 md:flex-none md:w-56 flex items-center justify-center gap-2 rounded-full text-xs font-bold uppercase tracking-wide border px-4 py-2 transition ${activeStep === 2 ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white text-slate-500 border-slate-200 hover:border-blue-400"}`}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-current text-[10px]">2</span> Passagers & contact
              </button>
            </div>
          </div>

          {/* Formulaire */}
          <form ref={form} onSubmit={sendEmail} className="p-6 md:p-8 space-y-6 md:space-y-8">
            {/* === ÉTAPE 1 === */}
            {activeStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-5">
                  <h4 className="text-sm font-black text-blue-800 uppercase border-b border-slate-100 pb-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> Détails du trajet</h4>

                  {/* Date / Heure */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Date Aller</span><span className="text-red-500">*</span></label>
                      <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-slate-50" />
                    </div>
                    <div>
                      <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Heure de Vol/Train</span><span className="text-red-500">*</span></label>
                      <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-slate-50" />
                    </div>
                  </div>

                  {/* Bouton Aller / Retour */}
                  <div className="flex items-center">
                    <button type="button" onClick={() => setIsRoundTrip(!isRoundTrip)} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wide transition border ${isRoundTrip ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200"}`}>
                      <Repeat className="w-3 h-3" /> {isRoundTrip ? "Aller-Retour activé" : "Ajouter un retour"}
                    </button>
                  </div>

                  <div>
                    <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Adresse de Départ</span><span className="text-red-500">*</span></label>
                    <input type="text" name="depart" value={formData.depart} onChange={handleChange} placeholder="Ex: Saran, Olivet, Orléans..." required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Destination</span><span className="text-red-500">*</span></label>
                    <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="Ex: Aéroport Orly Terminal 2..." required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">N° de Vol / Train Aller</label>
                    <div className="relative">
                      <Plane className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input type="text" name="vol_train" value={formData.vol_train} onChange={handleChange} placeholder="Ex: AF1234 ou TGV 8540" className="w-full h-10 border border-slate-300 rounded-sm pl-9 pr-3 text-sm font-medium focus:border-blue-600 outline-none" />
                    </div>
                  </div>
                </div>

                {/* Bloc retour (optionnel) */}
                <div className="space-y-5">
                  <h4 className="text-sm font-black text-slate-700 uppercase border-b border-slate-100 pb-2">Retour (facultatif)</h4>
                  {isRoundTrip ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Date Retour</label>
                          <input type="date" name="date_retour" value={formData.date_retour} onChange={handleChange} required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Heure d'Arrivée Prévue</label>
                          <input type="time" name="time_retour" value={formData.time_retour} onChange={handleChange} required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Adresse Dépose Retour</label>
                        <input type="text" name="destination_retour" value={formData.destination_retour} onChange={handleChange} className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">N° Vol / Train Retour</label>
                        <input type="text" name="vol_train_retour" value={formData.vol_train_retour} onChange={handleChange} placeholder="Ex: AF9999" className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-400 bg-slate-50 border border-dashed border-slate-200 rounded-md p-4">
                      Activez l'option <span className="font-semibold">Aller-Retour</span> pour renseigner vos informations de trajet retour.
                    </div>
                  )}

                  <div className="flex justify-end pt-4">
                    <button type="button" onClick={goToStep2} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-700 hover:text-blue-800">
                      Étape suivante : Passagers & contact <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* === ÉTAPE 2 === */}
            {activeStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="md:col-span-2 space-y-5">
                  <h4 className="text-sm font-black text-blue-800 uppercase border-b border-slate-100 pb-2 flex items-center gap-2"><User className="w-4 h-4" /> Passagers & Contact</h4>

                  <div>
                    <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Nb Passagers</span><span className="text-red-500">*</span></label>
                    <select name="passagers" value={formData.passagers} onChange={handleChange} className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white">
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5">5 personnes</option>
                      <option value="6">6 personnes</option>
                      <option value="7">7 personnes</option>
                      <option value="8">8 personnes</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Nom</span><span className="text-red-500">*</span></label>
                      <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Votre Nom" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" />
                    </div>
                    <div>
                      <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Prénom</span><span className="text-red-500">*</span></label>
                      <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Votre Prénom" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Téléphone</span><span className="text-red-500">*</span></label>
                      <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="06 12 34 56 78" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" />
                    </div>
                    <div>
                      <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Email</span><span className="text-red-500">*</span></label>
                      <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} placeholder="votre@email.com" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Information Spécifique (Optionnel)</label>
                    <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Siège bébé, animal, bagages volumineux, code porte..." className="w-full h-24 border border-slate-300 rounded-sm px-3 py-2 text-sm font-medium focus:border-blue-600 outline-none resize-none" />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button type="button" onClick={() => setActiveStep(1)} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400 hover:text-slate-600">
                      <ArrowRight className="w-4 h-4 rotate-180" /> Retour étape 1
                    </button>

                    <button type="submit" disabled={isSending} className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold h-11 px-6 rounded-sm uppercase tracking-wide text-xs shadow-lg transition-all disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]">
                      {isSending ? (<><Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours...</>) : (<><Send className="w-4 h-4" /> Envoyer la demande</>)}
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Paiement sécurisé à bord ou sur facture.</p>
                </div>

                {/* Colonne droite : pourquoi réserver ici ? */}
                <aside className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Pourquoi réserver ici ?</h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                      <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /><div><p className="font-semibold text-slate-800">Devis précis sous 24h</p><p className="text-[11px] text-slate-500">Vous recevez votre tarif par email avec tous les détails du trajet.</p></div></li>
                      <li className="flex gap-2"><Clock className="w-4 h-4 text-blue-500 mt-0.5" /><div><p className="font-semibold text-slate-800">Service 24h/24 – 7j/7</p><p className="text-[11px] text-slate-500">Prise en charge tôt le matin, tard le soir, week-ends et jours fériés.</p></div></li>
                      <li className="flex gap-2"><Users className="w-4 h-4 text-slate-700 mt-0.5" /><div><p className="font-semibold text-slate-800">Véhicule privatisé</p><p className="text-[11px] text-slate-500">Le véhicule est 100% réservé pour vous et vos accompagnants.</p></div></li>
                    </ul>
                  </div>
                  <div className="mt-4 pt-3 border-t border-dashed border-slate-200">
                    <p className="text-[11px] text-slate-500 mb-2">Pour un devis immédiat par téléphone :</p>
                    <a href="tel:0634605799" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-700 hover:text-blue-900"><Phone className="w-4 h-4" /> 06 34 60 57 99</a>
                  </div>
                </aside>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* === SECTION TARIFS, PRO, SEO, FAQ, FOOTER (inchangés) === */}
      <div className="max-w-7xl mx-auto px-4 w-full pb-16 animate-fade-in delay-200">
        {/* TITRE TARIFS */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-4">Nos Forfaits Aéroports</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto" />
          <p className="text-slate-500 text-sm mt-4 max-w-xl mx-auto">Des prix fixes pour vos départs et arrivées. <br /><strong>Transfert privé :</strong> le véhicule est 100% réservé pour vous.</p>
        </div>

        {/* GRILLE TARIFS (INTACTE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* ORLY */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-32 bg-blue-900 relative overflow-hidden"><img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Orly" /><div className="absolute inset-0 flex items-center justify-between px-6 text-white"><h3 className="text-2xl font-black uppercase">ORLY</h3><Plane className="w-6 h-6" /></div></div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">180 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 8 Passagers</span><span className="text-xl font-black text-slate-800">220 €</span></div>
            </div>
          </div>
          {/* ROISSY */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-32 bg-slate-900 relative overflow-hidden"><img src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Roissy" /><div className="absolute inset-0 flex items-center justify-between px-6 text-white"><h3 className="text-2xl font-black uppercase">ROISSY</h3><Plane className="w-6 h-6" /></div></div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">210 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 8 Passagers</span><span className="text-xl font-black text-slate-800">240 €</span></div>
            </div>
          </div>
          {/* PARIS & GARES PARISIENNES */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition duration-300">
            <div className="h-32 bg-blue-900 relative overflow-hidden"><img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Paris & Gares Parisiennes" /><div className="absolute inset-0 flex items-center justify-between px-6 text-white"><h3 className="text-2xl font-black uppercase">PARIS</h3><Train className="w-6 h-6" /></div></div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">200 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 8 Passagers</span><span className="text-xl font-black text-slate-800">240 €</span></div>
            </div>
          </div>
          {/* BEAUVAIS */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition duration-300">
            <div className="h-32 bg-slate-800 relative overflow-hidden"><img src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Beauvais" /><div className="absolute inset-0 flex items-center justify-between px-6 text-white"><h3 className="text-2xl font-black uppercase">BEAUVAIS</h3><Plane className="w-6 h-6" /></div></div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">300 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 8 Passagers</span><span className="text-xl font-black text-slate-800">350 €</span></div>
            </div>
          </div>
          {/* TOURS */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition duration-300">
            <div className="h-32 bg-blue-900 relative overflow-hidden"><img src="https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Tours" /><div className="absolute inset-0 flex items-center justify-between px-6 text-white"><h3 className="text-2xl font-black uppercase">TOURS</h3><Plane className="w-6 h-6" /></div></div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">200 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 8 Passagers</span><span className="text-xl font-black text-slate-800">230 €</span></div>
            </div>
          </div>
          {/* INFOS SUPP */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg flex flex-col justify-center">
            <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-2 text-slate-800"><Info className="w-6 h-6 text-blue-600" /> Infos & Suppléments</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li className="flex justify-between border-b border-slate-100 pb-3"><span className="flex items-center gap-2"><Moon className="w-4 h-4 text-slate-400" /> Nuit (20h-05h)</span><span className="text-slate-900 font-bold">+20€</span></li>
              <li className="flex justify-between border-b border-slate-100 pb-3"><span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400" /> Dimanche & Férié</span><span className="text-slate-900 font-bold">+20€</span></li>
              <li className="flex justify-between border-b border-slate-100 pb-3"><span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-slate-400" /> Bagages supp.</span><span className="text-slate-900 font-bold">10€ <span className="text-[10px] font-normal text-slate-400">/unité</span></span></li>
              <li className="flex justify-between"><span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> Hors Agglo (&gt;10km)</span><span className="text-slate-900 font-bold">0,80€ <span className="text-[10px] font-normal text-slate-400">/km</span></span></li>
            </ul>
            <div className="mt-6 text-[11px] text-slate-500 italic bg-slate-50 p-4 rounded border border-slate-100">Attente retard avion/train : gratuite jusqu'à 35min, puis 30€/heure.</div>
          </div>
        </div>

        {/* SECTION PRO & ENTREPRISES (inchangée) */}
        <div className="mb-12 bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2 block">Service B2B</span>
              <h2 className="text-3xl font-black uppercase mb-4">Professionnels & Entreprises</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Mapetrans.LD est le partenaire privilégié des entreprises du Loiret pour la gestion des déplacements collaborateurs et VIP. Solutions sur mesure adaptées à vos besoins réguliers.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-blue-500" /> Facturation mensuelle fin de mois</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-blue-500" /> Navettes régulières (Matin/Soir)</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-blue-500" /> Priorité de réservation & Ligne dédiée</li>
              </ul>
              <div className="mt-8">
                <button onClick={() => setIsCallbackModalOpen(true)} className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase text-xs hover:text-white transition group">Demander à être rappelé <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></button>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <Briefcase className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Navettes Salariés</h3>
              <p className="text-xs text-slate-400 mb-6">Mise en place de lignes régulières pour le transport de vos équipes vers Gares & Aéroports.</p>
              <div className="h-px w-full bg-white/10 mb-6" />
              <Building2 className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Événementiel</h3>
              <p className="text-xs text-slate-400">Gestion logistique complète pour vos séminaires, congrès et visites de sites industriels.</p>
            </div>
          </div>
        </div>

        {/* BLOC SEO : Taxi vs VTC */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase text-center mb-10">Pourquoi choisir VTC plutôt que <span className="text-blue-600">Taxi à Orléans ?</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 transition">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-yellow-500" />
                <h3 className="text-xl font-bold uppercase">Courses Express & Urgences</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Besoin d'un transport urgent ou d'une course express ? Contrairement aux taxis parfois indisponibles, nous trouvons une solution rapide pour vos impératifs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 transition">
              <div className="flex items-center gap-4 mb-4">
                <CreditCard className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold uppercase">Prix Fixe Garanti</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Pour aller à Orly ou Roissy depuis Orléans, le compteur d'un taxi peut vite grimper. Avec nous, le forfait est fixé à l'avance. Aucune surprise.</p>
            </div>
          </div>
        </div>

        {/* ZONES D'INTERVENTION */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Prise en charge à domicile pour vos départs et arrivées</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Orléans Centre", "Gare d'Orléans", "Saran", "Olivet", "Saint-Jean-de-Braye", "Fleury-les-Aubrais", "La Chapelle-Saint-Mesmin", "Ingré", "Semoy", "Chécy"].map((city) => (
              <span key={city} className="bg-white px-4 py-2 rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-100 flex items-center gap-2">
                <MapPin className="w-3 h-3 text-blue-500" /> {city}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-black text-slate-900 uppercase text-center mb-8">Questions Fréquentes</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-4 font-bold cursor-pointer hover:bg-slate-50">
                Réalisez-vous des courses express ou urgentes ?
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition" />
              </summary>
              <div className="p-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                Oui, les courses express sont au cœur de notre métier. Contactez-nous immédiatement au 06 34 60 57 99 pour vérifier la disponibilité d'un chauffeur en urgence.
              </div>
            </details>
            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-4 font-bold cursor-pointer hover:bg-slate-50">
                Quels sont les tarifs pour Orly ou Roissy ?
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition" />
              </summary>
              <div className="p-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                Nos forfaits démarrent à 180€ pour Orly et 210€ pour Roissy CDG. Le tarif est fixe, bagages compris, peu importe la circulation.
              </div>
            </details>
            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-4 font-bold cursor-pointer hover:bg-slate-50">
                Desservez-vous les Gares Parisiennes ?
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition" />
              </summary>
              <div className="p-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                Oui, nous assurons fréquemment la liaison Orléans vers Paris Austerlitz, Montparnasse ou Gare de Lyon pour vos correspondances TGV.
              </div>
            </details>
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
            <a href="tel:0634605799" className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700">
              <Phone className="w-4 h-4 inline mr-2" /> CONTACT RAPIDE
            </a>
          </div>
        </div>
        <div id="contact" className="bg-black text-white py-12 px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col leading-none mb-6">
                <span className="text-xl font-black tracking-tighter text-white">MAPETRANS <span className="text-blue-700">.LD</span></span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Solutions de Transport</span>
              </div>
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
              <Link href="/confidentialite" className="hover:text-slate-400 transition">Politique de Confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}