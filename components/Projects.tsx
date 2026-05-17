"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  period: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
  pattern: string;
  size: "lg" | "md" | "sm";
  emoji: string;
};

const projects: Project[] = [
  {
    title: "Anylearn.ai",
    period: "08/2025 — Present",
    description:
      "Contributed dynamic component rendering, SSR, and SSE rendering pipelines that significantly improved time-to-interactive and user experience on the live platform.",
    tech: ["Next.js", "SSR", "SSE", "React"],
    liveUrl: "https://anylearn.ai",
    accent: "from-purple-500 via-fuchsia-500 to-pink-500",
    pattern: "circuit",
    size: "lg",
    emoji: "🧠",
  },
  {
    title: "Scrooge Casino",
    period: "02/2023 — 06/2025",
    description:
      "Real-time multiplayer Poker & Blackjack with secure affiliate program, third-party game providers, and a custom Electron-based admin app for virtual payouts.",
    tech: ["Node.js", "WebSocket", "MongoDB", "Electron"],
    liveUrl: "https://scrooge.casino",
    accent: "from-amber-500 via-orange-500 to-red-500",
    pattern: "cards",
    size: "md",
    emoji: "🎰",
  },
  {
    title: "Lucky Rush",
    period: "05/2024 — 06/2025",
    description:
      "Integrated crypto payment systems and multiple third-party game providers via secure APIs. Built admin-side tools for US-based user and transaction management.",
    tech: ["Node.js", "Crypto", "REST APIs", "MongoDB"],
    liveUrl: "https://luckyrush.io",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    pattern: "crypto",
    size: "md",
    emoji: "🚀",
  },
  {
    title: "Pansari Group ERP",
    period: "09/2020 — 01/2023",
    description:
      "Custom software for inventory, staff management, attendance tracking, and report generation — tailored to streamline daily business operations.",
    tech: ["Node.js", "MySQL", "REST APIs"],
    liveUrl: "https://pansarigroup.com",
    accent: "from-blue-500 via-indigo-500 to-violet-500",
    pattern: "dots",
    size: "sm",
    emoji: "📦",
  },
  {
    title: "Pharma",
    period: "Personal Project",
    description:
      "Pharmacy e-commerce experience with product browsing, search, and a clean, responsive UI. Deployed on Vercel.",
    tech: ["Next.js", "React", "Tailwind"],
    liveUrl: "https://pharma-kappa-ten.vercel.app/",
    githubUrl: "https://github.com/adarsh1188/Pharma",
    accent: "from-green-500 via-emerald-500 to-teal-500",
    pattern: "dots",
    size: "md",
    emoji: "💊",
  },
  {
    title: "SolarHub",
    period: "Personal Project",
    description:
      "Marketing site for a solar energy product — built with modern web stack, focus on performance, smooth interactions, and crisp visuals.",
    tech: ["Next.js", "React", "Tailwind"],
    liveUrl: "https://solarhub-rho.vercel.app/",
    githubUrl: "https://github.com/adarsh1188/solarhub",
    accent: "from-yellow-400 via-orange-500 to-red-500",
    pattern: "waves",
    size: "md",
    emoji: "☀️",
  },
  {
    title: "Casino Admin Desktop App",
    period: "2023 — 2025",
    description:
      "Secure Electron desktop application for casino administrators to manage user activity, process virtual payouts, and review transaction logs in real time.",
    tech: ["Electron", "React", "Node.js"],
    accent: "from-slate-500 via-gray-500 to-zinc-500",
    pattern: "grid",
    size: "sm",
    emoji: "🖥️",
  },
  {
    title: "Multiplayer Poker Engine",
    period: "2023 — 2024",
    description:
      "Real-time poker game logic engine with hand evaluation, side-pot handling, anti-cheat checks, and seamless multi-table support over WebSockets.",
    tech: ["Node.js", "WebSocket", "Redis"],
    accent: "from-rose-500 via-pink-500 to-fuchsia-500",
    pattern: "waves",
    size: "md",
    emoji: "🃏",
  },
];

const sizeMap: Record<Project["size"], string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
  sm: "md:col-span-1",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <span className="text-xs font-mono text-accent uppercase tracking-widest">
          02 — Selected work
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          Things I&apos;ve built in{" "}
          <span className="text-gradient">production</span>
        </h2>
        <p className="mt-4 text-muted max-w-2xl">
          A mix of real-time multiplayer systems, payment integrations, and
          business platforms — focused on backend logic, API design, and
          scalability.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 auto-rows-[260px] gap-5">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl glass cursor-pointer ${sizeMap[project.size]}`}
    >
      {/* Gradient background that intensifies on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10 group-hover:opacity-25 transition-opacity duration-500`}
      />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
        <PatternSvg name={project.pattern} />
      </div>

      {/* Big emoji watermark */}
      <div className="absolute -bottom-6 -right-6 text-[160px] opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 select-none">
        {project.emoji}
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-3">
            <span className="text-xs font-mono text-muted">
              {project.period}
            </span>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={14} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live demo"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-4 group-hover:text-white/80 transition-colors">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-1 rounded-md bg-black/40 backdrop-blur-sm text-white/80 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Glow border on hover */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${project.accent}`}
        style={{
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.article>
  );
}

function PatternSvg({ name }: { name: string }) {
  switch (name) {
    case "circuit":
      return (
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <defs>
            <pattern
              id="p-circuit"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 30h60M30 0v60"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle cx="30" cy="30" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#p-circuit)" />
        </svg>
      );
    case "dots":
      return (
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="p-dots"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#p-dots)" />
        </svg>
      );
    case "grid":
      return (
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="p-grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M32 0H0v32"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#p-grid)" />
        </svg>
      );
    case "waves":
      return (
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="p-waves"
              width="60"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 10 Q15 0 30 10 T60 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#p-waves)" />
        </svg>
      );
    case "cards":
      return (
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="p-cards"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="8"
                y="6"
                width="24"
                height="28"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#p-cards)" />
        </svg>
      );
    case "crypto":
      return (
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="p-crypto"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="25,5 45,25 25,45 5,25"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#p-crypto)" />
        </svg>
      );
    default:
      return null;
  }
}
