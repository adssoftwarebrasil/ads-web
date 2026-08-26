import { ArrowRight, Package, Wrench, Zap, Settings, Shield, type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Package,
    iconClass: 'lucide lucide-package',
    title: 'Venda de Equipamentos Stihl',
    description:
      'Distribuidores autorizados STIHL com linha completa de motosserras, roçadeiras e sopradores.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    title: 'Assistência Técnica',
    description:
      'Equipe certificada para manutenção e reparo de equipamentos elétricos e ferramentas profissionais.',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap',
    title: 'Rebobinamento de Motores',
    description:
      'Serviço especializado de rebobinamento de motores elétricos com garantia de durabilidade.',
  },
  {
    icon: Settings,
    iconClass: 'lucide lucide-settings',
    title: 'Manutenção de Máquinas',
    description:
      'Balanceamento e manutenção preventiva para garantir o melhor desempenho dos seus equipamentos.',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Garantia de Qualidade',
    description:
      'Todos os nossos serviços e produtos possuem garantia, assegurando sua tranquilidade.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(236,33,40)] font-bold tracking-wider uppercase text-sm mb-2 block">
            Nossa Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(41,35,88)] mb-6">
            Soluções Profissionais
          </h2>
          <div className="w-24 h-1.5 bg-[rgb(236,33,40)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Oferecemos um ecossistema completo de vendas e manutenção para garantir que seu trabalho
            nunca pare.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="w-full md:w-[45%] lg:w-[30%] group relative bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[rgb(236,33,40)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-[rgb(41,35,88)]/5 text-[rgb(41,35,88)] group-hover:bg-[rgb(236,33,40)] group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className={service.iconClass} width={28} height={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[rgb(41,35,88)] mb-3 group-hover:text-[rgb(236,33,40)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 flex-grow">{service.description}</p>
                <div className="flex items-center text-sm font-semibold text-[rgb(41,35,88)] group-hover:text-[rgb(236,33,40)] transition-colors mt-auto">
                  Saiba mais
                  <ArrowRight
                    className="lucide lucide-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
