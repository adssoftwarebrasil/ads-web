import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToId } from '../hooks/useReveal';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/saga%20sorriso%20centro%20automotivo/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-[#EF1C1A]/20 border border-[#EF1C1A]/40 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-[#EF1C1A] rounded-full animate-pulse"></span>
          <span className="text-[#FFFEDC] text-xs font-semibold uppercase tracking-widest">
            Centro Automotivo em Sorriso/MT
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight text-shadow mb-6 max-w-5xl">
          Seu Veículo Merece o <span className="text-[#EF1C1A]">Melhor Cuidado.</span>
          <br />
          <span className="text-[#FFFEDC]">Nós Entregamos.</span>
        </h1>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed font-light">
          Mecânica completa, auto elétrica, alinhamento, balanceamento, troca de óleo e muito mais.
          Profissionais qualificados com equipamentos de última geração.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md sm:max-w-none justify-center">
          <a
            href="http://wa.me/5566996116371"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#EF1C1A] hover:bg-[#962A21] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
          >
            <WhatsAppIcon size={20} fill="currentColor" />
            Falar no WhatsApp
          </a>
          <button
            onClick={() => scrollToId('servicos')}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            Nossos Serviços
          </button>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#EF1C1A]">5+</div>
            <div className="text-white/60 text-xs sm:text-sm mt-1 font-medium leading-tight">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#EF1C1A]">5.000+</div>
            <div className="text-white/60 text-xs sm:text-sm mt-1 font-medium leading-tight">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#EF1C1A]">100%</div>
            <div className="text-white/60 text-xs sm:text-sm mt-1 font-medium leading-tight">Comprometimento</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToId('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="lucide lucide-chevron-down " />
      </button>
    </section>
  );
}
