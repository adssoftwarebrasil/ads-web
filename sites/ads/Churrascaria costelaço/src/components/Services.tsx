import {
  Flame,
  ShoppingBag,
  UtensilsCrossed,
  PartyPopper,
  Baby,
  type LucideIcon,
} from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Flame,
    title: 'Rodízio de Espetinhos',
    description:
      'Buffet completo de petiscos + rodízio. Segunda e Terça: R$49,90 | Quarta a Sábado: R$69,90',
  },
  {
    icon: ShoppingBag,
    title: 'Churrasco para Viagem',
    description:
      'Frango, joelho de porco e cortes bovinos. Disponível aos sábados, domingos e feriados.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Pratos à La Carte',
    description:
      'Cardápio variado com opções especiais preparadas com carnes premium.',
  },
  {
    icon: PartyPopper,
    title: 'Festas & Eventos',
    description:
      'Espaço amplo de +1000m² equipado para realizar seu evento com qualidade.',
  },
  {
    icon: Baby,
    title: 'Espaço Kids',
    description:
      'Área infantil monitorada para diversão das crianças com segurança.',
  },
];

const cardClass = `group relative flex flex-col bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100
                           hover:border-[#F7BC33]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                           /* Larguras responsivas */
                           w-full
                           sm:w-[calc(50%-1rem)]
                           lg:w-[calc(33.333%-2rem)]`;

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#25262A] mb-4">
            Nossos <span className="text-[#F7BC33]">Serviços</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Experiência completa em churrasco e gastronomia para todas as
            ocasiões
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className={cardClass}>
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8
                                group-hover:bg-[#F7BC33] transition-colors duration-500">
                  <Icon
                    size={32}
                    className="text-[#F7BC33] group-hover:text-white transition-colors duration-500"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#25262A] mb-3 group-hover:text-[#F7BC33] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
                <div className="absolute -bottom-2 -right-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Icon size={120} strokeWidth={1} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
