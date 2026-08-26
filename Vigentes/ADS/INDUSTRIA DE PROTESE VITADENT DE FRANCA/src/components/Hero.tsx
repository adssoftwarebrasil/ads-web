import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { HERO_BANNERS, WHATSAPP_URL, scrollToSection } from '../data';

const PARTICLES = [
  { left: '15%', top: '20%', duration: '4s', delay: '0s' },
  { left: '29%', top: '40%', duration: '4.8s', delay: '0.5s' },
  { left: '43%', top: '60%', duration: '5.6s', delay: '1s' },
  { left: '57%', top: '20%', duration: '6.4s', delay: '1.5s' },
  { left: '71%', top: '40%', duration: '7.2s', delay: '2s' },
  { left: '85%', top: '60%', duration: '8s', delay: '2.5s' },
];

export default function Hero() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {HERO_BANNERS.map((banner, i) => (
        <div
          key={banner}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{ backgroundImage: `url("${banner}")`, opacity: active === i ? 1 : 0 }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="hero-particle absolute w-1.5 h-1.5 rounded-full bg-[#0C4E9D]"
            style={{ left: p.left, top: p.top, animationDuration: p.duration, animationDelay: p.delay }}
          ></div>
        ))}
        <div className="absolute left-0 top-0 w-64 h-64 opacity-5">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full opacity-20"
          >
            <path
              d="M20 100 H60 L80 60 L120 140 L140 100 H180"
              stroke="#0C4E9D"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="animate-draw"
            ></path>
            <circle cx="60" cy="100" r="4" fill="#0C4E9D" className="animate-glow"></circle>
            <circle cx="140" cy="100" r="4" fill="#0C4E9D" className="animate-glow" style={{ animationDelay: '0.7s' }}></circle>
            <path
              d="M100 20 V60 M100 140 V180"
              stroke="#0C4E9D"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="4 4"
              className="animate-draw"
              style={{ animationDelay: '0.5s' }}
            ></path>
            <rect x="88" y="60" width="24" height="20" rx="3" stroke="#0C4E9D" strokeWidth="1.2" fill="none" className="animate-draw" style={{ animationDelay: '1s' }}></rect>
            <rect x="88" y="120" width="24" height="20" rx="3" stroke="#0C4E9D" strokeWidth="1.2" fill="none" className="animate-draw" style={{ animationDelay: '1.2s' }}></rect>
          </svg>
        </div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0C4E9D]/40 bg-[#0C4E9D]/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#0C4E9D] animate-pulse"></span>
          <span className="text-xs md:text-sm text-[#7db5ff] font-medium tracking-widest uppercase">
            Desde 1949 — Franca, SP
          </span>
        </div>
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-500">
          <span className="">Excelência </span>
          <span className="">em </span>
          <span className="text-[#0C4E9D]">Prótese </span>
          <span className="">Dentária </span>
        </h1>
        <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-500">
          Laboratório de referência atendendo dentistas e protéticos em toda a região.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#0C4E9D] hover:bg-[#1a6fd4] text-white font-semibold rounded-xl transition-all duration-300 blue-glow blue-glow-hover text-sm md:text-base w-full sm:w-auto"
          >
            Solicitar Orçamento
          </a>
          <button
            onClick={() => scrollToSection('sobre')}
            className="px-8 py-3.5 border border-white/20 hover:border-[#0C4E9D] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5 text-sm md:text-base w-full sm:w-auto"
          >
            Conheça a Vitadent
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-10">
          {HERO_BANNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-500 ${
                active === i ? 'w-8 h-2 bg-[#0C4E9D]' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
            ></button>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={28} height={28} />
      </button>
    </section>
  );
}
