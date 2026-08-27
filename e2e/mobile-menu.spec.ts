import { test, expect } from "@playwright/test";
import { viewports } from "./helpers";

test.describe("mobile menu @mobile", () => {
  test.use({ viewport: viewports.phone390 });

  test("opens, traps focus, and closes with Escape", async ({ page }) => {
    await page.goto("/");

    const open = page.getByRole("button", { name: "Open menu" });
    await expect(open).toBeVisible();
    await open.click();

    const dialog = page.getByRole("dialog", { name: "Site menu" });
    await expect(dialog).toBeVisible();
    await expect(page.getByRole("button", { name: "Close menu" })).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(open).toHaveAttribute("aria-expanded", "false");
  });

  test("navigates from a menu link and closes the drawer", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("dialog").getByRole("link", { name: "Our Story" }).click();

    await expect(page).toHaveURL(/\/story$/);
    await expect(page.getByRole("dialog", { name: "Site menu" })).toBeHidden();
    await expect(
      page.getByRole("heading", { level: 1, name: /frozen dessert built around fruit/i }),
    ).toBeVisible();
  });

  test("closes from the close button and the backdrop", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(page.getByRole("dialog", { name: "Site menu" })).toBeHidden();

    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("dialog", { name: "Site menu" })).toBeVisible();
    await page.mouse.click(12, 400);
    await expect(page.getByRole("dialog", { name: "Site menu" })).toBeHidden();
  });
});
