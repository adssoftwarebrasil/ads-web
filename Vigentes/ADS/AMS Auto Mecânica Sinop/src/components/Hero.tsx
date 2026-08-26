import { Star, Clock, MapPin, ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK, scrollToId, WhatsAppIcon } from '../lib/whatsapp';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/ams%20auto%20mecanica%20sinop/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/85 via-brand-blue/70 to-brand-dark/90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Star size={14} className="text-yellow-400 fill-yellow-400" />
          Referência em Mecânica em Sinop – MT desde 2008
        </div>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          style={{ textShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 20px' }}
        >
          Seu Carro Merece <span className="text-brand-red">o Melhor</span>
          <br className="hidden sm:block" /> Cuidado
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-3xl mx-auto mb-10 leading-relaxed">
          Alinhamento, balanceamento, suspensão, motor, câmbio, injeção eletrônica e muito mais. Mais de{' '}
          <strong className="text-white">15 anos</strong> resolvendo problemas de verdade com qualidade e confiança.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon size={22} />
            Falar no WhatsApp
          </a>
          <button
            onClick={() => scrollToId('servicos')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-blue font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-xl"
          >
            Ver Serviços
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white text-sm font-medium col-span-1 last:col-span-2 sm:last:col-span-1 justify-center">
            <Star size={18} className="text-yellow-400" />
            +15 Anos de Experiência
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white text-sm font-medium col-span-1 last:col-span-2 sm:last:col-span-1 justify-center">
            <Clock size={18} className="text-brand-red" />
            Seg–Sex 07h30 às 18h
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white text-sm font-medium col-span-1 last:col-span-2 sm:last:col-span-1 justify-center">
            <MapPin size={18} className="text-brand-red" />
            Sinop e Região
          </div>
        </div>
      </div>
      <a
        href="#servicos"
        onClick={(e) => { e.preventDefault(); scrollToId('servicos'); }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
