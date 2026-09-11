import { ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { scrollToSection } from '../lib/scroll';

const WHATSAPP_URL = 'https://wa.me/556696045793?text=Vim%20pelo%20site';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/hero-background.webp")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[rgb(255,198,45)]/10 border border-[rgb(255,198,45)]/30 text-[rgb(255,198,45)] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[rgb(255,198,45)] animate-pulse"></span>
          Especialistas em Diesel — Sorriso/MT
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-slide-up">
          A Referência em<br />
          <span className="text-[rgb(255,198,45)]">Mecânica Diesel</span>
          <br />
          do Mato Grosso
        </h1>
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up delay-100">
          Mais de <strong className="text-white">21 anos de experiência</strong> em diagnóstico, manutenção e reparo de veículos a diesel. Do carro passeio ao caminhão pesado — resolvemos com precisão e confiança.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[rgb(255,198,45)] text-black font-black px-8 py-4 rounded-full text-base hover:bg-yellow-300 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-yellow-500/20"
          >
            <WhatsAppIcon width={20} height={20} />
            Solicitar Orçamento
          </a>
          <button
            onClick={() => scrollToSection('servicos')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-base hover:border-[rgb(255,198,45)] hover:text-[rgb(255,198,45)] transition-all duration-200"
          >
            Ver Serviços
          </button>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto animate-slide-up delay-300">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-[rgb(255,198,45)]">21+</div>
            <div className="text-xs sm:text-sm text-white/50 mt-1 leading-tight">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-[rgb(255,198,45)]">5.0</div>
            <div className="text-xs sm:text-sm text-white/50 mt-1 leading-tight">Avaliação Google</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-[rgb(255,198,45)]">100%</div>
            <div className="text-xs sm:text-sm text-white/50 mt-1 leading-tight">Compromisso</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[rgb(255,198,45)] transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} />
      </button>
    </section>
  );
}
