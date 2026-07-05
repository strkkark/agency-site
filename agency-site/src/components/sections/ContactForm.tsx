"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const BUDGETS = ["< €10,000", "€10,000 – €30,000", "€30,000 – €75,000", "€75,000+"];
const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "6+ months"];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-400 focus:border-signal-400/50 focus:outline-none focus:ring-1 focus:ring-signal-400/50 transition-colors";

const labelClass = "mb-2 block text-xs font-medium uppercase tracking-widest text-ink-400 mono-tag";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-ink-800/50 p-12 text-center">
        <CheckCircle2 className="h-10 w-10 text-signal-400" />
        <h3 className="text-xl font-semibold text-ink-100">
          Thanks — your message is in.
        </h3>
        <p className="max-w-sm text-sm text-ink-300">
          A member of our team will reach out within one business day to
          schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Name</label>
          <input id="name" required type="text" placeholder="Jane Doe" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">Company</label>
          <input id="company" type="text" placeholder="Acme Inc." className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" required type="email" placeholder="jane@acme.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Budget</label>
        <div className="flex flex-wrap gap-2">
          {BUDGETS.map((b) => (
            <button
              type="button"
              key={b}
              onClick={() => setBudget(b)}
              className={`mono-tag rounded-full border px-4 py-2 text-xs transition-colors ${
                budget === b
                  ? "border-signal-400 bg-signal-400/10 text-signal-400"
                  : "border-white/10 text-ink-300 hover:border-white/25"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>Timeline</label>
        <div className="flex flex-wrap gap-2">
          {TIMELINES.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setTimeline(t)}
              className={`mono-tag rounded-full border px-4 py-2 text-xs transition-colors ${
                timeline === t
                  ? "border-signal-400 bg-signal-400/10 text-signal-400"
                  : "border-white/10 text-ink-300 hover:border-white/25"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="description">Project Description</label>
        <textarea
          id="description"
          required
          rows={5}
          placeholder="Tell us what you're building..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-signal-400 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-signal-500 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
