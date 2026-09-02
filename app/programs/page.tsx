export const dynamic = "force-static";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Programs — Bright Horizons Academy" };

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-electric" />
            <span className="mono-tag">Academics</span>
          </div>
          <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mb-4" style={{ color: "var(--fg)" }}>
            Academic Programs
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: "var(--fg-2)" }}>
            Three learning pathways, one destination — excellence.
          </p>
        </div>
        <Programs />
      </main>
      <Footer />
    </>
  );
}
