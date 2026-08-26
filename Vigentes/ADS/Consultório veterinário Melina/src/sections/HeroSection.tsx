import { ArrowRight, Award, Clock, Stethoscope } from 'lucide-react';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = [
    { icon: Award, text: 'Desde 2014' },
    { icon: Clock, text: 'Atendimento Emergencial' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(54,49,87,0.85), rgba(146,71,134,0.75)), url('https://storage.lucasmendes.dev/site-sp/Consult%C3%B3rio%20veterin%C3%A1rio%20Melina%2FMedica-Com-Cachorro-E-Gato-No-Colo.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in-left">
            Cuidado Especializado para Seu Pet no Guará I
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
            Consultório Veterinário com mais de 10 anos de experiência. Atendimento
            humanizado para cães, gatos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-400">
            <a
              href="https://wa.me/5561992486998"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl group"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Conheça Nossos Serviços
            </button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <badge.icon className="w-5 h-5 text-white" />
                <span className="text-white font-medium text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
