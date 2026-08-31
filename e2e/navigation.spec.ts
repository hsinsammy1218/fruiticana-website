import { test, expect } from "@playwright/test";
import { legalRoutes, primaryRoutes } from "./helpers";

test.describe("navigation @cross-browser", () => {
  test("desktop primary nav reaches every marketing page", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    const primary = page.getByRole("navigation", { name: "Primary" });
    await expect(primary.getByRole("link", { name: "For Schools" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Open menu" })).toBeHidden();

    for (const item of [
      { name: "About Fruiticana", url: /\/about$/ },
      { name: "For Schools", url: /\/schools$/ },
      { name: "Flavors & Nutrition", url: /\/product$/ },
      { name: "Resources", url: /\/resources$/ },
      { name: "Contact", url: /\/contact$/ },
    ]) {
      await page.goto("/");
      await primary.getByRole("link", { name: item.name }).click();
      await expect(page).toHaveURL(item.url);
    }
  });

  test("logo returns home and the nav CTA opens school inquiry", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/about");

    await page.getByRole("banner").getByRole("link", { name: /fruiticana - home/i }).click();
    await expect(page).toHaveURL("/");

    await page.getByRole("banner").getByRole("link", { name: "Request School Information" }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("footer explore, resources, and legal links work", async ({ page }) => {
    await page.goto("/");
    const footer = page.getByRole("contentinfo");

    await footer.getByRole("link", { name: "Flavors & Nutrition" }).click();
    await expect(page).toHaveURL(/\/product$/);

    await page.goto("/");
    await footer.getByRole("link", { name: "Classroom resource" }).click();
    await expect(page).toHaveURL(/\/learn$/);

    await page.goto("/");
    await footer.getByRole("link", { name: "Privacy Policy" }).click();
    await expect(page).toHaveURL(/\/privacy$/);

    await page.goto("/");
    await footer.getByRole("link", { name: "Terms" }).click();
    await expect(page).toHaveURL(/\/terms$/);

    await page.goto("/");
    await footer.getByRole("link", { name: "Accessibility" }).click();
    await expect(page).toHaveURL(/\/accessibility$/);
  });

  test("every primary and legal route has a unique heading", async ({ page }) => {
    for (const route of [...primaryRoutes, ...legalRoutes]) {
      await page.goto(route.path);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(
        route.heading,
      );
    }
  });

  test("legacy story URL redirects to about", async ({ page }) => {
    await page.goto("/story");
    await expect(page).toHaveURL(/\/about$/);
  });
});
