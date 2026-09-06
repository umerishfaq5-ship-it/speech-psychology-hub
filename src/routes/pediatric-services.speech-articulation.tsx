import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Calendar, CheckCircle2, ArrowLeft, Clock, MapPin, Star, Users, Phone, ChevronRight } from "lucide-react";
import svcImg from "@/assets/svc-articulation.jpg";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20a%20Speech%20Sound%20%26%20Articulation%20Therapy%20consultation.";

export const Route = createFileRoute("/pediatric-services/speech-articulation")({
  component: SpeechArticulation,
  head: () => ({
    meta: [
      { title: "Speech Sound & Articulation Therapy in Rawalpindi | Near Askari & Adyala Road | CCSP" },
      { name: "description", content: "Expert speech sound & articulation therapy for children in Rawalpindi. Serving Askari 1–14, DHA, Khawaja Corporation, Adyala Road & Islamabad. Licensed SLPs. Book: 0331-880-7617." },
      { name: "keywords", content: "articulation therapy Rawalpindi, speech sound disorder child Rawalpindi, phonological delay therapy, unclear speech child Askari Rawalpindi, speech therapy near Adyala Road, speech therapy Khawaja Corporation, best speech therapist Rawalpindi" },
      { property: "og:title", content: "Speech Sound & Articulation Therapy — Clinical Center for Speech & Psychology, Rawalpindi" },
      { property: "og:description", content: "Targeted articulation therapy for children with phonological delays in Rawalpindi. Serving Askari, DHA, Adyala Road, Khawaja Corporation areas. Book now." },
    ],
    links: [{ rel: "canonical", href: "/pediatric-services/speech-articulation" }],
  }),
});

const whatItIs = [
  { q: "What is Articulation Therapy?", a: "Articulation therapy is a systematic, evidence-based approach to correcting the way a child produces individual speech sounds. A licensed Speech-Language Pathologist (SLP) works one-on-one with your child using structured exercises, visual cues, and real-world practice to improve accuracy and clarity of speech." },
  { q: "What is Phonological Therapy?", a: "Phonological therapy targets patterns of sound errors — for example, a child who consistently drops the final consonant of words or substitutes one class of sounds for another. This is different from isolated articulation errors and requires a different therapeutic approach." },
];

const signs = [
  "Child omits sounds from words (e.g., says 'poo' instead of 'spoon', 'ca' instead of 'cat')",
  "Substitutes one sound for another consistently (e.g., 'w' for 'r', 't' for 'k')",
  "Speech is difficult to understand even for immediate family by age 3",
  "Child is embarrassed about speaking or avoids talking at school",
  "Reading and spelling difficulties linked to weak phonological awareness",
  "Teachers report that classmates cannot understand the child",
];

const whatWeDoItems = [
  "Comprehensive articulation & phonological assessment using standardized tools",
  "Place-and-manner articulation therapy targeting individual sound errors",
  "Minimal pair contrast therapy for phonological process disorders",
  "Cycles approach for children with highly unintelligible speech",
  "Phonological awareness training to support literacy",
  "Home practice programs with parent coaching",
  "School liaison reports and progress documentation",
  "Bilingual assessment and therapy (English & Urdu environments)",
];

const outcomes = [
  "Improved clarity and intelligibility of speech in 8–16 weeks",
  "Stronger phonological awareness supporting reading readiness",
  "Greater confidence when speaking at school and in social settings",
  "Reduction or elimination of target sound errors",
];

const faqs = [
  { q: "At what age should I be concerned about my child's speech sounds?", a: "By age 3, strangers should understand about 75% of what your child says. By age 4–5, speech should be nearly fully clear. If your child is significantly behind these milestones, an assessment is recommended." },
  { q: "How long does articulation therapy take?", a: "Most children with mild-to-moderate articulation errors show significant improvement within 3–6 months of weekly therapy. More complex phonological disorders may take longer. We provide regular progress reviews every 6–8 weeks." },
  { q: "Do you serve families from Askari, DHA, and Bahria Town?", a: "Yes. Our clinic on Defence Road, Adyala is easily accessible from Askari 1–14, DHA Phase 1–5, Bahria Town, Khawaja Corporation Chowk, and the wider Rawalpindi–Islamabad corridor." },
  { q: "Is the therapy conducted in English or Urdu?", a: "Both. We assess and treat in the child's primary language(s) and home environment. Many families in our area are bilingual — we are too." },
];

