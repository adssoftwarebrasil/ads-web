import { Shield, Clock, Star, ArrowRight, ChevronDown } from 'lucide-react';
import { scrollToSection } from '../lib/utils';

const stats = [
  { value: '10+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Obras Entregues' },
  { value: '5.0', label: 'Avaliação Google' },
  { value: '100%', label: 'Satisfação Garantida' },
];

const trust = [
  { icon: Shield, label: 'Garantia em todos os serviços' },
  { icon: Clock, label: 'Entrega dentro do prazo' },
  { icon: Star, label: 'Nota 5.0 no Google' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/sorrimac/img/hero-background.webp")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/75 to-brand-gray/60"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-orange/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/5 w-96 h-96 rounded-full bg-brand-gray/10 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="reveal flex items-center gap-3 mb-6 animate-fade-in-up">
            <div className="flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 px-4 py-2 rounded-full">
              <Shield className="lucide lucide-shield text-brand-orange" width={14} height={14} />
              <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">
                10 Anos de Excelência em Sorriso - MT
              </span>
            </div>
          </div>
          <h1 className="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 animate-delay-100 animate-fade-in-up">
            Construção a Seco com{' '}
            <span className="text-brand-orange relative">
              Qualidade Real
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C60 3 140 1 298 6" stroke="rgb(245,139,50)" strokeWidth="3" strokeLinecap="round" opacity="0.5"></path>
              </svg>
            </span>
          </h1>
          <p className="reveal text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl animate-delay-200 animate-fade-in-up">
            Especialistas em <strong className="text-white">Gesso, Drywall e Steel Frame</strong> em Sorriso e região. Materiais premium, mão de obra qualificada e entrega dentro do prazo — do orçamento à obra finalizada.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 mb-12 animate-delay-300 animate-fade-in-up">
            <a
              href="https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20gratuito."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 shadow-lg shadow-brand-orange/25 justify-center"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="lucide lucide-arrow-right" width={18} height={18} />
            </a>
            <button
              onClick={() => scrollToSection('servicos')}
              className="btn-outline text-base px-8 py-4 border-white/30 text-white hover:border-brand-orange justify-center"
            >
              Ver Nossos Serviços
            </button>
          </div>
          <div className="reveal flex flex-wrap gap-4 animate-delay-400 animate-fade-in-up">
            {trust.map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-brand-orange">
                  <t.icon className="lucide" width={14} height={14} />
                </span>
                {t.label}
              </div>
            ))}
          </div>
        </div>
        <div className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-delay-500 animate-fade-in-up">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-3xl font-extrabold text-brand-orange mb-1">{s.value}</div>
              <div className="text-white/70 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToSection('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={32} height={32} />
      </button>
    </section>
  );
}
