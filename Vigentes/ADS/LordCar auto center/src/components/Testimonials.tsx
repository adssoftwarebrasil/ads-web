import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Noemia Limao',
    rating: 5,
    date: 'Recente',
    text: 'Lord Car, ótimo atendimento! Pedi um orçamento do meu carro e foi o único que passou. Fiz o serviço lá, parabéns rapazes pela honestidade! Gostei muito.',
    initial: 'N',
  },
  {
    name: 'Orora Lima',
    rating: 5,
    date: 'Recente',
    text: 'Muito bom atendimento deles. Troquei meu aditivo e ficou muito bom. Recomendo para todos — o melhor serviço!',
    initial: 'O',
  },
  {
    name: 'Jevana Vegolino',
    rating: 5,
    date: 'Recente',
    text: 'Melhor serviço e atendimento com café e bolachinha! Troca de amortecedor — serviço completo e perfeito. Recomendo para todos!',
    initial: 'J',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-300 fill-gray-300'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-yellow/15 text-brand-yellow font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Avaliações reais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Avaliação média de{' '}
            <span className="text-brand-yellow font-bold">5.0 estrelas</span> no Google.
            Confiança construída serviço a serviço.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="text-brand-yellow fill-brand-yellow" />
              ))}
            </div>
            <span className="text-white font-black text-2xl">5.0</span>
            <span className="text-white/40 text-sm font-medium">/ Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <div
              key={review.name}
              className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-brand-yellow/30 transition-all duration-300 hover:-translate-y-1 ${
                index === 1 ? 'md:scale-105 md:shadow-2xl md:shadow-brand-yellow/10 bg-white/8 border-brand-yellow/20' : ''
              }`}
            >
              <Quote size={28} className="text-brand-yellow/30 mb-4" />

              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark font-black text-sm flex-shrink-0">
                    {review.initial}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-white/40 text-xs">{review.date}</p>
                  </div>
                </div>
                <StarRating count={review.rating} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Lord+Car+Auto+Center"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white/20 text-white/80 font-semibold text-sm px-7 py-3.5 rounded-full hover:border-brand-yellow hover:text-brand-yellow transition-all duration-200"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
