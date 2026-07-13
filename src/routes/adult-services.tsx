import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { adultServices } from "@/lib/services-data";

export const Route = createFileRoute("/adult-services")({
  component: AdultServices,
  head: () => ({
    meta: [
      { title: "Adult Neuro-Rehabilitation & Voice Therapy — Clinical Center for Speech & Psychology" },
      { name: "description", content: "Aphasia, dysarthria, dysphagia, voice, and neurodegenerative communication therapy for adults." },
      { property: "og:title", content: "Adult Services — Clinical Center for Speech & Psychology" },
      { property: "og:description", content: "Speech, cognition, voice, and swallowing rehabilitation for adults." },
    ],
    links: [{ rel: "canonical", href: "/adult-services" }],
  }),
});

function AdultServices() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-psychology/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <span className="text-xs font-medium uppercase tracking-widest text-psychology">Neuro-Rehabilitation &amp; Voice</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">Adult Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Restore communication, cognition, voice, and swallowing after neurological injury or
            with progressive conditions — with dignity and measurable outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <h2 className="font-display text-2xl font-semibold sr-only">Adult Service Categories</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {adultServices.map((s) => <ServiceCard key={s.title} {...s} variant="psychology" />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-psychology to-speech text-white p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl font-semibold">Speak with a specialist</h2>
          <p className="mt-3 text-white/90 max-w-xl mx-auto">Our multidisciplinary team designs individualized plans for stroke, TBI, Parkinson’s, and more.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-psychology px-5 py-3 text-sm font-semibold hover:opacity-90">Book Assessment <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:03318807617" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-medium hover:bg-white/10"><Phone className="h-4 w-4" /> 0331 880 7617</a>
          </div>
        </div>
      </section>
    </>
  );
}
