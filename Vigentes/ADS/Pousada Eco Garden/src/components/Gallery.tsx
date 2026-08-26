import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const images = [
    {
      url: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fpiscina-casa-quintal.webp',
      size: 'large',
      category: 'piscina',
      title: 'Área de Piscina',
      description: 'Piscina com vista para o jardim'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fbanheira-janela-paisagem.webp',
      size: 'medium',
      category: 'quarto',
      title: 'Banheira Panorâmica',
      description: 'Relaxamento com vista privilegiada'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fbanheiro-moderno-elegante.webp',
      size: 'small',
      category: 'quarto',
      title: 'Banheiro Premium',
      description: 'Acabamentos modernos e elegantes'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fpaes-cesta-biscoitos.webp',
      size: 'small',
      category: 'gastronomia',
      title: 'Café da Manhã',
      description: 'Delícias artesanais todos os dias'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fvinho-piscina-petiscos.webp',
      size: 'wide',
      category: 'lazer',
      title: 'Momentos Especiais',
      description: 'Área de lazer completa'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fpiscina-palmeiras-cadeiras.webp',
      size: 'large',
      category: 'piscina',
      title: 'Área Externa',
      description: 'Espaço perfeito para relaxar'
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos os Espaços' },
    { id: 'piscina', label: 'Piscina' },
    { id: 'quarto', label: 'Acomodações' },
    { id: 'lazer', label: 'Lazer' },
    { id: 'gastronomia', label: 'Gastronomia' },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImage !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-[#fbfcf2] via-[#f4f5e8] to-[#fbfcf2] overflow-hidden"
    >
      {/* Elementos Decorativos */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#cbd01c]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#cbd01c]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#cbd01c]/15 text-[#2a2d1a] px-6 py-2 rounded-full text-sm font-semibold mb-6 border-2 border-[#cbd01c]/30">
            <Camera className="w-4 h-4" />
            Galeria de Fotos
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-[#2a2d1a] mb-6 leading-tight">
            Conheça Nossos{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#2a2d1a]">Espaços</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-[#cbd01c]/30 -z-0"></span>
            </span>
          </h2>
          
          <p className="text-[#2a2d1a]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Imagens que contam a experiência única e inesquecível da Eco Garden
          </p>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-[#cbd01c] text-[#2a2d1a] shadow-lg scale-105'
                    : 'bg-white/80 text-[#2a2d1a]/70 hover:bg-[#cbd01c]/20 hover:text-[#2a2d1a]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-64 md:h-80 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Overlay escuro no hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a2d1a]/90 via-[#2a2d1a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Ícone de expandir */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                <Maximize2 className="w-5 h-5 text-[#2a2d1a]" />
              </div>

              {/* Informações */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                  {image.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  {image.description}
                </p>
              </div>

              {/* Borda animada */}
              <div className="absolute inset-0 border-4 border-[#cbd01c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Contador de imagens */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#2a2d1a]/60 text-sm md:text-base">
            Mostrando {filteredImages.length} de {images.length} imagens
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Botão Fechar */}
          <button
            className="absolute top-4 right-4 text-white hover:text-[#cbd01c] transition-colors bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 z-50"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          {/* Botão Anterior */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#cbd01c] transition-colors bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed z-50"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            disabled={filteredImages.length <= 1}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Botão Próximo */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#cbd01c] transition-colors bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed z-50"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            disabled={filteredImages.length <= 1}
          >
            <ChevronRight size={32} />
          </button>

          {/* Imagem */}
          <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[lightboxImage].url}
              alt={filteredImages[lightboxImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Informações da imagem */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                {filteredImages[lightboxImage].title}
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                {filteredImages[lightboxImage].description}
              </p>
              <p className="text-white/60 text-sm mt-2">
                {lightboxImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}