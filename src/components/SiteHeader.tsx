import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Clock } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/pediatric-services", label: "Pediatric Services" },
  { to: "/adult-services", label: "Adult Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="hidden md:flex items-center justify-between px-6 lg:px-10 py-1.5 text-xs bg-secondary/60 text-secondary-foreground">
        <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-speech" /> Mon–Sat · 9:00 am – 6:00 pm</div>
        <a href="tel:03318807617" className="flex items-center gap-2 font-medium hover:text-speech transition-colors">
          <Phone className="h-3.5 w-3.5" /> 0331 880 7617
        </a>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <div className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-speech to-psychology text-white font-display text-lg font-bold">
            C
          </div>
          <div className="min-w-0 leading-tight">
            <div className="font-display font-semibold text-[15px] sm:text-base truncate">Clinical Center for Speech &amp; Psychology</div>
            <div className="text-[11px] sm:text-xs text-muted-foreground truncate">Human Communication &amp; Mental Health</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-speech rounded-md transition-colors"
              activeProps={{ className: "text-speech" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-speech px-4 py-2 text-sm font-medium text-speech-foreground hover:opacity-90 transition"
          >
            Book Appointment
          </Link>
        </nav>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground/80"
                activeProps={{ className: "text-speech" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:03318807617" className="mt-2 inline-flex items-center gap-2 rounded-full bg-speech px-4 py-2.5 text-sm font-medium text-speech-foreground">
              <Phone className="h-4 w-4" /> Call 0331 880 7617
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
