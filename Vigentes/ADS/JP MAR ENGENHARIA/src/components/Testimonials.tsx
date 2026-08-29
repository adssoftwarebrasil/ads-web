import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      '"A JPMAR nos auxiliou em todo o processo de licenciamento ambiental. Profissionais extremamente capacitados e atentos aos prazos. Recomendo sem hesitar!"',
    initial: 'C',
    name: 'Carlos Eduardo',
    role: 'Gerente de Operações · Construtora Sergipe',
  },
  {
    quote:
      '"Trabalhamos com a JPMAR em projetos de monitoramento ambiental e gestão de resíduos. A qualidade dos relatórios e o acompanhamento técnico são diferenciais que nos fidelizaram."',
    initial: 'F',
    name: 'Fernanda Lima',
    role: 'Diretora de Sustentabilidade · Grupo Energia NE',
  },
  {
    quote:
      '"Equipe técnica de alto nível, comprometida com a sustentabilidade e sempre disponível para esclarecer dúvidas. Os laudos entregues são completos e de excelente qualidade."',
    initial: 'R',
    name: 'Roberto Meneses',
    role: 'Coordenador de Projetos · Indústria Química do NE',
  },
  {
    quote:
      '"A expertise da JPMAR em gerenciamento de áreas contaminadas foi fundamental para a resolução de um passivo ambiental complexo em nossas instalações. Serviço impecável."',
    initial: 'A',
    name: 'Ana Paula Santos',
    role: 'Responsável Ambiental · Porto Seco Aracaju',
  },
];

function StarRow({ size }: { size: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className="lucide lucide-star fill-yellow-400 text-yellow-400"
          aria-hidden="true"
        />
      ))}
    </>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#f0ece0]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="animate-fade-up  text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="inline-block px-3 py-1 bg-[#013413] text-[#f8f1e1] text-xs font-medium uppercase tracking-widest rounded-full">
              Depoimentos
            </span>
            <div className="flex items-center gap-1">
              <StarRow size={14} />
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#013413] mb-2">Nossos Clientes Falam</h2>
          <p className="text-gray-500 text-sm">Avaliações verificadas no Google</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-[#013413]/8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="min-w-full p-8 md:p-12">
                  <div className="flex gap-1 mb-5">
                    <StarRow size={16} />
                  </div>
                  <blockquote className="font-display text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                    {t.quote}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#013413]/10 flex items-center justify-center text-[#013413] font-display font-bold text-lg">
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-[#013413]">{t.name}</p>
                      <p className="text-gray-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#013413]/20 flex items-center justify-center text-[#013413] hover:bg-[#013413] hover:text-white hover:border-[#013413] transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft width={18} height={18} className="lucide lucide-chevron-left" aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full h-2 ${
                    i === current ? 'w-6 bg-[#013413]' : 'w-2 bg-[#013413]/30'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#013413]/20 flex items-center justify-center text-[#013413] hover:bg-[#013413] hover:text-white hover:border-[#013413] transition-all duration-300"
              aria-label="Próximo"
            >
              <ChevronRight width={18} height={18} className="lucide lucide-chevron-right" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
