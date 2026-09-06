import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { adultServices } from "@/lib/services-data";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20an%20adult%20neuro-rehabilitation%20consultation.";

export const Route = createFileRoute("/adult-services")({
  component: AdultServices,
  head: () => ({
    meta: [
      { title: "Adult Neuro-Rehabilitation & Voice Therapy Rawalpindi | Clinical Center for Speech & Psychology" },
      { name: "description", content: "Expert adult speech rehab in Rawalpindi for Stroke, Aphasia, Parkinson's, Dysphagia & Voice disorders. Located Defence Road, Adyala. Book: 0331-880-7617." },
      { name: "keywords", content: "aphasia therapy Rawalpindi, stroke speech therapy Pakistan, dysarthria treatment, dysphagia therapy Rawalpindi, voice therapy Pakistan, Parkinson's speech therapy, neuro rehabilitation Rawalpindi" },
      { property: "og:title", content: "Adult Neuro-Rehabilitation & Voice Therapy — Clinical Center for Speech & Psychology" },
      { property: "og:description", content: "Speech, cognition, voice, and swallowing rehabilitation for stroke, Parkinson's, and more in Rawalpindi." },
    ],
    links: [{ rel: "canonical", href: "/adult-services" }],
  }),
});

const diagnoses = [
  { icon: "🧠", label: "Stroke / CVA" },
  { icon: "💡", label: "Aphasia" },
  { icon: "🫀", label: "Parkinson's" },
  { icon: "🍵", label: "Dysphagia" },
  { icon: "🎙️", label: "Voice Disorders" },
  { icon: "🔬", label: "Dementia / TBI" },
];

const approachSteps = [
  { num: "01", title: "Detailed Assessment", body: "Comprehensive evaluation of communication, cognition, swallowing, and voice function." },
  { num: "02", title: "Collaborative Goal Setting", body: "Goals defined with the patient, family, and medical team for functional recovery." },
  { num: "03", title: "Intensive Therapy", body: "Evidence-based protocols: LSVT LOUD, VitalStim, PhonoBack, AAC, and more." },
  { num: "04", title: "Home Program & Follow-up", body: "Structured home practice, caregiver education, and regular progress reviews." },
];

function AdultServices() {
  const { location } = useRouterState();
  const isSubPage = location.pathname.startsWith("/adult-services/");

  if (isSubPage) {
    return <Outlet />;
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-psychology/[0.07] via-psychology/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-psychology">Neuro-Rehabilitation &amp; Voice</span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
              Adult Speech &amp; Neuro-Rehabilitation Services
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Restore communication, voice, cognition, and swallowing after neurological injury or with progressive conditions —
              delivered with dignity and measurable, real-world outcomes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                id="adult-whatsapp-btn"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 transition hover:scale-105"
                style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
              >
                <MessageCircle className="h-5 w-5" /> Book via WhatsApp
              </a>
              <a href="tel:03318807617" className="inline-flex items-center gap-2 rounded-full border-2 border-psychology px-6 py-3 text-sm font-semibold text-psychology hover:bg-psychology/5 transition">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </div>
          </div>

          {/* Diagnoses grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {diagnoses.map((d) => (
              <div key={d.label} className="rounded-2xl border border-border bg-card p-4 text-center hover:border-psychology/40 hover:shadow-[var(--shadow-card)] transition">
                <span className="text-3xl">{d.icon}</span>
                <div className="mt-2 text-sm font-medium text-foreground">{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-medium uppercase tracking-widest text-psychology">What We Offer</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">Adult Rehabilitation Services</h2>
          <p className="mt-3 text-muted-foreground">Each service is tailored to the specific diagnosis and functional goals of the individual — with evidence-based protocols and compassionate delivery.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {adultServices.map((s) => <ServiceCard key={s.title} {...s} variant="psychology" />)}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-gradient-to-br from-psychology/5 to-transparent border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-medium uppercase tracking-widest text-psychology">Our Clinical Approach</span>
            <h2 className="mt-3 font-display text-3xl font-semibold">From Assessment to Recovery</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step) => (
              <div key={step.num} className="relative rounded-2xl border border-border bg-card p-6 hover:border-psychology/40 transition">
                <div className="font-display text-4xl font-bold text-psychology/20 leading-none">{step.num}</div>
                <h3 className="mt-2 font-display font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help / benefits */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-speech">Conditions We Treat</span>
            <h2 className="mt-3 font-display text-3xl font-semibold">Comprehensive Neuro-Communication Care</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Post-stroke aphasia and language recovery",
                "Motor speech disorders: Dysarthria &amp; Apraxia of Speech",
                "Dysphagia (swallowing difficulties) after stroke or surgery",
                "Voice disorders: hoarseness, vocal nodules, professional voice",
                "Parkinson's Disease speech management (LSVT LOUD)",
                "Dementia-related communication support",
                "Traumatic Brain Injury (TBI) cognitive-communication therapy",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-psychology shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display font-semibold text-lg">Why Early Rehab Matters</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Research shows that intensive, early speech-language intervention after stroke or neurological injury
                leads to significantly better outcomes. Our team can begin bedside or clinic-based therapy within days of referral.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display font-semibold text-lg">Family &amp; Caregiver Education</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We train caregivers in communication strategies, safe swallowing techniques, and home exercise programs —
                extending the reach of therapy beyond clinic walls.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display font-semibold text-lg">Multidisciplinary Collaboration</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We work alongside neurologists, physiotherapists, and psychologists to ensure holistic, coordinated care for every patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-psychology to-speech text-white p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl font-semibold">Speak with a specialist today</h2>
          <p className="mt-3 text-white/90 max-w-xl mx-auto">
            Our multidisciplinary team designs individualized plans for stroke, TBI, Parkinson's, and more.
            Fast WhatsApp response for urgent referrals.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-emerald-700 font-bold px-6 py-3 text-sm hover:opacity-90 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" /> Book via WhatsApp
            </a>
            <a href="tel:03318807617" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium hover:bg-white/10">
              <Phone className="h-4 w-4" /> 0331 880 7617
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
