import { MapPin, ArrowRight, ChevronDown } from 'lucide-react';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

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
            'url("https://storage.lucasmendes.dev/site-sp/tibola%20pre%20moldados/img/hero-background.webp")',
        }}
      ></div>
      <div className="hero-overlay absolute inset-0"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255, 255, 255, 0.05) 40px, rgba(255, 255, 255, 0.05) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255, 255, 255, 0.05) 40px, rgba(255, 255, 255, 0.05) 41px)',
        }}
      ></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll hero-anim flex items-center justify-center gap-2 mb-6">
          <MapPin
            width={16}
            height={16}
            className="lucide lucide-map-pin text-brand-rust-light"
            style={{ color: 'rgb(160, 75, 55)' }}
          />
          <span className="text-sm font-medium tracking-widest uppercase text-white/70">
            Primavera do Leste – MT
          </span>
        </div>
        <h1 className="animate-on-scroll hero-anim text-shadow-lg text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
          Pré-Moldados de <span style={{ color: 'rgb(200, 120, 90)' }}>Qualidade</span>
          <br />há mais de <span style={{ color: 'rgb(200, 120, 90)' }}>30 Anos</span>
        </h1>
        <p className="animate-on-scroll hero-anim text-shadow text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-4">
          Manilhas, postes, palanques, blocos, caixas sépticas e muito mais. Soluções em concreto
          para construção, drenagem e agropecuária.
        </p>
        <p className="animate-on-scroll hero-anim text-white/60 text-sm mb-10">
          Atendemos Primavera do Leste e toda a região com preços competitivos e entrega ágil.
        </p>
        <div className="animate-on-scroll hero-anim flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="http://wa.me/5566996428111?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            style={{ backgroundColor: 'rgb(120, 53, 35)' }}
          >
            Solicitar Orçamento Grátis
            <ArrowRight
              width={18}
              height={18}
              className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1"
            />
          </a>
          <button
            onClick={() => scrollTo('produtos')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white border border-white/30 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            Ver Nossos Produtos
          </button>
        </div>
        <div className="animate-on-scroll hero-anim mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-white" style={{ color: 'rgb(200, 120, 90)' }}>
              30+
            </div>
            <div className="text-xs text-white/60 mt-1 leading-tight">Anos de Mercado</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-white" style={{ color: 'rgb(200, 120, 90)' }}>
              100%
            </div>
            <div className="text-xs text-white/60 mt-1 leading-tight">Compromisso</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-white" style={{ color: 'rgb(200, 120, 90)' }}>
              MT+
            </div>
            <div className="text-xs text-white/60 mt-1 leading-tight">Regiões Atendidas</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('produtos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} className="lucide lucide-chevron-down" />
      </button>
    </section>
  );
}
