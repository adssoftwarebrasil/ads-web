import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/solo-eng/escavadeiras-amarelas-construcao.webp"
          alt="Escavadeiras em construção"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-[#cec643]/20 backdrop-blur-sm rounded-full border border-[#cec643]/50">
            <span className="text-[#cec643] font-semibold text-sm sm:text-base">
              Desde 1978 construindo o futuro de Goiânia
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Engenharia de Solos com{' '}
            <span className="text-[#cec643]">Excelência e Tradição</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            Especialistas em terraplanagem, escavações e movimentação de terras.
            Maquinário de última geração e equipe altamente qualificada para
            transformar seu projeto em realidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#cec643] text-[#6c6d71] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#b8b43a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={24} />
            </a>
            <a
              href="tel:+5562999999999"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#6c6d71] transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              <Phone className="mr-2" size={24} />
              Ligar Agora
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-[#cec643] mb-2">46+</div>
              <div className="text-sm sm:text-base text-gray-300">Anos de Experiência</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-[#cec643] mb-2">500+</div>
              <div className="text-sm sm:text-base text-gray-300">Projetos Realizados</div>
            </div>
            <div className="text-center sm:text-left col-span-2 sm:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold text-[#cec643] mb-2">100%</div>
              <div className="text-sm sm:text-base text-gray-300">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}