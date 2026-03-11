import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transport Entreprises Orléans | VTC & Fret B2B | MAPETRANS LD",
  description:
    "Solutions transport B2B à Orléans : navettes collaborateurs, VIP, fret express. Compte entreprise, facturation mensuelle, tarifs négociés. Loiret & Centre-Val de Loire.",
  alternates: { canonical: "https://www.mapetransld.com/entreprises" },
  openGraph: {
    title: "Transport Entreprises Orléans | VTC & Fret B2B | MAPETRANS LD",
    description:
      "Navettes collaborateurs, VIP, fret express Orléans. Compte entreprise, facturation mensuelle.",
    url: "https://www.mapetransld.com/entreprises",
    siteName: "Mapetrans LD",
    locale: "fr_FR",
    type: "website",
  },
};

export default function EntreprisesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
