import { test, expect } from "@playwright/test";

test.describe("nutrition", () => {
  test("keeps the historical disclaimer visible", async ({ page }) => {
    await page.goto("/nutrition");

    await expect(
      page.getByRole("heading", { level: 1, name: /fruit-forward, and honest/i }),
    ).toBeVisible();
    await expect(page.getByText(/not a current product label/i).first()).toBeVisible();
    await expect(page.getByText(/historical \(2008\)/i)).toBeVisible();
  });

  test("switching flavors updates the panel", async ({ page }) => {
    await page.goto("/nutrition");

    await page.getByRole("button", { name: "Strawberry" }).click();
    await expect(page).toHaveURL(/flavor=strawberry/);
    await expect(
      page.getByRole("heading", { name: "Strawberry" }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Strawberry" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
});
