import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — MAPETRANS LD",
  description: "Mentions légales de MAPETRANS LD, société de transport à Orléans. Éditeur, hébergeur, propriété intellectuelle et responsabilités.",
  alternates: { canonical: "https://www.mapetransld.com/mentions-legales" },
};

export default function MentionsLegalesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
