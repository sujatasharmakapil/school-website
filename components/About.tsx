"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Lightbulb, Heart, Globe2, ShieldCheck, Leaf,
  ArrowUpRight, CheckCircle, Users, Trophy,
} from "lucide-react";
import Link from "next/link";

const pillars = [
  { icon: Lightbulb,   title: "Good Learning",  desc: "We make every subject easy and interesting for every child.",  color: "#84cc16" },
  { icon: Heart,       title: "Care & Safety",  desc: "Every student feels safe, welcome and cared for here.",        color: "#f472b6" },
  { icon: Globe2,      title: "Future Ready",   desc: "We prepare children with skills they need for a good future.", color: "#38bdf8" },
  { icon: ShieldCheck, title: "Good Values",    desc: "We teach honesty, respect and kindness every single day.",     color: "#fb923c" },
  { icon: Leaf,        title: "Clean Campus",   desc: "Our school is clean, safe and a healthy place to learn.",      color: "#4ade80" },
];

const highlights = [
  "CBSE Board Affiliated",       "Trained & Caring Teachers",
  "Safe & Clean Campus",         "Affordable School Fees",
  "Computer Lab & Library",      "Sports Ground & Activities",
];

const timeline = [
  { year: "Year 1",  event: "School started with a dream to give quality education to all children" },
  { year: "Year 2",  event: "First batch of students passed with very good results" },
  { year: "Year 3",  event: "Added computer lab and new sports ground" },
  { year: "Year 4",  event: "More than 200 students joined our school family" },
  { year: "Year 5",  event: "New classrooms and library opened for students" },
  { year: "Today",   event: "Growing every year with happy students and proud parents" },
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

          {/* ── Left: Info dashboard panel (no image) ── */}
          <motion.div style={{ y: yImg }} className="relative">
            <div
              className="relative rounded-3xl overflow-hidden w-full"
              style={{ aspectRatio: "3/4", background: "var(--bg-2)", border: "1px solid var(--border)" }}
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 inset-x-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #38bdf8)" }} />

              {/* Big watermark number */}
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
                <span className="font-display font-bold text-[9rem] leading-none"
                  style={{ color: "var(--border-2)", opacity: 0.35 }}>10+</span>
              </div>

              {/* Info cards stacked */}
              <div className="absolute inset-0 p-6 flex flex-col gap-3 justify-center">

                {/* Mission card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inMain ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="rounded-2xl p-5"
                  style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                >
                  <p className="font-display font-bold text-xl mb-2" style={{ color: "var(--fg)" }}>
                    Every Child Matters
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>
                    We give equal care to every student — slow learners, fast learners, and everyone in between.
                  </p>
                </motion.div>

                {/* 2 stat boxes */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "500+", label: "Happy Students", color: "#6366f1" },
                    { value: "98%",  label: "Pass Rate",      color: "#22c55e" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inMain ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="rounded-2xl p-4 text-center"
                      style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                    >
                      <p className="font-display font-bold text-3xl mb-1" style={{ color: s.color }}>{s.value}</p>
                      <p className="text-xs" style={{ color: "var(--fg-3)" }}>{s.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Quote card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inMain ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="rounded-2xl p-5"
                  style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(99,102,241,0.15)" }}>
                      <Heart className="w-4 h-4 text-electric-2" />
                    </div>
                    <p className="text-sm leading-relaxed italic" style={{ color: "var(--fg-2)" }}>
                      "We treat every child like our own. When a child succeeds, our whole community succeeds."
                    </p>
                  </div>
                  <p className="text-xs mt-3 ml-11" style={{ color: "var(--fg-3)" }}>
                    — Mrs. Priya Sharma, Principal
                  </p>
                </motion.div>

                {/* 2 more stat boxes */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "20+", label: "Good Teachers", color: "#f97316" },
                    { value: "10+", label: "Years Running", color: "#38bdf8" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inMain ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      className="rounded-2xl p-4 text-center"
                      style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                    >
                      <p className="font-display font-bold text-3xl mb-1" style={{ color: s.color }}>{s.value}</p>
                      <p className="text-xs" style={{ color: "var(--fg-3)" }}>{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom status bar */}
              <div className="absolute bottom-0 inset-x-0 px-5 py-3 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}>
                <p className="font-mono text-xs" style={{ color: "var(--fg-3)" }}>CBSE Affiliated School</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-electric" style={{ animation: "ping 2s infinite" }} />
                  <p className="font-mono text-xs" style={{ color: "var(--fg-3)" }}>Admissions Open</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inMain ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-electric" />
              <span className="mono-tag">About Our School</span>
            </div>

            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-5" style={{ color: "var(--fg)" }}>
              A School That Truly{" "}
              <span className="text-electric-2 relative inline-block">
                Cares for Your Child.
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 240 5" fill="none" preserveAspectRatio="none">
                  <path d="M0 4 Q120 0 240 4" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="text-[1.05rem] leading-relaxed mb-4" style={{ color: "var(--fg-2)" }}>
              We started with one simple goal — to give every child in our community
              a good, affordable education with proper care and attention.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "var(--fg-3)" }}>
              Our teachers know every student by name. We don't just teach from books —
              we help children understand, grow, and feel confident about their future.
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
              Learn More About Us
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Part 2: Pillars ── */}
      <div style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16" ref={refPillars}>
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-display font-bold text-xl" style={{ color: "var(--fg)" }}>What We Believe In</h3>
            <div className="h-px flex-1 mx-6" style={{ background: "var(--border)" }} />
            <span className="mono-tag">5 Values</span>
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
          <span className="mono-tag">How We Grew</span>
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
                  <span className="font-mono font-bold text-sm text-electric-2">{t.year}</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-electric"
                  style={{ border: "2px solid var(--bg)" }} />
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>{t.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
