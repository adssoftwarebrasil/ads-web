import { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <a
        href="http://wa.me/556599811065?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Emilia%20Hair%20%26%20Care."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 group"
        style={{ backgroundColor: 'rgb(37, 211, 102)' }}
      >
        <span
          className="absolute inset-0 rounded-full transition-all duration-1000 opacity-0 scale-100"
          style={{ backgroundColor: 'rgb(37, 211, 102)' }}
        ></span>
        <WhatsAppIcon className="w-7 h-7 relative z-10" fill="white" />
        <div className="absolute bottom-16 right-0 bg-white text-stone font-sans text-xs font-medium px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none border border-cream">
          Fale Conosco
        </div>
      </a>
    </div>
  );
}
