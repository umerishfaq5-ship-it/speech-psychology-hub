import { Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-speech to-psychology text-white font-display font-bold">C</div>
            <div>
              <div className="font-display font-semibold">Clinical Center for Speech &amp; Psychology</div>
              <div className="text-xs text-muted-foreground">Human Communication &amp; Mental Health</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Evidence-based speech-language pathology and psychological care for children,
            adolescents, and adults — delivered with warmth and clinical precision.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/pediatric-services" className="hover:text-speech">Pediatric Services</Link></li>
            <li><Link to="/adult-services" className="hover:text-speech">Adult Services</Link></li>
            <li><Link to="/about" className="hover:text-speech">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-speech">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Get in touch</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-speech" /><a href="tel:03318807617" className="hover:text-speech">0331 880 7617</a></li>
            <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-psychology" />9:00 am – 6:00 pm</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-speech" />info@clinicalcenter.pk</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-psychology" />Clinic Address, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Clinical Center for Speech &amp; Psychology. All rights reserved.</span>
          <span>Empowering Communication · Nurturing Minds</span>
        </div>
      </div>
    </footer>
  );
}
