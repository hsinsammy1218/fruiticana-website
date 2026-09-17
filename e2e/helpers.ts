import AxeBuilder from "@axe-core/playwright";
import { expect, type Page } from "@playwright/test";

export const primaryRoutes = [
  {
    path: "/",
    heading: /an exciting new way\s+to eat fruit/i,
    title: /Fruiticana/,
  },
  {
    path: "/about",
    heading: /a new way to eat fruit/i,
    title: /About Fruiticana/,
  },
  {
    path: "/schools",
    heading: /bring fruiticana to your school/i,
    title: /For Schools/,
  },
  {
    path: "/product",
    heading: /flavors, servings, and nutrition/i,
    title: /Product & Nutrition/,
  },
  {
    path: "/resources",
    heading: /documentation for school review/i,
    title: /Resources/,
  },
  {
    path: "/contact",
    heading: /let'?s bring fruiticana to your students/i,
    title: /Let's Bring Fruiticana to Your Students/,
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

export const documentSlugs = [
  "fda-facility-registration",
  "aha-food-certification-letter",
  "ct-team-nutrition-letter",
  "nutritional-analysis",
  "product-information",
  "flavor-list",
  "institutional-serving",
  "historical-ingredients",
] as const;

export const downloadablePdfs = [
  "/documents/fda-facility-registration.pdf",
  "/documents/aha-food-certification-letter.pdf",
  "/documents/ct-team-nutrition-letter.pdf",
] as const;

export const publicHtmlRoutes = [
  ...primaryRoutes.map((route) => route.path),
  ...secondaryRoutes.map((route) => route.path),
  ...legalRoutes.map((route) => route.path),
  ...flavorSlugs.map((slug) => `/flavors/${slug}`),
  ...documentSlugs.map((slug) => `/resources/${slug}`),
] as const;

export const viewports = {
  phone320: { width: 320, height: 568 },
  phone360: { width: 360, height: 800 },
  phone375: { width: 375, height: 667 },
  phone390: { width: 390, height: 844 },
  phone393: { width: 393, height: 852 },
  phone412: { width: 412, height: 915 },
  phone430: { width: 430, height: 932 },
  tablet768: { width: 768, height: 1024 },
  tablet820: { width: 820, height: 1180 },
  tablet1024: { width: 1024, height: 1366 },
  laptop1024: { width: 1024, height: 768 },
  laptop1280: { width: 1280, height: 720 },
  laptop1366: { width: 1366, height: 768 },
  desktop1280: { width: 1280, height: 800 },
  desktop1440: { width: 1440, height: 900 },
  desktop1536: { width: 1536, height: 864 },
  desktop1920: { width: 1920, height: 1080 },
} as const;

/** Expected third-party noise on a local production server (Vercel Analytics). */
const ignoredFailurePattern =
  /va\.vercel-scripts|vercel-insights|vitals\.vercel|_vercel\/insights|\/_vercel\//;

export function collectPageFailures(page: Page) {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  const failedRequests: string[] = [];

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  page.on("console", (message) => {
    if (message.type() !== "error") return;
    const text = message.text();
    if (ignoredFailurePattern.test(text)) return;
    if (/net::ERR_ABORTED|NS_BINDING_ABORTED/i.test(text)) return;
    consoleErrors.push(text);
  });

  page.on("response", (response) => {
    const url = response.url();
    const status = response.status();
    if (status < 400) return;
    if (ignoredFailurePattern.test(url)) return;
    if (status === 404 && /\/favicon\.ico(?:\?|$)/.test(url)) return;
    failedRequests.push(`${status} ${url}`);
  });

  page.on("requestfailed", (request) => {
    const url = request.url();
    if (ignoredFailurePattern.test(url)) return;
    const error = request.failure()?.errorText ?? "failed";
    if (/ERR_ABORTED|NS_BINDING_ABORTED/i.test(error)) return;
    failedRequests.push(`${error} ${url}`);
  });

  return {
    pageErrors,
    consoleErrors,
    failedRequests,
    expectClean() {
      expect(pageErrors, pageErrors.join("\n")).toEqual([]);
      expect(consoleErrors, consoleErrors.join("\n")).toEqual([]);
      expect(failedRequests, failedRequests.join("\n")).toEqual([]);
    },
  };
}

export async function fillSchoolInquiry(
  page: Page,
  options?: { interest?: string; name?: string },
) {
  const name = options?.name ?? "Sam";
  await page.getByLabel(/^name/i).fill(name);
  await page.getByRole("textbox", { name: /^school \*/i }).fill("Lincoln Elementary");
  await page.getByLabel(/email/i).fill("sam@example.com");
  if (options?.interest) {
    await page.getByLabel(/interest type/i).selectOption(options.interest);
  }
  await page.getByLabel(/message/i).fill(
    "We would like nutrition sheets for a cafeteria review at our school.",
  );
}

export async function expectNoAxeViolations(page: Page) {
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

/**
 * Navigate for layout/overflow/nav assertions without blocking on the full
 * "load" event. These viewport sweeps re-navigate the same routes rapidly,
 * which can deadlock the `next start` on-demand image optimizer (each
 * navigation aborts the previous page's in-flight image optimizations). Images
 * are irrelevant to these checks, so wait only for the DOM plus the styled
 * header — that guarantees CSS/layout is applied before we measure overflow.
 */
export async function gotoForLayout(page: Page, path: string) {
  await page.goto(path, { waitUntil: "domcontentloaded" });
  await page.getByRole("banner").waitFor({ state: "visible" });
}

export async function expectNoBrokenImages(page: Page) {
  const broken = await page.locator("img").evaluateAll((images) =>
    images
      .map((image) => {
        const el = image as HTMLImageElement;
        return {
          src: el.currentSrc || el.src,
          naturalWidth: el.naturalWidth,
          complete: el.complete,
        };
      })
      .filter((image) => image.complete && image.naturalWidth === 0)
      .map((image) => image.src),
  );
  expect(broken, `broken images: ${broken.join(", ")}`).toEqual([]);
}
