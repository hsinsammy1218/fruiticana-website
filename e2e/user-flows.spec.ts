import { test, expect } from "@playwright/test";

test.describe("user flows", () => {
  test("home to flavor to nutrition", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Explore the Flavors" }).first().click();
    await expect(page).toHaveURL(/\/flavors$/);

    await page.locator('a[href="/flavors/mango"]').click();
    await expect(page).toHaveURL(/\/flavors\/mango$/);
    await expect(page.getByRole("heading", { level: 1, name: "Mango" })).toBeVisible();

    await page.getByRole("link", { name: "See full nutrition facts" }).click();
    await expect(page).toHaveURL(/\/nutrition\?flavor=mango/);
    await expect(page.getByRole("button", { name: "Mango" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  test("story to contact inquiry", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Discover Fruiticana" }).click();
    await expect(page).toHaveURL(/\/story$/);
    await expect(page.getByText("Fruiticana Creamless Ice Cream")).toBeVisible();

    await page.getByRole("link", { name: "Get in Touch" }).click();
    await expect(page).toHaveURL(/\/contact$/);

    await page.getByLabel(/name/i).fill("Jordan");
    await page.getByLabel(/email/i).fill("jordan@example.com");
    await page.getByLabel(/inquiry type/i).selectOption("Partnerships");
    await page.getByLabel(/message/i).fill(
      "Interested in a partnership around the original Fruiticana flavors.",
    );
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByRole("status").filter({ hasText: /thanks, jordan/i })).toBeVisible();
  });

  test("skip link jumps to main content", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to main content" });
    await expect(skip).toBeFocused();
    await skip.press("Enter");
    await expect(page).toHaveURL(/#main/);
  });
});
