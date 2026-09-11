import { Award, Stethoscope, Clock } from 'lucide-react';

const stats = [
  { Icon: Award, iconClass: 'lucide lucide-award', value: '30+', label: 'Anos de Experiência' },
  { Icon: Stethoscope, iconClass: 'lucide lucide-stethoscope', value: 'Especialista', label: 'em 4 Áreas' },
  { Icon: Clock, iconClass: 'lucide lucide-clock', value: '24h', label: 'Emergências' },
];

export default function StatsBar() {
  return (
    <section className="bg-white py-12 shadow-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center text-center">
              <stat.Icon size={48} className={`${stat.iconClass} text-[rgb(107,218,229)] mb-4`} />
              <h3 className="text-3xl font-bold text-[rgb(0,87,101)] mb-2">{stat.value}</h3>
              <p className="text-[rgb(42,42,42)] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
