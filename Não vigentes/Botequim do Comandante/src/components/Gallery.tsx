import { useState } from 'react';
import { X } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const BASE = 'https://storage.lucasmendes.dev/site-sp/botequim%20do%20comandante/img/';

const images = [
  { src: BASE + 'pessoas-jantando-no-bar-comandante-a-noite_1600x1200.webp', alt: 'Clientes jantando no bar à noite', span: 'col-span-2 row-span-1' },
  { src: BASE + 'feijoada-completa-arroz-laranja-couve-e-torresmo_1024x1536.webp', alt: 'Feijoada completa', span: 'col-span-1 row-span-2' },
  { src: BASE + 'assados-sabados-costela-cupim-fraldinha-linguica_1080x1350.webp', alt: 'Churrasco na brasa', span: 'col-span-1 row-span-1' },
  { src: BASE + 'bolinhos-dourados-festival-bar-e-bar-molho_1024x1536.webp', alt: 'Bolinhos dourados', span: 'col-span-1 row-span-1' },
  { src: BASE + 'pessoas-almo-ando-em-restaurante-ao-ar-livre_900x1600.webp', alt: 'Almoço ao ar livre', span: 'col-span-1 row-span-2' },
  { src: BASE + 'petit-gateau-com-sorvete-calda-chocolate_900x1600.webp', alt: 'Petit gâteau com sorvete', span: 'col-span-1 row-span-1' },
  { src: 'https://storage.lucasmendes.dev/site-sp/botequim%20do%20comandante/alteracoes/Mural-Cheio-De-Fotos-Piloto-Em-Varios-Avi%C3%B5es.jpg', alt: 'Mural de fotos com piloto em vários aviões', span: 'col-span-1 row-span-1' },
  { src: BASE + 'pasteis-fritos-cesto-molho-abacate-lima_1024x1536.webp', alt: 'Pastéis fritos', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  const { ref, inView } = useInView(0.1);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-brand-black overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label mb-4">Galeria</p>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">
            O ambiente <span className="text-brand-gold">do Comandante</span>
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto">
            Cada ângulo conta uma história. Do prato ao ambiente, venha descobrir por que tantos clientes se apaixonam.
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} relative overflow-hidden group cursor-pointer`}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-10 transition-all duration-700 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://www.instagram.com/botequimdocomandante/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-outline"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Ver mais no Instagram
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Visualização ampliada"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}