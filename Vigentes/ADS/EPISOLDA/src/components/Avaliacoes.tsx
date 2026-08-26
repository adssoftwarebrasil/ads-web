import { Star, Quote } from 'lucide-react';

interface Review {
  initial: string;
  avatarBg: string;
  name: string;
  meta: string;
  text: string;
}

const reviews: Review[] = [
  {
    initial: 'R',
    avatarBg: 'bg-[rgb(16,109,71)]',
    name: 'Renato Razera Junior',
    meta: 'Local Guide · 13 avaliações',
    text: 'Atendimento personalizado e cordial!!! Equipe muito atenciosa e prestativa, sempre disposta a ajudar na escolha do produto certo.',
  },
  {
    initial: 'M',
    avatarBg: 'bg-[rgb(206,58,52)]',
    name: 'Mauro Sergio',
    meta: 'Local Guide · 43 avaliações · 5 fotos',
    text: 'Atendimento muito bom e a experiência deles ajuda demais. Estão de parabéns! Recomendo para todos que precisam de equipamentos de solda em Piracicaba.',
  },
  {
    initial: 'G',
    avatarBg: 'bg-gray-700',
    name: 'Giovani Janoni',
    meta: '2 avaliações',
    text: 'Melhor loja da cidade! Variedade de produtos incrível, preços justos e atendimento de primeira. Não vou a outro lugar.',
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="lucide lucide-star text-amber-400 fill-amber-400" width={16} height={16} />
      ))}
    </div>
  );
}

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[rgb(16,109,71)] font-semibold text-sm uppercase tracking-widest mb-3">
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            O que nossos clientes <span className="text-[rgb(16,109,71)]">dizem sobre nós</span>
          </h2>
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100 mt-4">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-gray-900">4.9</span>
              <StarRow />
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">Média no Google</p>
              <p className="text-xs text-gray-500">Baseado em avaliações verificadas</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`${r.avatarBg} w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0`}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.meta}</p>
                  </div>
                </div>
                <Quote className="lucide lucide-quote text-gray-200 shrink-0 mt-1" width={20} height={20} />
              </div>
              <StarRow />
              <p className="mt-4 text-gray-600 text-sm leading-relaxed flex-1">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
