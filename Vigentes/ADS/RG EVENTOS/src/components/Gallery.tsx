import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const images = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/multidao-festa-noite-luzes-palco_1280x852.webp',
    alt: 'Multidão em festa noturna com palco iluminado',
    label: 'Shows & Festivais',
    span: 'col-span-2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/noivos-elevando-noiva-em-festa-com-fumaca_1280x1920.webp',
    alt: 'Casamento com efeitos de fumaça',
    label: 'Casamentos',
    span: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/casal-dancando-vestido-azul-palco-iluminado_853x1280.webp',
    alt: 'Casal dançando em palco iluminado',
    label: 'Festas & Aniversários',
    span: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/mulher-vestido-azul-palco-luzes-artificio_853x1280.webp',
    alt: 'Mulher em vestido azul com efeitos especiais',
    label: 'Efeitos Especiais',
    span: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/grupo-pessoas-celebrando-premio-no-palco_1974x1318.webp',
    alt: 'Grupo celebrando prêmio no palco',
    label: 'Eventos Corporativos',
    span: 'col-span-2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/mulher-vestido-azul-festa-palco-iluminado_853x1280.webp',
    alt: 'Mulher no palco iluminado',
    label: 'Iluminação Cênica',
    span: 'col-span-1',
  },
  {
    src: '/img/casamento-palco-led-piso-personalizado.webp',
    alt: 'Casamento com painel de LED, iluminação cênica e piso personalizado',
    label: 'Estrutura Completa',
    span: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/pessoas-palco-evento-merito-lojista-roupas-formais_1974x1318.webp',
    alt: 'Evento corporativo de mérito',
    label: 'Formaturas & Mérito',
    span: 'col-span-2',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, inView } = useInView();

  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + images.length) % images.length : 0));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % images.length : 0));

  return (
    <section id="portfolio" className="py-24 bg-[rgb(3,7,8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#C9962F] text-xs font-bold tracking-widest uppercase mb-3 block">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(245,244,249)] mb-4">
            Eventos que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962F] to-[#F0C060]">
              Ficam na Memória
            </span>
          </h2>
          <p className="text-[rgb(245,244,249)]/60 max-w-xl mx-auto text-base">
            Uma amostra do que entregamos. Cada evento conta uma história de qualidade, técnica e emoção.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span}`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(3,7,8)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[rgb(245,244,249)] font-bold text-sm">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 sm:left-8 text-white/70 hover:text-[#C9962F] transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 sm:right-8 text-white/70 hover:text-[#C9962F] transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={40} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[rgb(245,244,249)] text-sm font-semibold">
            {images[lightbox].label}
          </div>
        </div>
      )}
    </section>
  );
}
