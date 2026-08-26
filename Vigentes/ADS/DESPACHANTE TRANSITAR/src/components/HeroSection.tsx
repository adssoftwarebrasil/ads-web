import { useState, useEffect } from 'react';
import { Phone, ArrowDown, FileText, Car, CheckCircle, Star } from 'lucide-react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_34_slider-2-1.jpg',
    'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_35_slider-3-1.jpg',
    'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_37_slider-2-1.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
     <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Background Images com Carousel */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${img})`,
              animation: 'kenburns 20s infinite',
            }}
          />
        </div>
      ))}

      {/* Gradient Overlay - mais escuro no mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-primary/85 md:from-secondary/90 md:via-secondary/85 md:to-primary/75" />

      {/* Ícones Decorativos Flutuantes - apenas desktop */}
      <div className="absolute top-20 left-10 opacity-10 animate-float hidden lg:block">
        <FileText size={80} className="text-white" />
      </div>
      <div className="absolute top-40 right-20 opacity-10 animate-float-delayed hidden lg:block">
        <Car size={100} className="text-white" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-10 animate-float hidden lg:block">
        <CheckCircle size={60} className="text-white" />
      </div>
      <div className="absolute bottom-20 right-40 opacity-10 animate-float-delayed hidden lg:block">
        <Star size={70} className="text-white" />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="w-full max-w-3xl animate-fade-in-up -mt-12 md:-mt-16">
          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-3 md:mb-4 drop-shadow-2xl leading-tight">
            Facilitamos sua Vida no Trânsito
          </h1>

          {/* Subtítulo */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-4 md:mb-6 drop-shadow-lg">
            Serviços Rápidos e Confiáveis
          </h2>

          {/* Descrição */}
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-10 leading-relaxed max-w-2xl drop-shadow">
            Despachante com 20 anos de experiência em Rondonópolis-MT. Resolvemos toda a documentação do seu veículo com agilidade e segurança.
          </p>

          {/* Botões CTA */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
            
            <a href="https://wa.me/556699854973"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-2 md:gap-3"
            >
              <Phone size={20} className="md:w-6 md:h-6" />
              Falar no WhatsApp
            </a>
            <button
              onClick={scrollToServices}
              className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-primary transition-all shadow-2xl"
            >
              Ver Serviços
            </button>
            
            <a href="tel:+556634222732"
              className="bg-accent-vibrant text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-2xl text-center"
            >
              Ligar Agora
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              '20 Anos de Experiência',
              'Atendimento Ágil',
              'Especialistas em PCD',
              'Cadastro ANTT'
            ].map((badge, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-md border border-white/30 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-white font-semibold text-xs md:text-sm animate-slide-in-right"
                style={{ animationDelay: `${1.2 + index * 0.15}s` }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seta para baixo - esconde no mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown size={32} className="text-white/70" />
      </div>

      {/* Animação Ken Burns */}
      <style>{`
        @keyframes kenburns {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;