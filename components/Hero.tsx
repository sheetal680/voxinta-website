"use client";

import { motion, type Transition } from "framer-motion";
import { PlayCircle, CheckCircle2 } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] satisfies Transition["ease"];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease } satisfies Transition,
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay, ease } satisfies Transition,
});

const TRUST_ITEMS = [
  "Working demo before you pay",
  "30-day support included",
  "50% advance only",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-32 pb-20 text-center">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#07070A]" />

      {/* Radial gradient blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(108,99,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6">

        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-block border border-purple-500/40 bg-purple-500/10 text-purple-300 text-xs px-4 py-1.5 rounded-full">
            AI-Powered Business Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-6 text-5xl md:text-7xl font-black leading-tight tracking-tight text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          {...fadeUp(0.1)}
        >
          We Build{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #6C63FF, #00D4FF)",
            }}
          >
            AI
          </span>{" "}
          That Works
          <br />
          For Your Business
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/60"
          {...fadeUp(0.2)}
        >
          From AI voice agents that answer calls, to chatbots that convert
          leads — Voxinta delivers intelligent automation for growing businesses
          across India.
        </motion.p>

        {/* CTA button */}
        <motion.div
          className="mt-10 flex justify-center"
          {...fadeUp(0.3)}
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 rounded-lg px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #6C63FF 0%, #8B5CF6 100%)",
            }}
          >
            <PlayCircle size={18} />
            See Live Demo
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-5"
          {...fadeIn(0.4)}
        >
          {TRUST_ITEMS.map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-sm text-white/40">
              <CheckCircle2 size={14} color="#22C55E" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
