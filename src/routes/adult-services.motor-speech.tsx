import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Calendar, CheckCircle2, Clock, MapPin, Star, Users, Phone, ChevronRight } from "lucide-react";
import svcImg from "@/assets/svc-motor.jpg";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20a%20Motor%20Speech%20Therapy%20consultation.";

export const Route = createFileRoute("/adult-services/motor-speech")({
  component: MotorSpeech,
  head: () => ({
    meta: [
      { title: "Motor Speech Therapy — Dysarthria & Apraxia Rawalpindi | CCSP" },
      { name: "description", content: "Dysarthria & apraxia of speech therapy in Rawalpindi. Improving intelligibility after stroke, TBI & neurological injury. Askari, DHA, Adyala Road. Book: 0331-880-7617." },
      { name: "keywords", content: "dysarthria therapy Rawalpindi, apraxia of speech treatment Pakistan, motor speech disorder Rawalpindi, speech after stroke Islamabad, dysarthria treatment Askari, motor speech therapy near Adyala Road" },
    ],
    links: [{ rel: "canonical", href: "/adult-services/motor-speech" }],
  }),
});

const conditions = [
  { title: "Dysarthria", desc: "Weakness, paralysis, or incoordination of the speech muscles caused by neurological damage. Results in slurred, slow, or imprecise speech. Severity ranges from mild to unintelligible. Occurs after stroke, TBI, Parkinson's, MS, and other neurological conditions." },
  { title: "Apraxia of Speech (AOS)", desc: "A motor planning and programming disorder — the person knows what they want to say but the brain cannot send the right signals to the speech muscles. Characterised by inconsistent errors and sound sequencing difficulties, worsening with increased word length." },
  { title: "Mixed Dysarthria", desc: "Multiple motor systems are affected simultaneously — common in conditions like ALS and Multiple Sclerosis — requiring a comprehensive approach targeting rate, resonance, respiration, phonation, and articulation simultaneously." },
];

const whatWeDoItems = [
  "Comprehensive motor speech assessment (Frenchay Dysarthria Assessment, DIVA model for AOS)",
  "Intensive rate, rhythm, and clarity drills using motor learning principles",
  "Lee Silverman Voice Treatment (LSVT LOUD) for Parkinson's disease",
  "Biofeedback-assisted therapy for dysarthria intelligibility",
  "Apraxia of Speech treatment: Sound Production Treatment (SPT), Motor-Kinematic treatment",
  "Prosody and stress pattern training",
  "Respiratory support for speech (breath patterning, speaking valves)",
  "AAC assessment and implementation for severe motor speech disorders",
];

const faqs = [
  { q: "What is the difference between dysarthria and aphasia?", a: "Aphasia affects language — the ability to understand and use words and grammar. Dysarthria affects speech — the physical production of sounds. A person with dysarthria may have perfectly intact language but slurred or unclear articulation. Many stroke survivors have both." },
  { q: "Can dysarthria improve after stroke?", a: "Yes, significantly. With intensive, targeted motor speech therapy, many patients recover meaningful levels of intelligibility, especially when therapy begins early. Even patients with chronic dysarthria (years post-onset) show improvement with structured intervention." },
  { q: "What is LSVT LOUD and do you offer it?", a: "LSVT LOUD (Lee Silverman Voice Treatment) is an intensive, evidence-based protocol specifically designed for Parkinson's disease. It targets vocal loudness and has been shown to generalise to improved speech clarity and quality. We offer LSVT LOUD at our Rawalpindi clinic." },
  { q: "My family member's speech has become very slurred — what should we do?", a: "Sudden onset of slurred or unclear speech can be a medical emergency (stroke). If the onset is sudden, call emergency services immediately. If the slurring has developed gradually (e.g., in Parkinson's or MS), contact us for a scheduled assessment." },
];

function MotorSpeech() {
  const { openBooking } = useBookingModal();
  return (
    <>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-psychology transition-colors">Home</Link><ChevronRight className="h-3.5 w-3.5" />
        <Link to="/adult-services" className="hover:text-psychology transition-colors">Adult Services</Link><ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">Motor Speech (Dysarthria & Apraxia)</span>
      </nav>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-psychology/10 text-psychology px-3 py-1 text-xs font-semibold uppercase tracking-wide">Adult Rehabilitation · Rawalpindi</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">Motor Speech Therapy<br />(Dysarthria &amp; Apraxia)</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Improving speech intelligibility, articulation precision, and motor planning after neurological injury — evidence-based motor speech rehabilitation for patients across Rawalpindi, Askari, DHA, and Islamabad.</p>
          <div className="mt-6 flex flex-wrap gap-3">{[{ icon: Star, text: "4.9★ Rating" }, { icon: Users, text: "500+ Patients Helped" }, { icon: Clock, text: "Mon–Sat 9am–5pm" }].map(({ icon: Icon, text }) => (<span key={text} className="inline-flex items-center gap-1.5 bg-secondary/80 rounded-full px-3 py-1.5 text-xs font-medium"><Icon className="h-3.5 w-3.5 text-psychology" /> {text}</span>))}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-full bg-psychology px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition hover:scale-105"><Calendar className="h-4 w-4" /> Book a Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}><MessageCircle className="h-4 w-4" /> WhatsApp Us Now</a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-psychology shrink-0" /><span>ADYALA, Defence Road, Rawalpindi — near Khawaja Corporation Chowk</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-psychology/20 to-speech/10 blur-3xl opacity-70" />
          <img src={svcImg} alt="Motor speech therapy session with patient in Rawalpindi clinic" className="relative rounded-3xl w-full object-cover shadow-2xl h-[380px]" />
        </div>
      </section>
      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Conditions We Treat</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">Types of Motor Speech Disorders</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{conditions.map(({ title, desc }) => (<div key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-display font-semibold text-base text-psychology">{title}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p></div>))}</div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Clinical Approach</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">How We Rehabilitate Motor Speech</h2>
          <ul className="mt-6 space-y-3">{whatWeDoItems.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-speech shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">FAQs</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">Common Questions</h2>
          <div className="mt-6 space-y-4">{faqs.map(({ q, a }) => (<div key={q} className="rounded-xl border border-border bg-card p-4"><h3 className="font-semibold text-sm">{q}</h3><p className="mt-2 text-xs text-muted-foreground leading-relaxed">{a}</p></div>))}</div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-4">
        <div className="rounded-3xl bg-gradient-to-br from-psychology to-speech text-white px-8 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Regain the Power to Speak Clearly</h2>
            <p className="mt-4 text-white/85 leading-relaxed">Serving Askari, DHA, Bahria Town, Khawaja Corporation, and Rawalpindi & Islamabad.</p>
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
