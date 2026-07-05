"use client";

import Link from "next/link";
import { useState } from "react";
import { Linkedin, Twitter, Github, Instagram, ArrowRight } from "lucide-react";
import Container from "./Container";
import { AGENCY_NAME, SERVICES, OFFICE } from "@/data/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal-400 font-display text-sm font-bold text-white">
                {AGENCY_NAME.charAt(0)}
              </span>
              <span className="font-display text-lg font-semibold text-ink-100">
                {AGENCY_NAME}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              We build world-class software, mobile apps, AI solutions, and
              digital products for startups and enterprises.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-colors hover:border-white/25 hover:text-ink-100"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="mono-tag text-xs font-medium uppercase tracking-widest text-ink-400">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {SERVICES.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services#${s.slug}`}
                      className="text-sm text-ink-300 transition-colors hover:text-ink-100"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mono-tag text-xs font-medium uppercase tracking-widest text-ink-400">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Process", href: "/process" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-300 transition-colors hover:text-ink-100"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mono-tag text-xs font-medium uppercase tracking-widest text-ink-400">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-sm text-ink-300 transition-colors hover:text-ink-100"
                      >
                        {l}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mono-tag text-xs font-medium uppercase tracking-widest text-ink-400">
              Stay in the loop
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-300">
              Product engineering insights, no more than once a month.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              {subscribed ? (
                <p className="text-sm text-signal-400">
                  You&apos;re subscribed. Thank you.
                </p>
              ) : (
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 pl-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-transparent text-sm text-ink-100 placeholder:text-ink-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal-400 text-white transition-colors hover:bg-signal-500"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </form>
            <div className="mt-6 space-y-1 text-sm text-ink-300">
              <p>{OFFICE.email}</p>
              <p>{OFFICE.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {AGENCY_NAME}. All rights reserved.
          </p>
          <p className="mono-tag text-xs text-ink-500">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
