import { Flame, Clock, MapPin, Droplets, ChevronDown } from 'lucide-react';
import { WhatsappIcon } from './icons';
import { scrollToSection, WA_NUMBER } from '../lib';

const stats = [
  { icon: <Clock size={18} strokeWidth={2} />, label: 'Atendimento', value: '07h às 20h' },
  { icon: <MapPin size={18} strokeWidth={2} />, label: 'Atendemos', value: 'Todos os bairros' },
  { icon: <Flame size={18} strokeWidth={2} />, label: 'Gás GLP', value: 'P13, P20, P45' },
  { icon: <Droplets size={18} strokeWidth={2} />, label: 'Água', value: 'Galão 20L' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/rapidao%20gas%20e%20agua/img/hero-background-fachada-laranja-rapidao-gas-motos-estacionadas_4032x3024.webp")',
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(24, 82, 151, 0.82) 0%, rgba(241, 93, 34, 0.75) 60%, rgba(243, 159, 29, 0.6) 100%)',
        }}
      ></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div
          className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/30"
          style={{ backgroundColor: 'rgba(24, 82, 151, 0.5)', backdropFilter: 'blur(8px)' }}
        >
          <Flame size={14} strokeWidth={2} style={{ color: 'rgb(246, 227, 8)' }} />
          Desde 2010 em Primavera do Leste
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-xl">
          Gás e Água
          <br />
          <span style={{ color: 'rgb(246, 227, 8)' }}>na sua porta,</span>
          <br />
          <span className="text-white">rápido e seguro</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow">
          Entrega de gás GLP (P13, P20 e P45) e galões de água com agilidade, preço justo e equipe
          especializada — atendemos todos os bairros de Primavera do Leste.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={`http://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 font-bold text-base px-8 py-4 rounded-full shadow-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-orange-400/40 w-full sm:w-auto justify-center"
            style={{ backgroundColor: 'rgb(241, 93, 34)', color: 'rgb(255, 255, 255)' }}
          >
            <WhatsappIcon width={20} height={20} />
            Pedir pelo WhatsApp
          </a>
          <button
            onClick={() => scrollToSection('contato')}
            className="flex items-center gap-2 font-semibold text-base px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Fazer um pedido
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 rounded-2xl px-3 py-4 text-white"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <span style={{ color: 'rgb(246, 227, 8)' }}>{s.icon}</span>
              <span className="text-xs text-white/70 font-medium">{s.label}</span>
              <span className="text-sm font-bold leading-tight text-center">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToSection('produtos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} strokeWidth={2} />
      </button>
    </section>
  );
}
