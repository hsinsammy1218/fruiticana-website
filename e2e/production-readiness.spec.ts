import { test, expect } from "@playwright/test";
import {
  collectPageFailures,
  downloadablePdfs,
  expectNoHorizontalOverflow,
  fillSchoolInquiry,
  gotoForLayout,
  legalRoutes,
  primaryRoutes,
  publicHtmlRoutes,
  secondaryRoutes,
  viewports,
} from "./helpers";

test.describe("production readiness", () => {
  test("TEST 11: critical pages have no unexpected console or network failures", async ({
    page,
  }) => {
    test.setTimeout(180_000);
    const failures = collectPageFailures(page);

    for (const route of [
      ...primaryRoutes,
      ...secondaryRoutes,
      ...legalRoutes,
      { path: "/flavors/mango" },
      { path: "/resources/fda-facility-registration" },
    ]) {
      const response = await page.goto(route.path, { waitUntil: "domcontentloaded" });
      expect(response?.ok() || response?.status() === 304, route.path).toBeTruthy();
      await expect(page.getByRole("banner")).toBeVisible();
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.getByRole("contentinfo")).toBeVisible();
    }

    failures.expectClean();
  });

  test("TEST 12: school administrator journey from home to inquiry", async ({
    page,
  }) => {
    await page.setViewportSize(viewports.desktop1280);
    const failures = collectPageFailures(page);

    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /an exciting new way\s+to eat fruit/i,
      }),
    ).toBeVisible();
    await expect(page.getByText(/cream-less ice crème/i).first()).toBeVisible();

    await page.getByRole("link", { name: "See How It Works" }).first().click();
    await expect(page).toHaveURL(/#how-it-works/);
    await expect(
      page.getByRole("heading", { name: "How Fruiticana Works at Your School" }),
    ).toBeVisible();
    await expect(page.getByText("1/3").first()).toBeVisible();
    await expect(page.getByText(/two flavors in each machine/i).first()).toBeVisible();
    await expect(
      page.getByText(/provides and maintains the equipment/i).first(),
    ).toBeVisible();

    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", {
      name: "About Fruiticana",
    }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.getByText("Fruiticana Creamless Ice Cream").first()).toBeVisible();

    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", {
      name: "Product & Nutrition",
    }).click();
    await expect(page).toHaveURL(/\/product$/);
    await expect(page.getByText(/nutrition analysis \(2008\)/i)).toBeVisible();

    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", {
      name: "For Schools",
    }).click();
    await expect(page).toHaveURL(/\/schools$/);
    await expect(
      page.getByRole("heading", { name: "We Provide the Machines" }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Request School Information" }).last().click();
    await expect(page).toHaveURL(/\/contact$/);
    await fillSchoolInquiry(page, { name: "Jordan", interest: "Cafeteria" });
    await page.getByRole("button", { name: "Request School Information" }).click();
    await expect(
      page.getByRole("status").filter({ hasText: /thanks, jordan/i }),
    ).toBeVisible();
    await expect(page.getByRole("status")).toContainText(/doesn.?t deliver messages/i);

    failures.expectClean();
  });

  test("every public HTML route loads with a heading, nav, and footer", async ({
    page,
  }) => {
    test.setTimeout(180_000);

    for (const path of publicHtmlRoutes) {
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response?.status(), path).toBeLessThan(400);
      await expect(page.getByRole("banner"), path).toBeVisible();
      await expect(page.getByRole("heading", { level: 1 }), path).toBeVisible();
      await expect(page.getByRole("contentinfo"), path).toBeVisible();
    }
  });

  test("direct load and refresh keep major routes working", async ({ page }) => {
    test.setTimeout(120_000);
    const routes = [
      "/",
      "/schools",
      "/product",
      "/contact",
      "/about",
      "/learn",
      "/resources",
      "/flavors/strawberry",
      "/resources/nutritional-analysis",
    ];

    for (const path of routes) {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await page.reload();
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      expect(new URL(page.url()).pathname).toBe(path);
    }
  });

  test("browser back and forward restore previous pages", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", {
      name: "For Schools",
    }).click();
    await expect(page).toHaveURL(/\/schools$/);

    await page.goBack();
    await expect(page).toHaveURL(/\/$/);
    await expect(
      page.getByRole("heading", { level: 1, name: /an exciting new way\s+to eat fruit/i }),
    ).toBeVisible();

    await page.goForward();
    await expect(page).toHaveURL(/\/schools$/);
    await expect(
      page.getByRole("heading", { level: 1, name: /bring fruiticana to your school/i }),
    ).toBeVisible();
  });

  test("published PDFs are reachable", async ({ request }) => {
    for (const path of downloadablePdfs) {
      const response = await request.get(path);
      expect(response.status(), path).toBe(200);
      expect(response.headers()["content-type"] ?? "").toMatch(/pdf/i);
    }
  });

  test("favicon.ico is served", async ({ request }) => {
    const response = await request.get("/favicon.ico");
    expect(response.status()).toBe(200);
  });

  test("legacy redirects still land on the live pages", async ({ page }) => {
    await page.goto("/flavors");
    await expect(page).toHaveURL(/\/product$/);

    await page.goto("/nutrition");
    await expect(page).toHaveURL(/\/product$/);

    await page.goto("/story");
    await expect(page).toHaveURL(/\/about$/);

    await page.goto("/resources/laboratory-nutritional-analysis");
    await expect(page).toHaveURL(/\/resources\/nutritional-analysis$/);
  });
});

test.describe("production readiness @mobile", () => {
  test("TEST 10: extra phone, tablet, and desktop sizes do not overflow primary pages", async ({
    page,
  }) => {
    test.setTimeout(180_000);

    const extra = [
      viewports.phone360,
      viewports.phone393,
      viewports.phone412,
      viewports.tablet820,
      viewports.laptop1366,
      viewports.desktop1536,
      viewports.desktop1920,
    ];

    for (const viewport of extra) {
      await page.setViewportSize(viewport);
      for (const path of ["/", "/schools", "/product", "/contact"]) {
        await gotoForLayout(page, path);
        await expectNoHorizontalOverflow(page);
      }
    }
  });
});
