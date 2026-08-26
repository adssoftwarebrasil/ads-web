import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  initial: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: 'Ótima experiência, produtos de alta qualidade e sabor inigualável!',
    name: 'João Silva',
    role: 'Cliente satisfeito',
    initial: 'J',
  },
  {
    text: 'Produtos excelentes e atendimento impecável. Recomendo demais!',
    name: 'Maria Souza',
    role: 'Cliente satisfeita',
    initial: 'M',
  },
  {
    text: 'A melhor granola que já provei, sabor incomparável e preço justo.',
    name: 'Carlos Oliveira',
    role: 'Revendedor',
    initial: 'C',
  },
  {
    text: 'Qualidade que faz a diferença no meu negócio. Parceria de confiança!',
    name: 'Ana Lima',
    role: 'Cliente satisfeita',
    initial: 'A',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[current];

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section id="testimonials" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nossos clientes</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12">
            <Quote
              size={60}
              className="lucide lucide-quote absolute top-8 left-8 text-[rgb(6,173,244)] opacity-20"
            />
            <div className="relative z-10 min-h-[200px] flex flex-col justify-center">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                  {t.initial}
                </div>
                <div className="text-left">
                  <p className="font-bold text-xl text-gray-800">{t.name}</p>
                  <p className="text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-gray-200 hover:bg-[rgb(6,173,244)] hover:text-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="lucide lucide-chevron-left " />
              </button>
              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-[rgb(6,173,244)] w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  ></button>
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full bg-gray-200 hover:bg-[rgb(6,173,244)] hover:text-white transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="lucide lucide-chevron-right " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
