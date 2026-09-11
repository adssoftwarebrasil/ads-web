import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/556239267006?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-gentle ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Fale Conosco pelo WhatsApp"
      title="Fale Conosco"
    >
      <MessageCircle size={28} />
      <style>{`
        @keyframes pulse-gentle {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
}
