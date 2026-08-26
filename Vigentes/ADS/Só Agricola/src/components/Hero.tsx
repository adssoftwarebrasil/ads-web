import { ChevronDown } from 'lucide-react';
import { COMPANY } from '../data/constants';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/soagricolas/hero.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/80 via-black/60 to-black/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          Fundada em 2000 — Mais de 25 anos no Agronegócio
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
          Peças e Implementos
          <span className="block text-brand-orange drop-shadow-lg">Agrícolas</span>
          <span className="block text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mt-1">
            de Alta Qualidade
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          {COMPANY.tagline}. Atendemos agricultores e empresas de vários estados com estoque amplo, multimarcas e entrega ágil.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href="#produtos"
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Ver Produtos
          </a>
          <a
            href="#sobre"
            className="w-full sm:w-auto border-2 border-white/60 hover:border-white text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            Conhecer a Empresa
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}