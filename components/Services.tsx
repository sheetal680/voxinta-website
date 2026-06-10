"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, MessageSquare, Monitor, Database, Plus, X, CheckCircle2, type LucideIcon } from "lucide-react";

const WA_LINK = "https://wa.me/918977241245?text=Hi%2C%20I%27m%20interested%20in%20Voxinta%27s%20services";

interface ModalData {
  title: string;
  description: string;
  features: string[];
  price: string;
}

interface Service {
  icon: LucideIcon;
  iconColor: string;
  tag: string;
  title: string;
  description: string;
  price: string;
  featured: boolean;
  comingSoon?: boolean;
  modal?: ModalData;
}

const SERVICES: Service[] = [
  {
    icon: PhoneCall,
    iconColor: "#6C63FF",
    tag: "",
    title: "AI Voice Agent",
    description: "Answers calls, books appointments, handles queries — automatically. Your business never misses a customer again.",
    price: "Starting ₹20,000",
    featured: false,
    modal: {
      title: "AI Voice Agent",
      description: "Our AI Voice Agent answers incoming calls 24/7, books appointments, handles FAQs, and transfers to a human when needed. Never miss a lead again.",
      features: [
        "Answers calls automatically",
        "Books appointments",
        "Handles FAQs",
        "Transfers complex queries to humans",
        "Works in English, Hindi, Telugu",
      ],
      price: "Starting ₹20,000",
    },
  },
  {
    icon: MessageSquare,
    iconColor: "#00D4FF",
    tag: "Most Popular",
    title: "AI Chatbot",
    description: "24/7 customer support trained on your exact business data. Answers like your best employee, never gets tired.",
    price: "Starting ₹20,000",
    featured: true,
    modal: {
      title: "AI Chatbot",
      description: "A chatbot trained on your exact business data — your services, prices, policies. Deploy on your website or WhatsApp.",
      features: [
        "Trained on your documents & data",
        "Answers customer queries instantly",
        "Captures leads automatically",
        "Integrates with WhatsApp & website",
        "Dashboard to track conversations",
      ],
      price: "Starting ₹20,000",
    },
  },
  {
    icon: Monitor,
    iconColor: "#A78BFA",
    tag: "",
    title: "Business Website",
    description: "Fast, modern websites built to generate leads. Mobile-first, SEO-ready, delivered in 7 days.",
    price: "Starting ₹15,000",
    featured: false,
    modal: {
      title: "Business Website",
      description: "A fast, modern website built to generate leads and represent your brand professionally online.",
      features: [
        "Mobile-first responsive design",
        "SEO optimized",
        "Contact form + WhatsApp button",
        "Fast loading under 2 seconds",
        "Delivered in 7 days",
      ],
      price: "Starting ₹15,000",
    },
  },
  {
    icon: Database,
    iconColor: "#34D399",
    tag: "Advanced",
    title: "RAG Knowledge Bot",
    description: "Upload your PDFs, documents, manuals. Your AI answers questions from them instantly and accurately.",
    price: "Starting ₹25,000",
    featured: false,
    modal: {
      title: "RAG Knowledge Bot",
      description: "Upload your PDFs, documents, product manuals, or any content. Your AI answers questions from them instantly and accurately.",
      features: [
        "Upload any PDF or document",
        "Instant accurate answers",
        "Reduces support queries by 70%",
        "Can be embedded anywhere",
        "Learns from your content only",
      ],
      price: "Starting ₹25,000",
    },
  },
  {
    icon: Plus,
    iconColor: "#888899",
    tag: "Coming Soon",
    title: "More Services",
    description: "AI automation, workflow tools, and more solutions are on the way.",
    price: "",
    featured: false,
    comingSoon: true,
  },
];

const TAG_STYLES: Record<string, string> = {
  "Most Popular": "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  Advanced: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  "Coming Soon": "bg-white/5 text-white/40 border border-white/10",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

function ServiceModal({ data, onClose }: { data: ModalData; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-lg bg-[#0F0F14] border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          {/* Title */}
          <h3
            className="text-2xl font-bold text-white mb-3 pr-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {data.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed mb-6">{data.description}</p>

          {/* Features */}
          <ul className="flex flex-col gap-3 mb-6">
            {data.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-white/75">
                <CheckCircle2 size={16} color="#A78BFA" className="mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* Price */}
          <p className="text-base font-bold text-white mb-5">{data.price}</p>

          {/* CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-lg py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #6C63FF 0%, #8B5CF6 100%)" }}
          >
            Get This For My Business
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ServiceCard({
  service,
  onClick,
}: {
  service: Service;
  onClick?: () => void;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={cardVariant}
      whileHover={
        service.comingSoon
          ? {}
          : {
              scale: 1.01,
              boxShadow: "0 0 30px rgba(108,99,255,0.08)",
              borderColor: "rgba(108,99,255,0.35)",
              transition: { duration: 0.3 },
            }
      }
      onClick={onClick}
      className={[
        "relative bg-[#0F0F14] rounded-2xl p-7 flex flex-col gap-5",
        service.comingSoon
          ? "border border-dashed border-white/[0.08] opacity-70 cursor-default"
          : "border border-white/[0.08] cursor-pointer",
      ].join(" ")}
      style={{ transition: "border-color 300ms, box-shadow 300ms" }}
    >
      {/* Tag */}
      {service.tag && (
        <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full ${TAG_STYLES[service.tag]}`}>
          {service.tag}
        </span>
      )}

      {/* Icon */}
      <div
        className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
        style={{ backgroundColor: `${service.iconColor}26` }}
      >
        <Icon size={22} color={service.iconColor} strokeWidth={1.75} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          {service.title}
        </h3>
        <p className="text-sm text-white/55 leading-relaxed">{service.description}</p>
      </div>

      {/* Price / Coming Soon */}
      {service.comingSoon ? (
        <p className="mt-auto text-sm font-semibold text-white/30">Coming Soon</p>
      ) : (
        <p className="mt-auto text-sm font-semibold" style={{ color: service.iconColor }}>
          {service.price}
        </p>
      )}

      {/* Learn more hint */}
      {!service.comingSoon && (
        <p className="text-xs text-white/25">Tap to learn more →</p>
      )}
    </motion.div>
  );
}

export default function Services() {
  const [activeModal, setActiveModal] = useState<ModalData | null>(null);

  return (
    <section id="services" className="relative py-24 bg-[#07070A]">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <p className="text-xs tracking-[0.3em] text-purple-400 uppercase mb-3">What We Build</p>
        <h2
          className="text-4xl md:text-5xl font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          What We Can Build For You
        </h2>
        <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Pick one, combine them, or let us recommend the right stack for your business.
        </p>
      </div>

      {/* Cards grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6"
      >
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            service={service}
            onClick={service.modal ? () => setActiveModal(service.modal!) : undefined}
          />
        ))}
      </motion.div>

      {/* Modal */}
      {activeModal && (
        <ServiceModal data={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </section>
  );
}
