import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5549999188763"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg transition-all duration-500 hover:scale-110 animate-bounce-in"
      style={{ boxShadow: 'rgba(37, 211, 102, 0.4) 0px 4px 12px' }}
    >
      <MessageCircle size={32} className="text-white animate-pulse-gentle" />
    </a>
  );
}
