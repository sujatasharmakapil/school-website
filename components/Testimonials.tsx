"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote, Star, User } from "lucide-react";

const testimonials = [
  { name: "Sunita Devi",       role: "Parent · Grade 4 Student",   stars: 5, accent: "#6366f1", text: "My son used to be scared of school. Since joining Bright Horizons, he wakes up excited every morning. The teachers are so kind and patient. Best decision we made." },
  { name: "Ramesh Yadav",      role: "Parent · Two Children Here", stars: 5, accent: "#22c55e", text: "Both my children study here. The fees are affordable and the quality of teaching is very good. My daughter improved a lot in Maths and English this year." },
  { name: "Geeta & Suresh Kumar", role: "Parents · Grade 8",      stars: 5, accent: "#f97316", text: "We were worried about our child's studies but after joining this school, her marks improved a lot. Teachers give personal attention to every student. Very happy." },
  { name: "Meena Kumari",      role: "Parent · KG Student",        stars: 5, accent: "#e879f9", text: "I was worried to send my small child to school but this school feels like a family. The teachers take very good care. My daughter loves her teachers so much." },
];

export default function Testimonials() {
  const [curr, setCurr] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const t = setInterval(() => setCurr((c) => (c + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[curr];

  return (
    <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-14">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}>
            <div className="flex items-center gap-3 mb-4"><div className="h-px w-8 bg-electric" /><span className="mono-tag">Voices</span></div>
            <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] leading-[1.1]" style={{ color: "var(--fg)" }}>
              What Our <span className="text-electric-2">Parents Say</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.15 }}
            className="flex items-end pb-1">
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurr(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === curr ? 28 : 8, height: 8, background: i === curr ? "var(--electric)" : "var(--border-2)" }} />
              ))}
            </div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={curr} initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid lg:grid-cols-[auto_1fr] gap-7 items-start p-8 md:p-10 rounded-3xl"
            style={{ background: "var(--bg)", border: `1px solid ${t.accent}22` }}>
            <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-3xl"
              style={{ background: `linear-gradient(90deg, ${t.accent}, transparent 60%)` }} />

            {/* Left */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: t.accent + "18" }}>
                <User className="w-7 h-7" style={{ color: t.accent }} strokeWidth={1.5} />
              </div>
              <div className="flex gap-0.5">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" style={{ color: t.accent }} />
                ))}
              </div>
            </div>

            {/* Right */}
            <div>
              <Quote className="w-10 h-10 mb-4 opacity-8" style={{ color: t.accent }} strokeWidth={1} />
              <p className="text-xl md:text-2xl leading-relaxed font-medium mb-7" style={{ color: "var(--fg)" }}>"{t.text}"</p>
              <p className="font-display font-bold" style={{ color: "var(--fg)" }}>{t.name}</p>
              <p className="text-sm mt-0.5" style={{ color: "var(--fg-3)" }}>{t.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-end gap-3 mt-5">
          <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.93 }}
            onClick={() => setCurr((c) => (c - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all"
            style={{ borderColor: "var(--border-2)", background: "var(--bg)", color: "var(--fg-3)" }}>
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.93 }}
            onClick={() => setCurr((c) => (c + 1) % testimonials.length)}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-electric hover:bg-electric-2 text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
