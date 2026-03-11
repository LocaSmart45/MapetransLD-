import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // On gère les slashs nous-mêmes pour être sûrs
  trailingSlash: false,
  
  async redirects() {
    return [
      // --- 1. CONTACT & RÉSERVATION ---
      {
        source: '/page/contact-pour-des-navettes-aeroports-et-transport-de-marchandises/',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/contact-pour-des-navettes-aeroports-et-transport-de-marchandises',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/reservation-navette-aeroport-orleans-transport-de-marchandises/',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/reservation-navette-aeroport-orleans-transport-de-marchandises',
        destination: '/vtc',
        permanent: true,
      },

      // --- 2. VTC / NAVETTES / TRANSPORT PERSONNES ---
      {
        source: '/page/navette-orleans-aeroport-roissy-orly/',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/navette-orleans-aeroport-roissy-orly',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/navette-aeroport-orleans-orly-roissy-tours-beauvais/',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/navette-aeroport-orleans-orly-roissy-tours-beauvais',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/vehicules-pour-le-transport-de-personnes-de-mapetrans-ld/',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/vehicules-pour-le-transport-de-personnes-de-mapetrans-ld',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/transport-a-la-demande-sur-orleans-avec-mapetrans-ld/',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/transport-a-la-demande-sur-orleans-avec-mapetrans-ld',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/location-de-vehicule-avec-chauffeur-sur-orleans/',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/location-de-vehicule-avec-chauffeur-sur-orleans',
        destination: '/vtc',
        permanent: true,
      },
      // Ancienne catégorie vue sur Google
      {
        source: '/categorie/transport-orleans-aeroport/',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/categorie/transport-orleans-aeroport',
        destination: '/vtc',
        permanent: true,
      },

      // --- 3. LOGISTIQUE & MARCHANDISES ---
      {
        source: '/page/vehicules-pour-le-transport-de-marchandises-de-mapetrans-ld/',
        destination: '/logistique',
        permanent: true,
      },
      {
        source: '/page/vehicules-pour-le-transport-de-marchandises-de-mapetrans-ld',
        destination: '/logistique',
        permanent: true,
      },
      {
        source: '/page/tournee-reguliere-programmee-sur-orleans-et-dans-le-loiret/',
        destination: '/logistique',
        permanent: true,
      },
      {
        source: '/page/tournee-reguliere-programmee-sur-orleans-et-dans-le-loiret',
        destination: '/logistique',
        permanent: true,
      },
      {
        source: '/page/transport-express-et-urgent-orleans-loiret/',
        destination: '/logistique',
        permanent: true,
      },
      {
        source: '/page/transport-express-et-urgent-orleans-loiret',
        destination: '/logistique',
        permanent: true,
      },

      // --- 4. DÉMÉNAGEMENT ---
      {
        source: '/page/transport-de-marchandises-demenagement-orleans-loiret/',
        destination: '/demenagement',
        permanent: true,
      },
      {
        source: '/page/transport-de-marchandises-demenagement-orleans-loiret',
        destination: '/demenagement',
        permanent: true,
      },
      {
        source: '/page/demenagement-orleans-loiret-avec-mapetrans-ld/',
        destination: '/demenagement',
        permanent: true,
      },
      {
        source: '/page/demenagement-orleans-loiret-avec-mapetrans-ld',
        destination: '/demenagement',
        permanent: true,
      },

      // --- 5. TARIFS ---
      {
        source: '/page/tarifs-transports-marchandises-et-personnes-orleans-loiret/',
        destination: '/tarifs-vtc-orleans',
        permanent: true,
      },
      {
        source: '/page/tarifs-transports-marchandises-et-personnes-orleans-loiret',
        destination: '/tarifs-vtc-orleans',
        permanent: true,
      },

      // --- 6. PAGES GÉNÉRALES / LÉGALES ---
      {
        source: '/page/conditions-generales-de-ventes-mentions-legales-mapetrans-ld/',
        destination: '/mentions-legales',
        permanent: true,
      },
      {
        source: '/page/conditions-generales-de-ventes-mentions-legales-mapetrans-ld',
        destination: '/mentions-legales',
        permanent: true,
      },
      {
        source: '/page/vehicules-transports-personnes-et-marchandises/',
        destination: '/agence',
        permanent: true,
      },
      {
        source: '/page/vehicules-transports-personnes-et-marchandises',
        destination: '/agence',
        permanent: true,
      },
      {
        source: '/page/transports-de-personnes-et-transports-de-marchandises/',
        destination: '/agence',
        permanent: true,
      },
      {
        source: '/page/transports-de-personnes-et-transports-de-marchandises',
        destination: '/agence',
        permanent: true,
      },
      
      // --- 7. HOME / AUTRES ---
      {
        source: '/page/mapetrans-ld-navette-aeroport-orleans-et-transport-express/',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/mapetrans-ld-navette-aeroport-orleans-et-transport-express',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/pages/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;