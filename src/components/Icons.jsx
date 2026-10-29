const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export function GitHubIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
export function LinkedInIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
export function MailIcon({ className = "h-5 w-5" }) {
  return (<svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></svg>);
}
export function DownloadIcon({ className = "h-4 w-4" }) {
  return (<svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true"><path d="M12 4v11" /><path d="m7 10 5 5 5-5" /><path d="M5 20h14" /></svg>);
}
export function ArrowIcon({ className = "h-4 w-4" }) {
  return (<svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>);
}
export function ExternalIcon({ className = "h-4 w-4" }) {
  return (<svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true"><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></svg>);
}
export function PinIcon({ className = "h-5 w-5" }) {
  return (<svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>);
}
export function CopyIcon({ className = "h-4 w-4" }) {
  return (<svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a1 1 0 0 1 1-1h10" /></svg>);
}
export function CheckIcon({ className = "h-4 w-4" }) {
  return (<svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>);
}
export function MenuIcon({ open, className = "h-6 w-6" }) {
  return (<svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">{open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>);
}
export function BadgeIcon({ className = "h-5 w-5" }) {
  return (<svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true"><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></svg>);
}
export function CapIcon({ className = "h-5 w-5" }) {
  return (<svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true"><path d="m2 9 10-5 10 5-10 5Z" /><path d="M6 11v5c3 2.5 9 2.5 12 0v-5" /></svg>);
}
