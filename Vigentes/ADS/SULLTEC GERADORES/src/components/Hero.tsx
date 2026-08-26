import { Zap, Shield, Clock, ChevronDown } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/SULLTEC-GERADORES/guindaste-levantando-gerador-sulltec-azul_1536x1024.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 via-brand-blue/75 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Zap width={12} height={12} className="lucide lucide-zap " />
            Energia garantida quando você mais precisa
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 text-shadow-lg">
            Energia Quando
            <br />
            <span className="text-brand-red">Você Precisa</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8 max-w-xl">
            Venda, locação e manutenção de geradores em Santa Catarina.
            Atendemos de 8 kVA a 750 kVA com equipe técnica especializada e
            disponibilidade imediata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-brand-red hover:bg-brand-red-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/40 hover:scale-105 active:scale-95"
            >
              Solicitar Orçamento Grátis
            </button>
            <a
              href="https://wa.me/5548991372058"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:border-white/50 backdrop-blur-sm"
            >
              Falar no WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Shield
                width={16}
                height={16}
                className="lucide lucide-shield text-brand-red"
              />
              <span>Autorizada MWM</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Clock
                width={16}
                height={16}
                className="lucide lucide-clock text-brand-red"
              />
              <span>Atendimento SC</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Zap
                width={16}
                height={16}
                className="lucide lucide-zap text-brand-red"
              />
              <span>8 kVA a 750 kVA</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown
          width={32}
          height={32}
          className="lucide lucide-chevron-down "
        />
      </button>
    </section>
  );
}
