import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 1. Ancienne page "Tarifs" -> On redirige vers la page VTC (là où on demande un devis chauffeur)
      {
        source: '/page/tarifs-transports-marchandises-et-personnes-orleans-loiret/',
        destination: '/vtc', 
        permanent: true,
      },
      
      // 2. Ancienne page "Réservation" -> On redirige vers ta page Contact
      {
        source: '/page/reservation-navette-aeroport-orleans-transport-de-marchandises/',
        destination: '/contact',
        permanent: true,
      },

      // 3. Ancienne catégorie "Transport Aéroport" -> On redirige vers VTC
      {
        source: '/categorie/transport-orleans-aeroport/',
        destination: '/vtc',
        permanent: true,
      },

      // 4. Ancienne page "Navette Orléans" -> On redirige vers VTC
      {
        source: '/page/navette-orleans-aeroport-roissy-orly/',
        destination: '/vtc',
        permanent: true,
      },

      // 5. Ancienne page générique "Pages" -> On redirige vers l'accueil
      {
        source: '/pages/',
        destination: '/',
        permanent: true,
      },

      // 6. Ancienne page "Marchandises & Déménagement" -> On redirige vers Déménagement
      // (Tu pourrais aussi mettre '/logistique' si tu préfères, mais 'demenagement' est souvent plus recherché par les particuliers)
      {
        source: '/page/transport-de-marchandises-demenagement-orleans-loiret/',
        destination: '/demenagement',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;