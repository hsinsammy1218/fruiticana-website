import { test, expect } from "@playwright/test";

test.describe("nutrition", () => {
  test("keeps the historical disclaimer visible on product", async ({ page }) => {
    await page.goto("/product");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /flavors, servings, and historical nutrition/i,
      }),
    ).toBeVisible();
    await expect(page.getByText(/not a current product label/i).first()).toBeVisible();
    await expect(page.getByText(/historical \(2008\)/i)).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /institutional serving information/i }),
    ).toBeVisible();
    await expect(page.getByText(/institutional cup \(3 oz\)/i)).toBeVisible();
    await expect(page.getByText("Calories per 4 oz")).toBeVisible();
    await expect(page.getByText("0g").first()).toBeVisible();
    await expect(page.getByText("100–150").first()).toBeVisible();
  });

  test("switching flavors updates the panel and shareable URL", async ({
    page,
  }) => {
    await page.goto("/product#nutrition");

    await page.getByRole("button", { name: "Strawberry" }).click();
    await expect(page).toHaveURL(/flavor=strawberry/);
    await expect(
      page.locator("#nutrition").getByRole("heading", { name: "Strawberry" }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Strawberry" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  test("preserves flavor deep links through the nutrition redirect", async ({
    page,
  }) => {
    await page.goto("/nutrition?flavor=mango");
    await expect(page).toHaveURL(/\/product\?flavor=mango/);
    await expect(page.getByRole("button", { name: "Mango" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
});
