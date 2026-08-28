import { test, expect } from "@playwright/test";

test.describe("error states", () => {
  test("unknown routes render the 404 page", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);

    await expect(
      page.getByRole("heading", { name: /this page melted away/i }),
    ).toBeVisible();
    await page.getByRole("link", { name: "Back home" }).click();
    await expect(page).toHaveURL("/");
  });

  test("unknown flavor slugs render the 404 page", async ({ page }) => {
    const response = await page.goto("/flavors/not-a-real-flavor");
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("link", { name: "Explore the Flavors" }),
    ).toBeVisible();
  });

  test("newsletter footer shows a validation error then an honest success", async ({
    page,
  }) => {
    await page.goto("/");
    const footer = page.getByRole("contentinfo");
    await footer.getByLabel(/stay fresh/i).fill("not-an-email");
    await footer.getByRole("button", { name: "Notify me" }).click();
    await expect(footer.getByRole("status")).toHaveText(
      "Please enter a valid email address.",
    );

    await footer.getByLabel(/stay fresh/i).fill("you@example.com");
    await footer.getByRole("button", { name: "Notify me" }).click();
    await expect(footer.getByRole("status")).toContainText(
      /sign-ups aren't live yet/i,
    );
  });
});
