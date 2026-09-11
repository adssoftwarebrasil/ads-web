import { WHATSAPP } from "@/i18n/content";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl animate-pulse-ring hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7 text-white" strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}