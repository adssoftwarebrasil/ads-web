import { useState, useEffect } from 'react';
import { ChevronDown, Award } from 'lucide-react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lista de 5 imagens para o carrossel
  const heroImages = [
    'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=speedarena%2FIMG_4282.jpg&version_id=null', // Original
    'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4306_13_11zon.jpg',
    'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4273_12_11zon.jpg',
    'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4452_28_11zon.jpg',
    'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4137_5_11zon.jpg',
  ];

  // Efeito para trocar a imagem a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background Carrossel */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((imgUrl, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
            role="img"
            aria-label={`Imagem de fundo ${index + 1}`}
          />
        ))}
        {/* Overlay Escuro/Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-primary-light/50 z-10" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-up space-y-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Award
              className="w-5 h-5 text-accent-green-vibrant"
              aria-hidden="true"
            />
            <span className="text-sm font-medium">Desde 2022</span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block drop-shadow-lg">Transforme Momentos em</span>
            <span className="block drop-shadow-lg bg-gradient-to-r from-white to-accent-green-vibrant bg-clip-text text-transparent">
              Experiências Inesquecíveis
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
            Beach Tennis • Futevôlei • Vôlei de Areia no coração de Goiânia
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://wa.me/5562983092884?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20o%20aluguel%20de%20uma%20quadra."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent-green-vibrant text-primary-dark px-8 py-4 rounded-full text-lg font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:bg-accent-green-vibrant/90 w-full sm:w-auto"
              aria-label="Alugar quadras"
            >
              <span className="flex items-center justify-center gap-2">
                Aluguel de Quadras
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>

            {/* Botão Aulas alterado para Link */}
            <a
              href="https://speedarenagoiania.com.br/#aulas"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto inline-block text-center"
              aria-label="Ver informações sobre aulas"
            >
              Aulas
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <button
        onClick={() => scrollToSection('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20 hover:scale-110 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
        aria-label="Rolar para próxima seção"
      >
        <ChevronDown className="w-8 h-8 text-white/80" aria-hidden="true" />
      </button>
    </section>
  );
}