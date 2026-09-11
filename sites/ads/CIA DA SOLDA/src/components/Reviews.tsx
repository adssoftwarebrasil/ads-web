import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reviews = [
  {
    name: 'Miltinho',
    role: 'Local Guide · 20 avaliações',
    stars: 5,
    text: 'Super indico, preços ótimos, atendimento primeira linha — pessoal muito atencioso. Se tiver dúvidas de algo eles explicam com muito profissionalismo. 5 estrelas de olhos fechados.',
    initial: 'M',
    color: 'bg-brand-red',
  },
  {
    name: 'Darlene Dias',
    role: 'Local Guide · 19 avaliações',
    stars: 5,
    text: 'Ótimo atendimento! Produtos de primeira qualidade com preços acessíveis. Excelente custo benefício. Recomendo para qualquer profissional da área.',
    initial: 'D',
    color: 'bg-brand-navy',
  },
  {
    name: 'Felipe Moreira Pádua',
    role: '63 avaliações',
    stars: 5,
    text: 'Loja completa com produtos para solda e corte, discos e consumíveis. Preço do arame diferenciado. Agilidade no atendimento e equipe top. Ana Flávia conhece muito e sempre auxilia com identificação de materiais e peças. Parceiros top!',
    initial: 'F',
    color: 'bg-brand-blue',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { ref, inView } = useInView();

  return (
    <section id="avaliacoes" className="bg-[#0D0D0D] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3 block">
            Avaliações Google
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            O que nossos clientes
            <span className="text-brand-red block">dizem sobre nós</span>
          </h2>
          <div className="inline-flex items-center gap-3 bg-[#161616] border border-white/5 px-5 py-2.5 rounded-full mt-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={16}
                  className={i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-yellow-400 opacity-70'}
                />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.7</span>
            <span className="text-gray-500 text-sm">no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index }: { review: (typeof reviews)[0]; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`bg-[#161616] border border-white/5 rounded-2xl p-6 relative transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Quote size={32} className="text-brand-red/20 absolute top-4 right-4" />
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
          {review.initial}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{review.name}</p>
          <p className="text-gray-500 text-xs">{review.role}</p>
        </div>
      </div>
      <StarRating count={review.stars} />
      <p className="text-gray-400 text-sm leading-relaxed mt-3">{review.text}</p>
    </div>
  );
}
