import AxeBuilder from "@axe-core/playwright";
import { expect, type Page } from "@playwright/test";

export const primaryRoutes = [
  {
    path: "/",
    heading: /the new way\s+to eat fruit/i,
    title: /Fruiticana/,
  },
  {
    path: "/schools",
    heading: /how fruiticana could fit a school food program/i,
    title: /For Schools/,
  },
  {
    path: "/product",
    heading: /flavors, servings, and historical nutrition/i,
    title: /Product & Nutrition/,
  },
  {
    path: "/story",
    heading: /documented school chapter/i,
    title: /Our Story/,
  },
  {
    path: "/contact",
    heading: /request school information/i,
    title: /School Inquiry/,
  },
] as const;

export const secondaryRoutes = [
  {
    path: "/learn",
    heading: /classroom resource/i,
    title: /Learn/,
  },
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

export async function fillSchoolInquiry(
  page: Page,
  options?: { interest?: string; name?: string },
) {
  const name = options?.name ?? "Sam";
  await page.getByLabel(/^name/i).fill(name);
  await page.getByLabel(/school \/ organization/i).fill("Lincoln Elementary");
  await page.getByLabel(/email/i).fill("sam@example.com");
  if (options?.interest) {
    await page.getByLabel(/interest type/i).selectOption(options.interest);
  }
  await page.getByLabel(/message/i).fill(
    "We would like nutrition sheets for a cafeteria review at our school.",
  );
}

export async function expectNoAxeViolations(page: Page) {
  // Scroll-reveal starts at opacity 0 (and animates for 600ms). Axe samples
  // those pixels and reports false color-contrast failures. Analyze the
  // fully visible, settled UI instead.
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addStyleTag({
    content: `
      .reveal,
      .js-reveal .reveal {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
    `,
  });
  await page.evaluate(() => {
    document.documentElement.classList.remove("js-reveal");
    document.querySelectorAll(".reveal").forEach((el) => {
      el.setAttribute("data-revealed", "true");
    });
  });
  await page.evaluate(
    () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      }),
  );

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
