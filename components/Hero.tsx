"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "scalable backend systems",
  "interactive web apps",
  "real-time multiplayer games",
  "secure API architectures",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <motion.div
          className="absolute top-20 -left-20 w-[480px] h-[480px] rounded-full bg-primary/30 blur-[120px]"
          animate={{
            x: mouse.x * 40,
            y: mouse.y * 40,
          }}
          transition={{ type: "spring", damping: 30 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-accent/25 blur-[120px]"
          animate={{
            x: mouse.x * -50,
            y: mouse.y * -30,
          }}
          transition={{ type: "spring", damping: 30 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-pink-500/20 blur-[100px]"
          animate={{
            x: mouse.x * 30,
            y: mouse.y * -50,
          }}
          transition={{ type: "spring", damping: 30 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-muted">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I&apos;m <span className="text-gradient">Adarsh Verma</span>
            <br />
            <span className="text-white/90">I build</span>{" "}
            <span className="relative inline-block">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gradient inline-block"
              >
                {roles[roleIdx]}
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-muted max-w-xl"
          >
            Sr. SDE @ ScaleupAlly. MERN stack developer with deep focus on
            backend architecture, real-time systems, and clean, modular code.
            Currently shipping{" "}
            <a
              href="https://anylearn.ai"
              target="_blank"
              rel="noreferrer"
              className="text-white underline decoration-primary/60 underline-offset-4 hover:decoration-primary"
            >
              Anylearn.ai
            </a>
            .
          </motion.p>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 hover:shadow-primary/60 transition-shadow"
            >
              View my work
              <ArrowDown
                size={16}
                className="group-hover:translate-y-1 transition-transform"
              />
            </a>
            <a
              href="/Adarsh_Verma_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium glass hover:bg-white/10 transition-colors"
            >
              <Download size={16} />
              Resume
            </a>

            <div className="flex items-center gap-2 ml-2">
              {[
                { href: "https://github.com/adarsh1188", icon: Github, label: "GitHub" },
                {
                  href: "https://www.linkedin.com/in/adarsh-verma-383b4915a/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:theadarsh2225@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted"
          >
            {[
              { k: "5+", v: "Years experience" },
              { k: "20+", v: "Projects shipped" },
              { k: "Real-time", v: "Multiplayer games" },
              { k: "MERN", v: "Stack expert" },
            ].map((s) => (
              <div key={s.v} className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white font-mono">
                  {s.k}
                </span>
                <span>{s.v}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: floating code card */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="md:col-span-5 hidden md:block"
          style={{
            transform: `perspective(1000px) rotateY(${mouse.x * 6}deg) rotateX(${
              -mouse.y * 6
            }deg)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-pink-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative glass rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-black/40">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-muted font-mono">
                  adarsh.ts
                </span>
              </div>
              <pre className="p-6 text-sm font-mono leading-relaxed overflow-hidden">
                <code>
<span className="text-pink-400">const</span> <span className="text-cyan-300">adarsh</span> <span className="text-pink-400">=</span> {"{"}
{"\n  "}<span className="text-purple-300">name</span>: <span className="text-emerald-300">&apos;Adarsh Verma&apos;</span>,
{"\n  "}<span className="text-purple-300">role</span>: <span className="text-emerald-300">&apos;Sr. SDE 1 @ ScaleupAlly&apos;</span>,
{"\n  "}<span className="text-purple-300">stack</span>: [
{"\n    "}<span className="text-emerald-300">&apos;Node.js&apos;</span>, <span className="text-emerald-300">&apos;React&apos;</span>, <span className="text-emerald-300">&apos;Next.js&apos;</span>,
{"\n    "}<span className="text-emerald-300">&apos;MongoDB&apos;</span>, <span className="text-emerald-300">&apos;Redis&apos;</span>, <span className="text-emerald-300">&apos;AWS&apos;</span>
{"\n  "}],
{"\n  "}<span className="text-purple-300">focus</span>: <span className="text-emerald-300">&apos;scalable backend systems&apos;</span>,
{"\n  "}<span className="text-purple-300">building</span>: <span className="text-emerald-300">&apos;anylearn.ai&apos;</span>,
{"\n  "}<span className="text-yellow-300">openToWork</span>: <span className="text-orange-300">true</span>
{"\n"}{"}"};
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted text-xs font-mono"
        >
          <span>scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
