import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Acassio Gimenez',
    role: 'Local Guide · 15 avaliações',
    text: 'Ótimo atendimento, preços justos e peças com pronta entrega. Exatamente o que precisava para não parar a operação.',
    stars: 5,
  },
  {
    name: 'Ana Paula Anderle',
    role: 'Local Guide · 17 avaliações',
    text: 'Ótimo atendimento e de fácil negociação. Super indico para quem trabalha com máquinas pesadas.',
    stars: 5,
  },
  {
    name: 'Leonardo Brianez',
    role: '38 avaliações · 29 fotos',
    text: 'Excelente atendimento. Empresa séria, com produtos de qualidade e equipe sempre pronta para ajudar.',
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function ReviewCard({ name, role, text, stars, delay }: typeof reviews[0] & { delay: number }) {
  const { ref, visible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`bg-gray-50 border border-gray-100 rounded-2xl p-7 flex flex-col gap-5 hover:shadow-lg hover:border-brand-red/20 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Quote size={28} className="text-brand-red/30" />
      <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">"{text}"</p>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-brand-dark text-sm">{name}</div>
          <div className="text-xs text-gray-400 mt-0.5">{role}</div>
        </div>
        <Stars count={stars} />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-red text-sm font-bold uppercase tracking-widest">Avaliações</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark">
            O que Nossos Clientes Dizem
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5">
            <Stars count={5} />
            <span className="font-extrabold text-brand-dark text-xl">5.0</span>
            <span className="text-gray-500 text-sm">no Google</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} {...r} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
