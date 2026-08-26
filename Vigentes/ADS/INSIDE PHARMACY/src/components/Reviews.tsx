import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/scroll';

interface Review {
  initials: string;
  name: string;
  meta: string;
  time: string;
  text: string;
}

const reviews: Review[] = [
  {
    initials: 'DN',
    name: 'Daniel Noronha',
    meta: 'Guia Local · 24 avaliações',
    time: '2 meses atrás',
    text: 'Nunca fui tão bem atendido como fui na Inside Pharmacy. A proprietária, muito atenciosa e simpática, me atendeu pessoalmente. Fez um tour e me mostrou o laboratório e os processos de manipulação — tudo muito limpo e super organizado. O estabelecimento muito lindo e com muita variedade de produtos e ótimos preços. Parabéns a proprietária e toda equipe, voltarei sempre!',
  },
  {
    initials: 'WR',
    name: 'Welziney Rogelmo Pereira dos Santos',
    meta: '2 avaliações',
    time: '2 meses atrás',
    text: 'Excelente! Desde o primeiro atendimento buscando sempre oferecer o melhor preço e qualidade. Atendimento impecável, equipe preparada e produtos que realmente fazem diferença no dia a dia. Recomendo muito!',
  },
  {
    initials: 'LM',
    name: 'Larissa Marcussi',
    meta: '7 avaliações · 3 fotos',
    time: '4 meses atrás',
    text: 'Atendimento excelente. Melhor preço dentro das farmácias que cotei. Super indico. Estão de parabéns. Produtos de qualidade superior, entregues com agilidade e atenção. Com certeza voltarei e já indiquei para amigos e família.',
  },
];

function Stars({ size }: { size: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} width={size} height={size} strokeWidth={2} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

function ReviewCard({ review, style }: { review: Review; style?: React.CSSProperties }) {
  return (
    <div
      className="bg-brand-gray-light rounded-2xl p-8 border border-brand-gray-mid hover:border-brand-red/30 hover:shadow-xl hover:shadow-brand-red/5 transition-all duration-300 opacity-100 translate-y-0"
      style={style}
    >
      <Quote width={28} height={28} strokeWidth={2} className="text-brand-red mb-5" />
      <p className="text-brand-gray-dark leading-relaxed mb-6 text-sm">{review.text}</p>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {review.initials}
        </div>
        <div>
          <p className="font-semibold text-brand-black text-sm">{review.name}</p>
          <p className="text-brand-gray-text text-xs">{review.meta}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-gray-mid">
        <Stars size={13} />
        <span className="text-brand-gray-text text-xs">{review.time}</span>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [active, setActive] = useState(0);

  return (
    <section id="avaliacoes" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-brand-red"></span>
            <span className="text-brand-red text-xs font-semibold uppercase tracking-widest">Avaliações</span>
            <span className="h-px w-8 bg-brand-red"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-black mb-5">
            O que Nossos Clientes <span className="text-brand-red">Dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <Stars size={22} />
            <span className="text-3xl font-bold text-brand-black">5.0</span>
            <span className="text-brand-gray-dark text-sm">no Google Reviews</span>
          </div>
        </div>
        <div className="transition-all duration-700 delay-200 opacity-100 translate-y-0">
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ReviewCard key={review.initials} review={review} style={{ transitionDelay: `${200 + i * 100}ms` }} />
            ))}
          </div>
          <div className="md:hidden">
            <ReviewCard review={reviews[active]} />
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setActive((a) => (a - 1 + reviews.length) % reviews.length)}
                className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center text-white hover:bg-brand-red transition-colors"
              >
                <ChevronLeft width={18} height={18} strokeWidth={2} />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === active ? 'bg-brand-red w-6' : 'bg-brand-gray-mid'
                    }`}
                  ></button>
                ))}
              </div>
              <button
                onClick={() => setActive((a) => (a + 1) % reviews.length)}
                className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center text-white hover:bg-brand-red transition-colors"
              >
                <ChevronRight width={18} height={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-14 bg-brand-black rounded-2xl p-8 sm:p-12 text-center transition-all duration-700 delay-400 opacity-100 translate-y-0">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-3">Pronto para começar?</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Faça parte dos clientes que confiam <span className="text-brand-red">na Inside Pharmacy</span>
          </h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/40 hover:-translate-y-0.5"
          >
            Solicitar Minha Fórmula
          </a>
        </div>
      </div>
    </section>
  );
}
