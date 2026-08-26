import { Wrench, Paintbrush, Settings, Zap, Shield, Wind } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    title: 'Funilaria',
    description:
      'Reparação de amassados, colisões simples e graves. Restauramos a estrutura original do seu veículo com precisão e qualidade.',
    featured: true,
  },
  {
    icon: Paintbrush,
    iconClass: 'lucide lucide-paintbrush',
    title: 'Pintura Automotiva',
    description:
      'Pintura completa ou retoque localizado com tintas de alta qualidade. Resultado idêntico ao original de fábrica.',
  },
  {
    icon: Settings,
    iconClass: 'lucide lucide-settings',
    title: 'Mecânica Geral',
    description:
      'Manutenção preventiva e corretiva, revisão completa para manter seu veículo sempre em perfeito estado.',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap',
    title: 'Elétrica Automotiva',
    description:
      'Diagnóstico e reparo de sistemas elétricos, instalação de equipamentos e solução de problemas complexos.',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Alinhamento',
    description:
      'Alinhamento e balanceamento de precisão para garantir estabilidade, segurança e menor desgaste dos pneus.',
  },
  {
    icon: Wind,
    iconClass: 'lucide lucide-wind',
    title: 'Ar Condicionado',
    description:
      'Manutenção, recarga e reparo do sistema de ar condicionado do seu veículo com equipamentos modernos.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-[#c0392b] font-bold text-sm uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-black text-[#0d1f3c] leading-tight">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Soluções completas para o seu veículo — da funilaria à elétrica, com o rigor e a qualidade que você merece.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            if (service.featured) {
              return (
                <div
                  key={service.title}
                  className="group relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default bg-[#0d1f3c] border-[#0d1f3c] text-white"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-all duration-300 bg-[#c0392b]">
                    <Icon className={`${service.iconClass} w-7 h-7 text-[#f39c12]`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{service.description}</p>
                  <span className="absolute top-6 right-6 bg-[#f39c12] text-[#0d1f3c] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    Principal
                  </span>
                </div>
              );
            }
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default bg-white border-gray-100 hover:border-[#c0392b]/20"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-all duration-300 bg-[#0d1f3c]/5 group-hover:bg-[#c0392b] group-hover:text-white">
                  <Icon className={`${service.iconClass} w-7 h-7 text-[#0d1f3c] group-hover:text-white`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0d1f3c]">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5581996457782"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#c0392b]/20"
          >
            Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
