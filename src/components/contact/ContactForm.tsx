"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
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
  school: string;
  district: string;
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
  school: "",
  district: "",
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

const fieldMaxLength: Partial<Record<keyof Fields, number>> = {
  name: 120,
  school: 200,
  district: 200,
  city: 100,
  state: 80,
  email: 254,
  phone: 40,
  message: 4000,
  website: 200,
};

function trimFields(values: Fields): Fields {
  return {
    ...values,
    name: values.name.trim(),
    school: values.school.trim(),
    district: values.district.trim(),
    city: values.city.trim(),
    state: values.state.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    message: values.message.trim(),
    website: values.website.trim(),
  };
}

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
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(values: Fields): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.school.trim()) {
      next.school = "Please enter your school.";
    }
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.role) next.role = "Please choose your role.";
    if (!values.city.trim()) next.city = "Please enter a city.";
    if (!values.state.trim()) next.state = "Please enter a state.";
    if (!interestTypes.includes(values.interest as InterestType)) {
      next.interest = "Please choose a reason for inquiry.";
    }
    if (values.message.trim() && values.message.trim().length < 10) {
      next.message = "Please add a little more detail (at least 10 characters).";
    }
    return next;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const values = trimFields(fields);
    setFields(values);

    if (values.website) {
      setSubmitted(true);
      return;
    }

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitting(false);
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
          Your school inquiry is complete on this page. This form does not send
          messages yet, so please email{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="font-semibold text-green-deep underline-offset-2 hover:underline"
          >
            {site.contact.email}
          </a>{" "}
          or call{" "}
          <a
            href={`tel:+1${site.contact.phone?.replace(/\D/g, "") ?? ""}`}
            className="font-semibold text-green-deep underline-offset-2 hover:underline"
          >
            {site.contact.phone}
          </a>{" "}
          to reach Fruiticana directly.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields({ ...emptyFields, interest: initialInterest });
            setSubmitting(false);
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
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-5 rounded-xl2 border border-line bg-white p-5 sm:p-8"
    >
      <p className="text-base leading-relaxed text-muted">
        Start a conversation about your school. A short note is enough.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          required
          error={errors.name}
          value={fields.name}
          onChange={(value) => update("name", value)}
          autoComplete="name"
          maxLength={fieldMaxLength.name}
        />
        <Field
          id="school"
          label="School / Organization"
          required
          error={errors.school}
          value={fields.school}
          onChange={(value) => update("school", value)}
          autoComplete="organization"
          maxLength={fieldMaxLength.school}
        />
        <Field
          id="district"
          label="School district"
          value={fields.district}
          onChange={(value) => update("district", value)}
          maxLength={fieldMaxLength.district}
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
          required
          error={errors.role}
          value={fields.role}
          onChange={(value) => update("role", value)}
          options={roles}
          placeholder="Select a role"
        />
        <Field
          id="city"
          label="City"
          required
          error={errors.city}
          value={fields.city}
          onChange={(value) => update("city", value)}
          autoComplete="address-level2"
          maxLength={fieldMaxLength.city}
        />
        <Field
          id="state"
          label="State"
          required
          error={errors.state}
          value={fields.state}
          onChange={(value) => update("state", value)}
          autoComplete="address-level1"
          maxLength={fieldMaxLength.state}
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
          maxLength={fieldMaxLength.email}
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={fields.phone}
          onChange={(value) => update("phone", value)}
          autoComplete="tel"
          maxLength={fieldMaxLength.phone}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          id="studentCount"
          label="Approximate number of students"
          value={fields.studentCount}
          onChange={(value) => update("studentCount", value)}
          options={studentRanges}
          placeholder="Select a range"
        />
        <SelectField
          id="interest"
          label="Reason for inquiry"
          required
          error={errors.interest}
          value={fields.interest}
          onChange={(value) => update("interest", value)}
          options={interestTypes}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-green-deep">
          Message / Questions
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          maxLength={fieldMaxLength.message}
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
          maxLength={fieldMaxLength.website}
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting || undefined}
          className="inline-flex min-h-11 items-center justify-center rounded-pill bg-green-deep px-6 text-sm font-semibold text-cream transition-colors hover:bg-green-deep-80 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Request School Information
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
  maxLength,
}: {
  id: keyof Fields;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
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
        maxLength={maxLength}
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
