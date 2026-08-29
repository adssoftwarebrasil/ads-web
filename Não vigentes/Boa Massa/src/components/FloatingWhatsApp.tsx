import { useState, useEffect } from 'react';
import { WHATSAPP_URL } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
          style={{ backgroundColor: 'rgb(255, 220, 2)' }}
        >
          <WhatsAppIcon className="w-9 h-9" fill="rgb(0, 0, 0)" />
        </div>
        <div
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full animate-ping"
          style={{ backgroundColor: 'rgb(255, 220, 2)' }}
        ></div>
        <div
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full"
          style={{ backgroundColor: 'rgb(255, 220, 2)' }}
        ></div>
      </div>
      <div
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2 rounded-lg font-semibold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: 'rgb(255, 220, 2)', color: 'rgb(0, 0, 0)' }}
      >
        Fale Conosco!
      </div>
    </a>
  );
}
