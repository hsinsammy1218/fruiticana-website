/**
 * Regenerates on-site document page images without "historical" framing.
 * Run: node scripts/generate-document-images.mjs
 */
import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("public/images/documents");

const docs = [
  {
    file: "doc-fda-facility-registration.webp",
    title: "U.S. FDA Facility Registration",
    period: "2008 – 2009",
    body: [
      "A food-facility registration was on file for Fruiticana LLC for the 2008–2009 period.",
      "Registration was processed through a third-party registration agent.",
      "This summary is for school review. It is not an FDA approval, certification, or endorsement of the product.",
      "Confirm registration status for current operations before relying on it for procurement.",
    ],
  },
  {
    file: "doc-aha-food-certification-letter.webp",
    title: "American Heart Association Program Letter",
    period: "2005",
    body: [
      "A 2005 letter regarding participation in the American Heart Association’s Food Certification Program.",
      "The letter documents program correspondence from that year.",
      "This summary is for school review and program conversations.",
      "It is not presented as a heart-check certification badge on this site.",
    ],
  },
  {
    file: "doc-ct-team-nutrition-letter.webp",
    title: "Connecticut Team Nutrition Pilot Letter",
    period: "December 2004",
    body: [
      "A letter from the Connecticut State Department of Education notes Fruiticana’s inclusion in student taste tests and samplings for the Team Nutrition Healthy Snack Pilot.",
      "The program was funded by a USDA Team Nutrition grant (2003–2005).",
      "Each pilot school — not the state — chose which products to purchase.",
      "This summary supports school evaluation of Fruiticana for cafeteria and snack programs.",
    ],
  },
  {
    file: "doc-laboratory-nutritional-analysis.webp",
    title: "Laboratory Nutritional Analysis",
    period: "2008",
    body: [
      "Independent Nutrition Facts panels for all 12 flavors from Northeast Laboratories, Inc.",
      "Report number: 20080318F.",
      "Full transcribed panels are available on the Flavors & Nutrition page.",
      "Confirm figures against your current Fruiticana formulation before menu planning.",
    ],
  },
  {
    file: "doc-product-information.webp",
    title: "Product Information Sheet",
    period: "School briefing",
    body: [
      "Fruiticana is a fruit-based, creamless frozen dessert — the new way to eat fruit.",
      "Originally introduced as Fruiticana Creamless Ice Cream, it was developed to deliver an ice-cream-like experience built from fruit.",
      "The original Fruiticana lineup featured 12 fruit flavors for school review.",
      "Open Flavors & Nutrition for serving formats, nutrition panels, and the in-house recipe.",
    ],
  },
  {
    file: "doc-flavor-list.webp",
    title: "Original Flavor List",
    period: "12 flavors",
    body: [
      "Apricot · Mango · Pineapple · Banana · Raisin · Strawberry",
      "Lemonade · Blueberry · Grapefruit · Apple · Orange · Cantaloupe",
      "These are the documented original flavors available for school review on this site.",
      "Each flavor has a shareable product sheet and a laboratory Nutrition Facts panel.",
    ],
  },
  {
    file: "doc-institutional-serving.webp",
    title: "Institutional Serving Information",
    period: "School service",
    body: [
      "Fruiticana is designed for school kitchens with moderate single-serve portions.",
      "Documented school service uses a 4 oz (½ cup) cup.",
      "That portion matches the laboratory Nutrition Facts serving size.",
      "Confirm food-service pack sizes with Fruiticana before menu planning.",
    ],
  },
  {
    file: "doc-historical-ingredients.webp",
    title: "Ingredient List",
    period: "School kitchen recipe",
    body: [
      "Fresh fruit · Wheat protein · Dextrose / starch (if fruit isn’t ripe enough)",
      "Emulsifier (E471, E412) · Agave nectar (if fruit isn’t ripe enough)",
      "Citric acid · Guar gum · Mar/az (as written on the original product pages)",
      "Wheat protein appears on the list — confirm gluten status before serving students.",
    ],
  },
];

function htmlFor(doc) {
  const paragraphs = doc.body
    .map((p) => `<p>${p}</p>`)
    .join("\n");
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Source+Sans+3:wght@400;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1024px;
    height: 1536px;
    background: #f3efe6;
    color: #1a2e1f;
    font-family: "Source Sans 3", system-ui, sans-serif;
  }
  .sheet {
    width: 100%;
    height: 100%;
    padding: 72px 80px 64px;
    background:
      radial-gradient(ellipse at 20% 10%, rgba(255,255,255,0.55), transparent 45%),
      linear-gradient(180deg, #f7f3ea 0%, #efe8da 100%);
    border: 1px solid #d9d0bf;
    position: relative;
  }
  .brand {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #2f6b3a;
  }
  .period {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #5c6b60;
  }
  h1 {
    margin-top: 48px;
    font-family: Fraunces, Georgia, serif;
    font-size: 54px;
    line-height: 1.1;
    font-weight: 700;
    color: #163221;
    max-width: 16ch;
  }
  .rule {
    margin: 28px 0 36px;
    height: 2px;
    width: 120px;
    background: #2f6b3a;
  }
  p {
    font-size: 26px;
    line-height: 1.55;
    margin-bottom: 28px;
    max-width: 34ch;
    color: #2a382e;
  }
  .stamp {
    position: absolute;
    left: 80px;
    right: 80px;
    bottom: 64px;
    padding: 18px 22px;
    border: 2px solid #2f6b3a;
    color: #2f6b3a;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: center;
    background: rgba(47, 107, 58, 0.06);
  }
</style>
</head>
<body>
  <div class="sheet">
    <div class="brand">Fruiticana · School documentation</div>
    <div class="period">${doc.period}</div>
    <h1>${doc.title}</h1>
    <div class="rule"></div>
    ${paragraphs}
    <div class="stamp">For schools and their students</div>
  </div>
</body>
</html>`;
}

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1024, height: 1536 },
  deviceScaleFactor: 1,
});

for (const doc of docs) {
  await page.setContent(htmlFor(doc), { waitUntil: "networkidle" });
  const png = await page.screenshot({ type: "png", fullPage: true });
  const webp = await sharp(png).webp({ quality: 82 }).toBuffer();
  const dest = path.join(outDir, doc.file);
  await writeFile(dest, webp);
  console.log("wrote", doc.file, webp.length);
}

await browser.close();
console.log("done");
