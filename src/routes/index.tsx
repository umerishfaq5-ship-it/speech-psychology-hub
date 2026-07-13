import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Clock, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { ServiceCard } from "@/components/ServiceCard";
import { pediatricServices, adultServices } from "@/lib/services-data";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Clinical Center for Speech & Psychology — Empowering Communication" },
      { name: "description", content: "Pediatric and adult speech-language pathology, voice, swallowing, and psychology services. Book an appointment today." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-psychology" /> Human Communication &amp; Mental Health
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Empowering Communication,{" "}
              <span className="bg-gradient-to-r from-speech to-psychology bg-clip-text text-transparent">Nurturing Minds.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Compassionate, evidence-based speech-language pathology and psychological care
              for every stage of life — from a child’s first words to adult neuro-rehabilitation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-speech px-5 py-3 text-sm font-medium text-speech-foreground shadow-[var(--shadow-elegant)] hover:opacity-90 transition">
                Book an Appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:03318807617" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:border-speech hover:text-speech transition">
                <Phone className="h-4 w-4" /> 0331 880 7617
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat label="Years of care" value="10+" />
              <Stat label="Clinicians" value="12" />
              <Stat label="Lives touched" value="5k+" />
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-speech/20 to-psychology/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
              <img src={heroImage} alt="Therapist working warmly with a child during a speech therapy session" className="w-full h-[520px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] p-4">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-psychology/10 text-psychology"><HeartHandshake className="h-5 w-5" /></div>
              <div className="text-sm">
                <div className="font-semibold">Family-centered care</div>
                <div className="text-muted-foreground text-xs">Individualized therapy plans</div>
              </div>
            </div>
          </div>
        </div>

        {/* Info bar */}
        <div className="bg-gradient-to-r from-speech to-psychology text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 grid gap-3 sm:grid-cols-3 text-sm">
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> <span><b>Timings:</b> 9:00 am – 6:00 pm</span></div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:03318807617" className="hover:underline"><b>Contact:</b> 0331 880 7617</a></div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Licensed, evidence-based clinical practice</div>
          </div>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-psychology">Our Services</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">Comprehensive care across the lifespan</h2>
          <p className="mt-4 text-muted-foreground">
            From early childhood milestones to adult neuro-rehabilitation, our clinicians provide
            targeted, research-backed interventions in a supportive environment.
          </p>
        </div>

        {/* Pediatric */}
        <div className="mt-12">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-speech/10 text-speech px-3 py-1 text-xs font-medium">Section A</div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold">Pediatric Services</h2>
              <p className="text-sm text-muted-foreground">Children &amp; Adolescents</p>
            </div>
            <Link to="/pediatric-services" className="text-sm font-medium text-speech hover:underline inline-flex items-center gap-1">Explore all <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pediatricServices.map((s) => (
              <ServiceCard key={s.title} {...s} variant="speech" />
            ))}
          </div>
        </div>

        {/* Adult */}
        <div className="mt-16">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-psychology/10 text-psychology px-3 py-1 text-xs font-medium">Section B</div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold">Adult Services</h2>
              <p className="text-sm text-muted-foreground">Neuro-Rehabilitation &amp; Voice</p>
            </div>
            <Link to="/adult-services" className="text-sm font-medium text-psychology hover:underline inline-flex items-center gap-1">Explore all <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {adultServices.map((s) => (
              <ServiceCard key={s.title} {...s} variant="psychology" />
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-8 md:grid-cols-3">
          <Value icon={ShieldCheck} title="Evidence-Based" body="Every plan is grounded in current clinical research and outcome measures." accent="speech" />
          <Value icon={HeartHandshake} title="Warm & Empathetic" body="We meet families where they are — with patience, dignity, and hope." accent="psychology" />
          <Value icon={Award} title="Multidisciplinary" body="SLPs and psychologists collaborate for whole-person care." accent="speech" />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">Ready to take the first step?</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Speak with our team about assessments, therapy plans, or a second opinion.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-speech px-5 py-3 text-sm font-medium text-speech-foreground hover:opacity-90">Book an Appointment <ArrowRight className="h-4 w-4" /></Link>
          <a href="tel:03318807617" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:border-speech hover:text-speech"><Phone className="h-4 w-4" /> Call 0331 880 7617</a>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-display text-2xl font-semibold text-foreground">{value}</dd>
    </div>
  );
}

function Value({ icon: Icon, title, body, accent }: { icon: any; title: string; body: string; accent: "speech" | "psychology" }) {
  const cls = accent === "speech" ? "bg-speech/10 text-speech" : "bg-psychology/10 text-psychology";
  return (
    <div className="flex gap-4">
      <div className={`grid place-items-center h-12 w-12 shrink-0 rounded-xl ${cls}`}><Icon className="h-6 w-6" /></div>
      <div>
        <h3 className="font-display font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{body}</p>
      </div>
    </div>
  );
}
