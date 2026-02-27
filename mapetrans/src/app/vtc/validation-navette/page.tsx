"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ValidationNavettePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;

    fetch("https://hook.eu1.make.com/jvtjryr41f7ibo7gj3iex3bsf09buolv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => {
        console.log("Webhook envoyé :", res.status);
      })
      .catch((err) => {
        console.error("Erreur webhook :", err);
      });
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 border">
        <h1 className="text-2xl font-bold mb-4 text-slate-900">
          ✅ Votre navette a bien été validée
        </h1>

        <p className="text-slate-600 mb-6">
          Merci pour votre confiance. Votre demande a été reçue et est en cours
          de traitement par notre équipe.
        </p>

        <div className="bg-slate-100 rounded-lg p-4 mb-6 text-sm text-slate-600">
          <p className="font-semibold mb-2">
            Prochaines étapes :
          </p>
          <ul className="space-y-1">
            <li>• Vérification et affectation du chauffeur</li>
            <li>• SMS envoyé avant la prise en charge</li>
            <li>• Ajustement automatique en cas de retard vol/train</li>
          </ul>
        </div>

        <div className="flex gap-3">
          <a
            href="/vtc"
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold text-sm"
          >
            Retour à la page VTC
          </a>

          <a
            href="tel:+33634605799"
            className="bg-black text-white px-4 py-2 rounded-md font-semibold text-sm"
          >
            06 34 60 57 99
          </a>
        </div>
      </div>
    </div>
  );
}