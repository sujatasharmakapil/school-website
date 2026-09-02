"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sprout, Rocket, GraduationCap, ChevronRight, Palette, Music2, Cpu, Dumbbell, ArrowUpRight, FlaskConical, Calculator, Globe2, PenTool } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    id: "primary", grade: "KG — Grade 5", title: "Primary", sub: "Nurturing Curious Minds",
    icon: Sprout, accent: "#22c55e",
    desc: "A joyful, inquiry-driven foundation where learning is play. We build literacy, numeracy, and social skills through Montessori-inspired environments.",
    modules: [
      { icon: PenTool, label: "Phonics & Literacy" }, { icon: Calculator, label: "Maths Foundations" },
      { icon: Palette, label: "Creative Arts" }, { icon: Dumbbell, label: "Physical Education" }, { icon: Music2, label: "Music & Movement" },
    ],
  },
  {
    id: "middle", grade: "Grade 6 — 8", title: "Middle", sub: "Exploring & Discovering",
    icon: Rocket, accent: "#6366f1",
    desc: "An intellectually charged bridge where students explore STEM, humanities, and digital skills. Project-based learning ignites passion and analytical thinking.",
    modules: [
      { icon: FlaskConical, label: "Integrated STEM Labs" }, { icon: Globe2, label: "World Studies" },
      { icon: Cpu, label: "Digital Literacy" }, { icon: PenTool, label: "Language & Writing" }, { icon: Dumbbell, label: "Sports & Leadership" },
    ],
  },
  {
    id: "senior", grade: "Grade 9 — 12", title: "Senior", sub: "Leading with Purpose",
    icon: GraduationCap, accent: "#f97316",
    desc: "Rigorous CBSE academics paired with university prep, entrepreneurship, and life skills — positioning every graduate for outstanding futures.",
    modules: [
      { icon: Calculator, label: "Advanced Sciences" }, { icon: Globe2, label: "Economics & Commerce" },
      { icon: Cpu, label: "Computer Science / AI" }, { icon: PenTool, label: "English & Humanities" }, { icon: GraduationCap, label: "University Counseling" },
    ],
  },
];

const extras = [
  { icon: Palette, label: "Visual Arts", color: "#e879f9" },
  { icon: Music2, label: "Orchestra", color: "#a78bfa" },
  { icon: Cpu, label: "Coding Club", color: "#38bdf8" },
  { icon: Dumbbell, label: "Sports Academies", color: "#fb923c" },
  { icon: FlaskConical, label: "Research Lab", color: "#4ade80" },
  { icon: Globe2, label: "MUN & Debate", color: "#6366f1" },
];

export default function Programs() {
  const [active, setActive] = useState("middle");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const prog = programs.find((p) => p.id === active)!;

  return (
    <section id="programs" style={{ background: "var(--bg-2)" }}>
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3"><div className="h-px w-8 bg-electric" /><span className="mono-tag">Academic Programs</span></div>
          <span className="mono-tag">03 Divisions</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-14 max-w-2xl">
          <h2 className="font-display font-bold text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.1]" style={{ color: "var(--fg)" }}>
            Three Pathways, <span className="text-electric-2">One Destination</span> — Excellence.
          </h2>
        </motion.div>

        {/* Tab cards */}
        <div className="grid lg:grid-cols-3 gap-3 mb-10">
          {programs.map((p, i) => (
            <motion.button
              key={p.id}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09 }}
              onClick={() => setActive(p.id)}
              className="relative text-left p-6 rounded-2xl transition-all duration-300"
              style={{
                background: active === p.id ? "var(--bg)" : "transparent",
                border: `1px solid ${active === p.id ? p.accent + "40" : "var(--border)"}`,
                boxShadow: active === p.id ? `0 0 24px ${p.accent}12` : "none",
              }}
            >
              {active === p.id && (
                <motion.div layoutId="prog-line" className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl" style={{ background: p.accent }} transition={{ type: "spring", bounce: 0.2 }} />
              )}
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: p.accent + "18" }}>
                <p.icon className="w-5 h-5" style={{ color: p.accent }} strokeWidth={1.5} />
              </div>
              <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: p.accent }}>{p.grade}</p>
              <h3 className="font-display font-bold text-lg mb-0.5" style={{ color: "var(--fg)" }}>{p.title} School</h3>
              <p className="text-sm" style={{ color: "var(--fg-3)" }}>{p.sub}</p>
            </motion.button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-10 p-8 md:p-10 rounded-3xl"
            style={{ background: "var(--bg)", border: `1px solid ${prog.accent}25` }}
          >
            <div>
              <h4 className="font-display font-bold text-2xl mb-3" style={{ color: "var(--fg)" }}>{prog.title} School</h4>
              <p className="text-lg leading-relaxed mb-7" style={{ color: "var(--fg-2)" }}>{prog.desc}</p>
              <Link
                href="/programs"
                className="group inline-flex items-center gap-2 h-10 px-5 text-sm font-semibold rounded-full border transition-all duration-200"
                style={{ borderColor: prog.accent + "50", color: prog.accent }}
              >
                View Full Curriculum <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <p className="mono-tag mb-4">Key Modules</p>
              <div className="space-y-2.5">
                {prog.modules.map((m, i) => (
                  <motion.div key={m.label} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: prog.accent + "15" }}>
                      <m.icon className="w-3.5 h-3.5" style={{ color: prog.accent }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--fg-2)" }}>{m.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-auto" style={{ color: "var(--fg-3)" }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Co-curricular */}
        <div className="mt-14">
          <div className="flex items-center gap-4 mb-7">
            <span className="mono-tag">Co-Curricular</span>
            <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {extras.map((e, i) => (
              <motion.div key={e.label} initial={{ opacity: 0, scale: 0.88 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.4 + i * 0.07 }}
                className="flex flex-col items-center gap-2.5 py-5 px-3 rounded-2xl cursor-default transition-all duration-250"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                onMouseEnter={(e2) => { (e2.currentTarget as HTMLElement).style.borderColor = e.color + "50"; (e2.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e2) => { (e2.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e2.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: e.color + "15" }}>
                  <e.icon className="w-4.5 h-4.5" style={{ color: e.color }} />
                </div>
                <span className="text-xs font-medium text-center" style={{ color: "var(--fg-3)" }}>{e.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
