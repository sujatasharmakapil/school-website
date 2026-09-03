export const dynamic = "force-static";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Classes & Programs — Bright Horizons Academy" };

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-electric" />
            <span className="mono-tag">Our Classes</span>
          </div>
          <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] mb-4" style={{ color: "var(--fg)" }}>
            Classes We Offer
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: "var(--fg-2)" }}>
            From KG to Grade 12 — quality teaching for every age group.
          </p>
        </div>
        <Programs />
      </main>
      <Footer />
    </>
  );
}
