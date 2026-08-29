import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';

const HERO_BG = 'https://storage.lucasmendes.dev/site-sp/master%20diagnosticos%20(master%20truck)/img/hero-background.webp';
const WHATSAPP_URL = 'http://wa.me/556596363222?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.';

const BADGES = [
  { icon: ShieldCheck, text: 'Diagnóstico Computadorizado' },
  { icon: Zap, text: 'Atendimento Ágil' },
  { icon: Star, text: '4.8 no Google' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="inicio">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#010101]/95 via-[#010101]/80 to-[#010101]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#F07013]/10 border border-[#F07013]/30 text-[#F07013] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#F07013] rounded-full animate-pulse" />
            Especialistas em Eletrônica de Caminhões
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFFFFD] leading-tight mb-6">
            Seu Caminhão na{' '}
            <span className="text-[#F07013] relative inline-block">
              Estrada
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F07013]/30 rounded-full" />
            </span>{' '}
            sem Interrupções
          </h1>

          <p className="text-[#FFFFFD]/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Reparo de módulos eletrônicos, sistema Arla 32, ECA, chicotes e muito mais.
            Tecnologia avançada e equipe especializada para manter sua frota rodando com máximo desempenho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#F07013] hover:bg-[#d4600f] text-[#FFFFFD] font-bold text-base px-8 py-4 rounded transition-all duration-200 shadow-lg shadow-[#F07013]/20"
            >
              Solicitar Orçamento Gratuito
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <button
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border border-[#FFFFFD]/20 hover:border-[#F07013]/50 text-[#FFFFFD]/80 hover:text-[#F07013] font-semibold text-base px-8 py-4 rounded transition-all duration-200"
            >
              Ver Serviços
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            {BADGES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-[#FFFFFD]/5 border border-[#FFFFFD]/10 px-4 py-2 rounded-full">
                <Icon size={14} className="text-[#F07013]" />
                <span className="text-[#FFFFFD]/70 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[#FFFFFD]/30 text-xs tracking-widest uppercase">Role para ver mais</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#FFFFFD]/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}