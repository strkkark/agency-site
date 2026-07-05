"use client";

import { motion } from "framer-motion";
import Container from "../Container";
import Button from "../Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div className="absolute inset-0 bg-grid-pattern bg-grid grid-fade-mask" />
      <div className="absolute inset-0 bg-radial-fade" />

      <Container className="relative">
        <div className="flex flex-col items-start gap-8 lg:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mono-tag flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-ink-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
            Available for new projects — Q3 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-100 sm:text-5xl lg:text-7xl"
          >
            We Build Apps, Software &amp; AI Solutions That Scale Businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl text-balance text-lg leading-relaxed text-ink-300 sm:text-xl"
          >
            We help startups, growing businesses and enterprises transform
            ideas into powerful digital products through custom software
            development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact" size="lg" showArrow>
              Book a Free Consultation
            </Button>
            <Button href="/portfolio" size="lg" variant="ghost">
              View Our Work
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
