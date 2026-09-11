import { CheckCircle, ArrowRight } from 'lucide-react';

const bullets = [
  'Concreto usinado de alta resistência',
  'Bombeamento com precisão e agilidade',
  'Atendimento em até 30 km de Betim',
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/wc-bombeamento-e-concreto/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/20"></div>
      <div className="absolute left-0 top-1/4 w-1 h-40 bg-gradient-to-b from-transparent via-brand-orange to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/15 border border-brand-orange/30 rounded-full mb-6 transition-all duration-700 opacity-100 translate-y-0">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            <span className="text-brand-orange text-sm font-semibold tracking-wide">
              Betim e Região • Nota 4.9 no Google
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-shadow-lg transition-all duration-700 delay-100 opacity-100 translate-y-0">
            Concreto Usinado e <span className="text-brand-orange">Bombeamento</span> com Qualidade Real
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-brand-gray-light leading-relaxed max-w-xl text-shadow transition-all duration-700 delay-200 opacity-100 translate-y-0">
            Entregamos concreto usinado de alta performance diretamente na sua obra. Atendimento ágil,
            equipe preparada e preço justo em Betim, Contagem, Igarapé e região.
          </p>
          <ul className="mt-7 space-y-3 transition-all duration-700 delay-300 opacity-100 translate-y-0">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-brand-gray-light">
                <CheckCircle size={18} className="text-brand-green flex-shrink-0" />
                <span className="text-sm sm:text-base">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 opacity-100 translate-y-0">
            <a
              href="https://wa.me/553199292900?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20concreto%20usinado."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-orange text-brand-dark font-bold text-base rounded-xl hover:bg-amber-400 transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/25 hover:-translate-y-0.5"
            >
              Solicitar Orçamento Grátis
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+553199292900"
              className="flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-white/20 text-brand-white font-semibold text-base rounded-xl hover:border-brand-orange/60 hover:bg-white/5 transition-all duration-200"
            >
              (31) 9 9929-2900
            </a>
          </div>
          <p className="mt-8 text-xs text-brand-gray/70 transition-all duration-700 delay-500 opacity-100">
            Seg–Sex 07h–17h &nbsp;|&nbsp; Betim, MG
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent"></div>
    </section>
  );
}
