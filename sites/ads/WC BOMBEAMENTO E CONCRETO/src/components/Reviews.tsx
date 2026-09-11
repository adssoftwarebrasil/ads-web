import { Star, Quote } from 'lucide-react';

interface Review {
  text: string;
  initial: string;
  name: string;
  meta: string;
  delay: number;
}

const reviews: Review[] = [
  {
    text: '"Ótimo trabalho e serviço maravilhoso, muito atencioso desde o fechamento do serviço até o término da contratação. Adorei o trabalho de vocês, Alex! Muito obrigada, Deus abençoe sua vida grandiosamente."',
    initial: 'R',
    name: 'Rafaela C.',
    meta: 'Local Guide · 10 avaliações',
    delay: 0,
  },
  {
    text: '"Ótimo atendimento, uma equipe preparada para atender o cliente. Super recomendo para quem precisa de concreto usinado de qualidade na região."',
    initial: 'Z',
    name: 'Zal Gama',
    meta: 'Local Guide · 116 avaliações',
    delay: 120,
  },
  {
    text: '"Muito satisfeito com a competência e agilidade na prestação de serviço. Trabalho impecável, entrega no prazo e equipe muito profissional."',
    initial: 'R',
    name: 'Reginaldo Francisco',
    meta: '1 avaliação · 3 fotos',
    delay: 240,
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="bg-brand-surface py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white">O que nossos clientes dizem</h2>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="text-brand-orange fill-brand-orange" />
                ))}
              </div>
              <span className="text-2xl font-extrabold text-brand-white">4.9</span>
            </div>
            <span className="text-brand-gray text-sm">no Google Maps</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="relative flex flex-col gap-5 p-6 lg:p-7 bg-brand-dark rounded-2xl border border-white/6 hover:border-brand-orange/20 transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: `${review.delay}ms` }}
            >
              <Quote size={28} className="text-brand-orange/20 absolute top-5 right-5" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-brand-orange fill-brand-orange" />
                ))}
              </div>
              <p className="text-sm text-brand-gray leading-relaxed flex-1">{review.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                <div className="w-10 h-10 rounded-full bg-brand-orange/15 flex items-center justify-center">
                  <span className="text-brand-orange font-bold text-sm">{review.initial}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-white">{review.name}</p>
                  <p className="text-xs text-brand-gray">{review.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/WC+Concreto+e+Bombeamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-brand-gray hover:text-brand-orange transition-colors font-medium"
          >
            Ver todas as avaliações no Google Maps
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
