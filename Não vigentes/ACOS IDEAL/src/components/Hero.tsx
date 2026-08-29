import { MessageCircle, Package, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/acoideal/hero.webp"
          alt="Aços Ideal - Produtos de Qualidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(238,51,52)]/60 via-[rgb(63,63,152)]/50 to-[rgb(70,70,70)]/60"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 md:space-y-8">
          {/* Badge */}
          <span className="inline-block bg-[rgb(238,51,52)] text-white px-6 py-2 rounded-full text-sm font-semibold animate-fade-in">
            Desde 2016 no mercado
          </span>

          {/* Main Title */}
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight tracking-tight animate-fade-in-delay-1">
            Aços Ideal
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-3xl text-white/90 font-light animate-fade-in-delay-2">
            Ferro e Aço de Qualidade para sua Obra
          </h2>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-delay-3">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[rgb(238,51,52)] text-white px-10 py-4 rounded-lg font-semibold hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Solicitar Orçamento
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-[rgb(63,63,152)] transition-all flex items-center justify-center gap-2"
            >
              <Package size={20} />
              Ver Produtos
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
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
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }

        .animate-fade-in-delay-3 {
          animation: fadeIn 0.8s ease-out 0.6s both;
        }
      `}</style>
    </section>
  );
}