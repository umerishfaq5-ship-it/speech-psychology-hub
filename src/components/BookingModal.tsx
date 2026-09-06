import { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle2, Phone, MessageCircle, Loader2 } from "lucide-react";
import { submitToGoogleSheets } from "@/lib/google-sheets";

const WHATSAPP_URL =
  "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20an%20appointment%20at%20Clinical%20Center%20for%20Speech%20%26%20Psychology.";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ name: "", phone: "", service: "Pediatric Speech & Language", message: "" });
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Reset on close
  useEffect(() => {
    if (!open) { setTimeout(() => { setStatus("idle"); setForm({ name: "", phone: "", service: "Pediatric Speech & Language", message: "" }); }, 300); }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await submitToGoogleSheets({ ...form, source: "Booking Modal" });
    setStatus("success");
  };

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book an Appointment"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{ animation: "fadeIn 0.2s ease" }}
        onClick={onClose}
      />

      {/* Modal panel */}
      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-md rounded-3xl bg-card border border-border shadow-[0_30px_80px_rgba(0,0,0,0.3)] overflow-hidden"
        style={{ animation: "slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}
      >
        {/* Header gradient strip */}
        <div className="px-6 pt-6 pb-5" style={{ background: "linear-gradient(135deg, oklch(0.52 0.14 240 / 0.08), oklch(0.62 0.11 160 / 0.08))" }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-psychology mb-1">Quick Booking</div>
              <h2 className="font-display text-xl font-semibold text-foreground">Book an Appointment</h2>
              <p className="text-xs text-muted-foreground mt-1">We'll contact you within a few hours · Mon–Sat 9am–5pm</p>
            </div>
            <button
              onClick={onClose}
              id="modal-close-btn"
              className="grid place-items-center h-9 w-9 rounded-xl border border-border bg-background/80 hover:bg-muted transition-colors"
              aria-label="Close booking form"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* WhatsApp shortcut */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-3 rounded-2xl px-4 py-3 text-white text-sm font-medium hover:opacity-90 transition"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            <div>
              <div className="font-semibold">Prefer WhatsApp? Chat instantly</div>
              <div className="text-white/80 text-xs">Most patients prefer this · Fastest response</div>
            </div>
          </a>

          {/* Divider */}
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" />
            <span>or fill the form below</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        {/* Form body */}
        <div className="px-6 pb-6">
          {status === "success" ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 grid place-items-center h-14 w-14 rounded-full bg-psychology/10 text-psychology">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-semibold">Thank you, {form.name}!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We've received your request and will reach out on <strong>{form.phone}</strong> shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-psychology px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-name" className="text-xs font-medium text-foreground/80">Full Name *</label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your name"
                    className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-speech focus:ring-2 focus:ring-speech/20 transition"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="text-xs font-medium text-foreground/80">Phone / WhatsApp *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="03xx-xxxxxxx"
                    className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-speech focus:ring-2 focus:ring-speech/20 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-service" className="text-xs font-medium text-foreground/80">Service Needed</label>
                <select
                  id="modal-service"
                  value={form.service}
                  onChange={set("service")}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-speech focus:ring-2 focus:ring-speech/20 transition"
                >
                  <option>Pediatric Speech &amp; Language</option>
                  <option>Autism / Social Communication</option>
                  <option>Stuttering / Fluency Therapy</option>
                  <option>Pediatric Feeding Therapy</option>
                  <option>AAC (Non-verbal Child)</option>
                  <option>Stroke / Aphasia Rehab (Adult)</option>
                  <option>Adult Neuro-Rehabilitation</option>
                  <option>Voice &amp; Swallowing Therapy</option>
                  <option>Parkinson's Speech Therapy</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-message" className="text-xs font-medium text-foreground/80">Brief Description (optional)</label>
                <textarea
                  id="modal-message"
                  rows={3}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your child or loved one's needs..."
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-speech focus:ring-2 focus:ring-speech/20 transition resize-none"
                />
              </div>

              <button
                id="modal-submit-btn"
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-speech py-3 text-sm font-bold text-speech-foreground shadow-md hover:opacity-90 transition disabled:opacity-60"
              >
                {status === "loading" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  <><Send className="h-4 w-4" /> Request Appointment</>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                <Phone className="inline h-3 w-3 mr-1" />
                Or call directly: <a href="tel:03318807617" className="font-medium hover:text-speech">0331 880 7617</a>
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
      `}</style>
    </div>
  );
}
