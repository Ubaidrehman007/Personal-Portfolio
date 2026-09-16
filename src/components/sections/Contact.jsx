import { motion } from "framer-motion";
import { ArrowUpRight, Check, Mail, Send, Terminal } from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const channels = [
  {
    label: "EMAIL",
    value: "Open email channel",
    href: "mailto:your-urkhan556@gmail.com",
    icon: Mail,
  },
  {
    label: "GITHUB",
    value: "View source systems",
    href: "https://github.com/Ubaidrehman007",
    icon: FaGithub,
  },
  {
    label: "LINKEDIN",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/ubaid-rehman-9a5470269/",
    icon: FaLinkedinIn,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "urkhan556@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
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
            CONTACT // 06
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s build something
              <span className="text-zinc-500"> useful.</span>
            </h2>

            <p className="max-w-xl text-sm leading-7 text-zinc-400 lg:justify-self-end">
              Have a product idea, engineering problem, or opportunity? Open a
              channel and let&apos;s talk about it.
            </p>
          </div>
        </motion.div>

        {/* MAIN CONTACT AREA */}
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* TERMINAL */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-[#020408] shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>

              <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-zinc-600">
                <Terminal size={12} />
                CONTACT_TERMINAL
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 sm:p-8">
              <div className="space-y-4 font-mono text-xs leading-6">
                <div>
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-zinc-300">initiate_connection</span>
                </div>

                <div className="text-zinc-600">
                  Initializing communication channel...
                </div>

                <div className="text-emerald-400">✓ channel available</div>

                <div className="border-l border-white/10 pl-4 text-zinc-500">
                  <div>engineer&nbsp;&nbsp;: Ubaid Rehman</div>
                  <div>
                    focus&nbsp;&nbsp;&nbsp;&nbsp;: Java / Spring / Full Stack
                  </div>
                  <div>location&nbsp;&nbsp;: Lucknow, India</div>
                  <div>
                    status&nbsp;&nbsp;&nbsp;&nbsp;: open to opportunities
                  </div>
                </div>

                <div className="pt-3">
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-zinc-300">select_channel</span>
                </div>
              </div>

              {/* Email Action */}
              <button
                type="button"
                onClick={copyEmail}
                className="group mt-7 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-left transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                    {copied ? <Check size={17} /> : <Mail size={17} />}
                  </div>

                  <div>
                    <div className="font-mono text-[9px] tracking-[0.18em] text-zinc-600">
                      PRIMARY_CHANNEL
                    </div>

                    <div className="mt-1 text-sm text-zinc-300">
                      {copied ? "EMAIL COPIED" : email}
                    </div>
                  </div>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                />
              </button>

              <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-zinc-600">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                READY TO RECEIVE CONNECTION
              </div>
            </div>
          </motion.div>

          {/* CHANNELS */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
                AVAILABLE_CHANNELS
              </span>

              <Send size={14} className="text-zinc-600" />
            </div>

            <div className="space-y-3">
              {channels.map((channel, index) => {
                const Icon = channel.icon;

                return (
                  <motion.a
                    key={channel.label}
                    href={channel.href}
                    target={
                      channel.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      channel.href.startsWith("mailto:")
                        ? undefined
                        : "noreferrer"
                    }
                    whileHover={{ x: 4 }}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.045]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-zinc-500 transition-colors group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                        <Icon size={17} />
                      </div>

                      <div>
                        <div className="font-mono text-[9px] tracking-[0.18em] text-zinc-600">
                          0{index + 1} // {channel.label}
                        </div>

                        <div className="mt-1 text-sm text-zinc-300">
                          {channel.value}
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-zinc-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* What to contact for */}
            <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">
              <div className="mb-4 font-mono text-[9px] tracking-[0.18em] text-cyan-400">
                GOOD_REASONS_TO_CONNECT
              </div>

              <div className="space-y-3">
                {[
                  "Java / Spring Boot opportunities",
                  "Backend or Full-Stack projects",
                  "API and database engineering",
                  "Technical collaboration",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-xs text-zinc-500"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-700">
            CONNECTION_STATUS
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 font-mono text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
            ONLINE
          </div>
        </motion.div>
      </div>
    </section>
  );
}
