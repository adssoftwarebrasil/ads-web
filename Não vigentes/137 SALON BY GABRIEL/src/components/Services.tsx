import { Scissors, Sparkles, Droplet, Brush, Heart, Hand, type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Scissors,
    title: 'Corte de Cabelo',
    description: 'Cortes modernos e personalizados com profissionais especializados.',
  },
  {
    icon: Sparkles,
    title: 'Coloração & Mechas',
    description: 'Transforme seu visual com técnicas avançadas de coloração capilar.',
  },
  {
    icon: Droplet,
    title: 'Tratamentos Capilares',
    description: 'Recupere a saúde dos seus fios com nossos tratamentos premium.',
  },
  {
    icon: Brush,
    title: 'Maquiagem',
    description: 'Maquiagem profissional para realçar sua beleza natural.',
  },
  {
    icon: Heart,
    title: 'Penteados',
    description: 'Penteados elegantes para ocasiões especiais e eventos.',
  },
  {
    icon: Hand,
    title: 'Manicure & Pedicure',
    description: 'Cuidados completos para suas mãos e pés.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002C2F] mb-4">Nossos Serviços</h2>
          <p className="text-lg md:text-xl text-[#002C2F]/70 max-w-2xl mx-auto">
            Oferecemos uma experiência completa de beleza com produtos de qualidade e profissionais
            altamente qualificados.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#002C2F] to-[#003840] rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <Icon size={32} className="text-[#F8EFE6]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#002C2F] mb-3">{service.title}</h3>
                <p className="text-[#002C2F]/70 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
