import {
  Stethoscope,
  HardHat,
  FileText,
  AlertTriangle,
  ClipboardCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: Stethoscope,
    iconClass: 'lucide lucide-stethoscope',
    title: 'Medicina do Trabalho',
    description:
      'Exames Admissional, Demissional, Periódico, Toxicológico e AET com agilidade e precisão.',
    link: 'https://wa.me/558192487254?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20Medicina%20do%20Trabalho.',
  },
  {
    icon: HardHat,
    iconClass: 'lucide lucide-hard-hat',
    title: 'Segurança do Trabalho',
    description: 'Programas e treinamentos especializados com foco em prevenção de acidentes.',
    link: 'https://wa.me/558192487254?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20Seguran%C3%A7a%20do%20Trabalho.',
  },
  {
    icon: FileText,
    iconClass: 'lucide lucide-file-text',
    title: 'Laudos e Documentação',
    description: 'PCMSO, PGR, LTCAT, NR-01 e toda documentação completa e atualizada.',
    link: 'https://wa.me/558192487254?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20Laudos%20e%20Documenta%C3%A7%C3%A3o.',
  },
  {
    icon: AlertTriangle,
    iconClass: 'lucide lucide-alert-triangle',
    title: 'Avaliação de Riscos',
    description: 'Risco Psicossocial e Análise Ergonômica com identificação proativa de perigos.',
    link: 'https://wa.me/558192487254?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20Avalia%C3%A7%C3%A3o%20de%20Riscos.',
  },
  {
    icon: ClipboardCheck,
    iconClass: 'lucide lucide-clipboard-check',
    title: 'Perícia Médica',
    description: 'Avaliações técnicas especializadas com laudos precisos e fundamentados.',
    link: 'https://wa.me/558192487254?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20Per%C3%ADcia%20M%C3%A9dica.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Consultoria Especializada',
    description: 'Orientação contínua em SST com adequação às NRs vigentes.',
    link: 'https://wa.me/558192487254?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20Consultoria%20Especializada.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,9,31)] mb-4">
            Soluções Completas em SST
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para manter sua empresa em conformidade
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[rgb(253,144,41)] group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-[rgb(78,20,104)]/10 rounded-full group-hover:bg-[rgb(78,20,104)] transition-colors duration-300">
                    <Icon
                      size={40}
                      className={`${service.iconClass} text-[rgb(78,20,104)] group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[rgb(28,9,31)]">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(253,144,41)] font-semibold hover:text-[rgb(233,124,21)] transition-colors duration-200 flex items-center space-x-2 cursor-pointer"
                  >
                    <span>Saiba mais</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
