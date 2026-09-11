import { Wrench, Shield, Clock, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_BASE, scrollToId } from '../hooks/useInView';

const HERO_BG =
  'https://storage.lucasmendes.dev/site-sp/mecanica%20cordeiro/img/hero-background.webp';

const highlights = [
  { icon: Wrench, title: 'Mecânica Geral', sub: 'Especializada' },
  { icon: Shield, title: 'Garantia', sub: 'nos Serviços' },
  { icon: Clock, title: 'Atendimento', sub: 'Rápido' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")`, backgroundPositionY: '0px' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#30312C]/95 via-[#30312C]/80 to-[#30312C]/50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#30312C]/80 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#E32626]/20 border border-[#E32626]/40 text-[#E32626] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#E32626] rounded-full animate-pulse"></span>
            Nova Referência em Sinop – MT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#FDFDFD] leading-tight mb-6">
            Seu Carro em{' '}
            <span className="text-[#E32626] relative">
              Boas Mãos
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C50 2 100 2 150 4C200 6 250 6 298 2"
                  stroke="#E32626"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
            A <strong className="text-white">Mecânica Cordeiro</strong> oferece
            serviços de qualidade com profissionais experientes, peças originais e
            atendimento honesto. Cuide do seu veículo com quem realmente entende.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E32626] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#c41e1e] hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-[#E32626]/30"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <button
              onClick={() => scrollToId('servicos')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-200"
            >
              Ver Serviços
            </button>
          </div>
          <div className="flex flex-wrap gap-6">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E32626]/20 border border-[#E32626]/30 flex items-center justify-center text-[#E32626]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{h.title}</div>
                    <div className="text-white/60 text-xs">{h.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToId('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
