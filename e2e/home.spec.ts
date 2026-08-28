import { test, expect } from "@playwright/test";

test.describe("home @cross-browser", () => {
  test("renders the brand promise and primary CTAs", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /exciting new way to eat fruit/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Explore the Flavors" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Discover Fruiticana" }),
    ).toBeVisible();
  });

  test("hero CTAs navigate to flavors and story", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Explore the Flavors" }).first().click();
    await expect(page).toHaveURL(/\/flavors$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Discover Fruiticana" }).click();
    await expect(page).toHaveURL(/\/story$/);
  });

  test("featured flavors and closing CTAs stay internally linked", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Featured flavors" })).toBeVisible();
    await expect(page.locator('a[href="/flavors/mango"]')).toBeVisible();
    await expect(page.locator('a[href="/flavors/strawberry"]')).toBeVisible();

    await page.getByRole("link", { name: "Explore all flavors" }).click();
    await expect(page).toHaveURL(/\/flavors$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Open the classroom resource" }).click();
    await expect(page).toHaveURL(/\/learn$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Get in Touch" }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("historical testimonials are labeled as such", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "From the original Connecticut pilot" }),
    ).toBeVisible();
    await expect(page.getByText(/great stuff/i)).toBeVisible();
  });
});
