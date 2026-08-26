import { StarIcon } from './icons';

interface Review {
  text: string;
  initial: string;
  name: string;
  meta: string;
}

const reviews: Review[] = [
  {
    text: '"Não tenha dúvidas que seu atendimento nessa loja vai ser sem igual. Preços justos e atendimento excelente, recomendo de olhos fechados."',
    initial: 'F',
    name: 'Felipe Cardador',
    meta: 'Local Guide · 71 avaliações · 5 fotos',
  },
  {
    text: '"A loja onde fui mais bem atendido, os vendedores bem atenciosos e materiais de qualidade."',
    initial: 'M',
    name: 'Mateus Felipe',
    meta: '4 avaliações',
  },
  {
    text: '"Variedade muito boa de ferramentas, achei tudo que eu precisava, além do ótimo atendimento. Tiraram todas minhas dúvidas."',
    initial: 'M',
    name: 'Marcelo Silva',
    meta: '5 avaliações',
  },
];

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-orange/15 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            O que nossos clientes dizem
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Avaliações Reais</h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-5xl font-black text-brand-orange">5.0</div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <div className="text-gray-400 text-sm mt-1">no Google</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-brand-dark-light border border-white/10 rounded-2xl p-6 hover:border-brand-orange/30 transition-all duration-300"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-gray-300 text-sm leading-relaxed italic">{review.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-sm">
                  {review.initial}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{review.name}</div>
                  <div className="text-gray-500 text-xs">{review.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://maps.google.com/?cid=8230985882127090164"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-orange transition-colors border border-white/10 hover:border-brand-orange/30 px-5 py-2.5 rounded-lg"
          >
            Ver todas as avaliações no Google Maps
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M7 7h10v10"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
