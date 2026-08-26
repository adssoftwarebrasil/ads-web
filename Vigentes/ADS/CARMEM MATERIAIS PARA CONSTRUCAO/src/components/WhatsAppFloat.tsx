import { useEffect, useState } from 'react';
import { WHATSAPP_URL, WhatsAppIcon } from './icons';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-900/40 transition-all duration-500 hover:scale-110 hover:bg-[#1ebe5d] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-50"></span>
      <WhatsAppIcon className="w-7 h-7 fill-white" />
    </a>
  );
}
