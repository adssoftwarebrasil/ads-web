import { MapPin, Star, Clock, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const HERO_BG =
  'https://storage.lucasmendes.dev/site-sp/restaurante%20e%20pousada%20ovomaltine/img/hero-background-predio-laranja-com-ovomaltine-e-estacionamento_850x642.webp';
const WHATSAPP = 'http://wa.me/5524998199101';

const stats = [
  { icon: <Star size={18} className="lucide lucide-star fill-brand-orange text-brand-orange" />, value: '4.4', label: 'Estrelas Google' },
  { icon: <Clock size={18} className="text-brand-orange" />, value: '50+', label: 'Anos de história' },
  { icon: <MapPin size={18} className="text-brand-orange" />, value: 'KM 296', label: 'Rodovia Dutra' },
];

function scrollToCardapio() {
  document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/85 via-brand-dark/70 to-brand-navy/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
      <div className="relative z-10 container-max px-4 md:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange-light text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
            <MapPin size={14} />
            Rodovia Presidente Dutra, KM 296 — Floriano, Barra Mansa – RJ
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
            Sabores de <span className="text-gradient-orange">50 Anos</span> na Beira da Dutra
          </h1>
          <p
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            Restaurante, lanchonete e pousada com aquele gostinho de comida de avó. Desde o
            achocolatado Ovomaltine até refeições caseiras fartas, tudo com preço que cabe no bolso.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up mb-12"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base py-4 px-8 justify-center shadow-lg shadow-brand-orange/30"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              Fale pelo WhatsApp
            </a>
            <button
              className="btn-secondary text-base py-4 px-8 justify-center"
              onClick={scrollToCardapio}
            >
              Ver Cardápio
            </button>
          </div>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3"
              >
                <div className="flex-shrink-0">{s.icon}</div>
                <div>
                  <div className="text-white font-bold text-lg leading-none">{s.value}</div>
                  <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-brand-orange transition-colors duration-200 animate-bounce-subtle"
        aria-label="Rolar para baixo"
        onClick={scrollToCardapio}
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
