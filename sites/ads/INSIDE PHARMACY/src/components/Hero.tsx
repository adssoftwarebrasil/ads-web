import { Star, Shield, Clock, ChevronDown } from 'lucide-react';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const badges = [
  { icon: Star, label: '5 Estrelas no Google' },
  { icon: Shield, label: 'Aprovado pela ANVISA' },
  { icon: Clock, label: 'Entrega Rápida e Segura' },
];

const stats = [
  { value: '35+', label: 'Anos de Expertise' },
  { value: '5.0', label: 'Avaliação Google' },
  { value: '100%', label: 'Aprovado ANVISA' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/inside%20pharmacy/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/80 to-brand-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-2xl xl:max-w-3xl">
          <div className="transition-all duration-700 opacity-100 translate-y-0">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-10 bg-brand-red"></span>
              <span className="text-brand-red text-xs font-semibold uppercase tracking-widest">
                Farmácia de Manipulação — Brasília
              </span>
            </div>
          </div>
          <div className="transition-all duration-700 delay-100 opacity-100 translate-y-0">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6">
              Fórmulas Sob Medida. <span className="text-brand-red">Saúde com</span> Precisão Científica.
            </h1>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-y-0">
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Vitaminas, emagrecedores, cosméticos e medicamentos manipulados com matérias-primas importadas,
              laboratórios segregados e 35 anos de expertise das nossas sócias.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mb-14 transition-all duration-700 delay-300 opacity-100 translate-y-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/40 hover:-translate-y-0.5"
            >
              Solicitar Orçamento
            </a>
            <button
              onClick={() => scrollToSection('sobre')}
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/10"
            >
              Conheça a Farmácia
            </button>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-10 transition-all duration-700 delay-400 opacity-100 translate-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-white/50 text-xs uppercase tracking-wide mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 right-0 w-full max-w-sm lg:max-w-md xl:max-w-lg hidden lg:block">
        <div className="relative mr-8 xl:mr-16">
          <div className="absolute -inset-4 bg-brand-red/10 blur-3xl rounded-full"></div>
          <div className="relative grid grid-cols-3 gap-3">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center gap-3"
                >
                  <div className="w-10 h-10 bg-brand-red/20 rounded-full flex items-center justify-center">
                    <Icon width={18} height={18} strokeWidth={2} className="text-brand-red" />
                  </div>
                  <span className="text-white/70 text-xs leading-snug">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={28} height={28} strokeWidth={2} />
      </button>
    </section>
  );
}
