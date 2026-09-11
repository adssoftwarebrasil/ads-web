import { Phone } from 'lucide-react';

export default function FloatingCall() {
  return (
    <a
      href="tel:+14156322837"
      className="fixed bottom-6 right-6 z-50 bg-[#D4AF78] hover:bg-[#B59C6B] text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 animate-pulse-slow group"
      aria-label="Call us now"
    >
      <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-12 right-0 bg-[#1C2A39] text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Call us now!
      </span>
    </a>
  );
}
