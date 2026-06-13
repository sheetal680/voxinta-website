"use client";

import { motion, type Transition } from "framer-motion";
import { PlayCircle, CheckCircle2 } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] satisfies Transition["ease"];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease } satisfies Transition,
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay, ease } satisfies Transition,
});

const TRUST_ITEMS = [
  "Working demo before you pay",
  "30-day support included",
  "50% advance only",
];

function FloatBlob({ className, duration, delay = 0 }: { className: string; duration: number; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-32 pb-20 text-center">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* Animated gradient blobs */}
      <FloatBlob className="w-96 h-96 bg-purple-600/15 top-20 left-1/4 -translate-x-1/2" duration={6} />
      <FloatBlob className="w-80 h-80 bg-cyan-500/10 top-40 right-1/4 translate-x-1/2" duration={8} delay={1} />
      <FloatBlob className="w-64 h-64 bg-purple-400/8 bottom-20 left-1/3" duration={10} delay={2} />

      {/* Radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,111,255,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6">

        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-block border border-purple-500/30 bg-purple-500/8 text-purple-300 text-xs px-4 py-1.5 rounded-full tracking-wide">
            AI-Powered Business Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-6 text-5xl md:text-8xl font-black leading-tight tracking-tight text-[#F8F8FF]"
          style={{ fontFamily: "var(--font-space-grotesk)", fontFeatureSettings: "'ss01'" }}
          {...fadeUp(0.1)}
        >
          We Build{" "}
          <span
            className="bg-clip-text text-transparent shimmer-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #7C6FFF, #06B6D4, #7C6FFF)",
              backgroundSize: "200% auto",
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
          className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/55"
          {...fadeUp(0.2)}
        >
          From AI voice agents that answer calls, to chatbots that convert
          leads — Voxinta delivers intelligent automation for growing businesses
          across India.
        </motion.p>

        {/* CTA button */}
        <motion.div className="mt-10 flex justify-center" {...fadeUp(0.3)}>
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 rounded-lg px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #7C6FFF 0%, #06B6D4 100%)",
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
