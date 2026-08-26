import { Award, Pizza, Users, Tag, LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { icon: Award, value: '0+', label: 'anos de experiência' },
  { icon: Pizza, value: '0+', label: 'tipos de pizza' },
  { icon: Users, value: '0%', label: 'de clientes satisfeitos' },
  { icon: Tag, value: '0+', label: 'promoções mensais' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[rgb(235,185,3)]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Icon
                  size={50}
                  className="text-[rgb(150,1,0)] mx-auto mb-4"
                />
                <span className="text-6xl font-extrabold text-[rgb(150,1,0)]">
                  {stat.value}
                </span>
                <p className="text-[rgb(100,0,0)] text-lg font-medium mt-2">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
