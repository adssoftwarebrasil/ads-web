import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/556285815846" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group" aria-label="Contato via WhatsApp">
      <MessageCircle className="w-7 h-7 animate-pulse" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#024074] text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl font-medium">Agendar Consulta</span>
    </a>
  );
}
