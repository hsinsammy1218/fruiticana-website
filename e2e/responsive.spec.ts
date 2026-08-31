import { test, expect } from "@playwright/test";
import {
  expectNoBrokenImages,
  expectNoHorizontalOverflow,
  viewports,
} from "./helpers";

test.describe("responsive layout @mobile", () => {
  test("phones show the hamburger and do not overflow", async ({ page }) => {
    for (const viewport of [
      viewports.phone320,
      viewports.phone375,
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

      await page.goto("/product");
      await expectNoHorizontalOverflow(page);
      await page.goto("/contact");
      await expectNoHorizontalOverflow(page);
      await page.goto("/schools");
      await expectNoHorizontalOverflow(page);
      await page.goto("/about");
      await expectNoHorizontalOverflow(page);
      await page.goto("/resources");
      await expectNoHorizontalOverflow(page);
    }
  });

  test("tablet keeps the hamburger; laptop and desktop show primary nav", async ({
    page,
  }) => {
    await page.setViewportSize(viewports.tablet768);
    await page.goto("/");
    await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
    await expectNoHorizontalOverflow(page);

    for (const viewport of [
      viewports.laptop1024,
      viewports.desktop1280,
      viewports.desktop1440,
    ]) {
      await page.setViewportSize(viewport);
      await page.goto("/");
      await expect(page.getByRole("button", { name: "Open menu" })).toBeHidden();
      await expect(
        page.getByRole("navigation", { name: "Primary" }).getByRole("link", {
          name: "For Schools",
        }),
      ).toBeVisible();
      await expectNoHorizontalOverflow(page);
    }
  });

  test("nutrition selector stays usable from phone to desktop", async ({
    page,
  }) => {
    await page.setViewportSize(viewports.phone390);
    await page.goto("/product");
    await expect(page.getByRole("button", { name: "Mango" })).toBeVisible();
    await expectNoHorizontalOverflow(page);

    await page.setViewportSize(viewports.laptop1024);
    await page.goto("/product");
    await expect(page.getByRole("button", { name: "Mango" })).toBeVisible();
    await expect(
      page.locator("#nutrition").getByRole("heading", { name: "Apricot" }),
    ).toBeVisible();
    await expectNoHorizontalOverflow(page);
  });

  test("home has no broken images at a phone viewport", async ({ page }) => {
    await page.setViewportSize(viewports.phone375);
    await page.goto("/");
    await expectNoBrokenImages(page);
  });
});
