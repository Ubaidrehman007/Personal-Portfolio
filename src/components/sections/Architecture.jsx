import { motion } from "framer-motion";
import { useState } from "react";
import {
  ShieldCheck,
  Database,
  Globe,
  Server,
  Layers3,
  MapPinned,
  Container,
  Activity,
  LockKeyhole,
  Workflow,
} from "lucide-react";

const layers = [
  {
    id: "client",
    label: "CLIENT",
    title: "React / Vite",
    icon: Globe,
    color: "cyan",
    description:
      "The presentation layer responsible for dashboards, issue reporting, authentication flows, and API-driven UI state.",
    technologies: ["React", "Vite", "JavaScript"],
  },
  {
    id: "api",
    label: "API",
    title: "REST Layer",
    icon: Workflow,
    color: "violet",
    description:
      "A structured REST interface that separates HTTP concerns from application and persistence logic.",
    technologies: ["REST APIs", "JSON", "HTTP"],
  },
  {
    id: "application",
    label: "APPLICATION",
    title: "Spring Boot",
    icon: Server,
    color: "cyan",
    description:
      "The application layer where business rules, issue workflows, SLA handling, and service orchestration live.",
    technologies: ["Java 21", "Spring Boot", "Spring MVC"],
  },
  {
    id: "security",
    label: "SECURITY",
    title: "Spring Security",
    icon: ShieldCheck,
    color: "violet",
    description:
      "Authentication and authorization layer protecting application resources with JWT and role-based access.",
    technologies: ["Spring Security", "JWT", "RBAC"],
  },
  {
    id: "persistence",
    label: "PERSISTENCE",
    title: "JPA / Hibernate",
    icon: Layers3,
    color: "cyan",
    description:
      "The persistence layer maps domain entities to relational data while keeping database access organized.",
    technologies: ["Spring Data JPA", "Hibernate", "Flyway"],
  },
  {
    id: "database",
    label: "DATA",
    title: "PostgreSQL + PostGIS",
    icon: Database,
    color: "violet",
    description:
      "The data layer stores transactional and spatial information, including geographic issue coordinates.",
    technologies: ["PostgreSQL", "PostGIS", "GiST Index"],
  },
];

const supportingSystems = [
  {
    title: "GEOSPATIAL",
    value: "PostGIS",
    detail: "geometry(Point, 4326) + nearby search",
    icon: MapPinned,
  },
  {
    title: "SECURITY",
    value: "JWT / RBAC",
    detail: "role-aware protected resources",
    icon: LockKeyhole,
  },
  {
    title: "OPERATIONS",
    value: "SLA + AUDIT",
    detail: "status history and traceability",
    icon: Activity,
  },
  {
    title: "DEPLOYMENT",
    value: "Docker",
    detail: "containerized application workflow",
    icon: Container,
  },
];

const traceLines = [
  "$ POST /api/v1/issues",
  "→ JWT verification ........ PASS",
  "→ request validation ...... PASS",
  "→ business service ........ PASS",
  "→ spatial processing ...... PASS",
  "→ persistence transaction . PASS",
  "→ issue created ........... 201",
];

