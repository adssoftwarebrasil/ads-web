import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const openWhatsApp = () =>
    window.open('https://wa.me/554933613600', '_blank', 'noopener,noreferrer');

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="lucide lucide-message-circle w-7 h-7 animate-pulse" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco!
      </span>
    </button>
  );
}
