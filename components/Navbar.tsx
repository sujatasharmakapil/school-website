"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home",       href: "/"          },
  { label: "About",      href: "/about"      },
  { label: "Programs",   href: "/programs"   },
  { label: "Faculty",    href: "/faculty"    },
  { label: "Campus",     href: "/campus"     },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact",    href: "/contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open,     setOpen]       = useState(false);
  const [pathname, setPathname]   = useState("/");

  useEffect(() => {
    // Set current path on client only (avoids static export issues)
    setPathname(window.location.pathname.replace(/\/$/, "") || "/");
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Normalise for comparison: strip trailing slash
  const normPath = (p: string) => p === "/" ? "/" : p.replace(/\/$/, "");
  const isActive = (href: string) => normPath(pathname) === normPath(href);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background:    scrolled ? "var(--bg)" : "transparent",
          borderBottom:  scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
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

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                  style={{
                    color:      active ? "var(--electric)" : "var(--fg-3)",
                    background: active ? "var(--electric-soft)" : "transparent",
                  }}
                  onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--fg)"; }}
                  onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--fg-3)"; }}
                >
                  {l.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] rounded-full bg-electric"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />
            <Link
              href="/admissions"
              className="hidden md:inline-flex items-center gap-1.5 h-9 px-5 bg-electric hover:bg-electric-2 text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl border transition-all"
              style={{ borderColor: "var(--border-2)", background: "var(--bg-2)", color: "var(--fg-2)" }}
              aria-label="Menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1,  y: 0  }}
            exit={  { opacity: 0,  y: -8  }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-4 z-40 rounded-2xl p-3 shadow-2xl lg:hidden"
            style={{ background: "var(--bg-2)", border: "1px solid var(--border-2)" }}
          >
            {navLinks.map((l, i) => {
              const active = isActive(l.href);
              return (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1,  x: 0   }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      color:      active ? "var(--electric)" : "var(--fg-2)",
                      background: active ? "var(--electric-soft)" : "transparent",
                    }}
                  >
                    {l.label}
                    <ChevronDown className="w-4 h-4 opacity-30 -rotate-90" />
                  </Link>
                </motion.div>
              );
            })}
            <div className="mt-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
              <Link
                href="/admissions"
                onClick={() => setOpen(false)}
                className="block w-full py-3 text-center bg-electric hover:bg-electric-2 text-white font-semibold rounded-xl text-sm transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
