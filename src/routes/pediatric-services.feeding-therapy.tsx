import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Calendar, CheckCircle2, Clock, MapPin, Star, Users, Phone, ChevronRight } from "lucide-react";
import svcImg from "@/assets/svc-feeding.jpg";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20a%20Feeding%20Therapy%20consultation%20for%20my%20child.";

export const Route = createFileRoute("/pediatric-services/feeding-therapy")({
  component: FeedingTherapy,
  head: () => ({
    meta: [
      { title: "Pediatric Feeding Therapy & Orofacial Myofunctional Therapy Rawalpindi | CCSP" },
      { name: "description", content: "Pediatric feeding therapy & orofacial myofunctional therapy in Rawalpindi. Helping with picky eating, oral-motor issues & swallowing. Askari, Adyala, DHA. Book: 0331-880-7617." },
      { name: "keywords", content: "feeding therapy child Rawalpindi, picky eating therapy Pakistan, orofacial myofunctional therapy Rawalpindi, oral motor therapy child Askari, swallowing difficulty child Rawalpindi, tube weaning therapy Pakistan" },
    ],
    links: [{ rel: "canonical", href: "/pediatric-services/feeding-therapy" }],
  }),
});

const conditions = [
  { title: "Sensory-Based Feeding Difficulties", desc: "Children with heightened or reduced oral sensory sensitivity may refuse entire food textures, temperatures, or flavours. Our therapists use systematic sensory desensitisation and food chaining strategies." },
  { title: "Oral-Motor / Chewing Difficulties", desc: "Weak or discoordinated oral-motor movements affect chewing efficiency and safe swallowing. We target tongue lateralisation, jaw grading, and lip closure through targeted exercises." },
  { title: "Orofacial Myofunctional Disorders (OMD)", desc: "OMDs include tongue thrust, mouth breathing, low tongue posture, and prolonged dummy/thumb sucking that affect dental development, speech, and sleep. OMT is a specialised therapy addressing these patterns." },
  { title: "Dysphagia (Swallowing Difficulties)", desc: "Paediatric dysphagia involves difficulty safely moving food or liquid through the mouth and throat. It can be life-threatening if untreated and requires thorough clinical assessment." },
];

const signs = [
  "Refuses entire food groups or specific textures (extremely picky eating)",
  "Gagging, vomiting, or major distress at mealtimes",
  "Slow eating, pocketing food in cheeks, or spitting out food",
  "Drooling excessively beyond the expected age",
  "Mouth breathing, snoring, or teeth grinding (signs of OMD)",
  "Coughing or choking when eating or drinking",
  "Currently on a feeding tube and working toward oral feeding",
];

const whatWeDoItems = [
  "Comprehensive oral-motor and feeding assessment",
  "Sensory-based feeding therapy — systematic introduction of new foods and textures",
  "Food chaining to expand dietary variety from accepted to novel foods",
  "Orofacial Myofunctional Therapy (OMT) — tongue posture, lip seal, nasal breathing",
  "Dysphagia management with texture modification guidance (IDDSI framework)",
  "Enteral feeding / tube weaning programmes",
  "Mealtime environment restructuring and positive mealtime coaching",
  "Liaison with paediatricians and dietitians for multidisciplinary management",
];

const faqs = [
  { q: "Is picky eating normal or a medical problem?", a: "Some degree of food selectivity is developmentally normal. However, when a child eats fewer than 20 foods, refuses entire food groups, has significant mealtime distress, or is failing to thrive nutritionally, a professional feeding assessment is indicated." },
  { q: "At what age should we seek feeding therapy?", a: "Feeding concerns can be addressed from birth (e.g., breastfeeding difficulties) through childhood. We assess and treat children of all ages. Earlier intervention generally leads to better and faster outcomes." },
  { q: "What is orofacial myofunctional therapy and who needs it?", a: "OMT is a specialised programme for correcting oral rest posture, tongue thrust, mouth breathing, and related patterns. It's beneficial for children who breathe through their mouth, have open-bite dental issues, tongue ties, or ongoing speech problems related to tongue placement." },
  { q: "Do you work with children on feeding tubes?", a: "Yes. We have experience with tube-dependent children (NG and PEG) and offer structured, medically supervised oral feeding programmes aimed at transitioning children to full oral feeding where appropriate." },
];

function FeedingTherapy() {
  const { openBooking } = useBookingModal();
  return (
    <>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-speech transition-colors">Home</Link><ChevronRight className="h-3.5 w-3.5" />
        <Link to="/pediatric-services" className="hover:text-speech transition-colors">Pediatric Services</Link><ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">Feeding & Orofacial Therapy</span>
      </nav>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-speech/10 text-speech px-3 py-1 text-xs font-semibold uppercase tracking-wide">Pediatric Therapy · Rawalpindi</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">Pediatric Feeding &amp; Orofacial Myofunctional Therapy</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Support for children with feeding difficulties, extreme picky eating, oral-motor coordination challenges, tongue posture disorders, and swallowing difficulties — serving Rawalpindi, Askari, DHA, and Islamabad.</p>
          <div className="mt-6 flex flex-wrap gap-3">{[{ icon: Star, text: "4.9★ Rating" }, { icon: Users, text: "500+ Helped" }, { icon: Clock, text: "Mon–Sat 9am–5pm" }].map(({ icon: Icon, text }) => (<span key={text} className="inline-flex items-center gap-1.5 bg-secondary/80 rounded-full px-3 py-1.5 text-xs font-medium"><Icon className="h-3.5 w-3.5 text-speech" /> {text}</span>))}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-full bg-speech px-6 py-3 text-sm font-bold text-speech-foreground shadow-lg hover:opacity-90 transition hover:scale-105"><Calendar className="h-4 w-4" /> Book a Free Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}><MessageCircle className="h-4 w-4" /> WhatsApp Us Now</a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-speech shrink-0" /><span>ADYALA, Defence Road, Rawalpindi — near Khawaja Corporation Chowk</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-speech/20 to-psychology/10 blur-3xl opacity-70" />
          <img src={svcImg} alt="Pediatric feeding therapy in Rawalpindi clinic" className="relative rounded-3xl w-full object-cover shadow-2xl h-[380px]" />
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Conditions We Treat</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">Types of Feeding & Orofacial Problems</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {conditions.map(({ title, desc }) => (<div key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-display font-semibold text-base text-speech">{title}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Warning Signs</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">When to Seek Feeding Therapy</h2>
          <ul className="mt-6 space-y-3">{signs.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-speech shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-psychology">Clinical Approach</span>
          <h2 className="mt-3 font-display text-2xl font-semibold">How We Help</h2>
          <ul className="mt-6 space-y-3">{whatWeDoItems.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-psychology shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
        </div>
      </section>

      <section className="bg-speech/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">FAQs</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold mb-8">Common Questions About Feeding Therapy</h2>
          <div className="grid gap-4 md:grid-cols-2">{faqs.map(({ q, a }) => (<div key={q} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold text-foreground">{q}</h3><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p></div>))}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-10">
        <div className="rounded-3xl bg-gradient-to-br from-speech to-psychology text-white px-8 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Make Mealtimes Stress-Free Again</h2>
            <p className="mt-4 text-white/85 leading-relaxed">Serving families from Askari, DHA, Bahria Town, Gulshan Abad, Khawaja Corporation, and central Rawalpindi & Islamabad.</p>
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
