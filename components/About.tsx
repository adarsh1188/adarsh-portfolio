"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const timeline = [
  {
    type: "work",
    role: "Sr. SDE 1",
    company: "ScaleupAlly",
    location: "Noida",
    period: "08/2025 — Present",
    description:
      "Leading frontend efforts on anylearn.ai. Managing two junior developers, implementing dynamic component rendering, SSR, and SSE for performance and UX wins.",
    tags: ["Next.js", "SSR", "SSE", "Leadership"],
  },
  {
    type: "work",
    role: "Software Developer",
    company: "Websultanate Software Technologies",
    location: "Lucknow",
    period: "02/2023 — 06/2025",
    description:
      "Built scrooge.casino and luckyrush.io social casino platforms. Engineered multiplayer Poker & Blackjack with real-time interactivity, affiliate program, payment gateways, third-party provider integrations, and a secure admin desktop app.",
    tags: ["Node.js", "Real-time", "Electron", "Crypto"],
  },
  {
    type: "work",
    role: "Software Developer",
    company: "MakeItSimple",
    location: "Delhi",
    period: "09/2020 — 01/2023",
    description:
      "Built inventory & business management software for SMBs. Designed RESTful APIs, database schemas, and backend logic for stock tracking, invoicing, and user management.",
    tags: ["REST APIs", "MongoDB", "MySQL"],
  },
  {
    type: "edu",
    role: "B.Tech, Computer Science Engineering",
    company: "Dr. APJ Abdul Kalam Technical University (AKTU)",
    location: "India",
    period: "06/2015 — 05/2019",
    description: "Graduated with 7.0 CGPA. Foundation in CS, algorithms, and software engineering.",
    tags: ["CS Fundamentals"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-12 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-5"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-widest">
            01 — About
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Backend-first engineer with a{" "}
            <span className="text-gradient">product mindset</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="md:col-span-7 space-y-4 text-muted leading-relaxed"
        >
          <p>
            I&apos;m a MERN-stack developer based in{" "}
            <span className="text-white">Lucknow, India</span>, with 5+ years of
            experience shipping production systems — from social casino
            platforms with real-time multiplayer to inventory tools used by
            growing businesses every day.
          </p>
          <p>
            My sweet spot is{" "}
            <span className="text-white">
              backend architecture, scalable APIs, and modular system design
            </span>{" "}
            — but I&apos;m equally comfortable in React/Next.js territory when a
            feature needs to span the whole stack. Currently a Sr. SDE 1 at
            ScaleupAlly contributing to{" "}
            <a
              href="https://anylearn.ai"
              target="_blank"
              rel="noreferrer"
              className="text-white underline decoration-primary/60 underline-offset-4"
            >
              anylearn.ai
            </a>
            .
          </p>
          <p>
            What I care about: clean code, secure authentication patterns
            (JWT/OAuth), thoughtful data modeling, performance under load, and
            shipping things that actually work in production.
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative">
        <span className="text-xs font-mono text-accent uppercase tracking-widest">
          Journey
        </span>
        <h3 className="mt-3 text-2xl font-bold mb-12">Experience timeline</h3>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const Icon = item.type === "edu" ? GraduationCap : Briefcase;
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={`${item.company}-${idx}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                    <Icon size={14} className="text-accent" />
                  </div>

                  <div
                    className={`pl-14 md:pl-0 ${
                      isLeft
                        ? "md:pr-12 md:text-right md:col-start-1"
                        : "md:pl-12 md:col-start-2"
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 hover:border-primary/40 transition-all group hover:-translate-y-1 duration-300">
                      <div
                        className={`flex flex-wrap items-center gap-3 text-xs text-muted mb-3 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar size={12} />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        {item.role}
                      </h4>
                      <p className="text-accent text-sm font-medium mb-3">
                        {item.company}
                      </p>
                      <p className="text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
