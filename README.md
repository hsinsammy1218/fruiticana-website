# Fruiticana Website

A modern marketing site for **Fruiticana**, a fruit-based frozen dessert with a
smooth, ice-cream-like texture. Built with Next.js (App Router), TypeScript, and
Tailwind CSS.

> **Important — voice of this site.** Until the business verifies current facts
> (see the checklist below), the site intentionally speaks in **concept +
> history** language, not **"buy it today / certified today"** language. Some
> content (timeline, testimonials, documentation, nutrition panels) is
> **historical** and is labeled as such throughout. Do not turn historical
> records into present-tense marketing or regulatory claims.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components, SSG)
- React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- `next/font` (Plus Jakarta Sans + Inter)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build          # production build
npm run start          # serve the production build
npm run typecheck
npm test               # Vitest unit + component tests
npm run test:e2e       # Playwright end-to-end (Chromium)
npm run test:a11y      # axe-core accessibility sweep
npm run test:lighthouse  # Lighthouse CI (Home, Flavors, Story, Nutrition, Contact)
npm run test:all         # unit + Playwright Chromium
```

First time only, install Playwright browsers:

```bash
npx playwright install chromium
# optional, for Firefox/WebKit/device projects:
npx playwright install
```

### Environment variables

| Variable               | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL for canonical/OG tags and sitemap. |

If unset, it falls back to a placeholder (`https://fruiticana.example.com`).

## Project structure

```
src/
  app/            Routes (home, flavors, story, learn, nutrition, contact, legal) + SEO files
  components/     Reusable UI (layout, ui, home, flavors, learn, nutrition, story, contact, seo)
  data/           Typed content: flavors, learn, testimonials, timeline, formats, documents, navigation, site
  lib/            Small helpers (cn, nutrition formatting)
public/images/flavors/  Replaceable flavor artwork (SVG placeholders)
```

Content lives in typed modules under `src/data/` so copy changes don't require
touching JSX. Adding a 13th flavor is a data change, not a redesign.

**For schools.** `/learn` is a free classroom resource: fruit science for the
original 12 flavors, frozen-dessert science, Nutrition Facts literacy using the
historical 2008 panels, and a case study of the Connecticut Team Nutrition
snack pilot. It is labeled as history and does not claim current school menus.

## Replacing placeholders

- **Flavor images** (`public/images/flavors/*.svg`) are clearly-replaceable
  placeholder artwork. Drop in real product photography (WebP) and update
  `image`/`imageAlt` in `src/data/flavors.ts`. When you switch to raster photos,
  change `FlavorImage` to use `next/image`.
- **Logo** is a temporary wordmark (`src/components/ui/Logo.tsx`) designed to be
  swapped for a supplied vector logo.
- **Contact details / social** are `null` in `src/data/site.ts` and render as
  "coming soon". Fill them in only with verified, current information.

### Historical nutrition data

Nutrition Facts panels in `src/data/flavors.ts` are transcribed from an
independent laboratory analysis in the business PDF (Northeast Laboratories,
Inc., report #20080318F, dated 2008-03-18) and are labeled **historical**
everywhere. The **Banana** calorie value was illegible in the source scan and is
intentionally left blank rather than guessed. Re-verify all values against the
current formulation before publishing them as a product label.

## Deployment (Render)

`render.yaml` defines a Node **Web Service** (so `next/image` and a future
contact API work without migrating). A brand homepage should not use the free
plan's spin-down; the blueprint uses the paid `starter` plan. Set
`NEXT_PUBLIC_SITE_URL` to the real domain in the Render dashboard.

## Owner verification checklist

Confirm before switching any content to present-tense marketing:

- [ ] Current production/sale status and markets
- [ ] Current formulation claims (lactose-free, fat-free, cholesterol-free, dairy-free, vegan, "100% fruit", added sugar, additives)
- [ ] Current nutrition panels vs. the 2008 lab values
- [ ] Shelf life
- [ ] Which flavors/formats exist now
- [ ] FDA registration vs. "certification"; AHA status and logo rights
- [ ] CT Team Nutrition / USDA / school program — historical only vs. any current program
- [ ] ACS / AGA / AND claims — drop unless a current document exists
- [ ] Fiber "two servings" claim (kept off the site)
- [ ] Pilot figures (30,000 samples; ~$1M sales) — kept clearly historical
- [ ] Founder names/credentials spelling and permission to list publicly
- [ ] Testimonial permission / keep clearly historical
- [ ] Pricing (kept off the site until a current menu exists)
- [ ] Contact, domain, social, locations
- [ ] Logo file and trademark presentation
- [ ] Whether "Creamless Ice Cream" is still the product name

## Accessibility & performance

Semantic landmarks, keyboard-operable navigation (including a focus-trapped
mobile menu), visible focus states, labeled form fields, reduced-motion support,
and a cream/green palette chosen for readable contrast. Marketing pages are
statically generated with minimal client JavaScript.

## Testing

| Tool | What it covers |
| --- | --- |
| **Playwright** | Navigation, buttons, forms, mobile menu, links, responsive layout, error states, and full user flows (`e2e/`). Default run is Chromium; `npm run test:e2e:browsers` also runs tagged smoke tests in Firefox, WebKit, Pixel 7, and iPhone 13. |
| **Vitest** | Unit tests for helpers and flavor data (`src/**/*.test.ts`). |
| **React Testing Library** | Component behavior: contact form validation, newsletter, flavor filters, nutrition selector, mobile menu, buttons. |
| **axe-core** (`@axe-core/playwright`) | WCAG 2 A/AA checks on primary, flavor-detail, and legal routes (`e2e/a11y.spec.ts`). |
| **Lighthouse CI** | Performance (warn &lt; 90), accessibility / best-practices / SEO (fail &lt; 95) on Home and the other primary pages. Requires a production build and a local Chrome. |
| **BrowserStack** (optional) | Real Safari-on-iPhone, Chrome-on-Android, Edge, and desktop browsers before launch. Set `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY`, and `PLAYWRIGHT_BASE_URL` (a public preview URL), then `npm run test:browserstack`. |
