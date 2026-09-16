import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Database,
  FileText,
  FlaskConical,
  GitBranch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const decisions = [
  {
    number: "01",
    title: "Geospatial Data",
    icon: Database,
    description:
      "Used PostgreSQL with PostGIS to represent issue locations as spatial data instead of treating latitude and longitude as unrelated values.",
    tags: ["PostGIS", "geometry(Point, 4326)", "GiST"],
  },
  {
    number: "02",
    title: "Security Boundary",
    icon: ShieldCheck,
    description:
      "Authentication and authorization are handled as part of the application architecture using JWT and role-based access control.",
    tags: ["JWT", "Spring Security", "RBAC"],
  },
  {
    number: "03",
    title: "Layered Architecture",
    icon: GitBranch,
    description:
      "Controllers, services, persistence, security, and infrastructure responsibilities are kept separated to make the system easier to evolve.",
    tags: ["REST", "Service Layer", "JPA"],
  },
  {
    number: "04",
    title: "Recommendation Logic",
    icon: Sparkles,
    description:
      "The research work explores combining collaborative filtering with content analysis to improve product recommendation strategies.",
    tags: ["Collaborative Filtering", "Content Analysis"],
  },
];

const researchStats = [
  ["DOMAIN", "E-Commerce Recommendation"],
  ["APPROACH", "Hybrid Recommendation Engine"],
  ["METHOD", "Collaborative + Content Analysis"],
  ["YEAR", "2026"],
];

export default function Research() {
  return (
    <section id="research" className="relative px-4 py-24 sm:px-6 lg:px-8">
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
            RESEARCH // 04
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Engineering ideas,
              <span className="text-zinc-500"> backed by research.</span>
            </h2>

            <p className="max-w-xl text-sm leading-7 text-zinc-400 lg:justify-self-end">
              I use research to understand how systems can make better
              decisions—not just how to make them work.
            </p>
          </div>
        </motion.div>

        {/* RESEARCH PAPER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                  <FlaskConical size={20} />
                </div>

                <div>
                  <div className="font-mono text-[9px] tracking-[0.2em] text-cyan-400">
                    PUBLISHED RESEARCH
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">
                    IJIRCST // 2026
                  </div>
                </div>
              </div>

              <h3 className="max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                A Hybrid Recommendation Engine for E-Commerce using
                Collaborative Filtering and Content Analysis
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
                Research focused on combining collaborative filtering with
                content-based analysis to build a hybrid recommendation approach
                for e-commerce systems.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Recommendation Systems",
                  "Collaborative Filtering",
                  "Content Analysis",
                  "E-Commerce",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.ijircst.org/view_abstract.php?title=Design-and-Implementation-of-a-Hybrid-E-Commerce-Recommendation-Engine-Using-Matrix-Factorization-and-Semantic-Content-Analysis&year=2026&vol=14&primary=QVJULTE0NTE%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/[0.06] px-4 py-2.5 font-mono text-xs text-cyan-300 transition-all hover:border-cyan-300/60 hover:bg-cyan-400/10"
                >
                  READ PAPER
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 font-mono text-xs text-zinc-500">
                  <FileText size={14} />
                  DOI: 10.58190/ijircst.2026.2.1.102
                </div>
              </div>
            </div>

            {/* RIGHT RESEARCH MATRIX */}
            <div className="rounded-2xl border border-white/10 bg-[#030509] p-5 sm:p-6">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
                  RESEARCH_MATRIX
                </span>

                <BookOpen size={15} className="text-zinc-600" />
              </div>

              <div className="space-y-5">
                {researchStats.map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-1 font-mono text-[9px] tracking-[0.18em] text-zinc-600">
                      {label}
                    </div>

                    <div className="text-sm text-zinc-300">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="mb-3 font-mono text-[9px] tracking-[0.18em] text-zinc-600">
                  RESEARCH_DIRECTION
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,245,255,0.7)]" />
                  <span className="font-mono text-xs text-cyan-300">
                    HYBRID APPROACH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ENGINEERING DECISIONS */}
        <div className="mt-5">
          <div className="mb-6 flex items-center justify-between">
            <div className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">
              ENGINEERING_DECISIONS
            </div>

            <div className="font-mono text-[9px] text-zinc-700">
              EVIDENCE // 04
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {decisions.map((decision, index) => {
              const Icon = decision.icon;

              return (
                <motion.div
                  key={decision.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-7 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-zinc-500 transition-colors group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                      <Icon size={17} />
                    </div>

                    <span className="font-mono text-[10px] text-zinc-700">
                      DECISION_{decision.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-medium text-white">
                    {decision.title}
                  </h3>

                  <p className="mb-5 text-sm leading-6 text-zinc-500">
                    {decision.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {decision.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-black/20 px-2 py-1 font-mono text-[9px] text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs tracking-[0.12em] text-zinc-600">
              BUILD → MEASURE → STUDY → IMPROVE
            </p>

            <p className="font-mono text-[10px] tracking-[0.15em] text-zinc-700">
              ENGINEERING EVIDENCE // VERIFIED WORK
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
