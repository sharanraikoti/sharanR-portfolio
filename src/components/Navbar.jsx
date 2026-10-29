import { useEffect, useState } from "react";
import { nav, profile } from "../data/profile";
import { DownloadIcon, MenuIcon } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  const link = (n, mobile = false) => (
    <a
      key={n.id}
      href={`#${n.id}`}
      onClick={() => setOpen(false)}
      aria-current={active === n.id ? "true" : undefined}
      className={
        mobile
          ? `block rounded-lg px-3 py-3 text-base font-medium ${active === n.id ? "bg-navy-50 text-navy-900" : "text-ink-soft hover:bg-paper"}`
          : `relative rounded-md px-3 py-2 text-[15px] font-medium transition-colors ${active === n.id ? "text-navy-900" : "text-ink-mute hover:text-navy-900"}`
      }
    >
      {n.label}
      {!mobile && active === n.id && <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-cobalt-500" aria-hidden="true" />}
    </a>
  );

  return (
    <header className={`sticky top-0 z-40 border-b transition-colors ${scrolled ? "border-line bg-white/85 backdrop-blur-md" : "border-transparent bg-white"}`}>
      <nav aria-label="Main" className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Sharan R, back to top">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 font-mono text-[15px] font-semibold tracking-tight text-white">{profile.initials}</span>
          <span className="hidden font-semibold text-navy-900 sm:block">{profile.name}</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">{nav.map((n) => link(n))}</div>
        <div className="flex items-center gap-2">
          <a href={profile.resume} target="_blank" rel="noopener" download="Sharan_R_Resume.pdf"
             className="inline-flex h-10 items-center gap-2 rounded-lg bg-navy-900 px-4 text-sm font-semibold text-white transition hover:bg-navy-700">
            <DownloadIcon /> <span className="hidden sm:inline">Download Resume</span><span className="sm:hidden">Resume</span>
          </a>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 hover:bg-paper lg:hidden"
                  aria-expanded={open} aria-controls="mobile-menu" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white px-5 pb-4 pt-2 lg:hidden">{nav.map((n) => link(n, true))}</div>
      )}
    </header>
  );
}
