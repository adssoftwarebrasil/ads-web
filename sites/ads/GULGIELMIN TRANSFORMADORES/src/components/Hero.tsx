import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';

const HERO_BG = 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/img/hero-background.webp';

const HIGHLIGHTS = [
  'Mais de 20 anos de experiência',
  'Atendimento em todo o MT',
  'Diagnóstico técnico gratuito',
];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const headerHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse-slow" />
            <span className="text-brand-yellow text-xs font-semibold tracking-widest uppercase">
              Especialistas em Alta Tensão
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight text-shadow-lg mb-6">
            Rebobinagem de{' '}
            <span className="text-brand-yellow">Transformadores</span>{' '}
            com Precisão Industrial
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
            Mais de 20 anos garantindo a continuidade da sua produção.
            Diagnóstico técnico especializado, manutenção preventiva e
            reparo de transformadores de média tensão em Lucas do Rio Verde — MT.
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90">
                <CheckCircle size={18} className="text-brand-yellow flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5565996248334?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-yellow text-brand-dark font-bold text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-brand-yellow/30"
            >
              Solicitar Orçamento Grátis
              <ArrowRight size={18} />
            </a>
            <button
              onClick={() => scrollToSection('#servicos')}
              className="border-2 border-white/40 text-white font-semibold text-base px-8 py-4 rounded-full hover:border-brand-yellow hover:text-brand-yellow transition-all"
            >
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark/60 to-transparent pointer-events-none" />

      <button
        onClick={() => scrollToSection('#servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-brand-yellow transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
