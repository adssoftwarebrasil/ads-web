import { PartyPopper, Store, Building2, Wine, Wrench, Calendar, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: PartyPopper,
    title: 'Fornecimento para Festas e Eventos',
    description: 'Chopp gelado e saboroso para celebrações particulares inesquecíveis',
  },
  {
    icon: Store,
    title: 'Fornecimento para Estabelecimentos',
    description: 'Atendimento especializado para bares, restaurantes, choperias e feirantes',
  },
  {
    icon: Building2,
    title: 'Eventos Corporativos',
    description: 'Experiência premium para grandes empresas, prefeituras e instituições',
  },
  {
    icon: Wine,
    title: 'Terceirização de Bares',
    description: 'Gestão completa de bares e cozinhas para eventos de todos os portes',
  },
  {
    icon: Wrench,
    title: 'Manutenção de Chopeiras',
    description: 'Suporte técnico especializado para garantir qualidade impecável',
  },
  {
    icon: Calendar,
    title: 'Produção de Eventos',
    description: 'Organização completa do seu evento com atendimento personalizado',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-gradient-to-b from-white to-[rgb(245,247,250)] px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(40,44,115)] mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas para cada tipo de evento e estabelecimento
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:border-t-4 hover:border-t-[rgb(176,146,71)] opacity-100 translate-y-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon
                  size={60}
                  className="text-[rgb(176,146,71)] mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl md:text-2xl font-semibold text-[rgb(40,44,115)] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
