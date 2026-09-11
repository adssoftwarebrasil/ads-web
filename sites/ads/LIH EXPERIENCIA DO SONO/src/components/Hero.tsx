import { MessageCircle, ArrowDown, Check, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const highlights = [
    { text: 'Mais de 20 anos de expertise' },
    { text: 'Materiais internacionais premium' },
    { text: 'Experiência hotel 5 estrelas' }
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-24 md:pt-28 lg:pt-32 pb-24 md:pb-32 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div 
          className={`flex flex-col items-center text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge Original */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full mb-6 backdrop-blur-md border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs md:text-sm font-semibold tracking-widest uppercase">
              Experiência do Sono de Luxo
            </span>
          </div>

          {/* H1 Original com quebra de linha */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.15] mb-6">
            O Melhor Sono da{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary italic">Sua Vida</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -rotate-1" />
            </span>
            <span className="block mt-2">Começa Aqui</span>
          </h1>

          {/* P Original */}
          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-8 max-w-2xl">
            Transformamos quartos em experiências de hotel 5 estrelas.
            Descubra o sono restaurador que você merece.
          </p>

          {/* Highlights Originais */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mb-8 w-full max-w-3xl">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                  <Check className="w-3 h-3 text-primary" strokeWidth={4} />
                </div>
                <span className="text-gray-700 font-medium text-sm">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs Originais */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
            <a
              href="https://wa.me/5562981369983?text=Olá,%20acabei%20de%20visitar%20o%20seu%20site%20e%20gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Consulte Especialista</span>
            </a>

            <button
              onClick={() => scrollToSection('produtos')}
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary font-bold px-8 py-4 rounded-full transition-all duration-300"
            >
              <ArrowDown className="w-5 h-5" />
              Ver Produtos
            </button>
          </div>

          {/* Container do Vídeo - Abaixo do texto, Responsivo e Arredondado */}
          <div className="relative w-full max-w-5xl mx-auto px-2 md:px-0">
            <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3.5rem] shadow-2xl bg-black aspect-video">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/cama-arrumada-planta.webp"
                className="w-full h-full object-cover"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>


              {/* Overlay suave para o vídeo não ficar "seco" */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;