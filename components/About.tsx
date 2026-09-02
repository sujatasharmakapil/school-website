"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Lightbulb, Heart, Globe2, ShieldCheck, Leaf,
  ArrowUpRight, CheckCircle, Trophy, Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const pillars = [
  { icon: Lightbulb,   title: "Innovation",    desc: "Creative thinking woven into every lesson.", color: "#84cc16" },
  { icon: Heart,       title: "Empathy",        desc: "Emotional intelligence alongside academics.", color: "#f472b6" },
  { icon: Globe2,      title: "Global View",    desc: "Preparing students for a borderless world.", color: "#38bdf8" },
  { icon: ShieldCheck, title: "Integrity",      desc: "Character-building as core curriculum.",     color: "#fb923c" },
  { icon: Leaf,        title: "Sustainability", desc: "Green campus and eco-conscious education.",  color: "#4ade80" },
];

const highlights = [
  "CBSE Board & Accredited", "ISO 9001:2015 Certified",
  "Smart Digital Classrooms", "International Exchange",
  "Olympic-size Sports Complex", "Research & Innovation Labs",
];

const timeline = [
  { year: "1995", event: "Founded with a vision of holistic education" },
  { year: "2001", event: "First batch of CBSE toppers" },
  { year: "2008", event: "Launched Science & Innovation Wing" },
  { year: "2015", event: "ISO 9001:2015 Certification achieved" },
  { year: "2019", event: "International Exchange Program launched" },
  { year: "2024", event: "Ranked #1 school in the region" },
];

export default function About() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [24, -24]);

  const [refMain,     inMain]     = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refPillars,  inPillars]  = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refTimeline, inTimeline] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="overflow-hidden" style={{ background: "var(--bg)" }} ref={wrapRef}>

      {/* ── Part 1: Split ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-24" ref={refMain}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Photo panel ── */}
          <motion.div style={{ y: yImg }} className="relative">
            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden w-full" style={{ aspectRatio: "3/4", border: "1px solid var(--border)" }}>
              <Image
                src="/images/9.png"
                alt="Students at Bright Horizons Academy"
                fill
                className="object-cover object-center"
              />
              {/* Bottom vignette */}
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 45%, transparent 70%)"
              }} />
              {/* Top colour bar */}
              <div className="absolute top-0 inset-x-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1)" }} />
              {/* Bottom info */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-white font-display font-bold text-lg leading-tight">30+ Years</p>
                  <p className="text-white/50 text-[10px] font-mono tracking-widest mt-0.5 uppercase">of Excellence · Est. 1995</p>
                </div>
                <div className="flex gap-2">
                  {[["98%","Pass"],["50+","Awards"]].map(([v, l]) => (
                    <div key={l} className="text-center px-3 py-2 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.14)" }}>
                      <p className="text-white font-bold text-sm leading-none">{v}</p>
                      <p className="text-white/50 text-[10px] mt-0.5 font-mono">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-5 top-8 hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl"
              style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(99,102,241,0.15)" }}>
                <Trophy className="w-5 h-5 text-electric-2" />
              </div>
              <div>
                <p className="font-bold text-sm leading-none" style={{ color: "var(--fg)" }}>#1 School</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--fg-3)" }}>District, 2024</p>
              </div>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-5 bottom-28 hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl"
              style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(34,197,94,0.15)" }}>
                <Users className="w-5 h-5" style={{ color: "#22c55e" }} />
              </div>
              <div>
                <p className="font-bold text-sm leading-none" style={{ color: "var(--fg)" }}>2,500+</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--fg-3)" }}>Students Enrolled</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inMain ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-electric" />
              <span className="mono-tag">Who We Are</span>
            </div>

            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-5" style={{ color: "var(--fg)" }}>
              More Than a School.{" "}
              <span className="text-electric-2 relative inline-block">
                A Movement.
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 5" fill="none" preserveAspectRatio="none">
                  <path d="M0 4 Q100 0 200 4" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="text-[1.05rem] leading-relaxed mb-4" style={{ color: "var(--fg-2)" }}>
              At Bright Horizons Academy, education is not a destination — it's a lifelong
              journey of wonder, growth, and bold thinking.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "var(--fg-3)" }}>
              From KG through Grade 12, every student gets a personalised curriculum, world-class
              mentors, and an environment that rewards curiosity over conformity.
            </p>

            <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-9">
              {highlights.map((h, i) => (
                <motion.div key={h}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inMain ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0 text-electric-2" />
                  <span className="text-sm" style={{ color: "var(--fg-2)" }}>{h}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/about"
              className="group inline-flex items-center gap-2 h-10 px-5 text-sm font-medium rounded-full border transition-all duration-200"
              style={{ borderColor: "var(--border-2)", color: "var(--fg-2)" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--electric)"; el.style.color = "var(--fg)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border-2)"; el.style.color = "var(--fg-2)"; }}
            >
              Learn More
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Part 2: Pillars ── */}
      <div style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16" ref={refPillars}>
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-display font-bold text-xl" style={{ color: "var(--fg)" }}>Our Five Pillars</h3>
            <div className="h-px flex-1 mx-6" style={{ background: "var(--border)" }} />
            <span className="mono-tag">05</span>
          </div>
          <div className="grid md:grid-cols-5 gap-3">
            {pillars.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inPillars ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09 }}
                className="group relative p-5 rounded-2xl cursor-default overflow-hidden transition-all duration-300"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = p.color + "50"; el.style.transform = "translateY(-5px)"; el.style.boxShadow = `0 12px 32px ${p.color}14`; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "none"; el.style.boxShadow = "none"; }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: p.color + "18" }}>
                  <p.icon className="w-4 h-4" style={{ color: p.color }} />
                </div>
                <h4 className="font-display font-bold mb-1.5" style={{ color: "var(--fg)" }}>{p.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>{p.desc}</p>
                <div className="mt-4 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500" style={{ background: p.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Part 3: Timeline ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20" ref={refTimeline}>
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-8 bg-electric" />
          <span className="mono-tag">Our Journey</span>
        </div>
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inTimeline ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }}
            className="absolute top-0 bottom-0 w-px origin-top"
            style={{ left: "112px", background: "linear-gradient(to bottom, var(--electric), transparent)" }}
          />
          <div className="space-y-7">
            {timeline.map((t, i) => (
              <motion.div key={t.year}
                initial={{ opacity: 0, x: -24 }}
                animate={inTimeline ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-8"
              >
                <div className="w-[96px] flex-shrink-0 text-right">
                  <span className="font-mono font-bold text-base text-electric-2">{t.year}</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-electric" style={{ border: "2px solid var(--bg)" }} />
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>{t.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
