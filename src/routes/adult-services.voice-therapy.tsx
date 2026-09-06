import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Calendar, CheckCircle2, Clock, MapPin, Star, Users, Phone, ChevronRight } from "lucide-react";
import svcImg from "@/assets/svc-voice.jpg";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20a%20Voice%20Therapy%20consultation.";

export const Route = createFileRoute("/adult-services/voice-therapy")({
  component: VoiceTherapy,
  head: () => ({
    meta: [
      { title: "Voice Therapy & Resonance Disorders Rawalpindi | Teachers, Professionals | CCSP" },
      { name: "description", content: "Clinical voice therapy for hoarseness, vocal nodules, vocal fatigue & resonance disorders in Rawalpindi. Serving teachers, professionals, Askari, DHA, Adyala Road. Book: 0331-880-7617." },
      { name: "keywords", content: "voice therapy Rawalpindi, hoarseness treatment Pakistan, vocal nodules therapy Rawalpindi, voice therapy teachers Pakistan, professional voice care Islamabad, resonance disorder treatment Rawalpindi, voice therapy Askari" },
    ],
    links: [{ rel: "canonical", href: "/adult-services/voice-therapy" }],
  }),
});

const voiceConditions = [
  { title: "Vocal Nodules & Polyps", desc: "Benign growths on the vocal cords caused by vocal overuse or misuse — very common in teachers, lecturers, and professional speakers. Conservative voice therapy is the first-line treatment, often avoiding surgery." },
  { title: "Vocal Fatigue & Muscle Tension Dysphonia", desc: "Excessive muscle tension in and around the larynx creates effortful, fatiguing phonation. Common in people who speak for prolonged periods without proper vocal technique or rest." },
  { title: "Resonance Disorders", desc: "Hypernasality (too much nasal resonance) and hyponasality (too little) affect the quality of the voice and may be congenital or acquired. Voice and resonance therapy targets these patterns directly." },
  { title: "Gender-Affirming Voice Therapy", desc: "Helping individuals align their voice with their gender identity through pitch, resonance, intonation, and communication style work — conducted with sensitivity and clinical expertise." },
];

const whoWeHelp = [
  "School teachers and university lecturers — Rawalpindi & Islamabad's most frequent voice patients",
  "Imams, khatibs, and religious speakers who use their voice professionally",
  "Lawyers, managers, and corporate professionals with voice demands",
  "Singers and performers with voice-related performance problems",
  "Post-surgical patients (post-thyroidectomy, post-laryngectomy)",
  "Anyone experiencing hoarseness lasting more than 2–3 weeks",
];

const whatWeDoItems = [
  "Comprehensive voice assessment: pitch, loudness, quality, and endurance",
  "Vocal hygiene counselling — hydration, voice rest, and lifestyle adjustments",
  "Resonant Voice Therapy (RVT) for efficient, healthy voice production",
  "Vocal Function Exercises (VFEs) for strength and flexibility",
  "Resonance training for hypernasality and hyponasality",
  "Referral coordination with ENT surgeons where medical management is needed",
  "LSVT LOUD for Parkinson's-related voice changes",
  "Professional voice care programme: session-by-session technique building",
];

const faqs = [
  { q: "How long does voice therapy take?", a: "Most voice disorders respond well to 6–12 sessions of targeted therapy combined with consistent home practice. Vocal nodules managed conservatively typically show significant improvement within 8 weeks. More complex cases may require longer programmes." },
  { q: "I'm a teacher with a hoarse voice — what should I do?", a: "Persistent hoarseness in a voice professional is a red flag that should not be ignored. We recommend: (1) see an ENT to rule out structural pathology, and (2) begin voice therapy to correct the vocal behaviours causing the problem. We work with many teachers from Rawalpindi and Islamabad schools." },
  { q: "Do I need a referral from a doctor?", a: "No referral is required to see us directly. However, for hoarseness lasting more than 2–3 weeks, we strongly recommend an ENT examination to visualise the vocal cords before or alongside starting voice therapy." },
  { q: "Can vocal nodules be treated without surgery?", a: "In most cases, yes. Vocal nodules respond well to conservative voice therapy when the causative behaviours (e.g., excessive loudness, poor breath support, throat clearing) are corrected. Surgery is reserved for nodules that do not respond to behavioural therapy." },
];

