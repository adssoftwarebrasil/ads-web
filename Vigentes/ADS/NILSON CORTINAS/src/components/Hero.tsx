import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const slides = [
  'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F4.jpeg',
  'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPersianas%20%2F4.jpeg',
  'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPapeis%20de%20Parede%20%2F8.jpg',
];

export default function Hero() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[4000ms] ${
              i === active ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url("${src}")` }}
          ></div>
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Transforme seu espaço com
          <span className="block text-[rgb(207,173,109)] mt-2">elegância e sofisticação</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Há mais de 30 anos criando ambientes únicos em Cuiabá com cortinas, persianas, toldos e papéis de parede sob medida
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contato"
            className="w-full sm:w-auto bg-[rgb(207,173,109)] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[rgb(187,153,89)] transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Solicite um Orçamento
          </a>
          <a
            href="#produtos"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Conheça Nossos Produtos
          </a>
        </div>
      </div>
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="lucide lucide-chevron-down " width={40} height={40} />
      </a>
    </section>
  );
}
