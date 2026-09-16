import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
  FiFileText,
  FiArrowUpRight,
} from "react-icons/fi";
import { useState } from "react";

const navItems = [
  { label: "SYSTEMS", href: "#systems" },
  { label: "ENGINEERING", href: "#engineering" },
  { label: "ARCHITECTURE", href: "#architecture" },
  { label: "RESEARCH", href: "#research" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const githubUrl = "https://github.com/Ubaidrehman007";

const linkedinUrl = "https://www.linkedin.com/in/ubaid-rehman-9a5470269/";

const resumeUrl =
  "https://ubaidrehman007.github.io/Personal-Portfolio/Ubaid_Rehman_Resume.pdf";

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
      className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 md:px-8 md:pt-4"
    >
      <nav className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#080b10]/80 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="flex h-14 items-center justify-between px-3 sm:h-16 sm:px-4 md:px-6">
          {/* =====================================================
              BRAND
          ====================================================== */}
          <a
            href="#home"
            onClick={handleNavigation}
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
            aria-label="Ubaid Rehman — Home"
          >
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-cyan-400/30 bg-cyan-400/[0.04] font-display text-sm font-bold text-cyan-400 transition-all group-hover:border-cyan-400/60 group-hover:bg-cyan-400/[0.08]">
              UR
            </div>

            <div className="min-w-0">
              <p className="truncate font-display text-xs font-semibold tracking-wide text-white sm:text-sm">
                UBAID REHMAN
              </p>

              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />

                <p className="hidden font-mono text-[8px] tracking-[0.16em] text-zinc-500 sm:block sm:text-[9px] sm:tracking-widest">
                  JAVA FULL-STACK ENGINEER
                </p>

                <p className="font-mono text-[7px] tracking-widest text-zinc-500 sm:hidden">
                  JAVA ENGINEER
                </p>
              </div>
            </div>
          </a>

          {/* =====================================================
              DESKTOP NAV
          ====================================================== */}
          <div className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2.5 py-2 font-mono text-[9px] tracking-wider text-zinc-500 transition-all hover:bg-white/5 hover:text-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* =====================================================
              DESKTOP ACTIONS
          ====================================================== */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            {/* Available */}
            <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.04] px-3 py-1.5 2xl:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

              <span className="font-mono text-[8px] tracking-wider text-emerald-400">
                AVAILABLE
              </span>
            </div>

            {/* Resume */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/[0.04] px-3 font-mono text-[9px] tracking-wider text-zinc-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 sm:flex"
            >
              <FiFileText size={14} aria-hidden="true" />
              RESUME
              <FiArrowUpRight size={11} aria-hidden="true" />
            </a>

            {/* GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hidden h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-all hover:border-cyan-400/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 md:flex"
            >
              <FiGithub size={16} aria-hidden="true" />
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hidden h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-all hover:border-cyan-400/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 lg:flex"
            >
              <FiLinkedin size={16} aria-hidden="true" />
            </a>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-cyan-400/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 xl:hidden"
            >
              {menuOpen ? (
                <FiX size={18} aria-hidden="true" />
              ) : (
                <FiMenu size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="border-t border-white/10 xl:hidden"
            >
              <div className="space-y-1 px-3 py-3 sm:px-4 sm:py-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavigation}
                    className="block rounded-lg px-3 py-3 font-mono text-[10px] tracking-wider text-zinc-400 transition-colors hover:bg-white/5 hover:text-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile Actions */}
                <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/5 pt-3">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-cyan-400/20 bg-cyan-400/[0.04] py-3 font-mono text-[8px] tracking-wider text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-white"
                  >
                    <FiFileText size={13} aria-hidden="true" />
                    RESUME
                  </a>

                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 py-3 text-zinc-400 transition-colors hover:border-cyan-400/30 hover:text-white"
                  >
                    <FiGithub size={14} aria-hidden="true" />
                    <span className="font-mono text-[8px] tracking-wider">
                      GITHUB
                    </span>
                  </a>

                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 py-3 text-zinc-400 transition-colors hover:border-cyan-400/30 hover:text-white"
                  >
                    <FiLinkedin size={14} aria-hidden="true" />
                    <span className="font-mono text-[8px] tracking-wider">
                      LINKEDIN
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
