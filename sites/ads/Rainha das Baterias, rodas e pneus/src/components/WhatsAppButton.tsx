import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/scroll';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 animate-pulse hover:scale-110 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Contact via WhatsApp"
      style={{
        backgroundColor: 'rgb(37, 211, 102)',
        boxShadow: 'rgba(37, 211, 102, 0.4) 0px 4px 20px',
      }}
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}
