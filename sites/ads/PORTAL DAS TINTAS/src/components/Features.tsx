import { Palette, Truck, Users, Car, LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
  delay: string;
}

const features: Feature[] = [
  {
    Icon: Palette,
    iconClass: 'lucide lucide-palette w-12 h-12 text-[#f08736] mb-4',
    title: 'Mais de 6.000 Cores',
    text: 'Oferecemos a maior variedade de tonalidades da região',
    delay: '0s',
  },
  {
    Icon: Truck,
    iconClass: 'lucide lucide-truck w-12 h-12 text-[#f08736] mb-4',
    title: 'Entrega Garantida',
    text: 'Agilidade e pontualidade para toda Serra e região',
    delay: '0.1s',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users w-12 h-12 text-[#f08736] mb-4',
    title: 'Consultoria Profissional',
    text: 'Equipe qualificada pronta para orientar sua escolha',
    delay: '0.2s',
  },
  {
    Icon: Car,
    iconClass: 'lucide lucide-car w-12 h-12 text-[#f08736] mb-4',
    title: 'Linha Automotiva Completa',
    text: 'Qualidade superior para seu veículo com toda linha Skaylack',
    delay: '0.3s',
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slideUp"
              style={{
                animationDelay: f.delay,
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 20px',
              }}
            >
              <f.Icon className={f.iconClass} width={24} height={24} />
              <h3 className="text-xl font-bold text-black mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
