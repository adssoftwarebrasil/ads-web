import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Thiago Ferreira',
    reviews: 14,
    date: '3 meses atrás',
    rating: 5,
    text: 'Parabéns! Amo comprar aqui, a manipulação também é de parabéns. Todos muito alegres — farmácia de qualidade!',
    avatar: 'T',
  },
  {
    name: 'Gislene Araujo',
    badge: 'Guia Local',
    reviews: 12,
    date: '2 meses atrás',
    rating: 5,
    text: 'Atendimento ótimo! Farmácia completa com manipulação de medicamentos, perfumaria e muito mais. Entrega a domicílio disponível.',
    avatar: 'G',
  },
  {
    name: 'Thalita Bitencourt',
    badge: 'Guia Local',
    reviews: 31,
    date: '6 meses atrás',
    rating: 4,
    text: 'Ótimo atendimento! Me senti muito bem atendida. Recomendo a todos que precisam de uma farmácia de confiança.',
    avatar: 'T',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 fill-gray-300'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="depoimentos" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container-max">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Avaliações reais
          </span>
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle text-center mx-auto">
            A opinião de quem já experimentou nossos serviços é o maior testemunho da nossa qualidade.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-md mt-8">
            <div className="text-center">
              <p className="text-4xl font-black text-brand-blue">4.4</p>
              <div className="flex gap-0.5 mt-1 justify-center">
                {[1, 2, 3, 4].map((s) => (
                  <Star key={s} size={16} className="text-amber-400 fill-amber-400" />
                ))}
                <Star size={16} className="text-amber-400 fill-amber-400/40" />
              </div>
              <p className="text-gray-500 text-xs mt-1">no Google</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="reveal card-hover bg-white rounded-3xl p-7 shadow-sm border border-gray-100 relative flex flex-col"
            >
              <Quote size={32} className="text-brand-blue/10 absolute top-6 right-6" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{review.name}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {review.badge && (
                      <span className="text-xs text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full font-medium">
                        {review.badge}
                      </span>
                    )}
                    <span className="text-xs text-gray-400">{review.reviews} avaliações</span>
                  </div>
                </div>
              </div>

              <StarRating rating={review.rating} />

              <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-1">"{review.text}"</p>

              <p className="text-gray-400 text-xs mt-4">{review.date}</p>
            </div>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-12 reveal">
          <p className="text-gray-500 text-sm mb-4">Gostou do nosso atendimento? Deixe sua avaliação!</p>
          <a
            href="https://g.page/r/drogaria-medalha-milagrosa/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300"
          >
            Avaliar no Google
          </a>
        </div>
      </div>
    </section>
  );
}
