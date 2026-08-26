import { X, ZoomIn } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: 'https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_10_582286920_18393579913121202_7131256032440740867_n_ultra.webp',
      alt: 'Buffet contemporâneo com variedade de pratos',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2FDSC09499_ultra.webp',
      alt: 'Ambiente elegante do restaurante',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_12_581432058_18548340424041023_7935088416451781396_n_ultra.webp',
      alt: 'Pratos quentes do buffet',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_13_580510187_709686312176271_4985612713379077163_n_ultra.webp',
      alt: 'Sucos naturais e bebidas refrescantes',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2Fde151569-c7db-4625-a406-c16e41fe5f40_ultra.webp',
      alt: 'Drinks e bebidas especiais',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_15_580913423_1308464414386454_624162436416713335_n_ultra.webp',
      alt: 'Sobremesas artesanais',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_16_576662460_18392468212121202_3202758875584047937_n_ultra.webp',
      alt: 'Detalhes da culinária contemporânea',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_9_583340182_1566584127715109_7721130945757618077_n_ultra.webp',
      alt: 'Pratos especiais do dia',
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <section ref={sectionRef} id="galeria" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sage uppercase tracking-widest text-sm font-medium">
              Nossos Momentos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-gray mt-2 mb-4 leading-tight">
              Galeria de Fotos
            </h2>
            <p className="text-warm-gray/70 text-lg max-w-3xl mx-auto">
              Confira um pouco do nosso espaço e dos pratos que preparamos com carinho
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
        `}</style>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-primary transition-colors"
            onClick={closeLightbox}
            aria-label="Fechar"
          >
            <X size={36} />
          </button>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-primary transition-colors text-5xl"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-primary transition-colors text-5xl"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Próxima"
          >
            ›
          </button>

          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-full object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {selectedImage + 1} / {images.length}
          </div>

          <style>{`
            @keyframes scale-in {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            .animate-scale-in {
              animation: scale-in 0.3s ease-out;
            }
          `}</style>
        </div>
      )}
    </>
  );
}
