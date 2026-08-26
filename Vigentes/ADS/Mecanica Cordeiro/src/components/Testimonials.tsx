import { Star, Quote } from 'lucide-react';
import { MapPinFilledIcon } from './icons';

interface Testimonial {
  text: string;
  name: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Ótimo profissional! Atendimento excelente, serviço de qualidade e preço justo. Recomendo a todos que precisam de uma mecânica de confiança em Sinop."',
    name: 'Adriano Mendes',
    initial: 'A',
  },
  {
    text: '"Muito bom! Melhor mecânica da região. Profissionais sérios, honestos e que realmente entendem do que estão fazendo. Voltarei sempre!"',
    name: 'Raphael Wagner',
    initial: 'R',
  },
  {
    text: '"Serviço de qualidade! Fui bem atendido, o trabalho foi feito no prazo combinado e o resultado superou as expectativas. Recomendo!"',
    name: 'Raul A. Scheid',
    initial: 'R',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-[#30312C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#E32626] text-xs font-bold tracking-widest uppercase mb-3">
            Quem Atendemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FDFDFD] mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[0, 1, 2, 3].map((i) => (
                <Star
                  key={i}
                  size={28}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
              <Star size={28} className="text-amber-400 fill-amber-400/40" />
            </div>
            <div className="text-[#FDFDFD]">
              <span className="text-3xl font-black">4.5</span>
              <span className="text-white/50 text-sm ml-1">/ 5.0 no Google</span>
            </div>
          </div>
          <div className="mt-4 w-16 h-1 bg-[#E32626] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#E32626]/30 transition-all duration-300 flex flex-col"
            >
              <Quote size={32} className="text-[#E32626]/40 mb-4" />
              <p className="text-white/80 leading-relaxed flex-1 text-sm mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 bg-[#E32626] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div className="min-w-0">
                  <div className="text-[#FDFDFD] font-semibold text-sm truncate">
                    {t.name}
                  </div>
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <div className="ml-auto text-white/40 text-xs flex-shrink-0">
                  Google Maps
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/maps/place/Mec%C3%A2nica+Cordeiro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
          >
            <MapPinFilledIcon className="w-5 h-5" />
            Ver Todas as Avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
