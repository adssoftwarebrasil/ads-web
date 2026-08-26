import { ShieldCheck, Clock, Star, ChevronDown, Phone } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/imperial%20gas/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/92 via-gray-900/80 to-gray-800/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">
              Revendedor Autorizado Supergasbras · +20 Anos em Goiânia
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-slide-up">
            Gás na sua porta{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              em minutos.
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl animate-slide-up-delay">
            Entrega rápida, atendimento humanizado e pagamento facilitado. O gás
            que Goiânia confia há mais de duas décadas — peça agora e receba
            hoje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up-delay-2">
            <a
              href="http://wa.me/556282381551"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-green-500/30 hover:shadow-green-400/40 hover:-translate-y-1 group"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Pedir pelo WhatsApp
              <span className="text-green-200 text-sm font-normal group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="tel:6232598600"
              className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 text-orange-400" />
              (62) 3259-8600
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 animate-fade-in-delay">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-400 flex-shrink-0" />
              <span className="text-gray-300 text-sm font-medium">
                Entrega ultrarrápida
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    fill="#facc15"
                    className="w-4 h-4 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-300 text-sm font-medium">
                4.9 · Centenas de clientes satisfeitos
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-orange-400 transition-colors animate-bounce-slow"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
