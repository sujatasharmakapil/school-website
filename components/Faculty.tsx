"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FlaskConical, Calculator, Cpu, Palette, Dumbbell, BookOpen, ArrowUpRight, X, Award, Globe2, PenTool } from "lucide-react";

const faculty = [
  { name: "Mrs. Priya Sharma",  role: "Principal",          dept: "School Management",   exp: "15 yrs", icon: BookOpen,     accent: "#6366f1", qual: "M.Ed · B.Ed · School Management",        bio: "Mrs. Sharma started this school with a simple goal — quality education for every child. She personally knows each student and makes sure no child is left behind.", awards: ["Best Principal Award — District Level", "Community Education Leader 2023"] },
  { name: "Mr. Ramesh Kumar",   role: "Science Teacher",    dept: "Science & Maths",     exp: "10 yrs", icon: FlaskConical, accent: "#22c55e", qual: "B.Sc · B.Ed · Science Specialist",        bio: "Mr. Kumar makes science easy and fun. His students love doing experiments and his classes always get great results in board exams.", awards: ["Best Teacher Award — District 2022", "Students' Favourite Teacher 2023"] },
  { name: "Ms. Sunita Devi",    role: "Hindi Teacher",      dept: "Languages",           exp: "12 yrs", icon: PenTool,      accent: "#f97316", qual: "M.A Hindi · B.Ed · Language Expert",      bio: "Ms. Sunita teaches Hindi and helps children become confident in reading and writing. She also runs the school's annual cultural programme.", awards: ["Language Excellence Award", "Cultural Programme Director 2023"] },
  { name: "Mr. Ajay Verma",     role: "Maths Teacher",      dept: "Mathematics",         exp: "8 yrs",  icon: Calculator,   accent: "#38bdf8", qual: "B.Sc Maths · B.Ed · CBSE Trained",       bio: "Mr. Ajay makes maths simple and easy to understand. His students consistently score well and many say he changed the way they think about numbers.", awards: ["District Maths Teacher Award 2023", "Best Results in Board Exams 2022"] },
  { name: "Ms. Kavita Singh",   role: "English Teacher",    dept: "English Language",    exp: "9 yrs",  icon: Globe2,       accent: "#e879f9", qual: "M.A English · B.Ed · Communication Skills",bio: "Ms. Kavita helps students speak and write English with confidence. She runs special spoken English sessions so students can do well in interviews and exams.", awards: ["Best English Teacher Award", "Communication Excellence 2024"] },
  { name: "Mr. Vikram Patel",   role: "Sports Teacher",     dept: "Physical Education",  exp: "7 yrs",  icon: Dumbbell,     accent: "#fbbf24", qual: "B.P.Ed · Sports Coaching Certified",     bio: "Mr. Vikram keeps our students active and healthy. He coaches cricket, kabaddi and athletics. Several of our students have won at district-level sports competitions.", awards: ["District Sports Coach Award", "Best Physical Education Teacher 2023"] },
];

export default function Faculty() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selected, setSelected] = useState<typeof faculty[0] | null>(null);

  return (
    <section id="faculty" style={{ background: "var(--bg-2)" }}>
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3"><div className="h-px w-8 bg-electric" /><span className="mono-tag">The Team</span></div>
          <span className="mono-tag">120+ Educators</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-14 max-w-xl">
          <h2 className="font-display font-bold text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.1] mb-4" style={{ color: "var(--fg)" }}>
            World-Class Minds. <span className="text-electric-2">Inspiring Teachers.</span>
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--fg-2)" }}>Every faculty member is a leader in their field. Click any card to know more.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {faculty.map((f, i) => (
            <motion.button
              key={f.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(f)}
              className="group text-left relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
              style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = f.accent + "50"; (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px ${f.accent}14`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <div className="accent-line" style={{ background: f.accent }} />
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: f.accent + "18" }}>
                  <f.icon className="w-6 h-6" style={{ color: f.accent }} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full" style={{ background: f.accent + "15", color: f.accent }}>{f.exp}</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-1" style={{ color: "var(--fg)" }}>{f.name}</h3>
              <p className="text-sm font-semibold mb-0.5" style={{ color: f.accent }}>{f.role}</p>
              <p className="text-xs mb-3" style={{ color: "var(--fg-3)" }}>{f.dept}</p>
              <p className="text-xs font-mono" style={{ color: "var(--fg-3)" }}>{f.qual}</p>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium transition-colors" style={{ color: "var(--fg-3)" }}>
                View Profile <ArrowUpRight className="w-3 h-3" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl p-8 relative"
              style={{ background: "var(--bg-2)", border: `1px solid ${selected.accent}30` }}>
              <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-3xl" style={{ background: selected.accent }} />
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                style={{ background: "var(--bg-3)", color: "var(--fg-3)" }}>
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: selected.accent + "18" }}>
                  <selected.icon className="w-7 h-7" style={{ color: selected.accent }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl" style={{ color: "var(--fg)" }}>{selected.name}</h3>
                  <p className="text-sm font-semibold" style={{ color: selected.accent }}>{selected.role} · {selected.dept}</p>
                </div>
              </div>
              <p className="text-xs font-mono mb-4" style={{ color: "var(--fg-3)" }}>{selected.qual}</p>
              <p className="leading-relaxed mb-5" style={{ color: "var(--fg-2)" }}>{selected.bio}</p>
              <p className="mono-tag mb-3">Recognitions</p>
              <div className="space-y-2">
                {selected.awards.map((a) => (
                  <div key={a} className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 flex-shrink-0" style={{ color: selected.accent }} />
                    <span className="text-sm" style={{ color: "var(--fg-2)" }}>{a}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
