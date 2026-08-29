import { MessageCircle, MapPin, ChevronDown } from 'lucide-react';

const STAR_PATH =
  'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z';

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
            'url("https://storage.lucasmendes.dev/site-sp/loja%20padre%20cicero/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 pt-32">
        <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
          <span className="text-brand-gold text-sm font-medium tracking-wide">
            Desde 2016 — Juazeiro do Norte, CE
          </span>
        </div>
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 animate-fade-up"
          style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 4px 30px' }}
        >
          Fé, Devoção e
          <br />
          <span
            className="text-brand-gold"
            style={{ textShadow: 'rgba(252, 199, 35, 0.4) 0px 2px 20px' }}
          >
            Tradição Religiosa
          </span>
        </h1>
        <p
          className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.15s' }}
        >
          Sua loja de artigos religiosos no coração de Juazeiro do Norte. Imagens sacras, terços,
          crucifixos, velas e lembranças de romaria para fortalecer sua fé.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: '0.25s' }}
        >
          <a
            href="http://wa.me/5588999153119"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-8 py-4 text-lg font-semibold w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            Fale pelo WhatsApp
          </a>
          <a
            href="#produtos"
            className="btn-outline-gold text-base px-8 py-4 text-lg font-semibold w-full sm:w-auto justify-center"
          >
            Ver Produtos
          </a>
        </div>
        <div
          className="mt-12 flex items-center justify-center gap-2 text-white/60 text-sm animate-fade-up"
          style={{ animationDelay: '0.35s' }}
        >
          <MapPin size={14} className="text-brand-gold flex-shrink-0" />
          <span>R. São José, 179 - Centro, Juazeiro do Norte - CE</span>
        </div>
        <div
          className="flex items-center justify-center gap-6 mt-8 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[0, 1, 2, 3].map((i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-brand-gold fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d={STAR_PATH}></path>
                </svg>
              ))}
              <svg className="w-4 h-4 text-brand-gold fill-current" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="halfStar">
                    <stop offset="60%" stopColor="rgb(252,199,35)"></stop>
                    <stop offset="60%" stopColor="rgb(255,255,255,0.2)"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#halfStar)" d={STAR_PATH}></path>
              </svg>
            </div>
            <span className="text-white/70 text-sm font-medium">4.6 no Google</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <span className="text-white/60 text-sm">+8 anos de tradição</span>
        </div>
      </div>
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-brand-gold transition-colors duration-300 animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
