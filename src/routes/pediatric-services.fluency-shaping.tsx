import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Calendar, CheckCircle2, Clock, MapPin, Star, Users, Phone, ChevronRight } from "lucide-react";
import svcImg from "@/assets/svc-fluency.jpg";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20a%20Fluency%20%26%20Stuttering%20Therapy%20consultation.";

export const Route = createFileRoute("/pediatric-services/fluency-shaping")({
  component: FluencyShaping,
  head: () => ({
    meta: [
      { title: "Stuttering & Fluency Therapy Rawalpindi | Askari DHA Adyala Road | CCSP" },
      { name: "description", content: "Evidence-based stuttering and fluency therapy for children & teens in Rawalpindi. Serving Askari, DHA, Adyala Road & Islamabad. Licensed SLPs. Book: 0331-880-7617." },
      { name: "keywords", content: "stuttering therapy Rawalpindi, stammering treatment Pakistan, fluency shaping Rawalpindi, cluttering therapy child Pakistan, stutter treatment Askari Rawalpindi, speech therapy for stammering Islamabad" },
    ],
    links: [{ rel: "canonical", href: "/pediatric-services/fluency-shaping" }],
  }),
});

const typesOfDisfluency = [
  { q: "Stuttering (Stammering)", a: "Stuttering involves involuntary repetitions, prolongations, or blocks in speech. It typically begins between ages 2–5 and affects approximately 5% of children, with 75% recovering naturally. Those who persist beyond age 5 benefit greatly from structured therapy." },
  { q: "Cluttering", a: "Cluttering is characterised by an excessively fast or irregular rate of speech, telescoping of syllables, and reduced clarity. It often co-occurs with stuttering and requires distinct therapeutic approaches." },
  { q: "Neurogenic Stuttering", a: "This type of stuttering develops after a neurological event (e.g., head injury, stroke). It requires different assessment protocols and is treated at our clinic as part of our adult rehabilitation services." },
];

const signs = [
  "Repetitions of sounds, syllables, or whole words ('b-b-ball', 'I-I-I want')",
  "Prolongations — stretching sounds ('ssssun' for 'sun')",
  "Blocks — mouth open but no sound coming out",
  "Physical tension: eye blinking, lip trembling, or fist clenching when speaking",
  "Avoidance of speaking situations (school presentations, phone calls, social events)",
  "Sudden onset of stuttering in a child who previously spoke fluently",
];

const therapyApproaches = [
  { title: "Fluency Shaping Therapy", desc: "Teaches new speech patterns using slow rate, easy onset, and continuous voicing to reduce stuttering events and build automaticity." },
  { title: "Stuttering Modification Therapy", desc: "Helps the child accept and modify moments of stuttering rather than avoiding them — reducing struggle and building confidence." },
  { title: "Lidcombe Programme", desc: "A parent-delivered, evidence-based programme for pre-school children that produces high rates of recovery when implemented consistently." },
  { title: "Integrated Approach (Teens)", desc: "Combines fluency shaping, cognitive restructuring, and desensitisation to address both the speech and the psychological impact of stuttering in older children and teenagers." },
];

const faqs = [
  { q: "Will my child's stutter go away on its own?", a: "Approximately 75% of children who stutter will recover naturally before adolescence. However, if stuttering persists beyond age 5 or causes distress, professional assessment is recommended. Early intervention significantly improves outcomes for those who will not recover naturally." },
  { q: "Should I finish my child's sentences to help them?", a: "No — research shows that completing sentences increases pressure and can worsen stuttering. Instead, maintain natural eye contact, give your child plenty of time, and don't comment on the stutter. Our therapists provide full parent coaching." },
  { q: "Do you offer therapy for teenagers who stutter?", a: "Yes. We have a specific teen fluency programme that addresses both the speech component and the psychological impact of stuttering, including social anxiety and avoidance behaviours common in adolescents." },
  { q: "How accessible is your clinic from DHA and Bahria Town?", a: "Our clinic on Defence Road, Adyala is well-connected to DHA Phase 1–5, Bahria Town, Askari 14, Gulshan Abad, and the Adyala Road corridor. Most patients from these areas reach us within 10–15 minutes." },
];

function FluencyShaping() {
  const { openBooking } = useBookingModal();
  return (
    <>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-speech transition-colors">Home</Link><ChevronRight className="h-3.5 w-3.5" />
        <Link to="/pediatric-services" className="hover:text-speech transition-colors">Pediatric Services</Link><ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">Fluency & Stuttering Therapy</span>
      </nav>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-speech/10 text-speech px-3 py-1 text-xs font-semibold uppercase tracking-wide">Pediatric Speech Therapy · Rawalpindi</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">Fluency Shaping<br />(Stuttering &amp; Cluttering)</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Evidence-based techniques to develop smoother, more confident speech in children and teenagers who stutter or clutter — serving Rawalpindi, Askari, DHA, Adyala Road, and Islamabad.</p>
          <div className="mt-6 flex flex-wrap gap-3">{[{ icon: Star, text: "4.9★ Rating" }, { icon: Users, text: "500+ Helped" }, { icon: Clock, text: "Mon–Sat 9am–5pm" }].map(({ icon: Icon, text }) => (<span key={text} className="inline-flex items-center gap-1.5 bg-secondary/80 rounded-full px-3 py-1.5 text-xs font-medium"><Icon className="h-3.5 w-3.5 text-speech" /> {text}</span>))}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-full bg-speech px-6 py-3 text-sm font-bold text-speech-foreground shadow-lg hover:opacity-90 transition hover:scale-105"><Calendar className="h-4 w-4" /> Book a Free Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}><MessageCircle className="h-4 w-4" /> WhatsApp Us Now</a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-speech shrink-0" /><span>ADYALA, Defence Road, Rawalpindi — near Khawaja Corporation Chowk</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-speech/20 to-psychology/10 blur-3xl opacity-70" />
          <img src={svcImg} alt="Fluency therapy session with a Pakistani teenager in Rawalpindi" className="relative rounded-3xl w-full object-cover shadow-2xl h-[380px]" />
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Types of Fluency Disorder</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">What Kind of Fluency Problem Does Your Child Have?</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {typesOfDisfluency.map(({ q, a }) => (<div key={q} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-display font-semibold text-base">{q}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p></div>))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Warning Signs</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">Signs to Watch For</h2>
          <ul className="mt-6 space-y-3">{signs.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-speech shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Therapy Approaches</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">How We Treat Fluency Disorders</h2>
          <div className="mt-6 space-y-4">
            {therapyApproaches.map(({ title, desc }) => (<div key={title} className="rounded-xl border border-border bg-card p-4"><h3 className="font-semibold text-sm text-speech">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="bg-speech/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">FAQs</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold mb-8">Common Questions About Stuttering Therapy</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map(({ q, a }) => (<div key={q} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold text-foreground">{q}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p></div>))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-10">
        <div className="rounded-3xl bg-gradient-to-br from-speech to-psychology text-white px-8 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Help Your Child Speak with Confidence</h2>
            <p className="mt-4 text-white/85 leading-relaxed">Serving Askari 1–14, DHA, Bahria Town, Gulshan Abad, Khawaja Corporation, and all of central Rawalpindi & Islamabad. Early intervention leads to better outcomes.</p>
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
