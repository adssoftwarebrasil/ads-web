import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';

export default function ClassicCars() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#classicos');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const cars = [
    {
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Ffusca-amarelo-envelhecido.webp',
      alt: 'Fusca Amarelo Clássico',

      description: 'Peças originais para restauração completa',
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Ffusca-rosa-estacionado-fachada-loja.webp',
      alt: 'Fusca Rosa',

      description: 'Especialistas em modelos vintage',
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Ffusca-preto-estacionado-fachada-loja.webp',
      alt: 'Fusca Vermelho',
 
      description: 'Qualidade e autenticidade garantidas',
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Fcarro-antigo-estacionado-fachada-loja.webp',
      alt: 'Kombi Vermelha',

      description: 'Peças para todos os modelos clássicos',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cars.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [cars.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length);
  };

  return (
    <section 
      id="classicos" 
      className="py-20 lg:py-32 relative overflow-hidden" 
      style={{ backgroundColor: '#0a0d00' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#fdf309' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#f91b0e' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 space-y-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div 
            className="inline-flex items-center px-5 py-2 rounded-full font-bold text-sm tracking-wider shadow-lg"
            style={{ backgroundColor: '#fdf309', color: '#0a0d00' }}
          >
            <Star size={16} className="mr-2" fill="#0a0d00" />
            VEÍCULOS CLÁSSICOS
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight px-4">
            Especialistas em{' '}
            <span className="relative inline-block">
              Carros Antigos
              <svg 
                className="absolute -bottom-2 left-0 w-full" 
                height="12" 
                viewBox="0 0 200 12" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M0 8 Q50 2, 100 8 T200 8" 
                  stroke="#fdf309" 
                  strokeWidth="4" 
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-xl lg:text-2xl max-w-3xl mx-auto" style={{ color: '#ede86f' }}>
            Trabalhamos com as melhores peças para carros antigos e colecionáveis
          </p>
        </div>

        {/* Carousel */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Main Image Container */}
          <div 
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            style={{ height: '550px' }}
          >
            {cars.map((car, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={car.image}
                  alt={car.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Car Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="max-w-2xl space-y-4">
                    <div className="flex items-center space-x-3">
                      <Sparkles size={24} style={{ color: '#fdf309' }} />
                      <span 
                        className="text-lg font-bold tracking-wide"
                        style={{ color: '#fdf309' }}
                      >
                        CLÁSSICO ATEMPORAL
                      </span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-white">
                      {car.title}
                    </h3>
                    <p className="text-xl" style={{ color: '#ede86f' }}>
                      {car.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full backdrop-blur-md transition-all hover:scale-110 hover:shadow-2xl group"
              style={{ backgroundColor: 'rgba(253, 243, 9, 0.9)' }}
              aria-label="Anterior"
            >
              <ChevronLeft 
                size={28} 
                style={{ color: '#0a0d00' }} 
                strokeWidth={3}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full backdrop-blur-md transition-all hover:scale-110 hover:shadow-2xl group"
              style={{ backgroundColor: 'rgba(253, 243, 9, 0.9)' }}
              aria-label="Próximo"
            >
              <ChevronRight 
                size={28} 
                style={{ color: '#0a0d00' }} 
                strokeWidth={3}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {cars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-12 h-3 shadow-lg' 
                    : 'w-3 h-3 hover:scale-125'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? '#fdf309' : 'rgba(253, 243, 9, 0.3)',
                }}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-4 gap-4 mt-10">
            {cars.map((car, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 group ${
                  index === currentIndex 
                    ? 'ring-4 ring-offset-2 ring-offset-black scale-105 shadow-2xl' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
                style={{ 
                  ringColor: '#fdf309',
                  height: '90px'
                }}
              >
                <img
                  src={car.image}
                  alt={car.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                {index === currentIndex && (
                  <div 
                    className="absolute inset-0 border-2"
                    style={{ borderColor: '#fdf309' }}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-16 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="https://wa.me/5545984268490?text=Olá! Tenho interesse em peças para veículos clássicos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 rounded-xl font-bold text-lg shadow-2xl transition-all hover:scale-105 hover:shadow-yellow-500/50"
            style={{ backgroundColor: '#fdf309', color: '#0a0d00' }}
          >
            Encontre Peças para seu Clássico
            <svg 
              className="ml-3 w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}