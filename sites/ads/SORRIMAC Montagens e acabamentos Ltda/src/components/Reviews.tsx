import { Quote } from 'lucide-react';
import { StarIcon, GoogleIcon } from './icons';

interface Review {
  text: string;
  initials: string;
  name: string;
  meta: string;
}

const reviews: Review[] = [
  {
    text: '"Empresa séria, preza muito com a qualidade, agilidade, mão de obra de primeira, atendimento 100%, preço justo. Recomendo muito!"',
    initials: 'MS',
    name: 'Mário Sergio',
    meta: 'Local Guide · 19 avaliações',
  },
  {
    text: '"O melhor serviço, acabamentos impecáveis. Entrega muita qualidade. Vale muito a pena contratar! Profissionalismo e dedicação em cada detalhe."',
    initials: 'JP',
    name: 'Janice Paula da Silva Nantes',
    meta: 'Local Guide · 7 avaliações',
  },
  {
    text: '"Empresa extremamente profissional com excelência no atendimento e cumprimento dos prazos. Recomendo sempre. Superou minhas expectativas!"',
    initials: 'CT',
    name: 'Cleusa Terezinha da Silva',
    meta: '1 avaliação',
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 px-4 py-2 rounded-full mb-4">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wider">Avaliações</span>
          </div>
          <h2 className="section-title mb-4">
            O Que Nossos <span className="text-brand-orange">Clientes Dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-5xl font-extrabold text-brand-dark">5.0</div>
            <div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-brand-orange fill-current" />
                ))}
              </div>
              <p className="text-brand-gray-mid text-sm mt-1">Avaliação média no Google</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="review-card opacity-0 translate-y-8 relative bg-brand-gray-light rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute -top-3 left-6">
                <div className="bg-brand-orange rounded-full p-2 shadow-lg">
                  <Quote className="lucide lucide-quote text-white" width={14} height={14} />
                </div>
              </div>
              <div className="mb-4 pt-2">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} className="w-4 h-4 text-brand-orange fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-brand-gray leading-relaxed mb-6 text-sm italic">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-brand-dark text-sm">{r.name}</div>
                  <div className="text-brand-gray-mid text-xs">{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-3">
            <GoogleIcon className="w-5 h-5" />
            <span className="text-brand-gray text-sm">
              Avaliado com <strong>5.0 estrelas</strong> no Google Meu Negócio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
