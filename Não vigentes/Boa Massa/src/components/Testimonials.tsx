import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Utilizo os produtos da Boa Massa em todas as minhas obras. O atendimento é sempre excelente e a entrega, rápida.',
    name: 'Marta Silva',
  },
  {
    text: 'Nunca tive problemas com a Boa Massa. Para mim, é sinônimo de qualidade e confiança.',
    name: 'João Paulo',
  },
  {
    text: 'Os produtos são ótimos e o atendimento é impecável. Recomendo a todos!',
    name: 'Renata Oliveira',
  },
  {
    text: 'A Boa Massa superou minhas expectativas. A qualidade da argamassa é incomparável e a entrega foi rápida!',
    name: 'Carlos Alberto',
  },
  {
    text: 'Utilizo os produtos da Boa Massa em todas as minhas obras. O atendimento é sempre excelente e a entrega, rápida.',
    name: 'Marta Silva',
  },
  {
    text: 'Nunca tive problemas com a Boa Massa. Para mim, é sinônimo de qualidade e confiança.',
    name: 'João Paulo',
  },
];

const VISIBLE = 3;
const maxIndex = testimonials.length - VISIBLE;

export default function Testimonials() {
  const [index, setIndex] = useState(1);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <div className="animate-on-scroll">
      <section id="depoimentos" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="text-center mb-12 lg:mb-16">
            <span
              className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'rgb(255, 220, 2)', color: 'rgb(0, 0, 0)' }}
            >
              Depoimentos
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              Nossos Clientes
            </h2>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 33.3333}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 px-4"
                    style={{ width: '33.3333%' }}
                  >
                    <div
                      className="rounded-xl p-8 shadow-lg min-h-[200px] flex flex-col"
                      style={{ backgroundColor: 'rgb(250, 250, 250)' }}
                    >
                      <Quote
                        size={40}
                        color="rgb(255, 220, 2)"
                        strokeWidth={2}
                        className="mb-4"
                      />
                      <p
                        className="text-base leading-relaxed mb-6 flex-grow"
                        style={{ color: 'rgb(51, 51, 51)' }}
                      >
                        {t.text}
                      </p>
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star
                            key={s}
                            size={18}
                            color="rgb(255, 220, 2)"
                            fill="rgb(255, 220, 2)"
                            strokeWidth={2}
                          />
                        ))}
                      </div>
                      <p
                        className="text-base font-bold"
                        style={{ color: 'rgb(0, 0, 0)' }}
                      >
                        {t.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Previous testimonial"
              style={{ backgroundColor: 'rgb(255, 220, 2)' }}
            >
              <ChevronLeft size={24} color="rgb(0, 0, 0)" strokeWidth={2} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Next testimonial"
              style={{ backgroundColor: 'rgb(255, 220, 2)' }}
            >
              <ChevronRight size={24} color="rgb(0, 0, 0)" strokeWidth={2} />
            </button>
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, d) => (
                <button
                  key={d}
                  onClick={() => setIndex(d)}
                  className="w-3 h-3 rounded-full transition-all"
                  aria-label={`Go to slide ${d + 1}`}
                  style={{
                    backgroundColor:
                      d === index ? 'rgb(255, 220, 2)' : 'rgb(200, 200, 200)',
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
