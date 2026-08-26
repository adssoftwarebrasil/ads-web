import { ArrowDown, ShoppingBag, Truck } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/casa%20das%20embalagens';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BASE}/hero-casa-embalagens.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 via-brand-blue/70 to-black/60" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/50 text-brand-yellow text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <ShoppingBag size={14} />
          Maior variedade de embalagens da região
        </div>

        <h1 className="text-shadow-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
          Casa das{' '}
          <span className="text-brand-yellow">Embalagens</span>
        </h1>

        <p className="text-shadow text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto mb-3">
          Embalagens para todo tipo de negócio com a maior variedade da região — em Trindade e Goiânia.
        </p>

        <p className="text-white/70 text-sm sm:text-base mb-10 flex items-center justify-center gap-2">
          <Truck size={16} className="text-brand-yellow flex-shrink-0" />
          Entrega em toda a região
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5562984075879"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-yellow text-brand-blue font-bold text-base px-8 py-4 rounded-full hover:bg-brand-yellow-dark transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </a>
          <a
            href="#produtos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            Ver Produtos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#produtos" aria-label="Rolar para baixo">
          <ArrowDown size={28} className="text-white/60" />
        </a>
      </div>
    </section>
  );
}
