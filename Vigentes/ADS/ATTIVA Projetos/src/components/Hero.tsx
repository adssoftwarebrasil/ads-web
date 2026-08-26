import { ChevronDown, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de solicitar um orçamento para meu projeto.');
    window.open(`https://wa.me/5562992287419?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/attiva%2Fcasa-moderna-noturna.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateZ(0)',
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary-blue-dark/95 via-primary-blue-dark/80 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 z-20 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 bg-primary-orange/20 border border-primary-orange-light rounded-full mb-6 backdrop-blur-sm animate-fade-in">
            <span className="text-white text-sm font-medium">
              Há 15 anos transformando sonhos em projetos
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Projetos de Arquitetura e Engenharia sob medida para sua obra
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up animation-delay-100">
            Soluções completas em projetos arquitetônicos, estruturais, elétricos e hidrossanitários para a Grande Goiânia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-200">
            <button
              onClick={handleWhatsAppClick}
              className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-orange-light transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Fale com um Especialista
            </button>
            <a
              href="#projetos"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300"
            >
              Conheça Nossos Projetos
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-white animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary-orange-light flex-shrink-0" />
              <span className="text-sm md:text-base">+500 Projetos Realizados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary-orange-light flex-shrink-0" />
              <span className="text-sm md:text-base">Aprovação Garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary-orange-light flex-shrink-0" />
              <span className="text-sm md:text-base">Equipe Especializada</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#credibilidade"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown size={32} />
      </a>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
