"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const BULLETS = [
  "Responds in under 2 seconds",
  "Trained on your specific business data",
  "Works on WhatsApp, website, anywhere",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.55,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
});

export default function Demo() {
  return (
    <section id="demo" className="relative py-24 bg-[#0A0A0F]">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <p className="text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3">
          Live Demo
        </p>
        <h2
          className="text-4xl md:text-5xl font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          See It In Action
        </h2>
        <p className="text-white/50 text-lg mt-4">
          This is a real AI chatbot. Type anything.
        </p>
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto px-6 items-center">

        {/* LEFT */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h3
            {...fadeUp(0)}
            className="text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Try Our AI Live
          </motion.h3>

          <motion.ul {...fadeUp(0.1)} className="flex flex-col gap-4">
            {BULLETS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-white/70 text-base">
                <CheckCircle2 size={18} color="#22C55E" className="shrink-0" />
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div
            {...fadeUp(0.2)}
            className="mt-8 p-5 rounded-xl bg-purple-500/10 border border-purple-500/20"
          >
            <p className="text-white/80 text-sm leading-relaxed">
              This same bot costs{" "}
              <span className="text-white font-semibold">₹14,999</span>. Most
              agencies charge{" "}
              <span className="text-white font-semibold">₹60,000+</span>
            </p>
          </motion.div>

          <motion.a
            {...fadeUp(0.3)}
            href="https://wa.me/918977241245?text=Hi%2C%20I%27m%20interested%20in%20Voxinta%27s%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center rounded-lg py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #6C63FF 0%, #8B5CF6 100%)",
            }}
          >
            Get This For Your Business
          </motion.a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
          }}
        >
          {/* Live indicator label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-white/50">Live Demo — Real AI</span>
          </div>

          {/* Chatbot iframe */}
          <iframe
            src="https://ai-rag-chatbot-saas.vercel.app"
            width="100%"
            height="480"
            className="rounded-2xl border border-white/10 overflow-hidden block"
            allow="microphone; camera; clipboard-write; encrypted-media; fullscreen"
            loading="lazy"
            title="Voxinta Live AI Demo"
          />
        </motion.div>
      </div>
    </section>
  );
}
