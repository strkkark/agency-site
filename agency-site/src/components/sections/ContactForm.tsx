"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const BUDGETS = [
  "< €10,000",
  "€10,000 – €30,000",
  "€30,000 – €75,000",
  "€75,000+",
];

const TIMELINES = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "6+ months",
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-400 focus:border-signal-400/50 focus:outline-none focus:ring-1 focus:ring-signal-400/50 transition-colors";

const labelClass =
  "mb-2 block text-xs font-medium uppercase tracking-widest text-ink-400 mono-tag";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      budget,
      timeline,
      description: formData.get("description"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "The message could not be sent."
        );
      }

      setSubmitted(true);

      form.reset();
      setBudget("");
      setTimeline("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "The message could not be sent."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-ink-800/50 p-12 text-center">
        <CheckCircle2 className="h-10 w-10 text-signal-400" />

        <h3 className="text-xl font-semibold text-ink-100">
          Thanks — your message is in.
        </h3>

        <p className="max-w-sm text-sm text-ink-300">
          A member of our team will reach out within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>

          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Inc."
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>

          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+49 123 456789"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Budget
        </label>

        <div className="flex flex-wrap gap-2">
          {BUDGETS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setBudget(item)}
              className={`mono-tag rounded-full border px-4 py-2 text-xs transition-colors ${
                budget === item
                  ? "border-signal-400 bg-signal-400/10 text-signal-400"
                  : "border-white/10 text-ink-300 hover:border-white/25"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

          <div>
        <label className={labelClass}>
          Timeline
        </label>

        <div className="flex flex-wrap gap-2">
          {TIMELINES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTimeline(item)}
              className={`mono-tag rounded-full border px-4 py-2 text-xs transition-colors ${
                timeline === item
                  ? "border-signal-400 bg-signal-400/10 text-signal-400"
                  : "border-white/10 text-ink-300 hover:border-white/25"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          className={labelClass}
          htmlFor="description"
        >
          Project Description
        </label>

        <textarea
          id="description"
          name="description"
          required
          rows={6}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p
          className="text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-signal-400 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-signal-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
