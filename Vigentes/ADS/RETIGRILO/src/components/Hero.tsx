import { Star, Wrench, Clock, Shield, ChevronDown } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const stats = [
  { value: '17+', label: 'Anos de Experiência' },
  { value: '5.0', label: 'Avaliação Google' },
  { value: '100%', label: 'Comprometimento' },
];

function scrollToServices() {
  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/retigrilo/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/80 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-full lg:max-w-6xl animate-on-scroll visible">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-8">
            <Star className="lucide lucide-star text-primary fill-primary" width={14} height={14} />
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
              Alta Floresta, MT — Referência em Retífica de Motores
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-white leading-[1.1] mb-6 text-shadow-lg lg:max-w-4xl">
            Seu Motor nas
            <span
              className="block text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, rgb(145, 200, 68), rgb(76, 181, 73))' }}
            >
              Mãos Certas
            </span>
          </h1>
          <p className="text-brand-white/80 text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-3xl text-shadow-sm">
            Mais de <strong className="text-primary">17 anos de experiência</strong> em retífica e montagem de
            motores linha leve e pesada. Qualidade, confiança e precisão técnica em cada serviço.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <a
              href="https://wa.me/5566999585577?text=Olá! Vim pelo site e gostaria de um orçamento para retífica de motor."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-brand-dark font-bold px-10 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              <WhatsappIcon className="w-5 h-5 fill-current" />
              Solicitar Orçamento
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-brand-white font-semibold px-10 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Wrench className="lucide lucide-wrench" width={18} height={18} />
              Ver Serviços
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-start lg:justify-between gap-8 border-t border-white/10 pt-10 max-w-4xl">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-primary">{stat.value}</span>
                <span className="text-brand-white/50 text-sm font-medium mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-4 mt-12">
            <div className="flex items-center gap-2 text-brand-white/60 text-sm">
              <Clock className="lucide lucide-clock text-primary" width={16} height={16} />
              <span>Seg-Sex: 07h–11h | 13h–17h</span>
            </div>
            <div className="flex items-center gap-2 text-brand-white/60 text-sm">
              <Shield className="lucide lucide-shield text-primary" width={16} height={16} />
              <span>Serviço com Garantia Nacional</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-white/40 hover:text-primary transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={32} height={32} />
      </button>
    </section>
  );
}
