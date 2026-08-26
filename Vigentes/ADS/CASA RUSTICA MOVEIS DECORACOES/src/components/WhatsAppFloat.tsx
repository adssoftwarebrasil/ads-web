import { WHATSAPP_MSG, WhatsAppIcon } from '../shared';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_MSG}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </a>
  );
}
