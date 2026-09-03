"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Trophy, BookOpen, Globe2, Star, GraduationCap, Briefcase, Zap } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Users,        value: 500,  suffix: "+", label: "Students Enrolled",   desc: "Children studying with us"        },
  { icon: Trophy,       value: 98,   suffix: "%", label: "Students Pass",        desc: "In annual board exams"            },
  { icon: GraduationCap,value: 20,   suffix: "+", label: "Trained Teachers",    desc: "Caring and qualified staff"       },
  { icon: Globe2,       value: 10,   suffix: "+", label: "Years Running",        desc: "Serving our community"            },
  { icon: Star,         value: 15,   suffix: "+", label: "Staff Members",        desc: "Dedicated to your child"          },
  { icon: BookOpen,     value: 8,    suffix: "+", label: "Activities & Clubs",   desc: "Beyond regular classes"           },
  { icon: Briefcase,    value: 90,   suffix: "%", label: "Parents Satisfied",    desc: "Happy families every year"        },
  { icon: Zap,          value: 5,    suffix: "+", label: "Classrooms",           desc: "Clean and well equipped"          },
];

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="stats" style={{ background: "var(--bg)" }}>
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3"><div className="h-px w-8 bg-electric" /><span className="mono-tag">By the Numbers</span></div>
          <span className="mono-tag">30 Years · 8 Metrics</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-end mb-14">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] leading-[1.1]" style={{ color: "var(--fg)" }}>
              Our School <span className="text-electric-2">in Numbers</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }}
            className="text-lg leading-relaxed lg:max-w-xl" style={{ color: "var(--fg-2)" }}>
            Numbers that show how many families trust us and how well our students do every year.
          </motion.p>
        </div>

        {/* Grid table */}
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              className="group relative p-6 cursor-default transition-all duration-250"
              style={{
                borderBottom: i < 4 ? `1px solid var(--border)` : "none",
                borderRight: i % 4 !== 3 ? `1px solid var(--border)` : "none",
                background: "var(--bg)",
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--bg-2)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--bg)"}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--electric-soft)" }}>
                <s.icon className="w-4 h-4 text-electric-2" strokeWidth={1.5} />
              </div>
              <p className="font-display font-bold text-[clamp(1.8rem,3vw,2.4rem)] leading-none mb-1" style={{ color: "var(--fg)" }}>
                {inView ? <CountUp end={s.value} duration={2} delay={i * 0.07} suffix={s.suffix} /> : `0${s.suffix}`}
              </p>
              <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--fg)" }}>{s.label}</p>
              <p className="text-xs" style={{ color: "var(--fg-3)" }}>{s.desc}</p>
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-electric scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-350" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}
          className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-5 rounded-2xl"
          style={{ border: "1px solid var(--border)", background: "var(--bg-2)" }}>
          <div>
            <p className="font-display font-bold text-xl" style={{ color: "var(--fg)" }}>Thinking of Admitting Your Child?</p>
            <p className="text-sm" style={{ color: "var(--fg-3)" }}>Admissions are open. Come visit our school and see for yourself.</p>
          </div>
          <Link href="/admissions" className="flex-shrink-0 inline-flex items-center gap-2 h-10 px-6 bg-electric hover:bg-electric-2 text-white font-semibold rounded-full text-sm transition-colors">
            Apply Now <Zap className="w-3.5 h-3.5 fill-white" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
