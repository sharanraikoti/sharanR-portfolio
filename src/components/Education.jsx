import { education, languages } from "../data/profile";
import { CapIcon } from "./Icons";
import { Section } from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="// education" title="Education" tint>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <ol className="relative min-w-0 border-l-2 border-navy-100 pl-8">
          {education.map((e, i) => (
            <li key={e.title} className={i ? "mt-8" : ""}>
              <span className="absolute -left-[17px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-navy-900 text-white" aria-hidden="true"><CapIcon className="h-4 w-4" /></span>
              <p className="font-mono text-sm text-cobalt-600">{e.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-navy-900">{e.title}</h3>
              <p className="text-ink-soft">{e.place}</p>
            </li>
          ))}
        </ol>
        <section aria-labelledby="languages-title" className="h-fit rounded-2xl border border-line bg-white p-6 shadow-card">
          <h3 id="languages-title" className="text-lg font-semibold text-navy-900">Languages</h3>
          <ul className="mt-4 space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex flex-col">
                <span className="font-medium text-navy-900">{l.name}</span>
                <span className="text-sm text-ink-soft">{l.level}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Section>
  );
}
