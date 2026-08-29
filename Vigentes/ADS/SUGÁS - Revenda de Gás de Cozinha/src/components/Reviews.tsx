import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reviews = [
  {
    name: 'Suzyane Luz Spontoni',
    role: '3 avaliações',
    rating: 5,
    text: 'Ótimo atendimento e rapidez na entrega! Sempre que preciso de gás, ligo para a SUGÁS e o botijão chega rapidinho. Recomendo demais!',
    avatar: 'S',
  },
  {
    name: 'Emerson Salviano Dos Santos',
    role: 'Guia Local · 39 avaliações',
    rating: 5,
    text: 'Melhor entrega da cidade. Preço justo e peso certo. Já comprei várias vezes e nunca me decepcionou. Atendimento excelente!',
    avatar: 'E',
    featured: true,
  },
  {
    name: 'Marcos Oliveira',
    role: '5 avaliações',
    rating: 5,
    text: 'Excelência no atendimento e na entrega. Nota 10. Profissionais atenciosos e entrega super rápida. Com certeza voltarei a comprar.',
    avatar: 'M',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-brand-yellow text-brand-yellow' : 'text-gray-300'}
      />
    ))}
  </div>
);

export default function Reviews() {
  const { ref, inView } = useInView();

  return (
    <section id="avaliacoes" className="py-20 bg-brand-blue overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-brand-yellow/20 border border-brand-yellow/30 text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            O que dizem nossos clientes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-white leading-tight">
            Avaliação Média:{' '}
            <span className="text-brand-yellow">4.5 estrelas</span>
          </h2>
          <p className="mt-4 text-brand-white/70 max-w-xl mx-auto text-base">
            A satisfação dos nossos clientes é o nosso maior prêmio. Veja o que eles dizem sobre a SUGÁS.
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={24}
                className={i < 4 ? 'fill-brand-yellow text-brand-yellow' : 'text-brand-yellow/40'}
              />
            ))}
            <span className="text-brand-yellow font-bold ml-2 text-lg">4.5</span>
            <span className="text-brand-white/60 text-sm ml-1">no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`relative bg-white/5 border border-white/10 rounded-2xl p-7 transition-all duration-500 hover:bg-white/10 hover:border-brand-yellow/30 ${
                review.featured ? 'ring-2 ring-brand-yellow/50 bg-white/10' : ''
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {review.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-blue text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  Guia Local
                </span>
              )}
              <Quote size={28} className="text-brand-yellow/30 mb-4" />
              <p className="text-brand-white/85 text-base leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-yellow flex items-center justify-center text-brand-blue font-black text-lg flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-brand-white font-semibold text-sm">{review.name}</p>
                  <p className="text-brand-white/50 text-xs mb-1">{review.role}</p>
                  <StarRating rating={review.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://wa.me/556696502020?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-yellow hover:bg-yellow-400 text-brand-blue font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-brand-blue" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fazer Meu Pedido Agora
          </a>
        </div>
      </div>
    </section>
  );
}
