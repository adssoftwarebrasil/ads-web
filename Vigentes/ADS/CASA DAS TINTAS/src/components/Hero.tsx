import { useEffect, useRef } from 'react';
import { ChevronDown, Star, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/hero-background.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { color: 'rgb(17,157,219)', size: 'w-64 h-64', pos: 'top-10 right-20', delay: '0s' },
          { color: 'rgb(108,189,81)', size: 'w-48 h-48', pos: 'top-1/3 right-1/4', delay: '1s' },
          { color: 'rgb(235,49,60)', size: 'w-32 h-32', pos: 'bottom-20 right-32', delay: '2s' },
          { color: 'rgb(240,214,44)', size: 'w-40 h-40', pos: 'bottom-1/3 right-10', delay: '0.5s' },
        ].map((blob, i) => (
          <div
            key={i}
            className={`absolute ${blob.size} ${blob.pos} rounded-full blur-3xl opacity-20`}
            style={{
              backgroundColor: blob.color,
              animation: `pulse 4s infinite`,
              animationDelay: blob.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[1,2,3,4,5].map(s => (
                <Star key={s} size={16} fill={s <= 4 ? 'rgb(240,214,44)' : 'none'} color="rgb(240,214,44)" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium">4.7 — Loja mais completa de Sorriso</span>
          </div>

          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6"
          >
            Cores que{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, rgb(17,157,219), rgb(111,196,233))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              transformam
            </span>
            <br />
            <span className="text-white">sua vida</span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            Tintas imobiliárias, automotivas e industriais em Sorriso - MT.
            E já fizemos até{' '}
            <span className="text-[rgb(111,196,233)] font-semibold">30 mil fórmulas de tintas.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="http://wa.me/556697173455"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[rgb(108,189,81)] hover:bg-[rgb(90,165,65)] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 shadow-xl shadow-green-900/30"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Peça seu Orçamento
            </a>
            <button
              onClick={scrollToProducts}
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[rgb(17,157,219)] text-white hover:text-[rgb(111,196,233)] font-bold px-8 py-4 rounded-full text-base transition-all duration-200"
            >
              Ver Produtos
            </button>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MapPin size={16} className="text-[rgb(17,157,219)] flex-shrink-0" />
              <span>Sorriso - MT · 2 Unidades</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Clock size={16} className="text-[rgb(108,189,81)] flex-shrink-0" />
              <span>Seg–Sex 7h–11h30 · 13h–17h30</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
