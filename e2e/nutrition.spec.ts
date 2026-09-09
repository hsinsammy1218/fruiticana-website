import { test, expect } from "@playwright/test";

test.describe("nutrition", () => {
  test("keeps the nutrition note visible on product", async ({ page }) => {
    await page.goto("/product");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /flavors, servings, and nutrition/i,
      }),
    ).toBeVisible();
    await expect(page.getByText(/confirm these figures against your current/i).first()).toBeVisible();
    await expect(page.getByText(/lab analysis \(2008\)/i)).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /institutional serving information/i }),
    ).toBeVisible();
    await expect(page.getByText(/single-serve cup \(4 oz\)/i)).toBeVisible();
    await expect(page.getByText("Calories per 4 oz")).toBeVisible();
    await expect(page.getByText("0g").first()).toBeVisible();
    await expect(page.getByText("100–150").first()).toBeVisible();
    await expect(
      page.locator("#ingredients li").filter({ hasText: "Wheat protein" }),
    ).toBeVisible();
    await expect(
      page.locator("#ingredients li").filter({ hasText: "Mar/az" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "School kitchen recipe" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /fruiticana creamless ice cream/i }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Ingredients" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Method" })).toBeVisible();
    await expect(page.getByText("Yield")).toBeVisible();
    await expect(page.getByText(/confirm gluten status/i)).toBeVisible();
    await expect(page.locator("#ingredients").getByText(/historical/i)).toHaveCount(
      0,
    );
  });

  test("switching flavors updates the panel and shareable URL", async ({
    page,
  }) => {
    await page.goto("/product#nutrition");

    await page.locator("#nutrition").getByRole("link", { name: "Strawberry", exact: true }).click();
    await expect(page).toHaveURL(/flavor=strawberry/);
    await expect(
      page.locator("#nutrition").getByRole("heading", { name: "Strawberry" }),
    ).toBeVisible();
    await expect(
      page.locator("#nutrition").getByRole("link", { name: "Strawberry", exact: true }),
    ).toHaveAttribute("aria-current", "true");
  });

  test("preserves flavor deep links through the nutrition redirect", async ({
    page,
  }) => {
    await page.goto("/nutrition?flavor=mango");
    await expect(page).toHaveURL(/\/product\?flavor=mango/);
    await expect(
      page.locator("#nutrition").getByRole("link", { name: "Mango", exact: true }),
    ).toHaveAttribute("aria-current", "true");
  });
});
