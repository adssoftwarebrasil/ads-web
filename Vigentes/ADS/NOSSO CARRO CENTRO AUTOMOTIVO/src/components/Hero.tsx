import { Shield, Award, Clock, ChevronDown } from 'lucide-react';

const badges = [
  { icon: Shield, cls: 'lucide lucide-shield text-[#6D94BE]', label: 'Seguro Referenciada' },
  { icon: Award, cls: 'lucide lucide-award text-[#6D94BE]', label: 'Cabine USI ITALIA' },
  { icon: Clock, cls: 'lucide lucide-clock text-[#6D94BE]', label: 'Pátio 24hrs' },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/nosso%20carro%20centro%20automotivo/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#04152D]/95 via-[#031B3A]/80 to-[#031B3A]/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#04152D] via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#174C7E]/40 border border-[#6D94BE]/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#6D94BE] animate-pulse"></span>
            <span className="text-[#6D94BE] text-xs sm:text-sm font-medium tracking-wide uppercase">
              Centro Automotivo em Aracaju
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Seu Carro Merece{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D94BE] to-white">
              Tratamento
            </span>{' '}
            de Excelência
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
            Funilaria, pintura e estética automotiva com tecnologia de ponta. Cabine de pintura
            profissional USI ITALIA e laboratório próprio de tinta — o padrão das montadoras, em
            Sergipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="http://wa.me/557991950295"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#174C7E] hover:bg-[#6D94BE] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#174C7E]/50 hover:-translate-y-0.5 text-base"
            >
              Solicitar Orçamento Gratuito
            </a>
            <button
              onClick={() => scrollTo('services')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 text-base backdrop-blur-sm"
            >
              Nossos Serviços
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.label}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                >
                  <Icon size={14} className={b.cls} />
                  <span className="text-white/80 text-xs font-medium">{b.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors group"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Explorar</span>
        <ChevronDown size={20} className="lucide lucide-chevron-down animate-bounce" />
      </button>
    </section>
  );
}
