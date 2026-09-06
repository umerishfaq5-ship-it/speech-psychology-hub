import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, MapPin, MessageCircle, ExternalLink, Navigation2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20an%20appointment%20at%20Clinical%20Center%20for%20Speech%20%26%20Psychology.";
const MAPS_URL = "https://www.google.com/maps?q=33.558426,73.061949";
const MAPS_EMBED = "https://www.google.com/maps?q=33.558426,73.061949&z=16&output=embed";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=33.558426,73.061949";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact & Visit — Clinical Center for Speech & Psychology | Rawalpindi" },
      { name: "description", content: "Book an appointment at Clinical Center for Speech & Psychology, Rawalpindi. Located at ADYALA, Defence Road. Call 0331-880-7617 · Mon–Sat 9am–5pm · Quick WhatsApp booking." },
      { name: "keywords", content: "contact speech therapist Rawalpindi, book speech therapy appointment, Clinical Center Speech Psychology address, Defence Road Adyala Rawalpindi clinic" },
      { property: "og:title", content: "Contact & Book — Clinical Center for Speech & Psychology, Rawalpindi" },
      { property: "og:description", content: "Book an appointment in Rawalpindi. Call or WhatsApp 0331-880-7617. Open Mon–Sat 9am–5pm." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-psychology/[0.06] to-transparent border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-18">
          <span className="text-xs font-medium uppercase tracking-widest text-psychology">Book an Appointment</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">Contact &amp; Visit</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We'd love to help. Reach us by WhatsApp, phone, or fill the form below — our team responds promptly.
          </p>

          {/* Quick action buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              id="contact-whatsapp-btn"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold text-white shadow-lg hover:opacity-90 transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <MessageCircle className="h-5 w-5" /> Book via WhatsApp
            </a>
            <a
              id="contact-call-btn"
              href="tel:03318807617"
              className="inline-flex items-center gap-2 rounded-full bg-speech px-6 py-3 text-base font-bold text-speech-foreground shadow-sm hover:opacity-90 transition"
            >
              <Phone className="h-5 w-5" /> Call Now: 0331 880 7617
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-xl font-semibold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Sidebar: Info + Map */}
          <aside className="lg:col-span-2 space-y-6">
            {/* Clinic info card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h2 className="font-display text-lg font-semibold">Clinic Information</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 shrink-0 text-speech" />
                  <div>
                    <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Phone</div>
                    <a href="tel:03318807617" className="font-semibold text-foreground hover:text-speech transition-colors text-base">0331 880 7617</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 mt-0.5 shrink-0 text-emerald-600" />
                  <div>
                    <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">WhatsApp</div>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                    <div className="text-xs text-muted-foreground mt-0.5">Preferred by most patients</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-0.5 shrink-0 text-psychology" />
                  <div>
                    <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Timings</div>
                    <div className="font-semibold text-foreground">Mon–Sat: 9:00 am – 5:00 pm</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Closed on Sundays</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-psychology" />
                  <div>
                    <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Address</div>
                    <address className="not-italic font-semibold text-foreground leading-snug">
                      ADYALA, Defence Road<br />
                      Rawalpindi 46200, Pakistan
                    </address>
                    <div className="mt-2 flex gap-2">
                      <a
                        href={DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-psychology/40 text-psychology px-3 py-1 text-xs font-medium hover:bg-psychology/5 transition"
                      >
                        <Navigation2 className="h-3 w-3" /> Directions
                      </a>
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-border text-muted-foreground px-3 py-1 text-xs font-medium hover:text-foreground transition"
                      >
                        <ExternalLink className="h-3 w-3" /> Open Maps
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="Clinical Center for Speech & Psychology — ADYALA, Defence Road, Rawalpindi"
                src={MAPS_EMBED}
                className="w-full h-72 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="bg-card border-t border-border px-4 py-3 flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">ADYALA, Defence Road</span><br />
                  Rawalpindi, 46200
                </div>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-psychology px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90"
                >
                  <Navigation2 className="h-3 w-3" /> Get Directions
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom WhatsApp Banner */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <div className="rounded-2xl border border-emerald-200/50 bg-emerald-50/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <div className="font-semibold text-foreground">Prefer WhatsApp?</div>
              <div className="text-sm text-muted-foreground">Most of our patients book quickly via WhatsApp. We respond within minutes.</div>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-90 transition"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