export default function Architecture() {
  const [activeLayer, setActiveLayer] = useState("application");

  const active = layers.find((layer) => layer.id === activeLayer);

  return (
    <section id="architecture" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400/60" />
            ARCHITECTURE // 03
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                How I build
                <span className="text-zinc-500"> systems.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-zinc-400 lg:justify-self-end">
              A production system is more than a frontend and a database. Each
              layer has a responsibility, and the boundaries between those
              layers are where reliability is built.
            </p>
          </div>
        </motion.div>

        {/* ARCHITECTURE PIPELINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl sm:p-6 lg:p-8"
        >
          {/* Grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]" />

          <div className="relative">
            {/* Top label */}
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
                SYSTEM_FLOW / SMART_CIVIC
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                ARCHITECTURE ACTIVE
              </div>
            </div>

            {/* Pipeline */}
            <div className="grid gap-3 lg:grid-cols-6">
              {layers.map((layer, index) => {
                const Icon = layer.icon;
                const isActive = activeLayer === layer.id;

                return (
                  <div key={layer.id} className="relative">
                    <motion.button
                      type="button"
                      onClick={() => setActiveLayer(layer.id)}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group relative w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-cyan-400/50 bg-cyan-400/[0.07] shadow-[0_0_35px_rgba(0,245,255,0.08)]"
                          : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"
                      }`}
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl border ${
                            isActive
                              ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                              : "border-white/10 bg-white/5 text-zinc-400"
                          }`}
                        >
                          <Icon size={17} />
                        </div>

                        <span className="font-mono text-[9px] text-zinc-600">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="mb-1 font-mono text-[9px] tracking-[0.18em] text-zinc-500">
                        {layer.label}
                      </div>

                      <div className="text-sm font-medium text-zinc-100">
                        {layer.title}
                      </div>

                      {isActive && (
                        <motion.div
                          layoutId="architecture-active"
                          className="absolute inset-x-4 -bottom-px h-px bg-cyan-400"
                        />
                      )}
                    </motion.button>

                    {/* Connector */}
                    {index < layers.length - 1 && (
                      <div className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden w-3 -translate-y-1/2 lg:block">
                        <div className="relative h-px w-full bg-white/15">
                          <motion.div
                            animate={{ x: [0, 10, 0], opacity: [0, 1, 0] }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              delay: index * 0.25,
                            }}
                            className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(0,245,255,0.9)]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Active layer detail */}
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-5 grid gap-5 rounded-2xl border border-white/10 bg-black/40 p-5 lg:grid-cols-[1fr_auto] lg:p-6"
            >
              <div>
                <div className="mb-2 font-mono text-[10px] tracking-[0.2em] text-cyan-400">
                  ACTIVE_LAYER // {active.label}
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">
                  {active.title}
                </h3>

                <p className="max-w-3xl text-sm leading-7 text-zinc-400">
                  {active.description}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-2 lg:max-w-xs lg:justify-end">
                {active.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* SUPPORTING SYSTEMS */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supportingSystems.map((system, index) => {
            const Icon = system.icon;

            return (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-cyan-400/20 hover:bg-white/[0.04]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Icon
                    size={17}
                    className="text-zinc-500 transition-colors group-hover:text-cyan-400"
                  />

                  <span className="font-mono text-[9px] text-zinc-600">
                    SYS_0{index + 1}
                  </span>
                </div>

                <div className="mb-1 font-mono text-[9px] tracking-[0.18em] text-zinc-500">
                  {system.title}
                </div>

                <div className="mb-2 text-sm font-medium text-zinc-100">
                  {system.value}
                </div>

                <p className="text-xs leading-5 text-zinc-500">
                  {system.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* REQUEST TRACE */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-black/40 p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
                DESIGN_PRINCIPLES
              </span>

              <span className="font-mono text-[9px] text-cyan-400">03</span>
            </div>

            <div className="space-y-5">
              <div>
                <div className="mb-1 text-sm font-medium text-white">
                  Separation of concerns
                </div>
                <p className="text-xs leading-5 text-zinc-500">
                  Keep controllers, services, security, persistence, and
                  infrastructure responsibilities clearly separated.
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <div className="mb-1 text-sm font-medium text-white">
                  Security at the boundary
                </div>
                <p className="text-xs leading-5 text-zinc-500">
                  Authentication and authorization are treated as part of the
                  system design, not as a final patch.
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <div className="mb-1 text-sm font-medium text-white">
                  Data drives decisions
                </div>
                <p className="text-xs leading-5 text-zinc-500">
                  Spatial indexing, status history, SLA tracking, and structured
                  persistence support operational decisions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#020408] shadow-2xl"
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>

              <span className="font-mono text-[9px] tracking-[0.15em] text-zinc-600">
                REQUEST_TRACE
              </span>
            </div>

            {/* Terminal body */}
            <div className="min-h-[300px] p-5 font-mono text-xs leading-7 sm:p-6">
              {traceLines.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08,
                  }}
                  className={
                    index === 0
                      ? "text-cyan-300"
                      : index === traceLines.length - 1
                        ? "text-emerald-400"
                        : "text-zinc-500"
                  }
                >
                  {line}
                </motion.div>
              ))}

              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mt-2 inline-block h-4 w-1.5 bg-cyan-400 align-middle"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-xs tracking-[0.15em] text-zinc-600">
            ARCHITECTURE IS NOT A DIAGRAM.
            <span className="text-zinc-400"> IT IS A SET OF TRADE-OFFS.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
