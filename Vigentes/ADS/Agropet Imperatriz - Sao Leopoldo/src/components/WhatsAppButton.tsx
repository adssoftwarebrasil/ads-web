import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5551989963719"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group animate-pulse hover:animate-none"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle width={32} height={32} className="text-white" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">
        Fale Conosco!
      </span>
    </a>
  );
}
