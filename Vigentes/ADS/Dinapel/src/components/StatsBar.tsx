import { Award, Truck, Clock, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Stat = {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
};

const stats: Stat[] = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award text-[#0131AC]',
    title: 'Desde 1998',
    text: 'Mais de 25 anos de experiência no setor agrícola',
  },
  {
    Icon: Truck,
    iconClass: 'lucide lucide-truck text-[#0131AC]',
    title: 'Pronta Entrega',
    text: 'Grande estoque com variedade de peças e marcas',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock text-[#0131AC]',
    title: 'Atendimento Ágil',
    text: 'Equipe especializada para orientar sua compra',
  },
  {
    Icon: MapPin,
    iconClass: 'lucide lucide-map-pin text-[#0131AC]',
    title: 'Boa Vista – RR',
    text: 'Atendemos toda a cidade e interior de Roraima',
  },
];

export default function StatsBar() {
  return (
    <section className="blue-gradient py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ Icon, iconClass, title, text }) => (
            <div key={title} className="flex items-start gap-4 p-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FCE500] flex items-center justify-center shadow-lg">
                <Icon size={22} className={iconClass} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">{title}</h3>
                <p className="text-white/70 text-sm mt-0.5 leading-snug">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
