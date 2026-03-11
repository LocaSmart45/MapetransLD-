# Copilot Instructions — MapetransLD

## Project Overview

**MAPETRANS LD** is a French transport & logistics company website (based in Orléans). It is a lead-generation and booking site offering VTC/airport shuttles, freight logistics, and moving services. All form submissions flow to external webhooks (Make.com and Google Sheets); there is no database.

## Commands

```bash
# From the mapetrans/ directory
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

> There is no test framework configured. No test files or test commands exist.

## Architecture

```
/workspaces/MapetransLD-/
└── mapetrans/             # Next.js 16 App Router application
    └── src/app/
        ├── api/leads/     # POST endpoint — validates + forwards leads to Google Sheets webhook
        ├── components/    # Shared components (e.g. CookieConsentBanner)
        ├── vtc/           # VTC booking page + BookingForm.tsx (Make.com integration)
        ├── contact/       # Contact form (posts to /api/leads)
        ├── logistique/    # Freight/logistics service page
        ├── demenagement/  # Moving/storage service page
        ├── agence/        # Company info page
        ├── confidentialite/ # GDPR privacy policy
        └── mentions-legales/ # Legal notices
```

**Data flow for form submissions:**
- VTC booking → `BookingForm.tsx` → Make.com webhook (hardcoded `hook.eu1.make.com` URLs)
- Contact/lead forms → `/api/leads` route → `SHEETS_WEBHOOK_URL` env variable → Google Sheets

**Path alias:** `@/*` resolves to `./src/*`

## Key Conventions

### Language
All UI text, comments, and variable names related to business domain are in **French**. Code identifiers may be French or English.

### Styling
- **Tailwind CSS v4** only — no CSS modules, no custom CSS files.
- Use `clsx` + `tailwind-merge` for conditional class logic.
- Complex animations use **Framer Motion** (`framer-motion`).
- `<style jsx>` blocks are used in some components for animations not expressible in Tailwind.

### Components
- Pages are Server Components by default (`src/app/*/page.tsx`).
- Add `"use client"` at the top of files that use state, effects, or browser APIs.
- Icons come from **Lucide React** (`lucide-react`).
- Co-locate page-specific components alongside their `page.tsx` (e.g., `src/app/vtc/BookingForm.tsx`).

### API / Webhooks
- The only backend API route is `POST /api/leads` — it validates phone/email and forwards a `LeadPayload` to the Google Sheets webhook.
- VTC booking forms bypass `/api/leads` and post directly to Make.com.
- There is no database or ORM. Do not introduce one unless explicitly requested.
- Google Ads conversion tracking is done client-side via `gtag` (conversion ID `AW-17935783791`).

### Environment Variables
Configured in `mapetrans/.env.local`:
- `SHEETS_WEBHOOK_URL` — Google Sheets append webhook
- `API_SECRET` — used to authenticate `/api/leads` calls

### Redirects
`next.config.ts` contains ~40 redirect rules for SEO continuity from a previous WordPress site. When adding new routes, check for conflicts with existing redirects.
