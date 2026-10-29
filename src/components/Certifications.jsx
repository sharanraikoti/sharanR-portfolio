import { certifications } from "../data/profile";
import { BadgeIcon, ExternalIcon } from "./Icons";
import { Section } from "./Section";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="// certifications" title="Certifications" intro="Courses and programmes I have completed to strengthen my skills.">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <li key={c.name} className="flex min-w-0 flex-col rounded-2xl border border-line bg-white p-6 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt-600"><BadgeIcon /></span>
            <h3 className="mt-4 font-semibold leading-snug text-navy-900">{c.name}</h3>
            <p className="mt-1 text-ink-soft">{c.issuer}</p>
            <p className="mt-auto pt-4 font-mono text-xs uppercase tracking-wider text-ink-mute">{c.platform}</p>
            {c.url && (
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt-600 underline-offset-4 hover:underline">
                Verify credential <ExternalIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
