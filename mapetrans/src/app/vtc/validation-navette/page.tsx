"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const WEBHOOK_URL =
  "https://hook.eu1.make.com/jvtjryr41f7ibo7gj3iex3bsf09buolv";

export default function ValidationNavettePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // Appel du webhook Make en arrière-plan
  useEffect(() => {
    if (!id) return;

    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => {
        console.log("Webhook Make envoyé, status:", res.status);
      })
      .catch((err) => {
        console.error("Erreur webhook Make:", err);
      });
  }, [id]);

  return (
    <>
      {/* Ton CSS original, appliqué globalement à la page */}
      <style jsx global>{`
        :root {
          --bg-page: #f8fafc;
          --bg-card: #ffffff;
          --accent: #1d4ed8;
          --accent-soft: rgba(37, 99, 235, 0.1);
          --accent-strong: #2563eb;
          --text-main: #0f172a;
          --text-muted: #6b7280;
          --border-soft: #e5e7eb;
          --danger: #b91c1c;
          --success: #16a34a;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          min-height: 100vh;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          background:
            radial-gradient(
              circle at top,
              rgba(148, 163, 184, 0.28) 0,
              transparent 40%
            ),
            var(--bg-page);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
        }

        .wrapper {
          width: 100%;
          max-width: 560px;
        }

        .topbar {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          background: #020617;
          color: #e5e7eb;
          border-radius: 999px;
          padding: 6px 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .topbar-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.25);
        }

        .logo-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
          gap: 12px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .logo-main {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #020617;
        }

        .logo-main span {
          color: var(--accent);
        }

        .logo-sub {
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9ca3af;
          font-weight: 700;
        }

        .logo-tag {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .card {
          background:
            radial-gradient(circle at top left, var(--accent-soft), transparent 55%),
            var(--bg-card);
          border-radius: 18px;
          border: 1px solid var(--border-soft);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
          padding: 24px 20px 20px;
        }

        @media (min-width: 640px) {
          .card {
            padding: 28px 26px 24px;
          }
        }

        .status {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 20px;
        }

        .status-icon {
          width: 50px;
          height: 50px;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 0, #bbf7d0, #22c55e);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 22px rgba(34, 197, 94, 0.35),
            0 0 0 1px rgba(22, 163, 74, 0.3);
          flex-shrink: 0;
        }

        .status-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .status-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--accent-strong);
          font-weight: 800;
        }

        .title {
          font-size: 22px;
          line-height: 1.3;
          font-weight: 700;
          color: #020617;
        }

        .subtitle {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 18px;
        }

        .highlight {
          font-weight: 600;
          color: var(--accent-strong);
        }

        .info-box {
          border-radius: 14px;
          border: 1px dashed var(--border-soft);
          background: #f9fafb;
          padding: 14px 14px 12px;
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 18px;
        }

        .info-box strong {
          color: #111827;
          font-weight: 600;
        }

        .info-list {
          list-style: none;
          margin-top: 8px;
        }

        .info-list li {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          margin-bottom: 6px;
        }

        .bullet {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          margin-top: 7px;
          background: #9ca3af;
          flex-shrink: 0;
        }

        .info-list span {
          margin-top: 1px;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 999px;
          background: var(--accent-soft);
          border: 1px solid rgba(37, 99, 235, 0.25);
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-strong);
          margin-bottom: 8px;
        }

        .pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: var(--accent-strong);
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }

        .btn-primary,
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          cursor: pointer;
          border: none;
          outline: none;
          transition:
            transform 0.12s ease,
            box-shadow 0.12s ease,
            background 0.12s ease,
            color 0.12s ease,
            border-color 0.12s ease;
          white-space: nowrap;
        }

        .btn-primary {
          background: var(--accent-strong);
          color: #ffffff;
          box-shadow: 0 12px 25px rgba(37, 99, 235, 0.35);
          border: 1px solid rgba(15, 23, 42, 0.9);
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 35px rgba(37, 99, 235, 0.45);
          background: #1d4ed8;
        }

        .btn-ghost {
          background: #020617;
          color: #f9fafb;
          border: 1px solid #020617;
        }

        .btn-ghost:hover {
          background: #000000;
          border-color: #020617;
          transform: translateY(-1px);
        }

        .btn-ghost span {
          opacity: 0.95;
        }

        .small-legal {
          margin-top: 14px;
          font-size: 10px;
          color: #9ca3af;
        }

        @media (max-width: 480px) {
          .logo-block {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      {/* Contenu de la page */}
      <div className="wrapper">
        <div className="topbar" aria-label="Astreinte VTC 24/7">
          <span className="topbar-dot" />
          <span>Astreinte VTC 24h/24 – 7j/7</span>
        </div>

        <div className="logo-block">
          <div className="logo-text">
            <div className="logo-main">
              MAPETRANS <span>LD</span>
            </div>
            <div className="logo-sub">Solutions de Transport</div>
          </div>
          <div className="logo-tag">
            VTC &amp; Navettes Aéroports
            <br />
            Orléans &amp; Île-de-France
          </div>
        </div>

        <main className="card" role="status" aria-live="polite">
          <header className="status">
            <div className="status-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  opacity="0.45"
                />
                <path
                  d="M8 12.5L10.8 15.3L16 9.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="status-text">
              <div className="status-label">Validation confirmée</div>
              <h1 className="title">Votre navette a bien été validée.</h1>
            </div>
          </header>

          <p className="subtitle">
            Merci pour votre confiance. Votre demande a été{" "}
            <span className="highlight">reçue et enregistrée</span>. Votre
            navette VTC est maintenant <strong>planifiée</strong> selon les
            informations transmises.
          </p>

          <div className="pill">
            <span className="pill-dot" />
            Navette privative &mdash; véhicule non partagé
          </div>

          <section className="info-box" aria-label="Étapes suivantes">
            <strong>Et maintenant, que se passe-t-il&nbsp;?</strong>
            <ul className="info-list">
              <li>
                <div className="bullet" />
                <span>
                  <strong>Vérification &amp; affectation :</strong> notre équipe
                  confirme la disponibilité et assigne un chauffeur à votre
                  trajet.
                </span>
              </li>
              <li>
                <div className="bullet" />
                <span>
                  <strong>Confirmation finale :</strong> vous recevrez un SMS
                  lorsque le chauffeur sera sur le lieu de rendez vous de prise
                  en charge à l&apos;heure convenue.
                </span>
              </li>
              <li>
                <div className="bullet" />
                <span>
                  <strong>Suivi :</strong> en cas de retard de vol/train, nous
                  ajustons automatiquement l’horaire de prise en charge.
                </span>
              </li>
            </ul>
          </section>

          <section className="info-box" aria-label="Contact urgence">
            <strong>Une urgence ou un changement de dernière minute&nbsp;?</strong>
            <ul className="info-list">
              <li>
                <div className="bullet" />
                <span>
                  Pour toute modification (horaire, lieu, nombre de passagers),
                  contactez-nous <strong>par téléphone</strong> pour une prise
                  en compte immédiate.
                </span>
              </li>
            </ul>
          </section>

          <div className="actions">
            <a href="/vtc" className="btn-primary">
              Retourner à la page VTC
            </a>
            <a href="tel:+33634605799" className="btn-ghost">
              <span>
                Urgence &amp; réservation&nbsp;: 06&nbsp;34&nbsp;60&nbsp;57&nbsp;99
              </span>
            </a>
          </div>

          <p className="small-legal">
            MAPETRANS LD &ndash; Service VTC &amp; Navettes Aéroports. Paiement
            à bord ou sur facture selon conditions convenues.
          </p>
        </main>
      </div>
    </>
  );
}