import { ShieldCheck, Star, Truck, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection } from '../lib/utils';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/img/frente-fachada-loja-longe.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(105deg, rgba(31, 66, 131, 0.93) 0%, rgba(31, 66, 131, 0.82) 45%, rgba(10, 20, 50, 0.55) 100%)',
        }}
      ></div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <div className="transition-all duration-700 opacity-100 translate-y-0">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{
                backgroundColor: 'rgba(252, 255, 252, 0.15)',
                color: 'rgb(252, 255, 252)',
                border: '1px solid rgba(252, 255, 252, 0.3)',
              }}
            >
              Referência em Autopeças no Maranhão
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6 transition-all duration-700 delay-100 opacity-100 translate-y-0">
            Peças de qualidade para o{' '}
            <span className="relative" style={{ color: 'rgb(255, 193, 7)' }}>
              seu veículo
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mb-8 leading-relaxed transition-all duration-700 delay-200 opacity-100 translate-y-0">
            Para-choques, grades, faróis, lanternas, para-lamas e acessórios com alto padrão de
            qualidade, segurança e o melhor custo-benefício para o seu carro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 opacity-100 translate-y-0">
            <a
              href="http://wa.me/5598985630349?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ backgroundColor: 'rgb(37, 211, 102)', color: 'white' }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Solicitar Orçamento
            </a>
            <button
              onClick={() => scrollToSection('produtos')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 border-white text-white transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95"
              style={{ color: 'white' }}
            >
              Ver Produtos
            </button>
          </div>
          <div className="flex flex-wrap gap-5 transition-all duration-700 delay-500 opacity-100 translate-y-0">
            <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <span style={{ color: 'rgb(255, 193, 7)' }}>
                <ShieldCheck width={18} height={18} className="lucide lucide-shield-check" />
              </span>
              Produtos de qualidade
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <span style={{ color: 'rgb(255, 193, 7)' }}>
                <Star width={18} height={18} className="lucide lucide-star" />
              </span>
              Nota 5.0 no Google
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <span style={{ color: 'rgb(255, 193, 7)' }}>
                <Truck width={18} height={18} className="lucide lucide-truck" />
              </span>
              Atendemos todo o MA
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('produtos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} className="lucide lucide-chevron-down" />
      </button>
    </section>
  );
}
