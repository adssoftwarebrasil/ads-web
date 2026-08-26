import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageSquare } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"O cliente deu a nota máxima, mas não deixou um comentário."',
    name: 'Antonio Almeida',
    date: '17/08/2025',
  },
  {
    text: '"Facilidade no pagamento para você comprar todo o material que precisa"',
    name: 'Lorena Bastos de Jesus',
    date: '12/08/2025',
  },
  {
    text: '"Foi ótimo, comprar material aqui."',
    name: 'Jose Carlos',
    date: '22/05/2025',
  },
  {
    text: '"Excelente atendimento e preço bom"',
    name: 'Rafael Amorim',
    date: '25/03/2025',
  },
  {
    text: '"Incrível !"',
    name: 'Marcelo Barreto',
    date: '25/03/2025',
  },
  {
    text: '"Ótima experiência na loja. Boa localização e bom atendimento."',
    name: 'Ana Carolina',
    date: '25/03/2025',
  },
  {
    text: '"Atendimento excelente e produtos de ótima qualidade! Fui muito bem recebida, a equipe é atenciosa e prestativa, sempre disposta a ajudar e tirar dúvidas. A loja tem uma grande variedade de materiais, com preços justos e entrega rápida. Recomendo de olhos fechados!"',
    name: 'Letícia Beldel',
    date: '25/03/2025',
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'prev' | 'next') => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollBy({
        left: dir === 'next' ? amount : -amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#e8221a] font-semibold text-sm uppercase tracking-wider">
            Opinião dos Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-3">
            Nossos <span className="text-[#253579]">Clientes</span> Satisfeitos
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-3xl font-bold text-gray-800">5.0</span>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-6 transition-colors text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
            <p className="text-lg text-gray-600">(Baseado em 7 avaliações)</p>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => scroll('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-lg text-gray-800 hover:bg-white transition-all hidden lg:block border border-gray-200"
            aria-label="Depoimento Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll gap-8 pb-4 scrollbar-hide snap-x snap-mandatory px-4 lg:px-12"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-[calc(33.333%-22px)] snap-start flex-shrink-0"
              >
                <div className="h-full bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative group">
                  <MessageSquare className="absolute top-4 right-4 size-8 text-gray-200 transition-colors group-hover:text-[#253579]/30" />
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 min-h-[80px] italic">{t.text}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-bold text-lg text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">Avaliado em: {t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-lg text-gray-800 hover:bg-white transition-all hidden lg:block border border-gray-200"
            aria-label="Próximo Depoimento"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="lg:hidden text-center mt-6 text-gray-500 text-sm">
          <ChevronLeft size={14} className="inline-block" /> Deslize para ver mais
          depoimentos <ChevronRight size={14} className="inline-block" />
        </div>
      </div>
    </section>
  );
}
