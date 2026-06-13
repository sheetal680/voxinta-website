"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/918977241245?text=Hi%2C%20I%27m%20interested%20in%20Voxinta%27s%20services";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050507]">
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        <h2
          className="text-4xl md:text-5xl font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Ready to Automate Your Business?
        </h2>
        <p className="text-white/50 text-lg mt-4 mb-8">
          Most of our clients see results within the first 30 days.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-lg bg-[#22C55E] px-8 py-4 font-semibold text-white transition-colors duration-200 hover:bg-[#16A34A]"
        >
          <MessageCircle size={18} />
          WhatsApp Us Now
        </a>
      </motion.div>
    </section>
  );
}
