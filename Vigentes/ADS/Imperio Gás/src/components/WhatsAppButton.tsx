import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/556281556605"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </a>
  );
}
