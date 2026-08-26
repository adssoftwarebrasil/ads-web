import { useState } from 'react';
import { Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['Todos', 'Puxadores', 'Banheiro', 'Aromas', 'Decoração', 'Loja'];

const galleryItems = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fgaleria%2Fpuxador-dourado-moderno.webp',
    category: 'Puxadores',
    title: 'Puxador dourado moderno',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fgaleria%2Fpuxador-metalico-dourado.webp',
    category: 'Puxadores',
    title: 'Puxador metálico dourado',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fgaleria%2Fpuxadores-metalicos-modernos.webp',
    category: 'Puxadores',
    title: 'Puxadores metálicos modernos',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fgaleria%2Fmetal-dourado-puxador.webp',
    category: 'Puxadores',
    title: 'Puxador de metal dourado',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fgaleria%2Fcorrimaos-metalicos-coloridos.webp',
    category: 'Puxadores',
    title: 'Puxadores para porta de passagem',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fnovas%2Facessorios-metais-dourados.webp',
    category: 'Puxadores',
    title: 'Puxadores de móveis',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fnovas%2Fpuxador-dourado-moderno.webp',
    category: 'Puxadores',
    title: 'Puxador dourado moderno (Detalhe)',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fnovas%2Fpuxadores-armario-criativos.webp',
    category: 'Puxadores',
    title: 'Puxadores de armário criativos',
  },
];

const pages = [1, 2, 3, 4, 5];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activePage, setActivePage] = useState(1);

  const filtered =
    activeCategory === 'Todos'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[rgb(212,171,85)]/10 px-4 py-2 rounded-full mb-4">
            <ImageIcon width={20} height={20} className="text-[rgb(212,171,85)]" />
            <span className="text-sm font-semibold text-[rgb(45,45,45)]">Galeria de Inspirações</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nosso <span className="text-[rgb(212,171,85)]">Catálogo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nossos produtos por categoria ou faça um tour virtual pela nossa loja.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? 'px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-[rgb(212,171,85)] text-white shadow-md transform scale-105'
                  : 'px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 transition-all duration-500 min-h-[400px] items-start">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="group relative w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.67rem)] lg:w-[calc(25%-0.75rem)] aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[rgb(212,171,85)] text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <p className="text-white text-sm font-medium line-clamp-2">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-12 space-x-2 sm:space-x-4">
          <button
            disabled={activePage === 1}
            onClick={() => setActivePage((p) => Math.max(1, p - 1))}
            className={
              activePage === 1
                ? 'p-2 rounded-full transition-colors text-gray-400 cursor-not-allowed'
                : 'p-2 rounded-full transition-colors text-gray-700 hover:bg-[rgb(212,171,85)] hover:text-white'
            }
          >
            <ChevronLeft width={24} height={24} />
          </button>
          <div className="flex space-x-2">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={
                  activePage === page
                    ? 'w-10 h-10 rounded-full font-medium transition-all duration-300 flex items-center justify-center bg-[rgb(212,171,85)] text-white shadow-md'
                    : 'w-10 h-10 rounded-full font-medium transition-all duration-300 flex items-center justify-center bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }
              >
                {page}
              </button>
            ))}
          </div>
          <button
            disabled={activePage === pages.length}
            onClick={() => setActivePage((p) => Math.min(pages.length, p + 1))}
            className={
              activePage === pages.length
                ? 'p-2 rounded-full transition-colors text-gray-400 cursor-not-allowed'
                : 'p-2 rounded-full transition-colors text-gray-700 hover:bg-[rgb(212,171,85)] hover:text-white'
            }
          >
            <ChevronRight width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
