# Meridian — Software Agency Website

Production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS site for a premium software development agency.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Structure

- `src/app/*` — pages (Home, Services, Industries, Portfolio, Pricing, About, Process, FAQ, Careers, Contact)
- `src/components/*` — Navbar, Footer, Button, shared primitives
- `src/components/sections/*` — page section components (Hero, Stats, Testimonials, etc.)
- `src/data/site.ts` — all copy, pricing, services, testimonials, FAQ content in one place

## Customize

- Replace `AGENCY_NAME` and copy in `src/data/site.ts`
- Swap placeholder portfolio "image" blocks (gradient + name) in `PortfolioCard.tsx` with real screenshots
- Update `OFFICE` contact details and social links in `Footer.tsx`
- Wire `ContactForm.tsx` and the footer newsletter form to a real backend/email service
