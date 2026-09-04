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
    await expect(page.getByText(/for schools and their students/i).first()).toBeVisible();
    await expect(
      page.getByRole("link", { name: "See the vision" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Request School Information" }).first(),
    ).toBeVisible();
  });

  test("hero CTAs open the vision and the school inquiry", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "See the vision" }).first().click();
    await expect(page).toHaveURL(/#vision/);
    await expect(
      page.getByRole("heading", {
        name: /what it is\. why it exists\. how it works for schools/i,
      }),
    ).toBeVisible();

    await page.goto("/");
    await page
      .getByRole("banner")
      .getByRole("link", { name: "Request School Information" })
      .click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("establishes vision, flavors, school relevance, and closing inquiry", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: /what it is\. why it exists\. how it works for schools/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "A fruit-based creamless frozen dessert" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "So students have a new way to eat fruit" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: /make it in-house — without the extra cost/i,
      }),
    ).toBeVisible();
    await expect(page.getByText(/easy for school kitchens/i).first()).toBeVisible();
    await expect(page.getByText(/only for schools and their students/i).first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "A different kind of frozen dessert" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fruit based" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Ice-cream feel" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Single-serve cups" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Why Fruiticana was made for schools" }),
    ).toBeVisible();
    await expect(page.getByText(/team nutrition healthy snack/i).first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Twelve fruit flavors" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Built for schools — proven with students" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /school documentation/i }),
    ).toBeVisible();
    await expect(page.getByText("~30,000").first()).toBeVisible();
    await expect(page.getByText("4 oz").first()).toBeVisible();
    await expect(page.getByText("Original fruit flavors", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Total fat on 2008 panels", { exact: true })).toBeVisible();
    await expect(
      page.getByRole("img", {
        name: /connecticut team nutrition pilot letter/i,
      }).first(),
    ).toBeVisible();
    await expect(
      page.getByText(/document image shown above|view document image|downloadable original pdf is not published/i).first(),
    ).toBeVisible();

    await page.getByRole("link", { name: "Read Our Story" }).click();
    await expect(page).toHaveURL(/\/about$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Request School Information" }).last().click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});
