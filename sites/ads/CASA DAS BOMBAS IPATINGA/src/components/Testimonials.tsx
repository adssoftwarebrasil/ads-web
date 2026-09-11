import { useEffect, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
}

const testimonials: Testimonial[] = [
  { text: 'Melhor lugar para contactar se você precisar de um poço artesiano. Equipe sensacional.', name: 'Raquel Ferreira' },
  { text: 'Muito bom. Preço, qualidade, bom atendimento.', name: 'Amanda Soares' },
  { text: 'Preço bom e um ótimo atendimento. Recomendo a Casa das Bombas.', name: 'Edneia Vieira' },
  { text: 'Excelente atendimento! Equipe muito bem treinada, e serviço eficiente!', name: 'Karla Machado' },
  { text: 'Muito satisfeito, bom atendimento, ótimos preços.', name: 'Adrian Henrique' },
];

function useItemsPerView() {
  const [items, setItems] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItems(1);
      else if (window.innerWidth < 1024) setItems(2);
      else setItems(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return items;
}

export default function Testimonials() {
  const itemsPerView = useItemsPerView();
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const cardWidth = 100 / itemsPerView;

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(1,8,82)] mb-4">
            O Que Nossos Clientes Dizem Sobre Nós
          </h2>
          <div className="w-24 h-1 bg-[rgb(37,155,208)] mx-auto"></div>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * cardWidth}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="flex-shrink-0 px-3" style={{ width: `${cardWidth}%` }}>
                  <div className="bg-[rgb(222,222,221)] rounded-xl p-6 lg:p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Quote className="w-10 h-10 text-[rgb(37,155,208)] mb-4" />
                    <p className="text-gray-700 text-base lg:text-lg mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-[rgb(1,8,82)] text-lg">{testimonial.name}</p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-[rgb(37,155,208)] hover:text-white transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-[rgb(37,155,208)] hover:text-white transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? 'bg-[rgb(37,155,208)] w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
