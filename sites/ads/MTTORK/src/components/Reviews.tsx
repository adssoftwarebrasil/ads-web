import { Star, Quote } from 'lucide-react';

type Review = {
  initials: string;
  avatarGradient: string;
  name: string;
  meta: string;
  text: string;
  delay: number;
};

const reviews: Review[] = [
  {
    initials: 'MS',
    avatarGradient: 'from-brand-red to-red-700',
    name: 'Maicon Segura',
    meta: 'Cliente verificado',
    text: 'Extremamente competente e confiável. Supera as expectativas. Recomendo de olhos fechados para quem precisa de serviço de qualidade em injeção diesel.',
    delay: 0,
  },
  {
    initials: 'RN',
    avatarGradient: 'from-brand-dark to-brand-darkDeep',
    name: 'Roger Mitchel Nascentes',
    meta: 'Cliente verificado',
    text: 'Top, excelente profissional. Recomendo! Serviço de primeira qualidade, atendimento rápido e preço justo. Sem dúvidas o melhor da região.',
    delay: 120,
  },
  {
    initials: 'ET',
    avatarGradient: 'from-brand-light to-brand-dark',
    name: 'Eduardo Takahara',
    meta: 'Guia Local · 16 avaliações',
    text: 'Excelente lugar, serviço de qualidade, ótimo atendimento e o valor do serviço bem acessível. Recomendo para todos que precisam de serviço diesel na região.',
    delay: 240,
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-light rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-light font-semibold text-sm uppercase tracking-widest mb-3">
            Google Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="lucide lucide-star fill-yellow-400 text-yellow-400"
                  width={22}
                  height={22}
                />
              ))}
            </div>
            <span className="text-white font-bold text-2xl">5.0</span>
            <span className="text-white/50 text-sm">no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: `${review.delay}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.avatarGradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-sm">{review.initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{review.name}</p>
                    <p className="text-white/40 text-xs">{review.meta}</p>
                  </div>
                </div>
                <Quote
                  className="lucide lucide-quote text-brand-light/40 flex-shrink-0"
                  width={22}
                  height={22}
                />
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="lucide lucide-star fill-yellow-400 text-yellow-400"
                    width={16}
                    height={16}
                  />
                ))}
              </div>
              <p className="text-white/75 text-sm leading-relaxed mt-4">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/search/MTTORK+Sistema+de+Inje%C3%A7%C3%A3o+Diesel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-medium px-6 py-3 rounded-full text-sm transition-all duration-200"
          >
            Ver todas as avaliações no Google
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
