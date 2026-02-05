import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cette option aide souvent pour les problèmes de slash
  trailingSlash: true, 
  
  async redirects() {
    return [
      {
        // Le :path* permet d'être plus souple
        source: '/page/tarifs-transports-marchandises-et-personnes-orleans-loiret/:path*',
        destination: '/vtc', 
        permanent: true,
      },
      {
        source: '/page/reservation-navette-aeroport-orleans-transport-de-marchandises/:path*',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/categorie/transport-orleans-aeroport/:path*',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/page/navette-orleans-aeroport-roissy-orly/:path*',
        destination: '/vtc',
        permanent: true,
      },
      {
        source: '/pages/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/page/transport-de-marchandises-demenagement-orleans-loiret/:path*',
        destination: '/demenagement',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;