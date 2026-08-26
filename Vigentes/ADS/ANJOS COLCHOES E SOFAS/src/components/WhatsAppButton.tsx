import { MessageCircle } from 'lucide-react';

const WHATSAPP_FLOAT =
  'https://wa.me/559431986888?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20colch%C3%B5es%20e%20sof%C3%A1s.';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_FLOAT}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 animate-pulse group-hover:animate-none" />
      <span className="absolute -top-12 right-0 bg-[#004A69] text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Fale conosco!
      </span>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#1FB855]"></span>
      </span>
    </a>
  );
}
