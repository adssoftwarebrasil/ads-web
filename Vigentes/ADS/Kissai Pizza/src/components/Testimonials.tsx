import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  initial: string;
  name: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    initial: 'J',
    name: 'João Silva',
    text: '"A qualidade das pizzas da Kissai é impressionante! Cada pizza é única e deliciosa. Sempre volto!"',
  },
  {
    initial: 'M',
    name: 'Maria Oliveira',
    text: '"O atendimento é excepcional!"',
  },
  {
    initial: 'P',
    name: 'Pedro Santos',
    text: '"As promoções são fantásticas, e as pizzas? Sem palavras! Recomendo a todos!"',
  },
  {
    initial: 'A',
    name: 'Ana Costa',
    text: '"Adoro a variedade que a Kissai oferece. Sempre encontro uma pizza nova para experimentar."',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-[rgb(150,1,0)] text-4xl md:text-5xl font-bold mb-4">
            Nossos clientes
          </h2>
          <p className="text-[rgb(235,185,3)] text-lg">Depoimentos</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="w-full flex-shrink-0 px-4">
                  <div className="bg-[rgb(250,250,250)] border-l-4 border-[rgb(235,185,3)] rounded-xl p-8 md:p-12 relative shadow-lg">
                    <Quote
                      size={60}
                      className="text-[rgb(150,1,0)] opacity-20 absolute top-4 right-4"
                    />
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[rgb(150,1,0)] to-[rgb(235,185,3)] flex items-center justify-center text-white text-2xl font-bold border-3 border-[rgb(235,185,3)]">
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="text-[rgb(150,1,0)] text-xl font-semibold">
                          {t.name}
                        </h4>
                        <div className="flex gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star
                              key={s}
                              size={18}
                              className="fill-[rgb(235,185,3)] text-[rgb(235,185,3)]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg italic leading-relaxed relative z-10">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[rgb(235,185,3)] text-[rgb(150,1,0)] p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[rgb(235,185,3)] text-[rgb(150,1,0)] p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={
                  'w-3 h-3 rounded-full transition-all duration-300 ' +
                  (i === current ? 'bg-[rgb(235,185,3)] w-8' : 'bg-gray-300')
                }
                aria-label={`Depoimento ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
