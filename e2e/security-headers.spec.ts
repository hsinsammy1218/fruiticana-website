import { test, expect } from "@playwright/test";

test.describe("security headers", () => {
  test("primary HTML responses expose CSP and hardening headers", async ({
    request,
  }) => {
    const response = await request.get("/");
    expect(response.ok()).toBeTruthy();

    const headers = response.headers();
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["permissions-policy"]).toMatch(/camera=\(\)/);
    expect(headers["permissions-policy"]).toMatch(/geolocation=\(\)/);

    const csp = headers["content-security-policy"];
    expect(csp).toBeTruthy();
    expect(csp).toMatch(/default-src 'self'/);
    expect(csp).toMatch(/frame-ancestors 'none'/);
    expect(csp).toMatch(/object-src 'none'/);
    expect(csp).toMatch(/va\.vercel-scripts\.com/);

    // Prefer CSP frame-ancestors over legacy X-Frame-Options duplication.
    expect(headers["x-frame-options"]).toBeFalsy();
  });
});
