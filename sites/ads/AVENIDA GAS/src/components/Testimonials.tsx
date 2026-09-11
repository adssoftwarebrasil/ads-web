import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Excelente atendimento! O gás chegou em menos de 20 minutos. Super recomendo a Avenida Gás!"',
    initial: 'M',
    name: 'Maria Silva',
  },
  {
    text: '"Sempre compro meu gás com eles. Preço justo e entrega rápida. Equipe muito atenciosa!"',
    initial: 'J',
    name: 'João Santos',
  },
  {
    text: '"Melhor distribuidora de gás de Sinop! Nunca tive problemas e sempre atendem prontamente."',
    initial: 'A',
    name: 'Ana Paula',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 lg:py-24 bg-[#FFF8DC]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#021C3F] text-center mb-16 opacity-0 animate-fade-in-up">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.name} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                      <div className="flex justify-center mb-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="lucide lucide-star w-8 h-8 fill-[#DBCC5E] text-[#DBCC5E]"
                          />
                        ))}
                      </div>
                      <p className="text-xl text-gray-700 text-center mb-8 leading-relaxed italic">
                        {t.text}
                      </p>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#DBCC5E] rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-bold text-[#021C3F]">
                            {t.initial}
                          </span>
                        </div>
                        <p className="text-lg font-semibold text-[#021C3F]">
                          {t.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white text-[#021C3F] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="lucide lucide-chevron-left w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white text-[#021C3F] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="lucide lucide-chevron-right w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? 'bg-[#021C3F] w-8' : 'bg-gray-400'
                }`}
                aria-label={`Depoimento ${i + 1}`}
              ></button>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-[#DBCC5E] text-[#021C3F] px-8 py-4 rounded-full font-bold text-xl shadow-lg">
              <Star className="lucide lucide-star w-6 h-6 fill-[#021C3F] text-[#021C3F]" />
              4.8 média de avaliação
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
