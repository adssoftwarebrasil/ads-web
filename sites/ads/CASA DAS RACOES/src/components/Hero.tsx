import { ChevronDown, Star, Clock, MapPin } from 'lucide-react';
import { whatsappLink } from '../lib/tracking';

export default function Hero() {
  const scrollToNext = () => {
    const el = document.querySelector('#sobre');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/img/capa.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium">10 anos cuidando dos seus pets</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Tudo que o seu{' '}
            <span className="text-green-400">Pet precisa</span>
            <br />
            em um só lugar
          </h1>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-xl">
            Rações premium, acessórios, farmácia veterinária, vacinas, cirurgias e clínica
            especializada — do filhote ao grandão, do gato ao coelho.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              {...whatsappLink('hero')}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-4 rounded-xl text-base transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
            <button
              onClick={() => { const el = document.querySelector('#produtos'); el?.scrollIntoView({ behavior: 'smooth' }); }}
              className="flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-7 py-4 rounded-xl text-base transition-all hover:bg-white/10"
            >
              Ver Produtos
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="bg-green-500/30 rounded-lg p-1.5">
                <Clock size={15} className="text-green-300" />
              </div>
              <span>Seg. a Sáb. das <strong className="text-white">7h às 21h</strong> • Dom. das <strong className="text-white">7h às 12h</strong></span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="bg-green-500/30 rounded-lg p-1.5">
                <MapPin size={15} className="text-green-300" />
              </div>
              <span><strong className="text-white">3 unidades</strong> em Primavera do Leste</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white/90 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
