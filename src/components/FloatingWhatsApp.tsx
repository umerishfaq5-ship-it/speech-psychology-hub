import { MessageCircle, X, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "923318807617";
const WHATSAPP_MESSAGE = "Hello! I'd like to book an appointment at Clinical Center for Speech & Psychology.";

interface FloatingWhatsAppProps {
  onOpenModal?: () => void;
}

export function FloatingWhatsApp({ onOpenModal }: FloatingWhatsAppProps) {
  const [visible, setVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 1500);
    const t2 = setTimeout(() => { if (!tooltipDismissed) setShowTooltip(true); }, 3000);
    const t3 = setTimeout(() => setShowTooltip(false), 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [tooltipDismissed]);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      style={{
        transform: visible ? "translateY(0)" : "translateY(120px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease",
      }}
    >
      {/* Tooltip bubble */}
      {showTooltip && !menuOpen && (
        <div className="relative flex items-center gap-2 rounded-2xl bg-white border border-border shadow-[var(--shadow-elegant)] px-4 py-3 max-w-[220px] text-sm">
          <button
            onClick={() => { setShowTooltip(false); setTooltipDismissed(true); }}
            className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-muted-foreground/20 flex items-center justify-center"
            aria-label="Dismiss"
          >
            <X className="h-3 w-3" />
          </button>
          <span>💬 Chat on <strong>WhatsApp</strong> or book instantly!</span>
        </div>
      )}

      {/* Expanded mini menu */}
      {menuOpen && (
        <div className="flex flex-col gap-2 items-end">
          {/* Book appointment */}
          <button
            onClick={() => { setMenuOpen(false); onOpenModal?.(); }}
            className="flex items-center gap-2.5 rounded-full bg-speech text-white px-4 py-2.5 text-sm font-semibold shadow-lg hover:opacity-90 transition"
            aria-label="Open booking form"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </button>
          {/* WhatsApp chat */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full text-white px-4 py-2.5 text-sm font-semibold shadow-lg hover:opacity-90 transition"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            onClick={() => setMenuOpen(false)}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Chat
          </a>
        </div>
      )}

      {/* Main FAB button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => { setMenuOpen((o) => !o); setShowTooltip(false); }}
        aria-label={menuOpen ? "Close contact menu" : "Open contact options"}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 active:scale-95"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        {/* Pulse rings — only when closed */}
        {!menuOpen && (
          <>
            <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: "#25D366" }} />
          </>
        )}
        <div className="transition-transform duration-300" style={{ transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
          {menuOpen ? <X className="h-7 w-7 text-white" /> : <MessageCircle className="h-8 w-8 text-white fill-white" strokeWidth={1.5} />}
        </div>
      </button>
    </div>
  );
}
