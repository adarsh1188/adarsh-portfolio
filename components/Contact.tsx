"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    setTimeout(() => {
      window.location.href = `mailto:theadarsh2225@gmail.com?subject=${subject}&body=${body}`;
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", message: "" });
      }, 2500);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center"
      >
        <span className="text-xs font-mono text-accent uppercase tracking-widest">
          04 — Contact
        </span>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
          Let&apos;s build something <span className="text-gradient">together</span>
        </h2>
        <p className="mt-5 text-muted max-w-xl mx-auto">
          Got a project in mind, a role to fill, or just want to chat about
          scalable systems? Drop me a message — I usually reply within a day.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-4"
        >
          {[
            {
              Icon: Mail,
              label: "Email",
              value: "theadarsh2225@gmail.com",
              href: "mailto:theadarsh2225@gmail.com",
            },
            {
              Icon: Phone,
              label: "Phone",
              value: "+91 9565024251",
              href: "tel:+919565024251",
            },
            {
              Icon: MapPin,
              label: "Location",
              value: "Lucknow, India",
            },
          ].map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-primary/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all">
                <item.Icon size={20} className="text-accent" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted uppercase font-mono tracking-wider">
                  {item.label}
                </div>
                <div className="font-medium truncate">{item.value}</div>
              </div>
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-5"
          >
            <div className="text-xs text-muted uppercase font-mono tracking-wider mb-3">
              Find me on
            </div>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/adarsh1188", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/adarsh-verma-383b4915a/", label: "LinkedIn" },
                { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-primary hover:to-accent flex items-center justify-center transition-all hover:scale-110"
                >
                  <s.Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="md:col-span-3 glass rounded-2xl p-8 space-y-5 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-5">
            <Field
              label="Your name"
              type="text"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />
          </div>
          <Field
            label="Your message"
            textarea
            value={form.message}
            onChange={(v) => setForm({ ...form, message: v })}
          />

          <motion.button
            type="submit"
            disabled={status !== "idle"}
            whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full md:w-auto group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "sent" ? (
              <>
                <CheckCircle2 size={18} />
                Message ready — opening mail
              </>
            ) : status === "sending" ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send message
                <Send
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} Adarsh Verma. Built with Next.js + Framer Motion.</p>
        <p className="font-mono text-xs">
          designed & coded with ❤︎ in Lucknow
        </p>
      </footer>
    </section>
  );
}

function Field({
  label,
  type = "text",
  textarea,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const float = focused || value.length > 0;

  return (
    <label className="block relative">
      <span
        className={`absolute left-4 transition-all pointer-events-none font-mono ${
          float
            ? "top-1 text-[10px] text-accent uppercase tracking-wider"
            : "top-4 text-sm text-muted"
        }`}
      >
        {label}
      </span>
      {textarea ? (
        <textarea
          required
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-white/[0.04] border border-white/10 rounded-xl pt-6 pb-3 px-4 focus:border-primary/60 focus:bg-white/[0.06] outline-none transition-all resize-none"
        />
      ) : (
        <input
          required
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-white/[0.04] border border-white/10 rounded-xl pt-6 pb-3 px-4 focus:border-primary/60 focus:bg-white/[0.06] outline-none transition-all"
        />
      )}
    </label>
  );
}
