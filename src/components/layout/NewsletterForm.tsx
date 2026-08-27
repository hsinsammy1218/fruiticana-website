"use client";

import { useState } from "react";

/**
 * "Stay Fresh" newsletter UI. Intentionally does NOT submit anywhere yet
 * (no email provider is connected). Mirrors the honest placeholder pattern
 * used by the contact form. Swap the handler for a real provider later.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setStatus(valid ? "done" : "error");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-3">
      <label htmlFor="newsletter-email" className="text-sm font-semibold text-cream">
        Stay Fresh
      </label>
      <p className="mt-1 text-sm text-cream/70">
        Fruiticana news, flavors, and availability.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          className="min-h-11 w-full rounded-pill border border-cream/25 bg-green-deep-80 px-4 text-sm text-cream placeholder:text-cream/50 focus-visible:outline-cream"
        />
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-pill bg-cream px-5 text-sm font-semibold text-green-deep transition-colors hover:bg-cream-100"
        >
          Notify me
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-2 min-h-5 text-sm text-cream/80">
        {status === "done"
          ? "Thanks! Sign-ups aren't live yet - we'll add this soon."
          : status === "error"
            ? "Please enter a valid email address."
            : ""}
      </p>
    </form>
  );
}
