import { Users, Award, Building2, CheckCircle2, type LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  iconClass: string;
  value: string;
  label: string;
  delay: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    iconClass: 'lucide lucide-users text-[rgb(236,33,40)]',
    value: '1200+',
    label: 'Clientes Satisfeitos',
    delay: 'delay-0',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-[rgb(236,33,40)]',
    value: '18+',
    label: 'Anos de Experiência',
    delay: 'delay-100',
  },
  {
    icon: Building2,
    iconClass: 'lucide lucide-building2 text-[rgb(236,33,40)]',
    value: '15+',
    label: 'Empresas Atendidas',
    delay: 'delay-200',
  },
  {
    icon: CheckCircle2,
    iconClass: 'lucide lucide-check-circle2 text-[rgb(236,33,40)]',
    value: '2500+',
    label: 'Projetos Finalizados',
    delay: 'delay-300',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[rgb(41,35,88)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center transform transition-all duration-700 ${stat.delay} translate-y-10 opacity-0`}
              >
                <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className={stat.iconClass} width={40} height={40} />
                </div>
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
