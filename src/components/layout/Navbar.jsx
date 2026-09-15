import { motion } from "framer-motion";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const navItems = [
  { label: "SYSTEMS", href: "#systems" },
  { label: "ENGINEERING", href: "#engineering" },
  { label: "ABOUT", href: "#about" },
  { label: "RESEARCH", href: "#research" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4"
    >
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#080b10]/75 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          {/* Brand */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/5 font-display text-sm font-bold text-cyan-400 transition-colors group-hover:border-cyan-400/60">
              UB
            </div>

            <div className="hidden sm:block">
              <p className="font-display text-sm font-semibold tracking-wide text-white">
                UBAID REHMAN
              </p>

              <p className="font-mono text-[9px] tracking-widest text-zinc-500">
                ENGINEERING PORTFOLIO
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 font-mono text-[10px] tracking-wider text-zinc-400 transition-all hover:bg-white/5 hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

              <span className="font-mono text-[9px] tracking-wider text-emerald-400">
                AVAILABLE
              </span>
            </div>

            <a
              href="https://github.com/Ubaidrehman007"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-all hover:border-cyan-400/40 hover:text-white"
            >
              <FiGithub size={16} />
            </a>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:text-white"
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/10 px-4 py-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigation}
                  className="rounded-lg px-3 py-3 font-mono text-xs tracking-wider text-zinc-400 hover:bg-white/5 hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
