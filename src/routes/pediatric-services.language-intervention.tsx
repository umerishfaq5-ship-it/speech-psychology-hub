import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Calendar, CheckCircle2, Clock, MapPin, Star, Users, Phone, ChevronRight } from "lucide-react";
import svcImg from "@/assets/svc-language.jpg";
import { useBookingModal } from "@/routes/__root";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20a%20Language%20Intervention%20consultation%20for%20my%20child.";

export const Route = createFileRoute("/pediatric-services/language-intervention")({
  component: LanguageIntervention,
  head: () => ({
    meta: [
      { title: "Language Delay & Intervention Therapy Rawalpindi | Near Askari & Adyala Road | CCSP" },
      { name: "description", content: "Expert language intervention for children with delayed speech in Rawalpindi. Serving Askari, DHA, Adyala Road, Khawaja Corporation & Islamabad. Licensed SLPs. Book: 0331-880-7617." },
      { name: "keywords", content: "language delay child Rawalpindi, delayed speech therapy Rawalpindi, expressive language therapy Askari, receptive language disorder child Pakistan, toddler not talking Rawalpindi, language intervention near Adyala Road" },
    ],
    links: [{ rel: "canonical", href: "/pediatric-services/language-intervention" }],
  }),
});

const whatItIs = [
  { q: "Receptive Language Disorder", a: "A receptive language disorder means a child has difficulty understanding language — following instructions, answering questions, or processing what others say. It can significantly impact learning and social participation." },
  { q: "Expressive Language Disorder", a: "Expressive language disorder means a child struggles to express their thoughts clearly — using limited vocabulary, short sentences, or poor grammar. This may co-occur with receptive difficulties or present independently." },
  { q: "Late Talker vs. Language Disorder", a: "Some children are 'late talkers' who catch up with minimal support. Others have a true language disorder requiring structured intervention. Our SLPs use standardised assessments to determine which applies to your child and design the right plan." },
];

const milestones = [
  { age: "12 months", expected: "Says 1–3 words; responds to own name; waves bye-bye" },
  { age: "18 months", expected: "Uses at least 10 words; points to objects; follows simple commands" },
  { age: "24 months", expected: "50+ words; combining 2 words ('more juice', 'daddy go')" },
  { age: "36 months", expected: "200+ words; 3-word sentences; strangers understand 75% of speech" },
  { age: "4–5 years", expected: "Full sentences; tells stories; asks 'why/who/what' questions" },
];

const whatWeDoItems = [
  "Standardised receptive & expressive language assessment (PLS-5, CELF, PRESCHOOL LANGUAGE SCALES)",
  "Vocabulary building through structured play and naturalistic activities",
  "Sentence structure and grammar development programs",
  "Narrative and storytelling skills for school readiness",
  "Comprehension strategies for following multi-step instructions",
  "Literacy readiness and phonological awareness training",
  "Parent-mediated intervention coaching (techniques for home practice)",
  "School liaison and teacher consultation reports",
];

const faqs = [
  { q: "My 2-year-old isn't talking much — is this a problem?", a: "If your 2-year-old has fewer than 50 words and isn't combining 2 words yet, we recommend a language assessment. Early intervention before age 3 yields the best outcomes for late talkers and children with language disorders." },
  { q: "Can my child catch up without therapy?", a: "Some late talkers do catch up, but research shows that children with true language disorders do not catch up on their own and benefit significantly from early, targeted intervention. An assessment will clarify this for your child." },
  { q: "How far is your clinic from Askari areas?", a: "Our clinic is on Defence Road, Adyala — approximately 5–10 minutes from Askari 1, 2, and 3, and easily accessible from Askari 10, 14, DHA Phase 1–5, and Bahria Town via the main Adyala Road." },
  { q: "Do you assess in Urdu as well as English?", a: "Yes. We assess children in their home language and understand that most Rawalpindi families communicate in Urdu, Punjabi, or a mix. Our SLPs are experienced in bilingual assessment and intervention." },
];

function LanguageIntervention() {
  const { openBooking } = useBookingModal();
  return (
    <>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-speech transition-colors">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to="/pediatric-services" className="hover:text-speech transition-colors">Pediatric Services</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">Language Intervention</span>
      </nav>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-speech/10 text-speech px-3 py-1 text-xs font-semibold uppercase tracking-wide">Pediatric Speech Therapy · Rawalpindi</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">Language Intervention<br />(Receptive &amp; Expressive)</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Building vocabulary, comprehension, sentence structure, and functional communication for children with language delays — serving families across Rawalpindi, Askari, DHA, Adyala Road, and Islamabad.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[{ icon: Star, text: "4.9★ Rating" }, { icon: Users, text: "500+ Children Helped" }, { icon: Clock, text: "Mon–Sat 9am–5pm" }].map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-1.5 bg-secondary/80 rounded-full px-3 py-1.5 text-xs font-medium"><Icon className="h-3.5 w-3.5 text-speech" /> {text}</span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openBooking} className="inline-flex items-center gap-2 rounded-full bg-speech px-6 py-3 text-sm font-bold text-speech-foreground shadow-lg hover:opacity-90 transition hover:scale-105"><Calendar className="h-4 w-4" /> Book a Free Consultation</button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90 transition" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}><MessageCircle className="h-4 w-4" /> WhatsApp Us Now</a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-speech shrink-0" /><span>ADYALA, Defence Road, Rawalpindi — near Khawaja Corporation Chowk</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-speech/20 to-psychology/10 blur-3xl opacity-70" />
          <img src={svcImg} alt="Language intervention therapy session with Pakistani child in Rawalpindi" className="relative rounded-3xl w-full object-cover shadow-2xl h-[380px]" />
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Understanding the Condition</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">Types of Language Disorders We Treat</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {whatItIs.map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display font-semibold text-base text-foreground">{q}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developmental Milestones Table */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-speech">Quick Reference</span>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold mb-8">Language Development Milestones</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-speech/5 border-b border-border">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Age</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Expected Language Skills</th>
              </tr>
            </thead>
            <tbody>
              {milestones.map((m, i) => (
                <tr key={m.age} className={i % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                  <td className="px-6 py-3.5 font-medium text-speech whitespace-nowrap">{m.age}</td>
                  <td className="px-6 py-3.5 text-muted-foreground">{m.expected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">* These are general guidelines. Individual variation exists. If you have concerns, contact us for a professional assessment.</p>
      </section>

      <section className="bg-speech/5 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-speech">Clinical Approach</span>
            <h2 className="mt-3 font-display text-2xl font-semibold">What Our Therapists Do</h2>
            <ul className="mt-6 space-y-3">{whatWeDoItems.map((s) => (<li key={s} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-speech shrink-0 mt-0.5" /><span>{s}</span></li>))}</ul>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-psychology">FAQs</span>
            <h2 className="mt-3 font-display text-2xl font-semibold">Common Questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-sm text-foreground">{q}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-10">
        <div className="rounded-3xl bg-gradient-to-br from-speech to-psychology text-white px-8 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Start Your Child's Language Journey Today</h2>
            <p className="mt-4 text-white/85 leading-relaxed">Accessible from Askari 1–14, DHA, Bahria Town, Gulshan Abad, Khawaja Corporation, and all of central Rawalpindi & Islamabad.</p>
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
