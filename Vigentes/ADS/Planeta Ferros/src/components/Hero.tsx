import { ArrowRight, ChevronDown } from 'lucide-react';
import { WA_DEFAULT } from '../data';

const badges = ['Desde 2018', 'Entrega em Palmas e região', 'Orçamento grátis'];

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/images/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-6 pt-24 md:pt-0">
        <div className="flex flex-wrap justify-center gap-2 mb-7">
          {badges.map((badge) => (
            <span
              key={badge}
              className="bg-white/15 backdrop-blur-sm text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full border border-white/25"
            >
              {badge}
            </span>
          ))}
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Material Metálico com Qualidade e Entrega Rápida
        </h1>
        <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
          Telhas galvalume, perfis, metalon e chapas de aço para sua obra. Atendemos construtoras,
          serralheiros e calheiros em Luzimangues e região.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 bg-accent text-white font-bold px-8 py-4 rounded-full text-base md:text-lg hover:scale-105 hover:bg-accent/90 transition-all shadow-2xl shadow-accent/30"
          >
            Pedir Orçamento
            <ArrowRight width={20} height={20} aria-hidden="true" />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 text-white/80 font-medium text-base hover:text-white transition-colors border border-white/30 hover:border-white/60 px-6 py-4 rounded-full backdrop-blur-sm"
          >
            Ver Serviços
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronDown width={28} height={28} className="text-white/40" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
