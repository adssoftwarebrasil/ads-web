import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Marco Antonio',
    rating: 5,
    text: 'Serviço top de limpeza de catalisador em Rondonópolis! Resolveu o problema do desempenho do caminhão. Recomendo demais!',
    detail: '1 avaliação',
  },
  {
    name: 'Agrício VT',
    rating: 5,
    text: 'Entendimento excelente, serviço melhor ainda. Agilidade e transparência do começo ao fim. Profissionais de verdade.',
    detail: '1 avaliação · 2 fotos',
  },
  {
    name: 'Sebastião Mariano',
    rating: 5,
    text: 'Excelente atendimento! Equipe muito atenciosa e prestativa. Saí daqui com o caminhão resolvido e satisfeito com o serviço.',
    detail: '1 avaliação',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-[#F07013] fill-[#F07013]' : 'text-[#FFFFFD]/20'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#F07013] text-sm font-semibold tracking-widest uppercase">Depoimentos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#FFFFFD]">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 bg-[#F07013]/10 border border-[#F07013]/20 px-6 py-3 rounded-full">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-[#F07013] fill-[#F07013]" />
              ))}
            </div>
            <span className="text-[#FFFFFD] font-bold text-lg">4.8</span>
            <span className="text-[#FFFFFD]/50 text-sm">no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="relative bg-[#FFFFFD]/[0.03] border border-[#FFFFFD]/10 rounded-xl p-7 hover:border-[#F07013]/30 transition-all duration-300 flex flex-col">
              <Quote size={28} className="text-[#F07013]/20 mb-4" />
              <p className="text-[#FFFFFD]/70 text-base leading-relaxed flex-1 mb-6">
                "{r.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#FFFFFD]/10">
                <div>
                  <p className="text-[#FFFFFD] font-semibold text-sm">{r.name}</p>
                  <p className="text-[#FFFFFD]/30 text-xs mt-0.5">{r.detail}</p>
                </div>
                <Stars count={r.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
