import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  initial: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    initial: 'M',
    name: 'Maria de Souza',
    role: 'Construtora',
    text: '"Excelente empresa! Entrega rápida e produtos de qualidade superior. Recomendo para qualquer tipo de obra."',
  },
  {
    initial: 'J',
    name: 'João Pereira',
    role: 'Engenheiro Civil',
    text: '"Os produtos da JM melhoraram significativamente a qualidade das minhas obras. Equipe muito profissional!"',
  },
  {
    initial: 'A',
    name: 'Ana Lúcia',
    role: 'Arquiteta',
    text: '"Atendimento sensacional e preços justos. Já fiz várias compras e sempre fui muito bem atendida."',
  },
  {
    initial: 'C',
    name: 'Carlos Mendes',
    role: 'Construtor',
    text: '"Ótimo custo-benefício e produtos que atendem perfeitamente às normas técnicas. Parceria de confiança."',
  },
  {
    initial: 'R',
    name: 'Roberto Alves',
    role: 'Empreiteiro',
    text: '"Produtos resistentes e entrega sempre no prazo. A JM Pré-moldados é referência aqui na região."',
  },
  {
    initial: 'F',
    name: 'Fernanda Lima',
    role: 'Engenheira',
    text: '"Excelente qualidade e atendimento diferenciado. Recomendo a todos que buscam artefatos de concreto."',
  },
];

const ITEMS_PER_PAGE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const visible = testimonials.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <section
      id="depoimentos"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4A90E2]/5 rounded-full -ml-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full -mr-48 -mb-48 blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#4A90E2]/10 text-[#4A90E2] px-4 py-2 rounded-full text-sm font-semibold">
              Depoimentos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B4C] mb-4">
            O Que Dizem Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#3b82f6]">
              Clientes
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confiança construída através da qualidade e satisfação
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {visible.map((t, i) => (
              <div
                key={`${page}-${t.name}`}
                className="animate-fadeIn"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'backwards' }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A90E2]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote size={48} className="text-[#4A90E2]" />
                  </div>
                  <div className="flex items-center space-x-4 mb-6 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#3b82f6] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {t.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D1B4C] text-lg">{t.name}</h4>
                      <p className="text-sm text-[#4A90E2] font-medium">{t.role}</p>
                      <div className="flex space-x-1 mt-1">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={14} className="fill-[#FFA500] text-[#FFA500]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed flex-grow relative z-10 italic">
                    {t.text}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A90E2] to-[#3b82f6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-6">
            <button
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="p-3 rounded-full bg-gradient-to-r from-[#0D1B4C] to-[#4A90E2] text-white hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
              aria-label="Depoimentos anteriores"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page
                      ? 'bg-gradient-to-r from-[#4A90E2] to-[#3b82f6] w-12'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para página ${i + 1}`}
                ></button>
              ))}
            </div>
            <button
              disabled={page === totalPages - 1}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              className="p-3 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#3b82f6] text-white hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
              aria-label="Próximos depoimentos"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="text-center mt-6">
            <span className="text-sm text-gray-500 font-medium">
              {page + 1} / {totalPages}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
