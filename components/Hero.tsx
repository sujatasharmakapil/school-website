"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Users, Trophy, BookOpen, GraduationCap, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WORDS = ["Excellence", "Innovation", "Leadership", "Discovery", "Character"];

const STATS = [
  { value: "2,500+", label: "Students",    icon: Users        },
  { value: "98%",    label: "Pass Rate",   icon: Trophy       },
  { value: "50+",    label: "Awards",      icon: BookOpen     },
  { value: "30+",    label: "Years",       icon: GraduationCap},
];

export default function Hero() {
  const [wordIdx,   setWordIdx]   = useState(0);
  const [displayed, setDisplayed] = useState("Excellence");
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const word = WORDS[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length)
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 85);
    else if (!deleting && displayed.length === word.length)
      t = setTimeout(() => setDeleting(true), 2400);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 50);
    else { setDeleting(false); setWordIdx(i => (i + 1) % WORDS.length); }
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIdx]);

  return (
    <section id="home" className="relative flex flex-col" style={{ minHeight: "100svh" }}>

      {/* ══════════════════════════════════════
          BACKGROUND IMAGE — fills 100%
      ══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/top.png"
          alt="Bright Horizons Academy"
          fill
          priority
          quality={92}
          className="object-cover object-center"
        />
        {/* ── Overlay strategy:
              Dark mode  → deep dark gradient, image barely peeks through on right
              Light mode → strong white wash on left, natural image on right         ── */}

        {/* Base colour overlay */}
        <div className="absolute inset-0 dark:bg-slate-950/75 bg-white/55" />

        {/* Left panel gradient — gives the text a clean reading surface */}
        <div
          className="absolute inset-y-0 left-0 w-full md:w-[65%] lg:w-[55%]"
          style={{
            background: "linear-gradient(105deg, var(--bg) 0%, var(--bg) 45%, transparent 100%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-32"
          style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
        />

        {/* Subtle vignette on image-side for depth */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 80% at 75% 50%, transparent 30%, rgba(0,0,0,0.25) 100%)" }}
        />
      </div>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-28 pb-10">

          {/* Label row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3 mb-9"
          >
            <div className="w-9 h-[2px] rounded-full bg-electric" />
            <span className="mono-tag tracking-[0.2em]">
              Bright Horizons Academy · Est. 1995 · CBSE
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-8">
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(3.4rem, 7.5vw, 6.2rem)", color: "var(--fg)" }}
            >
              Where
            </motion.p>

            {/* Typewriter line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="font-display font-bold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(3.4rem, 7.5vw, 6.2rem)" }}
            >
              <span className="text-electric-2">{displayed}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block rounded-sm align-middle bg-electric-2 ml-1.5"
                style={{ width: "4px", height: "0.78em" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(3.4rem, 7.5vw, 6.2rem)", color: "var(--fg-3)" }}
            >
              Begins.
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.6 }}
            className="text-[1.08rem] leading-[1.75] mb-10 max-w-[430px]"
            style={{ color: "var(--fg-2)" }}
          >
            Nurturing 2,500+ students across KG–Grade 12 with world-class
            academics, vibrant arts, championship sport, and cutting-edge technology.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.72 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2 px-8 font-semibold text-white rounded-full transition-all duration-200 hover:opacity-90"
              style={{
                height: "52px",
                background: "var(--electric)",
                boxShadow: "0 0 0 0 var(--electric-glow)",
                fontSize: "0.95rem",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px var(--electric-glow)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
            >
              Apply for Admission
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="group inline-flex items-center gap-1.5 font-medium text-[0.95rem] transition-all duration-200"
              style={{ height: "52px", color: "var(--fg-2)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--fg)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--fg-2)"}
            >
              Discover Our Story
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* ── Stats row ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.84 }}
            className="flex flex-wrap gap-8 pt-8"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.88 + i * 0.07 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--electric-soft)" }}
                >
                  <s.icon className="w-4.5 h-4.5 text-electric-2" strokeWidth={1.8} />
                </div>
                <div>
                  <p
                    className="font-display font-bold leading-none"
                    style={{ fontSize: "1.55rem", color: "var(--fg)" }}
                  >
                    {s.value}
                  </p>
                  <p className="mono-tag mt-1">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MARQUEE TICKER
      ══════════════════════════════════════ */}
      <div
        className="relative z-10 overflow-hidden py-3"
        style={{
          borderTop: "1px solid var(--border)",
          background: "var(--bg-2)",
        }}
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex items-center flex-shrink-0">
              {[
                "Academic Excellence", "CBSE Affiliated", "ISO 9001 Certified",
                "Smart Classrooms",    "50+ Awards",      "International Exchange",
                "Award-winning Faculty","30 Years Legacy",
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-3 px-8 whitespace-nowrap mono-tag">
                  <span className="w-1 h-1 rounded-full bg-electric opacity-50 flex-shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
