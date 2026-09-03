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
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-electric" />
            <span className="mono-tag">Admissions Open</span>
          </div>
          <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] mb-4" style={{ color: "var(--fg)" }}>
            Admit Your Child Today
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: "var(--fg-2)" }}>
            Simple process, affordable fees, and a school that truly cares for your child.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-electric" />
            <span className="mono-tag">How to Apply — 4 Easy Steps</span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Fill the Form",     desc: "Fill the enquiry form below with your child's name, age and class needed." },
              { step: "02", title: "Visit Our School",  desc: "Come and see our school. Meet the teachers and see the classrooms." },
              { step: "03", title: "Simple Test",       desc: "A small and easy test for Grade 1 and above. No pressure at all." },
              { step: "04", title: "Admission Done",    desc: "Pay the fees and your child is admitted. We welcome them with love." },
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
