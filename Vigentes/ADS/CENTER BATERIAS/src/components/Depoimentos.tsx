import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Depoimento {
  text: string;
  name: string;
}

const depoimentos: Depoimento[] = [
  {
    text: '"Fui muito bem atendida e a instalação foi rápida e eficiente."',
    name: 'Maria Oliveira',
  },
  {
    text: '"Os produtos são de alta qualidade e a equipe é muito profissional."',
    name: 'Ricardo Lima',
  },
  {
    text: '"Tive uma ótima experiência com a Center Baterias, todos foram muito atenciosos."',
    name: 'Ana Cláudia',
  },
  {
    text: '"Excelente atendimento e rapidez na entrega! Recomendo a Center Baterias."',
    name: 'João da Silva',
  },
];

// Repeat the testimonials so the track always has cards while sliding.
const track = [...depoimentos, ...depoimentos, ...depoimentos];

export default function Depoimentos() {
  const [current, setCurrent] = useState(0);
  const total = depoimentos.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section
      id="depoimentos"
      className="bg-gradient-to-b from-[#E8F0FF] to-white py-16 md:py-24"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-center mb-12 md:mb-16 fade-in">
          Nossos Clientes
        </h2>
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="lucide lucide-chevron-left w-6 h-6 text-secondary" />
          </button>
          <div className="overflow-hidden px-4">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
            >
              {track.map((depoimento, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 flex-shrink-0"
                  style={{ width: 'calc(33.3333% - 16px)' }}
                >
                  <Quote className="lucide lucide-quote w-10 h-10 text-[rgb(250,204,21)] mb-4" />
                  <p className="text-lg text-[#555] italic leading-relaxed mb-6">
                    {depoimento.text}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-secondary mb-2">
                      {depoimento.name}
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="lucide lucide-star w-5 h-5 fill-[rgb(250,204,21)] text-[rgb(250,204,21)]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="lucide lucide-chevron-right w-6 h-6 text-secondary" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {depoimentos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-[rgb(250,204,21)] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
