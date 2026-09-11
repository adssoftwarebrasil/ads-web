import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/5561991364565?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/20 transition-all hover:scale-110 hover:shadow-[#25D366]/40 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="relative h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" />
    </a>
  );
}
