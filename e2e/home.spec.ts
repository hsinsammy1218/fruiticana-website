import { test, expect } from "@playwright/test";

test.describe("home @cross-browser", () => {
  test("renders the school promise and primary CTAs", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /healthier frozen dessert option for schools/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Request School Information" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /view nutrition & product details/i }),
    ).toBeVisible();
  });

  test("hero CTAs navigate to inquiry and product pages", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: /view nutrition & product details/i }).click();
    await expect(page).toHaveURL(/\/product$/);

    await page.goto("/");
    await page.getByRole("banner").getByRole("link", { name: "Request School Information" }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("establishes school relevance, documentation, and closing inquiry", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Designed With Schools in Mind" }),
    ).toBeVisible();
    await expect(page.getByText(/team nutrition healthy snack/i).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fruit-Based" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /what is fruiticana/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Product & Nutrition Information" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Fruiticana in Connecticut Schools" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Supporting Documentation" }),
    ).toBeVisible();
    await expect(page.getByText("~30,000").first()).toBeVisible();
    await expect(page.getByText("3 oz").first()).toBeVisible();
    await expect(page.getByText("Original fruit flavors", { exact: true })).toBeVisible();
    await expect(page.getByText("Total fat on 2008 panels", { exact: true })).toBeVisible();
    await expect(
      page.getByText(/downloadable scan is not published/i).first(),
    ).toBeVisible();

    await page.getByRole("link", { name: "Read the pilot program story" }).click();
    await expect(page).toHaveURL(/\/story$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Request School Information" }).last().click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});
