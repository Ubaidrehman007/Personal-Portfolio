import { motion } from "framer-motion";
import { ArrowUp, Mail, Terminal } from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const links = [
  {
    label: "GITHUB",
    href: "https://github.com/Ubaidrehman007",
    icon: FaGithub,
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/ubaid-rehman-9a5470269/",
    icon: FaLinkedinIn,
  },
  {
    label: "EMAIL",
    href: "mailto:urkhan556@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative px-4 pb-6 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* TOP LINE */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* MAIN FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end"
        >
          {/* BRAND */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] font-mono text-sm font-medium text-cyan-300">
                UB
              </div>

              <div>
                <div className="text-sm font-semibold tracking-wide text-zinc-200">
                  UBAID REHMAN
                </div>

                <div className="mt-0.5 font-mono text-[9px] tracking-[0.2em] text-zinc-600">
                  JAVA / FULL-STACK ENGINEER
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-zinc-600">
              <Terminal size={12} />
              SYSTEM ENDPOINT // 2026
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap gap-2">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 font-mono text-[9px] tracking-[0.12em] text-zinc-500 transition-all hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-300"
                >
                  <Icon size={13} />
                  {link.label}
                </a>
              );
            })}

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 font-mono text-[9px] tracking-[0.12em] text-zinc-500 transition-all hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-300"
            >
              <ArrowUp
                size={13}
                className="transition-transform group-hover:-translate-y-0.5"
              />
              TOP
            </button>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] tracking-[0.12em] text-zinc-700">
            © 2026 UBAID REHMAN. ALL SYSTEMS RESERVED.
          </p>

          <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            BUILT WITH REACT + TAILWIND + THREE.JS
          </div>
        </div>
      </div>
    </footer>
  );
}
