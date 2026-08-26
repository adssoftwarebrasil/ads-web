import { MapPin, Store, ArrowRight, Settings } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 pb-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/novocampo%2Fhero.webp")',
          backgroundPosition: 'center 40%',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A385C]/70 via-[#1A385C]/50 to-[#1A385C]/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/10"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#F8D617] px-4 py-2 rounded-lg mb-6 animate-fade-in-up">
            <MapPin
              width={16}
              height={16}
              className="lucide lucide-map-pin text-[#1A385C]"
            />
            <span className="text-[#1A385C] font-bold text-sm">
              Rio Brilhante - MS
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up leading-tight">
            Peças e Implementos
            <span className="block text-[#F8D617] mt-2 md:mt-3 drop-shadow-lg">
              Agrícolas de Qualidade
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 md:mb-8 animate-fade-in-up animation-delay-200 font-medium max-w-2xl drop-shadow-md">
            Confiabilidade e Soluções Completas para o Campo
          </p>
          <div className="w-16 md:w-24 h-1 bg-[#F8D617] mb-8 md:mb-10 animate-fade-in-up animation-delay-300 shadow-lg"></div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up animation-delay-400 mb-8 md:mb-12">
            <button
              onClick={() => scrollToSection('localizacao')}
              className="group bg-[#F8D617] text-[#1A385C] px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-[#e6c615] transition-all duration-300 hover:shadow-2xl hover:shadow-[#F8D617]/30 hover:scale-105 flex items-center justify-center gap-2 md:gap-3 border-2 border-[#F8D617]"
            >
              <Store
                width={20}
                height={20}
                className="lucide lucide-store sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0"
              />
              <span className="whitespace-nowrap">NOSSAS LOJAS</span>
              <ArrowRight
                width={18}
                height={18}
                className="lucide lucide-arrow-right sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
              />
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="group border-2 border-white/90 bg-white/10 backdrop-blur-md text-white px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-[#1A385C] transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-2 md:gap-3"
            >
              <Settings
                width={20}
                height={20}
                className="lucide lucide-settings sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-500 flex-shrink-0"
              />
              <span className="whitespace-nowrap">BUSCAR PEÇAS</span>
              <ArrowRight
                width={18}
                height={18}
                className="lucide lucide-arrow-right sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
              />
            </button>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/20">
              <span className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse flex-shrink-0"></span>
              <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium">
                <span className="hidden sm:inline">
                  Atendimento especializado • Entrega rápida •{' '}
                </span>
                Garantia de qualidade
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none"></div>
      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce hidden md:block"
        aria-label="Rolar para baixo"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7 7m7 7V3"
          />
        </svg>
      </button>
    </section>
  );
}
