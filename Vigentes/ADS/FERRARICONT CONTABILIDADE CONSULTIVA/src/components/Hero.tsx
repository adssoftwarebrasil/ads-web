import { Award, ArrowRight, Shield, TrendingUp, ChevronDown } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const badges = [
  { icon: Shield, title: 'Regularização Fiscal', subtitle: '100% dentro da lei' },
  { icon: TrendingUp, title: 'Redução de Impostos', subtitle: 'Planejamento tributário' },
  { icon: Award, title: '+90 Clientes Ativos', subtitle: 'Desde 2022' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/ferraricont%20contabilidade/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/90"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Award size={15} />
          Contabilidade Consultiva em Lucas do Rio Verde - MT
        </div>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Sua Empresa <span className="text-gradient">Crescendo</span> com a Contabilidade{' '}
          <span className="text-gradient">Certa</span>
        </h1>
        <p
          className="text-white/75 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Planejamento tributário, abertura de empresas e consultoria estratégica para quem quer
          lucrar mais, pagar menos impostos e focar no que importa.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="http://wa.me/556596828492?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20FerrariCont."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 rounded-xl shadow-lg shadow-accent/20"
          >
            Quero uma Consultoria Gratuita
            <ArrowRight size={18} />
          </a>
          <button
            onClick={() => scrollToSection('servicos')}
            className="btn-outline text-base px-8 py-4 rounded-xl"
          >
            Conhecer Serviços
          </button>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          {badges.map((b) => (
            <div
              key={b.title}
              className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-4 flex items-center gap-3 text-left hover:bg-white/12 transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <b.icon size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">{b.title}</p>
                <p className="text-white/55 text-xs mt-0.5">{b.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToSection('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-accent transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
