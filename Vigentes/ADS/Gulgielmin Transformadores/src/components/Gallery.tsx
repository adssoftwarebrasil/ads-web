import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/img/galpao-com-transformadores-cinzas-e-amarelos_1600x1200.webp',
    alt: 'Galpão com transformadores cinzas e amarelos em estoque',
    caption: 'Nosso Galpão Industrial',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/img/transformadores-eletricos-cinzas-industriais-em-estoque_1600x1200.webp',
    alt: 'Transformadores elétricos cinzas industriais em estoque',
    caption: 'Estoque de Transformadores',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/img/transformadores-energia-cinza-empilhados-area-externa_1600x1200.webp',
    alt: 'Transformadores de energia cinzas empilhados em área externa',
    caption: 'Área de Armazenamento Externo',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/img/transformadores-energia-cinza-prontos-armazenados-fabrica_1200x1600.webp',
    alt: 'Transformadores prontos armazenados na fábrica',
    caption: 'Transformadores Prontos para Entrega',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/img/transformador-danificado-bobinas-cobre-estrutura-metalica_1600x1200.webp',
    alt: 'Transformador danificado com bobinas de cobre e estrutura metálica',
    caption: 'Processo de Diagnóstico e Reparo',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/img/transformador-bobinas-cobre-palete-industrial_1200x1600.webp',
    alt: 'Bobinas de cobre de transformador em palete industrial',
    caption: 'Rebobinagem com Cobre de Alta Qualidade',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i! + 1) % IMAGES.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i! - 1 + IMAGES.length) % IMAGES.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-brand-light" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-brand-yellow-4 text-xs font-semibold tracking-widest uppercase block mb-3">
            Nosso Trabalho
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4">
            Qualidade Que{' '}
            <span className="text-brand-yellow-4">Você Pode Ver</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Conheça nossa estrutura e os equipamentos que passam pelo nosso processo técnico.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {IMAGES.map((image, index) => (
            <div
              key={image.src}
              className="animate-on-scroll group relative overflow-hidden rounded-xl cursor-pointer"
              style={{ transitionDelay: `${index * 60}ms` }}
              onClick={() => setLightboxIndex(index)}
            >
              <div
                className={`${
                  index === 0 || index === 4 ? 'aspect-video' : 'aspect-square'
                } md:aspect-square overflow-hidden`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/60 transition-all duration-300 flex items-end">
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4 w-full">
                  <p className="text-white text-sm font-semibold">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-brand-yellow transition-colors p-2 z-10"
            onClick={() => setLightboxIndex(null)}
            aria-label="Fechar"
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-yellow transition-colors p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i! - 1 + IMAGES.length) % IMAGES.length);
            }}
            aria-label="Anterior"
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className="max-w-4xl max-h-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[lightboxIndex].src}
              alt={IMAGES[lightboxIndex].alt}
              className="max-h-[75vh] max-w-full object-contain rounded-lg"
            />
            <p className="text-white/80 text-sm font-medium">{IMAGES[lightboxIndex].caption}</p>
            <p className="text-white/40 text-xs">{lightboxIndex + 1} / {IMAGES.length}</p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-yellow transition-colors p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i! + 1) % IMAGES.length);
            }}
            aria-label="Próxima"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
