import { Star, Quote } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
  meta: string;
  delay: number;
}

const testimonials: Testimonial[] = [
  {
    text: '"Melhor empresa de Goiânia sem sombra de dúvidas! Serviço impecável, equipe dedicada e resultado que superou nossas expectativas."',
    initial: 'A',
    name: 'Art Baby Gyn',
    meta: 'Cliente',
    delay: 0,
  },
  {
    text: '"Pessoal muito competente, fui muito bem atendido por todos. Profissionais que realmente entendem do que fazem. Super recomendo!"',
    initial: 'C',
    name: 'Carlos Miranda',
    meta: 'Guia Local · 50 avaliações',
    delay: 120,
  },
  {
    text: '"Preço justo e ótimo atendimento. Sem dúvida, a melhor empresa de elevador da região. Transparência do início ao fim do serviço."',
    initial: 'C',
    name: 'Clenio Rodrigues de Arruda',
    meta: 'Guia Local · 152 avaliações',
    delay: 240,
  },
];

function TestimonialCard({ text, initial, name, meta, delay }: Testimonial) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              width={16}
              height={16}
              className="lucide lucide-star fill-amber-400 text-amber-400"
            />
          ))}
        </div>
        <Quote width={28} height={28} className="text-[rgb(219,38,27)]/30" />
      </div>
      <p className="text-gray-600 leading-relaxed flex-1 mb-6 text-sm">{text}</p>
      <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-[rgb(42,30,75)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {initial}
        </div>
        <div>
          <p className="text-[rgb(42,30,75)] font-bold text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{meta}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[rgb(219,38,27)] text-sm font-bold tracking-widest uppercase">
            Avaliações no Google
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(42,30,75)] mt-3 mb-5">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Avaliações reais de quem já experimentou a qualidade e o compromisso da Advence System.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Advence+Elevadores"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[rgb(42,30,75)] font-semibold text-sm hover:text-[rgb(219,38,27)] transition-colors"
          >
            <Star width={16} height={16} className="lucide lucide-star fill-amber-400 text-amber-400" />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
