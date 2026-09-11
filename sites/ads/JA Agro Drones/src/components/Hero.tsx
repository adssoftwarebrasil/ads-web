import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection } from '../lib/scroll';

const stats = [
  { value: '100%', label: 'Cobertura Nacional' },
  { value: '98%', label: 'Precisão de Aplicação' },
  { value: '3x', label: 'Mais Eficiência' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/img/hero-background.webp"
          alt="JA Agro Drones - Pulverização Aérea"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-[#1a3a0a]/70"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#4a8427]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#4a8427]/10 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#4a8427]/20 border border-[#4a8427]/40 text-[#8fd44e] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#6ab534] animate-pulse"></span>
          Tecnologia de Precisão no Campo
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          O Futuro da{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ab534] to-[#8fd44e]">
            Agricultura
          </span>
          <br />
          Voa com Drones
        </h1>
        <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          Pulverização aérea inteligente, mapeamento de precisão e adubação aérea com tecnologia de ponta. Mais
          produtividade, menos desperdício — atendemos o Brasil inteiro.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="http://wa.me/556295016058?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20JA%20Agro%20Drones."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#4a8427] hover:bg-[#3d6d20] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-2xl hover:shadow-[#4a8427]/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            Solicitar Orçamento
          </a>
          <button
            onClick={() => scrollToSection('servicos')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 backdrop-blur-sm hover:bg-white/10"
          >
            Conhecer Serviços
          </button>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#6ab534]">{s.value}</div>
              <div className="text-xs sm:text-sm text-white/60 mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToSection('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={32} height={32} />
      </button>
    </section>
  );
}
