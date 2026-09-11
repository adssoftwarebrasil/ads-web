import { useState } from 'react';
import { Plus, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const allImages = [
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/20200629_104717_1_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/20200629_105417_2_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/20200629_110951_3_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/20200629_110954_4_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/20200629_111002_5_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/20200629_112113_7_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/20200629_115503_8_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/20200629_120047_10_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/20200629_121727_11_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/IMG-20200630-WA0017_13_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/IMG-20200630-WA0018_15_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/IMG-20200630-WA0019_16_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/IMG-20200630-WA0020_17_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/IMG-20200630-WA0021_18_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/IMG-20200630-WA0022_19_11zon.jpg",
    "https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/fotoscama/IMG-20200630-WA0023_20_11zon.jpg"
  ];

  const loadMore = () => setVisibleCount(prev => prev + 6);
  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) setSelectedImage((selectedImage + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) setSelectedImage((selectedImage - 1 + allImages.length) % allImages.length);
  };

  return (
    <section id="galeria" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ImageIcon className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Nosso Portfólio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Espaços Decorados LIH
          </h2>
        </div>

        {/* Grid com 3 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.slice(0, visibleCount).map((src, index) => {
            const isLastItem = index === allImages.slice(0, visibleCount).length - 1;
            const isOnlyInLastRow = allImages.slice(0, visibleCount).length % 3 === 1;

            return (
              <div
                key={index}
                onClick={() => openModal(index)}
                className={`relative group overflow-hidden rounded-2xl bg-gray-100 cursor-zoom-in shadow-sm hover:shadow-xl transition-all duration-500 
                  ${isLastItem && isOnlyInLastRow ? 'lg:col-start-2' : ''}`}
              >
                <img
                  src={src}
                  alt={`Ambiente decorado LIH - ${index + 1}`}
                  className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Plus className="text-white w-10 h-10" />
                </div>
              </div>
            );
          })}
        </div>

        {visibleCount < allImages.length && (
          <div className="text-center mt-16">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-primary/40 hover:scale-105"
            >
              Carregar mais inspirações
            </button>
          </div>
        )}
      </div>

      {/* MODAL / LIGHTBOX */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm" onClick={closeModal}>
          <button className="absolute top-6 right-6 text-white" onClick={closeModal}><X className="w-10 h-10" /></button>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img src={allImages[selectedImage]} className="max-w-full max-h-full object-contain rounded-lg" alt="Zoom" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;