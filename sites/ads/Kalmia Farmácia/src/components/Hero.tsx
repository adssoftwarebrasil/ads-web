import { Star, ArrowRight, Shield, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/75 to-brand-green/60"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Star size={14} className="lucide lucide-star text-brand-mint fill-brand-mint" />
            <span className="text-white text-sm font-medium">
              Avaliação 5.0 ★ no Google — Mais de 20 anos de excelência
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Sua saúde é a nossa <span className="text-brand-mint">melhor fórmula</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
            Desde 2004, manipulamos fórmulas personalizadas com excelência para humanos e animais.
            Dermocosméticos, suplementos, fitoterápicos e muito mais — criados especialmente para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="http://wa.me/5516991594153"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-mint text-brand-green font-bold px-8 py-4 rounded-full text-base hover:bg-white hover:text-primary transition-all duration-200 shadow-xl hover:shadow-brand-mint/30 hover:scale-105"
            >
              Consultar minha fórmula
              <ArrowRight size={18} className="lucide lucide-arrow-right" />
            </a>
            <a
              href="#produtos"
              className="flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/15 transition-all duration-200 backdrop-blur-sm"
            >
              Ver produtos
            </a>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-8 h-8 rounded-full bg-brand-mint/20 flex items-center justify-center">
                <Shield size={16} className="lucide lucide-shield text-brand-mint" />
              </div>
              <span className="text-sm font-medium">Fórmulas personalizadas</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-8 h-8 rounded-full bg-brand-mint/20 flex items-center justify-center">
                <Leaf size={16} className="lucide lucide-leaf text-brand-mint" />
              </div>
              <span className="text-sm font-medium">Práticas sustentáveis</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-8 h-8 rounded-full bg-brand-mint/20 flex items-center justify-center">
                <Star size={16} className="lucide lucide-star text-brand-mint" />
              </div>
              <span className="text-sm font-medium">Atendimento especializado</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Saiba mais</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-full"></div>
      </div>
    </section>
  );
}
