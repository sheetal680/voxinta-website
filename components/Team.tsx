"use client";

import { motion } from "framer-motion";

const MEMBERS = [
  { initials: "S", name: "Sheetal", role: "CEO & Co-Founder" },
  { initials: "C", name: "Co-Founder", role: "Co-Founder" },
];

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
        {MEMBERS.map((member) => (
          <motion.div
            key={member.initials}
            variants={cardVariant}
            whileHover={{
              borderColor: "rgba(168,139,250,0.3)",
              transition: { duration: 0.2 },
            }}
            className="flex w-64 flex-col items-center rounded-2xl border border-white/[0.08] bg-[#0F0F14] p-8 text-center transition-colors duration-200"
          >
            {/* Avatar */}
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-purple-500/40 bg-purple-500/20">
              <span className="text-2xl font-bold text-purple-300">
                {member.initials}
              </span>
            </div>

            {/* Name */}
            <p
              className="mt-5 text-xl font-bold text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {member.name}
            </p>

            {/* Role */}
            <p className="mt-1 text-sm text-purple-400">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
