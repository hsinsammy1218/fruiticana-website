# Fruiticana Website Implementation Plan

Next.js 16 informational website for **schools and their students**. The 2003–2011 business PDF and the 2007 myfruiticana.com materials are source material for dates and documentation. There is no consumer shop, cart, or “buy now” path. **For now, this site is only for schools and the students they serve.**

**Core goal:** Recreate the recognizable Fruiticana identity from the original website, modernized for 2026, so a school team can understand the Fruiticana vision — the what, why, and how — and request information for students.

**Primary conversion:** School inquiry — **Request School Information** / **Bring Fruiticana to Your School**.

---

## 1. Positioning

**What it is:** Fruiticana is a fruit-based frozen dessert originally developed as a refreshing alternative to traditional dairy ice cream. Original line name: **Fruiticana Creamless Ice Cream**. Original tagline (homepage hero): **“An exciting new way to eat fruit.”**

**Why it exists:** So students have a new way to eat fruit — a frozen dessert built from fruit flavors that can belong in a cafeteria or snack program, including for students avoiding lactose (original design intent).

**How it works for schools:** Designed to be made **in-house**, so schools are not carrying specialty outside-dessert cost. Schools serve individual single-serve cups (4 oz / ½ cup laboratory serving), with 12 original flavors, nutrition documentation for school review, and a documented Connecticut Team Nutrition chapter.

The site speaks in **present-day school** language for schools and their students.

---

## 2. Content audit (claim rules — do not loosen)

### Safe to use

- Brand name Fruiticana; original product name as history; founding year **2003**.
- Named team as documented only: Antoine Mowad (Chemistry); Dr. Marc Raad (Internal Medicine); Dr. Joseph Brenes (Internal Medicine/Chemistry); Dr. Joseph Morely (Cardiology); Dr. Mark L. Kraus (Internal/Addiction Medicine).
- Concept: fruit-based, smooth/creamy ice-cream-like texture; lactose-free **concept** (original design intent).
- 12 flavor names from the original lineup.
- That a Connecticut school / Team Nutrition chapter happened.

### Historical, usable with clear qualification

- Connecticut Team Nutrition Healthy Snack pilot, Sep 30, 2003–Sep 30, 2005.
- Localized Connecticut pilot **2005–2006**.
- ~30,000 consumer sampling; ~$1M pilot sales (**About only**).
- Cups, cones, smoothies, 16 oz pints; institutional **3 oz** and lab **4 oz**.
- FDA facility registration materials; AHA program correspondence; 2008 lab panels; 2007 website ingredient list (includes wheat protein).
- Taste testimonials, dated Waterbury 2007, About only.

### Must not be used as a marketing claim

- Present-tense FDA/AHA/USDA certification; medical or disease language; 100% fruit / no additives as current claims; 2007 prices or Waterbury phone/address; fake PDF downloads.

2007 website nutrition numbers are **not** shown (they disagree with the 2008 laboratory panels).

---

## 3. Sitemap

Primary nav (logo = Home):

- `/about` About Fruiticana (`/story` redirects here)
- `/schools` For Schools
- `/product` Flavors & Nutrition
- `/resources` Resources
- `/contact` Contact

Navbar CTA: **Request School Information** → `/contact`.

Secondary: `/learn`, `/flavors/[slug]`, `/privacy`, `/terms`, `/accessibility`.

Redirects: `/flavors` and `/nutrition` → `/product`; `/story` → `/about`.

---

## 4. Homepage order

1. Hero — Fruiticana + original tagline + school-only support line
2. The Fruiticana vision — What / Why / How
3. What Is Fruiticana? (product concept)
4. Why Fruiticana was made for schools
5. How it can be served in school
6. Featured flavors (6)
7. Built for schools — proven with students
8. Nutrition information
9. School documentation
10. Closing school CTA

---

## 5. Design

Cream `#FFFBEF`, Fruiticana green `#65A844`, deep green `#244B2A`, lime `#98C93C`, yellow `#F6D64A`. Plus Jakarta Sans + Inter. Logo lockup uses strawberry tittles inspired by the 2007 wordmark. Brand bars echo the original yellow–green header/footer strips.

Archived JPEGs live in `docs/archive-reference/` and are **not** served as the live brand.
