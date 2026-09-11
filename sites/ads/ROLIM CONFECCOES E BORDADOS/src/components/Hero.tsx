import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black"
    >
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="mb-6 inline-block"></div>
        <div className="inline-block bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase backdrop-blur-sm">
          Há mais de 30 anos em Sorriso-MT
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 text-shadow-lg">
          Uniformes que<span className="block text-brand-gold"> vestem sua</span>
          <span className="block text-brand-red">identidade</span>
        </h1>
        <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Uniformes escolares, empresariais e profissionais com qualidade impecável e personalização exclusiva para sua empresa ou escola.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5566992236989?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-bold px-8 py-4 rounded-2xl text-base md:text-lg hover:bg-brand-red-dark transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#produtos"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl text-base md:text-lg hover:bg-white/20 transition-all duration-300 hover:shadow-xl"
          >
            Ver Produtos
          </a>
        </div>
      </div>
      <a
        href="#produtos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
