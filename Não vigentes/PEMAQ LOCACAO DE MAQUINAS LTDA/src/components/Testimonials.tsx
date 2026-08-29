import { Quote } from 'lucide-react';

type Testimonial = { text: string; author: string };

const TESTIMONIALS: Testimonial[] = [
  {
    text: '"Utilizei os serviços da PEMAQ e fiquei impressionado com a eficiência e qualidade das máquinas. Recomendo a todos!"',
    author: 'José da Silva',
  },
  {
    text: '"O atendimento ao cliente da PEMAQ é exemplar! Eles realmente se preocupam com as necessidades dos seus clientes."',
    author: 'Maria Santos',
  },
  {
    text: '"A assistência técnica 24h foi fundamental para o sucesso do meu projeto, pois não tive preocupações enquanto utilizei os equipamentos da PEMAQ."',
    author: 'Pedro Almeida',
  },
  {
    text: '"As máquinas são de alta qualidade e a consultoria foi essencial para escolha certa na locação. Estou muito satisfeita!"',
    author: 'Lucia Ramos',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#FFA500] font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            O Que Dizem Nossos <span className="text-[#B87333]">Clientes</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 space-y-4 border border-gray-100"
            >
              <div className="flex justify-start">
                <div className="p-3 rounded-full bg-[#FFA500]/10">
                  <Quote size={24} className="text-[#FFA500]" />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg italic">{t.text}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-black">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
