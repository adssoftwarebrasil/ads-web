import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5566999996760"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Chamar no WhatsApp"
    >
      <span className="bg-white text-gray-700 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
        Chamar no WhatsApp
      </span>

      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#006633] animate-ping opacity-25" />
        <div className="relative w-14 h-14 rounded-full bg-[#006633] hover:bg-[#008844] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110">
          <MessageCircle size={28} className="text-white" />
        </div>
      </div>
    </a>
  );
}
