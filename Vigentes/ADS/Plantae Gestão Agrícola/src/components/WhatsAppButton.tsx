import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5566992921858"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-[#25D366]/40 hover:scale-105 transition-all duration-200 group"
    >
      <div className="relative">
        <MessageCircle width={24} height={24} className="fill-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white border-2 border-[#25D366] animate-pulse"></span>
      </div>
      <span className="font-black text-sm hidden sm:block">WhatsApp</span>
    </a>
  );
}
