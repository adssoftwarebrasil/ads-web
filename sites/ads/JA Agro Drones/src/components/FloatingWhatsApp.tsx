import { useEffect, useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [bubble, setBubble] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          bubble ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <div className="bg-white text-gray-800 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-xl whitespace-nowrap relative">
          Fale conosco agora!
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
        </div>
      </div>
      <a
        href="http://wa.me/556295016058?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20JA%20Agro%20Drones."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato pelo WhatsApp"
        onClick={() => setBubble(false)}
        className="relative w-14 h-14 bg-[#25d366] hover:bg-[#20b858] rounded-full flex items-center justify-center shadow-2xl shadow-[#25d366]/40 hover:shadow-[#25d366]/60 hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20"></span>
        <WhatsAppIcon className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
