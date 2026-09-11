import { Scale, ShoppingCart, Briefcase, Heart, Shield, HardHat, LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Area {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const AREAS: Area[] = [
  {
    icon: Scale,
    iconClass: 'lucide lucide-scale text-white',
    title: 'Direito Civil',
    description:
      'Assessoria em contratos, responsabilidade civil, direitos reais, obrigações e demais questões do direito privado.',
  },
  {
    icon: ShoppingCart,
    iconClass: 'lucide lucide-shopping-cart text-white',
    title: 'Direito do Consumidor',
    description:
      'Defesa dos seus direitos nas relações de consumo, cobranças indevidas, vícios de produtos e serviços.',
  },
  {
    icon: Briefcase,
    iconClass: 'lucide lucide-briefcase text-white',
    title: 'Direito Empresarial',
    description:
      'Constituição e dissolução de empresas, contratos comerciais, recuperação judicial e assessoria societária.',
  },
  {
    icon: Heart,
    iconClass: 'lucide lucide-heart text-white',
    title: 'Direito de Família',
    description:
      'Divórcio, guarda de filhos, alimentos, inventário, partilha e demais questões familiares com discrição.',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield text-white',
    title: 'Direito Previdenciário',
    description:
      'Aposentadorias, benefícios por incapacidade, pensão por morte, revisão de benefícios e recursos ao INSS.',
  },
  {
    icon: HardHat,
    iconClass: 'lucide lucide-hard-hat text-white',
    title: 'Direito do Trabalho',
    description:
      'Rescisões, verbas trabalhistas, assédio moral, horas extras, equiparação salarial e ações na Justiça do Trabalho.',
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-24 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EB7104]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#EB7104] text-xs font-semibold tracking-widest uppercase">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10202F] mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-[#10202F]/60 text-base sm:text-lg max-w-2xl mx-auto">
            Equipe especializada para atender suas necessidades jurídicas com competência e dedicação em diversas áreas do direito.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#EB7104]/20"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#10202F] group-hover:bg-[#EB7104] flex items-center justify-center mb-6 transition-colors duration-300 flex-shrink-0">
                  <Icon width={24} height={24} className={area.iconClass} />
                </div>
                <h3 className="text-lg font-bold text-[#10202F] mb-3 group-hover:text-[#EB7104] transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-[#10202F]/60 text-sm leading-relaxed">{area.description}</p>
                <div className="mt-6 flex items-center gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EB7104] text-sm font-semibold hover:underline"
                  >
                    Consultar advogado
                  </a>
                  <span className="text-[#EB7104] text-sm">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
