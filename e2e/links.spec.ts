import { test, expect } from "@playwright/test";
import { flavorSlugs, legalRoutes, primaryRoutes } from "./helpers";

test.describe("links and seo", () => {
  test("primary pages expose title, canonical, and JSON-LD", async ({ page }) => {
    for (const route of primaryRoutes) {
      await page.goto(route.path);
      await expect(page).toHaveTitle(route.title);
      const canonical = page.locator('link[rel="canonical"]');
      const hrefPattern =
        route.path === "/"
          ? /fruiticana\.example\.com\/?$/
          : new RegExp(`${route.path.replace("/", "\\/")}$`);
      await expect(canonical).toHaveAttribute("href", hrefPattern);
      await expect(page.locator('script[type="application/ld+json"]').first()).toHaveCount(1);
    }
  });

  test("robots.txt and sitemap.xml are reachable", async ({ request }) => {
    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toMatch(/sitemap/i);

    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    const xml = await sitemap.text();
    for (const path of ["/flavors", "/story", "/nutrition", "/contact"]) {
      expect(xml).toContain(path);
    }
    for (const slug of flavorSlugs) {
      expect(xml).toContain(`/flavors/${slug}`);
    }
  });

  test("internal links on home do not 404", async ({ page, request }) => {
    await page.goto("/");
    const hrefs = await page.locator("a[href^='/']").evaluateAll((anchors) =>
      [...new Set(anchors.map((anchor) => (anchor as HTMLAnchorElement).getAttribute("href") ?? ""))],
    );

    const unique = hrefs.filter((href) => href && !href.startsWith("/#") && href !== "#main");
    expect(unique.length).toBeGreaterThan(5);

    for (const href of unique) {
      const path = href.split("#")[0];
      const response = await request.get(path);
      expect(response.status(), path).toBeLessThan(400);
    }
  });

  test("legal pages are linked and render", async ({ page }) => {
    for (const route of legalRoutes) {
      await page.goto(route.path);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(route.heading);
    }
  });
});
