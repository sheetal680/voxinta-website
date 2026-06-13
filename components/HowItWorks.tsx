"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cpu, Rocket, type LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
}

const STATS = [
  { value: "100%", label: "Client Satisfaction Rate" },
  { value: "< 2 sec", label: "AI Response Time" },
  { value: "30 Days", label: "Free Support Included" },
  { value: "50%", label: "Pay Only Upfront" },
];

const STEPS: Step[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us Your Problem",
    text: "Book a free call or WhatsApp us. We understand your business, your customers, and what's costing you the most.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "We Build & Demo",
    text: "You see a working prototype before you commit. No surprises. No hidden charges. No risk.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go Live & Grow",
    text: "We deploy everything. 30 days free support included. Your AI works 24/7 from day one.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const stepVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-24 bg-[#050507]"
    >
      {/* Header */}
      <div className="text-center mb-20 px-6">
        <p className="text-xs tracking-[0.4em] text-purple-400 uppercase mb-3">
          The Process
        </p>
        <h2
          className="text-4xl md:text-5xl font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Simple Process. Real Results.
        </h2>
        <p className="text-white/55 text-lg mt-4">
          From first message to live AI — we make it seamless.
        </p>
      </div>

      {/* Stats bar */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6 mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#0C0C12] rounded-xl p-6 border border-white/[0.06] border-t-2 border-t-purple-500/50 flex flex-col items-center text-center"
          >
            <span
              className="text-3xl font-black text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {stat.value}
            </span>
            <span className="text-xs text-white/40 uppercase tracking-wide mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Steps */}
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Desktop connector line — sits at ~top-8 of the row */}
        <div
          className="hidden md:block absolute left-[calc(16.6%+1.75rem)] right-[calc(16.6%+1.75rem)] border-t border-dashed border-white/10"
          style={{ top: "3.25rem" }}
          aria-hidden="true"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-10 md:gap-0"
        >
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={stepVariant}
                className="relative flex flex-1 flex-col items-center text-center p-8"
              >
                {/* Watermark number */}
                <span
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-7xl font-black select-none pointer-events-none"
                  style={{ color: "rgba(255,255,255,0.04)" }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/20">
                  <Icon size={24} color="#A78BFA" strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-white mt-5 mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {step.title}
                </h3>

                {/* Text */}
                <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Trust note */}
      <p className="text-center text-white/30 text-sm mt-12 italic px-6">
        Trusted by businesses in Vijayawada, Hyderabad and beyond
      </p>
    </section>
  );
}
