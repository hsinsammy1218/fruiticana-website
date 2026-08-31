# Fruiticana Website Implementation Plan

Next.js 16 informational website for **school decision-makers** (administrators, food-service directors, nutrition staff, private-school leaders, distributors). The 2003–2011 business PDF is historical source material with strict claim qualification. There is no consumer shop, cart, or “buy now” path.

**Core goal:** Help a school decision-maker understand what Fruiticana is, why it may fit a school food program, review supporting documentation, and contact Fruiticana about bringing it into their school.

**Primary conversion:** School inquiry — not “Explore Flavors,” not “Buy Now.”

---

## 1. Positioning

**What it is:** Fruiticana is a fruit-based frozen dessert originally developed to give students and families a refreshing alternative to traditional dairy ice cream. Original line name: **Fruiticana Creamless Ice Cream**. Original consumer tagline (Story only): **“An exciting new way to eat fruit.”**

**Primary visitors:** school administrator, principal, superintendent, private-school owner/director, food-service director, cafeteria manager, nutrition coordinator, purchasing/procurement staff, district decision-maker, distributor.

**Site voice:** clean, credible, professional, healthy, and approachable. Fruit photography is welcome; parlor / ice-cream-shop marketing is not. A principal should be able to forward the URL internally without it looking unserious.

Until current facts are verified, the site speaks in **concept + history** language, not **on menus today / certified today**.

---

## 2. Content audit (claim rules — do not loosen)

### Safe to use

- Brand name Fruiticana; original product name as history; founding year **2003**.
- Named team as documented only: Antoine Mowad (Chemistry); Dr. Marc Raad (Internal Medicine); Dr. Joseph Brenes (Internal Medicine/Chemistry); Dr. Joseph Morely (Cardiology); Dr. Mark L. Kraus (Internal/Addiction Medicine).
- Concept: fruit-based, smooth/creamy ice-cream-like texture; lactose-free **concept** (original design intent).
- 12 flavor names from the original lineup.
- That a Connecticut school / Team Nutrition chapter happened.

### Historical, usable with clear qualification

- Connecticut Team Nutrition Healthy Snack pilot, Sep 30, 2003–Sep 30, 2005 (USDA-funded grant to CT SDE); participating vendors had to meet program nutrition standards and use moderate single-serving portions.
- Localized Connecticut pilot **2005–2006**, including distribution to local schools after consumer testing.
- ~30,000 consumer sampling in Connecticut.
- Independently owned parlor; cups, cones, smoothies, 16 oz pints.
- Historical sizes: 4 oz cup; **institutional 3 oz**.
- Pilot sales “close to $1 million” — **Our Story only**, labeled historical.
- Appendix records (FDA packet, AHA material, CT program page, lab panels) — **historical documentation** only, never live certification badges.
- 2008 Northeast Labs panels — Nutrition UI with a persistent historical disclaimer.
- Taste testimonials, dated and located, Story only (not homepage).

### Requires current verification before present-tense claims

- Whether Fruiticana is in production or sold to schools today.
- Current formulation, nutrition facts, ingredients, allergens, serving size.
- Current certifications and logo usage rights.
- Current contact details, availability, which flavors/formats still exist.

### Must not be used as a marketing claim

- Medical / disease / diabetes language; “healthiest dessert”; present-tense FDA/AHA “certified” or endorsements.
- Fiber “two servings a day” claim; competitor calorie attacks; invented prices, stores, or reviews.
- Fake PDF downloads for scans that are not in the repo.

---

## 3. Sitemap

Primary nav (logo = Home):

- `/schools` For Schools
- `/product` Product & Nutrition
- `/story` Our Story
- `/contact` School Inquiry

Navbar CTA: **Request School Information** → `/contact`.

Secondary (not primary nav):

- `/learn` classroom teaching resource (teachers, not food-service directors)
- `/flavors/[slug]` shareable product sheets
- `/privacy`, `/terms`, `/accessibility`

Redirects: `/flavors` → `/product`; `/nutrition` → `/product` (preserve `?flavor=`).

No cart, checkout, store locator, or fake retail availability.

---

## 4. Homepage

1. Hero — “A Healthier Frozen Dessert Option for Schools.” CTAs: Request School Information / View Nutrition & Product Details.
2. Designed With Schools in Mind — CT school distribution + Team Nutrition; four benefits (fruit-based, lactose-free concept, individual portions, 12 flavors).
3. What Is Fruiticana? — clear product explanation without overselling.
4. Product & Nutrition Information — access to panels, servings, ingredients honesty, flavor list.
5. Fruiticana in Connecticut Schools — 2003–2005 Team Nutrition; later local school production after testing. Historical labels.
6. Supporting Documentation — dated cards; no fake downloads.
7. Closing CTA — “Interested in Fruiticana for Your School?”

---

## 5. Other primary pages

**For Schools (`/schools`)** — cafeteria, snack programs, private schools, district evaluation, events, food-service distribution. Historical fit only; inquiry CTA; classroom resource as a secondary link.

**Product & Nutrition (`/product`)** — original 12 flavors, historical serving formats (institutional 3 oz and 4 oz cup first), 2008 nutrition selector, ingredients honesty.

**Our Story (`/story`)** — lead with the Connecticut school / Team Nutrition chapter, then development, founders, timeline, documentation, then historical consumer sampling. Closing CTA is school inquiry.

**School Inquiry (`/contact`)** — structured form (name, school/organization, school type, city, state, email, phone, role, estimated students, interest type, message). Interest types: School Cafeteria, Healthy Snack Program, Private School, District-Level Inquiry, Food-Service Distribution, Events, General Information. Client validation + honeypot; **does not send**. No store locator.

---

## 6. Design, data, SEO, tests

Keep cream/green tokens, Plus Jakarta Sans + Inter, fruit photography. Prefer document cards, tables, and calm headings over flavor-grid energy.

Typed modules in `src/data/`. JSON-LD: Organization + WebSite + BreadcrumbList. **No** Product offers or Review schema.

Playwright focus: documentation accessibility, school inquiry forms, navigation, resource links, responsive nutrition tables, contact workflows, redirects — not shopping-cart tests.
