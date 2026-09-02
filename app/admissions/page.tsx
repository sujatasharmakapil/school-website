export const dynamic = "force-static";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admissions — Bright Horizons Academy" };

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-electric" />
            <span className="mono-tag">Admissions 2025–26</span>
          </div>
          <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mb-4" style={{ color: "var(--fg)" }}>
            Apply Now
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: "var(--fg-2)" }}>
            Start your child's journey at Bright Horizons. Seats are limited — enquire today.
          </p>
        </div>

        {/* Process steps */}
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-electric" />
            <span className="mono-tag">Admission Process</span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Submit Inquiry",   desc: "Fill in the form below with your child's details." },
              { step: "02", title: "Campus Visit",     desc: "Schedule a guided tour of our facilities." },
              { step: "03", title: "Entrance Test",    desc: "Age-appropriate assessment for Grade 1 and above." },
              { step: "04", title: "Confirmation",     desc: "Receive your admission letter and pay the fee." },
            ].map((s) => (
              <div key={s.step} className="p-6 rounded-2xl" style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
                <p className="font-mono font-bold text-3xl mb-4 text-electric-2 opacity-40">{s.step}</p>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--fg)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Contact />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
