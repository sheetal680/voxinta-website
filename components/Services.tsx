"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Monitor, Database, Rocket, ShoppingBag, TrendingUp, Headphones, Cpu, type LucideIcon } from "lucide-react";

const WA_BASE = "https://wa.me/918977241245?text=";

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const INDIA_STARTER = [
  {
    icon: MessageSquare,
    iconColor: "#06B6D4",
    tag: "Most Popular",
    tagStyle: "cyan" as const,
    title: "AI Chatbot",
    description:
      "24/7 customer support trained on your exact business data. Answers like your best employee, never gets tired.",
    highlights: ["WhatsApp & website ready", "Trained on your data", "Lead capture built-in"],
    whatsappMessage: "Hi, I'm interested in AI Chatbot from Voxinta",
  },
  {
    icon: Monitor,
    iconColor: "#A78BFA",
    tag: undefined,
    tagStyle: undefined,
    title: "Business Website",
    description:
      "Fast, modern websites built to generate leads. Mobile-first, SEO-ready, delivered in 7 days.",
    highlights: ["7-day delivery", "SEO optimized", "Mobile-first design"],
    whatsappMessage: "Hi, I'm interested in Business Website from Voxinta",
  },
  {
    icon: Database,
    iconColor: "#34D399",
    tag: "Advanced",
    tagStyle: "green" as const,
    title: "RAG Knowledge Bot",
    description:
      "Upload your PDFs, documents, manuals. Your AI answers questions from them instantly and accurately.",
    highlights: ["Upload any document", "Instant accurate answers", "Embeddable anywhere"],
    whatsappMessage: "Hi, I'm interested in RAG Knowledge Bot from Voxinta",
  },
];

const INTL_CARDS = [
  {
    icon: Rocket,
    iconColor: "#7C6FFF",
    tag: "Top Pick",
    tagStyle: "purple" as const,
    title: "SaaS MVP Builds",
    description:
      "Early-stage founders paying for a working product, not just a website. We build your MVP fast, clean, and investor-ready.",
    highlights: ["Full-stack development", "Investor-ready UI", "Fast turnaround", "Scalable architecture"],
    whatsappMessage: "Hi, I'm interested in SaaS MVP Build from Voxinta",
  },
  {
    icon: ShoppingBag,
    iconColor: "#F59E0B",
    tag: undefined,
    tagStyle: undefined,
    title: "E-commerce AI Automation",
    description:
      "Shopify + personalized recommendations + abandoned-cart AI agent + inventory sync. Turn browsers into buyers automatically.",
    highlights: ["Shopify integration", "Abandoned cart recovery", "AI recommendations", "Inventory automation"],
    whatsappMessage: "Hi, I'm interested in E-commerce AI Automation from Voxinta",
  },
  {
    icon: TrendingUp,
    iconColor: "#10B981",
    tag: undefined,
    tagStyle: undefined,
    title: "CRM & Sales Stack Automation",
    description:
      "HubSpot or Salesforce + AI lead scoring + auto follow-up sequences. Your sales team closes more with less manual work.",
    highlights: ["HubSpot / Salesforce", "AI lead scoring", "Auto follow-up sequences", "Sales pipeline automation"],
    whatsappMessage: "Hi, I'm interested in CRM and Sales Stack Automation from Voxinta",
  },
  {
    icon: Headphones,
    iconColor: "#06B6D4",
    tag: undefined,
    tagStyle: undefined,
    title: "Multi-Agent Customer Support",
    description:
      "Chatbot + ticket routing + human handoff + analytics. For companies with real support volume who need AI that actually works.",
    highlights: ["AI chatbot + human handoff", "Ticket routing system", "Support analytics", "Scales with volume"],
    whatsappMessage: "Hi, I'm interested in Multi-Agent Customer Support System from Voxinta",
  },
  {
    icon: Cpu,
    iconColor: "#A78BFA",
    tag: undefined,
    tagStyle: undefined,
    title: "Internal AI Tools for Teams",
    description:
      "Data extraction, reporting automation, document processing — replaces a part-time hire. For small teams who want to do more with less.",
    highlights: ["Document processing AI", "Automated reporting", "Data extraction tools", "Replaces manual work"],
    whatsappMessage: "Hi, I'm interested in Internal AI Tools from Voxinta",
  },
];

