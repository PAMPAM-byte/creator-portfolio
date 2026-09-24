"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { validateContact } from "@/lib/validation";

const empty = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [note, setNote] = useState("");

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      setNote("Check the highlighted fields.");
      return;
    }

    setStatus("sending");
    setNote("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = await response.json();

      if (response.ok && payload.ok) {
        setStatus("sent");
        setNote("Message sent. I’ll get back to you soon.");
        setValues(empty);
        return;
      }

      if (payload.code === "UNCONFIGURED") {
        const subject = encodeURIComponent(
          `Video enquiry — ${values.projectType}`,
        );
        const body = encodeURIComponent(
          `${values.message}\n\n${values.name}\n${values.email}\nBudget: ${values.budget}`,
        );
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
        setStatus("fallback");
        setNote(
          "The form is not connected yet, so your email app will open instead.",
        );
        return;
      }

      setStatus("error");
      setNote(
        payload.message ||
          "The message did not send. Try again, or email me directly.",
      );
    } catch {
      setStatus("error");
      setNote("The message did not send. Check your connection and try again.");
    }
  }

  const busy = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>

      <Field
        id="name"
        label="Name"
        error={errors.name}
        value={values.name}
        onChange={(value) => update("name", value)}
        autoComplete="name"
      />
      <Field
        id="email"
        label="Email"
        type="email"
        error={errors.email}
        value={values.email}
        onChange={(value) => update("email", value)}
        autoComplete="email"
      />
      <Field
        id="projectType"
        label="Project type"
        as="select"
        error={errors.projectType}
        value={values.projectType}
        onChange={(value) => update("projectType", value)}
      >
        <option value="">Select a type</option>
        {site.form.projectTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Field>
      <Field
        id="budget"
        label="Budget"
        type="text"
        placeholder="Enter your budget"
        error={errors.budget}
        value={values.budget}
        onChange={(value) => update("budget", value)}
      />
      <Field
        id="message"
        label="Message"
        as="textarea"
        error={errors.message}
        value={values.message}
        onChange={(value) => update("message", value)}
      />

      {note ? (
        <p
          role="status"
          className={`text-sm ${status === "sent" ? "text-mark" : "text-mute"}`}
        >
          {note}
        </p>
      ) : null}

      <button type="submit" disabled={busy} className="btn-primary">
        {busy ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  value,
  onChange,
  type = "text",
  as = "input",
  placeholder,
  children,
  autoComplete,
}) {
  const describedBy = error ? `${id}-error` : undefined;
  const classes =
    "mt-3 w-full border-0 border-b bg-transparent py-3 text-[16px] text-ink outline-none transition-colors duration-300 placeholder:text-mute " +
    (error
      ? "border-ink"
      : "border-line focus:border-ink");

  return (
    <div>
      <label htmlFor={id} className="block text-sm text-mute">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={classes + " resize-none"}
        />
      ) : as === "select" ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={classes}
        >
          {children}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={classes}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-ink">
          {error}
        </p>
      ) : null}
    </div>
  );
}
