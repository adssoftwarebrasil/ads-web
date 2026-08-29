import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Plus } from 'lucide-react';

interface Image {
  url: string;
  alt: string;
}

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  const images: Image[] = [
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0074_10_11zon.jpg',
    alt: 'Quarto LIH 1'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0075_11_11zon.jpg',
    alt: 'Quarto LIH 2'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0076_12_11zon.jpg',
    alt: 'Quarto LIH 3'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0077_13_11zon.jpg',
    alt: 'Quarto LIH 4'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0078_14_11zon.jpg',
    alt: 'Quarto LIH 5'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0079_15_11zon.jpg',
    alt: 'Quarto LIH 6'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0080_16_11zon.jpg',
    alt: 'Quarto LIH 7'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0081_17_11zon.jpg',
    alt: 'Quarto LIH 8'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0082_18_11zon.jpg',
    alt: 'Quarto LIH 9'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0083_19_11zon.jpg',
    alt: 'Quarto LIH 10'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0084_20_11zon.jpg',
    alt: 'Quarto LIH 11'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0085_21_11zon.jpg',
    alt: 'Quarto LIH 12'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0086_22_11zon.jpg',
    alt: 'Quarto LIH 13'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0087_23_11zon.jpg',
    alt: 'Quarto LIH 14'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0088_24_11zon.jpg',
    alt: 'Quarto LIH 15'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0089_25_11zon.jpg',
    alt: 'Quarto LIH 16'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0091_26_11zon.jpg',
    alt: 'Quarto LIH 17'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0092_27_11zon.jpg',
    alt: 'Quarto LIH 18'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0093_28_11zon.jpg',
    alt: 'Quarto LIH 19'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0094_1_11zon.jpg',
    alt: 'Quarto LIH 20'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0095_2_11zon.jpg',
    alt: 'Quarto LIH 21'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0096_3_11zon.jpg',
    alt: 'Quarto LIH 22'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0097_4_11zon.jpg',
    alt: 'Quarto LIH 23'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0098_5_11zon.jpg',
    alt: 'Quarto LIH 24'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0099_6_11zon.jpg',
    alt: 'Quarto LIH 25'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0100_7_11zon.jpg',
    alt: 'Quarto LIH 26'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0101_8_11zon.jpg',
    alt: 'Quarto LIH 27'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/novasfotos/IMG-20251218-WA0102_9_11zon.jpg',
    alt: 'Quarto LIH 28'
  }

  ];

  const visibleImages = images.slice(0, visibleCount);
  const hasMoreImages = visibleCount < images.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, images.length));
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 px-6 py-2 rounded-full mb-6 backdrop-blur-md border border-blue-600/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs md:text-sm font-semibold tracking-widest uppercase">
              Espaços Decorados LIH
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transformação em{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600 italic">Cada Detalhe</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-600/20 -rotate-1" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformamos em experiências de sono inesquecíveis
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeIn"
              style={{ animationDelay: `${(index % 6) * 50}ms` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm font-medium">Ver imagem completa</p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreImages && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Plus className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
              <span>Ver Mais Imagens</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                +{Math.min(6, images.length - visibleCount)}
              </span>
            </button>
          </div>
        )}

        {/* Image Counter */}
        {!hasMoreImages && images.length > 6 && (
          <div className="text-center mt-8">
            <p className="text-gray-600 font-medium">
              Todas as {images.length} imagens carregadas
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all hover:rotate-90"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 md:left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 md:right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all hover:scale-110"
            aria-label="Próxima"
          >
            <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center p-4 md:p-12">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl animate-scaleIn"
              />
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ImageGallery;