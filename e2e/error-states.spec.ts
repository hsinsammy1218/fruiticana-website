import { test, expect } from "@playwright/test";

test.describe("error states", () => {
  test("unknown routes render the 404 page", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);

    await expect(
      page.getByRole("heading", { name: /page not found/i }),
    ).toBeVisible();
    await page.getByRole("link", { name: "Back home" }).click();
    await expect(page).toHaveURL("/");
  });

  test("unknown flavor slugs render the 404 page", async ({ page }) => {
    const response = await page.goto("/flavors/not-a-real-flavor");
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("link", { name: "Product & Nutrition" }),
    ).toBeVisible();
  });
});
