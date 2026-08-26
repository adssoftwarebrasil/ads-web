import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const whatsappUrl =
  'https://wa.me/5562981611111?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%204K%20Ilumina%C3%A7%C3%A3o%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos.';

export default function WhatsAppButton() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 md:bottom-6 md:right-6 z-50 group transition-all duration-300 ${
        visivel ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      aria-label="Abrir conversa no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/50">
          <MessageCircle size={28} className="text-white md:w-8 md:h-8" />
        </div>
      </div>
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Fale conosco no WhatsApp!
        <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 w-2 h-2 bg-slate-900 rotate-45"></div>
      </div>
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
        1
      </div>
    </a>
  );
}
