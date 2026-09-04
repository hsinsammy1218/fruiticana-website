import { test, expect } from "@playwright/test";

test.describe("home @cross-browser", () => {
  test("renders the brand promise and primary CTAs", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /the new way\s+to eat fruit/i,
      }),
    ).toBeVisible();
    await expect(page.getByText(/cream-less ice crème/i).first()).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Explore Flavors" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Request School Information" }).first(),
    ).toBeVisible();
  });

  test("hero CTAs navigate to product and inquiry pages", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Explore Flavors" }).first().click();
    await expect(page).toHaveURL(/\/product$/);

    await page.goto("/");
    await page
      .getByRole("banner")
      .getByRole("link", { name: "Request School Information" })
      .click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("establishes brand, flavors, school relevance, and closing inquiry", async ({
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
    await expect(page.getByText("4 oz").first()).toBeVisible();
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
