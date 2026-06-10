"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function VoxintaLogo() {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <svg
        width="28"
        height="40"
        viewBox="0 0 28 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4,4 L14,28 L24,4"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9,32 Q14,37 19,32"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="1"
        />
        <path
          d="M6,37 Q14,43 22,37"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M3,42 Q14,49 25,42"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.25"
        />
      </svg>
      <span
        className="text-xl font-bold tracking-widest text-white select-none"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        VOXINTA
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 transition-colors duration-300",
        scrolled ? "border-b border-white/[0.08]" : "border-b border-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <VoxintaLogo />

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#demo"
            className="hidden md:inline-flex items-center text-sm font-medium text-white rounded-full px-5 py-2 transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #6C63FF 0%, #8B5CF6 100%)",
            }}
          >
            Get a Demo
          </a>

          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden md:hidden border-t border-white/[0.08]"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#demo"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center text-sm font-medium text-white rounded-full px-5 py-2 transition-opacity hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #6C63FF 0%, #8B5CF6 100%)",
                  }}
                >
                  Get a Demo
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
