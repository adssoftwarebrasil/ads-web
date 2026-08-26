import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/idea%20vidros/img/hero-background.webp")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#020202]/85 via-[#234E72]/60 to-[#020202]/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 bg-[#EACD68]/20 border border-[#EACD68]/40 text-[#EACD68] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#EACD68] animate-pulse"></span>
          Referência em Vidros e Esquadrias desde 2012
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6">
          Qualidade e Elegância<br />
          <span className="text-[#EACD68]">em Cada Detalhe</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Esquadrias de alumínio, vidros temperados, box para banheiro, espelhos e muito mais. 14 anos transformando espaços em Sorriso e toda a região do Mato Grosso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="http://wa.me/556699856445?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#F60301] hover:bg-red-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-red-500/40 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <WhatsAppIcon width={22} height={22} />
            Solicitar Orçamento Grátis
          </a>
          <button
            onClick={() => scrollTo('servicos')}
            className="flex items-center gap-2 border-2 border-white/40 hover:border-[#EACD68] text-white hover:text-[#EACD68] font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            Conhecer Serviços
            <ChevronDown width={18} height={18} />
          </button>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#EACD68]">14+</div>
            <div className="text-xs text-white/60 mt-1 leading-tight">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#EACD68]">4.5★</div>
            <div className="text-xs text-white/60 mt-1 leading-tight">Avaliação Google</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#EACD68]">100%</div>
            <div className="text-xs text-white/60 mt-1 leading-tight">Compromisso com Qualidade</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#EACD68] transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} />
      </button>
    </section>
  );
}
