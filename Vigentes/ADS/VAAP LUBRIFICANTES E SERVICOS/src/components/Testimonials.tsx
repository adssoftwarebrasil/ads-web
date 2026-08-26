import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reviews = [
  {
    name: 'Juscelino Martins',
    reviews: 4,
    rating: 5,
    text: 'Ótimo atendimento, serviço de ótima qualidade, a equipe cuida bem do seu veículo, inclusive limpam internamente! Parabéns a toda equipe!',
    initial: 'J',
    color: 'bg-brand-green',
  },
  {
    name: 'Leovania Loisa Rodrigues',
    reviews: 7,
    rating: 5,
    text: 'Preço bom, atendimento personalizado, equipe qualificada. Super indico para quem busca qualidade e confiança no serviço!',
    initial: 'L',
    color: 'bg-teal-600',
    badge: 'Foto verificada',
  },
  {
    name: 'Evandro M. C.',
    reviews: 57,
    rating: 5,
    badge: 'Local Guide',
    text: 'Ambiente super limpo, equipe ágil e produtos de primeira qualidade. Referência na região para quem cuida bem do veículo.',
    initial: 'E',
    color: 'bg-blue-600',
  },
];

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`bg-gray-50 border border-gray-100 rounded-3xl p-7 relative card-hover transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="absolute top-6 right-6 text-brand-green/15">
        <Quote size={44} className="fill-current" />
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed text-sm mb-6 relative z-10">
        "{review.text}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
          {review.initial}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            {review.badge && (
              <span className="text-xs bg-blue-50 text-blue-600 font-medium px-2 py-0.5 rounded-full">
                {review.badge}
              </span>
            )}
            <span className="text-xs text-gray-400">{review.reviews} avaliações</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref: titleRef, isInView: titleInView } = useInView();

  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-600 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Avaliações
          </span>
          <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-4xl font-black text-gray-900">4.9</span>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">Avaliação Média</p>
              <p className="text-xs text-gray-500">Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Vaap+Castrol+Lubrificantes+e+Servi%C3%A7os"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-green font-medium text-sm transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
