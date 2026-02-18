import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navette Aéroport Orléans | Orly & Roissy | Chauffeur Privé 24h/24",
  description:
    "Navette aéroport depuis Orléans : transferts privés vers Orly & Roissy CDG (prix fixe), gares parisiennes et longue distance. Chauffeur premium 24h/24 – 7j/7. Devis rapide.",
  keywords: [
    "navette aéroport orléans",
    "navette orléans orly",
    "navette orléans roissy",
    "transfert aéroport orléans",
    "chauffeur privé orléans",
    "vtc aéroport orléans",
    "navette gares parisiennes",
    "chauffeur longue distance orléans",
  ],
  alternates: { canonical: "https://www.mapetransld.com/vtc" },
  openGraph: {
    title: "Navette Aéroport Orléans | Orly & Roissy | Chauffeur Privé 24h/24",
    description:
      "Transferts privés depuis Orléans vers Orly & Roissy CDG. Chauffeur premium 24h/24 – 7j/7, prix fixe et devis rapide.",
    url: "https://www.mapetransld.com/vtc",
    siteName: "Mapetrans LD",
    locale: "fr_FR",
    type: "website",
  },
};

export default function VtcLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
