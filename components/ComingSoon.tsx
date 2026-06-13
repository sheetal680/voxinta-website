"use client";

import { motion } from "framer-motion";
import { Brain, type LucideIcon } from "lucide-react";

const WA_LINK =
  "https://wa.me/918977241245?text=Hi%2C%20I%27m%20interested%20in%20Voxinta%27s%20services";

interface Product {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  badge: string;
}

const LLM_CARD: Product = {
  icon: Brain,
  iconColor: "#6C63FF",
  title: "Voxinta LLM",
  description:
    "Our own fine-tuned language model optimized for Indian businesses and languages.",
  badge: "In Development",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function ComingSoon() {
  const Icon = LLM_CARD.icon;

  return (
    <section id="coming-soon" className="py-24 bg-[#050507]">
      {/* Header */}
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        <p className="text-xs tracking-[0.4em] text-purple-400 uppercase mb-3">
          What&apos;s Next
        </p>
        <h2
          className="text-4xl md:text-5xl font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          We&apos;re Just Getting Started
        </h2>
        <p className="text-white/55 text-lg mt-4">
          Voxinta is building the next generation of AI products.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6"
      >
        {/* Voxinta LLM card */}
        <motion.div
          variants={cardVariant}
          whileHover={{
            borderColor: "rgba(255,255,255,0.15)",
            borderStyle: "solid",
            transition: { duration: 0.2 },
          }}
          className="relative bg-[#0C0C12] border border-dashed border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5 opacity-90"
        >
          <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/10">
            {LLM_CARD.badge}
          </span>
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
            style={{ backgroundColor: `${LLM_CARD.iconColor}26` }}
          >
            <Icon size={22} color={LLM_CARD.iconColor} strokeWidth={1.75} />
          </div>
          <div className="flex flex-col gap-2">
            <h3
              className="text-lg font-bold text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {LLM_CARD.title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {LLM_CARD.description}
            </p>
          </div>
        </motion.div>

        {/* Mystery card */}
        <motion.div
          variants={cardVariant}
          whileHover={{
            borderColor: "rgba(255,255,255,0.15)",
            borderStyle: "solid",
            transition: { duration: 0.2 },
          }}
          className="relative bg-[#0C0C12] border border-dashed border-white/[0.08] rounded-2xl p-7 flex flex-col items-center justify-center text-center gap-4 overflow-hidden min-h-[200px]"
        >
          {/* Pulse glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(108,99,255,0.07) 0%, transparent 70%)",
              animation: "pulse 3s ease-in-out infinite",
            }}
          />
          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 1; }
            }
          `}</style>

          <span className="relative text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/10">
            Top Secret 🔒
          </span>
          <h3
            className="relative text-xl font-bold text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Something Big Is Coming
          </h3>
          <p className="relative text-sm text-white/40 leading-relaxed max-w-xs">
            We&apos;re working on something that will change how Indian businesses use AI. No spoilers yet.
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom CTA */}
      <p className="mt-12 text-center text-sm text-white/40">
        Want early access?{" "}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2"
        >
          Join the waitlist
        </a>
      </p>
    </section>
  );
}
