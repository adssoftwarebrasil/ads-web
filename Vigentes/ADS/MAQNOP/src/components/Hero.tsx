import { ArrowRight, ChevronDown } from 'lucide-react';

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-blue-dark"
    >
      <div className="absolute inset-0">
        <picture>
          <img
            src="https://storage.lucasmendes.dev/site-sp/maqnop/atualizadas/background-hero.webp"
            alt="Equipamentos MAQNOP"
            className="w-full h-full object-cover object-[center_30%]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue/85 to-brand-blue/70"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <span className="inline-block bg-brand-orange/20 text-brand-orange-light border border-brand-orange/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Sinop e Região - MT
            </span>
          </div>
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Equipamentos de<span className="text-brand-orange"> Alta Performance </span>para Sua Obra
          </h1>
          <p className="animate-fade-in-up animation-delay-200 mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl">
            Aluguel rápido com entrega ágil, equipamentos revisados e o melhor custo-benefício da região. Sua obra não pode esperar.
          </p>
          <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('#equipamentos')}
              className="group bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-xl hover:shadow-brand-orange/30 flex items-center justify-center gap-2"
            >
              Ver Equipamentos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="http://wa.me/556699111966"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-xl hover:shadow-green-500/30 flex items-center justify-center gap-2"
            >
              Faça Seu Orçamento
            </a>
          </div>
          <div className="animate-fade-in-up animation-delay-400 mt-12 flex items-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              Entrega Rápida
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              Equipamentos Revisados
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              Preço Justo
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
