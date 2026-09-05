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
    await expect(
      page.getByText(/the frozen treat students want/i).first(),
    ).toBeVisible();
    await expect(page.getByText(/cream-less ice crème/i).first()).toBeVisible();
    await expect(page.getByText(/for schools and their students/i).first()).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Explore the Flavors" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Request School Information" }).first(),
    ).toBeVisible();
  });

  test("leads with the healthier core benefit before taste and flavors", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "A healthier way to eat fruit" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Fruit, not dairy" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "0 g fat on 2008 panels" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Healthy Snack pilot" }),
    ).toBeVisible();
    // The health beat stays qualified by the 2008 laboratory source.
    await expect(
      page.getByText(/2008 laboratory analysis/i).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "See the Nutrition Information" }),
    ).toHaveAttribute("href", "/product#nutrition");
  });

  test("hero CTAs open the flavors and the school inquiry", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Explore the Flavors" }).first().click();
    await expect(page).toHaveURL(/\/product/);
    await expect(
      page.getByRole("heading", { name: /twelve original fruit flavors/i }),
    ).toBeVisible();

    await page.goto("/");
    await page
      .getByRole("banner")
      .getByRole("link", { name: "Request School Information" })
      .click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("establishes product taste, flavors, school relevance, and closing inquiry", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "A different kind of frozen dessert" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fruit based" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Ice-cream feel" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Single-serve cups" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Twelve fruit flavors" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Why Fruiticana was made for schools" }),
    ).toBeVisible();
    await expect(page.getByText(/team nutrition healthy snack/i).first()).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Built for schools, taste-tested with students",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /backed by a documented school record/i }),
    ).toBeVisible();
    await expect(page.getByText("~30,000").first()).toBeVisible();
    await expect(page.getByText("4 oz").first()).toBeVisible();
    await expect(page.getByText("Original fruit flavors", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Total fat on 2008 panels", { exact: true })).toBeVisible();

    await expect(
      page.getByRole("main").getByRole("link", { name: "View Documentation" }),
    ).toHaveAttribute("href", "/resources");

    await page.getByRole("link", { name: "Read Our Story" }).click();
    await expect(page).toHaveURL(/\/about$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Request School Information" }).last().click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});
