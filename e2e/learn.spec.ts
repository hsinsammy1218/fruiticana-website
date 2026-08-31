import { test, expect } from "@playwright/test";

test.describe("learn", () => {
  test("presents classroom modules and keeps history labeled", async ({
    page,
  }) => {
    await page.goto("/learn");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /classroom resource/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByText(/does not claim Fruiticana is on school menus today/i),
    ).toBeVisible();

    await expect(page.getByRole("heading", { name: "Twelve fruits to know" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Apricot" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "How to read a Nutrition Facts panel" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Connecticut Team Nutrition Healthy Snack Pilot" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Discussion questions and activities" }),
    ).toBeVisible();
    await expect(page.getByText("Teaching modules", { exact: true })).toBeVisible();
    await expect(page.getByText("12").first()).toBeVisible();
  });

  test("module jump links and school inquiry stay on-site", async ({ page }) => {
    await page.goto("/learn");

    await page.getByRole("link", { name: "Start with the twelve fruits" }).click();
    await expect(page).toHaveURL(/\/learn#fruits/);

    await page.getByRole("link", { name: "Open the historical nutrition panels" }).click();
    await expect(page).toHaveURL(/\/product#nutrition/);

    await page.goto("/learn");
    await page.getByRole("link", { name: "Contact for schools" }).click();
    await expect(page).toHaveURL(/\/contact\?interest=/);
    await expect(page.getByLabel(/interest type/i)).toHaveValue(
      "Healthy Snack Program",
    );
  });
});
