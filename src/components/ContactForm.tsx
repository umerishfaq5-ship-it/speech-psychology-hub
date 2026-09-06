import { useState } from "react";
import { Send, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { submitToGoogleSheets } from "@/lib/google-sheets";

const WHATSAPP_URL =
  "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20an%20appointment%20at%20Clinical%20Center%20for%20Speech%20%26%20Psychology.";

const services = [
  "Pediatric Speech & Language",
  "Autism / Social Communication",
  "Stuttering / Fluency Therapy",
  "Pediatric Feeding Therapy",
  "AAC (Non-verbal Child)",
  "Stroke / Aphasia Rehab (Adult)",
  "Adult Neuro-Rehabilitation",
  "Voice & Swallowing Therapy",
  "Parkinson's Speech Therapy",
  "General Enquiry",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ name: "", phone: "", service: services[0], message: "" });

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await submitToGoogleSheets({ ...form, source: "Contact Page Form" });
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-psychology/30 bg-psychology/5 p-10 text-center">
        <div className="mx-auto mb-4 grid place-items-center h-14 w-14 rounded-full bg-psychology/10 text-psychology">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="font-display text-xl font-semibold">Thank you, {form.name}!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We've received your request. Our team will call you on <strong>{form.phone}</strong> shortly.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        >
          <MessageCircle className="h-4 w-4" /> Also chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name *" name="name" required value={form.name} onChange={set("name")} />
        <Field label="Phone / WhatsApp *" name="phone" type="tel" required value={form.phone} onChange={set("phone")} placeholder="03xx-xxxxxxx" />

        <div className="sm:col-span-2">
          <label htmlFor="service" className="text-sm font-medium text-foreground/80">Service of Interest</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={set("service")}
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-speech focus:ring-2 focus:ring-speech/20 transition"
          >
            {services.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message / Description</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={set("message")}
            placeholder="Tell us about the patient's condition, age, and what you need help with..."
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-speech focus:ring-2 focus:ring-speech/20 transition resize-none"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-full bg-speech px-6 py-2.5 text-sm font-semibold text-speech-foreground hover:opacity-90 transition disabled:opacity-60"
        >
          {status === "loading" ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
          ) : (
            <><Send className="h-4 w-4" /> Send Request</>
          )}
        </button>
        <span className="text-xs text-muted-foreground">or</span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Us
        </a>
      </div>
    </form>
  );
}

function Field({
  label, name, type = "text", required, className = "", value, onChange, placeholder,
}: {
  label: string; name: string; type?: string; required?: boolean;
  className?: string; value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium text-foreground/80">{label}</label>
      <input
        id={name} name={name} type={type} required={required} value={value} onChange={onChange} placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-speech focus:ring-2 focus:ring-speech/20 transition"
      />
    </div>
  );
}
