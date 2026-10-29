import { useState } from "react";
import { profile } from "../data/profile";
import { CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "./Icons";
import { Section } from "./Section";

const field = "mt-1.5 block w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-ink placeholder:text-ink-mute/70 focus:border-cobalt-500 focus:outline-none focus:ring-4 focus:ring-cobalt-100";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    catch { const el = document.getElementById("contact-email"); const r = document.createRange(); r.selectNodeContents(el); const s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Please enter a valid email address.";
    if (!form.subject.trim()) errs.subject = "Please add a subject.";
    if (form.message.trim().length < 10) errs.message = "Please write a message of at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const err = (k) => errors[k] && <p id={`${k}-error`} className="mt-1 text-sm text-red-700">{errors[k]}</p>;

  return (
    <Section id="contact" eyebrow="// contact" title="Get in Touch" intro="I'm looking for software development and AI/ML internship opportunities. Feel free to reach out.">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div className="min-w-0 space-y-4">
          <div className="rounded-2xl border border-line bg-paper p-6">
            <p className="text-lg font-semibold text-navy-900">{profile.name}</p>
            <div className="mt-4 flex items-start gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-cobalt-600" />
              <div className="min-w-0">
                <p id="contact-email" className="break-all font-medium text-navy-900">{profile.email}</p>
                <button type="button" onClick={copyEmail} className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt-600 hover:underline">
                  {copied ? <><CheckIcon /> Copied</> : <><CopyIcon /> Copy email</>}
                </button>
              </div>
            </div>
            <p className="mt-4 flex items-center gap-3 text-ink-soft"><PinIcon className="h-5 w-5 shrink-0 text-cobalt-600" /> {profile.location}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex h-12 items-center gap-2 rounded-lg bg-cobalt-600 px-5 font-semibold text-white transition hover:bg-cobalt-700"><MailIcon /> Email Me</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-lg border border-navy-200 px-5 font-semibold text-navy-900 transition hover:border-navy-600"><LinkedInIcon /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-lg border border-navy-200 px-5 font-semibold text-navy-900 transition hover:border-navy-600"><GitHubIcon /> GitHub</a>
          </div>
        </div>

        <form onSubmit={submit} noValidate className="min-w-0 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8" aria-describedby="form-note">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cf-name" className="text-sm font-semibold text-navy-900">Name</label>
              <input id="cf-name" name="name" autoComplete="name" value={form.name} onChange={set("name")} className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
              {err("name")}
            </div>
            <div>
              <label htmlFor="cf-email" className="text-sm font-semibold text-navy-900">Email</label>
              <input id="cf-email" name="email" type="email" autoComplete="email" value={form.email} onChange={set("email")} className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
              {err("email")}
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="cf-subject" className="text-sm font-semibold text-navy-900">Subject</label>
            <input id="cf-subject" name="subject" value={form.subject} onChange={set("subject")} className={field} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined} />
            {err("subject")}
          </div>
          <div className="mt-5">
            <label htmlFor="cf-message" className="text-sm font-semibold text-navy-900">Message</label>
            <textarea id="cf-message" name="message" rows={5} value={form.message} onChange={set("message")} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
            {err("message")}
          </div>
          <button type="submit" className="mt-6 inline-flex h-12 items-center gap-2 rounded-lg bg-navy-900 px-6 font-semibold text-white transition hover:bg-navy-700">
            <MailIcon /> Compose Email
          </button>
          <p id="form-note" className="mt-3 text-sm text-ink-mute">This opens your email app with your message filled in. Nothing is sent from this website.</p>
          {opened && (
            <p role="status" className="mt-3 rounded-lg bg-navy-50 px-4 py-3 text-sm text-navy-800">
              Your email app should now be open with the message ready to send. If it did not open, please email {profile.email} directly.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
