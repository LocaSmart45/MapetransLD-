import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VTC Orléans & Transport Express | Navette Aéroport & Urgence",
  description: "Chauffeur VTC Orléans. Navette aéroport (Orly/Roissy), Gares et Courses Express urgentes toutes distances. Disponible 24h/7j depuis ou vers le Loiret.",
  keywords: ["VTC Orléans", "Taxi Orléans", "Transport Express Orléans", "Navette Aéroport", "VTC Urgence Loiret"],
};

export default function VtcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}