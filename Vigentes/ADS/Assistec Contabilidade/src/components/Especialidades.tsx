import { Tractor, Store, Factory, Briefcase, Leaf, Building } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Segment {
  Icon: LucideIcon;
  iconClass: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  badge?: string;
}

const segments: Segment[] = [
  {
    Icon: Tractor,
    iconClass: 'lucide lucide-tractor text-brand-burgundy',
    image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
    alt: 'Agronegócio e Produtor Rural',
    title: 'Agronegócio e Produtor Rural',
    description:
      'Contabilidade especializada para fazendas, propriedades rurais, produtores de grãos, pecuaristas e profissionais do agronegócio de MT.',
    badge: 'Especialidade Principal',
  },
  {
    Icon: Store,
    iconClass: 'lucide lucide-store text-brand-burgundy',
    image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
    alt: 'Comércio e Varejo',
    title: 'Comércio e Varejo',
    description:
      'Soluções contábeis e tributárias para empresas comerciais, lojas e varejistas, garantindo conformidade e redução de impostos.',
  },
  {
    Icon: Factory,
    iconClass: 'lucide lucide-factory text-brand-burgundy',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
    alt: 'Indústria e Manufatura',
    title: 'Indústria e Manufatura',
    description:
      'Gestão contábil completa para indústrias, com controle de custos, apuração fiscal especializada e compliance tributário.',
  },
  {
    Icon: Briefcase,
    iconClass: 'lucide lucide-briefcase text-brand-burgundy',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
    alt: 'Prestadores de Serviços',
    title: 'Prestadores de Serviços',
    description:
      'Contabilidade para empresas de serviços, agências, consultorias e profissionais liberais, com foco em otimização fiscal.',
  },
  {
    Icon: Leaf,
    iconClass: 'lucide lucide-leaf text-brand-burgundy',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
    alt: 'Agrônomos e Técnicos Rurais',
    title: 'Agrônomos e Técnicos Rurais',
    description:
      'Suporte contábil e fiscal para agrônomos, veterinários, engenheiros e técnicos que atuam no setor rural e agropecuário.',
  },
  {
    Icon: Building,
    iconClass: 'lucide lucide-building text-brand-burgundy',
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
    alt: 'MEI e Microempresas',
    title: 'MEI e Microempresas',
    description:
      'Abertura, gestão e regularização de MEI e microempresas com todo o suporte necessário para você focar no seu negócio.',
  },
];

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-24 bg-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-blue font-semibold text-sm tracking-widest uppercase mb-3">
            Áreas de atuação
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-burgundy mb-5">
            Atendemos Seu Segmento com Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Conhecemos as particularidades de cada setor e entregamos soluções contábeis precisas para cada necessidade.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment) => {
            const { Icon } = segment;
            return (
              <div
                key={segment.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={segment.image}
                    alt={segment.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/70 via-brand-burgundy/20 to-transparent"></div>
                  {segment.badge && (
                    <div className="absolute top-3 left-3 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                      {segment.badge}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className={segment.iconClass} width={20} height={20} strokeWidth={2} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-brand-burgundy font-bold text-base mb-2">{segment.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{segment.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
