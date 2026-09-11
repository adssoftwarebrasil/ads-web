import { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

// Dados simplificados, sem a propriedade 'span'
const images = [
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FFachada-De-Lado.jpg', label: 'Fachada' },
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2Frecepcao%2Fimage%20%281204%29.png', label: 'Recepção' },
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2Frecepcao%2Fimage%20%281205%29.png', label: 'Recepção' },
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FArea-Cafe-Da-Manha.jpg', label: 'Café da Manhã' },
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FArea-Cafe-Da-Manha2.jpg', label: 'Café da Manhã' },
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuite15%2Fimage%20%281202%29.png', label: 'Suíte 15' },
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuite15%2Fimage%20%281203%29.png', label: 'Suíte 15' },
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuite16%2Fimage%20%281195%29.png', label: 'Suíte Master' },
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuites17%2Fimage%20%281198%29.png', label: 'Suíte Premium' },
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuites17%2Fimage%20%281199%29.png', label: 'Suíte Premium' },
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FQuartosAvulsos%2F3344da17-774b-45e7-863f-444e62e2f050.jpg', label: 'Suíte Simples' },
  { url: 'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FQuartosAvulsos%2Faa7f0647-8e32-488d-b7db-72b2b26e783f.jpg', label: 'Suíte Simples' },
];

export default function Gallery() {
  const { ref, inView } = useInView();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Funções de navegação envoltas em useCallback para estabilidade
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  }, []);

  // Adiciona navegação por teclado (Seta Esq, Seta Dir, Esc)
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Trava o scroll da página ao abrir o modal
    document.body.style.overflow = 'hidden'; 

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Restaura o scroll ao fechar
      document.body.style.overflow = ''; 
    };
  }, [lightboxIndex, nextImage, prevImage, closeLightbox]);

  return (
    <section id="galeria" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho - Mantido */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Galeria
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Conheça o Hotel Avalon
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Explore cada espaço do nosso hotel e descubra o ambiente que te aguarda.
          </p>
        </div>

        {/* Grid de Imagens Uniforme */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {images.map((img, i) => (
            <div
              key={i}
              // aspect-square força todas as células a serem quadradas
              className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-square shadow-sm hover:shadow-lg transition-shadow duration-300"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.url}
                alt={img.label}
                // object-cover garante que a imagem preencha o quadrado sem distorcer
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy" // Melhora performance
              />
              {/* Overlay de Hover mais sutil */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2 transform translate-y-2 group-hover:translate-y-0">
                  <ZoomIn size={24} className="text-white" />
                  <span className="text-white text-xs font-medium uppercase tracking-wider bg-gold/80 px-3 py-1 rounded-full">
                    Visualizar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox Profissional */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-navy/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fadeIn"
          onClick={closeLightbox} // Fecha ao clicar no fundo
        >
          {/* Botão Fechar - Topo Direita */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all z-50"
            onClick={closeLightbox}
            aria-label="Fechar galeria"
          >
            <X size={24} />
          </button>
          
          {/* Botão Anterior */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-4 transition-all z-50 focus:ring-2 focus:ring-gold outline-none"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Container da Imagem com Animação de Troca */}
          <div 
            key={lightboxIndex} // Key força re-render para acionar animação ao trocar
            className="relative max-w-7xl max-h-[85vh] flex items-center justify-center animate-scaleIn"
            onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar na imagem
          >
            <img
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].label}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border-4 border-white/10"
            />
            
            {/* Legenda e Contador Inferior */}
            <div className="absolute -bottom-12 left-0 right-0 text-center flex flex-col items-center gap-1">
              <p className="text-white text-lg font-medium font-serif">
                {images[lightboxIndex].label}
              </p>
              <p className="text-gold text-sm font-mono tracking-widest bg-navy/50 px-3 py-0.5 rounded-full">
                {lightboxIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Botão Próximo */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-4 transition-all z-50 focus:ring-2 focus:ring-gold outline-none"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Próxima imagem"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}