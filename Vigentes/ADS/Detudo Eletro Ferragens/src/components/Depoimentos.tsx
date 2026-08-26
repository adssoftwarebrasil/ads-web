import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Excelente atendimento e produtos de qualidade. Sempre encontro tudo que preciso!"',
    name: 'João Silva',
  },
  {
    text: '"25 anos no mercado fazem diferença! Equipe super atenciosa e preços justos."',
    name: 'Maria Santos',
  },
  {
    text: '"Melhor loja de ferragens de Cuiabá. Recomendo!"',
    name: 'Carlos Oliveira',
  },
];

export default function Depoimentos() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const active = testimonials[current];

  return (
    <section id="depoimentos" className="py-12 md:py-20 bg-[rgb(246,239,3)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(34,34,34)] mb-4">
            DEPOIMENTOS
          </h2>
          <h3 className="text-xl sm:text-2xl text-[rgb(34,34,34)] font-semibold">
            Nossos clientes
          </h3>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 text-[rgb(34,34,34)] hover:scale-110 transition-transform z-10"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 text-[rgb(34,34,34)] hover:scale-110 transition-transform z-10"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 md:p-12">
            <div className="transition-all duration-800 opacity-100 scale-100">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-[rgb(246,239,3)] text-[rgb(246,239,3)]"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg text-[rgb(34,34,34)] text-center mb-4 sm:mb-6 italic">
                {active.text}
              </p>
              <p className="text-lg sm:text-xl font-bold text-[rgb(34,34,34)] text-center">
                {active.name}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Depoimento ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 bg-[rgb(34,34,34)] ${
                  i === current ? 'w-8' : 'opacity-40'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
