import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { pediatricServices } from "@/lib/services-data";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20a%20pediatric%20speech%20therapy%20consultation%20for%20my%20child.";

export const Route = createFileRoute("/pediatric-services")({
  component: PediatricServices,
  head: () => ({
    meta: [
      { title: "Pediatric Speech & Language Therapy Rawalpindi | Clinical Center for Speech & Psychology" },
      { name: "description", content: "Expert pediatric speech therapy in Rawalpindi for Autism, ADHD, Stuttering, Delayed Talking, Feeding difficulties & AAC. Located on Defence Road, Adyala. Book: 0331-880-7617." },
      { name: "keywords", content: "pediatric speech therapy Rawalpindi, autism therapy Rawalpindi, ADHD speech therapy, stuttering treatment children Pakistan, delayed speech toddler Rawalpindi, AAC therapy, feeding therapy children" },
      { property: "og:title", content: "Pediatric Speech & Language Services — Clinical Center for Speech & Psychology" },
      { property: "og:description", content: "Play-based, family-centered pediatric speech therapy for Autism, ADHD, Stuttering, Feeding & more in Rawalpindi." },
    ],
    links: [{ rel: "canonical", href: "/pediatric-services" }],
  }),
});

const conditions = [
  { icon: "🧩", label: "Autism Spectrum" },
  { icon: "⚡", label: "ADHD" },
  { icon: "🗣️", label: "Stuttering" },
  { icon: "🍼", label: "Delayed Talking" },
  { icon: "🍽️", label: "Feeding Difficulties" },
  { icon: "📟", label: "AAC Users" },
];

const processSteps = [
  { num: "01", title: "Initial Consultation", body: "Meet our SLP to discuss your child's history, concerns, and goals." },
  { num: "02", title: "Comprehensive Assessment", body: "Standardized evaluations to identify areas of need and strengths." },
  { num: "03", title: "Individualized Therapy Plan", body: "A custom plan with clear milestones and family involvement strategies." },
  { num: "04", title: "Ongoing Therapy & Review", body: "Regular sessions with progress reviews and parent coaching." },
];

function PediatricServices() {
  const { location } = useRouterState();
  const isSubPage = location.pathname.startsWith("/pediatric-services/");

  if (isSubPage) {
    return <Outlet />;
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-speech/[0.07] via-speech/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-speech">For Children &amp; Adolescents</span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
              Pediatric Speech &amp; Language Services
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Play-based, family-centered therapy tailored to your child's developmental needs —
              from first words to complex communication challenges including Autism, ADHD, and Stuttering.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                id="ped-whatsapp-btn"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 transition hover:scale-105"
                style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
              >
                <MessageCircle className="h-5 w-5" /> Book via WhatsApp
              </a>
              <a href="tel:03318807617" className="inline-flex items-center gap-2 rounded-full border-2 border-speech px-6 py-3 text-sm font-semibold text-speech hover:bg-speech/5 transition">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </div>
          </div>

          {/* Conditions we treat */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {conditions.map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-card p-4 text-center hover:border-speech/40 hover:shadow-[var(--shadow-card)] transition">
                <span className="text-3xl">{c.icon}</span>
                <div className="mt-2 text-sm font-medium text-foreground">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-medium uppercase tracking-widest text-speech">What We Offer</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">Pediatric Therapy Services</h2>
          <p className="mt-3 text-muted-foreground">Each therapy area is delivered by trained, compassionate SLPs using evidence-based techniques adapted for children.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pediatricServices.map((s) => <ServiceCard key={s.title} {...s} variant="speech" />)}
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gradient-to-br from-speech/5 to-transparent border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-medium uppercase tracking-widest text-speech">How We Work</span>
            <h2 className="mt-3 font-display text-3xl font-semibold">Our Therapy Process</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.num} className="relative rounded-2xl border border-border bg-card p-6 hover:border-speech/40 transition">
                <div className="font-display text-4xl font-bold text-speech/20 leading-none">{step.num}</div>
                <h3 className="mt-2 font-display font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-psychology">Why Families Trust Us</span>
            <h2 className="mt-3 font-display text-3xl font-semibold">What Sets Our Pediatric Team Apart</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Play-based and naturalistic therapy environments",
                "Parent coaching included in every therapy plan",
                "Collaborative approach with schools and educators",
                "Bilingual (Urdu/English) therapy available",
                "Flexible scheduling for working families",
                "Regular progress reports and milestone tracking",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-psychology shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-speech/10 to-psychology/10 border border-border p-8">
            <div className="text-center">
              <div className="font-display text-5xl font-bold text-speech">500+</div>
              <div className="text-muted-foreground mt-1">Children helped</div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl bg-card border border-border p-4">
                <div className="font-display text-3xl font-bold text-psychology">3+</div>
                <div className="text-xs text-muted-foreground mt-1">Years of Practice</div>
              </div>
              <div className="rounded-xl bg-card border border-border p-4">
                <div className="font-display text-3xl font-bold text-speech">12</div>
                <div className="text-xs text-muted-foreground mt-1">Expert Clinicians</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-speech to-psychology text-white p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl font-semibold">Is your child struggling with communication?</h2>
          <p className="mt-3 text-white/90 max-w-xl mx-auto">Our pediatric SLPs offer a free 15-minute consultation to understand your child's needs. Book instantly via WhatsApp.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-emerald-700 font-bold px-6 py-3 text-sm hover:opacity-90 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" /> Book via WhatsApp
            </a>
            <a href="tel:03318807617" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium hover:bg-white/10">
              <Phone className="h-4 w-4" /> 0331 880 7617
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
