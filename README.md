# Fruiticana Website

An informational site for **Fruiticana**, a fruit-based frozen dessert.
**For now, the only audience is schools and their students.** Stack: Next.js
(App Router), TypeScript, and Tailwind CSS.

> **Important — voice of this site.** This is not a consumer shop. The main
> conversion is a **school inquiry**. After about two minutes, a school principal
> should be able to say: Fruiticana gives students an exciting new way to eat
> fruit; Fruiticana wants to introduce that experience in schools while students
> are young; under the proposed model Fruiticana provides two machines, stays
> involved, and the school receives 1/3 of program sales. Timeline dates,
> testimonials, documentation, and nutrition panels are shared for school
> review and labeled as historical where they are.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components, SSG)
- React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- `next/font` (Fraunces + Nunito Sans + Great Vibes)

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
npm run test:e2e       # Playwright end-to-end (Chromium; local next dev)
npm run test:e2e:prod  # production build + Playwright against next start
npm run test:a11y      # axe-core accessibility sweep
npm run test:lighthouse  # Lighthouse CI (Home, For Schools, Product, About, Resources, Contact)
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

Copy `.env.example` to `.env.local` for local overrides. If unset, the app
falls back to a placeholder (`https://fruiticana.example.com`). Set the real
production domain in Vercel before launch.

## Project structure

```
src/
  app/            Routes (home, about, schools, product, resources, contact, learn, flavor sheets, legal) + SEO files
  components/     Reusable UI (layout, ui, home, flavors, learn, nutrition, story, contact, seo)
  data/           Typed content: flavors, schools, inquiry, learn, testimonials, timeline, formats, documents, navigation, site
  lib/            Small helpers (cn, nutrition formatting)
public/images/flavors/  Replaceable flavor artwork (SVG placeholders)
```

Content lives in typed modules under `src/data/` so copy changes don't require
touching JSX.

**Primary pages.** Home, About Fruiticana (`/about`), For Schools (`/schools`), Product & Nutrition (`/product`), School Inquiry (`/contact`). Documentation lives at `/resources` (footer and trust hub, not primary nav).

**Classroom resource.** `/learn` is a free teaching resource (fruit science,
Nutrition Facts literacy, Connecticut snack-pilot case study). It is not in
primary nav. It does not claim current school menus.

**Redirects.** `/flavors` and `/nutrition` go to `/product` (query string such
as `?flavor=` is preserved). `/story` redirects to `/about`. Individual
`/flavors/[slug]` product sheets remain.

## Replacing placeholders

- **Flavor images** (`public/images/flavors/*.webp`) are fruit photography
  representing each flavor. Replace with rights-cleared product photography
  when available and keep `image` / `imageAlt` in `src/data/flavors.ts` in sync.
- **Logo** is a Fruiticana lockup with strawberry i-dots inspired by the 2007
  myfruiticana.com wordmark (`src/components/ui/Logo.tsx`). A rights-cleared
  vector file from the owner can still replace it.
- **2007 reference JPEGs** are stored in `docs/archive-reference/` as visual
  reference only. They are not served on the live site.
- **Contact details** (email, phone, address) live in `src/data/site.ts`.
  Social accounts remain `null` until verified.
- **Document images** are shown on Resources and documentation cards for school
  review. Original PDF downloads stay unpublished until rights-cleared source
  files exist.

### Nutrition data

