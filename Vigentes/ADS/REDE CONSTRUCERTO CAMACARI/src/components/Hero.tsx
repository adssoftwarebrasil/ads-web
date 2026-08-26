import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WHATSAPP_URL, scrollToSection } from '../constants';

const slides = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2Fhero1.jpg',
    alt: 'Hero 1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2Fhero2.jpg',
    alt: 'Hero 2',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
      ))}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Pisos a Preços <span className="text-[#e8221a]">Imbatíveis</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-4 font-light">
            Novidade em material de construção em Camaçari
          </p>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Descubra uma variedade de pisos com preços imbatíveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#e8221a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c91d16] transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Fale no WhatsApp
            </a>
            <button
              onClick={() => scrollToSection('contato')}
              className="inline-flex items-center justify-center bg-white text-[#253579] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-8' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
