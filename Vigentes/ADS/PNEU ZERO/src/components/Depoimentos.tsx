import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Depoimento {
  text: string;
  author: string;
  time: string;
}

const depoimentos: Depoimento[] = [
  {
    text: '"Serviço de excelente qualidade com destaque pra dois pontos que considero muito importantes: preço justo e bom atendimento. Muito confiável."',
    author: 'Pedra Azul Representações',
    time: '5 dias atrás',
  },
];

export default function Depoimentos() {
  const header = useInView<HTMLDivElement>();
  const card = useInView<HTMLDivElement>();
  const [current, setCurrent] = useState(0);

  const total = depoimentos.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const depoimento = depoimentos[current];

  return (
    <section id="depoimentos" className="bg-[rgb(245,245,245)] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-[rgb(227,17,35)] uppercase tracking-wider text-sm font-semibold mb-3">
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(3,3,4)] mb-4">Nossos clientes</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Veja o que nossos clientes satisfeitos têm a dizer sobre nossos serviços
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div
            ref={card.ref}
            className={`relative bg-white rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-700 ${
              card.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <Quote
              width={48}
              height={48}
              strokeWidth={2}
              className="lucide lucide-quote text-[rgb(227,17,35)] mb-6 mx-auto"
            />
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed italic">
                {depoimento.text}
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={20}
                    height={20}
                    strokeWidth={2}
                    className="lucide lucide-star fill-[rgb(227,17,35)] text-[rgb(227,17,35)]"
                  />
                ))}
              </div>
              <p className="text-lg font-bold text-[rgb(3,3,4)]">{depoimento.author}</p>
              <p className="text-sm text-gray-500 mt-1">{depoimento.time}</p>
            </div>
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-[rgb(227,17,35)] text-white hover:scale-110 transition-transform shadow-md"
                aria-label="Anterior"
              >
                <ChevronLeft width={24} height={24} strokeWidth={2} className="lucide lucide-chevron-left " />
              </button>
              <div className="flex gap-2">
                {depoimentos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-3 rounded-full transition-all ${
                      i === current ? 'bg-[rgb(227,17,35)] w-8' : 'bg-gray-300 w-3'
                    }`}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  ></button>
                ))}
              </div>
              <button
                onClick={next}
                className="p-3 rounded-full bg-[rgb(227,17,35)] text-white hover:scale-110 transition-transform shadow-md"
                aria-label="Próximo"
              >
                <ChevronRight width={24} height={24} strokeWidth={2} className="lucide lucide-chevron-right " />
              </button>
            </div>
            <div className="text-center">
              <a
                href="https://share.google/6YhRbCs0hXfD75PbD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[rgb(227,17,35)] font-semibold hover:gap-3 transition-all duration-300 group"
              >
                Ver mais avaliações
                <ExternalLink
                  width={18}
                  height={18}
                  strokeWidth={2}
                  className="lucide lucide-external-link group-hover:rotate-12 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
