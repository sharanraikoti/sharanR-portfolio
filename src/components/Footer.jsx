import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-mono text-[15px] font-semibold text-navy-900">{profile.initials}</span>
            <span className="text-lg font-semibold">{profile.name}</span>
          </div>
          <p className="mt-3 text-navy-200">Computer Science Engineering Student | Python | Machine Learning</p>
          <p className="mt-1 break-all text-navy-200">{profile.email}</p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <ul className="flex gap-2" aria-label="Social links">
            <li><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 transition hover:bg-white/20"><GitHubIcon /></a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 transition hover:bg-white/20"><LinkedInIcon /></a></li>
            <li><a href={`mailto:${profile.email}`} aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 transition hover:bg-white/20"><MailIcon /></a></li>
          </ul>
          <p className="text-sm text-navy-200">© {year} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
