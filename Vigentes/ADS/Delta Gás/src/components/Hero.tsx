import { Flame, Clock, Star, Droplets, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from '../icons';

const stats = [
  { icon: Flame, title: 'Desde 2018', sub: 'Anos de confiança' },
  { icon: Clock, title: '7h às 22h', sub: 'Todos os dias' },
  { icon: Star, title: '5 Estrelas', sub: 'Avaliação no Google' },
  { icon: Droplets, title: 'Sinop-MT', sub: 'Entrega na cidade' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/delta%20gas/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/80 to-brand-secondary/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent"></div>
      <div className="relative z-10 container mx-auto px-4 max-w-6xl py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-light/15 border border-brand-light/30 text-brand-light px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-brand-light rounded-full animate-pulse-slow"></span>
            Entrega Rápida em Sinop-MT
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Gás e Água
            <span className="block text-brand-light">na sua porta</span>
            <span className="block">com agilidade</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            A Delta Gás é a distribuidora mais próxima de você no Residencial Delta. Botijão de gás
            13kg e água mineral com entrega rápida e preços justos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="https://wa.me/556699814075"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-brand-light text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl text-base"
            >
              <WhatsAppIcon size={20} />
              Pedir Gás Agora
            </a>
            <a
              href="#produtos"
              className="flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:border-brand-light hover:text-brand-light transition-all duration-300 text-base"
            >
              Ver Produtos
              <ChevronDown size={18} />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-4 flex flex-col gap-1.5"
                >
                  <div className="text-brand-light">
                    <Icon size={20} />
                  </div>
                  <div className="text-white font-bold text-base">{stat.title}</div>
                  <div className="text-white/60 text-xs">{stat.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <a
        href="#produtos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-brand-light transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
