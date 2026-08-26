import { Star, Quote } from 'lucide-react';

interface Review {
  initials: string;
  name: string;
  meta: string;
  text: string;
}

const reviews: Review[] = [
  {
    initials: 'LD',
    name: 'Leandro Duarte',
    meta: 'Local Guide · 23 avaliações',
    text: 'Bom atendimento!! Preço justo, material de qualidade. Vendedor Micael sempre atencioso. Estão de parabéns!',
  },
  {
    initials: 'MS',
    name: 'Mauro S. Santos',
    meta: 'Local Guide · 38 avaliações',
    text: 'Ótimo atendimento, produtos com preço justo, entrega rápida, só indica equipe de funilaria conceituada. Recomendo!',
  },
  {
    initials: 'EE',
    name: 'Eisdemar Daniel Estrela',
    meta: 'Local Guide · 149 avaliações · 175 fotos',
    text: 'Sempre muito bem atendido, a loja é ampla com ótimos produtos e variedade incrível. Super recomendada!',
  },
];

function Stars() {
  return (
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
  );
}

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-red-600 text-sm font-bold uppercase tracking-widest">
            Google Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-full px-6 py-3 mt-2">
            <span className="text-3xl font-black text-white">4.9</span>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                <Stars />
              </div>
              <p className="text-xs text-gray-400">Avaliação média no Google</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-gray-700 transition-colors relative"
            >
              <Quote
                className="lucide lucide-quote text-red-700/30 absolute top-6 right-6"
                width={32}
                height={32}
              />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.meta}</p>
                </div>
              </div>
              <Stars />
              <p className="text-gray-300 text-sm leading-relaxed mt-4">{review.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-sm mt-8">
          Avaliações reais do Google Maps — RL Tintas e Acessórios Automotivos
        </p>
      </div>
    </section>
  );
}
