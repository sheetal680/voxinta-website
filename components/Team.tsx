"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};


export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#050507]">
      {/* Header */}
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        <p className="text-xs tracking-[0.4em] text-purple-400 uppercase mb-3">
          The Team
        </p>
        <h2
          className="text-4xl font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          The People Behind Voxinta
        </h2>
        <p className="text-white/55 text-lg mt-4">
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
        {/* Sheetal — clickable */}
        <motion.a
          variants={cardVariant}
          href="https://shivani-portfolio-gamma-tawny.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.02,
            borderColor: "rgba(168,139,250,0.4)",
            boxShadow: "0 0 0 1px rgba(124,111,255,0.3), 0 20px 60px rgba(124,111,255,0.08)",
            transition: { duration: 0.2 },
          }}
          className="flex w-64 flex-col items-center rounded-2xl border border-white/[0.06] bg-[#0C0C12] p-8 text-center cursor-pointer"
        >
          <img
            src="/team/sheetal.jpeg"
            alt="Sheetal"
            className="w-28 h-28 rounded-full object-cover object-top border-2 border-purple-500/40"
          />
          <p
            className="mt-5 text-xl font-bold text-white flex items-center gap-1.5 justify-center"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Sheetal
            <ExternalLink size={14} className="text-white/40" />
          </p>
          <p className="mt-1 text-sm text-purple-400">Founder & CEO</p>
        </motion.a>

        {/* Mohan — clickable */}
        <motion.a
          variants={cardVariant}
          href="https://mohan-portfolio26.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.02,
            borderColor: "rgba(168,139,250,0.4)",
            boxShadow: "0 0 0 1px rgba(124,111,255,0.3), 0 20px 60px rgba(124,111,255,0.08)",
            transition: { duration: 0.2 },
          }}
          className="flex w-64 flex-col items-center rounded-2xl border border-white/[0.06] bg-[#0C0C12] p-8 text-center cursor-pointer"
        >
          <img
            src="/team/mohan.jpeg"
            alt="Mohan"
            className="w-28 h-28 rounded-full object-cover object-top border-2 border-purple-500/40"
          />
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
