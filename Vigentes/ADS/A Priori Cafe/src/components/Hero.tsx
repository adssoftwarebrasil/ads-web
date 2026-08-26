import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const el = document.querySelector('#sobre');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/interior-cafe-cadeiras-vermelhas-plant-decorativa_1600x1059.webp)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block mb-6 animate-fade-in">
          <span className="font-sans text-cream text-xs sm:text-sm font-medium tracking-[0.3em] uppercase border border-cream/40 px-4 py-1.5 rounded-full">
            Campinas · Centro · Desde o início
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-6 text-shadow animate-fade-up">
          O Ponto de Partida
          <br />
          <em className="text-cream font-normal">para Suas Ideias</em>
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed text-shadow-sm animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Cada produto produzido com cuidado e carinho, cada detalhe pensado para sua melhor experiência!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#cardapio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#cardapio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-burgundy text-white font-sans font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-burgundy-dark hover:shadow-2xl hover:-translate-y-1 tracking-wide"
          >
            Ver Cardápio Completo
          </a>
          <a
            href="http://wa.me/5519996561976"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/15 backdrop-blur-sm border border-white/50 text-white font-sans font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/25 hover:shadow-xl hover:-translate-y-1 tracking-wide"
          >
            Fale pelo WhatsApp
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-white">4.9★</p>
            <p className="font-sans text-xs text-white/70 mt-0.5">no Google</p>
          </div>
          <div className="w-px h-8 bg-white/30" />
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-white">7h30–19h</p>
            <p className="font-sans text-xs text-white/70 mt-0.5">Seg a Sex</p>
          </div>
          <div className="w-px h-8 bg-white/30" />
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-white">Centro</p>
            <p className="font-sans text-xs text-white/70 mt-0.5">Campinas · SP</p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
