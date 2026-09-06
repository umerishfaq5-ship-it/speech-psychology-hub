import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, HeartHandshake, Award, Users, GraduationCap, Stethoscope, MessageCircle, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20learn%20more%20about%20Clinical%20Center%20for%20Speech%20%26%20Psychology.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us — Clinical Center for Speech & Psychology | Rawalpindi" },
      { name: "description", content: "Learn about our expert team of licensed speech-language pathologists & psychologists in Rawalpindi. Located on Defence Road, Adyala. 3+ years of clinical excellence." },
      { name: "keywords", content: "speech language pathologist Rawalpindi, psychologist Rawalpindi, clinical center speech psychology, best speech therapist Rawalpindi" },
      { property: "og:title", content: "About Us — Clinical Center for Speech & Psychology, Rawalpindi" },
      { property: "og:description", content: "A multidisciplinary team dedicated to speech, language, and mental health care across the lifespan in Rawalpindi." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const teamValues = [
  { icon: Stethoscope, title: "Clinical Rigor", body: "Standardized assessments, outcome tracking, and evidence-based protocols at every step.", accent: "speech" as const },
  { icon: HeartHandshake, title: "Genuine Warmth", body: "A therapy environment where children and adults feel safe, respected, and hopeful.", accent: "psychology" as const },
  { icon: GraduationCap, title: "Advanced Training", body: "Our clinicians hold advanced certifications across SLP specialties and psychological practice.", accent: "psychology" as const },
  { icon: Users, title: "Family-Centered", body: "Caregivers and families are equal partners in every assessment and therapy plan.", accent: "speech" as const },
];

const milestones = [
  { year: "2021", event: "Clinic founded on Defence Road, Rawalpindi" },
  { year: "2022", event: "Expanded pediatric wing for Autism & ADHD" },
  { year: "2023", event: "Launched adult neuro-rehabilitation program" },
  { year: "2024", event: "AAC & Feeding Therapy specialization added" },
  { year: "2024", event: "Reached 500+ patients served milestone" },
];

function About() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-speech">About Us</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
            Human communication<br />is our craft.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            The Clinical Center for Speech &amp; Psychology brings together licensed
            speech-language pathologists and psychologists to deliver integrated,
            lifespan care in Rawalpindi. We blend clinical rigor with genuine warmth —
            because outcomes matter, and so does how you feel along the way.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Located on <strong className="text-foreground">Defence Road, Adyala, Rawalpindi</strong>, we serve families
            from across the twin cities with a commitment to evidence-based, compassionate practice.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6 max-w-sm">
            <div><div className="font-display text-3xl font-semibold text-speech">3+</div><div className="text-xs text-muted-foreground mt-0.5">Years of practice</div></div>
            <div><div className="font-display text-3xl font-semibold text-psychology">12</div><div className="text-xs text-muted-foreground mt-0.5">Expert Clinicians</div></div>
            <div><div className="font-display text-3xl font-semibold text-speech">500+</div><div className="text-xs text-muted-foreground mt-0.5">Clients served</div></div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-speech px-5 py-2.5 text-sm font-semibold text-speech-foreground hover:opacity-90 transition">
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-2 gap-4">
          {teamValues.map((v) => (
            <Card key={v.title} icon={v.icon} title={v.title} body={v.body} accent={v.accent} />
          ))}
        </div>
      </section>

      {/* Mission / Vision / Promise */}
      <section className="bg-gradient-to-br from-speech/5 to-psychology/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-8 md:grid-cols-3">
          <Value icon={ShieldCheck} title="Our Mission" body="To restore, develop, and celebrate human communication with evidence-based, empathetic care — for every person, at every stage of life." />
          <Value icon={Award} title="Our Approach" body="Multidisciplinary teams, individualized plans, measurable milestones, and transparent communication with families — always." />
          <Value icon={HeartHandshake} title="Our Promise" body="You are met with dignity, patience, and hope — every visit, every stage. We celebrate every milestone, big or small." />
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-psychology">Our Journey</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">A Decade of Making a Difference</h2>
          <p className="mt-4 text-muted-foreground">From a small clinic on Defence Road to one of Rawalpindi's most trusted speech and psychology centers.</p>
        </div>
        <div className="mt-10 relative ml-4 border-l-2 border-speech/20 space-y-8">
          {milestones.map((m) => (
            <div key={m.year} className="relative pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-speech bg-background" />
              <div className="text-xs font-bold uppercase tracking-widest text-speech mb-1">{m.year}</div>
              <div className="text-sm text-foreground font-medium">{m.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Info */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-speech">Where to Find Us</span>
            <h2 className="mt-3 font-display text-2xl font-semibold">Clinical Center Location</h2>
            <address className="mt-5 not-italic space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-psychology mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">ADYALA, Defence Road, Rawalpindi</div>
                  <div className="text-muted-foreground">Rawalpindi 46200, Pakistan</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-speech shrink-0" />
                <span><strong>Mon–Sat:</strong> 9:00 am – 5:00 pm</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-speech shrink-0" />
                <a href="tel:03318807617" className="font-medium hover:text-speech">0331 880 7617</a>
              </div>
            </address>
          </div>
          <div className="flex flex-col gap-3">
            {[
              "Easily accessible from Adyala Road and Defence Road",
              "Ample parking available at the clinic",
              "Serving families from Rawalpindi & Islamabad",
              "Wheelchair accessible entrance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-psychology shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">Let's work together</h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">Request a consultation with our clinical team. We're here to help you every step of the way.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <MessageCircle className="h-4 w-4" /> Book via WhatsApp
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-speech px-6 py-3 text-sm font-semibold text-speech-foreground hover:opacity-90">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

function Card({ icon: Icon, title, body, accent }: { icon: any; title: string; body: string; accent: "speech" | "psychology" }) {
  const cls = accent === "speech" ? "bg-speech/10 text-speech" : "bg-psychology/10 text-psychology";
  return (
    <div className="rounded-2xl border border-border bg-card p-5 hover:shadow-[var(--shadow-card)] transition">
      <div className={`grid place-items-center h-11 w-11 rounded-xl ${cls}`}><Icon className="h-5 w-5" /></div>
      <div className="mt-3 font-display font-semibold">{title}</div>
      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{body}</p>
    </div>
  );
}

function Value({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div>
      <Icon className="h-8 w-8 text-speech" />
      <h3 className="mt-3 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
