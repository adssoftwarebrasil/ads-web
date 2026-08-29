import { Shield, Award, Clock, ChevronDown } from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_URL } from './icons';
import { scrollToId } from '../hooks/useInView';

const BADGES = [
  { icon: Shield, label: 'Garantia de 1 Ano' },
  { icon: Award, label: '18+ Anos de Experiência' },
  { icon: Clock, label: 'Atendimento Rápido' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/center%20vidros%20e%20aluminios/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 backdrop-blur-sm text-brand-cyan text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse"></span>
            Vidraçaria em São Luís - MA
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Vidros e Alumínio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              com Qualidade
            </span>{' '}
            e Garantia
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            Especialistas em portões de alumínio, portas de vidro temperado, box, janelas e muito mais.
            Há mais de 18 anos transformando espaços em São Luís com excelência e compromisso.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 mb-14 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 shadow-xl shadow-brand-blue/40"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
              Solicitar Orçamento
            </a>
            <button
              onClick={() => scrollToId('servicos')}
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-brand-cyan text-white hover:text-brand-cyan px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
            >
              Ver Serviços
            </button>
          </div>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-xl text-sm font-medium"
              >
                <Icon width={16} height={16} className="text-brand-cyan flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToId('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-float"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} />
      </button>
    </section>
  );
}
