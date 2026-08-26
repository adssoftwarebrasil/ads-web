import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { value: '50+', label: 'Anos no Mercado' },
  { value: '4.7★', label: 'Avaliação no Google' },
  { value: '100%', label: 'Satisfação Garantida' },
];

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/img/hero-att.webp"
          alt="Emilia Hair & Care"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 container-custom pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-gold font-sans text-sm font-medium uppercase tracking-widest">
              50 Anos de Excelência
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight text-shadow mb-6">
            Realce Sua <span className="italic font-normal text-gold">Beleza</span>
            <br />
            Natural
          </h1>
          <p className="font-sans text-base md:text-lg text-white/85 leading-relaxed mb-10 max-w-lg">
            Em Cuiabá, o salão que transforma não apenas o visual, mas eleva sua autoestima e confiança. Somos
            especialistas em beleza feminina com décadas de experiência e dedicação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="http://wa.me/556599811065"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-sm uppercase tracking-wide"
            >
              Agendar Agora
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => scrollTo('servicos')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 hover:border-gold text-white hover:text-gold font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wide"
            >
              Nossos Serviços
            </button>
          </div>
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl md:text-3xl text-gold font-light">{stat.value}</p>
                <p className="font-sans text-xs text-white/70 mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-gold transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={32} height={32} />
      </button>
    </section>
  );
}
