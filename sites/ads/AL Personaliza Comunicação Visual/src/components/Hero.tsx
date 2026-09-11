import { ArrowRight, ChevronDown } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/al%20personaliza/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#102694]/90 via-[#102694]/75 to-[#3E4194]/80"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FFC734]/10 blur-3xl"></div>
        <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-[#FFC734]/8 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-[#FFC734] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFC734] animate-pulse"></span>
          Mais de 14 anos em Sinop e região
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 max-w-5xl mx-auto">
          Sua marca com mais{' '}
          <span className="text-[#FFC734] relative">
            impacto visual
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10 C50 4, 150 2, 298 8"
                stroke="#FFC734"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              ></path>
            </svg>
          </span>{' '}
          em Sinop
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Comunicação visual completa: fachadas, adesivos, lonas, letras caixa, luminosos, totens e
          muito mais. Do projeto à entrega com excelência e comprometimento.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#FFC734] hover:bg-yellow-400 text-[#102694] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            Solicitar Orçamento Grátis
            <ArrowRight width={18} height={18} strokeWidth={2.5} className="lucide lucide-arrow-right " />
          </a>
          <button
            onClick={() => scrollTo('servicos')}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Nossos Serviços
          </button>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FFC734]">14+</div>
            <div className="text-white/70 text-xs sm:text-sm mt-1">Anos de mercado</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FFC734]">100%</div>
            <div className="text-white/70 text-xs sm:text-sm mt-1">Satisfação garantida</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FFC734]">Sinop</div>
            <div className="text-white/70 text-xs sm:text-sm mt-1">e região</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={28} height={28} strokeWidth={2} className="lucide lucide-chevron-down " />
      </button>
    </section>
  );
}
