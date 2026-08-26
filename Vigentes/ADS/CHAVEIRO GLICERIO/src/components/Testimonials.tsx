import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Evelane Santos',
    rating: 5,
    time: '1 mês atrás',
    text: 'Eu não sou muito de avaliar os lugares, mas tenho que reconhecer quando o atendimento e serviço são de qualidade. Fui neste local, eles foram incríveis comigo, ótimo atendimento, bem rápido e com o valor bem justo. Fiquei muito satisfeita, com certeza irei recomendar!',
    initials: 'ES',
  },
  {
    name: 'Junior Júnior',
    rating: 5,
    time: '5 meses atrás',
    text: 'Super recomendo! Tava com problema na chave do meu carro e outro chaveiro disse que teria que trocar a chave toda e codificar (ia ficar R$ 550). Levei no Chaveiro Glicério e arrumaram minha chave gastando apenas R$ 50.',
    initials: 'JJ',
    highlight: true,
  },
  {
    name: 'Sophia Fonseca',
    rating: 5,
    time: '7 meses atrás',
    text: 'Equipe incrível, solucionou meu problema da chave do meu carro que não era nem a bateria nem a placa, e foi super rápido! Ótimo que tem estacionamento no local.',
    initials: 'SF',
    badge: 'Guia Local',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-brand-yellow fill-brand-yellow' : 'text-brand-white/20'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.section-animate');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="avaliacoes" ref={sectionRef} className="bg-brand-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-animate text-center mb-14">
          <span className="inline-block text-brand-yellow text-sm font-semibold uppercase tracking-widest mb-3">
            Avaliações Reais
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-white mb-4">
            O que dizem nossos clientes
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-brand-yellow fill-brand-yellow" />
              ))}
            </div>
            <span className="text-brand-white font-black text-2xl">4.8</span>
            <span className="text-brand-white/40 text-sm">no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <div
              key={review.name}
              className={`section-animate relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                review.highlight
                  ? 'bg-brand-yellow border-brand-yellow'
                  : 'bg-brand-gray-dark border-white/8 hover:border-brand-yellow/30'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote
                size={28}
                className={`mb-4 ${review.highlight ? 'text-brand-black/20' : 'text-brand-yellow/20'}`}
              />
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  review.highlight ? 'text-brand-black/80' : 'text-brand-white/70'
                }`}
              >
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                    review.highlight ? 'bg-brand-black/15 text-brand-black' : 'bg-brand-yellow text-brand-black'
                  }`}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p
                      className={`font-semibold text-sm ${
                        review.highlight ? 'text-brand-black' : 'text-brand-white'
                      }`}
                    >
                      {review.name}
                    </p>
                    {review.badge && (
                      <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full">
                        {review.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Stars count={review.rating} />
                    <span
                      className={`text-xs ${
                        review.highlight ? 'text-brand-black/50' : 'text-brand-white/35'
                      }`}
                    >
                      {review.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-animate text-center mt-12">
          <p className="text-brand-white/50 text-sm mb-5">
            Mais de centenas de clientes satisfeitos no Google.
          </p>
          <a
            href="https://www.google.com/maps/search/Chaveiro+Glicério+Campinas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 text-brand-white/70 hover:text-brand-yellow hover:border-brand-yellow/40 font-medium px-5 py-2.5 rounded-xl transition-all duration-200 text-sm"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
