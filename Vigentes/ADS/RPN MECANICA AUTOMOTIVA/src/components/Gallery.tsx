import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/fachada-oficina-mecanica-carros-em-reparo_1280x960.webp', alt: 'Fachada da oficina mecânica' },
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/garagem-carros-reparacao-capos-abertos_1280x960.webp', alt: 'Garagem com carros em reparação' },
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-mecanica-carros-em-reparo_1280x960.webp', alt: 'Oficina mecânica em reparo' },
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-carros-fila-reparando-ar-condicionado_1280x960.webp', alt: 'Reparando ar-condicionado' },
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-mecanica-carros-aguardando-reparos_1280x960.webp', alt: 'Carros aguardando reparo' },
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-mecanica-carros-estacionados-dia-ensolarado_1280x960.webp', alt: 'Oficina em dia ensolarado' },
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-mecanica-carros-estacionados-ceu-azul_1280x960.webp', alt: 'Oficina com céu azul' },
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-mecanica-carros-reparando-ar-condicionado_1280x960.webp', alt: 'Reparo de ar-condicionado' },
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/carros-brancos-danificados-em-deposito-com-capo-aberto_1280x960.webp', alt: 'Carros em manutenção' },
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/fachada-mecanica-automotiva-carros-estacionados_1280x960.webp', alt: 'Fachada da mecânica' },
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-reparacao-automoveis-carros-danificados_1280x960.webp', alt: 'Reparação de automóveis' },
  { src: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-mecanica-carros-estacionados-esperando-servico_1280x960.webp', alt: 'Carros esperando serviço' },
];

export default function Gallery() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const elements = [headerRef.current, gridRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.classList.add('observe-animate');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 150);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
      if (e.key === 'ArrowLeft') setLightbox((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  return (
    <section id="galeria" className="section-padding bg-gray-950">
      <div className="container-custom">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-rpn-red text-sm font-semibold uppercase tracking-widest mb-3">
            Nossa galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            A qualidade que você pode ver
          </h2>
          <p className="text-rpn-muted text-lg">
            Confira de perto nossa estrutura, equipe e os serviços realizados com dedicação e profissionalismo.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '1/1' : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover gallery-img"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
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
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 rounded-full bg-white/10 hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null); }}
          >
            <ChevronLeft size={28} />
          </button>

          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 rounded-full bg-white/10 hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => prev !== null ? (prev + 1) % galleryImages.length : null); }}
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightbox + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
