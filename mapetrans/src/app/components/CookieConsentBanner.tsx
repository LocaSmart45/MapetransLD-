// src/app/components/CookieConsentBanner.tsx
"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    } else if (saved === "accepted" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
  }, []);

  const acceptAll = () => {
    window.gtag?.("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const rejectAll = () => {
    window.gtag?.("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white px-4 py-4 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 md:items-center">
        <p className="text-xs text-slate-300">
          Nous utilisons des cookies pour mesurer l’audience et améliorer votre expérience.
        </p>
        <div className="ml-auto flex gap-2">
          <button
            onClick={rejectAll}
            className="border border-slate-400 px-3 py-2 text-xs uppercase font-bold"
          >
            Refuser
          </button>
          <button
            onClick={acceptAll}
            className="bg-blue-600 px-4 py-2 text-xs uppercase font-bold"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
