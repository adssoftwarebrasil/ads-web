import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50">
      <div className="relative">
        <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-60 animate-pulse-soft"></div>
        <a
          href="https://api.whatsapp.com/send?phone=551636203244&text=Olá! Gostaria de mais informações sobre a escola."
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
          aria-label="WhatsApp"
          style={{ backgroundColor: 'rgb(37, 211, 102)' }}
        >
          <MessageCircle className="lucide lucide-message-circle text-white w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}
