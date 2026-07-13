import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-psychology/30 bg-psychology/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-psychology" />
        <h3 className="mt-3 font-display text-xl font-semibold">Thank you</h3>
        <p className="mt-1 text-sm text-muted-foreground">We’ve received your message and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-foreground/80">Service of interest</label>
          <select className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-speech focus:ring-2 focus:ring-speech/20">
            <option>Pediatric Speech &amp; Language</option>
            <option>Adult Neuro-Rehabilitation</option>
            <option>Voice &amp; Swallowing</option>
            <option>Psychological Assessment</option>
            <option>General Enquiry</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-foreground/80">Message</label>
          <textarea rows={4} required className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-speech focus:ring-2 focus:ring-speech/20" />
        </div>
      </div>
      <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-speech px-5 py-2.5 text-sm font-medium text-speech-foreground hover:opacity-90">
        Send message <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium text-foreground/80">{label}</label>
      <input
        id={name} name={name} type={type} required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-speech focus:ring-2 focus:ring-speech/20"
      />
    </div>
  );
}
