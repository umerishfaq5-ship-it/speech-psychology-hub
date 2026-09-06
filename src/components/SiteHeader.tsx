import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, Calendar, ChevronDown } from "lucide-react";
import { useBookingModal } from "@/routes/__root";
import logoImg from "@/assets/logo.png";

const pediatricLinks = [
  { to: "/pediatric-services/speech-articulation", label: "Speech Sound & Articulation" },
  { to: "/pediatric-services/language-intervention", label: "Language Intervention" },
  { to: "/pediatric-services/fluency-shaping", label: "Fluency / Stuttering Therapy" },
  { to: "/pediatric-services/social-communication", label: "Social Communication & Play" },
  { to: "/pediatric-services/feeding-therapy", label: "Feeding & Orofacial Therapy" },
  { to: "/pediatric-services/aac-therapy", label: "AAC Therapy" },
];

const adultLinks = [
  { to: "/adult-services/aphasia-therapy", label: "Aphasia & Cognitive-Communication" },
  { to: "/adult-services/motor-speech", label: "Motor Speech (Dysarthria & Apraxia)" },
  { to: "/adult-services/dysphagia-therapy", label: "Dysphagia (Swallowing)" },
  { to: "/adult-services/voice-therapy", label: "Voice & Resonance Therapy" },
  { to: "/adult-services/neurodegenerative", label: "Neurodegenerative Management" },
];

const staticNav = [
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20an%20appointment.";

function DropdownMenu({ label, overview, links, accent }: { label: string; overview: string; links: { to: string; label: string }[]; accent: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/70 hover:text-${accent} rounded-md transition-colors whitespace-nowrap`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {label} <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 w-72 rounded-2xl border border-border bg-card shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <Link
            to={overview as any}
            className={`block px-4 py-2.5 text-sm font-semibold text-${accent} border-b border-border/60 mx-2 mb-1`}
            onClick={() => setOpen(false)}
          >
            View All {label} →
          </Link>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to as any}
              className="block px-4 py-2 text-sm text-foreground/80 hover:bg-secondary/60 hover:text-foreground rounded-lg mx-1 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const { openBooking } = useBookingModal();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Single unified nav bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-2.5 flex items-center justify-between gap-6">

        {/* Left: Logo + Name */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logoImg}
            alt="Clinical Center for Speech & Psychology logo"
            className="h-12 w-12 shrink-0 rounded-full object-cover shadow-sm"
          />
          <div className="leading-tight">
            <div className="font-display font-bold text-[15px] lg:text-base text-foreground whitespace-nowrap">
              Clinical Center for Speech &amp; Psychology
            </div>
            <div className="text-[11px] text-muted-foreground whitespace-nowrap">
              Human Communication &amp; Mental Health
            </div>
          </div>
        </Link>

        {/* Center: Nav with dropdowns */}
        <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-speech rounded-md transition-colors whitespace-nowrap"
            activeProps={{ className: "text-speech bg-speech/5 rounded-md px-3 py-2 text-sm font-medium" }}
          >
            Home
          </Link>
          <DropdownMenu label="Pediatric Services" overview="/pediatric-services" links={pediatricLinks} accent="speech" />
          <DropdownMenu label="Adult Services" overview="/adult-services" links={adultLinks} accent="psychology" />
          {staticNav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-speech rounded-md transition-colors whitespace-nowrap"
              activeProps={{ className: "text-speech bg-speech/5 rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="tel:03318807617"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-speech transition-colors whitespace-nowrap"
          >
            <Phone className="h-4 w-4" /> 0331 880 7617
          </a>
          <span className="text-border">|</span>
          <a
            id="header-whatsapp-btn"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 shadow-sm whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            id="header-book-btn"
            onClick={openBooking}
            className="inline-flex items-center gap-2 rounded-full bg-speech px-4 py-2 text-sm font-medium text-speech-foreground hover:opacity-90 transition shadow-sm whitespace-nowrap"
          >
            <Calendar className="h-4 w-4" /> Book Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border shrink-0"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-border bg-background/98 backdrop-blur-md max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 flex flex-col gap-1">
            <Link to="/" onClick={() => setOpen(false)} className="py-2.5 px-3 text-sm font-medium text-foreground/80 hover:text-speech rounded-md hover:bg-speech/5 transition-colors">Home</Link>

            {/* Pediatric dropdown mobile */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-semibold text-speech rounded-md hover:bg-speech/5 transition-colors"
                onClick={() => setMobileSection(mobileSection === "ped" ? null : "ped")}
              >
                Pediatric Services <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "ped" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "ped" && (
                <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-speech/30 pl-3">
                  <Link to="/pediatric-services" onClick={() => setOpen(false)} className="py-2 px-2 text-sm font-medium text-speech hover:bg-speech/5 rounded-md">View All →</Link>
                  {pediatricLinks.map((l) => (
                    <Link key={l.to} to={l.to as any} onClick={() => setOpen(false)} className="py-2 px-2 text-sm text-foreground/75 hover:text-speech hover:bg-speech/5 rounded-md transition-colors">{l.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Adult dropdown mobile */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-semibold text-psychology rounded-md hover:bg-psychology/5 transition-colors"
                onClick={() => setMobileSection(mobileSection === "adult" ? null : "adult")}
              >
                Adult Services <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "adult" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "adult" && (
                <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-psychology/30 pl-3">
                  <Link to="/adult-services" onClick={() => setOpen(false)} className="py-2 px-2 text-sm font-medium text-psychology hover:bg-psychology/5 rounded-md">View All →</Link>
                  {adultLinks.map((l) => (
                    <Link key={l.to} to={l.to as any} onClick={() => setOpen(false)} className="py-2 px-2 text-sm text-foreground/75 hover:text-psychology hover:bg-psychology/5 rounded-md transition-colors">{l.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" onClick={() => setOpen(false)} className="py-2.5 px-3 text-sm font-medium text-foreground/80 hover:text-speech rounded-md hover:bg-speech/5 transition-colors">About Us</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2.5 px-3 text-sm font-medium text-foreground/80 hover:text-speech rounded-md hover:bg-speech/5 transition-colors">Contact</Link>

            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-border">
              <button onClick={() => { setOpen(false); openBooking(); }} className="inline-flex items-center justify-center gap-2 rounded-full bg-speech px-4 py-2.5 text-sm font-medium text-speech-foreground">
                <Calendar className="h-4 w-4" /> Book Appointment
              </button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full text-white px-4 py-2.5 text-sm font-medium" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <a href="tel:03318807617" className="inline-flex items-center justify-center gap-2 rounded-full border border-speech/40 text-speech px-4 py-2.5 text-sm font-medium">
                <Phone className="h-4 w-4" /> Call 0331 880 7617
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
