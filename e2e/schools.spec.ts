import { test, expect } from "@playwright/test";

test.describe("for schools", () => {
  test("explains program fit and keeps history labeled", async ({ page }) => {
    await page.goto("/schools");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /fruiticana for schools/i,
      }),
    ).toBeVisible();
    await expect(page.getByText(/not listing current school-menu/i)).toBeVisible();
    await expect(page.getByRole("heading", { name: "School cafeteria" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Healthy snack program" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Private school" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "A fruit-based creamless frozen dessert" }),
    ).toBeVisible();
    await expect(page.getByText(/only for schools and their students/i).first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Food-service distribution" }),
    ).toHaveCount(0);
    await expect(page.getByText("Single-serve cup", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("4 oz").first()).toBeVisible();
    await expect(page.getByText("2003–05").first()).toBeVisible();
  });

  test("links documentation and inquiry without fake PDF downloads", async ({
    page,
  }) => {
    await page.goto("/schools");

    await expect(page.getByRole("link", { name: /download pdf/i })).toHaveCount(0);
    await expect(
      page.getByRole("main").getByRole("link", { name: "Flavors & Nutrition" }),
    ).toHaveAttribute("href", "/product");
    await page.getByRole("link", { name: "Request School Information" }).last().click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});
