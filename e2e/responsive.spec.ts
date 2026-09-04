import { test, expect, type Page } from "@playwright/test";
import {
  expectNoBrokenImages,
  expectNoHorizontalOverflow,
  viewports,
} from "./helpers";

/** Avoid waiting on `load` — Next can leave that event pending after viewport changes. */
async function visit(page: Page, path: string) {
  await page.goto(path, { waitUntil: "domcontentloaded" });
}

test.describe("responsive layout @mobile", () => {
  test("phones show the hamburger and do not overflow", async ({ page }) => {
    for (const viewport of [
      viewports.phone320,
      viewports.phone375,
      viewports.phone390,
      viewports.phone430,
    ]) {
      await page.setViewportSize(viewport);
      await visit(page, "/");
      await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
      await expect(
        page.getByRole("navigation", { name: "Primary" }),
      ).toBeHidden();
      await expectNoHorizontalOverflow(page);

      await visit(page, "/product");
      await expectNoHorizontalOverflow(page);
      await visit(page, "/contact");
      await expectNoHorizontalOverflow(page);
      await visit(page, "/schools");
      await expectNoHorizontalOverflow(page);
      await visit(page, "/about");
      await expectNoHorizontalOverflow(page);
      await visit(page, "/resources");
      await expectNoHorizontalOverflow(page);
    }
  });

  test("tablet keeps the hamburger; laptop and desktop show primary nav", async ({
    page,
  }) => {
    await page.setViewportSize(viewports.tablet768);
    await visit(page, "/");
    await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
    await expectNoHorizontalOverflow(page);

    for (const viewport of [
      viewports.laptop1024,
      viewports.desktop1280,
      viewports.desktop1440,
    ]) {
      await page.setViewportSize(viewport);
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
    await visit(page, "/product");
    await expect(
      page.locator("#nutrition").getByRole("link", { name: "Mango", exact: true }),
    ).toBeVisible();
    await expectNoHorizontalOverflow(page);

    await page.setViewportSize(viewports.laptop1024);
    await visit(page, "/product");
    await expect(
      page.locator("#nutrition").getByRole("link", { name: "Mango", exact: true }),
    ).toBeVisible();
    await expect(
      page.locator("#nutrition").getByRole("heading", { name: "Apricot" }),
    ).toBeVisible();
    await expectNoHorizontalOverflow(page);
  });

  test("home has no broken images at a phone viewport", async ({ page }) => {
    await page.setViewportSize(viewports.phone375);
    await visit(page, "/");
    await expect(page.locator("img").first()).toBeVisible();
    await expectNoBrokenImages(page);
  });
});
