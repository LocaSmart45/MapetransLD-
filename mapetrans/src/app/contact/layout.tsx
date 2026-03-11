import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | MAPETRANS LD — Orléans 06 34 60 57 99",
  description:
    "Contactez MAPETRANS LD à Orléans : devis gratuit pour navette aéroport, transport express ou déménagement. Réponse immédiate. Tél : 06 34 60 57 99.",
  alternates: { canonical: "https://www.mapetransld.com/contact" },
  openGraph: {
    title: "Contact | MAPETRANS LD — Orléans",
    description: "Devis gratuit navette aéroport, transport, déménagement. Orléans 06 34 60 57 99.",
    url: "https://www.mapetransld.com/contact",
    siteName: "Mapetrans LD",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
