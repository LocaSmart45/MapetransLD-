import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VTC à Orléans | Chauffeur privé 24h/24 | Mapetrans LD",
  description:
    "Chauffeur VTC à Orléans et dans le Loiret. Navettes aéroports, gares, déplacements pro et courses longue distance 24h/24. Réservation rapide, prix clair.",
  keywords: [
    "vtc orléans",
    "chauffeur privé orléans",
    "chauffeur vtc loiret",
    "vtc loiret",
    "transport privé orléans",
    "navette aéroport orléans",
    "vtc gare orléans",
  ],
  alternates: { canonical: "https://www.mapetransld.com/vtc" },
  openGraph: {
    title: "VTC à Orléans | Chauffeur privé 24h/24 | Mapetrans LD",
    description:
      "Service VTC premium à Orléans : aéroports, gares, déplacements professionnels et urgences 24h/24.",
    url: "https://www.mapetransld.com/vtc",
    siteName: "Mapetrans LD",
    locale: "fr_FR",
    type: "website",
  },
};

export default function VtcLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
