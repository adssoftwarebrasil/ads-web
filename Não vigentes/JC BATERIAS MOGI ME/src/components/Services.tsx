import { ShoppingBag, Wrench, Truck, Clock, Waves, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    Icon: ShoppingBag,
    iconClass: 'lucide lucide-shopping-bag text-primary-purple',
    title: 'Venda de Baterias',
    description: 'Ampla variedade de baterias para todos os tipos de veículos e aplicações.',
  },
  {
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench text-primary-purple',
    title: 'Instalação Profissional',
    description:
      'Equipe técnica especializada para instalar sua bateria com segurança e eficiência.',
  },
  {
    Icon: Truck,
    iconClass: 'lucide lucide-truck text-primary-purple',
    title: 'Delivery Rápido',
    description: 'Entrega rápida em Mogi das Cruzes e região. Sua bateria chega quando você precisa.',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock text-primary-purple',
    title: 'Atendimento 24h',
    description: 'Disponibilidade total para atender suas emergências a qualquer hora do dia.',
  },
  {
    Icon: Waves,
    iconClass: 'lucide lucide-waves text-primary-purple',
    title: 'Baterias Náuticas',
    description: 'Baterias especializadas para lanchas e jet skis com máxima durabilidade.',
  },
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap text-primary-purple',
    title: 'Sistemas de Emergência',
    description: 'Baterias para luz de emergência e sistemas de backup de energia.',
  },
];

export default function Services() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary-purple via-primary-purple/95 to-black">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Soluções completas para todas as suas necessidades em baterias
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => {
            const { Icon } = service;
            return (
              <div
                key={service.title}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-white/20 hover:border-primary-yellow border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="bg-primary-yellow rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className={service.iconClass} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/80 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
