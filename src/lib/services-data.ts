import {
  MessageCircle, Sparkles, Waves, Users, Utensils, Keyboard,
  Brain, Activity, Soup, Mic2, HeartPulse,
  type LucideIcon,
} from "lucide-react";

export type Service = { icon: LucideIcon; title: string; description: string };

export const pediatricServices: Service[] = [
  { icon: MessageCircle, title: "Speech Sound & Articulation Therapy", description: "Targeted intervention for phonological delays, articulation errors, and clarity of speech in children." },
  { icon: Sparkles, title: "Language Intervention (Receptive & Expressive)", description: "Building comprehension, vocabulary, sentence structure, and functional language use." },
  { icon: Waves, title: "Fluency Shaping (Stuttering / Cluttering)", description: "Evidence-based techniques to develop smoother, more confident speech patterns." },
  { icon: Users, title: "Social Communication & Play Therapy", description: "Pragmatic language and social skills for children with Autism, ADHD, and related profiles." },
  { icon: Utensils, title: "Pediatric Feeding & Orofacial Myofunctional Therapy", description: "Support for feeding difficulties, oral-motor coordination, tongue posture, and swallowing." },
  { icon: Keyboard, title: "Augmentative & Alternative Communication (AAC)", description: "Personalized low- and high-tech AAC systems for non-verbal and emerging communicators." },
];

export const adultServices: Service[] = [
  { icon: Brain, title: "Aphasia & Cognitive-Communication Therapy", description: "Rehabilitation following Stroke and Traumatic Brain Injury to restore language and cognition." },
  { icon: Activity, title: "Motor Speech Therapy (Dysarthria & Apraxia)", description: "Improving speech intelligibility, coordination, and motor planning after neurological injury." },
  { icon: Soup, title: "Dysphagia (Swallowing Rehabilitation)", description: "Comprehensive assessment and therapy for safe, efficient swallowing across diagnoses." },
  { icon: Mic2, title: "Clinical Voice & Resonance Therapy", description: "Care for vocal fatigue, hoarseness, resonance disorders, and professional voice users." },
  { icon: HeartPulse, title: "Neurodegenerative Management", description: "Long-term communication and swallowing support for Parkinson’s, Dementia, and Alzheimer’s." },
];
