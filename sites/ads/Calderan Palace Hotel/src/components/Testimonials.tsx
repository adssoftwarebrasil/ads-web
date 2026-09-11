import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Perfeito para viagens a trabalho. Ótima localização e Wi-Fi excelente.',
    name: 'Ana Lima',
  },
  {
    text: 'As crianças adoraram! Café da manhã incrível e muito conforto.',
    name: 'Ricardo Pereira',
  },
  {
    text: 'Fácil acesso ao centro e a Bonito-MS. Excelente custo-benefício!',
    name: 'Mariana Pereira',
  },
];

const DOTS = 4;

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="text-[#F09100] fill-[#F09100]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[Math.min(active, testimonials.length - 1)];

  const prev = () => setActive((v) => (v - 1 + DOTS) % DOTS);
  const next = () => setActive((v) => (v + 1) % DOTS);

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1200px]">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[#F09100] text-xs uppercase tracking-[2px] font-semibold mb-3">
            DEPOIMENTOS
          </p>
          <h2 className="text-[#1A1A1A] text-3xl lg:text-5xl font-bold mb-4">
            O Que Nossos Hóspedes Dizem
          </h2>
          <p className="text-[#4A4A4A] text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é nosso maior reconhecimento
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-10 shadow-lg relative">
                <Quote
                  size={48}
                  className="absolute top-6 left-6 text-[#F09100] opacity-20"
                />
                <div className="relative z-10">
                  <p className="text-[#333333] text-lg italic leading-relaxed mb-6">{t.text}</p>
                  <div>
                    <p className="text-[#1A1A1A] font-semibold text-base mb-2">{t.name}</p>
                    <Stars />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:hidden">
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <Quote size={40} className="absolute top-6 left-6 text-[#F09100] opacity-20" />
              <div className="relative z-10">
                <p className="text-[#333333] text-base italic leading-relaxed mb-6">
                  {current.text}
                </p>
                <div>
                  <p className="text-[#1A1A1A] font-semibold text-base mb-2">{current.name}</p>
                  <Stars />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#F09100] hover:text-white group"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="group-hover:text-white" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: DOTS }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    active === i ? 'bg-[#F09100] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#F09100] hover:text-white group"
              aria-label="Próximo"
            >
              <ChevronRight size={24} className="group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
