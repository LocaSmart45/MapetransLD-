import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";          // ✅ AJOUT ICI
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
      <head>
        {/* ✅ Script Google Tag Manager / Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17935783791"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17935783791');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
