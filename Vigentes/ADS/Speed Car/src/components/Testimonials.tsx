import { Star, Quote } from 'lucide-react';
import Reveal from './Reveal';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: '"Melhor e mais confiável oficina que estive em Sinop!!!"',
    name: 'Rodrigo Scarton',
    role: 'Local Guide',
  },
  {
    quote: '"Excelente atendimento, ótimo serviço, preço justo, confiável... tudo de bom!"',
    name: 'Clayrton Schudiken',
    role: '5 avaliações',
  },
  {
    quote: '"Ótimo atendimento"',
    name: 'Wellington de Vasconcelos',
    role: '7 avaliações',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-speedcar-red"></span>
              <span className="text-speedcar-red text-xs font-bold tracking-[0.2em] uppercase">
                Depoimentos
              </span>
              <span className="h-[2px] w-8 bg-speedcar-red"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-speedcar-black leading-tight">
              O Que Nossos Clientes Dizem
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-2xl font-extrabold text-speedcar-black">4.8</span>
              <span className="text-gray-400 text-sm">no Google</span>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="group p-8 rounded-xl bg-speedcar-gray border border-gray-100 hover:border-speedcar-red/20 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 h-full flex flex-col">
                <Quote className="lucide lucide-quote w-8 h-8 text-speedcar-red/20 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 text-[15px]">{t.quote}</p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className="lucide lucide-star w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-speedcar-black font-bold mt-2">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
