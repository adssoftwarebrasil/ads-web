import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const slides = [
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fslider-1.png',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fslider-2.png',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fslider-3.png',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fslider-4.png',
];

export default function Hero() {
  const [current, setCurrent] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center animate-zoom"
            style={{ backgroundImage: `url("${src}")` }}
          ></div>
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Descubra Novos Talentos
          <br />
          <span className="text-[#ED1B24]">Explore Sua Criatividade</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Fundado em 2006, somos um centro de arte dedicado a promover a
          expressão cultural e o bem-estar em Goiânia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5562981842290"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ED1B24] hover:bg-[#c41620] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Enviar WhatsApp
          </a>
          <a
            href="#cursos"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 border border-white/30"
          >
            Conheça os Cursos
          </a>
        </div>
        <div className="flex gap-3 justify-center mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 bg-[#ED1B24]'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            ></button>
          ))}
        </div>
      </div>
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
}
