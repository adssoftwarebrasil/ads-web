import { useState } from 'react';
import { X } from 'lucide-react';

type Category = 'Todos' | 'Cortinas' | 'Persianas' | 'Toldos' | 'Papéis de Parede';

const categories: Category[] = ['Todos', 'Cortinas', 'Persianas', 'Toldos', 'Papéis de Parede'];

interface GalleryItem {
  src: string;
  alt: string;
  category: Exclude<Category, 'Todos'>;
}

const items: GalleryItem[] = [
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F1.jpg', alt: 'Trabalho 1', category: 'Cortinas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F2.jpg', alt: 'Trabalho 2', category: 'Cortinas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F3.jpg', alt: 'Trabalho 3', category: 'Cortinas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F4.jpeg', alt: 'Trabalho 4', category: 'Cortinas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPersianas%20%2F1.jpeg', alt: 'Trabalho 5', category: 'Persianas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPersianas%20%2F2.jpeg', alt: 'Trabalho 6', category: 'Persianas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPersianas%20%2F3.jpeg', alt: 'Trabalho 7', category: 'Persianas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPersianas%20%2F4.jpeg', alt: 'Trabalho 8', category: 'Persianas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FToldos%2F1.jpg', alt: 'Trabalho 9', category: 'Toldos' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FToldos%2F2.jpeg', alt: 'Trabalho 10', category: 'Toldos' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FToldos%2F3.jpeg', alt: 'Trabalho 11', category: 'Toldos' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FToldos%2F4.jpeg', alt: 'Trabalho 12', category: 'Toldos' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPapeis%20de%20Parede%20%2F1.jpg', alt: 'Trabalho 13', category: 'Papéis de Parede' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPapeis%20de%20Parede%20%2F2.jpg', alt: 'Trabalho 14', category: 'Papéis de Parede' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPapeis%20de%20Parede%20%2F3.jpg', alt: 'Trabalho 15', category: 'Papéis de Parede' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPapeis%20de%20Parede%20%2F4.jpg', alt: 'Trabalho 16', category: 'Papéis de Parede' },
];

export default function Gallery() {
  const [active, setActive] = useState<Category>('Todos');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'Todos' ? items : items.filter((i) => i.category === active);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(114,115,119)] mb-4">Nossa Galeria</h2>
          <div className="w-24 h-1 bg-[rgb(207,173,109)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Confira alguns dos nossos trabalhos e inspire-se para seu projeto
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? 'px-6 py-2.5 rounded-full font-medium transition-all duration-300 bg-[rgb(207,173,109)] text-white shadow-lg scale-105'
                  : 'px-6 py-2.5 rounded-full font-medium transition-all duration-300 bg-gray-100 text-[rgb(114,115,119)] hover:bg-gray-200'
              }
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.alt}
              onClick={() => setLightbox(item.src)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square cursor-zoom-in"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
            className="absolute top-6 right-6 text-white"
          >
            <X width={32} height={32} />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