function VoiceTherapy() {
  const { openBooking } = useBookingModal();
  return (
    <>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-psychology transition-colors">Home</Link><ChevronRight className="h-3.5 w-3.5" />
        <Link to="/adult-services" className="hover:text-psychology transition-colors">Adult Services</Link><ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">Voice & Resonance Therapy</span>
      </nav>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-psychology/10 text-psychology px-3 py-1 text-xs font-semibold uppercase tracking-wide">Adult Rehabilitation · Rawalpindi</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">Clinical Voice &amp; Resonance Therapy</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Protecting and rehabilitating the professional and everyday voice — for teachers, lecturers, professionals, and anyone suffering from hoarseness, vocal fatigue, or resonance disorders in Rawalpindi and Islamabad.</p>
          <div className="mt-6 flex flex-wrap gap-3">{[{ icon: Star, text: "4.9★ Rating" }, { icon: Users, text: "500+ Patients" }, { icon: Clock, text: "Mon–Sat 9am–5pm" }].map(({ icon: Icon, text }) => (<span key={text} className="inline-flex items-center gap-1.5 bg-secondary/80 rounded-full px-3 py-1.5 text-xs font-medium"><Icon className="h-3.5 w-3.5 text-psychology" /> {text}</span>))}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-full bg-psychology px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition hover:scale-105"><Calendar className="h-4 w-4" /> Book a Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}><MessageCircle className="h-4 w-4" /> WhatsApp Us Now</a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-psychology shrink-0" /><span>ADYALA, Defence Road, Rawalpindi — near Khawaja Corporation Chowk</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-psychology/20 to-speech/10 blur-3xl opacity-70" />
          <img src={svcImg} alt="Voice therapy session at CCSP Rawalpindi clinic" className="relative rounded-3xl w-full object-cover shadow-2xl h-[380px]" />
        </div>
      </section>
      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Conditions We Treat</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">Voice & Resonance Disorders</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">{voiceConditions.map(({ title, desc }) => (<div key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-display font-semibold text-base text-psychology">{title}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p></div>))}</div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Who We Help</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">Who Benefits from Voice Therapy?</h2>
          <ul className="mt-6 space-y-3">{whoWeHelp.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-psychology shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Clinical Approach</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">How We Rehabilitate the Voice</h2>
          <ul className="mt-6 space-y-3">{whatWeDoItems.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-speech shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
      </section>
      <section className="bg-psychology/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">FAQs</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold mb-8">Common Questions About Voice Therapy</h2>
          <div className="grid gap-4 md:grid-cols-2">{faqs.map(({ q, a }) => (<div key={q} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold text-foreground">{q}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p></div>))}</div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-10">
        <div className="rounded-3xl bg-gradient-to-br from-psychology to-speech text-white px-8 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Protect Your Voice — Your Most Valuable Professional Tool</h2>
            <p className="mt-4 text-white/85 leading-relaxed">Serving teachers, lecturers, and professionals from Askari, DHA, Bahria Town, and across Rawalpindi & Islamabad.</p>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /><span>ADYALA, Defence Road, Rawalpindi 46200</span></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><span>0331 880 7617 | Mon–Sat 9am–5pm</span></div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-psychology hover:scale-105 transition shadow-lg w-full"><Calendar className="h-4 w-4" /> Book Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition w-full"><MessageCircle className="h-4 w-4" /> WhatsApp 0331 880 7617</a>
            <a href="tel:03318807617" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/30 px-7 py-3 text-sm font-medium text-white hover:bg-white/20 transition w-full"><Phone className="h-4 w-4" /> Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
