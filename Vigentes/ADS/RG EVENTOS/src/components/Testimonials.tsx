import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    name: 'Guia Cidade Mais',
    role: 'Local Guide · 125 avaliações · 2374 fotos',
    text: 'Maior empresa de equipamentos para sonorização e iluminação de eventos de Sorriso. Atende festas de 15 anos, casamentos, feiras, exposições, festivais, entre outros. O Guia Cidade Mais recomenda esse local.',
    stars: 5,
  },
  {
    name: 'Marcos Paulo Scardua',
    role: 'Local Guide · 198 avaliações · 3 fotos',
    text: 'Ótima empresa no setor de eventos, som e iluminação top. Eu diria a melhor da região. Recomendo!',
    stars: 5,
  },
  {
    name: 'Paulo Henrique',
    role: '4 avaliações',
    text: 'Muito bom, equipamentos bons. Atendimento de qualidade e estrutura de primeiro nível para qualquer tipo de evento.',
    stars: 5,
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section id="avaliacoes" className="py-24 bg-[rgb(39,41,45)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#C9962F] text-xs font-bold tracking-widest uppercase mb-3 block">
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(245,244,249)] mb-4">
            O Que Nossos Clientes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962F] to-[#F0C060]">
              Dizem
            </span>
          </h2>

          <div className="inline-flex items-center gap-3 mt-4 px-6 py-3 bg-[rgb(3,7,8)] rounded-full border border-white/10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-[#C9962F] fill-[#C9962F]" />
              ))}
            </div>
            <span className="text-[rgb(245,244,249)] font-black text-xl">4.7</span>
            <span className="text-[rgb(245,244,249)]/50 text-sm">no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 120} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=Roberto+Guimarães+Eventos+Sorriso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-[#C9962F]/50 text-[rgb(245,244,249)]/70 hover:text-[#C9962F] text-sm font-medium rounded-full transition-all"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: { name: string; role: string; text: string; stars: number };
  delay: number;
}) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative p-6 rounded-2xl bg-[rgb(3,7,8)] border border-white/5 hover:border-[#C9962F]/30 transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <Quote size={28} className="text-[#C9962F]/30 mb-4" />

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} size={15} className="text-[#C9962F] fill-[#C9962F]" />
        ))}
      </div>

      <p className="text-[rgb(245,244,249)]/70 text-sm leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#C9962F]/20 flex items-center justify-center">
          <span className="text-[#C9962F] font-bold text-base">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-[rgb(245,244,249)] font-bold text-sm">{testimonial.name}</div>
          <div className="text-[rgb(245,244,249)]/45 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