Nutrition Facts panels in `src/data/flavors.ts` are transcribed from an
independent laboratory analysis in the business PDF (Northeast Laboratories,
Inc., report #20080318F, dated 2008-03-18) and shown for school review. The
**Banana** calorie value was illegible in the source scan and is intentionally
left blank rather than guessed. Confirm values against the current formulation
before publishing them as a product label.

## Deployment (Vercel)

Vercel is the production host. This is a standard Next.js App Router app — no
special adapter is required.

### One-time setup

1. Open [vercel.com/new](https://vercel.com/new) and import
   `hsinsammy1218/fruiticana-website`.
2. Framework preset: **Next.js** (auto-detected).
3. Set the production environment variable:
   - `NEXT_PUBLIC_SITE_URL` → your Vercel domain (e.g. `https://fruiticana-website.vercel.app`) or custom domain.
4. Deploy. After the first deploy, push to `main` for production and open PRs for preview URLs.

### CLI (optional)

```bash
npm i -g vercel
vercel login
vercel link          # link this repo to the Vercel project
vercel --prod        # production deploy
```

Or with a token (CI / agents):

```bash
vercel --prod --token "$VERCEL_TOKEN"
```

`vercel.json` pins the Next.js framework and build/install commands.

## Owner verification checklist

Confirm before switching any content to present-tense school-program marketing:

- [ ] Current production/sale status and whether Fruiticana is available to schools
- [ ] Current formulation claims (lactose-free, fat-free, cholesterol-free, dairy-free, vegan, "100% fruit", added sugar, additives)
- [ ] Current nutrition panels vs. the 2008 lab values
- [ ] Proposed school program details still being documented: staffing, serving schedule, restocking, cleaning, payment, installation/power/storage, student purchase vs meal service, school obligations, remaining 2/3 of sales, which four flavors, and whether the 4 oz cup still applies to machine service.
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
- [ ] Contact social accounts (email, phone, and Waterbury address are published)
- [ ] Domain / production `NEXT_PUBLIC_SITE_URL`
- [ ] Logo file and trademark presentation
- [ ] Whether "Creamless Ice Cream" is still the product name
- [ ] Product photography of the actual frozen dessert (a 4 oz cup) — owner-provided asset needed. The school-kitchens section uses an illustrative stock gelato photo (`public/images/sections/serving-foreground.webp`); replace with a current Fruiticana cup photo when available.
- [ ] Heart-health language — the legacy "A Gift For Your Heart" hero slogan was replaced with the tagline "An exciting new way to eat fruit" to avoid implying a cardiovascular benefit. Restore only with owner sign-off and substantiation.
- [ ] "Health-conscious" positioning — the homepage leads with student enjoyment of fruit and says health and enjoyment belong together. Dated 2008 panels and the Team Nutrition **Healthy Snack** pilot remain labeled as history. "Healthy/healthier" is still a regulated comparative term — confirm substantiation and current formulation before treating it as a product label claim.

## Accessibility & performance

Semantic landmarks, keyboard-operable navigation (including a focus-trapped
mobile menu), visible focus states, labeled form fields, reduced-motion support,
and a cream/green palette chosen for readable contrast. Marketing pages are
statically generated with minimal client JavaScript.

## Testing

| Tool | What it covers |
| --- | --- |
| **Playwright** | Navigation, school inquiry form, documentation, nutrition tables, redirects, mobile menu, links, responsive layout, error states (`e2e/`). Default run is Chromium; `npm run test:e2e:browsers` also runs tagged smoke tests in Firefox, WebKit, Pixel 7, and iPhone 13. |
| **Vitest** | Unit tests for helpers and content data (`src/**/*.test.ts`). |
| **React Testing Library** | Component behavior: school inquiry validation, flavor filters, nutrition selector, mobile menu, buttons. |
| **axe-core** (`@axe-core/playwright`) | WCAG 2 A/AA checks on primary, flavor-detail, and legal routes (`e2e/a11y.spec.ts`). |
| **Lighthouse CI** | Performance (warn &lt; 90), accessibility / best-practices / SEO (fail &lt; 95) on Home and the other primary pages. Requires a production build and a local Chrome. |
| **Production-readiness report** | Latest QA gate: [`docs/PRODUCTION_READINESS_REPORT.md`](docs/PRODUCTION_READINESS_REPORT.md). |
| **BrowserStack** (optional) | Real Safari-on-iPhone, Chrome-on-Android, Edge, and desktop browsers before launch. Set `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY`, and `PLAYWRIGHT_BASE_URL` (a public preview URL), then `npm run test:browserstack`. |
