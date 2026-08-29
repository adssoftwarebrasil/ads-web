import { ArrowRight, ChevronDown } from 'lucide-react';

const stats = [
  { value: '5,0', label: 'Nota no Google' },
  { value: '+50', label: 'Produtos em estoque' },
  { value: '10h', label: 'Jornada de atendimento' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/ferro-e-aco-do-vale/img/hero-background.webp"
          alt="Ferro e Aço do Vale - Estruturas metálicas"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      </div>
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-brand-orange to-transparent opacity-80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse-slow"></span>
            <span className="text-brand-orange text-xs font-semibold tracking-widest uppercase">
              Goiânia · GO desde 2024
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 text-shadow-lg animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            A Matéria-Prima
            <br />
            Certa para a Sua{' '}
            <span className="text-brand-orange relative">
              Obra
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 200 4">
                <path d="M0 2 Q100 0 200 2" stroke="#F48047" strokeWidth="3" fill="none" strokeLinecap="round"></path>
              </svg>
            </span>
          </h1>
          <p
            className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Metalons, perfis enrijecidos, tubos, cantoneiras e muito mais — com qualidade superior, preços
            competitivos e entrega rápida para a sua serralheria.
          </p>
          <div className="flex flex-wrap gap-6 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-black text-brand-orange">{s.value}</span>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="http://wa.me/556295226886?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base py-4 px-8 text-center justify-center sm:justify-start"
            >
              Pedir Orçamento Agora
              <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
            </a>
            <a href="#produtos" className="btn-outline text-base py-4 px-8 text-center justify-center sm:justify-start">
              Conhecer Produtos
            </a>
          </div>
        </div>
      </div>
      <a
        href="#produtos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-brand-orange transition-colors group animate-float"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Rolar</span>
        <ChevronDown className="lucide lucide-chevron-down w-5 h-5" />
      </a>
    </section>
  );
}
