import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/5562993531722?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#07dde5] hover:bg-[#104071] text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
};
