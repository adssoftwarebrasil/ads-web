import type { ComponentType } from 'react';
import { Star, Users, Trophy, ThumbsUp } from 'lucide-react';

interface Stat {
  icon: ComponentType<{ width?: number; height?: number; className?: string }>;
  iconClass: string;
  value: string;
  highlight: string;
  label: string;
  sub: string;
  delay: number;
}

const stats: Stat[] = [
  {
    icon: Star,
    iconClass: 'lucide lucide-star text-brand-blue',
    value: '4.8',
    highlight: '★',
    label: 'Avaliação Média',
    sub: 'no Google',
    delay: 0,
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users text-brand-blue',
    value: '500',
    highlight: '+',
    label: 'Clientes Atendidos',
    sub: 'e crescendo',
    delay: 100,
  },
  {
    icon: Trophy,
    iconClass: 'lucide lucide-trophy text-brand-blue',
    value: '3',
    highlight: ' anos',
    label: 'De Experiência',
    sub: 'desde 2022',
    delay: 200,
  },
  {
    icon: ThumbsUp,
    iconClass: 'lucide lucide-thumbs-up text-brand-blue',
    value: '100',
    highlight: '%',
    label: 'Satisfação',
    sub: 'garantida',
    delay: 300,
  },
];

const testimonials = [
  {
    quote:
      '"Serviço impecável! Meu caminhão ficou como novo. A equipe é pontual, profissional e muito atenciosa."',
    initial: 'M',
    name: 'Marcos T.',
    delay: 400,
  },
  {
    quote:
      '"Levei minha Hilux para lavagem completa e fiquei impressionada com o resultado. Recomendo muito!"',
    initial: 'J',
    name: 'Juliana R.',
    delay: 500,
  },
  {
    quote:
      '"Os melhores da região para lavagem de máquina pesada. Já trouxe minha colheitadeira várias vezes."',
    initial: 'R',
    name: 'Roberto A.',
    delay: 600,
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgb(169, 199, 209), transparent 60%)',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            Números que provam
          </span>
          <h2 className="section-title mb-4">
            Confiança Construída <span style={{ color: 'rgb(169, 199, 209)' }}>Dia a Dia</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center card-glass p-8 rounded-2xl transition-all duration-600 hover:scale-105 hover:border-brand-blue/30 opacity-100 translate-y-0"
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/15 flex items-center justify-center mx-auto mb-4 border border-brand-blue/20">
                  <Icon width={26} height={26} className={stat.iconClass} />
                </div>
                <div className="text-4xl font-black text-white mb-1 tracking-tight">
                  {stat.value}
                  <span style={{ color: 'rgb(169, 199, 209)' }}>{stat.highlight}</span>
                </div>
                <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-white/40 text-xs">{stat.sub}</div>
              </div>
            );
          })}
        </div>
        <div className="transition-all duration-700 delay-400 opacity-100 translate-y-0">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">O que nossos clientes dizem</h3>
            <p className="text-white/50 text-sm">
              Opiniões reais de quem já viveu a experiência Dois Irmãos Car
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-glass p-6 rounded-2xl transition-all duration-600 hover:border-brand-blue/30 opacity-100 translate-y-0"
                style={{ transitionDelay: `${t.delay}ms` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      width={14}
                      height={14}
                      className="lucide lucide-star text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4 italic">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-brand-black"
                    style={{ backgroundColor: 'rgb(169, 199, 209)' }}
                  >
                    {t.initial}
                  </div>
                  <span className="text-white font-medium text-sm">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
