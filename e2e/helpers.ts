import AxeBuilder from "@axe-core/playwright";
import { expect, type Page } from "@playwright/test";

export const primaryRoutes = [
  { path: "/", heading: /exciting new way to eat fruit/i, title: /Fruiticana/ },
  {
    path: "/flavors",
    heading: /flavor for every kind of fruit lover/i,
    title: /Flavors/,
  },
  {
    path: "/story",
    heading: /frozen dessert built around fruit/i,
    title: /Our Story/,
  },
  {
    path: "/nutrition",
    heading: /fruit-forward, and honest/i,
    title: /Nutrition/,
  },
  { path: "/contact", heading: /get in touch/i, title: /Contact/ },
] as const;

export const legalRoutes = [
  { path: "/privacy", heading: /privacy policy/i },
  { path: "/terms", heading: /terms of use/i },
  { path: "/accessibility", heading: /accessibility/i },
] as const;

export const flavorSlugs = [
  "apricot",
  "mango",
  "pineapple",
  "banana",
  "raisin",
  "strawberry",
  "lemonade",
  "blueberry",
  "grapefruit",
  "apple",
  "orange",
  "cantaloupe",
] as const;

export const viewports = {
  phone320: { width: 320, height: 568 },
  phone390: { width: 390, height: 844 },
  phone430: { width: 430, height: 932 },
  tablet768: { width: 768, height: 1024 },
  laptop1024: { width: 1024, height: 768 },
  desktop1280: { width: 1280, height: 800 },
} as const;

export async function expectNoAxeViolations(page: Page) {
  // Reveal animations start at opacity 0, which makes axe color-contrast
  // flag text that is fully readable once on-screen. Analyze the settled UI.
  await page.evaluate(() => {
    document.documentElement.classList.remove("js-reveal");
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("is-visible");
    });
  });

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  const formatted = results.violations.map((violation) => ({
    id: violation.id,
    impact: violation.impact,
    description: violation.description,
    nodes: violation.nodes.map((node) => node.target),
  }));

  expect(formatted, JSON.stringify(formatted, null, 2)).toEqual([]);
}

export async function expectNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const root = document.documentElement;
    return {
      scrollWidth: root.scrollWidth,
      clientWidth: root.clientWidth,
    };
  });

  expect(
    overflow.scrollWidth,
    `horizontal overflow: scrollWidth ${overflow.scrollWidth} > clientWidth ${overflow.clientWidth}`,
  ).toBeLessThanOrEqual(overflow.clientWidth + 1);
}
