export function Section({ id, eyebrow, title, intro, children, tint = false }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={tint ? "bg-paper border-y border-line" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <header className="mb-10 max-w-2xl">
          <p className="font-mono text-sm text-cobalt-600">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-2 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-lg leading-relaxed text-ink-soft">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-white px-2.5 py-1 text-sm font-medium text-ink-soft">{children}</span>
  );
}
