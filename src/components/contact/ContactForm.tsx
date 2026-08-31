"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import {
  interestTypes,
  resolveInterestType,
  roles,
  schoolTypes,
  studentRanges,
  type InterestType,
} from "@/data/inquiry";

type Fields = {
  name: string;
  organization: string;
  schoolType: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  role: string;
  studentCount: string;
  interest: string;
  message: string;
  /** Honeypot - must stay empty. */
  website: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const emptyFields: Fields = {
  name: "",
  organization: "",
  schoolType: "",
  city: "",
  state: "",
  email: "",
  phone: "",
  role: "",
  studentCount: "",
  interest: "School Food Service",
  message: "",
  website: "",
};

const fieldClasses =
  "mt-1.5 min-h-11 w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus-visible:border-green-deep";

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const initialInterest = resolveInterestType(defaultInterest);
  const [fields, setFields] = useState<Fields>({
    ...emptyFields,
    interest: initialInterest,
  });
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
    if (!values.organization.trim()) {
      next.organization = "Please enter your school or organization.";
    }
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!interestTypes.includes(values.interest as InterestType)) {
      next.interest = "Please choose an interest type.";
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
          Your school inquiry is complete. Please note that Fruiticana&rsquo;s
          contact inbox isn&rsquo;t connected yet, so this form doesn&rsquo;t
          deliver messages at the moment. Message delivery will be enabled once
          a verified business inbox is in place.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields({ ...emptyFields, interest: initialInterest });
            setSubmitted(false);
          }}
          className="mt-4 inline-flex min-h-11 items-center rounded-pill border border-green-deep/25 bg-white px-5 text-sm font-semibold text-green-deep hover:border-green-deep/50"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          required
          error={errors.name}
          value={fields.name}
          onChange={(value) => update("name", value)}
          autoComplete="name"
        />
        <Field
          id="organization"
          label="School / Organization"
          required
          error={errors.organization}
          value={fields.organization}
          onChange={(value) => update("organization", value)}
          autoComplete="organization"
        />
        <SelectField
          id="schoolType"
          label="School type"
          value={fields.schoolType}
          onChange={(value) => update("schoolType", value)}
          options={schoolTypes}
          placeholder="Select a type"
        />
        <SelectField
          id="role"
          label="Role"
          value={fields.role}
          onChange={(value) => update("role", value)}
          options={roles}
          placeholder="Select a role"
        />
        <Field
          id="city"
          label="City"
          value={fields.city}
          onChange={(value) => update("city", value)}
          autoComplete="address-level2"
        />
        <Field
          id="state"
          label="State"
          value={fields.state}
          onChange={(value) => update("state", value)}
          autoComplete="address-level1"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          error={errors.email}
          value={fields.email}
          onChange={(value) => update("email", value)}
          autoComplete="email"
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={fields.phone}
          onChange={(value) => update("phone", value)}
          autoComplete="tel"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          id="studentCount"
          label="Estimated number of students"
          value={fields.studentCount}
          onChange={(value) => update("studentCount", value)}
          options={studentRanges}
          placeholder="Select a range"
        />
        <SelectField
          id="interest"
          label="Interest type"
          required
          error={errors.interest}
          value={fields.interest}
          onChange={(value) => update("interest", value)}
          options={interestTypes}
        />
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
          Request Information
        </button>
        <p className="text-xs text-muted">
          <span className="text-strawberry">*</span> Required
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  required,
  error,
  type = "text",
  autoComplete,
}: {
  id: keyof Fields;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-green-deep">
        {label}{" "}
        {required ? (
          <span className="text-strawberry">*</span>
        ) : (
          <span className="font-medium text-muted">(optional)</span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-required={required ? true : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClasses, error && "border-strawberry")}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-strawberry">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
  error,
}: {
  id: keyof Fields;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-green-deep">
        {label}{" "}
        {required ? (
          <span className="text-strawberry">*</span>
        ) : (
          <span className="font-medium text-muted">(optional)</span>
        )}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-required={required ? true : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          fieldClasses,
          "appearance-none bg-white",
          error && "border-strawberry",
        )}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-strawberry">
          {error}
        </p>
      ) : null}
    </div>
  );
}
