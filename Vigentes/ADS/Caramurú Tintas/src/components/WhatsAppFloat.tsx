import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/site';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group opacity-100 translate-y-0"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        1
      </span>
      <div className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </a>
  );
}
