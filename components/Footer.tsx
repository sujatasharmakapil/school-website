"use client";

import { motion } from "framer-motion";
import { Zap, ArrowUp } from "lucide-react";
import Link from "next/link";

const cols = {
  School:     ["About Us", "Our Mission", "Leadership", "Accreditations", "Campus Tour"],
  Academics:  ["Primary School", "Middle School", "Senior School", "Co-Curriculars", "Clubs & Sport"],
  Admissions: ["How to Apply", "Fee Structure", "Scholarships", "FAQs", "Campus Visit"],
  Connect:    ["Contact Us", "Alumni Network", "Parent Portal", "News & Events", "Careers"],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      {/* Top accent */}
      <div className="h-[2px] bg-gradient-to-r from-electric via-violet-2 to-electric-2" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="relative w-8 h-8 flex-shrink-0">
                <div className="absolute inset-0 bg-electric-2 rounded-lg rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="relative w-full h-full bg-electric rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
              <div className="leading-none">
                <span className="font-display font-bold text-sm tracking-tight" style={{ color: "var(--fg)" }}>BRIGHT</span>
                <span className="font-display font-bold text-sm tracking-tight text-electric-2"> HORIZONS</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--fg-3)" }}>
              Empowering curious minds with knowledge, values, and the courage to dream bold since 1995.
            </p>
            <div className="flex gap-2">
              {["f", "𝕏", "in", "▶"].map((icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.12, y: -2 }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200"
                  style={{ border: "1px solid var(--border)", background: "var(--bg)", color: "var(--fg-3)" }}>
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <p className="mono-tag mb-5">{title}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm transition-colors duration-200" style={{ color: "var(--fg-3)" }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--fg)"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--fg-3)"}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="p-6 rounded-2xl mb-10" style={{ border: "1px solid var(--border)", background: "var(--bg)" }}>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="flex-1">
              <p className="font-display font-bold mb-1" style={{ color: "var(--fg)" }}>Stay in the Loop</p>
              <p className="text-sm" style={{ color: "var(--fg-3)" }}>News, events, and admissions updates to your inbox.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input type="email" placeholder="your@email.com"
                className="flex-1 md:w-52 px-4 py-2.5 text-sm rounded-xl outline-none transition-colors"
                style={{ background: "var(--bg-2)", border: "1px solid var(--border)", color: "var(--fg)" }} />
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="px-5 py-2.5 bg-electric hover:bg-electric-2 text-white text-sm font-semibold rounded-xl flex-shrink-0 transition-colors">
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="font-mono text-xs" style={{ color: "var(--fg-3)" }}>
            © {new Date().getFullYear()} Bright Horizons Academy · All rights reserved
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((l) => (
              <Link key={l} href="#" className="font-mono text-xs transition-colors" style={{ color: "var(--fg-3)" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--fg)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--fg-3)"}>
                {l}
              </Link>
            ))}
          </div>
          <motion.button whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
            style={{ background: "var(--electric-soft)", border: "1px solid var(--border-2)", color: "var(--electric)" }}>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
