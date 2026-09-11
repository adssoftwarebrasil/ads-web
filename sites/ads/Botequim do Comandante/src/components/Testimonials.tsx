import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    name: 'Viviane Baptista da Silva',
    reviews: 3,
    text: 'Choripan e pão delicioso, os melhores que já comi. Os espetinhos também são maravilhosos. Atendimento, todos são gentis. Amamos ir lá. Recomendo!',
    stars: 5,
    highlight: 'Espetinhos Maravilhosos',
  },
  {
    name: 'Adilson Junior',
    reviews: 4,
    text: 'Local ótimo para quem gosta de lugar mais simples, mas organizado. Som ambiente onde não atrapalha conversar, cerveja estupidamente gelada, garçons educadíssimos e sempre prestativos. Proprietário sempre presente. Lugar pet friendly!',
    stars: 5,
    highlight: 'Cerveja Gelada & Pet Friendly',
  },
  {
    name: 'Lorena Camargo',
    reviews: 7,
    text: 'Eu adoro este lugar! Frequento sempre com meu marido. O garçom Joinho sempre muito gentil e prestativo. Comida boa! Cerveja gelada! Ambiente agradável. Por mais lugares assim!',
    stars: 5,
    highlight: 'Ambiente Agradável',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= count ? 'text-brand-gold' : 'text-white/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section id="avaliacoes" className="py-24 lg:py-32 bg-neutral-950 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label mb-4">O que dizem sobre nós</p>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">
            Avaliações dos <span className="text-brand-gold">nossos clientes</span>
          </h2>

          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 mt-4">
            <div className="text-center">
              <div className="text-5xl font-bold font-serif text-brand-gold">4.7</div>
              <StarRating count={5} />
              <div className="text-brand-gray text-xs mt-1">no Google</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-left">
              <div className="text-brand-white font-medium">Avaliação Excelente</div>
              <div className="text-brand-gray text-sm">Baseado em avaliações reais</div>
              <div className="flex items-center gap-1.5 mt-1">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-blue-light" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-brand-gray text-xs">Google Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 hover:border-brand-gold/30 transition-all duration-300 flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm mb-2">
                    {t.name.charAt(0)}
                  </div>
                  <div className="font-semibold text-brand-white text-sm">{t.name}</div>
                  <div className="text-brand-gray text-xs">{t.reviews} avaliações no Google</div>
                </div>
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-brand-gold/30 flex-shrink-0" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <p className="text-brand-gray-light text-sm leading-relaxed flex-1 mb-4">{t.text}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <StarRating count={t.stars} />
                <span className="text-brand-gold text-xs font-semibold">{t.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
