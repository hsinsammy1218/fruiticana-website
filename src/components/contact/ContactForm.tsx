"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

const inquiryTypes = [
  "General",
  "Retailers",
  "Grocery Distribution",
  "Food Service",
  "Schools & Institutions",
  "Wholesale",
  "Partnerships",
  "Media",
  "Investment / Business Development",
] as const;

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiry: string;
  message: string;
  /** Honeypot - must stay empty. */
  website: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const emptyFields: Fields = {
  name: "",
  email: "",
  phone: "",
  company: "",
  inquiry: inquiryTypes[0],
  message: "",
  website: "",
};

const fieldClasses =
  "mt-1.5 min-h-11 w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus-visible:border-green-deep";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(values: Fields): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) {
      next.message = "Please enter a message.";
    } else if (values.message.trim().length < 10) {
      next.message = "Please add a little more detail (at least 10 characters).";
    }
    return next;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Honeypot: if filled, silently succeed without processing.
    if (fields.website) {
      setSubmitted(true);
      return;
    }

    const nextErrors = validate(fields);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstKey = Object.keys(nextErrors)[0];
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstKey}"]`)
        ?.focus();
      return;
    }

    // No backend yet: we intentionally do not transmit anything.
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl2 border border-green/30 bg-green/8 p-6"
      >
        <h3 className="text-xl font-bold text-green-deep">
          Thanks{fields.name ? `, ${fields.name.trim()}` : ""}!
        </h3>
        <p className="mt-2 leading-relaxed text-muted">
          Your message is complete. Please note that Fruiticana&rsquo;s contact
          inbox isn&rsquo;t connected yet, so this form doesn&rsquo;t deliver
          messages at the moment. Message delivery will be enabled once a
          verified business inbox is in place.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(emptyFields);
            setSubmitted(false);
          }}
          className="mt-4 inline-flex min-h-11 items-center rounded-pill border border-green-deep/25 bg-white px-5 text-sm font-semibold text-green-deep hover:border-green-deep/50"
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-green-deep">
            Name <span className="text-strawberry">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            aria-required="true"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldClasses, errors.name && "border-strawberry")}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-sm text-strawberry">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-green-deep">
            Email <span className="text-strawberry">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            aria-required="true"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(fieldClasses, errors.email && "border-strawberry")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-sm text-strawberry">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-green-deep">
            Phone <span className="text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-semibold text-green-deep">
            Company <span className="text-muted">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={fields.company}
            onChange={(e) => update("company", e.target.value)}
            className={fieldClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiry" className="text-sm font-semibold text-green-deep">
          Inquiry type
        </label>
        <select
          id="inquiry"
          name="inquiry"
          value={fields.inquiry}
          onChange={(e) => update("inquiry", e.target.value)}
          className={cn(fieldClasses, "appearance-none bg-white")}
        >
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-green-deep">
          Message <span className="text-strawberry">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClasses, "resize-y", errors.message && "border-strawberry")}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-strawberry">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot field: hidden from users, catches basic bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-pill bg-green-deep px-6 text-sm font-semibold text-cream transition-colors hover:bg-green-deep-80"
        >
          Send message
        </button>
        <p className="text-xs text-muted">
          <span className="text-strawberry">*</span> Required
        </p>
      </div>
    </form>
  );
}
