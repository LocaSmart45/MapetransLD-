"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Building2,
  Truck,
  Users,
  MessageSquare,
  Box,
  Menu,
  X,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";


// Modes du hero (VTC / Transport / Déménagement)
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
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop", // camion & palettes
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
      "https://images.pexels.com/photos/4246202/pexels-photo-4246202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // déménageurs & cartons
    imageAlt: "Équipe de déménagement avec cartons",
    bannerTitle: "Déménagement & Stockage",
    bannerSubtitle: "Local, national & garde-meubles",
    bannerBadge: "DÉMÉNAGEMENT",
  },
];

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modeIndex, setModeIndex] = useState(0);

  const mode = MODES[modeIndex];

  // Auto-rotation des modes (VTC -> Transport -> Déménagement)
  useEffect(() => {
    const id = setInterval(() => {
      setModeIndex((prev) => (prev + 1) % MODES.length);
    }, 6000); // toutes les 6 secondes
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">
      {/* ARRIÈRE-PLAN */}
      <div className="absolute top-0 left-0 w-full h-[620px] bg-white -z-10 border-b border-slate-200">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top,_#1d4ed8_0,_transparent_55%),linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:100%_100%,40px_40px,40px_40px]" />
      </div>

      {/* === HEADER === */}
      <header className="fixed top-0 w-full z-50 shadow-sm bg-white/90 backdrop-blur-md transition-all duration-300">
        {/* Top bar */}
        <div className="bg-slate-900 text-slate-300 h-9 md:h-10 flex items-center justify-between text-[9px] md:text-[11px] font-medium tracking-wide uppercase px-4 overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-1.5 md:gap-2 min-w-fit">
            <Clock className="w-3 h-3 text-blue-400" />
            <span className="text-white font-bold">
              Astreinte 24h/24 7j/7
            </span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 min-w-fit">
            <CheckCircle className="w-3 h-3 text-green-400" />
            <span className="hidden md:inline">
              Devis Gratuit &amp; Réponse Immédiate
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav className="border-b border-slate-200 h-20 md:h-24 flex items-center relative bg-white/90 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
            {/* Logo */}
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

            {/* Menu desktop */}
            <div className="hidden xl:flex items-center text-[10px] font-extrabold text-slate-600 tracking-widest uppercase">
              <Link
                href="/agence"
                className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"
              >
                <Building2 className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" />
                L&apos;Agence
              </Link>
              <Link
                href="/vtc"
                className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"
              >
                <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" />
                VTC &amp; Chauffeurs
              </Link>
              <Link
                href="/logistique"
                className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"
              >
                <Truck className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" />
                Logistique &amp; Fret
              </Link>
              <Link
                href="/demenagement"
                className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group border-r border-slate-100 last:border-0"
              >
                <Box className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" />
                Déménagement
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-700 transition px-4 py-2 flex items-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition" />
                Contact
              </Link>
            </div>

            {/* CTA + burger */}
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="tel:0634605799"
                className="xl:hidden flex items-center gap-2 bg-blue-700 text-white px-3 py-2 rounded-sm shadow-md hover:bg-blue-800 transition"
              >
                <Phone className="w-3 h-3" />
                <span className="text-[10px] font-black tracking-wider">
                  06 34 60 57 99
                </span>
              </a>

              <div className="hidden xl:flex items-center gap-6 pl-6">
                <div className="flex flex-col items-end text-right">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Urgence &amp; Réservation
                  </span>
                  <span className="text-lg font-bold text-slate-900 tracking-tight hover:text-blue-700 transition cursor-pointer font-mono">
                    06 34 60 57 99
                  </span>
                </div>
                {/* CTA FIXE DU HEADER */}
                <Link
                  href="/vtc#booking"
                  className="flex items-center gap-2 bg-slate-900 text-white text-[11px] px-5 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300 shadow-lg tracking-wide uppercase"
                >
                  Devis Express
                </Link>
              </div>

              <button
                className="xl:hidden p-1 text-slate-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-28 z-40 bg-white border-t border-slate-100 p-6 flex flex-col gap-6 xl:hidden overflow-y-auto pb-32">
            <div className="flex flex-col gap-4 text-sm font-black uppercase tracking-wider text-slate-800">
              <Link
                href="/agence"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Building2 className="w-5 h-5 text-blue-700" /> L&apos;Agence
              </Link>
              <Link
                href="/vtc"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="w-5 h-5 text-blue-700" /> VTC &amp;
                Chauffeurs
              </Link>
              <Link
                href="/logistique"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Truck className="w-5 h-5 text-blue-700" /> Logistique &amp;
                Fret
              </Link>
              <Link
                href="/demenagement"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Box className="w-5 h-5 text-blue-700" /> Déménagement
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquare className="w-5 h-5 text-blue-700" /> Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* === 1. HERO ACCUEIL ANIMÉ === */}
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
              {/* Image */}
              <div className="relative">
                <img
                  key={mode.key} // pour bien rafraîchir l'image quand le mode change
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
                    <span className="text-slate-200">
                      {mode.bannerSubtitle}
                    </span>
                  </div>
                  <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm font-mono text-[10px]">
                    {mode.bannerBadge}
                  </span>
                </div>
              </div>

              {/* Contenu carte */}
              <div className="p-5 md:p-6 space-y-4">
                {/* Tabs services */}
                <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 border-b border-slate-200 pb-3">
                  {[
                    {
                      key: "vtc",
                      label: "Navettes VTC",
                      icon: <Users className="w-3 h-3" />,
                    },
                    {
                      key: "logistique",
                      label: "Transport & Fret",
                      icon: <Truck className="w-3 h-3" />,
                    },
                    {
                      key: "demenagement",
                      label: "Déménagement",
                      icon: <Box className="w-3 h-3" />,
                    },
                  ].map((item) => {
                    const isActive = item.key === mode.key;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => {
                          const idx = MODES.findIndex(
                            (m) => m.key === item.key
                          );
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

                {/* Bullets dynamiques */}
                <div className="grid grid-cols-2 gap-4 text-[11px] text-slate-600">
                  <div className="space-y-1">
                    <div className="font-bold text-slate-900">
                      {mode.bullet1Title}
                    </div>
                    <p>{mode.bullet1Text}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-slate-900">
                      {mode.bullet2Title}
                    </div>
                    <p>{mode.bullet2Text}</p>
                  </div>
                </div>

                {/* Bas de carte */}
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

      {/* === 2. BLOC : PLUS QU'UN TRANSPORTEUR === */}
      <section className="max-w-7xl mx-auto px-4 w-full mb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Bloc texte */}
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">
              Plus qu&apos;un simple transporteur
            </h2>
            <div className="w-16 h-[3px] bg-blue-700 rounded-full" />
            <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
              MAPETRANS LD est une entreprise de transport indépendante basée à
              Orléans. Nous avons fait le choix de privilégier le service, la
              proximité et la qualité plutôt que les plateformes
              impersonnelles. Chaque mission est suivie, préparée et réalisée
              avec la même exigence, qu&apos;il s&apos;agisse d&apos;une navette
              aéroport, d&apos;un déménagement familial ou d&apos;un transport
              express pour une entreprise.
            </p>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
              Nous accompagnons au quotidien les particuliers et les
              professionnels du Loiret, avec une connaissance fine du
              territoire, des contraintes horaires et des impératifs métiers.
              Vous disposez d&apos;un interlocuteur unique, capable d&apos;
              organiser et de coordonner l&apos;ensemble de vos besoins en
              mobilité et en logistique.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-2 text-[11px] text-slate-600">
              <div className="bg-white border border-slate-200 rounded-xl p-3">
                <div className="font-bold text-slate-900 mb-1">
                  Particuliers
                </div>
                <p>
                  Navettes aéroports, retours de soirées, déménagements et
                  transferts longue distance.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3">
                <div className="font-bold text-slate-900 mb-1">
                  Professionnels
                </div>
                <p>
                  Déplacements collaborateurs, clients VIP, transport express de
                  marchandises, événements.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3">
                <div className="font-bold text-slate-900 mb-1">Sur mesure</div>
                <p>
                  Organisation complète, horaires adaptés, suivi personnalisé,
                  solutions récurrentes ou ponctuelles.
                </p>
              </div>
            </div>
          </div>

          {/* Bloc domaines d'intervention */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.25em]">
              Nos domaines d&apos;intervention
            </h3>

            <div className="space-y-4">
              <Link
                href="/vtc"
                className="group block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-600 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-sm font-black uppercase text-slate-900">
                        VTC &amp; Navettes Aéroports
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Orléans &rarr; Orly, Roissy, gares parisiennes &amp;
                        grandes distances.
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transferts privés, navettes collaborateurs, prise en charge
                  personnalisée à domicile ou en entreprise, 7j/7.
                </p>
              </Link>

              <Link
                href="/logistique"
                className="group block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-600 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Truck className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-sm font-black uppercase text-slate-900">
                        Transport &amp; Logistique
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Courses express, tournées régulières et transport
                        dédié.
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Livraison urgente de pièces, documents et marchandises
                  sensibles, avec suivi et interlocuteur unique.
                </p>
              </Link>

              <Link
                href="/demenagement"
                className="group block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-600 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Box className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-sm font-black uppercase text-slate-900">
                        Déménagement &amp; Stockage
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Déménagements locaux &amp; nationaux, garde-meubles.
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Accompagnement complet, de la préparation à l&apos;installation,
                  avec des solutions de stockage adaptées.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === 3. BLOC : ENGAGEMENTS & RASSURANCE === */}
      <section className="max-w-7xl mx-auto px-4 w-full mb-20">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                Engagements &amp; conformité
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4">
                Une entreprise de transport
                <br />
                fiable &amp; déclarée
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Tous nos véhicules et chauffeurs sont déclarés, assurés et
                contrôlés. Nous travaillons dans le respect des réglementations
                VTC et transport de marchandises, pour une collaboration
                sereine, transparente et durable.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Que vous soyez un particulier ou une entreprise, vous bénéficiez
                des mêmes garanties de ponctualité, de sécurité et de suivi. Un
                interlocuteur dédié coordonne vos demandes, de la première
                prise de contact jusqu&apos;à la facturation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="font-bold">Licences &amp; assurances</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Véhicules conformes, chauffeurs déclarés, assurances à jour
                  pour le transport de personnes et de marchandises.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="font-bold">Réactivité 24h/24</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Astreinte de nuit, gestion des urgences, prises en charge
                  tôt le matin, tard le soir, week-ends et jours fériés.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="font-bold">Ancrage local</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Une entreprise basée à Orléans, qui connaît le terrain, les
                  accès, les zones d&apos;activités et les contraintes locales.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="font-bold">Contact direct</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Pas de plateforme anonyme : une ligne directe et une équipe
                  disponible pour répondre à vos demandes spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === BANDEAU PARTENAIRES === */}
      {/* === BANDEAU PARTENAIRES === */}
      <section className="border-t border-b border-slate-100 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Ils nous font confiance</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {[
              { nom: "FedEx", logo: "/logos/FedEx.png", width: "w-24" },
              { nom: "Darty", logo: "/logos/Darty.png", width: "w-20" },
              { nom: "LOreal", logo: "/logos/Loreal.png", width: "w-24" },
              { nom: "Servier", logo: "/logos/Servier.png", width: "w-28" },
            ].map((p) => (
              <img key={p.nom} src={p.logo} alt={p.nom} className={`${p.width} object-contain grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300`} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto">
        <div className="bg-blue-700 text-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="text-lg font-bold">
                Une demande précise ? Des conditions particulières ?
              </span>
              <span className="text-blue-100 text-sm mt-1">
                Contactez-nous dès maintenant, réponse immédiate garantie.
              </span>
            </div>
            <a
              href="tel:0634605799"
              className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              CONTACT RAPIDE
            </a>
          </div>
        </div>

        <div
          id="contact"
          className="bg-black text-white py-12 px-6 border-b border-slate-800"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              {/* LOGO FOOTER */}
              <div className="flex flex-col leading-none mb-6">
                <span className="text-xl font-black tracking-tighter text-white">
                  MAPETRANS <span className="text-blue-700">.LD</span>
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">
                  Solutions de Transport
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed text-justify">
                Partenaire expert basé à Orléans. Nous assurons vos transports
                critiques, navettes VIP et déménagements avec une exigence de
                qualité unique. Licences et assurances à jour.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">
                Nos Services
              </h3>
              <div className="flex flex-col gap-3 text-sm font-medium text-slate-400">
                <Link
                  href="/agence"
                  className="flex items-center gap-2 hover:text-white transition group"
                >
                  <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" />{" "}
                  L&apos;Agence
                </Link>
                <Link
                  href="/vtc"
                  className="flex items-center gap-2 hover:text-white transition group"
                >
                  <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" />{" "}
                  VTC &amp; Chauffeurs
                </Link>
                <Link
                  href="/logistique"
                  className="flex items-center gap-2 hover:text-white transition group"
                >
                  <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" />{" "}
                  Logistique &amp; Fret
                </Link>
                <Link
                  href="/demenagement"
                  className="flex items-center gap-2 hover:text-white transition group"
                >
                  <ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" />{" "}
                  Déménagement
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">
                Nous Contacter
              </h3>
              <div className="flex flex-col gap-4 text-sm font-bold">
                <a
                  href="tel:0634605799"
                  className="flex items-center gap-3 hover:text-blue-400 transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" /> 06 34 60 57 99
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <Phone className="w-4 h-4 text-blue-600" /> 09 59 07 04 33
                </div>
                <a
                  href="mailto:contact@mapetransld.com"
                  className="flex items-center gap-3 hover:text-blue-400 transition"
                >
                  <Mail className="w-4 h-4 text-blue-600" /> contact@mapetransld.com
                </a>
                <div className="flex items-center gap-3 text-slate-400 mt-2">
                  <MapPin className="w-4 h-4 text-blue-600" /> Orléans &amp;
                  France Entière
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-wide gap-4">
            <span>Copyright 2025, Mapetrans LD. Tous droits réservés.</span>
            <div className="flex gap-6">
              <Link
                href="/mentions-legales"
                className="hover:text-slate-400 transition"
              >
                Mentions Légales
              </Link>
              <Link
                href="/confidentialite"
                className="hover:text-slate-400 transition"
              >
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}