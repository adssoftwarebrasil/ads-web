import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <a
          href="https://wa.me/5562991511688?text=Olá!%20Vim%20pelo%20site%20da%20Arte%20e%20Madeira."
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-emerald-600 hover:bg-emerald-500 rounded-full shadow-2xl hover:shadow-emerald-500/50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 animate-pulse decoration-transparent"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="lucide lucide-message-circle text-white w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
