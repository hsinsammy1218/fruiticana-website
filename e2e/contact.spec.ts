import { test, expect } from "@playwright/test";

test.describe("contact page", () => {
  test("shows published contact details without a form or store locator", async ({
    page,
  }) => {
    await page.goto("/contact");

    await expect(
      page.getByRole("heading", { level: 1, name: "Ways to reach us" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "fruiticana1@hotmail.com" }),
    ).toHaveAttribute("href", "mailto:fruiticana1@hotmail.com");
    await expect(page.getByRole("link", { name: "203-709-0992" })).toHaveAttribute(
      "href",
      "tel:+12037090992",
    );
    await expect(
      page.getByRole("link", { name: "300 Wolcott Rd, Wolcott, CT 06716" }),
    ).toHaveAttribute(
      "href",
      "https://www.google.com/maps/search/?api=1&query=300%20Wolcott%20Rd%2C%20Wolcott%2C%20CT%2006716",
    );

    await expect(
      page.getByRole("button", { name: "Contact Us" }),
    ).toHaveCount(0);
    await expect(
      page.getByRole("button", { name: "Request School Information" }),
    ).toHaveCount(0);
    await expect(page.getByLabel(/^name/i)).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "What happens next" })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Response times" })).toHaveCount(0);
    await expect(page.getByText("Coming soon")).toHaveCount(0);
    await expect(
      page.getByRole("heading", { name: /availability information is coming soon/i }),
    ).toHaveCount(0);
  });
});
