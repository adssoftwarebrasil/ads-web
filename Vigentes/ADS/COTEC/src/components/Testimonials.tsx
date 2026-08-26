import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Comprei palmilhas personalizadas e agora consigo andar com muito mais conforto. Recomendo!"',
    name: 'Ana Pereira',
  },
  {
    text: '"Os produtos da Cotec realmente fazem a diferença na qualidade de vida."',
    name: 'José Almeida',
  },
  {
    text: '"A equipe é muito atenciosa e os produtos são de altíssima qualidade."',
    name: 'Claudia Ferreira',
  },
  {
    text: '"O atendimento da Cotec foi excepcional. Fui bem orientado e minha prótese se adaptou perfeitamente."',
    name: 'Marcos Silva',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl">
        <h2 className="text-[#333333] font-bold text-center mb-16 text-3xl md:text-4xl lg:text-5xl">Nossos clientes</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl shadow-lg p-10 max-w-3xl mx-auto relative">
                    <Quote size={48} className="lucide lucide-quote text-[#FB6F11] mb-6" />
                    <p className="text-[#333333] italic text-lg mb-8 leading-relaxed">{t.text}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[#FB6F11] font-bold text-xl">{t.name}</p>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={20} className="lucide lucide-star text-[#FB6F11] fill-[#FB6F11]" />
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#FB6F11] text-[#333333] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 -ml-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="lucide lucide-chevron-left " />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#FB6F11] text-[#333333] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 -mr-4"
            aria-label="Next testimonial"
          >
            <ChevronRight className="lucide lucide-chevron-right " />
          </button>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? 'w-8 bg-[#FB6F11]' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
