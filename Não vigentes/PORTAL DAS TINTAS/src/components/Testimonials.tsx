import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'A qualidade das tintas da Portal é incomparável. Atendimento excepcional e entrega rápida! Estou muito satisfeito.',
    initials: 'TP',
    name: 'Tiago P.',
  },
  {
    text: 'Sempre que preciso renovar a pintura, seja em casa ou no carro, só confio na Portal Tintas. Eles realmente entendem do assunto!',
    initials: 'LF',
    name: 'Lúcia F.',
  },
  {
    text: 'Impressionada com a variedade de cores e a capacidade de atender exatamente o que pedi. Recomendo a Portal Tintas para todos que buscam qualidade e eficiência.',
    initials: 'CS',
    name: 'Carlos S.',
  },
];

const DOTS = 4;

export default function Testimonials() {
  const [active, setActive] = useState(1);

  return (
    <section id="depoimentos" className="py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            O Que Nossos Clientes Dizem
          </h2>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8 relative animate-fadeIn">
                <div className="text-6xl text-[#f08736] mb-4 leading-none">"</div>
                <p className="text-gray-700 mb-6 text-lg italic">{t.text}</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#f08736] flex items-center justify-center text-white font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-black">{t.name}</div>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="lucide lucide-star w-4 h-4 fill-[#f08736] text-[#f08736]"
                          width={24}
                          height={24}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-4">
            <button
              className="bg-[#f08736] text-white p-3 rounded-full hover:bg-[#e67321] transition-colors"
              aria-label="Anterior"
              onClick={() => setActive((a) => (a - 1 + DOTS) % DOTS)}
            >
              <ChevronLeft className="lucide lucide-chevron-left " width={24} height={24} />
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: DOTS }).map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    active === i ? 'bg-[#f08736] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  onClick={() => setActive(i)}
                ></button>
              ))}
            </div>
            <button
              className="bg-[#f08736] text-white p-3 rounded-full hover:bg-[#e67321] transition-colors"
              aria-label="Próximo"
              onClick={() => setActive((a) => (a + 1) % DOTS)}
            >
              <ChevronRight className="lucide lucide-chevron-right " width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
