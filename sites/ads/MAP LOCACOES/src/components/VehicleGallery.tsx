import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function VehicleGallery() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const vehicles = [
    {
      url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=map-locacoes%2Fnovasfotos%2Fmoto-cinza_2_11zon.jpg&version_id=null',
      alt: 'Moto prateada com cliente MAP Locações',
    },
    {
      url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=map-locacoes%2Fnovasfotos%2Fmoto-verde_3_11zon.jpg&version_id=null',
      alt: 'Moto verde Honda alugada',
    },
    {
      url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=map-locacoes%2Fnovasfotos%2Fmoto-vermelha_4_11zon.jpg&version_id=null',
      alt: 'Moto vermelha e preta disponível',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/map-locacoes%2Fmotos-capacete-tanque.webp',
      alt: 'Motos com capacetes e equipamentos de segurança',
    },
    {
      url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=map-locacoes%2Fnovasfotos%2Fvarias-motos_5_11zon.jpg&version_id=null',
      alt: 'Exposição de motos disponíveis para locação',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/map-locacoes%2Fmotos-locacao-vantagens.webp',
      alt: 'Vantagens de alugar motos na MAP Locações',
    },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % vehicles.length);
    }
  };

  const previousImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + vehicles.length) % vehicles.length);
    }
  };

  // Fechar modal com ESC
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
  };

  return (
    <>
      <section id="veiculos" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Nossa Frota de Veículos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Motos e carros em perfeito estado para você
            </p>
          </div>

          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className={`relative overflow-hidden rounded-xl shadow-lg group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={vehicle.url}
                    alt={vehicle.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay com ícone de zoom */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-90">
                    <ZoomIn className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Badge de número */}
                <div className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            
              <a href="#contato"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              Consultar Disponibilidade
            </a>
          </div>
        </div>
      </section>

      {/* MODAL DE IMAGEM */}
      {isModalOpen && selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Botão Fechar */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 group"
            aria-label="Fechar modal"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Contador de imagens */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold">
            {selectedImage + 1} / {vehicles.length}
          </div>

          {/* Botão Anterior */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="absolute left-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110 group"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Imagem Principal */}
          <div
            className="relative max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={vehicles[selectedImage].url}
              alt={vehicles[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fade-in"
            />

            {/* Descrição da imagem */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-center text-lg font-medium">
                {vehicles[selectedImage].alt}
              </p>
            </div>
          </div>

          {/* Botão Próximo */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110 group"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Miniaturas */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4 py-2 bg-black/50 backdrop-blur-md rounded-full scrollbar-hide">
            {vehicles.map((vehicle, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  selectedImage === index
                    ? 'border-primary scale-110 shadow-lg'
                    : 'border-white/30 hover:border-white/60 hover:scale-105'
                }`}
              >
                <img
                  src={vehicle.url}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
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
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}