const TAG_STYLES: Record<string, string> = {
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  green:  "bg-green-500/20  text-green-300  border-green-500/30",
  amber:  "bg-amber-500/20  text-amber-300  border-amber-500/30",
  cyan:   "bg-cyan-500/20   text-cyan-300   border-cyan-500/30",
};

interface ServiceCardProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  highlights: string[];
  tag?: string;
  tagStyle?: "purple" | "green" | "amber" | "cyan";
  whatsappMessage?: string;
}

function ServiceCard({
  icon: Icon,
  iconColor,
  title,
  description,
  highlights,
  tag,
  tagStyle = "purple",
  whatsappMessage,
}: ServiceCardProps) {
  const waMessage = whatsappMessage
    ?? `Hi, I'm interested in ${title} from Voxinta`;
  const waUrl = WA_BASE + encodeURIComponent(waMessage);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="relative bg-[#0C0C12] border border-white/[0.06] rounded-2xl p-7 flex flex-col h-full"
      style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,111,255,0.2)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(124,111,255,0.06)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Tag */}
      {tag && (
        <span
          className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full border ${TAG_STYLES[tagStyle]}`}
        >
          {tag}
        </span>
      )}

      {/* Icon */}
      <div
        className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
        style={{ backgroundColor: `${iconColor}26` }}
      >
        <Icon size={20} color={iconColor} strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold text-white mt-4 mb-2"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-white/55 text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>

      {/* Highlights */}
      <div className="flex flex-col gap-1.5 mb-5">
        {highlights.map((h) => (
          <div key={h} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60 shrink-0" />
            <span className="text-white/40 text-xs">{h}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => window.open(waUrl, "_blank", "noopener,noreferrer")}
        className="flex items-center gap-1 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors duration-200 w-fit"
      >
        Get a Quote <span aria-hidden="true">→</span>
      </button>
    </motion.div>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<"india" | "international">("india");

  const tabs = [
    { id: "india" as const, label: "🇮🇳 India" },
    { id: "international" as const, label: "🌍 International" },
  ];

  return (
    <section id="services" className="py-24 bg-[#07070A]">
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <p className="text-xs tracking-[0.3em] text-purple-400 uppercase mb-3">
          What We Build
        </p>
        <h2
          className="text-4xl md:text-5xl font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Services Built to Scale Your Business
        </h2>
        <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
          From starter solutions to enterprise automation — we build what your
          business actually needs.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex justify-center gap-3 mb-16 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={
              activeTab === tab.id
                ? "px-8 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200"
                : "bg-white/5 border border-white/10 text-white/50 px-8 py-3 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-white/10 hover:text-white/70"
            }
            style={
              activeTab === tab.id
                ? { background: "linear-gradient(to right, #7C6FFF, #06B6D4)" }
                : undefined
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="max-w-5xl mx-auto px-6"
        >
          {activeTab === "india" ? (
            <div className="max-w-6xl mx-auto">
              {/* Category 1 — Starter Solutions */}
              <div className="mb-16">
                <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-2">
                  Starter Solutions
                </p>
                <p className="text-white/40 text-sm mb-8">
                  Perfect starting point for businesses going digital
                </p>

                <motion.div
                  variants={gridContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                  {INDIA_STARTER.map((card) => (
                    <motion.div key={card.title} variants={gridItem}>
                      <ServiceCard {...card} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Category 2 — placeholder */}
              <div className="text-center text-white/20 text-sm py-8 border border-dashed border-white/[0.06] rounded-2xl">
                Enterprise solutions coming soon
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <p className="text-xs tracking-[0.3em] text-cyan-400 uppercase mb-2">
                International Services
              </p>
              <p className="text-white/40 text-sm mb-8">
                Serving startups and businesses in US, UK, Canada, and Australia
              </p>

              <motion.div
                variants={gridContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {INTL_CARDS.map((card) => (
                  <motion.div key={card.title} variants={gridItem}>
                    <ServiceCard {...card} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export { ServiceCard };
export type { ServiceCardProps };
