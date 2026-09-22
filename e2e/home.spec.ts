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
      page.getByText(/fruit-based frozen experience for students/i).first(),
    ).toBeVisible();
    await expect(page.getByText(/cream-less ice crème/i).first()).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Explore Fruiticana" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Bring Fruiticana to Your School" }).first(),
    ).toBeVisible();
  });

  test("leads with the product and flavors before the school program", async ({
    page,
  }) => {
    await page.goto("/");

    const idea = page.getByRole("heading", { name: "Fruit. Reimagined." });
    const flavors = page.getByRole("heading", { name: "Find your fruit." });
    const why = page.getByRole("heading", { name: "What if kids wanted the fruit?" });
    const startYoung = page.getByRole("heading", {
      name: "Foods we meet young can stay with us.",
    });
    const schools = page.getByRole("heading", {
      name: "Bring Fruiticana to your students.",
      exact: true,
    });
    const how = page.getByRole("heading", { name: "How it works" });

    await expect(idea).toBeVisible();
    await expect(flavors).toBeVisible();
    await expect(why).toBeVisible();
    await expect(startYoung).toBeVisible();
    await expect(schools).toBeVisible();
    await expect(how).toBeVisible();
    await expect(
      page.getByText(/hope that their appreciation for fruit continues tomorrow/i),
    ).toBeVisible();

    const ideaTop = await idea.evaluate((el) => el.getBoundingClientRect().top);
    const flavorsTop = await flavors.evaluate((el) => el.getBoundingClientRect().top);
    const whyTop = await why.evaluate((el) => el.getBoundingClientRect().top);
    const howTop = await how.evaluate((el) => el.getBoundingClientRect().top);
    expect(ideaTop).toBeLessThan(flavorsTop);
    expect(flavorsTop).toBeLessThan(whyTop);
    expect(whyTop).toBeLessThan(howTop);
  });

  test("hero CTAs open the product and the school inquiry", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Explore Fruiticana" }).first().click();
    await expect(page).toHaveURL(/\/product$/);

    await page.goto("/");
    await page
      .getByRole("main")
      .getByRole("link", { name: "Bring Fruiticana to Your School" })
      .click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("establishes flavors, school program, history, transparency, and closing inquiry", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "Explore Strawberry" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "We Provide the Machines" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Students Enjoy Fruiticana" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Your School Shares in Sales" })).toHaveCount(0);
    await expect(page.getByText("1/3")).toHaveCount(0);
    await expect(page.getByText(/proposed standard school setup/i).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Know what's in the cup." })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "We've Been in Connecticut Schools Before" }),
    ).toBeVisible();
    await expect(page.getByText(/team nutrition healthy snack/i).first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Let's Bring Fruiticana to Your Students." }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Read Our Story" }).click();
    await expect(page).toHaveURL(/\/about$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Request School Information" }).last().click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});
