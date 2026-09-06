import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Calendar, CheckCircle2, Clock, MapPin, Star, Users, Phone, ChevronRight } from "lucide-react";
import svcImg from "@/assets/svc-aac.jpg";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20an%20AAC%20Therapy%20consultation.";

export const Route = createFileRoute("/pediatric-services/aac-therapy")({
  component: AACTherapy,
  head: () => ({
    meta: [
      { title: "AAC Therapy Rawalpindi — Augmentative & Alternative Communication | CCSP" },
      { name: "description", content: "AAC assessment & therapy for non-speaking children in Rawalpindi. PECS, speech generating devices, high-tech AAC. Askari, DHA, Adyala Road. Book: 0331-880-7617." },
      { name: "keywords", content: "AAC therapy Rawalpindi, augmentative communication Pakistan, non-speaking autism Rawalpindi, PECS therapy Pakistan, speech generating device child Rawalpindi, AAC assessment Islamabad, alternative communication Askari" },
    ],
    links: [{ rel: "canonical", href: "/pediatric-services/aac-therapy" }],
  }),
});

const aacTypes = [
  { title: "Unaided AAC", desc: "Gestures, sign language, and body language — no external equipment needed. Excellent for early communicators and as a complement to other AAC systems." },
  { title: "Low-Tech AAC", desc: "Picture boards, communication books, PECS (Picture Exchange Communication System) — highly portable, durable, and effective as standalone systems or bridges to high-tech devices." },
  { title: "High-Tech AAC (SGDs)", desc: "Speech Generating Devices (tablets with AAC apps like Proloquo2Go, TouchChat, or Grid 3) that produce spoken output. Our SLPs conduct feature matching to find the right device for your child." },
];

const signs = [
  "Child is non-verbal or minimally verbal (fewer than 20 functional words)",
  "Current verbal speech is not functional for meeting needs",
  "Child has Autism, Cerebral Palsy, Down Syndrome, or other conditions affecting speech",
  "Child shows understanding (receptive language) but cannot express verbally",
  "Child is frustrated and having frequent communication breakdowns",
  "Existing AAC system is not being used effectively",
];

const whatWeDoItems = [
  "Comprehensive AAC assessment: receptive language, motor skills, cognitive profile, and feature matching",
  "PECS Phase I–VI implementation and parent/teacher training",
  "High-tech AAC device trials and vocabulary programming (core + fringe words in Urdu & English)",
  "AAC system implementation across home, school, and community settings",
  "Total communication approach — combining all available modalities",
  "Regular progress monitoring and system adjustments",
  "Training for family members, teachers, and support staff",
];

const faqs = [
  { q: "Will AAC stop my child from trying to talk?", a: "This is a common myth — research consistently shows that AAC does not reduce or stop verbal speech. In fact, AAC often increases vocal output by reducing communication frustration. Every child's communication should be supported, regardless of whether they use speech or AAC." },
  { q: "When is the right time to start AAC?", a: "There is no minimum age. We can begin AAC with toddlers as young as 12–18 months. Early access to AAC is associated with better language development outcomes. Do not wait until speech 'fails' — give your child a voice now." },
  { q: "Which AAC device or app do you recommend?", a: "There is no universal 'best' device — it depends on your child's motor abilities, cognitive profile, literacy level, and daily environments. Our SLPs conduct a formal feature-matching assessment before recommending any system." },
  { q: "Do you train family members to use AAC?", a: "Yes — this is essential. AAC only works if communication partners (parents, teachers, siblings) model it consistently throughout the day. We include AAC modelling training for all key communication partners as part of our programme." },
];

function AACTherapy() {
  const { openBooking } = useBookingModal();
  return (
    <>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-speech transition-colors">Home</Link><ChevronRight className="h-3.5 w-3.5" />
        <Link to="/pediatric-services" className="hover:text-speech transition-colors">Pediatric Services</Link><ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">AAC Therapy</span>
      </nav>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-speech/10 text-speech px-3 py-1 text-xs font-semibold uppercase tracking-wide">Pediatric AAC · Rawalpindi</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">Augmentative &amp; Alternative Communication (AAC) Therapy</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Empowering non-speaking and minimally verbal children to communicate meaningfully — using PECS, speech generating devices, and total communication strategies in Rawalpindi, serving Askari, DHA, and Islamabad families.</p>
          <div className="mt-6 flex flex-wrap gap-3">{[{ icon: Star, text: "4.9★ Rating" }, { icon: Users, text: "500+ Helped" }, { icon: Clock, text: "Mon–Sat 9am–5pm" }].map(({ icon: Icon, text }) => (<span key={text} className="inline-flex items-center gap-1.5 bg-secondary/80 rounded-full px-3 py-1.5 text-xs font-medium"><Icon className="h-3.5 w-3.5 text-speech" /> {text}</span>))}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-full bg-speech px-6 py-3 text-sm font-bold text-speech-foreground shadow-lg hover:opacity-90 transition hover:scale-105"><Calendar className="h-4 w-4" /> Book a Free Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}><MessageCircle className="h-4 w-4" /> WhatsApp Us Now</a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-speech shrink-0" /><span>ADYALA, Defence Road, Rawalpindi — near Khawaja Corporation Chowk</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-speech/20 to-psychology/10 blur-3xl opacity-70" />
          <img src={svcImg} alt="Child using AAC tablet device with therapist in Rawalpindi" className="relative rounded-3xl w-full object-cover shadow-2xl h-[380px]" />
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Types of AAC</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">What AAC Options Are Available?</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{aacTypes.map(({ title, desc }) => (<div key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-display font-semibold text-base text-speech">{title}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p></div>))}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Who Needs AAC?</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">Signs Your Child May Benefit from AAC</h2>
          <ul className="mt-6 space-y-3">{signs.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-speech shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Clinical Approach</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">What Our AAC Specialists Do</h2>
          <ul className="mt-6 space-y-3">{whatWeDoItems.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-psychology shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
      </section>

      <section className="bg-speech/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">FAQs</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold mb-8">Common Questions About AAC</h2>
          <div className="grid gap-4 md:grid-cols-2">{faqs.map(({ q, a }) => (<div key={q} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold text-foreground">{q}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p></div>))}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-10">
        <div className="rounded-3xl bg-gradient-to-br from-speech to-psychology text-white px-8 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Every Child Has a Voice — Let Us Find It</h2>
            <p className="mt-4 text-white/85 leading-relaxed">Serving families from Askari, DHA, Bahria Town, Khawaja Corporation, and all of Rawalpindi & Islamabad.</p>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /><span>ADYALA, Defence Road, Rawalpindi 46200</span></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><span>0331 880 7617 | Mon–Sat 9am–5pm</span></div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-speech hover:scale-105 transition shadow-lg w-full"><Calendar className="h-4 w-4" /> Book Free Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition w-full"><MessageCircle className="h-4 w-4" /> WhatsApp 0331 880 7617</a>
            <a href="tel:03318807617" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/30 px-7 py-3 text-sm font-medium text-white hover:bg-white/20 transition w-full"><Phone className="h-4 w-4" /> Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
