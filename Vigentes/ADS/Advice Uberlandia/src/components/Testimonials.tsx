import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const REVIEWS = [
  {
    name: 'Murilo Valenso',
    rating: 5,
    time: '1 mês atrás',
    text: 'Atendimento excelente, ambiente extremamente organizado e uma equipe de funcionários educados, atenciosos e profissionais. Dá pra perceber o cuidado em cada detalhe, tudo funciona de forma impecável e meu atendimento foi super rápido.',
    initials: 'MV',
  },
  {
    name: 'Ana Paula Rodrigues da Silva',
    rating: 5,
    time: '1 mês atrás',
    text: 'Gostaria de agradecer pelo tratamento excelente da clínica Advice. Profissionalismo, carinho, competência e atendimento humanizado. A equipe é excepcional, higiene impecável e resultados dos tratamentos excelentes. Me senti acolhida e segura.',
    initials: 'AP',
  },
  {
    name: 'Paula Magna',
    rating: 5,
    time: '1 mês atrás',
    text: 'Gosto do atendimento, lugar sempre rápido e prático, acessível e bom preço.',
    initials: 'PM',
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <section id="depoimentos" className="py-24 bg-neutral-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-500 font-semibold text-sm tracking-wider uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Avaliações reais de quem já conhece a qualidade dos nossos serviços.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div
              key={review.name}
              className={`bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-500 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-brand-200 mb-4" />
              <p className="text-neutral-600 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">
                    {review.name}
                  </div>
                  <div className="text-neutral-400 text-xs">{review.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
