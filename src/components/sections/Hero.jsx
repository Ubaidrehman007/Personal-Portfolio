import { motion } from "framer-motion";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiGithub,
  FiCode,
  FiDatabase,
  FiServer,
  FiShield,
  FiCloud,
} from "react-icons/fi";

const techGroups = [
  {
    label: "FRONTEND",
    icon: FiCode,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    label: "BACKEND",
    icon: FiServer,
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "JWT",
      "REST APIs",
    ],
  },
  {
    label: "DATA",
    icon: FiDatabase,
    items: ["PostgreSQL", "PostGIS", "MySQL", "Hibernate Spatial"],
  },
  {
    label: "DEVOPS / TOOLS",
    icon: FiCloud,
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Maven",
      "Flyway",
      "Nginx",
      "Postman",
    ],
  },
  {
    label: "3D / UI",
    icon: FiShield,
    items: ["Three.js", "React Three Fiber", "Framer Motion"],
  },
];

export default function Hero() {
  const scrollToSystems = () => {
    document.getElementById("systems")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative z-10 px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:flex lg:min-h-[calc(100vh-5rem)] lg:items-center lg:px-8 lg:pb-20 lg:pt-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-14 xl:gap-20">
          {/* =========================================================
              LEFT — ENGINEERING IDENTITY
          ========================================================== */}
          <div>
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.04] px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

              <span className="font-mono text-[9px] tracking-[0.2em] text-emerald-400">
                SYSTEM ONLINE
              </span>

              <span className="text-zinc-700">/</span>

              <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-500">
                JAVA 21
              </span>

              <span className="hidden text-zinc-700 sm:block">/</span>

              <span className="hidden font-mono text-[9px] tracking-[0.2em] text-zinc-500 sm:block">
                BUILDING IMPACT
              </span>
            </motion.div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-4 font-mono text-[10px] tracking-[0.35em] text-cyan-400 sm:text-xs"
            >
              FULL-STACK JAVA ENGINEER
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl font-display text-[3.1rem] font-bold leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[5.3rem] xl:text-[5.7rem]"
            >
              Building
              <br />
              <span className="text-zinc-500">systems,</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                not just UIs.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:mt-8 sm:text-base sm:leading-8"
            >
              I&apos;m{" "}
              <span className="font-semibold text-zinc-200">Ubaid Rehman</span>,
              a Full-Stack Java Engineer focused on building secure APIs,
              geospatial systems, scalable architectures, and production-ready
              web applications.
            </motion.p>

            {/* =======================================================
                COMPLETE TECHNICAL STACK
            ======================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 max-w-3xl"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-600">
                  TECHNICAL STACK
                </span>

                <span className="h-px w-12 bg-cyan-400/20" />
              </div>

              <div className="space-y-3">
                {techGroups.map((group) => {
                  const Icon = group.icon;

                  return (
                    <div
                      key={group.label}
                      className="flex flex-col gap-2 sm:flex-row sm:items-start"
                    >
                      <div className="flex w-[115px] shrink-0 items-center gap-2 pt-1">
                        <Icon
                          size={11}
                          className="text-cyan-400/70"
                          aria-hidden="true"
                        />

                        <span className="font-mono text-[8px] tracking-[0.16em] text-zinc-600">
                          {group.label}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-white/8 bg-white/[0.025] px-2 py-1 font-mono text-[8px] text-zinc-500 transition-all hover:border-cyan-400/25 hover:bg-cyan-400/[0.03] hover:text-cyan-300 sm:text-[9px]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={scrollToSystems}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 font-mono text-[10px] font-semibold tracking-wider text-[#020408] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:ring-offset-2 focus:ring-offset-[#05070b]"
              >
                EXPLORE SYSTEMS
                <FiArrowDownRight size={15} aria-hidden="true" />
              </button>

              <a
                href="https://github.com/Ubaidrehman007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-5 py-3.5 font-mono text-[10px] tracking-wider text-zinc-300 backdrop-blur-sm transition-all hover:border-cyan-400/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              >
                <FiGithub size={15} aria-hidden="true" />
                GITHUB
                <FiArrowUpRight size={13} aria-hidden="true" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9 grid grid-cols-2 gap-0 border-y border-white/5 py-5 sm:grid-cols-4"
            >
              <div className="border-r border-white/5 pr-4">
                <p className="font-display text-lg font-semibold text-cyan-400">
                  05+
                </p>
                <p className="mt-1 font-mono text-[7px] tracking-widest text-zinc-600">
                  PROJECTS
                </p>
              </div>

              <div className="border-r-0 pl-4 sm:border-r sm:px-4">
                <p className="font-display text-lg font-semibold text-cyan-400">
                  06
                </p>
                <p className="mt-1 font-mono text-[7px] tracking-widest text-zinc-600">
                  MONTHS TRAINING
                </p>
              </div>

              <div className="mt-5 border-r border-white/5 pr-4 sm:mt-0 sm:px-4">
                <p className="font-display text-lg font-semibold text-cyan-400">
                  CSE
                </p>
                <p className="mt-1 font-mono text-[7px] tracking-widest text-zinc-600">
                  B.TECH / 2022–26
                </p>
              </div>

              <div className="mt-5 pl-4 sm:mt-0 sm:border-l sm:border-white/5 sm:px-4">
                <p className="font-display text-lg font-semibold text-cyan-400">
                  OPEN
                </p>
                <p className="mt-1 font-mono text-[7px] tracking-widest text-zinc-600">
                  FOR OPPORTUNITIES
                </p>
              </div>
            </motion.div>

            {/* Mobile Scroll */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex items-center gap-3 lg:hidden"
            >
              <span className="h-px w-8 bg-white/10" />

              <span className="font-mono text-[8px] tracking-[0.25em] text-zinc-700">
                SCROLL TO EXPLORE
              </span>

              <FiArrowDownRight
                size={11}
                className="text-zinc-700"
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* =========================================================
              RIGHT — PERSONAL ENGINEERING CARD
          ========================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mx-auto w-full max-w-xl lg:mx-0"
          >
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute -inset-10 rounded-full bg-cyan-400/[0.06] blur-3xl"
              aria-hidden="true"
            />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#06090e]/80 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
              {/* HUD top line */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                  <span className="font-mono text-[8px] tracking-[0.2em] text-emerald-400">
                    IDENTITY VERIFIED
                  </span>
                </div>

                <span className="font-mono text-[8px] tracking-widest text-zinc-600">
                  UBAID.001
                </span>
              </div>

              {/* Photo Area */}
              <div className="relative p-4 sm:p-5 md:p-6">
                {/* Grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:32px_32px]"
                  aria-hidden="true"
                />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-400/20 bg-[#030509]">
                  {/* Corner HUD */}
                  <div
                    className="absolute left-4 top-4 z-20 h-5 w-5 border-l border-t border-cyan-400/70"
                    aria-hidden="true"
                  />

                  <div
                    className="absolute right-4 top-4 z-20 h-5 w-5 border-r border-t border-cyan-400/70"
                    aria-hidden="true"
                  />

                  <div
                    className="absolute bottom-4 left-4 z-20 h-5 w-5 border-b border-l border-cyan-400/70"
                    aria-hidden="true"
                  />

                  <div
                    className="absolute bottom-4 right-4 z-20 h-5 w-5 border-b border-r border-cyan-400/70"
                    aria-hidden="true"
                  />

                  {/* Photo */}
                  <img
                    src="https://ubaidrehman007.github.io/Personal-Portfolio/ubaid-profile.jpg"
                    alt="Ubaid Rehman — Full-Stack Java Engineer"
                    width="800"
                    height="800"
                    fetchPriority="high"
                    className="aspect-[4/5] w-full object-cover object-center"
                  />

                  {/* Dark cinematic overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030509] via-transparent to-[#030509]/20"
                    aria-hidden="true"
                  />

                  {/* Scan line */}
                  <div
                    className="pointer-events-none absolute left-0 right-0 top-[38%] h-px bg-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    aria-hidden="true"
                  />

                  {/* Photo Metadata */}
                  <div className="absolute bottom-4 left-5 right-5 z-10">
                    <p className="font-mono text-[8px] tracking-[0.3em] text-cyan-300">
                      FULL-STACK ENGINEER
                    </p>

                    <p className="mt-1 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Ubaid Rehman
                    </p>
                  </div>
                </div>

                {/* Technical labels */}
                <div className="relative mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <p className="font-mono text-[7px] tracking-widest text-zinc-600">
                      CORE
                    </p>
                    <p className="mt-1 font-mono text-[9px] text-cyan-300">
                      JAVA
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <p className="font-mono text-[7px] tracking-widest text-zinc-600">
                      API
                    </p>
                    <p className="mt-1 font-mono text-[9px] text-cyan-300">
                      SPRING
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <p className="font-mono text-[7px] tracking-widest text-zinc-600">
                      DATA
                    </p>
                    <p className="mt-1 font-mono text-[9px] text-cyan-300">
                      POSTGRES
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <p className="font-mono text-[7px] tracking-widest text-zinc-600">
                      DOMAIN
                    </p>
                    <p className="mt-1 font-mono text-[9px] text-cyan-300">
                      SYSTEMS
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.015] px-5 py-3">
                <span className="font-mono text-[8px] tracking-[0.2em] text-zinc-600">
                  ENGINEER / BUILDER / LEARNER
                </span>

                <span className="font-mono text-[8px] text-cyan-500/70">
                  JAVA 21
                </span>
              </div>
            </div>

            {/* Floating side indicators */}
            <div className="absolute -right-3 top-24 hidden w-36 space-y-2 xl:block">
              <div className="rounded-xl border border-cyan-400/20 bg-[#070b11]/90 p-3 backdrop-blur-xl">
                <p className="font-mono text-[8px] text-cyan-400">&lt;/&gt;</p>
                <p className="mt-1 text-[10px] text-zinc-300">Clean Code</p>
                <p className="font-mono text-[7px] tracking-widest text-zinc-600">
                  ALWAYS
                </p>
              </div>

              <div className="rounded-xl border border-cyan-400/20 bg-[#070b11]/90 p-3 backdrop-blur-xl">
                <p className="font-mono text-[8px] text-cyan-400">&lt;S&gt;</p>
                <p className="mt-1 text-[10px] text-zinc-300">
                  Scalable Systems
                </p>
                <p className="font-mono text-[7px] tracking-widest text-zinc-600">
                  BY DESIGN
                </p>
              </div>

              <div className="rounded-xl border border-cyan-400/20 bg-[#070b11]/90 p-3 backdrop-blur-xl">
                <p className="font-mono text-[8px] text-cyan-400">[AI]</p>
                <p className="mt-1 text-[10px] text-zinc-300">
                  Real-World Impact
                </p>
                <p className="font-mono text-[7px] tracking-widest text-zinc-600">
                  THE GOAL
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
