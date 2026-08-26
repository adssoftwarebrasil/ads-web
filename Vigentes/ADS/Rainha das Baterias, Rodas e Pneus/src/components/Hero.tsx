import { Star, Check, ArrowRight } from 'lucide-react';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const features = ['Atendimento ágil', 'Entrega rápida', 'Alta qualidade'];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] h-auto flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/rainha%20das%20baterias%2Fimg%2Fbaterias-carros-loja.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 lg:py-0">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 lg:mb-8 transition-all duration-1000 opacity-100 translate-y-0">
          <Star size={16} className="text-[rgb(248,203,27)] fill-[rgb(248,203,27)]" />
          <span className="text-white text-xs sm:text-sm font-medium tracking-wide uppercase">
            10 anos de tradição em Anápolis
          </span>
        </div>
        <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 opacity-100 translate-y-0">
          Rainha das Baterias, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(248,203,27)] to-yellow-200">
            Rodas e Pneus
          </span>
        </h1>
        <p className="text-base sm:text-xl text-gray-200 mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 opacity-100 translate-y-0">
          Qualidade garantida e o melhor atendimento da região. Seu carro merece o melhor cuidado com
          quem entende do assunto.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 lg:mb-10 transition-all duration-1000 delay-500 opacity-100 translate-y-0">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[rgb(248,203,27)] flex items-center justify-center">
                <Check size={12} className="text-black stroke-[3]" />
              </div>
              <span className="text-white text-sm sm:text-base font-medium">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 opacity-100 translate-y-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto bg-[rgb(248,203,27)] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#e5bb18] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(248,203,27,0.3)]"
          >
            Solicitar Orçamento
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => scrollToSection('produtos')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            Ver Produtos
          </button>
        </div>
      </div>
    </section>
  );
}
