import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, HeartHandshake, Award, Users, GraduationCap, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us — Clinical Center for Speech & Psychology" },
      { name: "description", content: "Learn about our multidisciplinary team of speech-language pathologists and psychologists dedicated to human communication and mental health." },
      { property: "og:title", content: "About Us — Clinical Center for Speech & Psychology" },
      { property: "og:description", content: "A multidisciplinary team dedicated to speech, language, and mental health across the lifespan." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-speech">About Us</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">Human communication is our craft.</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            The Clinical Center for Speech &amp; Psychology brings together licensed
            speech-language pathologists and psychologists to deliver integrated,
            lifespan care. We blend clinical rigor with genuine warmth — because
            outcomes matter, and so does how you feel along the way.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
            <div><div className="font-display text-2xl font-semibold">10+</div><div className="text-xs text-muted-foreground">Years of practice</div></div>
            <div><div className="font-display text-2xl font-semibold">12</div><div className="text-xs text-muted-foreground">Clinicians</div></div>
            <div><div className="font-display text-2xl font-semibold">5k+</div><div className="text-xs text-muted-foreground">Clients served</div></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card icon={Stethoscope} title="Clinical rigor" body="Standardized assessments and outcome tracking." accent="speech" />
          <Card icon={HeartHandshake} title="Warm care" body="A therapy space that families trust." accent="psychology" />
          <Card icon={GraduationCap} title="Trained team" body="Advanced certifications across specialties." accent="psychology" />
          <Card icon={Users} title="Family-centered" body="Caregivers are partners in every plan." accent="speech" />
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-8 md:grid-cols-3">
          <Value icon={ShieldCheck} title="Our Mission" body="To restore, develop, and celebrate human communication with evidence-based, empathetic care." />
          <Value icon={Award} title="Our Approach" body="Multidisciplinary teams, individualized plans, measurable milestones, and clear communication with families." />
          <Value icon={HeartHandshake} title="Our Promise" body="You are met with dignity, patience, and hope — every visit, every stage." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">Let’s work together</h2>
        <p className="mt-3 text-muted-foreground">Request a consultation with our clinical team.</p>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-speech px-5 py-3 text-sm font-medium text-speech-foreground hover:opacity-90">Contact Us</Link>
      </section>
    </>
  );
}

function Card({ icon: Icon, title, body, accent }: { icon: any; title: string; body: string; accent: "speech" | "psychology" }) {
  const cls = accent === "speech" ? "bg-speech/10 text-speech" : "bg-psychology/10 text-psychology";
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className={`grid place-items-center h-11 w-11 rounded-xl ${cls}`}><Icon className="h-5 w-5" /></div>
      <div className="mt-3 font-display font-semibold">{title}</div>
      <p className="text-sm text-muted-foreground mt-1">{body}</p>
    </div>
  );
}

function Value({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div>
      <Icon className="h-8 w-8 text-speech" />
      <h3 className="mt-3 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
