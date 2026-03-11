"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  Users,
  Truck,
  Box,
  Briefcase,
  MessageSquare,
  Phone,
  Menu,
  X,
  Clock,
  CheckCircle,
  Plane,
  ChevronDown,
} from "lucide-react";

interface NavHeaderProps {
  ctaLabel?: string;
  ctaHref?: string;
  topBarRight?: string;
}

const VTC_SUBMENU = [
  { href: "/vtc", label: "VTC & Chauffeurs privés", desc: "Réservation & tarifs" },
  { href: "/navette-orleans-orly", label: "Navette Orléans → Orly", desc: "Prix fixe dès 180€" },
  { href: "/navette-orleans-roissy-cdg", label: "Navette Orléans → Roissy CDG", desc: "Prix fixe dès 210€" },
  { href: "/vtc-orleans-paris", label: "VTC Orléans → Paris", desc: "Berline privée dès 150€" },
  { href: "/tarifs-vtc-orleans", label: "Tarifs VTC Orléans", desc: "Tous nos prix détaillés" },
  { href: "/chauffeur-mariage-evenement-orleans", label: "Mariage & Événements", desc: "Privatisation & sur mesure" },
  { href: "/vtc-gare-orleans", label: "Chauffeur Gare d'Orléans", desc: "Accueil nominatif, sans attente" },
];

const OTHER_LINKS = [
  { href: "/agence", label: "L'Agence", Icon: Building2 },
  { href: "/logistique", label: "Logistique & Fret", Icon: Truck },
  { href: "/demenagement", label: "Déménagement", Icon: Box },
  { href: "/entreprises", label: "Entreprises", Icon: Briefcase },
  { href: "/contact", label: "Contact", Icon: MessageSquare },
];

