import { Quote, Star } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Review {
  text: string;
  initial: string;
  name: string;
  role: string;
  delay: number;
}

const reviews: Review[] = [
  {
    text:
      '"Serviço de qualidade, recomendo à todos. Atendimento excelente e resultado impecável. Saí de lá muito satisfeito e com o carro perfeito."',
    initial: 'R',
    name: 'Renan Pablio',
    role: 'Cliente',
    delay: 0,
  },
  {
    text:
      '"Ótimo pré serviço e pós serviço também. Acompanham o cliente em todas as etapas, desde a chegada até depois da entrega. Diferenciado!"',
    initial: 'S',
    name: 'Samuel Silva',
    role: 'Guia Local · 14 avaliações',
    delay: 120,
  },
  {
    text:
      '"Oficina sem enrolação, bom preço. Fui direto ao ponto, fui atendido rápido, preço justo e serviço bem feito. Com certeza voltarei sempre."',
    initial: 'J',
    name: 'João Neto (Relâmpago)',
    role: 'Guia Local · 21 avaliações',
    delay: 240,
  },
];

function Stars({ size }: { size: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="lucide lucide-star text-yellow-400 fill-yellow-400" />
      ))}
    </>
  );
}

export default function Reviews() {
  const header = useReveal<HTMLDivElement>();
  const cards = useReveal<HTMLDivElement>();
  const footer = useReveal<HTMLDivElement>();

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={header.ref}
          className={`text-center mb-14 transition-all duration-700 ${
            header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#EF1C1A]"></div>
            <span className="text-[#EF1C1A] text-sm font-bold uppercase tracking-widest">Avaliações</span>
            <div className="h-px w-8 bg-[#EF1C1A]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            O Que Nossos Clientes
            <br />
            <span className="text-[#FFFEDC]">Estão Dizendo</span>
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Avaliações reais do Google. A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </div>
        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div
              key={review.name}
              className={`bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#EF1C1A]/30 transition-all duration-500 group ${
                cards.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${review.delay}ms` }}
            >
              <Quote size={32} className="lucide lucide-quote text-[#EF1C1A]/40 mb-4" />
              <div className="flex gap-1 mb-4">
                <Stars size={16} />
              </div>
              <p className="text-white/80 text-base leading-relaxed mb-6 italic">{review.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EF1C1A] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{review.initial}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-white/40 text-xs">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={footer.ref}
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-500 ${
            footer.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="flex gap-1 mb-2">
              <Stars size={24} />
            </div>
            <span className="text-white font-bold text-2xl">5.0</span>
            <span className="text-white/50 text-sm">no Google</span>
          </div>
          <div className="hidden sm:block w-px h-16 bg-white/10"></div>
          <a
            href="https://www.google.com/maps?q=Saga+Sorriso+Centro+Automotivo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
