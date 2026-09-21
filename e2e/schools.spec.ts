import { test, expect } from "@playwright/test";

test.describe("for schools", () => {
  test("explains the proposed school program", async ({ page }) => {
    await page.goto("/schools");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /bring fruiticana to your school/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByText(/principals and school administrators/i).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "We Bring the Program. You Bring the Students." }),
    ).toBeVisible();
    await expect(page.getByText("1/3")).toHaveCount(0);
    await expect(
      page.getByRole("heading", { name: "Fruiticana Gives Back to the School" }),
    ).toHaveCount(0);
    await expect(
      page.getByRole("heading", { name: "We Provide the Machines" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "What each partner receives" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "FAQ for school teams" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Food-service distribution" }),
    ).toHaveCount(0);
  });

  test("links documentation and inquiry without fake PDF downloads", async ({
    page,
  }) => {
    await page.goto("/schools");

    await expect(page.getByRole("link", { name: /download pdf/i })).toHaveCount(0);
    await expect(
      page.getByRole("main").getByRole("link", { name: "Product & Nutrition" }),
    ).toHaveAttribute("href", "/product");
    await page.getByRole("link", { name: "Request School Information" }).last().click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});
