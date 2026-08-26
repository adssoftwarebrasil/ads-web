import { Trophy, Building2, Dumbbell, ShoppingCart, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface CaseItem {
  icon: LucideIcon;
  iconClass: string;
  category: string;
  title: string;
  description: string;
  highlight: string;
  delay: string;
}

const topCases: CaseItem[] = [
  {
    icon: Building2,
    iconClass: 'lucide lucide-building2',
    category: 'Hotelaria',
    title: 'Porto das Asas Park Hotel',
    description:
      'Projeto luminotécnico completo para iluminação de área comum, quartos e espaços externos do hotel, garantindo conforto e eficiência energética.',
    highlight: 'Economia de até 60% na conta de energia',
    delay: '0s',
  },
  {
    icon: Trophy,
    iconClass: 'lucide lucide-trophy',
    category: 'Esporte & Entretenimento',
    title: 'Associação Atlética Caldense',
    description:
      'Modernização do sistema de iluminação das instalações esportivas com tecnologia LED de alta potência para jogos e eventos.',
    highlight: 'Alta potência para eventos noturnos',
    delay: '0.1s',
  },
  {
    icon: Dumbbell,
    iconClass: 'lucide lucide-dumbbell',
    category: 'Fitness & Saúde',
    title: 'Rede de Academias BioHealth',
    description:
      'Iluminação estratégica para todas as unidades da rede, com soluções específicas para cada área da academia, valorizando o ambiente.',
    highlight: 'Projeto para múltiplas unidades',
    delay: '0.2s',
  },
];

const bottomCases: CaseItem[] = [
  {
    icon: ShoppingCart,
    iconClass: 'lucide lucide-shopping-cart',
    category: 'Varejo Alimentar',
    title: 'Serra Azul Supermercados',
    description:
      'Solução completa de iluminação para ambientes de varejo, com ênfase em valorização de produtos e conforto para clientes e colaboradores.',
    highlight: 'Iluminação que valoriza produtos',
    delay: '0.3s',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    category: 'Construção Civil',
    title: 'Pollo Engenharia',
    description:
      'Parceria estratégica para fornecimento de iluminação LED em obras residenciais e comerciais, com orientação técnica em projetos luminotécnicos.',
    highlight: 'Parceria em múltiplos projetos',
    delay: '0.4s',
  },
];

function CaseCard({ item }: { item: CaseItem }) {
  const Icon = item.icon;
  return (
    <div
      className="animate-on-scroll bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:border-[#239110]/30 hover:shadow-xl transition-all duration-400 group"
      style={{ transitionDelay: item.delay }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#239110]/10 text-[#239110] rounded-xl flex items-center justify-center group-hover:bg-[#239110] group-hover:text-white transition-all duration-300">
          <Icon className={item.iconClass} width={24} height={24} />
        </div>
        <div>
          <span className="text-xs font-semibold text-[#239110] uppercase tracking-wider">
            {item.category}
          </span>
          <h3 className="font-bold text-[#010101] text-lg leading-tight">{item.title}</h3>
        </div>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>
      <div className="flex items-center gap-2 bg-[#F9AA0C]/10 rounded-xl px-4 py-2.5">
        <Trophy
          className="lucide lucide-trophy text-[#d4900a] flex-shrink-0"
          width={14}
          height={14}
        />
        <span className="text-sm font-semibold text-[#d4900a]">{item.highlight}</span>
      </div>
    </div>
  );
}

export default function Cases() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-[#F9AA0C]/15 text-[#d4900a] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#F9AA0C]/30">
            <Trophy className="lucide lucide-trophy" width={14} height={14} />
            Cases de Sucesso
          </div>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-black text-[#010101] leading-tight mb-4">
            Quem confia na <span className="text-[#239110]">Caldense LED</span>
          </h2>
          <p className="animate-on-scroll text-gray-500 text-lg max-w-2xl mx-auto">
            Empresas e instituições de referência em Poços de Caldas que escolheram nossas soluções
            em iluminação.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCases.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {bottomCases.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
