import { profile } from "../data/profile";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const K = ({ children }) => <span className="text-[#8FB2FF]">{children}</span>;      // keyword
const S = ({ children }) => <span className="text-[#9FE0B7]">{children}</span>;      // string
const F = ({ children }) => <span className="text-[#FFD98A]">{children}</span>;      // function / class
const Sf = ({ children }) => <span className="text-[#F3A9C9]">{children}</span>;     // self

function CodeCard() {
  const lines = [
    <><K>class</K> <F>Developer</F>:</>,
    <>{"    "}<K>def</K> <F>__init__</F>(<Sf>self</Sf>):</>,
    <>{"        "}<Sf>self</Sf>.name = <S>"Sharan R"</S></>,
    <>{"        "}<Sf>self</Sf>.degree = <S>"B.E. CSE, SJBIT (2027)"</S></>,
    <>{"        "}<Sf>self</Sf>.focus = [<S>"Python"</S>, <S>"Machine Learning"</S>,</>,
    <>{"                      "}<S>"Software Development"</S>]</>,
    <>{"        "}<Sf>self</Sf>.stack = [<S>"Scikit-learn"</S>, <S>"Pandas"</S>,</>,
    <>{"                      "}<S>"Streamlit"</S>, <S>"Git"</S>]</>,
    <></>,
    <>{"    "}<K>def</K> <F>status</F>(<Sf>self</Sf>):</>,
    <>{"        "}<K>return</K> <S>"Open to internships"</S></>,
  ];
  return (
    <figure className="relative w-full overflow-hidden rounded-2xl border border-navy-800 bg-navy-900 shadow-lift" aria-label="Profile written as a Python class">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#F26D5B]" /><span className="h-3 w-3 rounded-full bg-[#F5BE4F]" /><span className="h-3 w-3 rounded-full bg-[#5CC46B]" />
        <span className="ml-3 rounded-md bg-white/10 px-2.5 py-1 font-mono text-xs text-white/80">profile.py</span>
      </div>
      <pre className="overflow-x-auto px-4 py-5 font-mono text-[12.5px] leading-6 text-white/90 sm:text-[13.5px]">
        {lines.map((l, i) => (
          <div key={i} className="flex">
            <span className="mr-4 w-5 shrink-0 select-none text-right text-white/30">{i + 1}</span>
            <code className="whitespace-pre">{l}{i === lines.length - 1 && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-[#8FB2FF]" aria-hidden="true" />}</code>
          </div>
        ))}
      </pre>
    </figure>
  );
}

export default function Hero() {
  const socials = [
    { href: profile.github, label: "GitHub", Icon: GitHubIcon },
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
  ];
  return (
    <section id="home" aria-labelledby="home-title" className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#C7D3E6_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,.55),transparent_75%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:pb-28 lg:pt-20">
        <div className="min-w-0 animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink-soft shadow-card">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" /> Open to internships · {profile.location.split(",")[0]}
          </p>
          <h1 id="home-title" className="mt-6 text-5xl font-semibold tracking-tight text-navy-900 sm:text-6xl">
            Hi, I'm <span className="text-cobalt-600">Sharan R</span>
          </h1>
          <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-lg font-medium text-ink-soft">
            {profile.roles.map((r, i) => (
              <span key={r} className="flex items-center gap-3">{i > 0 && <span className="h-1 w-1 rounded-full bg-navy-200" aria-hidden="true" />}{r}</span>
            ))}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex h-12 items-center gap-2 rounded-lg bg-cobalt-600 px-6 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-cobalt-700">
              View My Projects <ArrowIcon />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener" download="Sharan_R_Resume.pdf" className="inline-flex h-12 items-center gap-2 rounded-lg border border-navy-200 bg-white px-6 font-semibold text-navy-900 transition hover:-translate-y-0.5 hover:border-navy-600">
              <DownloadIcon /> Download Resume
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Profiles">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                   className="inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-ink-soft transition hover:bg-paper hover:text-navy-900">
                  <Icon className="h-[18px] w-[18px]" /> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 animate-rise [animation-delay:.12s]"><CodeCard /></div>
      </div>
    </section>
  );
}
