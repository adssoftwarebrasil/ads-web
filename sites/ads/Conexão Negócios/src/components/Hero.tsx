import { CheckCircle2, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../lib/site';

export default function Hero() {
  return (
    <section id="inicio">
      <div className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden group">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
          style={{ backgroundImage: 'url("/hero-bg.jpeg")' }}
        ></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-primary-blue/95 via-primary-blue/80 to-black/60 backdrop-blur-[1px]"></div>
        <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in-up backdrop-blur-md"
            style={{ animationDelay: '0ms' }}
          >
            <CheckCircle2 size={16} strokeWidth={2} className="text-accent-red" />
            <span>Desde 2011 — Referência em Goiânia</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-up opacity-0 drop-shadow-lg max-w-4xl"
            style={{ animationDelay: '100ms' }}
          >
            Especialistas em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Turbinas e Sistema Hidráulico
            </span>
          </h1>
          <h2
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-200 leading-snug mb-8 animate-fade-in-up opacity-0 max-w-2xl"
            style={{ animationDelay: '200ms' }}
          >
            Oficina Referência em Goiânia — Turbinas Linha Leve e Diesel Leve
          </h2>
          <p
            className="text-base sm:text-lg text-gray-300/90 leading-relaxed max-w-[600px] mb-10 animate-fade-in-up opacity-0"
            style={{ animationDelay: '300ms' }}
          >
            Recuperação e venda de turbocompressores com produtos originais e equipe qualificada. Atendemos concessionárias, transportadores, oficinas e consumidor final.
          </p>
          <button
            onClick={openWhatsApp}
            className="group relative inline-flex items-center gap-3 bg-accent-red text-white text-lg font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] active:scale-95 animate-fade-in-up opacity-0"
            style={{ animationDelay: '400ms' }}
          >
            <span className="absolute inset-0 rounded-xl bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <MessageCircle size={24} strokeWidth={2} className="relative" />
            <span className="relative">FALAR NO WHATSAPP</span>
          </button>
          <div className="absolute bottom-[-100px] lg:bottom-[-120px] left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
