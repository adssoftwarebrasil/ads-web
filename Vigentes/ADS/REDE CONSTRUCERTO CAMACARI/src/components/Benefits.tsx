import { Shield, DollarSign, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  number: string;
  title: string;
  text: string;
  Icon: LucideIcon;
}

const benefits: Benefit[] = [
  {
    number: '1',
    title: 'Produtos de Alta Qualidade',
    text: 'Garantia de durabilidade e eficiência para sua obra.',
    Icon: Shield,
  },
  {
    number: '2',
    title: 'Preço Justo e Acessível',
    text: 'Ofertas especiais que se encaixam no seu orçamento.',
    Icon: DollarSign,
  },
  {
    number: '3',
    title: 'Atendimento Personalizado',
    text: 'Equipe qualificada para auxiliar em cada etapa da compra.',
    Icon: Headphones,
  },
];

export default function Benefits() {
  return (
    <section id="vantagens" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#e8221a] font-semibold text-sm uppercase tracking-wider">
            Vantagens
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Descubra os <span className="text-[#253579]">Benefícios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os benefícios de escolher a Rede Construcerto para suas compras de
            material de construção.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map(({ number, title, text, Icon }) => (
            <div
              key={number}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-[#e8221a] text-5xl font-bold">{number}</div>
                <Icon size={40} className="text-[#253579] mt-2" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
              <p className="text-gray-600 text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
