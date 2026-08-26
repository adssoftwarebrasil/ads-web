import { useState, useEffect, useRef } from 'react';

const galleryImages = [
  'https://storage.lucasmendes.dev/site-sp/3G%2Fcaixa-som-azul.webp',
  'https://storage.lucasmendes.dev/site-sp/3G%2Fcaixa-som-preta.webp',
  'https://storage.lucasmendes.dev/site-sp/3G%2Fcarregador-portatil-sem-fio.webp',
  'https://storage.lucasmendes.dev/site-sp/3G%2Fsmartwatch%20-%20preto.webp',
  'https://storage.lucasmendes.dev/site-sp/3G%2Fcaixa-fones-redmi.webp',
  'https://storage.lucasmendes.dev/site-sp/3G%2Floja-eletronicos-vitrine-relogios.webp',
  'https://storage.lucasmendes.dev/site-sp/3G%2Fcaixa-som-loja.webp',
  'https://storage.lucasmendes.dev/site-sp/3G%2Fcelular-caixa-redmi.webp',
];

function GalleryItem({ src, index }: { src: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 50);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={itemRef}
      className={`relative overflow-hidden rounded-lg shadow-lg group ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      style={{ transitionDelay: `${index * 50}ms`, transition: 'all 0.5s ease-out' }}
    >
      <div className="aspect-square">
        <img
          src={src}
          alt={`Produto ${index + 1}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#172059]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="py-12 lg:py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#172059] mb-4">
            Conheça Nossa Variedade
          </h2>
          <div className="w-24 h-1 bg-[#81c227] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} src={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
