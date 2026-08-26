import { useState } from 'react';
import { X } from 'lucide-react';

interface ProductImage {
  src: string;
  alt: string;
}

const categories = [
  'Elevadores Comerciais',
  'Elevadores Panorâmicos',
  'Elevadores de Carga',
  'Plataformas PNE',
  'Escadas e Esteiras',
  'Acessórios',
];

const imagesByCategory: Record<string, ProductImage[]> = {
  'Elevadores Comerciais': [
    {
      src: 'https://storage.lucasmendes.dev/site-sp/advence-elevadores/servicos-produtos/Elevador%20Comercial%20.%201%20%202026-04-01%20at%2013.33.15.webp',
      alt: 'Elevador Comercial 1',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/advence-elevadores/servicos-produtos/Elevador%20Comercial%20.%202%202026-04-01%20at%2013.33.14.webp',
      alt: 'Elevador Comercial 2',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/advence-elevadores/servicos-produtos/Elevador%20Comercial%20.%203%20%202026-04-01%20at%2013.33.12.webp',
      alt: 'Elevador Comercial 3',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/advence-elevadores/servicos-produtos/Elevador%20Comercial.%204%20%202026-04-01%20at%2013.33.11.webp',
      alt: 'Elevador Comercial 4',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/advence-elevadores/elevadores-comerciais/elevadores-comerciais%20(1).webp',
      alt: 'Elevador Comercial 5',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/advence-elevadores/elevadores-comerciais/elevadores-comerciais%20(2).webp',
      alt: 'Elevador Comercial 6',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/advence-elevadores/elevadores-comerciais/elevadores-comerciais%20(3).webp',
      alt: 'Elevador Comercial 7',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/advence-elevadores/elevadores-comerciais/elevadores-comerciais%20(4).webp',
      alt: 'Elevador Comercial 8',
    },
  ],
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [lightbox, setLightbox] = useState<ProductImage | null>(null);

  const images = imagesByCategory[activeCategory] ?? [];

  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[rgb(219,38,27)] text-sm font-bold tracking-widest uppercase">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(42,30,75)] mt-3 mb-5">
            Nossos Produtos e Serviços
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Soluções de elevação para todos os segmentos — residencial, comercial, industrial e
            acessibilidade.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                cat === activeCategory
                  ? 'bg-[rgb(42,30,75)] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-500 opacity-100">
          {images.map((img) => (
            <button
              key={img.src}
              onClick={() => setLightbox(img)}
              className="relative overflow-hidden rounded-2xl aspect-square group cursor-zoom-in"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            aria-label="Fechar"
            onClick={() => setLightbox(null)}
          >
            <X width={32} height={32} className="lucide lucide-x " />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
