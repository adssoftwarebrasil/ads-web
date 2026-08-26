import { Award, Bike, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const stats = [
  { value: '500+', label: 'Clientes Satisfeitos' },
  { value: '8+', label: 'Anos de Experiência' },
  { value: '1000+', label: 'Bikes Vendidas' },
  { value: '100%', label: 'Qualidade Garantida' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/sj0bike%2Fbicicledas.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-[rgb(253,88,34)]/30"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[rgb(253,88,34)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(253,88,34)]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <div className="inline-flex items-center gap-2 bg-[rgb(253,88,34)]/20 backdrop-blur-sm border border-[rgb(253,88,34)]/50 px-3 py-2 rounded-full mb-6 sm:mb-8 animate-fade-in">
          <Award className="lucide lucide-award w-4 h-4 sm:w-5 sm:h-5 text-[rgb(253,88,34)] flex-shrink-0" />
          <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
            Especialistas em Ciclismo desde 2015
          </span>
        </div>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-up">
          Sua Paixão Por Pedalar
          <span className="block text-[rgb(253,88,34)] mt-2">Começa Aqui</span>
        </h1>
        <p className="text-gray-200 text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 px-4">
          Bicicletas, peças, acessórios e manutenção completa. Qualidade e
          atendimento especializado em Lauro de Freitas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 animate-fade-in-up delay-300 px-4">
          <button
            onClick={() => scrollToSection('produtos')}
            className="group bg-[rgb(253,88,34)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[rgb(230,70,20)] transition-all duration-300 font-semibold text-base sm:text-lg w-full sm:w-auto shadow-lg hover:shadow-[rgb(253,88,34)]/50 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Bike className="lucide lucide-bike w-5 h-5 sm:w-6 sm:h-6" />
            Ver Bicicletas
            <ArrowRight className="lucide lucide-arrow-right w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold text-base sm:text-lg w-full sm:w-auto shadow-lg hover:scale-105 flex items-center justify-center gap-2"
          >
            Agendar Manutenção
            <ArrowRight className="lucide lucide-arrow-right w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-in-up delay-500 px-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[rgb(253,88,34)] mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-white text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block cursor-pointer">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
