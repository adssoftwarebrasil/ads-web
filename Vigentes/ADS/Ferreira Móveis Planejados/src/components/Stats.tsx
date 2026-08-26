import { Clock, Award, Users, Star, type LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  iconClass: string;
  value: string;
  title: string;
  desc: string;
  delay: number;
}

const stats: Stat[] = [
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock text-[#e4e6e7]',
    value: '8+',
    title: 'Anos de Experiência',
    desc: 'Atuando no mercado de Sinop e região',
    delay: 0,
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-[#e4e6e7]',
    value: '100%',
    title: 'Projetos Personalizados',
    desc: 'Cada ambiente é único e sob medida',
    delay: 100,
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users text-[#e4e6e7]',
    value: 'Centenas',
    title: 'de Clientes Satisfeitos',
    desc: 'Famílias que confiam no nosso trabalho',
    delay: 200,
  },
  {
    icon: Star,
    iconClass: 'lucide lucide-star text-[#e4e6e7]',
    value: '5.0',
    title: 'Avaliação no Google',
    desc: 'Excelência reconhecida pelos clientes',
    delay: 300,
  },
];

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="text-center transition-all duration-700 ease-out opacity-100 translate-y-0"
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#5b5c57]/30 mb-4">
                  <Icon className={stat.iconClass} width={24} height={24} />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[#e4e6e7] font-semibold text-sm mb-1">{stat.title}</div>
                <div className="text-[#5b5c57] text-xs leading-relaxed">{stat.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
