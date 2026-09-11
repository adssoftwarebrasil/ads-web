import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: '"Super recomendo! Sempre compro minhas baterias aqui. O atendimento é excelente, e o pessoal é muito atencioso."',
    name: 'Maria Oliveira',
    rating: 5,
  },
];

function Star() {
  return (
    <svg
      className="w-5 h-5 text-[rgb(233,155,29)]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const active = testimonials[current];

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[rgb(233,155,29)] font-bold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-2 mb-4">
            Nossos clientes
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre nossos serviços.
          </p>
          <div className="w-20 h-1 bg-[rgb(233,155,29)] rounded-full mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <Quote
              size={64}
              className="text-[rgb(233,155,29)] opacity-20 absolute top-8 left-8"
            />
            <div className="relative z-10 min-h-[200px] flex flex-col justify-center">
              <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6 text-center italic">
                {active.text}
              </p>
              <div className="text-center">
                <div className="font-bold text-xl text-black">{active.name}</div>
                <div className="flex justify-center mt-4">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prev}
                className="bg-[rgb(233,155,29)] text-black p-3 rounded-full hover:bg-[rgb(213,135,9)] transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-[rgb(233,155,29)]' : 'w-3 bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  ></button>
                ))}
              </div>
              <button
                onClick={next}
                className="bg-[rgb(233,155,29)] text-black p-3 rounded-full hover:bg-[rgb(213,135,9)] transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="http://wa.me/556384458064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(233,155,29)] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(213,135,9)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Faça Parte dos Nossos Clientes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
