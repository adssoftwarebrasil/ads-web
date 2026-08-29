import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const images = [
    { url: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Frecepcao-moderna-funeraria.webp', alt: 'Recepção acolhedora' },
    { url: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Fpiso-ornamentado-madeira-funeraria.webp', alt: 'Espaço aconchegante.' },
    { url: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Farea-externa-madeira.webp', alt: 'Área externa com acabamento em madeira' },
    { url: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Fsala-espera-vazia.webp', alt: 'Sala de espera ampla e iluminada' },
    { url: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Fcoroas-flores-cadeiras.webp', alt: 'Espaço para coroas de flores' },
    { url: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Ffuneraria-carros-fachada.webp', alt: 'Nossa fachada com nossos veículos' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Navegação por teclado no lightbox
  useEffect(() => {
    if (lightboxImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      }
    };

    // Previne scroll do body quando lightbox está aberto
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage]);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return;
    
    if (direction === 'prev') {
      setLightboxImage(lightboxImage === 0 ? images.length - 1 : lightboxImage - 1);
    } else {
      setLightboxImage(lightboxImage === images.length - 1 ? 0 : lightboxImage + 1);
    }
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <>
      <section 
        id="galeria" 
        ref={sectionRef} 
        className="relative bg-gradient-to-b from-[#E6F7EA] to-white py-16 md:py-20 lg:py-24 overflow-hidden"
      >
        {/* Decoração de fundo sutil */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#009625] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#dd9a25] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
          {/* Cabeçalho */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#009625] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
              Nossas Instalações
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#4A4A4A] font-bold mb-4">
              Conheça Nossos Espaços
            </h2>
            <p className="text-[#737373] text-base md:text-lg max-w-2xl mx-auto mb-6">
              Ambientes preparados com conforto e acolhimento para você e sua família
            </p>
            <a
              href="https://wa.me/556299223409?text=Olá!%20Gostaria%20de%20conhecer%20as%20instalações%20da%20Funerária%20São%20Paulo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#009625] hover:bg-[#006B1A] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#009625]/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Agendar Visita
            </a>
          </div>

          {/* Grid de imagens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setLightboxImage(index)}
              >
                {/* Container da imagem com aspect ratio */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  {/* Skeleton loader */}
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                  )}
                  
                  <img
                    src={image.url}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imageLoaded[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    } group-hover:scale-110`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                  />
                  
                  {/* Overlay com efeito */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <ZoomIn className="text-white w-10 h-10 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        Ver imagem
                      </span>
                    </div>
                  </div>

                  {/* Label com alt text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox melhorado */}
      {lightboxImage !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300"
          onClick={(e) => {
            if (e.target === lightboxRef.current) {
              setLightboxImage(null);
            }
          }}
        >
          {/* Botão fechar */}
          <button
            className="absolute top-4 right-4 z-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setLightboxImage(null)}
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Botão anterior */}
          <button
            className="absolute left-4 z-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Botão próximo */}
          <button
            className="absolute right-4 z-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Container da imagem */}
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            <img
              src={images[lightboxImage].url}
              alt={images[lightboxImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
            
            {/* Legenda da imagem */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <p className="text-white text-center text-sm md:text-base font-medium">
                {images[lightboxImage].alt}
              </p>
              <p className="text-white/70 text-center text-xs md:text-sm mt-1">
                {lightboxImage + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Indicadores de navegação */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === lightboxImage
                    ? 'bg-white w-8'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(index);
                }}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Dica de navegação */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm hidden md:block">
            Use as setas do teclado para navegar • ESC para fechar
          </div>
        </div>
      )}
    </>
  );
}