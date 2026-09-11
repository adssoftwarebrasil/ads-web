import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5566992236989?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-105 transition-all duration-300 group"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-75"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></span>
      </div>
      <span className="text-sm font-bold whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
