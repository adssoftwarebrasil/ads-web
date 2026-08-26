import { useEffect, useState } from 'react';
import { Star, ChevronRight, ArrowDown } from 'lucide-react';
import { WHATSAPP_URL, scrollToSection } from '../constants';

const SLIDES = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F4.jpeg',
    alt: 'Arthur Cortinas - Ambiente 1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPersianas%20%2F4.jpeg',
    alt: 'Arthur Cortinas - Ambiente 2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPapeis%20de%20Parede%20%2F8.jpg',
    alt: 'Arthur Cortinas - Ambiente 3',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                i === current ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-1000 transform translate-y-0 opacity-100">
          <Star className="lucide lucide-star w-4 h-4 text-[#DAA521] fill-[#DAA521]" />
          <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
            5 Anos de Excelência
          </span>
          <Star className="lucide lucide-star w-4 h-4 text-[#DAA521] fill-[#DAA521]" />
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight transition-all duration-1000 delay-200 transform translate-y-0 opacity-100">
          Arthur Cortinas
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 font-light max-w-4xl mx-auto transition-all duration-1000 delay-400 transform translate-y-0 opacity-100">
          A sua referência em decoração. Transforme seu espaço com elegância.
        </p>
        <p className="text-base sm:text-lg text-[#DAA521] mb-10 font-medium tracking-wide uppercase transition-all duration-1000 delay-500 transform translate-y-0 opacity-100">
          A mais de 5 anos atendendo o norte mato-grossense
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full transition-all duration-1000 delay-700 transform translate-y-0 opacity-100">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto overflow-hidden bg-[#DAA521] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_20px_rgba(218,165,33,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(218,165,33,0.6)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Solicitar Orçamento
              <ChevronRight className="lucide lucide-chevron-right w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-[#c6911d]/20"></div>
          </a>
          <button
            onClick={() => scrollToSection('produtos')}
            className="group w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center justify-center gap-2"
          >
            Ver Coleção
            <ArrowDown className="lucide lucide-arrow-down w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden ${
              i === current ? 'w-12 bg-[#DAA521]' : 'w-2 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Ir para imagem ${i + 1}`}
          >
            {i === current && (
              <div className="absolute top-0 left-0 h-full bg-white/30 w-full animate-[progress_6s_linear]"></div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
