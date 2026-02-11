import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Retour à la finesse
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAPETRANS LD - Transport & Logistique",
  description: "Transport de personnes et fret express France & Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}