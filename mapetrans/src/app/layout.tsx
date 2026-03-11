// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsentBanner from "./components/CookieConsentBanner";
import StickyCallButton from "./components/StickyCallButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAPETRANS LD - Transport & Logistique",
  description: "Transport de personnes et fret express France & Europe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied'
            });
          `}
        </Script>

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
      <body className={`${inter.className} pb-16 md:pb-0`}>
        <CookieConsentBanner />
        {children}
        <StickyCallButton />
      </body>
    </html>
  );
}
