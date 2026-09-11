import { ChevronDown } from 'lucide-react';
import { WHATSAPP_URL, scrollToId } from '../lib/constants';

const stats = [
  { value: '+30', label: 'Anos de Tradição' },
  { value: '100%', label: 'Qualidade Colonial' },
  { value: 'MT', label: 'Orgulho de Sorriso' },
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
            'url("https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#FF6601]/20 border border-[#FF6601]/40 text-[#FF6601] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          Desde 1994 — Tradição e Sabor em Sorriso-MT
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Sabor Colonial<br />
          <span className="text-[#FF6601]">para sua Mesa</span>
          <br />
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Embutidos e defumados artesanais feitos com capricho, qualidade e o sabor único que só
          30 anos de tradição podem oferecer. Salame, linguiça, copa e muito mais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_URL}
            className="w-full sm:w-auto bg-[#FF6601] hover:bg-[#AF4502] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 uppercase tracking-wide text-center"
          >
            Peça pelo WhatsApp
          </a>
          <button
            onClick={() => scrollToId('produtos')}
            className="w-full sm:w-auto border-2 border-white/40 hover:border-[#FF6601] text-white hover:text-[#FF6601] font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm uppercase tracking-wide"
          >
            Ver Produtos
          </button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#FF6601]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/60 mt-1 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToId('produtos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#FF6601] transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} className="lucide lucide-chevron-down " />
      </button>
    </section>
  );
}
