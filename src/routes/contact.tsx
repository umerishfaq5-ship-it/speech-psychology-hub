import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Clinical Center for Speech & Psychology" },
      { name: "description", content: "Book an appointment or ask a question. Call 0331 880 7617 · Timings 9:00 am – 6:00 pm." },
      { property: "og:title", content: "Contact — Clinical Center for Speech & Psychology" },
      { property: "og:description", content: "Book an appointment with our clinical team." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <span className="text-xs font-medium uppercase tracking-widest text-psychology">Contact</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">Book an appointment</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Share a few details and our team will reach out to schedule your consultation.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3"><ContactForm /></div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">Clinic Information</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 text-speech" />
                  <div>
                    <div className="text-muted-foreground text-xs">Contact No.</div>
                    <a href="tel:03318807617" className="font-medium hover:text-speech">0331 880 7617</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-0.5 text-psychology" />
                  <div>
                    <div className="text-muted-foreground text-xs">Timings</div>
                    <div className="font-medium">9:00 am – 6:00 pm</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 text-speech" />
                  <div>
                    <div className="text-muted-foreground text-xs">Email</div>
                    <a href="mailto:info@clinicalcenter.pk" className="font-medium hover:text-speech">info@clinicalcenter.pk</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-psychology" />
                  <div>
                    <div className="text-muted-foreground text-xs">Location</div>
                    <div className="font-medium">Clinic Address, Pakistan</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Clinic location"
                src="https://www.google.com/maps?q=Karachi&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
