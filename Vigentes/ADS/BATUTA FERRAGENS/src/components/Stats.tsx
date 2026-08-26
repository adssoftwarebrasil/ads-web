import { Package, Star, Users, MapPin } from 'lucide-react';
import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface Stat {
  icon: ReactNode;
  value: string;
  suffix: string;
  label: string;
  delay: number;
}

const stats: Stat[] = [
  {
    icon: <Package width={22} height={22} className="lucide lucide-package text-brand" />,
    value: '5000+',
    suffix: '',
    label: 'Produtos em Estoque',
    delay: 0,
  },
  {
    icon: <Star width={22} height={22} className="lucide lucide-star text-brand" />,
    value: '4.9',
    suffix: '/5',
    label: 'Avaliação no Google',
    delay: 120,
  },
  {
    icon: <Users width={22} height={22} className="lucide lucide-users text-brand" />,
    value: '10',
    suffix: '+',
    label: 'Anos de Experiência',
    delay: 240,
  },
  {
    icon: <MapPin width={22} height={22} className="lucide lucide-map-pin text-brand" />,
    value: '1',
    suffix: 'local',
    label: 'Ponto de Atendimento',
    delay: 360,
  },
];

export default function Stats() {
  const grid = useReveal<HTMLDivElement>();

  return (
    <section className="bg-navy py-14 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy to-navy-light opacity-80"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={grid.ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`text-center transition-all duration-700 ${
                grid.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${s.delay}ms` }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-xl bg-brand/15 flex items-center justify-center border border-brand/20">
                  {s.icon}
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-cream mb-1">
                {s.value}
                <span className="text-brand text-lg">{s.suffix}</span>
              </div>
              <p className="text-cream/60 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
