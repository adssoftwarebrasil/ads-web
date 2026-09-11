import {
  Ruler,
  PenTool,
  ClipboardCheck,
  Home,
  FileText,
  Map,
  HardHat,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  iconClass: string;
}

const services: Service[] = [
  {
    title: 'Projetos de Engenharia',
    description:
      'Projetos estruturais, hidráulicos, sanitários e elétricos com aprovação junto à SUVISA e Corpo de Bombeiros.',
    image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Ruler,
    iconClass: 'lucide lucide-ruler text-pr-dark',
  },
  {
    title: 'Projetos de Arquitetura',
    description:
      'Desenvolvimento de projetos arquitetônicos completos com modelagem em 3D, garantindo melhor visualização e execução assertiva.',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: PenTool,
    iconClass: 'lucide lucide-pen-tool text-pr-dark',
  },
  {
    title: 'Laudos e Vistorias',
    description:
      'Laudos cautelares, periciais, de patologias, inspeção predial, habitabilidade, locação e entrega/recebimento de obras.',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: ClipboardCheck,
    iconClass: 'lucide lucide-clipboard-check text-pr-dark',
  },
  {
    title: 'Avaliação de Imóveis',
    description:
      'Avaliação técnica e mercadológica de imóveis urbanos e rurais com precisão e embasamento em normas vigentes.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Home,
    iconClass: 'lucide lucide-home text-pr-dark',
  },
  {
    title: 'Regularização Imobiliária',
    description:
      'Averbação de construções, desmembramento, remembramento, REURB e toda a documentação para regularizar seu imóvel.',
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: FileText,
    iconClass: 'lucide lucide-file-text text-pr-dark',
  },
  {
    title: 'Levantamento Topográfico',
    description:
      'Levantamentos planialtimétricos, georreferenciamento, remembramento, desmembramento e REURB com precisão técnica.',
    image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Map,
    iconClass: 'lucide lucide-map text-pr-dark',
  },
  {
    title: 'Construtora',
    description:
      'Execução de obras residenciais, comerciais, industriais e agroindustriais. Também desenvolvemos imóveis próprios para comercialização.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: HardHat,
    iconClass: 'lucide lucide-hard-hat text-pr-dark',
  },
  {
    title: 'Gestão e Fiscalização de Obras',
    description:
      'Acompanhamento técnico, administração e fiscalização de obras com controle de qualidade e cumprimento rigoroso de prazos.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: BarChart3,
    iconClass: 'lucide lucide-bar-chart3 text-pr-dark',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-pr-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="divider-line"></div>
          <h2 className="section-heading mb-4">Soluções Completas em Engenharia e Arquitetura</h2>
          <p className="section-subheading">
            Da concepção à entrega, cobrimos todas as etapas do seu empreendimento com rigor técnico e atendimento
            humanizado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-pr-taupe">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group relative bg-pr-light overflow-hidden cursor-default">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pr-dark/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-4">
                    <div className="w-9 h-9 rounded-full bg-pr-rose flex items-center justify-center">
                      <Icon width={17} height={17} strokeWidth={2} className={service.iconClass} />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base font-semibold text-pr-dark mb-2 leading-snug">{service.title}</h3>
                  <p className="text-pr-grey text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pr-rose scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <p className="text-pr-grey text-sm mb-5">
            Atendemos obras residenciais, comerciais, industriais e agroindustriais.
          </p>
          <a href="http://wa.me/556284826969" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Consultar disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
