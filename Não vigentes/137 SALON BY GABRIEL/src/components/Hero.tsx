import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#002C2F] via-[#003840] to-[#002C2F]"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8EFE6] mb-6 leading-tight">
          Beleza, Bem-Estar e<span className="block text-[#F8EFE6] mt-2">Sofisticação</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-[#F8EFE6]/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Descubra o melhor de você no 137 Salon by Gabriel. Profissionais qualificados, produtos
          premium e um atendimento exclusivo em Goiânia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-[#F8EFE6] text-[#002C2F] rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Agende seu Horário
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-transparent border-2 border-[#F8EFE6] text-[#F8EFE6] rounded-full font-semibold text-lg hover:bg-[#F8EFE6] hover:text-[#002C2F] transition-all duration-300"
          >
            Conheça os Serviços
          </a>
        </div>
      </div>
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F8EFE6] animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
}