function SpeechArticulation() {
  const { openBooking } = useBookingModal();
  return (
    <>
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-speech transition-colors">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to="/pediatric-services" className="hover:text-speech transition-colors">Pediatric Services</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">Speech Sound & Articulation</span>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-speech/10 text-speech px-3 py-1 text-xs font-semibold uppercase tracking-wide">Pediatric Speech Therapy · Rawalpindi</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Speech Sound &amp; Articulation Therapy
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Targeted, evidence-based intervention for children with phonological delays, articulation errors, and unclear speech — delivered by licensed Speech-Language Pathologists in Rawalpindi, serving Askari, DHA, Adyala Road, Khawaja Corporation, and Islamabad families.
          </p>

          {/* Trust signals */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { icon: Star, text: "4.9★ Patient Rating" },
              { icon: Users, text: "500+ Children Helped" },
              { icon: Clock, text: "Mon–Sat, 9am–5pm" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-1.5 bg-secondary/80 rounded-full px-3 py-1.5 text-xs font-medium text-foreground">
                <Icon className="h-3.5 w-3.5 text-speech" /> {text}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-full bg-speech px-6 py-3 text-sm font-bold text-speech-foreground shadow-lg hover:opacity-90 transition hover:scale-105">
              <Calendar className="h-4 w-4" /> Book a Free Consultation
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
              <MessageCircle className="h-4 w-4" /> WhatsApp Us Now
            </a>
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-speech shrink-0" />
            <span>ADYALA, Defence Road, Rawalpindi — near Khawaja Corporation Chowk</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-speech/20 to-psychology/10 blur-3xl opacity-70" />
          <img src={svcImg} alt="Licensed speech therapist working on articulation with a child in Rawalpindi" className="relative rounded-3xl w-full object-cover shadow-2xl h-[380px]" />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg border border-border">
            <div className="h-10 w-10 rounded-full bg-speech/10 flex items-center justify-center shrink-0">
              <MessageCircle className="h-5 w-5 text-speech" />
            </div>
            <div>
              <div className="font-semibold text-sm">Get same-day response</div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-speech hover:underline">WhatsApp 0331 880 7617 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Understanding the Therapy</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold max-w-2xl">What Does Speech Sound & Articulation Therapy Involve?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {whatItIs.map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display font-semibold text-lg text-foreground">{q}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs + What We Do */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Warning Signs</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">When Should You Seek Help?</h2>
          <p className="mt-3 text-muted-foreground text-sm">Early intervention leads to significantly better outcomes. If you notice any of the following, contact us for an assessment:</p>
          <ul className="mt-6 space-y-3">
            {signs.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-speech shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Clinical Approach</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">What Our Therapists Do</h2>
          <p className="mt-3 text-muted-foreground text-sm">Every child receives a fully individualised plan based on standardised assessment results and family goals:</p>
          <ul className="mt-6 space-y-3">
            {whatWeDoItems.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-psychology shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="bg-speech/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-speech">What to Expect</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">Expected Outcomes</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o, i) => (
              <div key={i} className="rounded-2xl bg-card border border-border p-5 hover:border-speech/40 transition">
                <div className="h-8 w-8 rounded-full bg-speech/10 flex items-center justify-center mb-3">
                  <CheckCircle2 className="h-4 w-4 text-speech" />
                </div>
                <p className="text-sm font-medium text-foreground leading-snug">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-speech">Frequently Asked Questions</span>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold mb-8">Common Questions from Rawalpindi Parents</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">{q}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location + CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-speech to-psychology text-white px-8 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Ready to Help Your Child Speak Clearly?</h2>
            <p className="mt-4 text-white/85 leading-relaxed">Our clinic is located on Defence Road, Adyala — conveniently accessible from Askari 1–14, DHA, Bahria Town, Khawaja Corporation, Gulshan Abad, and central Rawalpindi & Islamabad.</p>
            <div className="mt-5 flex items-center gap-2 text-white/80 text-sm">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>ADYALA, Defence Road, Rawalpindi 46200</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-white/80 text-sm">
              <Phone className="h-4 w-4 shrink-0" />
              <span>0331 880 7617 &nbsp;|&nbsp; Mon–Sat 9am–5pm</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-speech hover:scale-105 transition shadow-lg w-full">
              <Calendar className="h-4 w-4" /> Book a Free Consultation
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition w-full">
              <MessageCircle className="h-4 w-4" /> WhatsApp 0331 880 7617
            </a>
            <a href="tel:03318807617" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/30 px-7 py-3 text-sm font-medium text-white hover:bg-white/20 transition w-full">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
