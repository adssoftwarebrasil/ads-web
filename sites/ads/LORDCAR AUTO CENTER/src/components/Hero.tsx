import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/556692327182?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o.';

const HIGHLIGHTS = [
  '16+ anos de experiência',
  'Diagnóstico preciso',
  'Prazo cumprido',
];

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
            "url('https://storage.lucasmendes.dev/site-sp/lord%20car%20auto%20center/img/hero-background.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darkgray/95 via-brand-dark/85 to-brand-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgray/80 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Star size={14} className="text-brand-yellow fill-brand-yellow" />
            <span className="text-brand-yellow text-sm font-semibold tracking-wide">
              Auto Center em Sinop · Avaliação 5.0
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
            Seu Carro Merece{' '}
            <span className="text-brand-yellow relative">
              o Melhor
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 3 100 1 150 3C200 5 250 8 298 6"
                  stroke="#FBED00"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </span>{' '}
            Cuidado
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
            Mecânica geral, injeção eletrônica, alinhamento, balanceamento, ar-condicionado e muito mais.
            Qualidade e transparência em cada serviço — sem enrolação, com prazo cumprido.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <CheckCircle2 size={16} className="text-brand-yellow flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-dark font-bold text-base px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-200 hover:shadow-xl hover:shadow-brand-yellow/40 hover:-translate-y-0.5 group"
            >
              Agendar pelo WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full hover:border-brand-yellow hover:text-brand-yellow transition-all duration-200 backdrop-blur-sm"
            >
              Ver Serviços
            </a>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-brand-yellow/20 border-2 border-brand-yellow/40 flex items-center justify-center text-xs text-brand-yellow font-bold"
                >
                  {['N', 'O', 'J', '+'][i - 1]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={13} className="text-brand-yellow fill-brand-yellow" />
                ))}
                <span className="text-white font-bold text-sm ml-1">5.0</span>
              </div>
              <p className="text-white/60 text-xs">+50 clientes satisfeitos</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors group"
        aria-label="Rolar para baixo"
      >
        
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5 group-hover:border-white/60 transition-colors">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}
