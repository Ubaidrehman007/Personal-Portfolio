import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  MapPin,
  Terminal,
} from "lucide-react";

const timeline = [
  {
    year: "2025",
    title: "Software Development Intern",
    company: "Softpro India Computer Technologies",
    detail:
      "Worked with Java, Spring Boot, MySQL and Git during a 6-month industrial training focused on backend development.",
    tag: "EXPERIENCE",
  },
  {
    year: "2026",
    title: "B.Tech Computer Science & Engineering",
    company: "Lucknow, India",
    detail:
      "Completed undergraduate studies with a focus on software development, databases, web technologies and system-oriented engineering.",
    tag: "EDUCATION",
  },
];

const profileStats = [
  {
    label: "PRIMARY STACK",
    value: "JAVA / SPRING",
  },
  {
    label: "SYSTEM FOCUS",
    value: "BACKEND + FULL STACK",
  },
  {
    label: "DATA",
    value: "POSTGRESQL / POSTGIS",
  },
  {
    label: "CURRENT MODE",
    value: "BUILDING",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400/60" />
            ABOUT // 05
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The engineer
              <span className="text-zinc-500"> behind the systems.</span>
            </h2>

            <p className="max-w-xl text-sm leading-7 text-zinc-400 lg:justify-self-end">
              I enjoy turning complex requirements into structured, maintainable
              software—from API design and security to data and deployment.
            </p>
          </div>
        </motion.div>

        {/* PROFILE + SYSTEM CARD */}
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* PROFILE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.035] blur-3xl" />

            <div className="relative">
              {/* Identity */}
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] font-mono text-lg text-cyan-300">
                    UR
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Ubaid Rehman
                    </h3>

                    <div className="mt-1 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-zinc-500">
                      <MapPin size={11} />
                      LUCKNOW, INDIA
                    </div>
                  </div>
                </div>

                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-3 py-1.5 font-mono text-[9px] text-emerald-400">
                  AVAILABLE FOR OPPORTUNITIES
                </div>
              </div>

              {/* Description */}
              <div className="max-w-3xl space-y-5 text-sm leading-7 text-zinc-400">
                <p>
                  I’m a Java-focused Full-Stack Developer interested in building
                  applications where backend architecture, data, security, and
                  user experience have to work together.
                </p>

                <p>
                  My strongest interest is in the backend: designing REST APIs,
                  structuring business logic, working with relational databases,
                  implementing authentication and authorization, and integrating
                  those systems with modern frontends.
                </p>

                <p>
                  I also enjoy going deeper when a problem requires it—whether
                  that means spatial data with PostGIS, indexing, workflow
                  design, auditability, or containerized deployment.
                </p>
              </div>

              {/* Focus */}
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "BUILD", "Turn requirements into working systems."],
                  ["02", "SOLVE", "Break complex problems into layers."],
                  ["03", "IMPROVE", "Iterate through testing and feedback."],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                  >
                    <div className="mb-5 font-mono text-[9px] text-zinc-700">
                      {number}
                    </div>

                    <div className="mb-1 font-mono text-[10px] tracking-[0.15em] text-cyan-400">
                      {title}
                    </div>

                    <p className="text-xs leading-5 text-zinc-500">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* PROFILE MATRIX */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-[#020408] p-6 sm:p-8"
          >
            <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Terminal size={15} className="text-cyan-400" />

                <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
                  ENGINEER_PROFILE
                </span>
              </div>

              <span className="font-mono text-[9px] text-zinc-700">
                PROFILE_05
              </span>
            </div>

            <div className="space-y-1">
              {profileStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08,
                  }}
                  className="border-b border-white/[0.07] py-5 last:border-0"
                >
                  <div className="mb-2 font-mono text-[9px] tracking-[0.15em] text-zinc-600">
                    {item.label}
                  </div>

                  <div className="font-mono text-sm text-zinc-200">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">
              <div className="mb-3 flex items-center gap-2">
                <Code2 size={15} className="text-cyan-400" />

                <span className="font-mono text-[9px] tracking-[0.18em] text-cyan-400">
                  CURRENT_DIRECTION
                </span>
              </div>

              <p className="text-sm leading-6 text-zinc-400">
                Building production-oriented Java applications while
                strengthening system design, backend engineering, and full-stack
                development.
              </p>
            </div>
          </motion.div>
        </div>

        {/* TIMELINE */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <div className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">
              EXPERIENCE_TIMELINE
            </div>

            <div className="font-mono text-[9px] text-zinc-700">
              LOG // 2025—2026
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-white/10 sm:block" />

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative sm:pl-12"
                >
                  <div className="absolute left-[14px] top-6 hidden h-3 w-3 rounded-full border border-cyan-400/50 bg-[#05070b] shadow-[0_0_12px_rgba(0,245,255,0.25)] sm:block" />

                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-white/20 sm:p-6">
                    <div className="grid gap-5 sm:grid-cols-[100px_1fr_auto] sm:items-start">
                      <div className="font-mono text-sm text-cyan-400">
                        {item.year}
                      </div>

                      <div>
                        <div className="mb-1 font-medium text-white">
                          {item.title}
                        </div>

                        <div className="mb-3 text-xs text-zinc-500">
                          {item.company}
                        </div>

                        <p className="max-w-2xl text-sm leading-6 text-zinc-500">
                          {item.detail}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.15em] text-zinc-600">
                        {item.tag === "EXPERIENCE" ? (
                          <BriefcaseBusiness size={12} />
                        ) : (
                          <GraduationCap size={12} />
                        )}
                        {item.tag}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RESUME CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div>
            <div className="font-mono text-[9px] tracking-[0.2em] text-zinc-600">
              FULL_PROFILE
            </div>

            <p className="mt-2 text-sm text-zinc-400">
              Explore the complete experience, projects, skills, and research.
            </p>
          </div>

          <a
            href="/Ubaid_Rehman_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-xs text-zinc-300 transition-all hover:border-cyan-400/30 hover:text-cyan-300"
          >
            VIEW RESUME
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
