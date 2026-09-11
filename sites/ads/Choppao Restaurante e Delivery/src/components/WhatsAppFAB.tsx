import { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_URL = 'http://wa.me/5565981321662';

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      aria-label="Contato via WhatsApp"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-[rgb(71,136,84)] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
        <div className="relative bg-[rgb(37,211,102)] hover:bg-[rgb(32,191,87)] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
          <WhatsAppIcon className="w-9 h-9 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
          1
        </div>
      </div>
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="font-semibold">Faça seu pedido!</p>
      </div>
    </a>
  );
}
