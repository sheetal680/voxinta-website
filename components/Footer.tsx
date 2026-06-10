const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function VoxintaLogoSmall() {
  return (
    <a href="#" className="flex items-center gap-2">
      <svg
        width="22"
        height="32"
        viewBox="0 0 28 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M4,4 L14,28 L24,4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9,32 Q14,37 19,32" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="1" />
        <path d="M6,37 Q14,43 22,37" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
        <path d="M3,42 Q14,49 25,42" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      </svg>
      <span
        className="text-base font-bold tracking-widest text-white"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        VOXINTA
      </span>
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#07070A] border-t border-white/[0.06] py-12">
      {/* Top row */}
      <div className="flex flex-wrap justify-between items-start gap-8 max-w-6xl mx-auto px-6">
        {/* Left — logo */}
        <div>
          <VoxintaLogoSmall />
        </div>

        {/* Center — quick links */}
        <div>
          <p className="text-xs text-white/30 uppercase tracking-widest mb-4">
            Quick Links
          </p>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — social */}
        <div>
          <p className="text-xs text-white/30 uppercase tracking-widest mb-4">
            Connect
          </p>
          <a
            href="https://www.instagram.com/voxinta_ai?igsh=MXVsOWc3dWhkYnhzZw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-colors duration-200"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] mt-10 pt-6 max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
        <p className="text-xs text-white/30">© 2025 Voxinta. All rights reserved.</p>
        <p className="text-xs text-white/30">Built with AI in India 🇮🇳</p>
      </div>
    </footer>
  );
}
