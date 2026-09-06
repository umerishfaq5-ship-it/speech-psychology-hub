import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Clock, ShieldCheck, HeartHandshake, Award, MessageCircle, MapPin, Star, CheckCircle2, Calendar } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { ServiceCard } from "@/components/ServiceCard";
import { pediatricServices, adultServices } from "@/lib/services-data";
import { TrustBadges } from "@/components/TrustBadges";
import { Testimonials } from "@/components/Testimonials";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20an%20appointment%20at%20Clinical%20Center%20for%20Speech%20%26%20Psychology.";
const MAPS_URL = "https://www.google.com/maps?q=33.558426,73.061949";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Clinical Center for Speech & Psychology — Rawalpindi | Best Speech Therapy & Psychology Clinic" },
      { name: "description", content: "⭐ 4.9/5 Rated | Best speech therapy & psychology clinic in Rawalpindi. Autism, ADHD, Stuttering, Stroke, Aphasia, Parkinson's. ADYALA, Defence Road. Book via WhatsApp 0331-880-7617." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  const { openBooking } = useBookingModal();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-speech/[0.04] via-background to-psychology/[0.04]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24 grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-psychology animate-pulse" /> Human Communication &amp; Mental Health · Rawalpindi
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] tracking-tight">
              Empowering Communication,{" "}
              <span className="bg-gradient-to-r from-speech to-psychology bg-clip-text text-transparent">Nurturing Minds.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Compassionate, evidence-based speech-language pathology and psychological care
              for every stage of life — from a child's first words to adult neuro-rehabilitation.
              Serving <strong className="text-foreground">Rawalpindi &amp; Islamabad</strong>.
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                id="hero-book-btn"
                onClick={openBooking}
                className="inline-flex items-center gap-2 rounded-full bg-speech px-6 py-3.5 text-sm font-bold text-speech-foreground shadow-lg transition hover:opacity-90 hover:scale-105 active:scale-95"
              >
                <Calendar className="h-5 w-5" /> Book Appointment
              </button>
              <a
                id="hero-whatsapp-btn"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:opacity-90 hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </div>

            {/* Trust mini-badges */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                { icon: "⭐", text: "4.9/5 Rating (200+ reviews)" },
                { icon: "✅", text: "Licensed Clinicians" },
                { icon: "🏥", text: "3+ Years Experience" },
              ].map((b) => (
                <span key={b.text} className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary/80 rounded-full px-3 py-1">
                  <span>{b.icon}</span> {b.text}
                </span>
              ))}
            </div>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-xs">
              <Stat label="Years of care" value="3+" />
              <Stat label="Clinicians" value="12" />
              <Stat label="Lives touched" value="500+" />
            </dl>
          </div>

          {/* Right: Hero image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-speech/20 to-psychology/20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
              <img
                src={heroImage}
                alt="A compassionate speech therapist working with a young child at Clinical Center for Speech & Psychology in Rawalpindi"
                className="w-full h-[520px] object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating badge: Family-centered */}
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] p-4">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-psychology/10 text-psychology">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Family-centered care</div>
                <div className="text-muted-foreground text-xs">Individualized therapy plans</div>
              </div>
            </div>

            {/* Floating badge: Rating */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] p-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <div>
                <div className="text-xs font-bold">4.9/5</div>
                <div className="text-[10px] text-muted-foreground">200+ Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Info bar */}
        <div className="bg-gradient-to-r from-speech to-psychology text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 grid gap-3 sm:grid-cols-3 text-sm">
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> <span><b>Mon–Sat:</b> 9:00 am – 5:00 pm</span></div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:03318807617" className="hover:underline"><b>Call:</b> 0331 880 7617</a></div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">ADYALA, Defence Road, Rawalpindi</a></div>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <TrustBadges />

      {/* ── SERVICES INTRO ── */}
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
              <div className="inline-flex items-center gap-2 rounded-full bg-speech/10 text-speech px-3 py-1 text-xs font-medium">For Children &amp; Adolescents</div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold">Pediatric Services</h2>
              <p className="text-sm text-muted-foreground">Autism · ADHD · Stuttering · Feeding · AAC</p>
            </div>
            <Link to="/pediatric-services" className="text-sm font-medium text-speech hover:underline inline-flex items-center gap-1">
              Explore all <ArrowRight className="h-4 w-4" />
            </Link>
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
              <div className="inline-flex items-center gap-2 rounded-full bg-psychology/10 text-psychology px-3 py-1 text-xs font-medium">Neuro-Rehabilitation &amp; Voice</div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold">Adult Services</h2>
              <p className="text-sm text-muted-foreground">Stroke · Aphasia · Parkinson's · Voice · Swallowing</p>
            </div>
            <Link to="/adult-services" className="text-sm font-medium text-psychology hover:underline inline-flex items-center gap-1">
              Explore all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {adultServices.map((s) => (
              <ServiceCard key={s.title} {...s} variant="psychology" />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-gradient-to-br from-speech/5 via-background to-psychology/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-medium uppercase tracking-widest text-speech">Why Families Choose Us</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">Our Core Values</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Value icon={ShieldCheck} title="Evidence-Based" body="Every plan is grounded in current clinical research, standardized assessments, and measurable outcome milestones." accent="speech" />
            <Value icon={HeartHandshake} title="Warm &amp; Empathetic" body="We meet families where they are — with patience, dignity, and genuine hope. You are never just a case number." accent="psychology" />
            <Value icon={Award} title="Multidisciplinary" body="SLPs and psychologists collaborate seamlessly for whole-person, coordinated care across all conditions." accent="speech" />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── LOCATION STRIP ── */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 grid gap-8 md:grid-cols-2 items-center shadow-[var(--shadow-card)]">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-psychology">Find Us</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">Conveniently Located in Rawalpindi</h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              We are easily accessible from Adyala Road and Defence Road, Rawalpindi — serving families from across the twin cities.
            </p>
            <address className="mt-5 not-italic space-y-2 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-psychology mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">ADYALA, Defence Road</div>
                  <div className="text-muted-foreground">Rawalpindi 46200, Pakistan</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-5 w-5 text-speech shrink-0" />
                <span><strong>Mon–Sat:</strong> 9:00 am – 5:00 pm</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-5 w-5 text-speech shrink-0" />
                <a href="tel:03318807617" className="font-medium hover:text-speech">0331 880 7617</a>
              </div>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-psychology px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
          {/* Map embed */}
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Clinical Center for Speech & Psychology location map — ADYALA Defence Road Rawalpindi"
              src="https://www.google.com/maps?q=33.558426,73.061949&z=15&output=embed"
              className="w-full h-64 md:h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-speech to-psychology text-white px-8 py-16 md:px-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Ready to take the first step?</h2>
          <p className="mt-4 text-white/85 max-w-xl mx-auto text-lg">
            Speak with our team about assessments, therapy plans, or a second opinion.
            Book instantly via WhatsApp or our form — we respond quickly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              id="cta-book-btn"
              onClick={openBooking}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-speech shadow-lg hover:shadow-xl transition hover:scale-105"
            >
              <Calendar className="h-5 w-5" /> Book Appointment
            </button>
            <a
              id="cta-whatsapp-btn"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-white/80" /> Free Initial Consultation</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-white/80" /> Mon–Sat 9am–5pm</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-white/80" /> Quick WhatsApp Response</span>
          </div>
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
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
}
