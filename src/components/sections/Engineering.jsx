import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiGlobe, FiServer, FiTool } from "react-icons/fi";

const categories = [
  {
    id: "backend",
    number: "01",
    title: "BACKEND",
    icon: FiServer,
    description: "APIs, application logic & security",
    technologies: [
      {
        name: "Java",
        detail: "Primary language",
      },
      {
        name: "Spring Boot",
        detail: "Application framework",
      },
      {
        name: "Spring MVC",
        detail: "Web architecture",
      },
      {
        name: "Spring Security",
        detail: "Authentication & authorization",
      },
      {
        name: "Spring Data JPA",
        detail: "Persistence layer",
      },
      {
        name: "Hibernate",
        detail: "ORM",
      },
      {
        name: "JWT",
        detail: "Token-based authentication",
      },
      {
        name: "REST APIs",
        detail: "Service communication",
      },
    ],
  },

  {
    id: "data",
    number: "02",
    title: "DATA",
    icon: FiDatabase,
    description: "Relational & geospatial data systems",
    technologies: [
      {
        name: "PostgreSQL",
        detail: "Primary relational database",
      },
      {
        name: "PostGIS",
        detail: "Geospatial data",
      },
      {
        name: "MySQL",
        detail: "Relational database",
      },
      {
        name: "Hibernate Spatial",
        detail: "Spatial ORM",
      },
      {
        name: "SQL",
        detail: "Data querying",
      },
    ],
  },

  {
    id: "frontend",
    number: "03",
    title: "FRONTEND",
    icon: FiGlobe,
    description: "Interfaces & client applications",
    technologies: [
      {
        name: "React",
        detail: "Component-based UI",
      },
      {
        name: "JavaScript",
        detail: "Client-side logic",
      },
      {
        name: "HTML5",
        detail: "Semantic markup",
      },
      {
        name: "CSS3",
        detail: "Interface styling",
      },
      {
        name: "Bootstrap",
        detail: "Responsive UI",
      },
    ],
  },

  {
    id: "devops",
    number: "04",
    title: "DEVOPS",
    icon: FiTool,
    description: "Development, deployment & tooling",
    technologies: [
      {
        name: "Git",
        detail: "Version control",
      },
      {
        name: "GitHub",
        detail: "Code collaboration",
      },
      {
        name: "Docker",
        detail: "Containerization",
      },
      {
        name: "Docker Compose",
        detail: "Local orchestration",
      },
      {
        name: "Maven",
        detail: "Build automation",
      },
      {
        name: "Flyway",
        detail: "Database migrations",
      },
      {
        name: "Nginx",
        detail: "Web server / reverse proxy",
      },
    ],
  },
];

function Technology({ technology, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.035,
      }}
      whileHover={{ x: 5 }}
      className="group flex items-center justify-between gap-4 border-b border-white/5 py-3 last:border-0"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="font-mono text-[8px] text-zinc-700">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="truncate text-xs font-medium text-zinc-300 transition-colors group-hover:text-cyan-400">
          {technology.name}
        </span>
      </div>

      <span className="shrink-0 font-mono text-[8px] text-zinc-600 transition-colors group-hover:text-zinc-400">
        {technology.detail}
      </span>
    </motion.div>
  );
}

export default function Engineering() {
  return (
    <section id="engineering" className="relative z-10 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              ENGINEERING // 02
            </span>

            <span className="h-px w-12 bg-cyan-400/30" />
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                Engineering
                <span className="text-zinc-600"> Stack.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
                The technologies I use to design, build, secure and deploy
                full-stack applications.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-zinc-600">
              <FiCode size={12} />
              STACK.INDEX
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080b10]/75 p-6 backdrop-blur-xl md:p-7"
              >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Header */}
                <div className="relative flex items-start justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/5 text-cyan-400 transition-colors group-hover:border-cyan-400/30">
                      <Icon size={18} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[8px] text-zinc-700">
                          {category.number}
                        </span>

                        <h3 className="font-display text-lg font-semibold tracking-wide text-white">
                          {category.title}
                        </h3>
                      </div>

                      <p className="mt-1 text-[10px] text-zinc-600">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[8px] text-zinc-700">
                    {String(category.technologies.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Technologies */}
                <div className="relative mt-3">
                  {category.technologies.map((technology, index) => (
                    <Technology
                      key={technology.name}
                      technology={technology}
                      index={index}
                    />
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Engineering principles */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-3xl border border-white/10 bg-[#080b10]/60 p-6 backdrop-blur-xl md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-mono text-[9px] tracking-widest text-cyan-400">
                PRINCIPLE // 01
              </p>

              <h4 className="mt-3 font-display text-lg font-semibold text-white">
                Security First
              </h4>

              <p className="mt-2 text-xs leading-6 text-zinc-600">
                Authentication, authorization and role-scoped access are treated
                as part of the architecture.
              </p>
            </div>

            <div>
              <p className="font-mono text-[9px] tracking-widest text-cyan-400">
                PRINCIPLE // 02
              </p>

              <h4 className="mt-3 font-display text-lg font-semibold text-white">
                Data Matters
              </h4>

              <p className="mt-2 text-xs leading-6 text-zinc-600">
                Database design and data access patterns are considered
                alongside application logic.
              </p>
            </div>

            <div>
              <p className="font-mono text-[9px] tracking-widest text-cyan-400">
                PRINCIPLE // 03
              </p>

              <h4 className="mt-3 font-display text-lg font-semibold text-white">
                Ship What Works
              </h4>

              <p className="mt-2 text-xs leading-6 text-zinc-600">
                Development, deployment and maintainability are considered as
                part of the complete system.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
