import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navette Orléans Orly & Roissy | Chauffeur VTC Privé | Mapetrans LD",
  description: "Navette privée Orléans → Orly dès 180€, Roissy CDG dès 210€. Chauffeur VTC disponible 24h/24 depuis Orléans et tout le Loiret. Prix fixe, ponctualité garantie.",
  keywords: [
    "navette orléans orly",
    "navette orléans roissy",
    "VTC orléans",
    "chauffeur privé orléans",
    "navette aéroport orléans",
    "transport orléans orly",
    "vtc loiret",
    "navette orléans paris",
  ],
  alternates: {
    canonical: "https://www.mapetransld.com/vtc",
  },
  openGraph: {
    title: "Navette Orléans Orly & Roissy | Chauffeur VTC Privé | Mapetrans LD",
    description: "Navette privée Orléans → Orly dès 180€, Roissy CDG dès 210€. Prix fixe, 24h/24, depuis tout le Loiret.",
    url: "https://www.mapetransld.com/vtc",
    siteName: "Mapetrans LD",
    locale: "fr_FR",
    type: "website",
  },
};

export default function VtcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}