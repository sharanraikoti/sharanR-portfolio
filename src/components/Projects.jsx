import { profile, projects } from "../data/profile";
import { ExternalIcon, GitHubIcon } from "./Icons";
import { Section } from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="// projects" title="Featured Projects" intro="Practical projects in machine learning and Python application development." tint>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.name} className="group flex min-w-0 flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-navy-200 hover:shadow-lift">
            <p className="font-mono text-xs uppercase tracking-wider text-cobalt-600">{p.kind}</p>
            <h3 className="mt-2 text-xl font-semibold text-navy-900">{p.name}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{p.description}</p>
            <h4 className="mt-5 text-sm font-semibold text-navy-900">Key features</h4>
            <ul className="mt-2 space-y-1.5 text-[15px] text-ink-soft">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt-500" aria-hidden="true" />{f}</li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <p className="sr-only">Technologies used</p>
              <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                {p.tech.map((t) => <li key={t} className="rounded-md bg-navy-50 px-2.5 py-1 font-mono text-xs font-medium text-navy-700">{t}</li>)}
              </ul>
              {(p.repo || p.demo) && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold text-navy-900 hover:border-navy-600"><GitHubIcon className="h-4 w-4" /> GitHub</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-lg bg-navy-900 px-4 text-sm font-semibold text-white hover:bg-navy-700"><ExternalIcon /> Live Demo</a>}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-ink-soft">
        More of my code is on{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-cobalt-600 underline-offset-4 hover:underline">
          GitHub <ExternalIcon className="h-3.5 w-3.5" />
        </a>
      </p>
    </Section>
  );
}
