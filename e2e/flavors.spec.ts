import { test, expect } from "@playwright/test";
import { flavorSlugs } from "./helpers";

test.describe("flavors", () => {
  test("product page lists twelve flavors without a parlor explorer", async ({
    page,
  }) => {
    await page.goto("/product");

    await expect(
      page.getByRole("heading", { name: /original flavor lineup/i }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Berry", exact: true })).toHaveCount(0);

    for (const slug of flavorSlugs) {
      await expect(page.locator(`a[href="/flavors/${slug}"]`)).toBeVisible();
    }
  });

  test("flavor listing redirects to product", async ({ page }) => {
    await page.goto("/flavors");
    await expect(page).toHaveURL(/\/product$/);
  });

  test("flavor detail shows a product sheet and nutrition deep link", async ({
    page,
  }) => {
    await page.goto("/flavors/mango");

    await expect(page.getByRole("heading", { level: 1, name: "Mango" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /learn about mango/i }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "All flavors" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "See full nutrition facts" }),
    ).toHaveAttribute("href", "/product?flavor=mango#nutrition");

    await page.getByRole("link", { name: "See full nutrition facts" }).click();
    await expect(page).toHaveURL(/\/product\?flavor=mango/);
    await expect(
      page.locator("#nutrition").getByRole("link", { name: "Mango", exact: true }),
    ).toHaveAttribute("aria-current", "true");
  });

  test("all flavor slugs render a heading", async ({ page }) => {
    for (const slug of flavorSlugs) {
      await page.goto(`/flavors/${slug}`);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.getByRole("link", { name: "All flavors" })).toBeVisible();
    }
  });
});
