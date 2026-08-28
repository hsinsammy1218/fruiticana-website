import { test, expect } from "@playwright/test";
import { expectNoHorizontalOverflow, viewports } from "./helpers";

test.describe("responsive layout @mobile", () => {
  test("phones show the hamburger and do not overflow", async ({ page }) => {
    for (const viewport of [
      viewports.phone320,
      viewports.phone390,
      viewports.phone430,
    ]) {
      await page.setViewportSize(viewport);
      await page.goto("/");
      await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
      await expect(
        page.getByRole("navigation", { name: "Primary" }),
      ).toBeHidden();
      await expectNoHorizontalOverflow(page);

      await page.goto("/flavors");
      await expectNoHorizontalOverflow(page);
      await page.goto("/contact");
      await expectNoHorizontalOverflow(page);
      await page.goto("/learn");
      await expectNoHorizontalOverflow(page);
    }
  });

  test("tablet and desktop show the primary nav", async ({ page }) => {
    for (const viewport of [viewports.tablet768, viewports.laptop1024, viewports.desktop1280]) {
      await page.setViewportSize(viewport);
      await page.goto("/");
      await expect(page.getByRole("button", { name: "Open menu" })).toBeHidden();
      await expect(
        page.getByRole("navigation", { name: "Primary" }).getByRole("link", {
          name: "Flavors",
        }),
      ).toBeVisible();
      await expectNoHorizontalOverflow(page);
    }
  });

  test("nutrition selector stays usable from phone to desktop", async ({
    page,
  }) => {
    await page.setViewportSize(viewports.phone390);
    await page.goto("/nutrition");
    await expect(page.getByRole("button", { name: "Mango" })).toBeVisible();
    await expectNoHorizontalOverflow(page);

    await page.setViewportSize(viewports.laptop1024);
    await page.goto("/nutrition");
    await expect(page.getByRole("button", { name: "Mango" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Apricot" }),
    ).toBeVisible();
    await expectNoHorizontalOverflow(page);
  });
});
