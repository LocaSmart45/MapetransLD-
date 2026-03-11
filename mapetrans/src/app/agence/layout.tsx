import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'Agence MAPETRANS LD | Transporteur Orléans depuis 2013",
  description:
    "MAPETRANS LD, entreprise de transport indépendante à Orléans depuis 2013. VTC, fret express, déménagement. Interlocuteur unique, licences et assurances à jour.",
  alternates: { canonical: "https://www.mapetransld.com/agence" },
  openGraph: {
    title: "L'Agence MAPETRANS LD | Transporteur Orléans depuis 2013",
    description:
      "Entreprise de transport indépendante à Orléans. VTC, fret express, déménagement. Service 24h/24.",
    url: "https://www.mapetransld.com/agence",
    siteName: "Mapetrans LD",
    locale: "fr_FR",
    type: "website",
  },
};

export default function AgenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
