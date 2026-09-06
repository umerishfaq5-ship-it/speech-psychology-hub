import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, FileText, Map, Bot, Baby, Brain } from "lucide-react";

export const Route = createFileRoute("/sitemap")({
  component: SitemapPage,
  head: () => ({
    meta: [
      { title: "Site Map — Clinical Center for Speech & Psychology, Rawalpindi" },
      { name: "description", content: "Complete site map of CCSP Rawalpindi. Find all pediatric speech therapy and adult rehabilitation pages, plus AI discovery and SEO files." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/sitemap" }],
  }),
});

const corePages = [
  { to: "/" as const, label: "Home", desc: "Welcome page — clinic overview, services, and booking" },
  { to: "/about" as const, label: "About Us", desc: "Our story, founding year (2014), team, and philosophy" },
  { to: "/contact" as const, label: "Contact & Visit", desc: "Address, phone, hours, and Google Maps directions" },
];

const pediatricPages = [
  { to: "/pediatric-services" as const, label: "Pediatric Services Overview", desc: "All speech & language therapy services for children and adolescents" },
  { to: "/pediatric-services/speech-articulation" as const, label: "Speech Sound & Articulation Therapy", desc: "Phonological delays and articulation errors in children" },
  { to: "/pediatric-services/language-intervention" as const, label: "Language Intervention (Receptive & Expressive)", desc: "Vocabulary, comprehension, and sentence structure for language-delayed children" },
  { to: "/pediatric-services/fluency-shaping" as const, label: "Fluency Shaping (Stuttering & Cluttering)", desc: "Evidence-based fluency therapy for children and teenagers" },
  { to: "/pediatric-services/social-communication" as const, label: "Social Communication & Play Therapy", desc: "Pragmatic language and social skills for Autism, ADHD, SCD" },
  { to: "/pediatric-services/feeding-therapy" as const, label: "Pediatric Feeding & Orofacial Myofunctional Therapy", desc: "Feeding difficulties, picky eating, oral-motor, tongue posture, dysphagia" },
  { to: "/pediatric-services/aac-therapy" as const, label: "AAC Therapy (Augmentative & Alternative Communication)", desc: "PECS, speech generating devices, and total communication for non-speaking children" },
];

const adultPages = [
  { to: "/adult-services" as const, label: "Adult Services Overview", desc: "All neuro-rehabilitation and voice services for adults" },
  { to: "/adult-services/aphasia-therapy" as const, label: "Aphasia & Cognitive-Communication Therapy", desc: "Language rehabilitation after stroke and traumatic brain injury" },
  { to: "/adult-services/motor-speech" as const, label: "Motor Speech Therapy (Dysarthria & Apraxia)", desc: "Speech intelligibility after neurological injury — LSVT LOUD available" },
  { to: "/adult-services/dysphagia-therapy" as const, label: "Dysphagia (Swallowing Rehabilitation)", desc: "Safe swallowing assessment and therapy for stroke, Parkinson's, and neurological conditions" },
  { to: "/adult-services/voice-therapy" as const, label: "Clinical Voice & Resonance Therapy", desc: "Hoarseness, vocal nodules, and voice care for teachers and professionals" },
  { to: "/adult-services/neurodegenerative" as const, label: "Neurodegenerative Communication Management", desc: "Parkinson's, Dementia, Alzheimer's, and ALS — LSVT LOUD offered" },
];

const technicalFiles = [
  { href: "/sitemap.xml", icon: Map, label: "sitemap.xml", desc: "Machine-readable XML sitemap for search engines (Google, Bing, Yandex)" },
  { href: "/llms.txt", icon: Bot, label: "llms.txt", desc: "AI/LLM discovery file — helps ChatGPT, Gemini, Perplexity, and Claude accurately answer questions about CCSP" },
  { href: "/robots.txt", icon: FileText, label: "robots.txt", desc: "Crawler access directives for search engine bots" },
  { href: "/entity-map.json", icon: FileText, label: "entity-map.json", desc: "Structured Schema.org entity data for AI SEO and knowledge graph inclusion" },
];

function PageLink({ to, label, desc }: { to: string; label: string; desc: string }) {
  return (
    <li>
      <Link
        to={to as never}
        className="group flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 hover:border-speech/40 hover:bg-speech/[0.03] transition"
      >
        <ChevronRight className="h-4 w-4 text-speech mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
        <span>
          <span className="block text-sm font-semibold text-foreground group-hover:text-speech transition-colors">{label}</span>
          <span className="block text-xs text-muted-foreground mt-0.5">{desc}</span>
        </span>
      </Link>
    </li>
  );
}

function SitemapPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-speech/[0.06] to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-speech transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">Site Map</span>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-widest text-speech">Full Site Map</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
            All Pages — Clinical Center<br className="hidden sm:block" /> for Speech &amp; Psychology
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A complete directory of every page on our website. Find the service you need, navigate quickly, or access our SEO and AI discovery files.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-14 lg:grid-cols-[1fr_300px]">
        <div className="space-y-12">

          {/* Core Pages */}
          <section>
            <h2 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
              <FileText className="h-5 w-5 text-speech" /> Core Pages
            </h2>
            <ul className="space-y-2">
              {corePages.map((p) => <PageLink key={p.to} {...p} />)}
            </ul>
          </section>

          {/* Pediatric Services */}
          <section>
            <h2 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
              <Baby className="h-5 w-5 text-speech" /> Pediatric Speech &amp; Language Services
            </h2>
            <p className="text-sm text-muted-foreground mb-4">Play-based, evidence-based therapy for children and adolescents — serving Rawalpindi, Askari, DHA, Bahria Town, and Islamabad.</p>
            <ul className="space-y-2">
              {pediatricPages.map((p) => <PageLink key={p.to} {...p} />)}
            </ul>
          </section>

          {/* Adult Services */}
          <section>
            <h2 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
              <Brain className="h-5 w-5 text-psychology" /> Adult Neuro-Rehabilitation Services
            </h2>
            <p className="text-sm text-muted-foreground mb-4">Evidence-based rehabilitation for post-stroke, neurological, voice, and swallowing conditions — with LSVT LOUD available for Parkinson's patients.</p>
            <ul className="space-y-2">
              {adultPages.map((p) => <PageLink key={p.to} {...p} />)}
            </ul>
          </section>
        </div>

        {/* Sidebar — Technical Files */}
        <div>
          <div className="sticky top-24 space-y-6">
            <section>
              <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Map className="h-5 w-5 text-psychology" /> Technical &amp; SEO Files
              </h2>
              <ul className="space-y-3">
                {technicalFiles.map(({ href, icon: Icon, label, desc }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 hover:border-psychology/40 hover:bg-psychology/[0.03] transition"
                    >
                      <Icon className="h-4 w-4 text-psychology mt-0.5 shrink-0" />
                      <span>
                        <span className="block text-sm font-semibold font-mono text-foreground group-hover:text-psychology transition-colors">{label}</span>
                        <span className="block text-xs text-muted-foreground mt-0.5">{desc}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick stats */}
            <div className="rounded-2xl bg-speech/5 border border-speech/20 p-5">
              <h3 className="font-semibold text-sm mb-3 text-foreground">Site at a Glance</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex justify-between"><span>Total pages</span><span className="font-semibold text-foreground">17</span></li>
                <li className="flex justify-between"><span>Pediatric service pages</span><span className="font-semibold text-foreground">7</span></li>
                <li className="flex justify-between"><span>Adult service pages</span><span className="font-semibold text-foreground">6</span></li>
                <li className="flex justify-between"><span>SEO/AI files</span><span className="font-semibold text-foreground">4</span></li>
                <li className="flex justify-between"><span>Last updated</span><span className="font-semibold text-foreground">Aug 2026</span></li>
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-speech to-psychology text-white p-5">
              <h3 className="font-semibold text-sm mb-2">Ready to Book?</h3>
              <p className="text-xs text-white/80 mb-3">Call or WhatsApp us — Mon–Sat, 9am–5pm</p>
              <a
                href="https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center rounded-full bg-white text-speech text-xs font-bold px-4 py-2 hover:scale-105 transition"
              >
                WhatsApp 0331 880 7617
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
