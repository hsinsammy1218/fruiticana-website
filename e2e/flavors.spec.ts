import { test, expect } from "@playwright/test";
import { flavorSlugs } from "./helpers";

test.describe("flavors", () => {
  test("product page lists twelve flavors without a parlor explorer", async ({
    page,
  }) => {
    await page.goto("/product");

    await expect(
      page.getByRole("heading", { name: /twelve original fruit flavors/i }),
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

  test("flavor detail shows a product sheet and full nutrition facts", async ({
    page,
  }) => {
    await page.goto("/flavors/mango");

    await expect(page.getByRole("heading", { level: 1, name: "Mango" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /learn about mango/i }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "All flavors" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /full laboratory panel/i }),
    ).toBeVisible();
    await expect(page.getByText("Calories")).toBeVisible();
    await expect(page.getByText("Calories from Fat 0")).toBeVisible();
    await expect(page.getByText("Total Fat")).toBeVisible();
    await expect(page.getByText("Saturated Fat")).toBeVisible();
    await expect(page.getByText("Trans Fat")).toBeVisible();
    await expect(page.getByText("Cholesterol")).toBeVisible();
    await expect(page.getByText("Sodium")).toBeVisible();
    await expect(page.getByText("Total Carbohydrate")).toBeVisible();
    await expect(page.getByText("Dietary Fiber")).toBeVisible();
    await expect(page.getByText("Sugars")).toBeVisible();
    await expect(page.getByText("Protein")).toBeVisible();
    await expect(page.getByText("Vitamin A")).toBeVisible();
    await expect(page.getByText("Vitamin C")).toBeVisible();
    await expect(page.getByText("Calcium")).toBeVisible();
    await expect(page.getByText("Iron")).toBeVisible();
    await expect(page.getByText(/northeast laboratories/i)).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Compare all flavor panels" }),
    ).toHaveAttribute("href", "/product?flavor=mango#nutrition");

    await page.getByRole("link", { name: "Compare all flavor panels" }).click();
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
