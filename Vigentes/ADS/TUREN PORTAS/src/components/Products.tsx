import { CheckCircle2 } from 'lucide-react';

interface DoorColor {
  image: string;
  name: string;
  description: string;
}

const colors: DoorColor[] = [
  {
    image: '/produtos/branca-frisada.webp',
    name: 'Branca Frisada',
    description:
      'Branco com frisos horizontais que trazem leveza e um ar contemporâneo ao ambiente. Combina com praticamente qualquer projeto.',
  },
  {
    image: '/produtos/capuccino.webp',
    name: 'Capuccino',
    description:
      'Marrom acinzentado quente, ideal para ambientes aconchegantes e projetos que trabalham com tons de madeira.',
  },
  {
    image: '/produtos/cinza-claro.webp',
    name: 'Cinza Claro',
    description:
      'Cinza neutro e discreto, perfeito para interiores modernos, minimalistas e de linhas retas.',
  },
  {
    image: '/produtos/cinza-escuro.webp',
    name: 'Cinza Escuro',
    description:
      'Grafite marcante, para quem quer transformar a porta em um ponto de destaque do ambiente.',
  },
  {
    image: '/produtos/fendi.webp',
    name: 'Fendi',
    description:
      'Tom terroso e sóbrio, que se integra a paredes claras sem abrir mão de personalidade.',
  },
];

const highlights = [
  '100% impermeável',
  'Não empena e não apodrece',
  'Resistente a fungos e bactérias',
  'Acabamento liso premium',
];

const whatsappUrl = (color: string) =>
  `https://wa.me/5566999118484?text=${encodeURIComponent(
    `Olá! Tenho interesse na Porta WPC Premium na cor ${color}. Gostaria de mais informações.`
  )}`;

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#DE8F52] font-semibold text-sm uppercase tracking-widest">
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#005143] mt-3 mb-4">
            Portas WPC Premium
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Uma linha única, feita 100% em WPC à prova d'água, disponível em cinco cores para
            combinar com o seu projeto.
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-14">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <CheckCircle2 width={16} height={16} className="text-[#DE8F52] shrink-0" />
              {h}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {colors.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-[#f8f5f1]">
                <img
                  src={c.image}
                  alt={`Porta WPC Premium na cor ${c.name}`}
                  width={700}
                  height={875}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[#DE8F52] text-xs font-bold uppercase tracking-widest">
                  Porta WPC Premium
                </span>
                <h3 className="text-xl font-bold text-[#005143] mt-1.5 mb-3">{c.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{c.description}</p>
                <a
                  href={whatsappUrl(c.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#005143] hover:bg-[#003d32] text-white py-3 rounded-xl font-semibold text-sm transition-colors duration-300"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
