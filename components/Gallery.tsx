"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FlaskConical, Library, Palette, Cpu,
  Dumbbell, Theater, Leaf, Waves, X, Maximize2,
} from "lucide-react";
import Image from "next/image";

/* Items with real photos on the prominent tiles */
const items = [
  {
    id: 1, icon: FlaskConical,
    title: "Science Laboratories",
    desc:  "6 fully-equipped labs for Physics, Chemistry, Biology, and Research.",
    color: "#22c55e", size: "tall",
    photo: "/images/3.png",
  },
  {
    id: 2, icon: Library,
    title: "Digital Library",
    desc:  "20,000+ books, e-journals, and a digital resource hub.",
    color: "#6366f1", size: "sm",
    photo: null,
  },
  {
    id: 3, icon: Palette,
    title: "Art & Design Studio",
    desc:  "Professional studio for fine arts, ceramics, and digital design.",
    color: "#e879f9", size: "sm",
    photo: null,
  },
  {
    id: 4, icon: Cpu,
    title: "AI & Coding Lab",
    desc:  "160-seat computer centre with AI development tools.",
    color: "#38bdf8", size: "wide",
    photo: "/images/4.png",
  },
  {
    id: 5, icon: Dumbbell,
    title: "Sports Complex",
    desc:  "Football pitch, cricket nets, basketball, indoor gym.",
    color: "#fb923c", size: "sm",
    photo: null,
  },
  {
    id: 6, icon: Theater,
    title: "Performing Arts Hall",
    desc:  "500-seat acoustically-designed auditorium.",
    color: "#a78bfa", size: "sm",
    photo: "/images/5.png",
  },
  {
    id: 7, icon: Leaf,
    title: "Eco Garden",
    desc:  "Outdoor classroom for sustainability and environmental science.",
    color: "#86efac", size: "sm",
    photo: null,
  },
  {
    id: 8, icon: Waves,
    title: "Aquatic Centre",
    desc:  "25m heated pool for swim training and water polo.",
    color: "#34d399", size: "sm",
    photo: "/images/6.png",
  },
];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const [selected, setSelected] = useState<typeof items[0] | null>(null);

  return (
    <section id="gallery" style={{ background: "var(--bg)" }}>
      {/* Label bar */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-electric" />
            <span className="mono-tag">Campus Life</span>
          </div>
          <span className="mono-tag">08 Spaces</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display font-bold text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.1] max-w-sm"
            style={{ color: "var(--fg)" }}
          >
            A Campus Built for <span className="text-electric-2">Greatness</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-sm max-w-xs text-right hidden md:block" style={{ color: "var(--fg-3)" }}
          >
            Every space designed to inspire creativity, collaboration, and discovery.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {items.map((item, i) => {
            const spanClass =
              item.size === "tall" ? "row-span-2" :
              item.size === "wide" ? "col-span-2" : "";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`${spanClass} group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300`}
                style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}
                onClick={() => setSelected(item)}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = item.color + "55";
                  el.style.transform = "scale(1.02)";
                  el.style.zIndex = "10";
                  el.style.boxShadow = `0 16px 40px ${item.color}18`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "none";
                  el.style.zIndex = "";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Real photo background */}
                {item.photo && (
                  <>
                    <Image
                      src={item.photo}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay — stronger at bottom for text, tinted at top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5 group-hover:from-black/80 transition-all duration-300" />
                  </>
                )}

                {/* No photo — colour accent background */}
                {!item.photo && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `radial-gradient(circle at 40% 60%, ${item.color}18, transparent 70%)` }}
                  />
                )}

                {/* Top sweep accent line */}
                <div className="absolute top-0 inset-x-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-450"
                  style={{ background: item.color }} />

                {/* Bottom content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-transform duration-250 group-hover:scale-110"
                    style={{ background: item.photo ? "rgba(0,0,0,0.4)" : item.color + "20", backdropFilter: "blur(4px)" }}
                  >
                    <item.icon className="w-4.5 h-4.5" style={{ color: item.photo ? "#fff" : item.color }} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="font-display font-bold text-sm md:text-[0.95rem] leading-tight mb-1"
                    style={{ color: item.photo ? "#fff" : "var(--fg)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs line-clamp-2 leading-relaxed"
                    style={{ color: item.photo ? "rgba(255,255,255,0.65)" : "var(--fg-3)" }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Expand button */}
                <div
                  className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: item.photo ? "rgba(0,0,0,0.45)" : "var(--bg-3)", backdropFilter: "blur(4px)" }}
                >
                  <Maximize2 className="w-3.5 h-3.5" style={{ color: item.photo ? "#fff" : "var(--fg-3)" }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(12px)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl overflow-hidden relative shadow-2xl"
              style={{ border: `1px solid ${selected.color}35` }}
            >
              {/* Photo or coloured panel */}
              {selected.photo ? (
                <div className="relative aspect-video w-full">
                  <Image src={selected.photo} alt={selected.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              ) : (
                <div className="aspect-video w-full flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${selected.color}22, ${selected.color}08)` }}>
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: selected.color + "25" }}>
                    <selected.icon className="w-10 h-10" style={{ color: selected.color }} strokeWidth={1.5} />
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="p-7" style={{ background: "var(--bg-2)" }}>
                <div className="absolute top-0 inset-x-0 h-[2px]" style={{ background: selected.color }} />
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: "var(--fg)" }}>{selected.title}</h3>
                <p className="leading-relaxed text-sm" style={{ color: "var(--fg-2)" }}>{selected.desc}</p>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)", color: "#fff" }}
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
