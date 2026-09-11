import { Wrench, Truck, Gauge, Settings, Package, Zap, LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  iconBg: string;
  tag: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench text-white',
    iconBg: 'bg-brand-red',
    tag: 'Especialidade',
    title: 'Mão de Obra Mecânica',
    description:
      'Equipe especializada em suspensão, freios, motor e câmbio automático. Diagnóstico preciso e serviço de qualidade.',
  },
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck text-white',
    iconBg: 'bg-brand-blue',
    tag: 'Disponível 24h',
    title: 'Guincho & Táxi',
    description:
      'Serviço de reboque em qualquer localização. Atendemos Minaçu, Alto Paraíso e toda a região com rapidez.',
  },
  {
    icon: Gauge,
    iconClass: 'lucide lucide-gauge text-white',
    iconBg: 'bg-brand-navy',
    tag: 'Precisão',
    title: 'Alinhamento',
    description:
      'Alinhamento computadorizado com equipamentos modernos para garantir segurança e economia de combustível.',
  },
  {
    icon: Settings,
    iconClass: 'lucide lucide-settings text-white',
    iconBg: 'bg-brand-red',
    tag: 'Conforto',
    title: 'Balanceamento',
    description:
      'Balanceamento de rodas para eliminar vibrações, prolongar a vida útil dos pneus e melhorar o conforto.',
  },
  {
    icon: Package,
    iconClass: 'lucide lucide-package text-white',
    iconBg: 'bg-brand-blue',
    tag: 'Estoque Amplo',
    title: 'Venda de Peças',
    description:
      'Grande variedade de peças automotivas com qualidade garantida. Encontre o que precisa para o seu veículo.',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap text-white',
    iconBg: 'bg-brand-navy',
    tag: 'Especializado',
    title: 'Câmbio Automático',
    description:
      'Reparo e manutenção especializada em câmbio automático com técnicos treinados e ferramental específico.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red text-xs font-semibold uppercase tracking-widest mb-3">
            O que fazemos
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
            NOSSOS<span className="text-brand-yellow"> SERVIÇOS</span>
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-base leading-relaxed">
            Soluções completas para o seu veículo — da manutenção preventiva ao socorro na estrada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-red/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-red/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`${service.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon width={22} height={22} className={service.iconClass} />
                  </div>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-brand-yellow bg-brand-yellow/10 px-2.5 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center text-brand-blue hover:text-brand-yellow text-sm font-medium transition-colors duration-200 group/link"
                >
                  Solicitar orçamento
                  <span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
