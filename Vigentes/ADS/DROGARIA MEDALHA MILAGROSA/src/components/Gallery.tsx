import { useEffect, useRef } from 'react';

const images = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/drogaria-medalha-milagrosa/img/interior-drograria.webp',
    alt: 'Interior da Farmácia Medalha Milagrosa',
    label: 'Interior moderno e organizado',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/drogaria-medalha-milagrosa/img/prateleiras-drogaria.webp',
    alt: 'Prateleiras da Farmácia Medalha Milagrosa',
    label: 'Amplo estoque de produtos',
    span: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/drogaria-medalha-milagrosa/img/atendimento-drogaria.webp',
    alt: 'Atendimento na Farmácia',
    label: 'Atendimento personalizado',
    span: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/drogaria-medalha-milagrosa/img/fachada-drogaria.webp',
    alt: 'Fachada da Farmácia Medalha Milagrosa',
    label: 'Nossa fachada em Ipameri',
    span: 'col-span-2',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="galeria" className="section-padding bg-brand-white" ref={sectionRef}>
      <div className="container-max">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Conheça nosso espaço
          </span>
          <h2 className="section-title">Galeria de Fotos</h2>
          <p className="section-subtitle text-center mx-auto">
            Um ambiente moderno, limpo e organizado para o melhor atendimento.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`reveal rounded-2xl overflow-hidden relative group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-sm">{img.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 reveal">
          <a
            href="https://www.instagram.com/medalha_milagrosa_ipameri/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
