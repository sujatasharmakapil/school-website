"use client";

interface Props {
  tag: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}

export default function SectionHeader({ tag, title, sub, center }: Props) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
        <div className="h-px w-8 bg-electric" />
        <span className="mono-tag">{tag}</span>
      </div>
      <h2
        className="font-display font-bold leading-[1.1] text-[clamp(1.9rem,4vw,3.2rem)]"
        style={{ color: "var(--fg)" }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl${center ? " mx-auto" : ""}`}
          style={{ color: "var(--fg-2)" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
