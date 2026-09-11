import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

const FILTERS = ['Todos', 'Cortinas', 'Persianas', 'Toldos', 'Papéis de Parede'];

const ITEMS: GalleryItem[] = [
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F1.jpg', alt: 'Galeria 1', category: 'Cortinas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F2.jpg', alt: 'Galeria 2', category: 'Cortinas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F3.jpg', alt: 'Galeria 3', category: 'Cortinas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPersianas%20%2F1.jpeg', alt: 'Galeria 4', category: 'Persianas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPersianas%20%2F2.jpeg', alt: 'Galeria 5', category: 'Persianas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPersianas%20%2F3.jpeg', alt: 'Galeria 6', category: 'Persianas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FToldos%2F1.jpg', alt: 'Galeria 7', category: 'Toldos' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FToldos%2F2.jpeg', alt: 'Galeria 8', category: 'Toldos' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FToldos%2F3.jpeg', alt: 'Galeria 9', category: 'Toldos' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPapeis%20de%20Parede%20%2F1.jpg', alt: 'Galeria 10', category: 'Papéis de Parede' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPapeis%20de%20Parede%20%2F2.jpg', alt: 'Galeria 11', category: 'Papéis de Parede' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPapeis%20de%20Parede%20%2F3.jpg', alt: 'Galeria 12', category: 'Papéis de Parede' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === 'Todos' ? ITEMS : ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossa Galeria</h2>
          <div className="w-24 h-1 bg-[rgb(218,165,33)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Confira alguns de nossos trabalhos e inspire-se</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[rgb(218,165,33)] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.alt}
              onClick={() => setLightbox(item)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-gray-900 font-medium">Ver imagem</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[rgb(218,165,33)] transition-colors"
            aria-label="Fechar"
            onClick={() => setLightbox(null)}
          >
            <X className="lucide lucide-x w-8 h-8" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
