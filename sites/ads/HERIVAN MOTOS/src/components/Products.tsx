import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_PRODUCT_MSG, PRODUCT_IMAGES } from '../constants';

export default function Products() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Fecha o modal ao pressionar "Esc"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage(e as any);
      if (e.key === 'ArrowLeft') prevImage(e as any);
    };
    
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === PRODUCT_IMAGES.length - 1 ? 0 : prev! + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? PRODUCT_IMAGES.length - 1 : prev! - 1));
  };

  return (
    <section id="motos" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[rgb(219,55,51)] text-xs font-bold uppercase tracking-widest">
            Estoque Disponível
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">
            Nossas Motos
          </h2>
          <p className="text-[rgb(187,189,191)] text-base max-w-xl mx-auto">
            Clique em qualquer moto para ampliar a imagem. Você poderá consultar disponibilidade, valor e condições de financiamento diretamente no WhatsApp.
          </p>
        </div>

        {/* CSS GRID: Substitui o 'columns' antigo para padronizar os tamanhos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCT_IMAGES.map((src, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="cursor-pointer group relative overflow-hidden rounded-lg aspect-square bg-gray-900"
            >
              <img
                src={src}
                alt={`Moto ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex flex-col items-center gap-2 text-white text-center px-2">
                  <Maximize2 size={28} className="text-white" />
                  <span className="text-xs font-bold uppercase tracking-wider">Ampliar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-[rgb(187,189,191)] text-sm mb-5">
            Não encontrou o modelo que procura? Fale conosco e consulte todo o estoque disponível.
          </p>
          <a
            href={`${WHATSAPP_LINK}?text=${WHATSAPP_PRODUCT_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[rgb(219,55,51)] text-white px-8 py-4 rounded font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            Ver Todo o Estoque no WhatsApp
          </a>
        </div>
      </div>

      {/* MODAL / LIGHTBOX */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <X size={36} />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <ChevronLeft size={48} />
          </button>

          <div 
            className="relative max-w-5xl w-full h-full max-h-[80vh] flex flex-col items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar na imagem
          >
            <img
              src={PRODUCT_IMAGES[selectedIndex]}
              alt={`Moto Ampliada ${selectedIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded shadow-2xl"
            />
            
            {/* Botão de WhatsApp flutuante dentro do modal para consultar a moto em destaque */}
            <a
              href={`${WHATSAPP_LINK}?text=${WHATSAPP_PRODUCT_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-16 inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#20bd5a] transition-all duration-200 shadow-lg"
            >
              <MessageCircle size={20} />
              Consultar esta moto
            </a>
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
}