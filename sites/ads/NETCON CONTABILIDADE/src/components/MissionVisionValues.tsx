import { Target, Eye, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Item = {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
};

const items: Item[] = [
  {
    icon: Target,
    iconClass: 'lucide lucide-target',
    title: 'Missão',
    description:
      'Prestar serviços contábeis com qualidade, atendendo necessidades de clientes e parceiros provendo informações gerenciais, assessorando-os nas tomadas de decisões, promovendo o engrandecimento das riquezas da sociedade, bem como, propiciar o crescimento satisfatório de nossa equipe comprometida e qualificada.',
  },
  {
    icon: Eye,
    iconClass: 'lucide lucide-eye',
    title: 'Visão',
    description:
      'Por meio da inovação e tecnologia da informação aperfeiçoar e melhorar o atendimento e relacionamento junto aos clientes, parceiros, fornecedores e comunidade em geral a vivência com os colaboradores tendo como objetivo conquistar um lugar de destaque entre os melhores nos segmentos de atuação.',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award',
    title: 'Valores',
    description:
      'Agilidade, Ética, Responsabilidade, Honestidade, Sustentabilidade, Coerência, Inovação e Transparência.',
  },
];

function MissionVisionValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Icon className={`${item.iconClass} text-[rgb(0,0,87)] mr-3`} size={32} />
                  <h3 className="text-2xl font-bold text-[rgb(0,0,87)]">{item.title}</h3>
                </div>
                <div className="h-1 w-16 bg-[rgb(211,0,0)] mb-6"></div>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MissionVisionValues;
