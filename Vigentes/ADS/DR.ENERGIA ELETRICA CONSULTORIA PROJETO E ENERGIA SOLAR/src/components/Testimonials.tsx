import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  initial: string;
  name: string;
  subtitle: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"Empresa séria, comprometida em atender seus clientes da melhor forma possível, sempre honrando e com qualidade em seus serviços."',
    initial: 'J',
    name: 'Júlio César Paula',
    subtitle: 'Cliente Verificado',
  },
  {
    quote:
      '"Excelentes profissionais! Tempo recorde e muito atenciosos. Superaram minhas expectativas em todos os aspectos."',
    initial: 'R',
    name: 'Ronaldo Ribeiro',
    subtitle: 'Guia Local · 33 avaliações',
  },
  {
    quote:
      '"Atendimento excelente desde o primeiro contato até a conclusão do serviço. Recomendo sem hesitar."',
    initial: 'F',
    name: 'Fernando Felipe Ludwig',
    subtitle: 'Guia Local · 19 avaliações',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transition-all duration-700 opacity-100 translate-y-0">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Depoimentos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-white">
              O que nossos <span className="text-brand-red">clientes dizem</span>
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <span className="text-brand-white font-bold text-lg">5.0</span>
              <span className="text-brand-white/50 text-sm">no Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="relative bg-brand-darkgray/40 border border-white/8 rounded-2xl p-8 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Quote size={32} className="text-brand-red/30 mb-4 fill-current" />
                <p className="text-brand-white/75 text-base leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-red font-bold text-sm">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <p className="text-brand-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-brand-white/45 text-xs">{testimonial.subtitle}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
