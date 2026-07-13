import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { pediatricServices } from "@/lib/services-data";

export const Route = createFileRoute("/pediatric-services")({
  component: PediatricServices,
  head: () => ({
    meta: [
      { title: "Pediatric Speech & Language Services — Clinical Center for Speech & Psychology" },
      { name: "description", content: "Speech, language, fluency, feeding, social communication, and AAC therapy for children and adolescents." },
      { property: "og:title", content: "Pediatric Services — Clinical Center for Speech & Psychology" },
      { property: "og:description", content: "Evidence-based pediatric speech-language therapy for children and adolescents." },
    ],
    links: [{ rel: "canonical", href: "/pediatric-services" }],
  }),
});

function PediatricServices() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-speech/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <span className="text-xs font-medium uppercase tracking-widest text-speech">For Children &amp; Adolescents</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">Pediatric Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Play-based, family-centered therapy tailored to your child’s developmental needs —
            from first words to complex communication.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <h2 className="font-display text-2xl font-semibold sr-only">Pediatric Service Categories</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pediatricServices.map((s) => <ServiceCard key={s.title} {...s} variant="speech" />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-speech to-psychology text-white p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl font-semibold">Not sure where to start?</h2>
          <p className="mt-3 text-white/90 max-w-xl mx-auto">Our clinicians offer a free 15-minute consultation to understand your child’s needs.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-speech px-5 py-3 text-sm font-semibold hover:opacity-90">Book Consultation <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:03318807617" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-medium hover:bg-white/10"><Phone className="h-4 w-4" /> 0331 880 7617</a>
          </div>
        </div>
      </section>
    </>
  );
}
