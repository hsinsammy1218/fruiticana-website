import { test, expect } from "@playwright/test";

test.describe("home @cross-browser", () => {
  test("renders the original tagline and primary CTAs", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { level: 1, name: /^Fruiticana$/i }),
    ).toBeVisible();
    await expect(
      page.getByText(/an exciting new way to eat fruit/i).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Learn About Fruiticana", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("main").getByRole("link", { name: "For Schools" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Request School Information" }).first(),
    ).toBeVisible();
  });

  test("hero CTAs navigate to about and schools pages", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Learn About Fruiticana", exact: true }).click();
    await expect(page).toHaveURL(/\/about$/);

    await page.goto("/");
    await page.getByRole("main").getByRole("link", { name: "For Schools" }).first().click();
    await expect(page).toHaveURL(/\/schools$/);
  });

  test("establishes school relevance, flavors, documentation, and closing inquiry", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "A Different Kind of Frozen Dessert" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fruit Based" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Fruiticana for Schools" }),
    ).toBeVisible();
    await expect(page.getByText(/team nutrition healthy snack/i).first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Twelve fruit flavors" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Fruiticana Has Been Here Before" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /historical documentation/i }),
    ).toBeVisible();
    await expect(page.getByText("~30,000").first()).toBeVisible();
    await expect(page.getByText("3 oz").first()).toBeVisible();
    await expect(page.getByText("Original fruit flavors", { exact: true })).toBeVisible();
    await expect(page.getByText("Total fat on 2008 panels", { exact: true })).toBeVisible();
    await expect(
      page.getByText(/downloadable scan is not published/i).first(),
    ).toBeVisible();

    await page.getByRole("link", { name: "Explore Our History" }).click();
    await expect(page).toHaveURL(/\/about$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Request School Information" }).last().click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});
