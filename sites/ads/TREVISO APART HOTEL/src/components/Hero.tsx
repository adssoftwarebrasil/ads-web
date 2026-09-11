import { useState, useEffect } from 'react';
import { ChevronDown, Star } from 'lucide-react';

const slides = [
  {
    url: 'https://storage.lucasmendes.dev/site-sp/treviso%2Ftreviso%20hotel%2F1.jpeg',
    label: 'Fachada',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/treviso%2Ftreviso%20hotel%2F2.jpeg',
    label: 'Recepção',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/treviso%2Ftreviso%20hotel%2F3.jpeg',
    label: 'Acomodações',
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

  const handleScroll = () => {
    const el = document.querySelector('#features');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReserve = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.label}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-[#212042]/80 via-[#212042]/50 to-[#212042]/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#b82626" stroke="none" />
          ))}
        </div>

        <p className="text-[#b82626] uppercase tracking-[0.4em] text-xs sm:text-sm font-medium mb-4">
          Desde 2007 em Linhares – ES
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#fef5e6] leading-tight max-w-4xl mb-4">
          Conforto de{' '}
          <span className="text-[#b82626]">Lar</span>
          {' '}com a Estrutura de um{' '}
          <span className="text-[#b82626]">Hotel</span>
        </h1>

        <p className="text-[#fef5e6]/80 text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          Apartamentos amplos com sala e cozinha, ideais para estadias curtas ou longas.
          A escolha certa para executivos e viajantes em Linhares.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={handleReserve}
            className="bg-[#b82626] hover:bg-[#9b1f1f] text-white font-bold px-8 py-4 rounded text-base tracking-wide transition-all duration-200 shadow-2xl hover:shadow-[#b82626]/30 hover:-translate-y-0.5"
          >
            Fazer Reserva
          </button>
          <a
            href="https://wa.me/552733734333?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20hospedagem."
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#fef5e6]/40 hover:border-[#fef5e6] text-[#fef5e6] font-semibold px-8 py-4 rounded text-base tracking-wide transition-all duration-200 hover:bg-[#fef5e6]/10"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-8 mt-12 text-[#fef5e6]/60 text-sm">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#fef5e6] font-bold text-2xl">+17</span>
            <span>Anos de experiência</span>
          </div>
          <div className="w-px h-10 bg-[#fef5e6]/20" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#fef5e6] font-bold text-2xl">24h</span>
            <span>Atendimento</span>
          </div>
          <div className="w-px h-10 bg-[#fef5e6]/20" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#fef5e6] font-bold text-2xl">100%</span>
            <span>Satisfação</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-[#b82626]' : 'w-2 h-2 bg-[#fef5e6]/40'
            }`}
          />
        ))}
      </div>

      <button
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#fef5e6]/50 hover:text-[#fef5e6] transition-colors animate-bounce hidden sm:block"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
