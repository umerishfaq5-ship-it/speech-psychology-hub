import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { BookingModal } from "../components/BookingModal";

// ─── Context for global modal ────────────────────────────────────────
import { createContext, useContext } from "react";

interface ModalCtx { openBooking: () => void }
export const BookingModalContext = createContext<ModalCtx>({ openBooking: () => {} });
export const useBookingModal = () => useContext(BookingModalContext);

// ─── 404 & Error boundaries ──────────────────────────────────────────
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Try again</button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

// ─── Structured Data ─────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://clinicalcenter.pk/#clinic",
  name: "Clinical Center for Speech & Psychology",
  alternateName: ["CCSP Rawalpindi", "Speech Therapy Rawalpindi", "Clinical Center Rawalpindi"],
  description: "Evidence-based speech-language pathology and psychology care for children and adults in Rawalpindi. Specializing in Autism, ADHD, Stuttering, Stroke Aphasia, Parkinson's, Voice & Swallowing therapy.",
  slogan: "Human Communication & Mental Health",
  telephone: "+92-331-8807617",
  openingHours: "Mo-Sa 09:00-17:00",
  priceRange: "$$",
  currenciesAccepted: "PKR",
  paymentAccepted: "Cash, Bank Transfer",
  url: "https://clinicalcenter.pk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ADYALA, Defence Road",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    postalCode: "46200",
    addressCountry: "PK",
  },
  geo: { "@type": "GeoCoordinates", latitude: 33.558426, longitude: 73.061949 },
  hasMap: "https://www.google.com/maps?q=33.558426,73.061949",
  medicalSpecialty: ["Speech-Language Pathology", "Pediatric Therapy", "Neuro-Rehabilitation", "Psychology"],
  areaServed: ["Rawalpindi", "Islamabad", "Adyala", "Defence Road", "Bahria Town", "DHA Rawalpindi"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
  sameAs: ["https://wa.me/923318807617"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Where is Clinical Center for Speech & Psychology located in Rawalpindi?", acceptedAnswer: { "@type": "Answer", text: "We are located at ADYALA, Defence Road, Rawalpindi 46200, Pakistan. Coordinates: 33.558426, 73.061949. Easily accessible from Adyala Road and Defence Road." } },
    { "@type": "Question", name: "What are the clinic timings?", acceptedAnswer: { "@type": "Answer", text: "We are open Monday to Saturday from 9:00 AM to 5:00 PM. Closed on Sundays." } },
    { "@type": "Question", name: "How can I book an appointment?", acceptedAnswer: { "@type": "Answer", text: "You can book via WhatsApp at +923318807617, call us at 0331-880-7617, or fill the appointment form on our website." } },
    { "@type": "Question", name: "Do you provide speech therapy for children with Autism in Rawalpindi?", acceptedAnswer: { "@type": "Answer", text: "Yes. We specialize in social communication and play therapy for children with Autism Spectrum Disorder (ASD) and ADHD. Our SLPs use evidence-based, play-based approaches." } },
    { "@type": "Question", name: "Do you provide adult speech therapy after stroke?", acceptedAnswer: { "@type": "Answer", text: "Yes. We provide comprehensive aphasia therapy and neuro-rehabilitation for adults recovering from stroke, TBI, and for those with Parkinson's Disease, Dysarthria, and Dysphagia." } },
    { "@type": "Question", name: "Is stuttering treatment available in Rawalpindi?", acceptedAnswer: { "@type": "Answer", text: "Yes. We offer evidence-based fluency shaping and stuttering management therapy for both children and adults at our Rawalpindi clinic." } },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Clinical Center for Speech & Psychology",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
};

// ─── Route ───────────────────────────────────────────────────────────
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Clinical Center for Speech & Psychology — Rawalpindi | Human Communication & Mental Health" },
      { name: "description", content: "Best speech therapy & psychology clinic in Rawalpindi. Autism, ADHD, Stuttering, Stroke Aphasia, Parkinson's, Voice & Feeding therapy. Located ADYALA, Defence Road. Book via WhatsApp: 0331-880-7617." },
      { name: "keywords", content: "speech therapy Rawalpindi, speech therapist Rawalpindi, autism therapy Rawalpindi, ADHD speech therapy, stuttering treatment Pakistan, psychology clinic Rawalpindi, speech language pathology, neuro rehabilitation, stroke aphasia therapy, Parkinson speech therapy, pediatric feeding therapy, best speech clinic Rawalpindi, Defence Road Rawalpindi clinic" },
      { name: "author", content: "Clinical Center for Speech & Psychology" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      { name: "geo.region", content: "PK-PB" },
      { name: "geo.placename", content: "Rawalpindi, Punjab, Pakistan" },
      { name: "geo.position", content: "33.558426;73.061949" },
      { name: "ICBM", content: "33.558426, 73.061949" },
      { property: "og:title", content: "Clinical Center for Speech & Psychology — Rawalpindi" },
      { property: "og:description", content: "Human Communication & Mental Health — Expert pediatric and adult speech, language, voice, swallowing, and psychology services in Rawalpindi." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Clinical Center for Speech & Psychology" },
      { property: "og:locale", content: "en_PK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clinical Center for Speech & Psychology — Rawalpindi" },
      { name: "twitter:description", content: "Best speech therapy & psychology clinic in Rawalpindi. Book via WhatsApp: 0331-880-7617." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(reviewSchema) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <BookingModalContext.Provider value={{ openBooking: () => setModalOpen(true) }}>
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1"><Outlet /></main>
          <SiteFooter />
          <FloatingWhatsApp onOpenModal={() => setModalOpen(true)} />
          <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </BookingModalContext.Provider>
    </QueryClientProvider>
  );
}
