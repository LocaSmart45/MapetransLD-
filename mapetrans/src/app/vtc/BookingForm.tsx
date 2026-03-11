"use client";

import React, { useState, useRef } from 'react';
import {
  ArrowRight, CheckCircle, Clock, MapPin, Users, Menu, X, Phone, Mail, ArrowUpRight, Star, Moon, Calendar, Info, Plane, User, Send, Loader2, Train, PhoneCall, Repeat, ChevronDown, CreditCard, Zap,
} from "lucide-react";
import Link from "next/link";

// --- Tracking Google Ads conversion "Envoi de formulaire de lead" ---

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function trackVtcConversion() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17935783791/e0tiCKPsrPsbEO-uuehC",
      value: 1.0,
      currency: "EUR",
    });
  } else {
    console.warn("gtag non disponible – conversion non trackée");
  }
}
// -------------------------------------------------------------------

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

export default function BookingForm() {
  const [isSending, setIsSending] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [activeStep, setActiveStep] = useState<1 | 2>(1);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const vehiculeAuto = parseInt(formData.passagers) >= 4 ? "Van" : "Berline";

    const data = {
      "Date Demande": new Date().toLocaleString("fr-FR"),
      "Type Trajet": isRoundTrip ? "Aller-Retour" : "Aller Simple",
      "Nom": formData.nom,
      "Prénom": formData.prenom,
      "Adresse Facturation": "",
      "Téléphone": formData.telephone,
      "Email": formData.user_email,
      "Date Aller": formData.date,
      "Heure Vol/Train Aller": formData.time,
      "Départ Aller": formData.depart,
      "Destination Aller": formData.destination,
      "N° Vol/Train Aller": formData.vol_train,
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

        // 👉 Conversion Google Ads : réservation VTC
        trackVtcConversion();

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
      alert("❌ Erreur d'envoi.");
    }
  };

  const goToStep2 = () => {
    if (!formData.date || !formData.time || !formData.depart || !formData.destination) {
      alert("Merci de remplir les informations obligatoires du trajet (Date, Heure, Départ, Destination) avant de continuer.");
      return;
    }
    setActiveStep(2);
  };

  return (
    <>
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

      {/* === FENÊTRE MODALE DE RAPPEL === */}
      {isCallbackModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative">
            <button onClick={() => setIsCallbackModalOpen(false)} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition">
              <X className="w-5 h-5 text-slate-600" />
            </button>
            <div className="bg-blue-700 p-6 text-white">
              <h3 className="text-xl font-black uppercase flex items-center gap-2">
                <PhoneCall className="w-6 h-6" /> Rappel Prioritaire
              </h3>
              <p className="text-sm text-blue-100 mt-1">Service réservé aux entreprises.</p>
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

      {/* === FORMULAIRE MODERNE ÉTAPE 1 / ÉTAPE 2 === */}
      <div id="booking" className="relative z-20 px-4 max-w-5xl mx-auto w-full mt-12 mb-12 animate-fade-in delay-100">
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
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

          <form ref={form} onSubmit={sendEmail} className="p-6 md:p-8">
            {activeStep === 1 && (
              <div className="space-y-5">
                {/* Toggle Aller Simple / Aller-Retour */}
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <button type="button" onClick={() => setIsRoundTrip(false)} className={`flex-1 flex items-center justify-center gap-2 text-xs font-bold uppercase rounded-md py-2 transition ${!isRoundTrip ? "bg-blue-600 text-white shadow" : "text-slate-500 hover:text-blue-600"}`}>
                    <Plane className="w-4 h-4" /> Aller Simple
                  </button>
                  <button type="button" onClick={() => setIsRoundTrip(true)} className={`flex-1 flex items-center justify-center gap-2 text-xs font-bold uppercase rounded-md py-2 transition ${isRoundTrip ? "bg-blue-600 text-white shadow" : "text-slate-500 hover:text-blue-600"}`}>
                    <Repeat className="w-4 h-4" /> Aller-Retour
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Date du trajet</span><span className="text-red-500">*</span></label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white" />
                  </div>
                  <div>
                    <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Heure de Vol - Train</span><span className="text-red-500">*</span></label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white" />
                  </div>
                </div>

                <div>
                  <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Adresse de départ</span><span className="text-red-500">*</span></label>
                  <input type="text" name="depart" value={formData.depart} onChange={handleChange} placeholder="Ex: 12 rue de la République, Orléans" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" />
                </div>

                <div>
                  <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Destination</span><span className="text-red-500">*</span></label>
                  <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="Ex: Aéroport d'Orly, Terminal 3" required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">N° Vol / Train </label>
                  <input type="text" name="vol_train" value={formData.vol_train} onChange={handleChange} placeholder="Ex: AF1234" className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none" />
                </div>

                {isRoundTrip ? (
                  <div className="space-y-4 pt-4 border-t border-dashed border-slate-200">
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-wide flex items-center gap-2"><Repeat className="w-4 h-4" /> Informations du trajet retour</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Date Retour</label>
                        <input type="date" name="date_retour" value={formData.date_retour} onChange={handleChange} required className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Heure prévue d’arrivée</label>
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
            )}

            {activeStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="md:col-span-2 space-y-5">
                  <h4 className="text-sm font-black text-blue-800 uppercase border-b border-slate-100 pb-2 flex items-center gap-2"><User className="w-4 h-4" /> Passagers & Contact</h4>
                  <div>
                    <label className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-1"><span>Nb Passagers</span><span className="text-red-500">*</span></label>
                    <select name="passagers" value={formData.passagers} onChange={handleChange} className="w-full h-10 border border-slate-300 rounded-sm px-3 text-sm font-medium focus:border-blue-600 outline-none bg-white">
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={String(n)}>{n} personne{n > 1 ? 's' : ''}</option>)}
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

      {/* Section Pro - B2B */}
      <div onClick={() => setIsCallbackModalOpen(true)} className="cursor-pointer">
        {/* Ce div permet d'ouvrir le modal depuis la page */}
      </div>
    </>
  );
}
