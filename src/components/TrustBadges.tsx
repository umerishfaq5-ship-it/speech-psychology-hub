import { ShieldCheck, Award, Users, GraduationCap, Star, Clock } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    label: "Licensed Clinicians",
    sub: "Registered SLPs & Psychologists",
    color: "text-speech",
    bg: "bg-speech/10",
  },
  {
    icon: GraduationCap,
    label: "Evidence-Based Practice",
    sub: "Research-backed therapy protocols",
    color: "text-psychology",
    bg: "bg-psychology/10",
  },
  {
    icon: Award,
    label: "3+ Years Experience",
    sub: "Serving Rawalpindi since 2021",
    color: "text-speech",
    bg: "bg-speech/10",
  },
  {
    icon: Users,
    label: "500+ Patients Served",
    sub: "Rawalpindi & Islamabad families",
    color: "text-psychology",
    bg: "bg-psychology/10",
  },
  {
    icon: Star,
    label: "4.9★ Patient Rating",
    sub: "Based on 200+ verified reviews",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Clock,
    label: "Mon–Sat, 9am–5pm",
    sub: "Convenient appointment slots",
    color: "text-speech",
    bg: "bg-speech/10",
  },
];

const certBadges = [
  { label: "HEC Recognized", sub: "Higher Education Commission Qualified" },
  { label: "Licensed Clinicians", sub: "Registered & certified practitioners" },
];

export function TrustBadges() {
  return (
    <section
      className="border-y border-border bg-gradient-to-br from-secondary/40 via-background to-secondary/20"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="text-center mb-10">
          <span className="text-xs font-medium uppercase tracking-widest text-speech">Why Trust Us</span>
          <h2 id="trust-heading" className="mt-2 font-display text-2xl sm:text-3xl font-semibold">
            Authority You Can Count On
          </h2>
        </div>

        {/* Badge grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center text-center rounded-2xl border border-border bg-card p-4 hover:shadow-[var(--shadow-card)] transition-shadow"
            >
              <div className={`grid place-items-center h-11 w-11 rounded-xl mb-3 ${b.bg}`}>
                <b.icon className={`h-5 w-5 ${b.color}`} />
              </div>
              <div className="font-semibold text-sm text-foreground leading-tight">{b.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{b.sub}</div>
            </div>
          ))}
        </div>

        {/* Certification / Affiliation strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {certBadges.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-4 py-2 shadow-sm"
            >
              <div className="grid place-items-center h-6 w-6 rounded-full bg-gradient-to-br from-speech to-psychology text-white text-[10px] font-bold shrink-0">
                ✓
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">{c.label}</div>
                <div className="text-[10px] text-muted-foreground">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
