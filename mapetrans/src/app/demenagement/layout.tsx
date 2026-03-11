import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Déménagement Orléans & Loiret | Particuliers & Entreprises — MAPETRANS LD",
  description: "Déménagement clé en main à Orléans et dans tout le Loiret. Emballage, transport, montage, garde-meuble. Devis gratuit et sans engagement : 07 49 70 95 77.",
  alternates: { canonical: "https://www.mapetransld.com/demenagement" },
  openGraph: {
    title: "Déménagement Orléans & Loiret | MAPETRANS LD",
    description: "Déménagement professionnel clé en main à Orléans. Particuliers et entreprises. Devis gratuit.",
    url: "https://www.mapetransld.com/demenagement",
    siteName: "MAPETRANS LD",
    locale: "fr_FR",
    type: "website",
  },
};

export default function DemenagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
