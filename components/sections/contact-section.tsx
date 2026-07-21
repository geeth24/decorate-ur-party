"use client";

import { useState } from "react";
import { z } from "zod";
import { ArrowUpRight, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Please enter your phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  message: z.string().min(1, "Tell us a little about your event"),
});
type FormData = z.infer<typeof schema>;
const initial: FormData = { name: "", email: "", phone: "", eventType: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const update = (key: keyof FormData, value: string) => { setForm((current) => ({ ...current, [key]: value })); setErrors((current) => ({ ...current, [key]: undefined })); };
  async function submit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<FormData> = {};
      parsed.error.errors.forEach((error) => { if (error.path[0]) next[error.path[0] as keyof FormData] = error.message; });
      setErrors(next); return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/send-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data) });
      if (!response.ok) throw new Error("Request failed");
      setForm(initial); setStatus("success");
    } catch { setStatus("error"); }
  }
  const field = "w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 text-base text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none";
  return <section id="contact" className="section-space bg-[var(--surface)]">
    <div className="shell grid gap-14 md:grid-cols-[.75fr_1.25fr] md:gap-24">
      <div><p className="eyebrow mb-5 text-[var(--accent)]">Start a conversation</p><h2 className="display text-5xl leading-[.95] md:text-7xl">Tell us what you’re celebrating.</h2><div className="mt-10 space-y-2 text-sm text-[var(--muted)]"><p>Serving New Jersey and New York</p><a href="tel:+17324911541" className="block text-[var(--ink)]">(732) 491-1541</a><a href="mailto:info@decorateurparty.com" className="block text-[var(--ink)]">info@decorateurparty.com</a></div></div>
      <form onSubmit={submit} noValidate className="grid content-start gap-x-8 gap-y-7 sm:grid-cols-2">
        {[["name","Name","Your name","text"],["email","Email","you@example.com","email"],["phone","Phone","Your phone number","tel"]].map(([key,label,placeholder,type]) => <label key={key} className={key === "phone" ? "sm:col-span-2" : ""}><span className="text-sm font-medium">{label}</span><input className={field} type={type} value={form[key as keyof FormData]} onChange={(e) => update(key as keyof FormData, e.target.value)} placeholder={placeholder} aria-invalid={!!errors[key as keyof FormData]} />{errors[key as keyof FormData] && <span className="mt-2 block text-sm text-[var(--accent-dark)]">{errors[key as keyof FormData]}</span>}</label>)}
        <label className="sm:col-span-2"><span className="text-sm font-medium">Event type</span><select className={field} value={form.eventType} onChange={(e) => update("eventType", e.target.value)}><option value="">Choose one</option><option>Wedding</option><option>Birthday</option><option>Baby shower</option><option>Corporate event</option><option>House warming</option><option>Annaprashan</option><option>Other</option></select>{errors.eventType && <span className="mt-2 block text-sm text-[var(--accent-dark)]">{errors.eventType}</span>}</label>
        <label className="sm:col-span-2"><span className="text-sm font-medium">Your vision</span><textarea className={`${field} min-h-28 resize-y`} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Date, venue, guest count and the feeling you want" />{errors.message && <span className="mt-2 block text-sm text-[var(--accent-dark)]">{errors.message}</span>}</label>
        <div className="sm:col-span-2"><button disabled={status === "loading"} className="pressable inline-flex min-w-48 items-center justify-center gap-3 whitespace-nowrap bg-[var(--ink)] px-6 py-3.5 font-medium text-[var(--paper)] disabled:opacity-60">{status === "loading" ? <><Loader2 className="animate-spin" size={18} /> Sending</> : <>Send inquiry <ArrowUpRight size={18} /></>}</button>{status === "success" && <p role="status" className="mt-4 text-sm">Thank you. We’ll be in touch soon.</p>}{status === "error" && <p role="alert" className="mt-4 text-sm text-[var(--accent-dark)]">Something went wrong. Please call or email us directly.</p>}</div>
      </form>
    </div>
  </section>;
}
