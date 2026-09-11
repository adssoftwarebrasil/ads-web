import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP } from '../data';
import { scrollToSection } from '../utils';

const stats = [
  { value: '10+', label: 'Anos de experiência' },
  { value: '27+', label: 'Veículos em estoque' },
  { value: '100%', label: 'Negociação transparente' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/golden-car/img/hero-background.webp")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black/90 via-brand-black/70 to-brand-black/85"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(at 20% 50%, rgb(245, 223, 108) 0%, transparent 50%), radial-gradient(at 80% 50%, rgb(218, 158, 12) 0%, transparent 50%)',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-golden/30 rounded-full px-4 py-2 mb-8 text-golden text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-golden animate-pulse"></span>
          Mais de 10 anos no mercado de Rondonópolis
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 text-shadow-lg">
          Seu Próximo Carro
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, rgb(245, 223, 108) 0%, rgb(218, 158, 12) 100%)' }}
          >
            Está Aqui
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed text-shadow">
          Veículos seminovos e usados com qualidade garantida, transparência total e as melhores condições de
          financiamento de Rondonópolis e região.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-golden text-base font-bold px-8 py-4 rounded-xl animate-pulse-glow w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar com um Consultor
          </a>
          <button
            onClick={() => scrollToSection('estoque')}
            className="btn-outline-golden text-base font-semibold px-8 py-4 rounded-xl w-full sm:w-auto"
          >
            Ver Estoque Completo
          </button>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black" style={{ color: 'rgb(245, 223, 108)' }}>
                {s.value}
              </div>
              <div className="text-white/60 text-xs mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToSection('estoque')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-golden transition-colors duration-300 animate-bounce"
        aria-label="Scroll para baixo"
      >
        <ChevronDown size={32} className="lucide lucide-chevron-down" />
      </button>
    </section>
  );
}
