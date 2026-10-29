import { about, quickFacts } from "../data/profile";
import { Section } from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="// about" title="About Me" tint>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="min-w-0 space-y-5 text-[17px] leading-relaxed text-ink-soft">
          {about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
        </div>
        <dl className="h-fit rounded-2xl border border-line bg-white p-6 shadow-card">
          {quickFacts.map((f, i) => (
            <div key={f.label} className={`flex flex-col gap-1 py-3 ${i ? "border-t border-line" : "pt-0"}`}>
              <dt className="font-mono text-xs uppercase tracking-wider text-ink-mute">{f.label}</dt>
              <dd className="font-medium text-navy-900">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
