import type { LucideIcon } from "lucide-react";

type Variant = "speech" | "psychology";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  variant = "speech",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: Variant;
}) {
  const accent = variant === "speech" ? "bg-speech/10 text-speech" : "bg-psychology/10 text-psychology";
  const ring = variant === "speech" ? "group-hover:border-speech/40" : "group-hover:border-psychology/40";
  return (
    <article className={`group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] ${ring}`}>
      <div className={`inline-grid place-items-center h-12 w-12 rounded-xl ${accent}`}>
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="mt-4 font-display font-semibold text-lg text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </article>
  );
}
