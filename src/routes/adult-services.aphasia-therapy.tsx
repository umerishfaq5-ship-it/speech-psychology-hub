import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Calendar, CheckCircle2, Clock, MapPin, Star, Users, Phone, ChevronRight } from "lucide-react";
import svcImg from "@/assets/svc-aphasia.jpg";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20an%20Aphasia%20%26%20Cognitive-Communication%20Therapy%20consultation.";

export const Route = createFileRoute("/adult-services/aphasia-therapy")({
  component: AphasiaTherapy,
  head: () => ({
    meta: [
      { title: "Aphasia & Cognitive-Communication Therapy Rawalpindi | Post-Stroke Rehab | CCSP" },
      { name: "description", content: "Aphasia rehabilitation after stroke & brain injury in Rawalpindi. Restoring language, memory & communication. Serving Askari, DHA, Adyala Road & Islamabad. Book: 0331-880-7617." },
      { name: "keywords", content: "aphasia therapy Rawalpindi, stroke speech therapy Pakistan, brain injury rehabilitation Rawalpindi, cognitive communication therapy Islamabad, post-stroke language therapy Askari, aphasia treatment near Adyala Road" },
    ],
    links: [{ rel: "canonical", href: "/adult-services/aphasia-therapy" }],
  }),
});

const typesOfAphasia = [
  { title: "Broca's Aphasia", desc: "Non-fluent aphasia with effortful, telegraphic speech but relatively intact comprehension. The person understands language but struggles to produce it. Most common after left frontal lobe stroke." },
  { title: "Wernicke's Aphasia", desc: "Fluent but paraphasic speech — the person speaks easily but uses wrong words or neologisms. Comprehension is significantly impaired. Occurs after left temporal lobe damage." },
  { title: "Global Aphasia", desc: "Severe impairment of both expression and comprehension. Typically follows large left hemisphere strokes. Intensive rehabilitation and AAC strategies can significantly improve functional communication." },
  { title: "Cognitive-Communication Disorder", desc: "Follows Traumatic Brain Injury (TBI) — affects attention, memory, organisation, and social communication without necessarily affecting core language skills." },
];

const signs = [
  "Difficulty finding words (anomia) — knowing the concept but not the word",
  "Speaking in short, effortful phrases rather than full sentences",
  "Using wrong words or made-up words in conversation",
  "Difficulty understanding spoken or written language",
  "Inability to read or write as before the stroke or injury",
  "Difficulty with numbers, calculations, or reading a clock",
  "Personality or behaviour changes affecting communication (after TBI)",
];

const whatWeDoItems = [
  "Comprehensive aphasia assessment (Western Aphasia Battery — Revised, BDAE-3)",
  "Constraint-Induced Language Therapy (CILT) for maximising verbal output",
  "Semantic feature analysis for word retrieval",
  "Script training for highly used communicative contexts",
  "Reading and writing rehabilitation",
  "Supported conversation training for family members",
  "AAC strategies for severe aphasia (communication books, apps)",
  "Group aphasia therapy for social communication and confidence",
];

const faqs = [
  { q: "How soon after a stroke should therapy begin?", a: "The sooner, the better. Evidence strongly supports beginning speech-language therapy within the first days or weeks after stroke. The brain's neuroplasticity is highest in the acute and subacute phase (0–6 months), making early, intensive intervention critical for language recovery." },
  { q: "Can aphasia be cured?", a: "Aphasia cannot always be 'cured', but significant functional improvement is achievable for most people with structured rehabilitation. Many individuals with aphasia continue to improve for months and even years after onset, especially with ongoing therapy and self-practice." },
  { q: "My family member had a stroke 2 years ago — is it too late for therapy?", a: "No. While early therapy yields the fastest gains, neuroplasticity continues throughout life. Chronic aphasia (more than 6 months post-onset) also responds to intensive, targeted therapy. We assess each patient individually and set realistic, functional goals." },
  { q: "Do you visit patients at home or at hospitals?", a: "Our primary service is clinic-based at our Adyala Road centre. For initial consultations or patients with mobility difficulties, we may be able to arrange appropriate referrals. Please call us to discuss your specific situation." },
];

function AphasiaTherapy() {
  const { openBooking } = useBookingModal();
  return (
    <>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-psychology transition-colors">Home</Link><ChevronRight className="h-3.5 w-3.5" />
        <Link to="/adult-services" className="hover:text-psychology transition-colors">Adult Services</Link><ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">Aphasia & Cognitive-Communication</span>
      </nav>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-psychology/10 text-psychology px-3 py-1 text-xs font-semibold uppercase tracking-wide">Adult Rehabilitation · Rawalpindi</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">Aphasia &amp; Cognitive-Communication Therapy</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Evidence-based language rehabilitation following Stroke and Traumatic Brain Injury — restoring functional communication, reading, writing, and cognitive skills for patients across Rawalpindi, Askari, DHA, and Islamabad.</p>
          <div className="mt-6 flex flex-wrap gap-3">{[{ icon: Star, text: "4.9★ Rating" }, { icon: Users, text: "500+ Patients Helped" }, { icon: Clock, text: "Mon–Sat 9am–5pm" }].map(({ icon: Icon, text }) => (<span key={text} className="inline-flex items-center gap-1.5 bg-secondary/80 rounded-full px-3 py-1.5 text-xs font-medium"><Icon className="h-3.5 w-3.5 text-psychology" /> {text}</span>))}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-full bg-psychology px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition hover:scale-105"><Calendar className="h-4 w-4" /> Book a Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}><MessageCircle className="h-4 w-4" /> WhatsApp Us Now</a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-psychology shrink-0" /><span>ADYALA, Defence Road, Rawalpindi — near Khawaja Corporation Chowk</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-psychology/20 to-speech/10 blur-3xl opacity-70" />
          <img src={svcImg} alt="Aphasia therapy with stroke patient in Rawalpindi" className="relative rounded-3xl w-full object-cover shadow-2xl h-[380px]" />
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Types of Aphasia</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">Understanding Different Types of Aphasia</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">{typesOfAphasia.map(({ title, desc }) => (<div key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-display font-semibold text-base text-psychology">{title}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p></div>))}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Warning Signs</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">Signs of Aphasia or Cognitive-Communication Difficulty</h2>
          <ul className="mt-6 space-y-3">{signs.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-psychology shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Clinical Approach</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">How We Rehabilitate Communication</h2>
          <ul className="mt-6 space-y-3">{whatWeDoItems.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-speech shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
      </section>

      <section className="bg-psychology/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">FAQs</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold mb-8">Common Questions About Aphasia Recovery</h2>
          <div className="grid gap-4 md:grid-cols-2">{faqs.map(({ q, a }) => (<div key={q} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold text-foreground">{q}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p></div>))}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-10">
        <div className="rounded-3xl bg-gradient-to-br from-psychology to-speech text-white px-8 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Reclaim Your Voice After Stroke</h2>
            <p className="mt-4 text-white/85 leading-relaxed">Convenient access from Askari, DHA, Bahria Town, Gulshan Abad, Khawaja Corporation, and central Rawalpindi & Islamabad.</p>
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
