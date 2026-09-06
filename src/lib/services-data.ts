import {
  MessageCircle, Sparkles, Waves, Users, Utensils, Keyboard,
  Brain, Activity, Soup, Mic2, HeartPulse,
  type LucideIcon,
} from "lucide-react";

export type Service = { icon: LucideIcon; title: string; description: string; href: string };

export const pediatricServices: Service[] = [
  { icon: MessageCircle, title: "Speech Sound & Articulation Therapy", description: "Targeted intervention for phonological delays, articulation errors, and clarity of speech in children.", href: "/pediatric-services/speech-articulation" },
  { icon: Sparkles, title: "Language Intervention (Receptive & Expressive)", description: "Building comprehension, vocabulary, sentence structure, and functional language use.", href: "/pediatric-services/language-intervention" },
  { icon: Waves, title: "Fluency Shaping (Stuttering / Cluttering)", description: "Evidence-based techniques to develop smoother, more confident speech patterns.", href: "/pediatric-services/fluency-shaping" },
  { icon: Users, title: "Social Communication & Play Therapy", description: "Pragmatic language and social skills for children with Autism, ADHD, and related profiles.", href: "/pediatric-services/social-communication" },
  { icon: Utensils, title: "Pediatric Feeding & Orofacial Myofunctional Therapy", description: "Support for feeding difficulties, oral-motor coordination, tongue posture, and swallowing.", href: "/pediatric-services/feeding-therapy" },
  { icon: Keyboard, title: "Augmentative & Alternative Communication (AAC)", description: "Personalized low- and high-tech AAC systems for non-verbal and emerging communicators.", href: "/pediatric-services/aac-therapy" },
];

export const adultServices: Service[] = [
  { icon: Brain, title: "Aphasia & Cognitive-Communication Therapy", description: "Rehabilitation following Stroke and Traumatic Brain Injury to restore language and cognition.", href: "/adult-services/aphasia-therapy" },
  { icon: Activity, title: "Motor Speech Therapy (Dysarthria & Apraxia)", description: "Improving speech intelligibility, coordination, and motor planning after neurological injury.", href: "/adult-services/motor-speech" },
  { icon: Soup, title: "Dysphagia (Swallowing Rehabilitation)", description: "Comprehensive assessment and therapy for safe, efficient swallowing across diagnoses.", href: "/adult-services/dysphagia-therapy" },
  { icon: Mic2, title: "Clinical Voice & Resonance Therapy", description: "Care for vocal fatigue, hoarseness, resonance disorders, and professional voice users.", href: "/adult-services/voice-therapy" },
  { icon: HeartPulse, title: "Neurodegenerative Management", description: "Long-term communication and swallowing support for Parkinson's, Dementia, and Alzheimer's.", href: "/adult-services/neurodegenerative" },
];
