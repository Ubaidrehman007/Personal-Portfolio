import { motion } from "framer-motion";
import {
  FiArrowDownRight,
  FiCheckCircle,
  FiCode,
  FiGithub,
  FiTerminal,
} from "react-icons/fi";

const technologies = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "PostgreSQL",
  "PostGIS",
  "React",
  "Docker",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center px-6 pt-28 pb-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <div>
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[10px] tracking-widest text-emerald-400">
                SYSTEM ONLINE
              </span>

              <span className="text-zinc-700">/</span>

              <span className="font-mono text-[10px] tracking-widest text-zinc-500">
                JAVA 21
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.5 }}
              className="mb-4 font-mono text-xs tracking-[0.3em] text-cyan-400"
            >
              FULL-STACK ENGINEER
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              Building
              <br />
              <span className="text-zinc-500">systems,</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                not just UIs.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg"
            >
              I'm{" "}
              <span className="font-medium text-zinc-200">Ubaid Rehman</span>, a
              Full-Stack Java Engineer focused on building secure APIs,
              geospatial systems, and production-ready web applications.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.6 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] text-zinc-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#systems"
                className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-mono text-xs font-semibold text-black transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              >
                EXPLORE SYSTEMS
                <FiArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>

              <a
                href="https://github.com/Ubaidrehman007"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-xs text-zinc-300 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <FiGithub />
                GITHUB
              </a>
            </motion.div>
          </div>

          {/* RIGHT — SYSTEM CONSOLE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-10 rounded-full bg-cyan-400/5 blur-3xl" />

              {/* Console */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080b10]/90 shadow-2xl backdrop-blur-xl">
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-600">
                    <FiTerminal />
                    ubaid@engineering
                  </div>
                </div>

                {/* Terminal */}
                <div className="p-6 font-mono text-xs leading-7">
                  <p className="text-zinc-600">$ whoami</p>

                  <p className="text-cyan-400">ubaid-rehman</p>

                  <br />

                  <p className="text-zinc-600">$ system.status</p>

                  <div className="space-y-1">
                    <p className="flex justify-between">
                      <span className="text-zinc-400">backend</span>

                      <span className="flex items-center gap-1 text-emerald-400">
                        <FiCheckCircle />
                        operational
                      </span>
                    </p>

                    <p className="flex justify-between">
                      <span className="text-zinc-400">database</span>

                      <span className="flex items-center gap-1 text-emerald-400">
                        <FiCheckCircle />
                        connected
                      </span>
                    </p>

                    <p className="flex justify-between">
                      <span className="text-zinc-400">security</span>

                      <span className="flex items-center gap-1 text-emerald-400">
                        <FiCheckCircle />
                        secured
                      </span>
                    </p>

                    <p className="flex justify-between">
                      <span className="text-zinc-400">deployment</span>

                      <span className="flex items-center gap-1 text-emerald-400">
                        <FiCheckCircle />
                        production
                      </span>
                    </p>
                  </div>

                  <br />

                  <p className="text-zinc-600">$ stack --primary</p>

                  <p className="text-zinc-300">
                    Java / Spring Boot / PostgreSQL
                  </p>

                  <p className="text-zinc-300">PostGIS / React / Docker</p>

                  <br />

                  <p className="text-zinc-600">$ ready</p>

                  <p className="flex items-center gap-2 text-cyan-400">
                    <FiCode />
                    accepting_connections
                    <span className="animate-pulse">_</span>
                  </p>
                </div>

                {/* Bottom Status */}
                <div className="border-t border-white/10 bg-white/[0.02] px-5 py-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-zinc-600">
                      UBAID.ENGINEERING
                    </span>

                    <span className="font-mono text-[9px] text-cyan-500">
                      v1.0.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 hidden items-center gap-3 md:flex"
        >
          <div className="h-px w-12 bg-white/10" />

          <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-600">
            SCROLL TO EXPLORE
          </span>

          <FiArrowDownRight className="text-zinc-600" size={12} />
        </motion.div>
      </div>
    </section>
  );
}
