"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Truck,
  Users,
  Box,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const MODES = [
  {
    key: "vtc",
    highlight: "VTC & Navettes Aéroports",
    description:
      "Navettes privées vers Orly, Roissy, les gares parisiennes et vos destinations longue distance.",
    ctaLabel: "Demander un devis VTC",
    ctaHref: "/vtc#booking",
    bullet1Title: "Orléans & Agglo",
    bullet1Text:
      "Prise en charge à domicile, en gare ou en entreprise pour tous vos départs et arrivées.",
    bullet2Title: "France & Europe",
    bullet2Text:
      "Liaisons vers Orly, Roissy, Paris et grandes distances, 7j/7.",
    imageSrc:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Chauffeur VTC à Orléans",
    bannerTitle: "Navettes Aéroports",
    bannerSubtitle: "Orléans → Orly, Roissy, Gares Parisiennes",
    bannerBadge: "VTC • 24/7",
  },
  {
    key: "logistique",
    highlight: "Transport & Logistique",
    description:
      "Courses express, tournées régulières et transport dédié de vos marchandises en France et en Europe.",
    ctaLabel: "Demander une cotation transport",
    ctaHref: "/logistique",
    bullet1Title: "Courses express",
    bullet1Text:
      "Enlèvement rapide de vos colis, pièces ou documents sensibles, avec suivi.",
    bullet2Title: "Tournées & Fret",
    bullet2Text:
      "Tournées régulières et transport dédié pour vos flux logistiques.",
    imageSrc:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Camion et palettes de transport logistique",
    bannerTitle: "Transport Express & Fret",
    bannerSubtitle: "Courses urgentes, tournées & flux réguliers",
    bannerBadge: "FRET • EXPRESS",
  },
  {
    key: "demenagement",
    highlight: "Déménagement & Stockage",
    description:
      "Déménagements locaux ou nationaux, avec des solutions de garde-meubles sécurisées pour vos biens.",
    ctaLabel: "Demander un devis déménagement",
    ctaHref: "/demenagement",
    bullet1Title: "Déménagement local",
    bullet1Text:
      "Orléans, Loiret et régions proches, avec équipe dédiée et matériel adapté.",
    bullet2Title: "National & stockage",
    bullet2Text:
      "Déménagements longue distance et garde-meubles sécurisé selon la durée souhaitée.",
    imageSrc:
      "https://images.pexels.com/photos/4246202/pexels-photo-4246202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Équipe de déménagement avec cartons",
    bannerTitle: "Déménagement & Stockage",
    bannerSubtitle: "Local, national & garde-meubles",
    bannerBadge: "DÉMÉNAGEMENT",
  },
];

export default function HomeHero() {
  const [modeIndex, setModeIndex] = useState(0);
  const mode = MODES[modeIndex];

  useEffect(() => {
    const id = setInterval(() => {
      setModeIndex((prev) => (prev + 1) % MODES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-4 w-full mt-6 mb-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Texte hero */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-blue-700 bg-blue-50/80 border border-blue-100 px-3 py-1 rounded-full shadow-sm">
            <MapPin className="w-3 h-3" />
            Orléans &amp; Loiret
          </span>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Transport &amp; Navettes à Orléans
              <br />
              <span className="text-blue-700">{mode.highlight}</span>
            </h1>

            <p className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed">
              {mode.description} Basés à Orléans, nous intervenons dans tout
              le Loiret, en France et en Europe pour les particuliers et les
              professionnels.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={mode.ctaHref}
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-blue-700 transition"
              >
                {mode.ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/agence"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-600 hover:text-blue-700"
              >
                Découvrir l&apos;agence
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 text-[11px] text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Devis gratuit &amp; réponse rapide</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Service 24h/24 – 7j/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Particuliers &amp; professionnels</span>
            </div>
          </div>
        </div>

        {/* Carte hero avec photos qui défilent */}
        <div className="relative">
          <div className="absolute -top-8 -right-10 w-52 h-52 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-8 -left-10 w-40 h-40 bg-slate-900/10 rounded-full blur-3xl" />

          <div className="relative bg-white/90 border border-slate-200 rounded-3xl shadow-xl overflow-hidden backdrop-blur">
            <div className="relative">
              <img
                key={mode.key}
                src={mode.imageSrc}
                alt={mode.imageAlt}
                className="w-full h-56 md:h-72 object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-slate-100">
                <div className="flex flex-col">
                  <span className="font-bold uppercase tracking-[0.2em]">
                    {mode.bannerTitle}
                  </span>
                  <span className="text-slate-200">{mode.bannerSubtitle}</span>
                </div>
                <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm font-mono text-[10px]">
                  {mode.bannerBadge}
                </span>
              </div>
            </div>

            <div className="p-5 md:p-6 space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 border-b border-slate-200 pb-3">
                {[
                  { key: "vtc", label: "Navettes VTC", icon: <Users className="w-3 h-3" /> },
                  { key: "logistique", label: "Transport & Fret", icon: <Truck className="w-3 h-3" /> },
                  { key: "demenagement", label: "Déménagement", icon: <Box className="w-3 h-3" /> },
                ].map((item) => {
                  const isActive = item.key === mode.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => {
                        const idx = MODES.findIndex((m) => m.key === item.key);
                        if (idx !== -1) setModeIndex(idx);
                      }}
                      className={[
                        "inline-flex items-center gap-2 px-3 py-1 rounded-full transition",
                        isActive
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "text-slate-500 hover:text-blue-700 hover:bg-slate-50 border border-transparent",
                      ].join(" ")}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-4 text-[11px] text-slate-600">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900">{mode.bullet1Title}</div>
                  <p>{mode.bullet1Text}</p>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-slate-900">{mode.bullet2Title}</div>
                  <p>{mode.bullet2Text}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Service 24h/24 – 7j/7</span>
                </div>
                <a
                  href="tel:0634605799"
                  className="font-mono text-sm font-bold text-slate-900 hover:text-blue-700 transition"
                >
                  06 34 60 57 99
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
