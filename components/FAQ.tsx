"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Do I need any technical knowledge?",
    a: "None at all. We handle design, development, and deployment end to end. You just tell us what your business needs.",
  },
  {
    q: "How long does the build take?",
    a: "Websites take 5–7 days. Chatbots 7–10 days. AI Voice Agents 2–3 weeks. You'll always see a working demo before final delivery.",
  },
  {
    q: "What if I'm not satisfied with the result?",
    a: "We offer revisions until you're happy. Since you pay only 50% upfront, you're never fully committed until the product delivers exactly what you need.",
  },
  {
    q: "Can I upgrade later — add a chatbot after getting a website?",
    a: "Absolutely. Everything we build is modular. Add services anytime at a discounted upgrade price.",
  },
  {
    q: "What support do I get after delivery?",
    a: "30 days of free support is included in every project. After that, affordable monthly retainer plans are available.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.08] py-5">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={[
            "text-base font-semibold transition-colors duration-200",
            isOpen ? "text-white" : "text-white hover:text-purple-300",
          ].join(" ")}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="shrink-0 text-white/40"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm leading-relaxed text-white/55">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-[#0A0A0F]">
      {/* Header */}
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      >
        <p className="text-xs tracking-[0.3em] text-purple-400 uppercase mb-3">
          FAQ
        </p>
        <h2
          className="text-4xl font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Common Questions
        </h2>
        <p className="text-white/50 text-lg mt-4">
          Everything you need to know before getting started.
        </p>
      </motion.div>

      {/* Accordion */}
      <motion.div
        className="max-w-3xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      >
        {FAQS.map((item, i) => (
          <FAQItem
            key={item.q}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </motion.div>
    </section>
  );
}
