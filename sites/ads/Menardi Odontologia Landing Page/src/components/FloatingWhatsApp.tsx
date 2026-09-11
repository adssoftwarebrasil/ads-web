import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5514996933360"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 group"
      title="Fale Conosco"
    >
      <MessageCircle size={32} className="lucide lucide-message-circle " />
      <span className="absolute right-full mr-3 bg-gray-800 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale Conosco
      </span>
    </a>
  );
}
