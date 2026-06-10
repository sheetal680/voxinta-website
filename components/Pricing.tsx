"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WA_LINK =
  "https://wa.me/918977241245?text=Hi%2C%20I%27m%20interested%20in%20Voxinta%27s%20services";

interface Plan {
  label: string;
  price: string;
  bestFor: string;
  features: string[];
  cta: string;
  featured: boolean;
  badge?: string;
}

const PLANS: Plan[] = [
  {
    label: "Starter",
    price: "₹15,000",
    bestFor: "New businesses needing a web presence",
    features: [
      "Modern business website",
      "Mobile responsive design",
      "WhatsApp & contact form",
      "SEO basics included",
      "Delivered in 7 days",
      "1 revision round",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    label: "Growth",
    price: "₹35,000",
    bestFor: "Businesses wanting to automate lead capture",
    features: [
      "Everything in Starter",
      "AI Chatbot trained on your data",
      "Lead capture & email alerts",
      "WhatsApp bot integration",
      "30-day support included",
      "2 revision rounds",
    ],
    cta: "Get Started",
    featured: true,
    badge: "Most Popular",
  },
  {
    label: "Pro",
    price: "₹80,000",
    bestFor: "Businesses ready for full automation",
    features: [
      "Everything in Growth",
      "AI Voice Agent (answers calls)",
      "Full automation pipeline",
      "Priority support",
      "Monthly retainer available",
      "Unlimited revisions",
    ],
    cta: "Get Started",
    featured: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

function PricingCard({ plan }: { plan: Plan }) {
  const [rupee, ...rest] = plan.price.split(",").join("").split("");
  const amount = rest.join("");

  return (
    <motion.div
      variants={cardVariant}
      className={[
        "relative flex flex-col rounded-2xl p-8",
        plan.featured
          ? "border border-purple-500/40 bg-[#0F0F14] md:-mt-4 md:mb-4"
          : "border border-white/[0.08] bg-[#0F0F14]",
      ].join(" ")}
      style={
        plan.featured
          ? { boxShadow: "0 0 40px rgba(108,99,255,0.12)" }
          : undefined
      }
    >
      {/* Most Popular badge */}
      {plan.badge && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-semibold text-white"
          style={{
            background: "linear-gradient(135deg, #6C63FF 0%, #8B5CF6 100%)",
          }}
        >
          {plan.badge}
        </span>
      )}

      {/* Label */}
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/50">
        {plan.label}
      </p>

      {/* Price */}
      <div className="mb-1 flex items-end gap-1">
        <span className="text-2xl font-black text-white">₹</span>
        <span
          className="text-5xl font-black leading-none text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {amount}
        </span>
      </div>

      {/* Best for */}
      <p className="mb-6 pb-6 text-xs text-white/40 border-b border-white/[0.08]">
        {plan.bestFor}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-white/70">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0"
              color={plan.featured ? "#A78BFA" : "rgba(255,255,255,0.3)"}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-8">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "flex w-full items-center justify-center rounded-lg py-3 text-base font-semibold text-white transition-opacity hover:opacity-90",
            plan.featured ? "" : "border border-white/20 bg-transparent hover:bg-white/5",
          ].join(" ")}
          style={
            plan.featured
              ? { background: "linear-gradient(135deg, #6C63FF 0%, #8B5CF6 100%)" }
              : undefined
          }
        >
          {plan.cta}
        </a>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#07070A]">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <p className="text-xs tracking-[0.3em] text-purple-400 uppercase mb-3">
          Pricing
        </p>
        <h2
          className="text-4xl md:text-5xl font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Clear Pricing. No Surprises.
        </h2>
        <p className="text-white/50 text-lg mt-4">
          Pay 50% upfront, 50% after delivery. Always.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 items-start"
      >
        {PLANS.map((plan) => (
          <PricingCard key={plan.label} plan={plan} />
        ))}
      </motion.div>

      {/* Bottom note */}
      <p className="mt-12 text-center text-sm text-white/40">
        Custom enterprise packages available —{" "}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2"
        >
          WhatsApp us for a quote
        </a>
      </p>
    </section>
  );
}
