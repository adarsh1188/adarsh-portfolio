"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiElectron,
  SiSocketdotio,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Database, Lock, Server, Cpu, Cloud, Code2 } from "lucide-react";

const skillGroups = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    color: "from-yellow-400 to-orange-500",
    skills: [
      { name: "JavaScript", level: 95, Icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", level: 85, Icon: SiTypescript, color: "#3178c6" },
      { name: "Node.js", level: 95, Icon: SiNodedotjs, color: "#5fa04e" },
      { name: "React", level: 88, Icon: SiReact, color: "#61dafb" },
      { name: "Next.js", level: 88, Icon: SiNextdotjs, color: "#ffffff" },
      { name: "Express", level: 92, Icon: SiExpress, color: "#ffffff" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "from-emerald-400 to-cyan-500",
    skills: [
      { name: "MongoDB", level: 92, Icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", level: 85, Icon: SiMysql, color: "#4479a1" },
      { name: "Redis", level: 80, Icon: SiRedis, color: "#dc382d" },
    ],
  },
  {
    title: "Real-time & Desktop",
    icon: Cpu,
    color: "from-pink-500 to-fuchsia-500",
    skills: [
      { name: "WebSockets", level: 90, Icon: SiSocketdotio, color: "#ffffff" },
      { name: "Electron", level: 82, Icon: SiElectron, color: "#47848f" },
    ],
  },
  {
    title: "Cloud & Infra",
    icon: Cloud,
    color: "from-blue-500 to-violet-500",
    skills: [
      { name: "AWS", level: 75, Icon: FaAws, color: "#ff9900" },
    ],
  },
];

const expertise = [
  { Icon: Server, label: "Scalable API Design" },
  { Icon: Lock, label: "JWT / OAuth Authentication" },
  { Icon: Database, label: "Data Modeling" },
  { Icon: Cpu, label: "Real-time Multiplayer" },
  { Icon: Cloud, label: "Third-party Integrations" },
  { Icon: Code2, label: "Modular Architecture" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <span className="text-xs font-mono text-accent uppercase tracking-widest">
          03 — Toolbox
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          Tech I reach for{" "}
          <span className="text-gradient">every day</span>
        </h2>
      </motion.div>

      {/* Skill bars grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {skillGroups.map((group, gIdx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: gIdx * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center`}
              >
                <group.icon size={18} className="text-black" />
              </div>
              <h3 className="font-bold">{group.title}</h3>
            </div>

            <div className="space-y-4">
              {group.skills.map((skill, sIdx) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={gIdx * 0.1 + sIdx * 0.05}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expertise pills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-6">
          Specialized in
        </h3>
        <div className="flex flex-wrap gap-3">
          {expertise.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="group flex items-center gap-2 px-5 py-3 rounded-full glass hover:border-primary/50 transition-all cursor-default"
            >
              <item.Icon
                size={16}
                className="text-accent group-hover:text-primary transition-colors"
              />
              <span className="text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Infinite marquee of tech logos */}
      <div className="relative overflow-hidden glass rounded-2xl py-8 mt-12">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {skillGroups
                .flatMap((g) => g.skills)
                .map((s) => (
                  <div
                    key={`${i}-${s.name}`}
                    className="flex items-center gap-3 text-muted hover:text-white transition-colors"
                  >
                    <s.Icon size={28} style={{ color: s.color }} />
                    <span className="text-sm font-mono">{s.name}</span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  delay,
}: {
  skill: { name: string; level: number; Icon: any; color: string };
  delay: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <skill.Icon size={16} style={{ color: skill.color }} />
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary via-accent to-pink-500 rounded-full"
        />
      </div>
    </div>
  );
}
