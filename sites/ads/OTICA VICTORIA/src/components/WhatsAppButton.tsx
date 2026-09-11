import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/5527998695803"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      style={{
        boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)'
      }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={32} className="lg:w-8 lg:h-8" />
    </a>
  );
}
