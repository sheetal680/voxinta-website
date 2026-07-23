"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const WA_LINK =
  "https://wa.me/918977241245?text=Hi%2C%20I%27m%20interested%20in%20Voxinta%27s%20services";

const FEATURES = [
  "Smart template automation — auto-fills [PLACEHOLDER] tokens from client data",
  "Client & case management with 25+ Indian courts covered",
  "In-browser rich-text editor — edit before exporting",
  "One-click export as PDF or Word document",
  "Role-based access — Admin portal + Advocate portal",
  "Associate collaboration — include co-advocates automatically",
];

const TECH_STACK = ["React 19", "Vite", "Supabase", "TipTap", "Tailwind CSS", "Vercel"];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 bg-[#0A0A0F]"
    >
      {/* Background decoration */}
      <span
        className="absolute -top-8 right-0 text-[200px] font-black text-white/[0.02] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        01
      </span>

      {/* Header */}
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        <p className="text-xs tracking-[0.3em] text-purple-400 uppercase mb-3">
          Our Work
        </p>
        <h2
          className="text-4xl md:text-5xl font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Projects We&apos;ve Built
        </h2>
        <p className="text-white/50 text-lg mt-4">
          Real products. Real businesses. Real impact.
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        <motion.div
          whileHover={{
            borderColor: "rgba(168,139,250,0.2)",
            transition: { duration: 0.2 },
          }}
          className="bg-[#0C0C12] border border-white/[0.08] rounded-2xl overflow-hidden"
        >
          {/* Top section */}
          <div className="p-8 md:p-10">
            <span className="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full">
              Arshith Technologies Pvt Ltd
            </span>
            <h3
              className="text-3xl font-black text-white mt-3"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              LegalEase
            </h3>
            <p className="text-purple-400 text-sm font-medium mt-1">
              Legal Document Automation Platform
            </p>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mt-4">
              A two-portal web application that lets advocates draft court-ready
              legal documents in seconds — auto-filling firm-approved templates
              with client, case, and court data. Cuts document preparation from
              hours to seconds.
            </p>
          </div>

          {/* Features grid */}
          <div className="px-8 pb-8 md:px-10 md:pb-10">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">
              Key Features
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {FEATURES.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Zap
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#7C6FFF" }}
                    strokeWidth={1.75}
                  />
                  <span className="text-white/70 text-sm leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.06] p-8 md:p-10 flex justify-between items-center flex-wrap gap-6">
            {/* Tech stack */}
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-3">
                Built With
              </p>
              <div className="flex flex-row gap-2 flex-wrap">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/5 border border-white/10 text-white/60 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact stat */}
            <div className="text-right">
              <p
                className="text-2xl font-black text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Hours → Seconds
              </p>
              <p className="text-xs text-white/40 mt-1">
                Document drafting time reduced
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 px-6">
        <p className="text-white/40 text-sm mb-4">Have a project in mind?</p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #7C6FFF 0%, #06B6D4 100%)" }}
        >
          Let&apos;s Build It Together →
        </a>
      </div>
    </section>
  );
}
