import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transport & Logistique Orléans | Fret Express France & Europe — MAPETRANS LD",
  description: "Transport de marchandises express, fret route France et Europe, stockage logistique depuis Orléans. Délais maîtrisés, traçabilité en temps réel. Devis gratuit : 07 49 70 95 77.",
  alternates: { canonical: "https://www.mapetransld.com/logistique" },
  openGraph: {
    title: "Transport & Logistique Orléans | MAPETRANS LD",
    description: "Fret express France & Europe depuis Orléans. Livraison J+1, stockage, messagerie. Devis immédiat.",
    url: "https://www.mapetransld.com/logistique",
    siteName: "MAPETRANS LD",
    locale: "fr_FR",
    type: "website",
  },
};

export default function LogistiqueLayout({ children }: { children: React.ReactNode }) {
  return children;
}
