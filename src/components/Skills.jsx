import { skills } from "../data/profile";
import { Section, Tag } from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="// skills" title="Technical Skills" intro="The languages, concepts and tools I use to build and analyse software.">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((g) => (
          <article key={g.title} className="rounded-2xl border border-line bg-white p-6 shadow-card transition hover:shadow-lift">
            <h3 className="text-lg font-semibold text-navy-900">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => <li key={s}><Tag>{s}</Tag></li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
