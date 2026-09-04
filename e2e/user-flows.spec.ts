import { test, expect } from "@playwright/test";
import { fillSchoolInquiry } from "./helpers";

test.describe("user flows", () => {
  test("home to product nutrition to flavor sheet", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "View All Flavors" }).click();
    await expect(page).toHaveURL(/\/product/);

    await page.locator('a[href="/flavors/mango"]').click();
    await expect(page).toHaveURL(/\/flavors\/mango$/);
    await expect(page.getByRole("heading", { level: 1, name: "Mango" })).toBeVisible();

    await page.getByRole("link", { name: "See full nutrition facts" }).click();
    await expect(page).toHaveURL(/\/product\?flavor=mango/);
    await expect(
      page.locator("#nutrition").getByRole("link", { name: "Mango", exact: true }),
    ).toHaveAttribute("aria-current", "true");
  });

  test("about to school inquiry", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/about");
    await expect(page.getByText("Fruiticana Creamless Ice Cream")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Fruiticana in Connecticut Schools" }),
    ).toBeVisible();

    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/contact$/);

    await fillSchoolInquiry(page, { name: "Jordan", interest: "Cafeteria" });
    await page.getByRole("button", { name: "Request Information" }).click();
    await expect(page.getByRole("status").filter({ hasText: /thanks, jordan/i })).toBeVisible();
  });

  test("for schools to classroom resource to snack-program inquiry", async ({
    page,
  }) => {
    await page.goto("/schools");
    await page.getByRole("link", { name: "Open the classroom resource" }).click();
    await expect(page).toHaveURL(/\/learn$/);
    await expect(
      page.getByRole("heading", { name: "Twelve fruits to know" }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Contact for schools" }).click();
    await expect(page.getByLabel(/interest type/i)).toHaveValue(
      "Healthy Snack Program",
    );
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
