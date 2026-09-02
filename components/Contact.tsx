"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle, Send } from "lucide-react";

const info = [
  { icon: MapPin, label: "Address",      lines: ["42, Horizon Park Road", "New Delhi – 110025"],                 accent: "#6366f1" },
  { icon: Phone,  label: "Phone",        lines: ["+91 98765 43210", "+91 11 2345 6789"],                         accent: "#22c55e" },
  { icon: Mail,   label: "Email",        lines: ["admissions@brightacademy.edu", "info@brightacademy.edu"],       accent: "#f97316" },
  { icon: Clock,  label: "School Hours", lines: ["Mon–Fri  7:30 AM – 3:30 PM", "Saturday  8:00 AM – 12:00 PM"], accent: "#38bdf8" },
];

const grades = ["KG", ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", grade: "", msg: "" });
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  const inputStyle = {
    background: "var(--bg)",
    border: "1px solid var(--border)",
    color: "var(--fg)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ background: "var(--bg-2)" }}>
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3"><div className="h-px w-8 bg-electric" /><span className="mono-tag">Get in Touch</span></div>
          <span className="mono-tag">Admissions Open</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-14 max-w-xl">
          <h2 className="font-display font-bold text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.1] mb-4" style={{ color: "var(--fg)" }}>
            Your Child's Journey <span className="text-electric-2">Starts with Hello.</span>
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--fg-2)" }}>Reach out for admissions, campus tours, or any questions. We respond within 24 hours.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15 }}
            className="rounded-3xl p-8 md:p-10" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
            {sent ? (
              <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="min-h-[300px] flex flex-col items-center justify-center text-center gap-4 py-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.12)" }}>
                  <CheckCircle className="w-7 h-7 text-lime" />
                </div>
                <h3 className="font-display font-bold text-2xl" style={{ color: "var(--fg)" }}>Message Sent!</h3>
                <p className="text-sm max-w-xs" style={{ color: "var(--fg-3)" }}>We've received your inquiry and will get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", grade: "", msg: "" }); }}
                  className="mt-1 px-5 py-2.5 rounded-full text-sm border transition-all"
                  style={{ borderColor: "var(--border-2)", color: "var(--fg-3)" }}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-display font-bold text-xl mb-7" style={{ color: "var(--fg)" }}>Admission Inquiry</h3>
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[["name","Full Name","text",true],["email","Email","email",true]].map(([key,ph,type,req]) => (
                      <div key={key as string}>
                        <label className="mono-tag block mb-2">{ph as string}{req && " *"}</label>
                        <input required={!!req} type={type as string} placeholder={ph as string}
                          value={(form as any)[key as string]}
                          onChange={(e) => setForm({ ...form, [key as string]: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = "var(--electric)"}
                          onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="mono-tag block mb-2">Phone</label>
                      <input type="tel" placeholder="+91 ..." value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle}
                        onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = "var(--electric)"}
                        onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
                      />
                    </div>
                    <div>
                      <label className="mono-tag block mb-2">Grade</label>
                      <select value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })}
                        style={{ ...inputStyle, appearance: "none" }}>
                        <option value="">Select Grade</option>
                        {grades.map((g) => <option key={g}>{g}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mono-tag block mb-2">Message</label>
                    <textarea rows={4} placeholder="Tell us about your child or any questions..."
                      value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = "var(--electric)"}
                      onBlur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = "var(--border)"}
                    />
                  </div>
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 h-12 bg-electric hover:bg-electric-2 text-white font-semibold rounded-xl transition-colors">
                    <Send className="w-4 h-4" /> Submit Inquiry
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25 }}
            className="flex flex-col gap-3">
            {info.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-250"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = item.accent + "50"; (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: item.accent + "15" }}>
                  <item.icon className="w-4.5 h-4.5" style={{ color: item.accent }} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mono-tag mb-1">{item.label}</p>
                  {item.lines.map((l) => <p key={l} className="text-sm" style={{ color: "var(--fg-2)" }}>{l}</p>)}
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.65 }}
              className="flex-1 min-h-[120px] p-6 rounded-2xl flex flex-col justify-between"
              style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
              <div>
                <p className="font-display font-bold text-lg mb-1" style={{ color: "var(--fg)" }}>Visit Our Campus</p>
                <p className="text-sm" style={{ color: "var(--fg-3)" }}>New Delhi, India</p>
              </div>
              <button className="group self-start inline-flex items-center gap-1.5 h-9 px-4 text-sm font-medium rounded-full border mt-4 transition-all"
                style={{ borderColor: "var(--border-2)", color: "var(--fg-3)" }}>
                Get Directions <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
