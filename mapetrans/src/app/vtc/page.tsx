import {
  CheckCircle, Moon, Calendar, Info, Briefcase, Plane, MapPin, Train, ChevronDown, CreditCard, Zap, Phone, Mail, ArrowUpRight, Users, Truck, Box, MessageSquare, Building2,
} from "lucide-react";
import Link from "next/link";
import BookingForm from "./BookingForm";

export default function VTCPage() {
  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mapetrans LD - VTC & Navettes Aéroport Orléans",
    "description": "Chauffeur VTC privé à Orléans. Navettes aéroport Orly dès 180€, Roissy CDG dès 210€. Service 24h/24 7j/7 depuis tout le Loiret.",
    "url": "https://www.mapetransld.com/vtc",
    "telephone": "+33634605799",
    "email": "contact@mapetransld.com",
    "priceRange": "€€",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 47.9029,
        "longitude": 1.9039
      },
      "geoRadius": "100000"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Orléans",
      "addressRegion": "Centre-Val de Loire",
      "postalCode": "45000",
      "addressCountry": "FR"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Navettes Aéroport depuis Orléans",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Navette Orléans → Orly",
          "description": "Transfert privé Orléans vers Aéroport d'Orly. Prix fixe garanti.",
          "price": "180",
          "priceCurrency": "EUR",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitText": "passagers"
          }
        },
        {
          "@type": "Offer",
          "name": "Navette Orléans → Roissy CDG",
          "description": "Transfert privé Orléans vers Aéroport Roissy Charles de Gaulle. Prix fixe garanti.",
          "price": "210",
          "priceCurrency": "EUR",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitText": "passagers"
          }
        },
        {
          "@type": "Offer",
          "name": "Navette Orléans → Paris & Gares",
          "description": "Transfert privé vers Paris Austerlitz, Montparnasse ou Gare de Lyon.",
          "price": "200",
          "priceCurrency": "EUR",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitText": "passagers"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5"
    }
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Réalisez-vous des courses express ou urgentes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, les courses express sont au cœur de notre métier. Contactez-nous immédiatement au 06 34 60 57 99 pour vérifier la disponibilité d'un chauffeur en urgence."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les tarifs pour Orly ou Roissy ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nos forfaits démarrent à 180€ pour Orly et 210€ pour Roissy CDG. Le tarif est fixe, bagages compris, peu importe la circulation."
        }
      },
      {
        "@type": "Question",
        "name": "Desservez-vous les Gares Parisiennes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nous assurons fréquemment la liaison Orléans vers Paris Austerlitz, Montparnasse ou Gare de Lyon pour vos correspondances TGV."
        }
      }
    ]
  };

  return (
    <main className="relative min-h-screen font-sans text-slate-800 bg-slate-50 pt-32 xl:pt-36 flex flex-col">

      {/* === SCHEMA.ORG SEO === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* 0. ARRIÈRE-PLAN */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-white -z-10 border-b border-slate-200">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* === HERO VTC === */}
      <div className="relative h-[450px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
          alt="Chauffeur VTC et Transport Express Orléans"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4 bg-white/10 backdrop-blur-sm">
            Aéroport • Gares • Urgences
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-lg">
             Navette Aéroport depuis Orléans <br />
            <span className="text-blue-500">Chauffeur privé longue distance • Orly • Roissy</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Spécialiste de la navette aéroport depuis Orléans et tout le Loiret : transferts vers Orly, Roissy CDG, Beauvais et gares parisiennes. <br />
            Service 24h/24 et 7j/7 avec chauffeur privé longue distance et prix fixe garanti.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="tel:0634605799"
              className="bg-white text-slate-900 px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition shadow-lg inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Appeler (Urgence)
            </a>
            <Link
              href="#booking"
              className="bg-blue-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Réserver une navette
            </Link>
          </div>
        </div>
      </div>

      {/* === FORMULAIRE (Client Component) === */}
      <BookingForm />

      {/* === SECTION TARIFS === */}
      <div className="max-w-7xl mx-auto px-4 w-full pb-16">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-4">Nos Forfaits Aéroports</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto" />
          <p className="text-slate-500 text-sm mt-4 max-w-xl mx-auto">
            Des prix fixes pour vos départs et arrivées. <br />
            <strong>Transfert privé :</strong> le véhicule est 100% réservé pour vous.
          </p>
        </div>

        {/* GRILLE TARIFS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* ORLY */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-32 bg-blue-900 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Navette Orléans Orly" />
              <div className="absolute inset-0 flex items-center justify-between px-6 text-white">
                <h3 className="text-2xl font-black uppercase">ORLY</h3>
                <Plane className="w-6 h-6" />
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">180 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 8 Passagers</span><span className="text-xl font-black text-slate-800">220 €</span></div>
            </div>
          </div>

          {/* ROISSY */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-32 bg-slate-900 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Navette Orléans Roissy CDG" />
              <div className="absolute inset-0 flex items-center justify-between px-6 text-white">
                <h3 className="text-2xl font-black uppercase">ROISSY</h3>
                <Plane className="w-6 h-6" />
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">210 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 8 Passagers</span><span className="text-xl font-black text-slate-800">240 €</span></div>
            </div>
          </div>

          {/* PARIS & GARES */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition duration-300">
            <div className="h-32 bg-blue-900 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="VTC Orléans Paris Gares" />
              <div className="absolute inset-0 flex items-center justify-between px-6 text-white">
                <h3 className="text-2xl font-black uppercase">PARIS</h3>
                <Train className="w-6 h-6" />
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">200 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 8 Passagers</span><span className="text-xl font-black text-slate-800">240 €</span></div>
            </div>
          </div>

          {/* BEAUVAIS */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition duration-300">
            <div className="h-32 bg-slate-800 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Navette Orléans Beauvais" />
              <div className="absolute inset-0 flex items-center justify-between px-6 text-white">
                <h3 className="text-2xl font-black uppercase">BEAUVAIS</h3>
                <Plane className="w-6 h-6" />
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">300 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 8 Passagers</span><span className="text-xl font-black text-slate-800">350 €</span></div>
            </div>
          </div>

          {/* TOURS */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition duration-300">
            <div className="h-32 bg-blue-900 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Navette Orléans Tours" />
              <div className="absolute inset-0 flex items-center justify-between px-6 text-white">
                <h3 className="text-2xl font-black uppercase">TOURS</h3>
                <Plane className="w-6 h-6" />
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">1 à 3 Passagers</span><span className="text-xl font-black text-slate-800">200 €</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-sm font-bold text-slate-500">4 à 8 Passagers</span><span className="text-xl font-black text-slate-800">230 €</span></div>
            </div>
          </div>

          {/* INFOS SUPPLÉMENTS */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg flex flex-col justify-center">
            <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-2 text-slate-800">
              <Info className="w-6 h-6 text-blue-600" /> Infos & Suppléments
            </h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li className="flex justify-between border-b border-slate-100 pb-3"><span className="flex items-center gap-2"><Moon className="w-4 h-4 text-slate-400" /> Nuit (20h-05h)</span><span className="text-slate-900 font-bold">+20€</span></li>
              <li className="flex justify-between border-b border-slate-100 pb-3"><span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400" /> Dimanche & Férié</span><span className="text-slate-900 font-bold">+20€</span></li>
              <li className="flex justify-between border-b border-slate-100 pb-3"><span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-slate-400" /> Bagages supp.</span><span className="text-slate-900 font-bold">10€ <span className="text-[10px] font-normal text-slate-400">/unité</span></span></li>
              <li className="flex justify-between"><span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> Hors Agglo (&gt;10km)</span><span className="text-slate-900 font-bold">0,80€ <span className="text-[10px] font-normal text-slate-400">/km</span></span></li>
            </ul>
            <div className="mt-6 text-[11px] text-slate-500 italic bg-slate-50 p-4 rounded border border-slate-100">
              Attente retard avion/train : gratuite jusqu'à 35min, puis 30€/heure.
            </div>
          </div>
        </div>

        {/* SECTION PRO & ENTREPRISES */}
        <div className="mb-12 bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2 block">Service B2B</span>
              <h2 className="text-3xl font-black uppercase mb-4">Professionnels & Entreprises</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Mapetrans.LD est le partenaire privilégié des entreprises du Loiret pour la gestion des déplacements collaborateurs et VIP. Solutions sur mesure adaptées à vos besoins réguliers.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                <Briefcase className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Compte Entreprise</h3>
                <p className="text-xs text-slate-400 mb-6">Accès à un espace dédié avec suivi de vos missions, facturation mensuelle et tarifs négociés.</p>
                <div className="h-px w-full bg-white/10 mb-6" />
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-blue-500" /> Facturation mensuelle fin de mois</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-blue-500" /> Navettes régulières (Matin/Soir)</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-blue-500" /> Priorité de réservation & Ligne dédiée</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* === BANDEAU PARTENAIRES VTC === */}
        {/* === BANDEAU PARTENAIRES VTC === */}
        <div className="border-t border-b border-slate-100 bg-white py-10 mb-12">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Ils nous font confiance</p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
              {[
                { nom: "LOreal", logo: "/logos/Loreal.png", width: "w-24" },
                { nom: "Servier", logo: "/logos/Servier.png", width: "w-28" },
              ].map((p) => (
                <img key={p.nom} src={p.logo} alt={p.nom} className={`${p.width} object-contain grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300`} />
              ))}
            </div>
          </div>
        </div>

        {/* BLOC SEO : Taxi vs VTC */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase text-center mb-10">
            Pourquoi choisir VTC plutôt que <span className="text-blue-600">Taxi à Orléans ?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 transition">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-yellow-500" />
                <h3 className="text-xl font-bold uppercase">Courses Express & Urgences</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Besoin d'un transport urgent ou d'une course express ? Contrairement aux taxis parfois indisponibles, nous trouvons une solution rapide pour vos impératifs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 transition">
              <div className="flex items-center gap-4 mb-4">
                <CreditCard className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold uppercase">Prix Fixe Garanti</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pour aller à Orly ou Roissy depuis Orléans, le compteur d'un taxi peut vite grimper. Avec nous, le forfait est fixé à l'avance. Aucune surprise.
              </p>
            </div>
          </div>
        </div>

        {/* ZONES D'INTERVENTION */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
            Prise en charge à domicile pour vos départs et arrivées
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Orléans Centre", "Gare d'Orléans", "Saran", "Olivet", "Saint-Jean-de-Braye", "Fleury-les-Aubrais", "La Chapelle-Saint-Mesmin", "Ingré", "Semoy", "Chécy"].map((city) => (
              <span key={city} className="bg-white px-4 py-2 rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-100 flex items-center gap-2">
                <MapPin className="w-3 h-3 text-blue-500" /> {city}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-black text-slate-900 uppercase text-center mb-8">Questions Fréquentes</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-4 font-bold cursor-pointer hover:bg-slate-50">
                Réalisez-vous des courses express ou urgentes ?
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition" />
              </summary>
              <div className="p-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                Oui, les courses express sont au cœur de notre métier. Contactez-nous immédiatement au 06 34 60 57 99 pour vérifier la disponibilité d'un chauffeur en urgence.
              </div>
            </details>
            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-4 font-bold cursor-pointer hover:bg-slate-50">
                Quels sont les tarifs pour Orly ou Roissy ?
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition" />
              </summary>
              <div className="p-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                Nos forfaits démarrent à 180€ pour Orly et 210€ pour Roissy CDG. Le tarif est fixe, bagages compris, peu importe la circulation.
              </div>
            </details>
            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center p-4 font-bold cursor-pointer hover:bg-slate-50">
                Desservez-vous les Gares Parisiennes ?
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition" />
              </summary>
              <div className="p-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                Oui, nous assurons fréquemment la liaison Orléans vers Paris Austerlitz, Montparnasse ou Gare de Lyon pour vos correspondances TGV.
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-auto">
        <div className="bg-blue-700 text-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="text-lg font-bold">Une demande précise ? Des conditions particulières ?</span>
              <span className="text-blue-100 text-sm mt-1">Contactez-nous dès maintenant, réponse immédiate garantie.</span>
            </div>
            <a href="tel:0634605799" className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-black transition shadow-lg border border-transparent hover:border-slate-700">
              <Phone className="w-4 h-4 inline mr-2" /> CONTACT RAPIDE
            </a>
          </div>
        </div>
        <div id="contact" className="bg-black text-white py-12 px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col leading-none mb-6">
                <span className="text-xl font-black tracking-tighter text-white">MAPETRANS <span className="text-blue-700">.LD</span></span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Solutions de Transport</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed text-justify">
                Partenaire expert depuis 2013. Nous assurons vos transports critiques, navettes VIP et déménagements avec une exigence de qualité unique. Licences et assurances à jour.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">Nos Services</h3>
              <div className="flex flex-col gap-3 text-sm font-medium text-slate-400">
                <Link href="/agence" className="flex items-center gap-2 hover:text-white transition group"><ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> L'Agence</Link>
                <Link href="/vtc" className="flex items-center gap-2 hover:text-white transition group"><ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> VTC & Chauffeurs</Link>
                <Link href="/logistique" className="flex items-center gap-2 hover:text-white transition group"><ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Logistique & Fret</Link>
                <Link href="/demenagement" className="flex items-center gap-2 hover:text-white transition group"><ArrowUpRight className="w-3 h-3 text-blue-700 group-hover:text-white transition" /> Déménagement</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">Nous Contacter</h3>
              <div className="flex flex-col gap-4 text-sm font-bold">
                <a href="tel:0634605799" className="flex items-center gap-3 hover:text-blue-400 transition"><Phone className="w-4 h-4 text-blue-600" /> 06 34 60 57 99</a>
                <div className="flex items-center gap-3 text-slate-400"><Phone className="w-4 h-4 text-blue-600" /> 09 59 07 04 33</div>
                <a href="mailto:contact@mapetransld.com" className="flex items-center gap-3 hover:text-blue-400 transition"><Mail className="w-4 h-4 text-blue-600" /> contact@mapetransld.com</a>
                <div className="flex items-center gap-3 text-slate-400 mt-2"><MapPin className="w-4 h-4 text-blue-600" /> Orléans & France Entière</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-wide gap-4">
            <span>Copyright 2025, Mapetrans LD. Tous droits réservés.</span>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-slate-400 transition">Mentions Légales</Link>
              <Link href="/confidentialite" className="hover:text-slate-400 transition">Politique de Confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
