"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

function Avatar({ initial }: { initial: string }) {
  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-purple-500/40 bg-purple-500/20">
      <span className="text-2xl font-bold text-purple-300">{initial}</span>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#07070A]">
      {/* Header */}
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      >
        <p className="text-xs tracking-[0.3em] text-purple-400 uppercase mb-3">
          The Team
        </p>
        <h2
          className="text-4xl font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          The People Behind Voxinta
        </h2>
        <p className="text-white/50 text-lg mt-4">
          Young builders obsessed with AI and business automation.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-wrap justify-center gap-8 px-6"
      >
        {/* Sheetal — not clickable */}
        <motion.div
          variants={cardVariant}
          className="flex w-64 flex-col items-center rounded-2xl border border-white/[0.08] bg-[#0F0F14] p-8 text-center"
        >
          <Avatar initial="S" />
          <p
            className="mt-5 text-xl font-bold text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Sheetal
          </p>
          <p className="mt-1 text-sm text-purple-400">CEO & Co-Founder</p>
          <p className="mt-2 text-xs text-white/25 italic">Portfolio coming soon</p>
        </motion.div>

        {/* Mohan — clickable */}
        <motion.a
          variants={cardVariant}
          href="https://mohan-portfolio26.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.02,
            borderColor: "rgba(168,139,250,0.4)",
            transition: { duration: 0.2 },
          }}
          className="flex w-64 flex-col items-center rounded-2xl border border-white/[0.08] bg-[#0F0F14] p-8 text-center cursor-pointer"
        >
          <Avatar initial="M" />
          <p
            className="mt-5 text-xl font-bold text-white flex items-center gap-1.5 justify-center"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Mohan
            <ExternalLink size={14} className="text-white/40" />
          </p>
          <p className="mt-1 text-sm text-purple-400">Co-Founder</p>
        </motion.a>
      </motion.div>
    </section>
  );
}
