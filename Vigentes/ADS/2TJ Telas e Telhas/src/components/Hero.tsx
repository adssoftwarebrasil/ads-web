import { ArrowRight } from 'lucide-react';
import WhatsAppIcon, { openWhatsApp, scrollToSection } from './WhatsAppIcon';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background:
          'linear-gradient(135deg, rgb(42, 38, 43) 0%, rgb(60, 55, 58) 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-[rgb(238,115,62)] transform -rotate-12"></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-[rgb(238,115,62)] transform -rotate-12"></div>
        <div className="absolute top-0 left-3/4 w-1 h-full bg-[rgb(238,115,62)] transform -rotate-12"></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-[rgb(238,115,62)] transform -rotate-12"></div>
      </div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[rgb(238,115,62)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(238,115,62)] rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white border-opacity-20 mb-6 sm:mb-8 transition-all duration-1000 transform opacity-100 translate-y-0">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs sm:text-sm font-medium">
            Disponível agora para atendimento
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 transform opacity-100 translate-y-0"
          style={{ transitionDelay: '200ms' }}
        >
          Telhas de Zinco
          <br />
          <span className="text-[rgb(238,115,62)]">Sob Medida</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            e Telas de Qualidade
          </span>
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-opacity-90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 transform opacity-100 translate-y-0"
          style={{ transitionDelay: '400ms' }}
        >
          Atendendo o Distrito Federal e Entorno há 3 anos com excelência e
          compromisso
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 transition-all duration-1000 transform opacity-100 translate-y-0"
          style={{ transitionDelay: '600ms' }}
        >
          <button
            onClick={openWhatsApp}
            className="group bg-[rgb(238,115,62)] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-[rgb(218,95,42)] transition-all duration-300 font-semibold text-base sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3 hover:shadow-2xl hover:scale-105 w-full sm:w-auto justify-center"
          >
            <WhatsAppIcon width={24} height={24} />
            Solicitar Orçamento
            <ArrowRight
              width={20}
              height={20}
              strokeWidth={2}
              className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => scrollToSection('produtos')}
            className="group border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white hover:text-[rgb(42,38,43)] transition-all duration-300 font-semibold text-base sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            Nossos Produtos
            <ArrowRight
              width={20}
              height={20}
              strokeWidth={2}
              className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto transition-all duration-1000 transform opacity-100 translate-y-0"
          style={{ transitionDelay: '800ms' }}
        ></div>
        <div
          className="mt-8 sm:mt-12 inline-block bg-gradient-to-r from-[rgb(238,115,62)] to-orange-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-1000 transform opacity-100 translate-y-0"
          style={{ transitionDelay: '1000ms' }}
        ></div>
      </div>
    </section>
  );
}
