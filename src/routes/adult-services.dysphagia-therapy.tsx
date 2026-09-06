import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Calendar, CheckCircle2, Clock, MapPin, Star, Users, Phone, ChevronRight, AlertTriangle } from "lucide-react";
import svcImg from "@/assets/svc-dysphagia.jpg";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20a%20Dysphagia%20%26%20Swallowing%20Therapy%20consultation.";

export const Route = createFileRoute("/adult-services/dysphagia-therapy")({
  component: DysphagiaTherapy,
  head: () => ({
    meta: [
      { title: "Dysphagia & Swallowing Therapy Rawalpindi | Post-Stroke Swallowing Rehab | CCSP" },
      { name: "description", content: "Swallowing assessment & rehabilitation for stroke, Parkinson's & neurological conditions in Rawalpindi. Serving Askari, DHA, Adyala Road & Islamabad. Book: 0331-880-7617." },
      { name: "keywords", content: "dysphagia therapy Rawalpindi, swallowing therapy Pakistan, swallowing assessment Rawalpindi, swallowing difficulty after stroke Islamabad, dysphagia treatment Askari, swallowing rehabilitation near Adyala Road" },
    ],
    links: [{ rel: "canonical", href: "/adult-services/dysphagia-therapy" }],
  }),
});

const phases = [
  { title: "Oral Phase", desc: "Chewing food and preparing it for swallowing. Difficulties here include poor chewing, food falling out of the mouth, or inability to form a proper bolus." },
  { title: "Pharyngeal Phase", desc: "Triggering the swallow reflex and moving food through the throat safely. This is the most clinically significant phase — aspiration (food/liquid entering the airway) can cause pneumonia." },
  { title: "Oesophageal Phase", desc: "Moving food from the throat to the stomach. Oesophageal dysphagia is typically managed medically (gastroenterology) but SLPs play a key role in identification and referral." },
];

const signs = [
  "Coughing or choking during or immediately after eating and drinking",
  "Sensation of food 'getting stuck' in the throat or chest",
  "Wet or gurgling voice quality after eating",
  "Recurrent chest infections or aspiration pneumonia",
  "Drooling or difficulty keeping food and liquid in the mouth",
  "Weight loss or dehydration due to reduced oral intake",
  "Avoidance of eating in social settings",
];

const whatWeDoItems = [
  "Clinical Swallowing Examination (CSE) — bedside assessment of all swallowing phases",
  "Referral for instrumental assessment (VFSS/MBSS, FEES) where indicated",
  "Diet texture and liquid consistency modification using IDDSI international framework",
  "Swallowing exercises: Shaker Exercise, Mendelsohn Manoeuvre, Effortful Swallow",
  "Thermal-tactile stimulation and sensory approaches for delayed swallow reflex",
  "Enteral feeding (NG/PEG tube) transitional oral feeding programmes",
  "Caregiver training for safe feeding techniques at home",
  "Liaison with physicians, dietitians, and physiotherapists",
];

const faqs = [
  { q: "Is difficulty swallowing dangerous?", a: "Yes. Dysphagia can lead to aspiration — food or liquid entering the airway instead of the oesophagus — which causes aspiration pneumonia, a potentially life-threatening condition. Silent aspiration (no coughing) is particularly dangerous. Assessment by an SLP is essential." },
  { q: "What is a Clinical Swallowing Examination?", a: "A CSE is a structured bedside assessment performed by a licensed SLP. We observe the patient eating and drinking various food and liquid textures, evaluate oral-motor function, voice quality, and use clinical reasoning to determine aspiration risk and management." },
  { q: "Can swallowing therapy help after a stroke?", a: "Significantly yes. Post-stroke dysphagia often improves with targeted swallowing rehabilitation. Studies show that early, intensive swallowing therapy reduces aspiration risk, improves nutritional intake, and shortens hospital stays." },
  { q: "Do you provide diet texture modification advice?", a: "Yes. We use the International Dysphagia Diet Standardisation Initiative (IDDSI) framework to recommend appropriate food textures and liquid consistencies for safe oral feeding, with written guidance for caregivers and cooks." },
];

function DysphagiaTherapy() {
  const { openBooking } = useBookingModal();
  return (
    <>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-psychology transition-colors">Home</Link><ChevronRight className="h-3.5 w-3.5" />
        <Link to="/adult-services" className="hover:text-psychology transition-colors">Adult Services</Link><ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">Dysphagia (Swallowing Therapy)</span>
      </nav>

      {/* Emergency notice */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-5">
        <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 flex items-start gap-3 dark:bg-amber-900/20 dark:border-amber-800">
          <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 dark:text-amber-300"><strong>Important:</strong> If you or a family member has a sudden change in swallowing ability, especially after a stroke, seek emergency medical care immediately before arranging therapy.</p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-psychology/10 text-psychology px-3 py-1 text-xs font-semibold uppercase tracking-wide">Adult Rehabilitation · Rawalpindi</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">Dysphagia (Swallowing Rehabilitation)</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Comprehensive assessment and therapy for safe, efficient swallowing in adults with stroke, Parkinson's, head & neck cancer, and other neurological and structural conditions — serving Rawalpindi, Askari, DHA, and Islamabad.</p>
          <div className="mt-6 flex flex-wrap gap-3">{[{ icon: Star, text: "4.9★ Rating" }, { icon: Users, text: "500+ Patients Helped" }, { icon: Clock, text: "Mon–Sat 9am–5pm" }].map(({ icon: Icon, text }) => (<span key={text} className="inline-flex items-center gap-1.5 bg-secondary/80 rounded-full px-3 py-1.5 text-xs font-medium"><Icon className="h-3.5 w-3.5 text-psychology" /> {text}</span>))}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-full bg-psychology px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition hover:scale-105"><Calendar className="h-4 w-4" /> Book a Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}><MessageCircle className="h-4 w-4" /> WhatsApp Us Now</a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-psychology shrink-0" /><span>ADYALA, Defence Road, Rawalpindi — near Khawaja Corporation Chowk</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-psychology/20 to-speech/10 blur-3xl opacity-70" />
          <img src={svcImg} alt="Swallowing therapy session with elderly patient in Rawalpindi" className="relative rounded-3xl w-full object-cover shadow-2xl h-[380px]" />
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Anatomy of Swallowing</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">The Three Phases of Swallowing</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{phases.map(({ title, desc }) => (<div key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-display font-semibold text-base text-psychology">{title}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p></div>))}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Warning Signs</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">Signs of Swallowing Difficulty</h2>
          <ul className="mt-6 space-y-3">{signs.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-psychology shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Clinical Approach</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">How We Assess & Treat Dysphagia</h2>
          <ul className="mt-6 space-y-3">{whatWeDoItems.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-speech shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
      </section>

      <section className="bg-psychology/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">FAQs</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold mb-8">Common Questions About Dysphagia</h2>
          <div className="grid gap-4 md:grid-cols-2">{faqs.map(({ q, a }) => (<div key={q} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold text-foreground">{q}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p></div>))}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-10">
        <div className="rounded-3xl bg-gradient-to-br from-psychology to-speech text-white px-8 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Safe Swallowing Is a Right — Let Us Help</h2>
            <p className="mt-4 text-white/85 leading-relaxed">Serving Askari, DHA, Bahria Town, Khawaja Corporation, and central Rawalpindi & Islamabad.</p>
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
