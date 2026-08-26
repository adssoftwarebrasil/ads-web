import { Star, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { value: '+30', label: 'Anos de Mercado' },
  { value: '+1000', label: 'Eventos Realizados' },
  { value: '4.7★', label: 'Avaliação Google' },
  { value: 'MT', label: 'Todo Mato Grosso' },
];

function scrollToServicos() {
  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(53,53,53)]/85 via-[rgb(53,53,53)]/70 to-[rgb(53,53,53)]/90"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[rgb(255,241,18)]/20 border border-[rgb(255,241,18)]/40 text-[rgb(255,241,18)] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <Star width={14} height={14} fill="currentColor" />
          Quase 30 anos transformando eventos em experiências
          <Star width={14} height={14} fill="currentColor" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Marketing Promocional
          <br />
          <span className="text-[rgb(249,171,118)]">que Gera Resultados</span>
          <br />
          <span className="text-[rgb(255,241,18)]">de Verdade</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Da panfletagem ao palco, da promotora ao congresso — a{' '}
          <strong className="text-white">Mega Eventos</strong> cuida de cada detalhe para que sua
          marca brilhe em Cuiabá e em todo o Mato Grosso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="http://wa.me/5565996292448"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[rgb(234,50,56)] hover:bg-[rgb(249,171,118)] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-[rgb(234,50,56)]/40 shadow-lg w-full sm:w-auto justify-center"
          >
            <WhatsAppIcon />
            Fale pelo WhatsApp
          </a>
          <button
            onClick={scrollToServicos}
            className="flex items-center gap-2 border-2 border-white/50 hover:border-[rgb(255,241,18)] text-white hover:text-[rgb(255,241,18)] font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Conheça nossos serviços
            <ChevronDown width={18} height={18} />
          </button>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[rgb(255,241,18)]">
                {stat.value}
              </div>
              <div className="text-white/70 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollToServicos}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white animate-bounce transition-colors"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} />
      </button>
    </section>
  );
}
