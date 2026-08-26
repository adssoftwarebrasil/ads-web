import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  initial: string;
  time: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Atendimento personalizado e impecável... Os meninos são super atenciosos, os produtos de qualidade!! Melhor opção em Uberaba!"',
    name: 'Monnyk Ramos',
    initial: 'M',
    time: 'há 7 meses',
  },
  {
    text: '"Excelente, ambiente agradável, atendimento nota 1000, profissionais de primeira, eu recomendo"',
    name: 'Armando Junior',
    initial: 'A',
    time: 'há 5 meses',
  },
  {
    text: '"Excelente Atendimento, funcionários altamente treinados e produtos de ótima qualidade. Recomendo a todos"',
    name: 'Gustavo Faria',
    initial: 'G',
    time: 'há 8 meses',
  },
  {
    text: '"Ótimo atendimento, produtos de boa qualidade, preço bom, estacionamento próprio."',
    name: 'Thaís Mendonça',
    initial: 'T',
    time: 'há 6 meses',
  },
  {
    text: '"Foi ótimo excelente atendimento muito atencioso muito bom mesmo satisfeito bons produtos"',
    name: 'Igor Thiago Santos',
    initial: 'I',
    time: 'há 4 meses',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const maxIndex = 2;

  const prev = () => setActive((v) => Math.max(0, v - 1));
  const next = () => setActive((v) => Math.min(maxIndex, v + 1));

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Avaliações reais de clientes satisfeitos com nossos produtos e atendimento
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * (100 / 3)}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary h-full hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-base mb-6 leading-relaxed italic">{t.text}</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{t.name}</h4>
                        <p className="text-gray-500 text-sm">{t.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all hover:scale-110 hidden lg:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all hover:scale-110 hidden lg:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                active === i ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial set ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
