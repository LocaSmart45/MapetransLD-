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

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm bg-white/95 backdrop-blur-md transition-all duration-300">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 h-9 md:h-10 flex items-center justify-between text-[9px] md:text-[11px] font-medium tracking-wide uppercase px-4 overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-1.5 md:gap-2 min-w-fit">
          <Clock className="w-3 h-3 text-blue-400" />
          <span className="text-white font-bold">Astreinte 24h/24 7j/7</span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2 min-w-fit">
          <CheckCircle className="w-3 h-3 text-green-400" />
          <span className="hidden md:inline">{topBarRight}</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-slate-200 h-20 md:h-24 flex items-center bg-white/95 backdrop-blur-md">
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

            {/* Agence */}
            <Link
              href="/agence"
              className={`px-4 py-2 flex items-center gap-2 border-r border-slate-100 transition ${pathname === "/agence" ? "text-blue-700" : "hover:text-blue-700"}`}
            >
              <Building2 className={`w-4 h-4 ${pathname === "/agence" ? "text-blue-700" : "text-slate-400"}`} />
              L&apos;Agence
            </Link>

            {/* VTC dropdown (JS state) */}
            <div
              className="relative border-r border-slate-100"
              onMouseEnter={() => setVtcHover(true)}
              onMouseLeave={() => setVtcHover(false)}
            >
              <button
                className={`px-4 py-8 flex items-center gap-2 transition ${isVtcActive ? "text-blue-700" : "hover:text-blue-700 text-slate-600"}`}
              >
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

            {/* Autres liens */}
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

          {/* Right CTA */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="tel:0634605799"
              className="xl:hidden flex items-center gap-2 bg-blue-700 text-white px-3 py-2 rounded-sm shadow-md hover:bg-blue-800 transition"
            >
              <Phone className="w-3 h-3" />
              <span className="text-[10px] font-black tracking-wider">06 34 60 57 99</span>
            </a>
            <div className="hidden xl:flex items-center gap-6 pl-6">
              <div className="flex flex-col items-end text-right">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Urgence & Réservation</span>
                <a href="tel:0634605799" className="text-lg font-bold text-slate-900 tracking-tight hover:text-blue-700 transition font-mono whitespace-nowrap">
                  06 34 60 57 99
                </a>
              </div>
              <Link
                href={ctaHref}
                className="flex items-center gap-2 bg-slate-900 text-white text-[11px] px-5 py-3 rounded-sm font-bold hover:bg-blue-700 transition duration-300 shadow-lg tracking-wide uppercase whitespace-nowrap"
              >
                {ctaLabel}
              </Link>
            </div>
            <button
              className="xl:hidden p-1 text-slate-800"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-28 z-40 bg-white border-t border-slate-100 p-6 flex flex-col gap-3 xl:hidden overflow-y-auto pb-32">
          {/* VTC accordéon */}
          <div>
            <button
              className="flex items-center justify-between w-full p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm font-black uppercase tracking-wider text-slate-800"
              onClick={() => setVtcMobileOpen(!vtcMobileOpen)}
            >
              <span className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-700" /> VTC &amp; Chauffeurs
              </span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${vtcMobileOpen ? "rotate-180" : ""}`} />
            </button>
            {vtcMobileOpen && (
              <div className="flex flex-col gap-1 mt-1 pl-4">
                {VTC_SUBMENU.map(({ href, label, desc }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-start gap-3 p-3 rounded-lg border text-xs font-bold ${pathname === href ? "bg-blue-50 border-blue-100 text-blue-700" : "bg-white border-slate-100 text-slate-700"}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <Plane className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-black uppercase tracking-wide leading-tight">{label}</div>
                      <div className="text-slate-400 font-medium normal-case mt-0.5">{desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Autres liens mobile */}
          {OTHER_LINKS.map(({ href, label, Icon }) => {
            const isActive = pathname === href;
            const isEntreprises = href === "/entreprises";
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-4 p-4 rounded-lg border text-sm font-black uppercase tracking-wider ${
                  isEntreprises
                    ? "bg-blue-700 text-white border-blue-800"
                    : isActive
                    ? "bg-blue-50 text-blue-700 border-blue-100"
                    : "bg-slate-50 text-slate-800 border-slate-100"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isEntreprises ? "text-white" : "text-blue-700"}`} />
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
