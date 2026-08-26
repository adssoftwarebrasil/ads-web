import { Star, Shield, Clock, ChevronDown } from 'lucide-react';
import { WHATSAPP, WhatsAppIcon } from './icons';
import { scrollToId } from '../useReveal';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/forte%20autoservice%20-%20ps%20auto%20service/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/80 to-brand-blue/60"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
          <Star size={14} className="lucide lucide-star text-yellow-400 fill-yellow-400" />
          <span>Mais de 30 Anos de Excelência em Caminhões</span>
          <Star size={14} className="lucide lucide-star text-yellow-400 fill-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 text-shadow">
          Especialistas em{' '}
          <span className="text-brand-red relative">
            Caminhões
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8C60 3 120 2 150 5C180 8 240 9 298 4" stroke="#F91D25" strokeWidth={3} strokeLinecap="round"></path>
            </svg>
          </span>{' '}
          em Recife
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Peças, mecânica geral, elétrica, injeção eletrônica, freio, suspensão e muito mais. Equipe técnica formada em rede de concessionárias dos maiores fabricantes do mercado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-darkred text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-red-500/40 hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Solicitar Orçamento
          </a>
          <button
            onClick={() => scrollToId('servicos')}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Ver Nossos Serviços
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
            <Shield size={18} className="lucide lucide-shield text-brand-red flex-shrink-0" />
            <span className="text-white text-sm font-medium">30+ Anos de Experiência</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
            <Clock size={18} className="lucide lucide-clock text-brand-red flex-shrink-0" />
            <span className="text-white text-sm font-medium">Atendimento Rápido</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
            <Star size={18} className="lucide lucide-star text-brand-red flex-shrink-0" />
            <span className="text-white text-sm font-medium">Avaliação 5 Estrelas</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToId('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce cursor-pointer"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} className="lucide lucide-chevron-down" />
      </button>
    </section>
  );
}
