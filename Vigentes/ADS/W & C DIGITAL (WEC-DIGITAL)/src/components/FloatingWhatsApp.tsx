import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5584991775185"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-200 pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
