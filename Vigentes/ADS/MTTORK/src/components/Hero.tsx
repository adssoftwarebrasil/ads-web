import { ChevronDown, Shield, Wrench, Zap } from 'lucide-react';
import { WHATSAPP_URL, HERO_BG_URL, scrollToId } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG_URL}")` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darkDeep/95 via-brand-dark/85 to-brand-dark/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
          Especialistas em Injeção Eletrônica Diesel
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 max-w-5xl mx-auto">
          Seu Motor Diesel{' '}
          <span className="text-brand-red relative">
            Merece
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8C50 2 100 10 150 6C200 2 250 10 298 5"
                stroke="#dd1d25"
                strokeWidth="3"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>{' '}
          o Melhor Diagnóstico
        </h1>
        <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Há mais de 6 anos em Rondonópolis-MT, somos referência em diagnóstico, manutenção e reparo de
          sistemas de injeção diesel para caminhões, máquinas agrícolas, ônibus, vans e utilitários.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Solicitar Orçamento Gratuito
          </a>
          <button
            onClick={() => scrollToId('servicos')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-1 backdrop-blur-sm"
          >
            Ver Nossos Serviços
            <ChevronDown className="lucide lucide-chevron-down " width={18} height={18} />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 text-white/70">
            <Shield className="lucide lucide-shield text-brand-light" width={18} height={18} />
            <span className="text-sm font-medium">Diagnóstico Preciso</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Wrench className="lucide lucide-wrench text-brand-light" width={18} height={18} />
            <span className="text-sm font-medium">Reparo Especializado</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Zap className="lucide lucide-zap text-brand-light" width={18} height={18} />
            <span className="text-sm font-medium">Atendimento Ágil</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToId('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="lucide lucide-chevron-down " width={32} height={32} />
      </button>
    </section>
  );
}
