"use client";

import { Phone } from "lucide-react";

export default function StickyCallButton() {
  return (
    <a
      href="tel:+33634605799"
      aria-label="Appeler MAPETRANS LD"
      className="fixed bottom-4 right-4 z-50 md:hidden flex items-center gap-2 bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold px-4 py-3 rounded-full shadow-xl transition-colors duration-200"
    >
      <Phone className="w-4 h-4 shrink-0" />
      06 34 60 57 99
    </a>
  );
}
