import { Phone } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5591985220505"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 animate-bounce-slow hover:scale-110"
      aria-label="WhatsApp"
    >
      <Phone size={28} />
    </a>
  );
}
