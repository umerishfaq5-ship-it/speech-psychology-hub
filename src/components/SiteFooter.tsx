import { Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import logoImg from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/923318807617?text=Hello!%20I'd%20like%20to%20book%20an%20appointment.";
const MAPS_URL = "https://www.google.com/maps?q=33.558426,73.061949";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border" style={{ background: "linear-gradient(180deg, oklch(0.97 0.008 240) 0%, oklch(0.95 0.01 240) 100%)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Clinical Center for Speech & Psychology logo"
              className="h-16 w-16 shrink-0 rounded-full object-cover shadow-sm"
            />
            <div>
              <div className="font-display font-semibold leading-tight">Clinical Center for Speech &amp; Psychology</div>
              <div className="text-xs text-muted-foreground">Human Communication &amp; Mental Health</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Evidence-based speech-language pathology and psychological care for children and adults —
            serving Rawalpindi and Islamabad with clinical precision and genuine warmth.
          </p>

          {/* Quick Contact CTA */}
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <MessageCircle className="h-4 w-4" /> Book via WhatsApp
            </a>
            <a
              href="tel:03318807617"
              className="inline-flex items-center gap-2 rounded-full border border-speech/40 text-speech px-4 py-2 text-sm font-semibold transition hover:bg-speech/5"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-speech transition-colors">Home</Link></li>
            <li><Link to="/pediatric-services" className="hover:text-speech transition-colors">Pediatric Services</Link></li>
            <li><Link to="/adult-services" className="hover:text-speech transition-colors">Adult Services</Link></li>
            <li><Link to="/about" className="hover:text-speech transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-speech transition-colors">Contact &amp; Visit</Link></li>
            <li><Link to="/sitemap" className="hover:text-speech transition-colors">Site Map</Link></li>
          </ul>
        </div>

        {/* Contact Info — NO email */}
        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Visit Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-speech" />
              <a href="tel:03318807617" className="hover:text-speech transition-colors font-medium">0331 880 7617</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="h-4 w-4 mt-0.5 shrink-0 text-emerald-600" />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors font-medium text-emerald-600">WhatsApp Us</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-psychology" />
              <div>
                <div className="font-medium text-foreground">Mon–Sat: 9:00 am – 5:00 pm</div>
                <div className="text-xs mt-0.5">Closed on Sundays</div>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-psychology" />
              <div>
                <div className="font-medium text-foreground leading-snug">ADYALA, Defence Road<br />Rawalpindi 46200, Pakistan</div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-xs text-psychology hover:underline"
                >
                  Get Directions <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Clinical Center for Speech &amp; Psychology, Rawalpindi. All rights reserved.</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Empowering Communication · Nurturing Minds</span>
            <Link to="/sitemap" className="hover:text-speech transition-colors underline underline-offset-2">Site Map</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-speech transition-colors underline underline-offset-2">sitemap.xml</a>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-speech transition-colors underline underline-offset-2">llms.txt</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
