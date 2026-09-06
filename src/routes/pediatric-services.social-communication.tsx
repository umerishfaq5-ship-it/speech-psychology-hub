import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Calendar, CheckCircle2, Clock, MapPin, Star, Users, Phone, ChevronRight } from "lucide-react";
import svcImg from "@/assets/svc-social.jpg";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20a%20Social%20Communication%20%26%20Play%20Therapy%20session.";

export const Route = createFileRoute("/pediatric-services/social-communication")({
  component: SocialCommunication,
  head: () => ({
    meta: [
      { title: "Social Communication & Play Therapy for Autism & ADHD Rawalpindi | CCSP" },
      { name: "description", content: "Social communication & play therapy for children with Autism & ADHD in Rawalpindi. Serving Askari, DHA, Adyala Road & Islamabad. Evidence-based. Book: 0331-880-7617." },
      { name: "keywords", content: "autism therapy Rawalpindi, social skills therapy child Rawalpindi, play therapy autism Pakistan, ADHD social communication Rawalpindi, autism speech therapy Askari, social communication disorder child Islamabad" },
    ],
    links: [{ rel: "canonical", href: "/pediatric-services/social-communication" }],
  }),
});

const conditions = [
  { title: "Autism Spectrum Disorder (ASD)", desc: "Children with ASD often have significant difficulties with social reciprocity, nonverbal communication, and developing peer relationships. Our SLPs use evidence-based, naturalistic play approaches to build core social communication skills." },
  { title: "ADHD with Social Difficulties", desc: "Children with ADHD often struggle with turn-taking, topic maintenance, and reading social cues. Social communication therapy targets these pragmatic language challenges alongside attention and impulse control strategies." },
  { title: "Social Communication Disorder (SCD)", desc: "SCD (formerly called Pragmatic Language Impairment) involves persistent difficulties with the social use of language — without the restricted/repetitive behaviours seen in Autism. Targeted pragmatic therapy is highly effective." },
];

const whatWeDoItems = [
  "Comprehensive pragmatic language assessment (CELF-5 Pragmatics, SCQ)",
  "Joint attention training — the foundation of all social communication",
  "Turn-taking, topic initiation, and maintenance in conversation",
  "Emotional recognition and perspective-taking (Theory of Mind)",
  "Small-group social skills sessions for peer interaction practice",
  "ABA-informed naturalistic developmental behavioural interventions (NDBIs)",
  "Parent coaching for embedding social opportunities in daily routines",
  "School collaboration — strategies for the classroom and playground",
];

const signs = [
  "Limited or no eye contact during conversation",
  "Difficulty initiating or maintaining conversations with peers",
  "Responds to name inconsistently or with a delay",
  "Prefers solitary play; does not seek out peers spontaneously",
  "Does not understand or use nonverbal communication (gestures, facial expressions)",
  "Talks at length on own interests but cannot follow others' conversational topics",
  "Literal interpretation of language — difficulty with jokes, sarcasm, or idioms",
];

const faqs = [
  { q: "Is social communication therapy the same as ABA therapy?", a: "No, though they share some principles. Our social communication therapy is delivered by licensed SLPs using evidence-based naturalistic approaches (JASPER, SCERTS, DIR/Floortime) that differ from traditional discrete-trial ABA. We can work collaboratively with your child's ABA provider." },
  { q: "At what age can you start social communication therapy?", a: "We begin as early as 18 months for children showing early signs of Autism. The younger the child, the more neuroplasticity allows for significant gains. We offer both 1:1 and small-group formats depending on the child's profile and goals." },
  { q: "My child has an autism diagnosis from another clinic — can we come to you?", a: "Yes, absolutely. A formal diagnosis is not required to access our services, but it helps us plan appropriately. We accept referrals from NIMS, PIMS, private neurologists, and developmental paediatricians across Rawalpindi and Islamabad." },
  { q: "Are you accessible from areas like Askari, DHA, and Bahria Town?", a: "Yes. Our clinic is on Defence Road, Adyala — approximately 5 to 15 minutes from Askari 1–14, DHA Phase 1–5, Bahria Town, Khawaja Corporation Chowk, and Gulshan Abad." },
];

function SocialCommunication() {
  const { openBooking } = useBookingModal();
  return (
    <>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-speech transition-colors">Home</Link><ChevronRight className="h-3.5 w-3.5" />
        <Link to="/pediatric-services" className="hover:text-speech transition-colors">Pediatric Services</Link><ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">Social Communication & Play Therapy</span>
      </nav>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-speech/10 text-speech px-3 py-1 text-xs font-semibold uppercase tracking-wide">Pediatric Speech Therapy · Rawalpindi</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">Social Communication &amp; Play Therapy</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Pragmatic language and social skills therapy for children with Autism Spectrum Disorder, ADHD, and Social Communication Disorder — using play-based, evidence-based approaches in Rawalpindi.</p>
          <div className="mt-6 flex flex-wrap gap-3">{[{ icon: Star, text: "4.9★ Rating" }, { icon: Users, text: "500+ Children Helped" }, { icon: Clock, text: "Mon–Sat 9am–5pm" }].map(({ icon: Icon, text }) => (<span key={text} className="inline-flex items-center gap-1.5 bg-secondary/80 rounded-full px-3 py-1.5 text-xs font-medium"><Icon className="h-3.5 w-3.5 text-speech" /> {text}</span>))}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-full bg-speech px-6 py-3 text-sm font-bold text-speech-foreground shadow-lg hover:opacity-90 transition hover:scale-105"><Calendar className="h-4 w-4" /> Book a Free Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}><MessageCircle className="h-4 w-4" /> WhatsApp Us Now</a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-speech shrink-0" /><span>ADYALA, Defence Road, Rawalpindi — near Khawaja Corporation Chowk</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-speech/20 to-psychology/10 blur-3xl opacity-70" />
          <img src={svcImg} alt="Play therapy for autism and ADHD in Rawalpindi" className="relative rounded-3xl w-full object-cover shadow-2xl h-[380px]" />
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Conditions Treated</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">Who Benefits from Social Communication Therapy?</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {conditions.map(({ title, desc }) => (<div key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-display font-semibold text-base text-foreground">{title}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Warning Signs</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">Signs That May Indicate Social Communication Difficulties</h2>
          <ul className="mt-6 space-y-3">{signs.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-speech shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Clinical Approach</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">What Our Therapists Do</h2>
          <ul className="mt-6 space-y-3">{whatWeDoItems.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-psychology shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
      </section>

      <section className="bg-speech/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">FAQs</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold mb-8">Common Questions</h2>
          <div className="grid gap-4 md:grid-cols-2">{faqs.map(({ q, a }) => (<div key={q} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold text-foreground">{q}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p></div>))}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-10">
        <div className="rounded-3xl bg-gradient-to-br from-speech to-psychology text-white px-8 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Every Child Deserves to Connect</h2>
            <p className="mt-4 text-white/85 leading-relaxed">Conveniently located for families from Askari, DHA, Bahria Town, Gulshan Abad, Khawaja Corporation, and central Rawalpindi & Islamabad.</p>
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
