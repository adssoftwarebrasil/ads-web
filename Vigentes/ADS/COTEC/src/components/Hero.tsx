import { useMemo } from 'react';
import { ChevronDown } from 'lucide-react';

const HERO_IMG = 'https://storage.lucasmendes.dev/site-sp/cotec%2Fhero.webp';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }).map(() => ({
        width: `${2 + Math.random() * 6}px`,
        height: `${2 + Math.random() * 6}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: 0.1 + Math.random() * 0.3,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${10 + Math.random() * 15}s`,
        boxShadow: 'rgba(255, 255, 255, 0.5) 0px 0px 10px',
      })),
    []
  );

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${HERO_IMG}")` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#333333]/60 via-[#333333]/50 to-[#333333]/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(51,51,51,0.4)_100%)]"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div key={i} className="absolute bg-white rounded-full animate-float" style={p}></div>
        ))}
      </div>
      <div className="hidden md:flex absolute top-32 right-8 md:right-16 lg:right-24 z-20 items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 transition-all duration-1000 opacity-100 translate-x-0">
        <span className="w-2 h-2 bg-[#FB6F11] rounded-full animate-pulse"></span>
        <span className="text-white text-sm font-medium tracking-wide whitespace-nowrap">
          Tecnologia de Ponta em Ortopedia
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FB6F11]/10 to-transparent pointer-events-none"></div>
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-8 md:mt-0">
        <h1
          className="text-white font-bold mb-6 transition-all duration-1000 delay-200 leading-tight opacity-100 translate-y-0 text-4xl md:text-5xl lg:text-7xl"
          style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 4px 20px, rgba(251, 111, 17, 0.2) 0px 0px 40px' }}
        >
          Próteses, Órteses e<br />
          <span className="text-[#FB6F11] inline-block transform hover:scale-105 transition-transform duration-300">
            Palmilhas Sob Medida
          </span>
        </h1>
        <p
          className="text-white/90 mb-10 transition-all duration-1000 delay-500 max-w-3xl mx-auto opacity-100 translate-y-0 text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
          style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 10px' }}
        >
          Soluções Ortopédicas Personalizadas para Você
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 opacity-100 translate-y-0">
          <button
            onClick={() => scrollTo('services')}
            className="group relative bg-[#FB6F11] text-white px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#e56410] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,111,17,0.6)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Conheça Nossas Soluções
              <ChevronDown className="lucide lucide-chevron-down w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </button>
        </div>
      </div>
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-all duration-1000 delay-1200 animate-bounce opacity-100"
        aria-label="Scroll para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down w-8 h-8" />
      </button>
    </section>
  );
}
