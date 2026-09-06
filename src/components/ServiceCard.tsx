import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type Variant = "speech" | "psychology";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  variant = "speech",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  variant?: Variant;
}) {
  const accent = variant === "speech" ? "bg-speech/10 text-speech" : "bg-psychology/10 text-psychology";
  const ring = variant === "speech" ? "group-hover:border-speech/40" : "group-hover:border-psychology/40";
  const arrowColor = variant === "speech" ? "text-speech" : "text-psychology";

  return (
    <Link to={href as any}>
      <article className={`group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${ring} cursor-pointer h-full flex flex-col`}>
        <div className={`inline-grid place-items-center h-12 w-12 rounded-xl ${accent}`}>
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <h3 className="mt-4 font-display font-semibold text-lg text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
        <div className={`mt-4 flex items-center gap-1.5 text-sm font-medium ${arrowColor} group-hover:gap-2.5 transition-all`}>
          Learn more <ArrowRight className="h-4 w-4" />
        </div>
      </article>
    </Link>
  );
}
