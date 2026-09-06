import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Calendar, CheckCircle2, Clock, MapPin, Star, Users, Phone, ChevronRight } from "lucide-react";
import svcImg from "@/assets/svc-neuro.jpg";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20a%20Neurodegenerative%20Management%20consultation.";

export const Route = createFileRoute("/adult-services/neurodegenerative")({
  component: Neurodegenerative,
  head: () => ({
    meta: [
      { title: "Parkinson's, Dementia & Neurodegenerative Communication Therapy Rawalpindi | CCSP" },
      { name: "description", content: "Long-term speech, voice & swallowing support for Parkinson's, Dementia & Alzheimer's in Rawalpindi. LSVT LOUD available. Askari, DHA, Adyala Road. Book: 0331-880-7617." },
      { name: "keywords", content: "Parkinson speech therapy Rawalpindi, dementia communication therapy Pakistan, Alzheimer speech therapy Rawalpindi, LSVT LOUD Rawalpindi, neurodegenerative speech therapy Islamabad, Parkinson voice therapy Askari" },
    ],
    links: [{ rel: "canonical", href: "/adult-services/neurodegenerative" }],
  }),
});

const conditions = [
  { title: "Parkinson's Disease", desc: "Parkinson's affects speech through hypokinetic dysarthria — a soft, monotone, breathy, or rapid voice that becomes increasingly difficult to understand. LSVT LOUD, the gold-standard intensive programme, is offered at our clinic and produces robust, lasting improvement in vocal loudness and intelligibility." },
  { title: "Dementia & Alzheimer's Disease", desc: "As dementia progresses, communication changes across all stages — from word-finding difficulties in early stages to severely reduced verbal output in late stages. SLPs support meaningful communication at every stage and train caregivers in effective communication strategies." },
  { title: "Progressive Neurological Conditions", desc: "ALS (MND), Multiple System Atrophy (MSA), Progressive Supranuclear Palsy (PSP), and Huntington's Disease all affect communication and swallowing. We provide proactive, individualised management including AAC planning and swallowing safety." },
];

const lsvtFacts = [
  "LSVT LOUD is delivered in 16 sessions over 4 weeks — intensive but highly effective",
  "Research shows improvements in vocal loudness lasting 2+ years post-treatment",
  "Improved loudness generalises to improved clarity and facial expression",
  "Can be started at any stage of Parkinson's disease",
  "Available at our Rawalpindi clinic — one of very few centres in the twin cities offering this protocol",
];

const whatWeDoItems = [
  "LSVT LOUD: intensive Parkinson's voice treatment (16 sessions/4 weeks)",
  "Parkinson's swallowing safety assessment and diet modification",
  "Cognitive-communication strategies for dementia — all stages",
  "Caregiver training in communication facilitation techniques",
  "AAC planning for individuals approaching minimal verbal output",
  "Dementia-friendly communication environment guidance",
  "Dysphagia management for progressive neurological conditions",
  "Regular reviews and programme adjustments as the condition evolves",
];

const faqs = [
  { q: "My family member has Parkinson's and their voice is very soft — can therapy help?", a: "Yes. LSVT LOUD is specifically designed for Parkinson's-related hypophonia (soft voice) and has the most robust evidence base of any Parkinson's speech treatment. Patients report that family members can hear them again, they need to repeat themselves less, and they feel more engaged in conversations." },
  { q: "Is it too late to start therapy if the condition is advanced?", a: "Even in advanced neurodegeneration, SLP intervention has a meaningful role — whether it's safe swallowing management, maintaining communication through AAC, or training caregivers to facilitate communication. We meet patients and families where they are." },
  { q: "My parent has dementia — what can a speech therapist do?", a: "Quite a lot. SLPs in dementia care: identify the current communication stage and adjust expectations, teach caregivers effective communication techniques (simplified language, visual cues, yes/no questioning), manage swallowing safety as the disease progresses, and help maintain the person's dignity and quality of life through communication." },
  { q: "What is ALS/MND and how does an SLP help?", a: "ALS (Amyotrophic Lateral Sclerosis) / Motor Neurone Disease is a progressive neurological condition affecting the muscles of speech and swallowing. Our SLPs work proactively — assessing speech and swallowing changes, planning AAC before verbal communication deteriorates, and managing safe eating as dysphagia progresses." },
];

