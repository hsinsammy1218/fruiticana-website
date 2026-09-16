import { test, expect } from "@playwright/test";

test.describe("home @cross-browser", () => {
  test("renders the brand promise and primary CTAs", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /an exciting new way\s+to eat fruit/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByText(/fruit-based frozen experience directly to schools/i).first(),
    ).toBeVisible();
    await expect(page.getByText(/cream-less ice crème/i).first()).toBeVisible();
    await expect(
      page.getByRole("link", { name: "See How It Works" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Bring Fruiticana to Your School" }).first(),
    ).toBeVisible();
  });

  test("leads with why and fruit before the school program", async ({ page }) => {
    await page.goto("/");

    const why = page.getByRole("heading", {
      name: "Fruit Should Be Something Students Look Forward To",
    });
    const product = page.getByRole("heading", {
      name: "A fruit-based frozen treat for students",
    });
    const startYoung = page.getByRole("heading", {
      name: "Give Students an Enjoyable Experience With Fruit Today",
    });
    const how = page.getByRole("heading", {
      name: "How Fruiticana Works at Your School",
    });

    await expect(why).toBeVisible();
    await expect(product).toBeVisible();
    await expect(startYoung).toBeVisible();
    await expect(how).toBeVisible();
    await expect(
      page.getByText(/hope that their appreciation for fruit continues tomorrow/i),
    ).toBeVisible();

    const whyTop = await why.evaluate((el) => el.getBoundingClientRect().top);
    const productTop = await product.evaluate((el) => el.getBoundingClientRect().top);
    const startTop = await startYoung.evaluate((el) => el.getBoundingClientRect().top);
    const howTop = await how.evaluate((el) => el.getBoundingClientRect().top);
    expect(whyTop).toBeLessThan(productTop);
    expect(productTop).toBeLessThan(startTop);
    expect(startTop).toBeLessThan(howTop);
  });

  test("hero CTAs open how it works and the school inquiry", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "See How It Works" }).first().click();
    await expect(page).toHaveURL(/#how-it-works/);
    await expect(
      page.getByRole("heading", { name: "How Fruiticana Works at Your School" }),
    ).toBeVisible();

    await page.goto("/");
    await page
      .getByRole("main")
      .getByRole("link", { name: "Bring Fruiticana to Your School" })
      .click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("establishes product, school program, history, trust hub, and closing inquiry", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "A fruit-based frozen treat for students" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fruit based" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Ice-cream feel" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Made for students" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "We Provide the Machines" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Your School Shares in Sales" }),
    ).toBeVisible();
    await expect(page.getByText("1/3").first()).toBeVisible();
    await expect(page.getByText(/proposed standard school setup/i).first()).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "We've Been in Connecticut Schools Before",
      }),
    ).toBeVisible();
    await expect(page.getByText(/team nutrition healthy snack/i).first()).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Learn Everything About Fruiticana.",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Let's Give Students a New Way to Enjoy Fruit.",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("main").getByRole("link", { name: "Documentation" }).first(),
    ).toHaveAttribute("href", "/resources");

    await page.getByRole("link", { name: "Read Our Story" }).click();
    await expect(page).toHaveURL(/\/about$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Request School Information" }).last().click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});
