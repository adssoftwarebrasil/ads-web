import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function WhatsAppFloat() {
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
      className={`fixed bottom-6 right-6 w-16 h-16 bg-[rgb(218,185,165)] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[rgb(198,165,145)] hover:scale-110 transition-all duration-300 z-[9999] ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="lucide lucide-message-circle text-white"
      />
    </a>
  );
}
