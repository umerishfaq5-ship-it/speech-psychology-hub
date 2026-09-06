import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amna Bibi",
    location: "Rawalpindi",
    service: "Pediatric Speech Therapy",
    rating: 5,
    text: "Mera beta 3 saal ka tha aur bilkul baat nahi karta tha. 6 mahine ki therapy ke baad ab woh sentences bolta hai. Yeh clinic zindagi badal deti hai. Allah bless kare is team ko.",
    condition: "Delayed Speech",
    initials: "AB",
    color: "bg-speech/10 text-speech",
  },
  {
    name: "Tariq Mahmood",
    location: "Islamabad",
    service: "Adult Neuro-Rehabilitation",
    rating: 5,
    text: "After my father's stroke, he could not speak at all. The team at Clinical Center gave us hope. After 4 months of aphasia therapy, he can communicate clearly again. Highly professional and caring.",
    condition: "Post-Stroke Aphasia",
    initials: "TM",
    color: "bg-psychology/10 text-psychology",
  },
  {
    name: "Sara Qureshi",
    location: "Bahria Town, Rawalpindi",
    service: "Autism Therapy",
    rating: 5,
    text: "My 5-year-old daughter was diagnosed with autism. The SLPs here are absolutely wonderful. They use play-based techniques and our daughter now makes eye contact and communicates her needs. Best decision we made.",
    condition: "Autism Spectrum",
    initials: "SQ",
    color: "bg-speech/10 text-speech",
  },
  {
    name: "Muhammad Asif",
    location: "Adyala, Rawalpindi",
    service: "Stuttering Therapy",
    rating: 5,
    text: "I had severe stuttering since childhood. Mujhe public mein baat karne se darr lagta tha. Yahan se 3 mahine treatment ki aur ab main interviews de sakta hoon. Zabardast team hai.",
    condition: "Stuttering / Fluency",
    initials: "MA",
    color: "bg-psychology/10 text-psychology",
  },
  {
    name: "Rukhsana Akhtar",
    location: "Satellite Town, Rawalpindi",
    service: "Pediatric Feeding Therapy",
    rating: 5,
    text: "Meri beti sirf 2 cheezein khati thi. Feeding therapy ke baad ab woh variety of foods khati hai. Bahut patient aur expert team hai. Shukriya Clinical Center.",
    condition: "Feeding Difficulties",
    initials: "RA",
    color: "bg-speech/10 text-speech",
  },
  {
    name: "Dr. Khalid Pervaiz",
    location: "DHA Phase 2, Rawalpindi",
    service: "Parkinson's Therapy",
    rating: 5,
    text: "As a medical professional, I referred my father here for Parkinson's speech management. The LSVT LOUD protocol was implemented correctly and results are measurable. Very impressed with their clinical knowledge.",
    condition: "Parkinson's Disease",
    initials: "KP",
    color: "bg-psychology/10 text-psychology",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20" aria-labelledby="testimonials-heading">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-medium uppercase tracking-widest text-psychology">Patient Stories</span>
        <h2 id="testimonials-heading" className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Families Trust Our Care
        </h2>
        <p className="mt-3 text-muted-foreground">
          Real stories from real families across Rawalpindi and Islamabad.
        </p>
        {/* Aggregate Rating */}
        <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-[var(--shadow-card)]">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
          <div className="text-left">
            <div className="font-display text-lg font-bold text-foreground">4.9 / 5.0</div>
            <div className="text-xs text-muted-foreground">Based on 200+ patient reviews</div>
          </div>
        </div>
      </div>

      {/* Testimonial grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all"
            itemScope
            itemType="https://schema.org/Review"
          >
            {/* Quote icon */}
            <Quote className="h-8 w-8 text-border mb-3 group-hover:text-speech/30 transition-colors" />

            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
              ))}
            </div>

            {/* Review text */}
            <p className="text-sm text-muted-foreground leading-relaxed" itemProp="reviewBody">
              "{t.text}"
            </p>

            {/* Condition tag */}
            <div className="mt-4 inline-flex items-center rounded-full bg-secondary/80 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              {t.condition}
            </div>

            {/* Author */}
            <div className="mt-4 pt-4 border-t border-border flex items-center gap-3" itemProp="author" itemScope itemType="https://schema.org/Person">
              <div className={`grid place-items-center h-10 w-10 rounded-full font-bold text-sm shrink-0 ${t.color}`}>
                {t.initials}
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground" itemProp="name">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.service} · {t.location}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
