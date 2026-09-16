import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDatabase,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiMapPin,
  FiShield,
  FiZap,
} from "react-icons/fi";

import { projects } from "../../data/projects";

function CapabilityIcon({ index }) {
  const icons = [
    <FiShield key="shield" />,
    <FiMapPin key="map" />,
    <FiDatabase key="database" />,
    <FiZap key="zap" />,
  ];

  return icons[index % icons.length];
}

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);

  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <section id="systems" className="relative z-10 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              SYSTEMS // 01
            </span>

            <span className="h-px w-12 bg-cyan-400/30" />
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                Selected
                <span className="text-zinc-600"> Systems.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
                Production applications, backend architectures, and
                client-facing experiences I've designed and built.
              </p>
            </div>

            <div className="font-mono text-[10px] tracking-widest text-zinc-600">
              {String(projects.length).padStart(2, "0")} PROJECTS
            </div>
          </div>
        </motion.div>

        {/* =========================
            FEATURED PROJECT
        ========================== */}

        {featuredProject && (
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080b10]/80 backdrop-blur-xl"
          >
            {/* Top Technical Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-cyan-400">
                  {featuredProject.number}
                </span>

                <span className="h-1 w-1 rounded-full bg-zinc-700" />

                <span className="font-mono text-[9px] tracking-widest text-zinc-500">
                  {featuredProject.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

                <span className="font-mono text-[9px] tracking-widest text-emerald-400">
                  OPERATIONAL
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              {/* Left */}
              <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
                <p className="mb-3 font-mono text-[10px] tracking-[0.25em] text-cyan-400">
                  FLAGSHIP SYSTEM
                </p>

                <h3 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-2 text-lg text-zinc-500">
                  {featuredProject.subtitle}
                </p>

                <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400">
                  {featuredProject.description}
                </p>

                {/* Stack */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[9px] text-zinc-400 transition-colors group-hover:border-cyan-400/20 group-hover:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-mono text-[10px] font-semibold text-black transition-all hover:bg-cyan-300"
                  >
                    <FiGithub />
                    SOURCE CODE
                    <FiArrowUpRight />
                  </a>

                  {featuredProject.live && (
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 font-mono text-[10px] text-zinc-300 transition-all hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      <FiExternalLink />
                      LIVE SYSTEM
                    </a>
                  )}
                </div>
              </div>

              {/* Right — System Visualization */}
              <div className="relative overflow-hidden bg-white/[0.015] p-7 md:p-10">
                {/* Decorative Grid */}
                <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:32px_32px]" />

                <div className="relative">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FiLayers className="text-cyan-400" size={14} />

                      <span className="font-mono text-[9px] tracking-widest text-zinc-500">
                        SYSTEM CAPABILITIES
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-zinc-700">
                      v1.0
                    </span>
                  </div>

                  <div className="space-y-3">
                    {featuredProject.capabilities
                      .slice(0, 6)
                      .map((capability, index) => (
                        <motion.div
                          key={capability}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 px-4 py-3 transition-colors hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-400/5 text-cyan-400">
                            {CapabilityIcon({ index })}
                          </span>

                          <span className="text-xs text-zinc-400">
                            {capability}
                          </span>
                        </motion.div>
                      ))}
                  </div>

                  {/* Mini Architecture */}
                  <div className="mt-7 rounded-2xl border border-white/5 bg-black/20 p-5">
                    <p className="mb-4 font-mono text-[9px] tracking-widest text-zinc-600">
                      CORE ARCHITECTURE
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      {featuredProject.architecture.map((item, index) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[8px] text-zinc-500">
                            {item}
                          </span>

                          {index !==
                            featuredProject.architecture.length - 1 && (
                            <span className="text-cyan-400/40">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 md:px-7">
              <span className="font-mono text-[8px] tracking-widest text-zinc-700">
                UBAID.ENGINEERING / SYSTEM.01
              </span>

              <span className="font-mono text-[8px] text-cyan-500/60">
                POSTGIS + SPRING
              </span>
            </div>
          </motion.article>
        )}

        {/* =========================
            SECONDARY PROJECTS
        ========================== */}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondaryProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="group rounded-3xl border border-white/10 bg-[#080b10]/75 p-7 backdrop-blur-xl transition-colors hover:border-white/15 md:p-8"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-zinc-600">
                  {project.number}
                </span>

                <span className="font-mono text-[9px] tracking-widest text-cyan-400/70">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-8 font-display text-3xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-1 text-sm text-zinc-500">{project.subtitle}</p>

              <p className="mt-5 text-sm leading-7 text-zinc-500">
                {project.description}
              </p>

              {/* Capabilities */}
              <div className="mt-6 space-y-2">
                {project.capabilities.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-xs text-zinc-500"
                  >
                    <span className="mt-1 text-cyan-400">▹</span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech */}
              <div className="mt-7 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/5 bg-white/[0.025] px-2 py-1 font-mono text-[8px] text-zinc-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-[9px] text-zinc-500 transition-colors hover:text-white"
                >
                  <FiGithub />
                  SOURCE
                  <FiArrowUpRight />
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-mono text-[9px] text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    <FiExternalLink />
                    LIVE
                    <FiArrowUpRight />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/5" />

          <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-700">
            MORE SYSTEMS IN THE REPOSITORY
          </span>

          <div className="h-px flex-1 bg-white/5" />
        </motion.div>
      </div>
    </section>
  );
}
