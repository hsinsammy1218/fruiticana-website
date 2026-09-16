# Fruiticana Website Implementation Plan

Next.js 16 informational website for **schools and their students**. The 2003–2011 business PDF and the 2007 myfruiticana.com materials are source material for dates and documentation. There is no consumer shop, cart, or “buy now” path. **For now, this site is only for schools and the students they serve.**

**Core goal:** A principal who has never heard of Fruiticana should understand the student mission and the proposed school program within about two minutes, then request information.

**Primary conversion:** School inquiry — **Request School Information** / **Bring Fruiticana to Your School**.

---

## 1. Positioning

**What it is:** Fruiticana is a fruit-based frozen dessert originally developed as a refreshing alternative to traditional dairy ice cream. Original line name: **Fruiticana Creamless Ice Cream**. Original tagline (homepage hero): **“An exciting new way to eat fruit.”**

**Why it exists:** So students have an exciting new way to eat fruit — a frozen experience built from fruit flavors, introduced while children are young, with the hope that a positive relationship with fruit can continue as they grow. This is a **vision**, not a scientific or behavioral promise.

**Why schools:** Children spend a significant part of their day at school. Fruiticana wants to introduce the experience there — not because schools are merely a distribution channel.

**How the proposed school program works:** Fruiticana provides **two machines** per participating school, with **two flavors per machine**. Fruiticana provides and maintains the equipment and remains involved in operation and serving. Students get access to Fruiticana. The participating school receives **one-third (1/3) of Fruiticana sales** generated through its program.

Always present this as the **proposed standard setup**. Do not claim Fruiticana is on school menus today.

**Historical serving practice** (in-house kitchen prep, 4 oz cups) belongs in dated history and product documentation. It is not the current proposed program.

The site speaks in **present-day school** language for schools and their students.

---

## 2. Content audit (claim rules — do not loosen)

### Current and verified

- Brand name Fruiticana; original product name as history; founding year **2003**.
- Named team as documented only: Antoine Mowad (Chemistry); Dr. Marc Raad (Internal Medicine); Dr. Joseph Brenes (Internal Medicine/Chemistry); Dr. Joseph Morely (Cardiology); Dr. Mark L. Kraus (Internal/Addiction Medicine).
- Concept: fruit-based, smooth/creamy ice-cream-like texture; lactose-free **concept** (original design intent).
- 12 flavor names from the original lineup.
- That a Connecticut school / Team Nutrition chapter happened.
- The **proposed** school model: two machines, two flavors each, Fruiticana provides and maintains equipment, Fruiticana remains involved, school receives 1/3 of program sales.

### Historical, usable with clear qualification

- Connecticut Team Nutrition Healthy Snack pilot, Sep 30, 2003–Sep 30, 2005.
- Localized Connecticut pilot **2005–2006**.
- ~30,000 consumer sampling; ~$1M pilot sales (**About only**).
- Cups, cones, smoothies, 16 oz pints; in-house kitchen prep; institutional **3 oz** and lab **4 oz**.
- FDA facility registration materials; AHA program correspondence; 2008 lab panels; 2007 website ingredient list (includes wheat protein).
- Taste testimonials, dated Waterbury 2007, About only.

### Must not be used as a marketing claim

- Present-tense FDA/AHA/USDA certification; medical or disease language; 100% fruit / no additives as current claims; 2007 prices or Waterbury phone/address; fake PDF downloads.
- Guaranteed health or behavior claims (“once kids eat Fruiticana they will never stop”).
- Invented operational details (staffing, payment, electricity, remaining 2/3 of sales, school obligations, which four flavors).
- In-house kitchen prep presented as the current proposed program.

2007 website nutrition numbers are **not** shown (they disagree with the 2008 laboratory panels).

---

## 3. Sitemap

Primary nav (logo = Home):

- `/about` About Fruiticana (`/story` redirects here)
- `/schools` For Schools
- `/product` Product & Nutrition
- `/contact` Contact

Navbar CTA: **Request School Information** → `/contact`.

Secondary: `/learn`, `/resources`, `/flavors/[slug]`, `/privacy`, `/terms`, `/accessibility`.

Redirects: `/flavors` and `/nutrition` → `/product`; `/story` → `/about`.

---

## 4. Homepage order

1. Hero — **An Exciting New Way to Eat Fruit**, school-mission support, **Bring Fruiticana to Your School** / **See How It Works**
2. Why we care — students, fruit, enjoyment, starting young
3. What's Fruiticana? (product concept)
4. Why start young — childhood familiarity as hope, then why schools
5. How it works in schools — 2 machines / 4 flavors / 1/3 share; Fruiticana provides, maintains, stays involved
6. We've been in Connecticut schools before (historical timeline)
7. Learn everything about Fruiticana (trust hub)
8. Closing CTA — **Let's Give Students a New Way to Enjoy Fruit.**

Detailed nutrition panels and regulatory/document cards live on Product & Nutrition and Resources — not the homepage. Administrator FAQ lives on For Schools.

---

## 5. Design

Cream `#FFFBEF`, Fruiticana green `#65A844`, deep green `#244B2A`, lime `#98C93C`, yellow `#F6D64A`. Plus Jakarta Sans + Inter. Logo lockup uses strawberry tittles inspired by the 2007 wordmark. Brand bars echo the original yellow–green header/footer strips.

Archived JPEGs live in `docs/archive-reference/` and are **not** served as the live brand.
