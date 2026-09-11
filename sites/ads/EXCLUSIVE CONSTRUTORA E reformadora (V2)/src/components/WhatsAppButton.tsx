import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const linkWhatsapp = 'https://wa.me/5562993531722?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento.';

  return (
    <a
      href={linkWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#07dde5] hover:bg-[#0a154b] text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse flex items-center justify-center cursor-pointer"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};