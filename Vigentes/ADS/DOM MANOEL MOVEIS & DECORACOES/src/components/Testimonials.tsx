import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    text: '"Excelente qualidade! Fiquei impressionada com o acabamento dos móveis. São peças lindas que vão durar para sempre. Super recomendo a Dom Manoel!"',
    initial: 'L',
    name: 'Leticia Colinsque',
    role: 'Cliente',
    delay: 0,
  },
  {
    text: '"Móveis de madeira maciça é aqui! Recomendo — excelente qualidade. Para quem busca móveis de verdade, sem aquelas peças que quebram em pouco tempo, esse é o lugar certo."',
    initial: 'M',
    name: 'Mauro Feronato',
    role: 'Guia Local · 227 avaliações',
    delay: 120,
  },
  {
    text: '"Só móveis e decoração de primeira. Loja linda e atendimento excelente! A equipe é muito atenciosa e os produtos são de uma qualidade incrível."',
    initial: 'N',
    name: 'Niuara Heck',
    role: 'Guia Local · 61 avaliações',
    delay: 240,
  },
];

function FullStars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-[rgb(183,149,108)] text-[rgb(183,149,108)]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="depoimentos" className="py-24 bg-[rgb(103,66,42)]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
            <span className="text-[rgb(183,149,108)] text-sm font-semibold uppercase tracking-widest">
              Depoimentos
            </span>
            <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[rgb(103,66,42)] font-bold mb-4">
            O que nossos clientes
            <br />
            <span className="text-[rgb(183,149,108)]">falam de nós</span>
          </h2>
          <div className="inline-flex items-center gap-3 bg-white border border-[rgb(183,149,108)]/30 rounded-full px-6 py-3 mt-2 shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-[rgb(183,149,108)] text-[rgb(183,149,108)]"
                />
              ))}
              <Star size={16} className="fill-[rgb(183,149,108)]/50 text-[rgb(183,149,108)]/50" />
            </div>
            <span className="font-bold text-[rgb(103,66,42)] text-sm">4.4 de 5</span>
            <span className="text-gray-400 text-sm">· Google Reviews</span>
          </div>
        </div>
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-transparent hover:border-[rgb(183,149,108)]/20 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${t.delay}ms` }}
            >
              <Quote size={32} className="text-[rgb(183,149,108)]/20 absolute top-6 right-6" />
              <FullStars />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 italic">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgb(103,66,42)] flex items-center justify-center text-cream font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-[rgb(103,66,42)] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
