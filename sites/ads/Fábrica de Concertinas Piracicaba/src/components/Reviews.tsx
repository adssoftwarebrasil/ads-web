import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Review {
  text: string;
  initials: string;
  name: string;
  meta: string;
  delay: string;
}

const reviews: Review[] = [
  {
    text: '"Obrigado a todos vocês da Fábrica de Concertinas Piracicaba pelo excelente trabalho — uma empresa parceira sensacional. Super recomendo!"',
    initials: 'IB',
    name: 'Imperador BZ',
    meta: 'Local Guide · 55 avaliações',
    delay: '0ms',
  },
  {
    text: '"Bom atendimento! Sr. Washington bastante atencioso e deu desconto. Fiquei muito satisfeito com o serviço prestado."',
    initials: 'FP',
    name: 'Filipe Pelaes',
    meta: 'Cliente verificado',
    delay: '150ms',
  },
  {
    text: '"Serviço muito bom, preço justo! Indico sem hesitar para quem precisa de segurança de qualidade na região."',
    initials: 'IA',
    name: 'Isabela Aparecida',
    meta: '3 avaliações · 1 foto',
    delay: '300ms',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          width={14}
          height={14}
          strokeWidth={2}
          className="lucide lucide-star text-yellow-400 fill-yellow-400"
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [headRef, headIn] = useInView<HTMLDivElement>();
  const [gridRef, gridIn] = useInView<HTMLDivElement>(0.1);
  const [linkRef, linkIn] = useInView<HTMLDivElement>();

  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[rgb(240,27,38)] text-xs font-bold uppercase tracking-widest mb-3">
            O Que Dizem Nossos Clientes
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(37,34,35)] leading-tight mb-4">
            Avaliação <span className="text-[rgb(240,27,38)]">5.0 Estrelas</span> no
            Google
          </h2>
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-3 mt-2">
            <div className="text-4xl font-bold text-[rgb(37,34,35)]">5.0</div>
            <div className="flex flex-col items-start">
              <Stars />
              <span className="text-xs text-gray-500 mt-1">
                Baseado em avaliações do Google
              </span>
            </div>
          </div>
        </div>
        <div ref={gridRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className={`relative bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-[rgb(240,27,38)]/30 hover:shadow-lg transition-all duration-500 group ${
                gridIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: r.delay }}
            >
              <div className="absolute top-5 right-5 text-[rgb(240,27,38)]/15 group-hover:text-[rgb(240,27,38)]/30 transition-colors">
                <Quote
                  width={40}
                  height={40}
                  strokeWidth={2}
                  className="lucide lucide-quote "
                />
              </div>
              <Stars />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 italic">
                {r.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgb(240,27,38)] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-[rgb(37,34,35)] text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={linkRef}
          className={`text-center mt-10 transition-all duration-700 delay-500 ${
            linkIn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="https://www.google.com/maps/search/FABRICA+DE+CONCERTINAS+PIRACICABA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[rgb(240,27,38)] transition-colors font-semibold"
          >
            Ver todas as avaliações no Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
