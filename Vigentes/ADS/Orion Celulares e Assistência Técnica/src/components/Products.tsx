import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { openWhatsApp } from '../lib/constants';

interface Product {
  name: string;
  image: string;
  featured?: boolean;
}

const products: Product[] = [
  { name: 'Poco X7', image: 'https://storage.lucasmendes.dev/site-sp/ORION%20CELULARES%20E%20ASSISTENCIA%20TECNICA%2Fcelular-poco-x7.webp', featured: true },
  { name: 'Poco X7 Pro', image: 'https://storage.lucasmendes.dev/site-sp/ORION%20CELULARES%20E%20ASSISTENCIA%20TECNICA%2Fcelular-poco-x7-pro.webp', featured: true },
  { name: 'Redmi A5', image: 'https://storage.lucasmendes.dev/site-sp/ORION%20CELULARES%20E%20ASSISTENCIA%20TECNICA%2Fprodutos%2FRedmi%20A5.webp' },
  { name: 'Redmi 15', image: 'https://storage.lucasmendes.dev/site-sp/ORION%20CELULARES%20E%20ASSISTENCIA%20TECNICA%2Fprodutos%2FRedmi%2015.webp' },
  { name: 'Redmi 15C', image: 'https://storage.lucasmendes.dev/site-sp/ORION%20CELULARES%20E%20ASSISTENCIA%20TECNICA%2Fprodutos%2FRedmi%2015C.webp' },
  { name: 'Redmi Note 14', image: 'https://storage.lucasmendes.dev/site-sp/ORION%20CELULARES%20E%20ASSISTENCIA%20TECNICA%2Fprodutos%2FRedmi%20Note%2014.webp' },
  { name: 'Redmi Note 14 5G', image: 'https://storage.lucasmendes.dev/site-sp/ORION%20CELULARES%20E%20ASSISTENCIA%20TECNICA%2Fprodutos%2FRedmi%20Note%2014%205G.webp' },
  { name: 'Redmi Note 14S', image: 'https://storage.lucasmendes.dev/site-sp/ORION%20CELULARES%20E%20ASSISTENCIA%20TECNICA%2Fprodutos%2FRedmi%20Note%2014S.webp' },
  { name: 'Redmi Note 14 Pro', image: 'https://storage.lucasmendes.dev/site-sp/ORION%20CELULARES%20E%20ASSISTENCIA%20TECNICA%2Fprodutos%2FNote%2014%20Pro.webp' },
  { name: 'Redmi Note 14 Pro+ 5G', image: 'https://storage.lucasmendes.dev/site-sp/ORION%20CELULARES%20E%20ASSISTENCIA%20TECNICA%2Fprodutos%2FRedmi%20Note%2014%20Pro%2B%205G.webp' },
];

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="produtos" className="bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16 fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">Linha Completa Xiaomi em Estoque</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">Trabalhamos com toda a linha de celulares Xiaomi, trazendo produtos originais, os melhores preços e garantia de 1 ano.</p>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-[rgb(231,189,44)] text-black p-3 rounded-full hover:bg-[rgb(241,199,54)] transition-all duration-300 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.name}
                className="min-w-[280px] md:min-w-[320px] snap-center bg-[rgb(20,20,20)] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-transparent hover:border-[rgb(231,189,44)] group"
              >
                <div className="aspect-[3/4] bg-white p-4 flex items-center justify-center relative">
                  {product.featured && (
                    <span className="absolute top-2 right-2 bg-[rgb(231,189,44)] text-black text-xs font-bold px-2 py-1 rounded">DESTAQUE</span>
                  )}
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-3">{product.name}</h3>
                  <button
                    onClick={() => openWhatsApp(`Olá! Gostaria de consultar o preço do ${product.name}.`)}
                    className="w-full border-2 border-[rgb(231,189,44)] text-[rgb(231,189,44)] py-2 rounded-lg font-semibold hover:bg-[rgb(231,189,44)] hover:text-black transition-all duration-300"
                  >
                    Consultar Preço
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-[rgb(231,189,44)] text-black p-3 rounded-full hover:bg-[rgb(241,199,54)] transition-all duration-300 hover:scale-110 "
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-600"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
