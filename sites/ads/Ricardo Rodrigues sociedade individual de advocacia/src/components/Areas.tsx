import { Scale, Building2, Users, Briefcase, Home, Landmark, Heart, Shield, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Area {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  items: string[];
}

const areas: Area[] = [
  {
    icon: Scale,
    title: 'Direito Tributário e Fiscal',
    items: [
      'Blindagem Patrimonial',
      'Defesa em Auto Fiscal',
      'Execução Fiscal',
      'Holding Familiar e Patrimonial',
      'Imunidades e Isenções',
      'Recuperação de Tributos',
      'Planejamento Tributário',
      'Planejamento Sucessório',
    ],
  },
  {
    icon: Building2,
    title: 'Planejamento Sucessório',
    subtitle: 'VIA SISTEMA DE HOLDING PATRIMONIAL',
    items: [
      'Constituição do Sistema',
      'Perpetuação do Patrimônio',
      'Regras de Governança',
      'Planejamento da Sucessão',
      'Eficiência Tributária',
      'Economia sobre Locação',
    ],
  },
  {
    icon: Users,
    title: 'Direito Previdenciário',
    items: ['Aposentadoria', 'BPC/LOAS', 'Pensão por morte', 'Auxílio acidente', 'Auxílio-doença'],
  },
  {
    icon: Briefcase,
    title: 'Direito Empresarial',
    items: [
      'Contrato Social',
      'Dissolução de Sociedades',
      'Consultivo Negocial',
      'Ação de Cobrança',
      'Holding Patrimonial',
      'Recuperação e Falência',
    ],
  },
  {
    icon: Home,
    title: 'Direito Imobiliário',
    items: [
      'Vistoria em entrega',
      'Elaboração de Convenção',
      'Regimento Interno',
      'Vícios ocultos',
      'Assessoria Mensal',
      'Cotas Condominiais',
    ],
  },
  {
    icon: Landmark,
    title: 'Direito Bancário',
    items: [
      'Ação Revisional',
      'Busca e Apreensão',
      'Execução Bancária',
      'Fraudes Bancárias',
      'Juros Abusivos',
      'Leilão de Imóveis/Veículos',
    ],
  },
  {
    icon: Heart,
    title: 'Direito da Saúde',
    items: [
      'Fornecimento de Medicação',
      'Negativas Plano de Saúde',
      'Negativas Internação',
      'Cancelamento Plano',
      'Negativas SUS',
    ],
  },
  {
    icon: Shield,
    title: 'Direito Administrativo',
    subtitle: 'SERVIDOR PÚBLICO',
    items: ['Remuneração do Servidor', 'Reenquadramentos', 'Gratificações'],
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="h-1 w-20 bg-[#d9b33c] mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
              Áreas de <span className="text-[#d9b33c]">Atuação</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Soluções jurídicas estratégicas com foco na excelência e na proteção do seu patrimônio.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title + (area.subtitle ?? '')}
                className="group relative bg-[#111111] border border-white/5 p-8 rounded-xl transition-all duration-500 hover:bg-[#1a1a1a] hover:border-[#d9b33c]/30 flex flex-col h-full shadow-2xl"
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[#d9b33c]/10 text-[#d9b33c] group-hover:bg-[#d9b33c] group-hover:text-black transition-all duration-500">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#d9b33c] transition-colors duration-300">
                  {area.title}
                </h3>
                {area.subtitle && (
                  <p className="text-[10px] tracking-widest font-bold text-[#d9b33c]/80 uppercase mb-4">
                    {area.subtitle}
                  </p>
                )}
                <ul className="space-y-3 mt-2 flex-grow">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors flex items-center gap-2"
                    >
                      <ChevronRight size={14} className="text-[#d9b33c]/50" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#d9b33c] transition-all duration-500 group-hover:w-full rounded-b-xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