function Neurodegenerative() {
  const { openBooking } = useBookingModal();
  return (
    <>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-psychology transition-colors">Home</Link><ChevronRight className="h-3.5 w-3.5" />
        <Link to="/adult-services" className="hover:text-psychology transition-colors">Adult Services</Link><ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">Neurodegenerative Management</span>
      </nav>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-psychology/10 text-psychology px-3 py-1 text-xs font-semibold uppercase tracking-wide">Adult Rehabilitation · Rawalpindi</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">Neurodegenerative Communication &amp; Swallowing Management</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Long-term, compassionate communication and swallowing support for Parkinson's disease, Dementia, Alzheimer's, ALS, and related progressive neurological conditions — with LSVT LOUD available in Rawalpindi.</p>
          <div className="mt-6 flex flex-wrap gap-3">{[{ icon: Star, text: "4.9★ Rating" }, { icon: Users, text: "500+ Patients" }, { icon: Clock, text: "Mon–Sat 9am–5pm" }].map(({ icon: Icon, text }) => (<span key={text} className="inline-flex items-center gap-1.5 bg-secondary/80 rounded-full px-3 py-1.5 text-xs font-medium"><Icon className="h-3.5 w-3.5 text-psychology" /> {text}</span>))}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-full bg-psychology px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition hover:scale-105"><Calendar className="h-4 w-4" /> Book a Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}><MessageCircle className="h-4 w-4" /> WhatsApp Us Now</a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-psychology shrink-0" /><span>ADYALA, Defence Road, Rawalpindi — near Khawaja Corporation Chowk</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-psychology/20 to-speech/10 blur-3xl opacity-70" />
          <img src={svcImg} alt="Neurodegenerative speech therapy with elderly patient in Rawalpindi" className="relative rounded-3xl w-full object-cover shadow-2xl h-[380px]" />
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Conditions We Treat</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">Neurodegenerative Conditions & Communication</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{conditions.map(({ title, desc }) => (<div key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-display font-semibold text-base text-psychology">{title}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p></div>))}</div>
        </div>
      </section>

      {/* LSVT LOUD highlight */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="rounded-3xl border border-psychology/30 bg-gradient-to-br from-psychology/5 to-transparent p-8 grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-psychology text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">Featured Programme</span>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold">LSVT LOUD for Parkinson's Disease</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">LSVT LOUD (Lee Silverman Voice Treatment) is the gold-standard, FDA-backed intensive voice treatment for Parkinson's disease. It is one of the most thoroughly researched treatments in all of Speech-Language Pathology — with evidence from over 20 published clinical trials.</p>
            <button onClick={useBookingModal().openBooking} className="mt-5 inline-flex items-center gap-2 rounded-full bg-psychology px-6 py-2.5 text-sm font-bold text-white hover:opacity-90 transition"><Calendar className="h-4 w-4" /> Book LSVT LOUD</button>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Key Facts About LSVT LOUD:</h3>
            <ul className="space-y-3">{lsvtFacts.map((f) => (<li key={f} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-psychology shrink-0 mt-0.5" /><span>{f}</span></li>))}</ul>
          </div>
        </div>
      </section>

      <section className="bg-psychology/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-speech">Clinical Approach</span>
            <h2 className="mt-3 font-display text-2xl font-semibold">What Our Clinicians Do</h2>
            <ul className="mt-6 space-y-3">{whatWeDoItems.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-speech shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-psychology">FAQs</span>
            <h2 className="mt-3 font-display text-2xl font-semibold">Common Questions</h2>
            <div className="mt-6 space-y-4">{faqs.map(({ q, a }) => (<div key={q} className="rounded-xl border border-border bg-card p-4"><h3 className="font-semibold text-sm">{q}</h3><p className="mt-2 text-xs text-muted-foreground leading-relaxed">{a}</p></div>))}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-10">
        <div className="rounded-3xl bg-gradient-to-br from-psychology to-speech text-white px-8 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Compassionate Care for Every Stage</h2>
            <p className="mt-4 text-white/85 leading-relaxed">Serving families from Askari, DHA, Bahria Town, Gulshan Abad, Khawaja Corporation, and central Rawalpindi & Islamabad.</p>
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
