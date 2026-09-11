import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fcaminhao-troca-de-vidro.webp',
    title: 'Reparo de Para-Brisa Trincado',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fcarro-branco-oficina-troca-de-vidro.webp',
    title: 'Serviço de Reparo',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fvan-conserto-troca-de-vidro.webp',
    title: 'Instalação Profissional',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fpara-brisas-armazenados-loja.webp',
    title: 'Vidros para Todos os Veículos',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fcaminhonete-preta-oficina-troca-de-vidro.webp',
    title: 'Atendimento Especializado',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fdiferentes-hb20-traseira-troca-de-vidro.webp',
    title: 'Trabalhos Realizados',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fcaminhonete-branca-garagem-troca-de-vidro.webp',
    title: 'Qualidade Garantida',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fdois-carros-suv-troca-de-vidro.webp',
    title: 'Diversos Modelos Atendidos',
  },
];

function ImageModal({ 
  image, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev, 
  currentIndex, 
  totalImages 
}: { 
  image: typeof galleryImages[0] | null; 
  isOpen: boolean; 
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalImages: number;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-[#0298d2] transition-colors p-2 bg-black/50 rounded-full z-50"
        aria-label="Fechar modal"
      >
        <X size={28} />
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#0298d2] transition-colors p-3 bg-black/50 rounded-full z-50 hidden md:block"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#0298d2] transition-colors p-3 bg-black/50 rounded-full z-50 hidden md:block"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={32} />
      </button>

      {/* Image Container */}
      <div 
        className="relative max-w-7xl max-h-[90vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.url}
          alt={image.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        
        {/* Image Info */}
        <div className="mt-4 text-center bg-black/50 rounded-lg px-6 py-3 backdrop-blur-sm">
          <h3 className="text-white text-xl font-semibold mb-1">{image.title}</h3>
          <p className="text-white/70 text-sm">
            {currentIndex + 1} de {totalImages}
          </p>
        </div>

        {/* Mobile Navigation */}
        <div className="flex gap-4 mt-4 md:hidden">
          <button
            onClick={onPrev}
            className="text-white hover:text-[#0298d2] transition-colors p-3 bg-black/50 rounded-full"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={onNext}
            className="text-white hover:text-[#0298d2] transition-colors p-3 bg-black/50 rounded-full"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

function GalleryImage({ 
  image, 
  index, 
  onClick 
}: { 
  image: typeof galleryImages[0]; 
  index: number;
  onClick: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 50);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={imageRef}
      onClick={onClick}
      className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 aspect-square group cursor-pointer ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#012d78]/90 via-[#012d78]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
        <ZoomIn className="text-white mb-3" size={32} />
        <p className="text-white font-semibold text-lg px-4 text-center">
          {image.title}
        </p>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImageIndex(null), 300);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === null ? 0 : (prev + 1) % galleryImages.length
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === null ? 0 : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#0298d2] font-semibold text-sm uppercase tracking-wider bg-[#0298d2]/10 px-4 py-2 rounded-full">
              Nossos Trabalhos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#012d78] mb-4">
            Galeria de Serviços
          </h2>
          <p className="text-xl text-gray-600">
            Atendemos todos os tipos de veículos com excelência
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage 
              key={index} 
              image={image} 
              index={index} 
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      <ImageModal
        image={selectedImageIndex !== null ? galleryImages[selectedImageIndex] : null}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
        currentIndex={selectedImageIndex || 0}
        totalImages={galleryImages.length}
      />
    </section>
  );
}