"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, FolderGit2, Mail, Sparkles } from "lucide-react";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#skills", label: "Skills", icon: Sparkles },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-pink-500 flex items-center justify-center font-bold text-white shadow-lg shadow-primary/30">
              <span className="font-mono text-lg">A</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-accent to-pink-500 blur-md opacity-50 group-hover:opacity-80 transition" />
            </div>
            <span className="font-semibold hidden sm:block">
              Adarsh<span className="text-gradient">.dev</span>
            </span>
          </motion.a>

          <ul className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-2">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 text-sm rounded-full transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-muted hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full border border-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/40 transition-shadow"
          >
            Let&apos;s talk
          </a>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg glass"
          >
            <Menu size={20} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="absolute right-0 top-0 h-full w-72 bg-surface border-l border-white/10 p-6 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-semibold">
                  Adarsh<span className="text-gradient">.dev</span>
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5"
                >
                  <X size={20} />
                </button>
              </div>
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Icon size={18} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 text-center px-5 py-3 rounded-xl font-medium bg-gradient-to-r from-primary to-accent"
              >
                Let&apos;s talk
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