export default function NavHeader({
  ctaLabel = "Devis Express",
  ctaHref = "/vtc#booking",
  topBarRight = "Devis Gratuit & Réponse Immédiate",
}: NavHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [vtcHover, setVtcHover] = useState(false);
  const [vtcMobileOpen, setVtcMobileOpen] = useState(false);
  const pathname = usePathname();

  const isVtcActive =
    pathname === "/vtc" || pathname.startsWith("/navette-orleans");

  // Hauteur réelle du header mobile : topbar (36px) + nav (80px) = 116px
  const MOBILE_HEADER_H = "top-[116px]";

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 h-9 flex items-center justify-between text-[9px] font-medium tracking-wide uppercase px-4">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-blue-400 shrink-0" />
          <span className="text-white font-bold">Astreinte 24h/24 — 7j/7</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5">
          <CheckCircle className="w-3 h-3 text-green-400 shrink-0" />
          <span>{topBarRight}</span>
        </div>
        <a href="tel:0634605799" className="md:hidden flex items-center gap-1.5 text-white font-bold">
          <Phone className="w-3 h-3 text-blue-400" />
          06 34 60 57 99
        </a>
      </div>

      {/* Main nav */}
      <nav className="border-b border-slate-200 h-20 flex items-center bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none shrink-0">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 whitespace-nowrap">
              MAPETRANS <span className="text-blue-700">LD</span>
            </span>
            <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
              Solutions de Transport
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden xl:flex items-center text-[10px] font-extrabold text-slate-600 tracking-widest uppercase">
            <Link
              href="/agence"
              className={`px-4 py-2 flex items-center gap-2 border-r border-slate-100 transition ${pathname === "/agence" ? "text-blue-700" : "hover:text-blue-700"}`}
            >
              <Building2 className={`w-4 h-4 ${pathname === "/agence" ? "text-blue-700" : "text-slate-400"}`} />
              L&apos;Agence
            </Link>

            {/* VTC dropdown */}
            <div
              className="relative border-r border-slate-100"
              onMouseEnter={() => setVtcHover(true)}
              onMouseLeave={() => setVtcHover(false)}
            >
              <button className={`px-4 py-8 flex items-center gap-2 transition ${isVtcActive ? "text-blue-700" : "hover:text-blue-700 text-slate-600"}`}>
                <Users className={`w-4 h-4 ${isVtcActive ? "text-blue-700" : "text-slate-400"}`} />
                VTC &amp; Chauffeurs
                <ChevronDown className={`w-3 h-3 ml-0.5 opacity-60 transition-transform duration-200 ${vtcHover ? "rotate-180" : ""}`} />
              </button>
              {vtcHover && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-b-xl z-50">
                  {VTC_SUBMENU.map(({ href, label, desc }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition border-b border-slate-50 last:border-0 last:rounded-b-xl ${pathname === href ? "bg-blue-50 text-blue-700" : ""}`}
                      onClick={() => setVtcHover(false)}
                    >
                      <Plane className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] font-black text-slate-800 uppercase tracking-wider leading-tight">{label}</div>
                        <div className="text-[9px] font-medium text-slate-400 normal-case tracking-normal mt-0.5">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {OTHER_LINKS.map(({ href, label, Icon }, i) => {
              const isActive = pathname === href;
              const isLast = i === OTHER_LINKS.length - 1;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 flex items-center gap-2 transition ${isLast ? "" : "border-r border-slate-100"} ${isActive ? "text-blue-700" : "hover:text-blue-700"}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-blue-700" : "text-slate-400"}`} />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right — desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop */}
            <div className="hidden xl:flex items-center gap-6 pl-6">
              <div className="flex flex-col items-end text-right">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Urgence &amp; Réservation</span>
                <a href="tel:0634605799" className="text-lg font-bold text-slate-900 tracking-tight hover:text-blue-700 transition font-mono whitespace-nowrap">
                  06 34 60 57 99
                </a>
              </div>
              <Link
                href={ctaHref}
                className="flex items-center gap-2 bg-slate-900 text-white text-[11px] px-5 py-3 rounded-xl font-bold hover:bg-blue-700 transition duration-300 shadow-lg tracking-wide uppercase whitespace-nowrap"
              >
                {ctaLabel}
              </Link>
            </div>

            {/* Mobile : CTA Réserver */}
            <Link
              href={ctaHref}
              className="xl:hidden flex items-center gap-2 bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs tracking-wide shadow-md hover:bg-blue-800 transition whitespace-nowrap"
              onClick={() => setMobileOpen(false)}
            >
              {ctaLabel}
            </Link>

            {/* Hamburger */}
            <button
              className="xl:hidden p-1.5 text-slate-800 rounded-lg hover:bg-slate-100 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — overlay plein écran */}
      {mobileOpen && (
        <div className={`fixed inset-x-0 ${MOBILE_HEADER_H} bottom-0 z-40 bg-white flex flex-col xl:hidden overflow-y-auto`}>
          {/* Corps du menu */}
          <div className="flex-1 px-4 pt-4 pb-4 space-y-2">

            {/* VTC accordéon */}
            <div className="rounded-xl border border-slate-200 overflow-hidden">
              <button
                className={`flex items-center justify-between w-full px-4 py-4 text-sm font-black uppercase tracking-wider ${isVtcActive ? "bg-blue-50 text-blue-700" : "bg-slate-50 text-slate-800"}`}
                onClick={() => setVtcMobileOpen(!vtcMobileOpen)}
              >
                <span className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-700 shrink-0" />
                  VTC &amp; Chauffeurs
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${vtcMobileOpen ? "rotate-180" : ""}`} />
              </button>
              {vtcMobileOpen && (
                <div className="divide-y divide-slate-100 border-t border-slate-100">
                  {VTC_SUBMENU.map(({ href, label, desc }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-start gap-3 px-4 py-3.5 transition ${pathname === href ? "bg-blue-50 text-blue-700" : "bg-white hover:bg-slate-50 text-slate-700"}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <Plane className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-black uppercase tracking-wide leading-tight">{label}</div>
                        <div className="text-[11px] text-slate-400 font-medium mt-0.5">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Autres liens */}
            {OTHER_LINKS.map(({ href, label, Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl border text-sm font-black uppercase tracking-wider transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border-blue-100"
                      : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-blue-700" : "text-blue-700"}`} />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Footer fixe du menu — tel + CTA */}
          <div className="border-t border-slate-100 bg-white px-4 py-4 space-y-3">
            <a
              href="tel:0634605799"
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl border-2 border-blue-700 text-blue-700 font-black text-sm tracking-wide"
            >
              <Phone className="w-5 h-5" />
              06 34 60 57 99
            </a>
            <Link
              href={ctaHref}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-700 text-white font-black text-sm tracking-wide shadow-lg"
              onClick={() => setMobileOpen(false)}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
