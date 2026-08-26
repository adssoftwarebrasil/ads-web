import { Users, Award, Wallet, Clock, Shield, ThumbsUp, type LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface Differential {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Equipe Especializada',
    description: 'Técnicos treinados com vasta experiência em diversas marcas e modelos.',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award',
    title: 'Diagnóstico Preciso',
    description: 'Equipamentos de última geração para identificar problemas com exatidão.',
  },
  {
    icon: Wallet,
    iconClass: 'lucide lucide-wallet',
    title: 'Preço Justo',
    description: 'Orçamento detalhado e transparente. Você sabe exatamente o que está pagando.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock',
    title: 'Pontualidade',
    description: 'Respeito pelo seu tempo. Entrega no prazo combinado, sem atrasos.',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Peças de Qualidade',
    description: 'Utilizamos peças originais e de procedência garantida no seu veículo.',
  },
  {
    icon: ThumbsUp,
    iconClass: 'lucide lucide-thumbs-up',
    title: 'Garantia de Serviço',
    description: 'Confiança total no trabalho realizado, com garantia em todos os serviços.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-speedcar-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-speedcar-red"></span>
              <span className="text-speedcar-red text-xs font-bold tracking-[0.2em] uppercase">
                Diferenciais
              </span>
              <span className="h-[2px] w-8 bg-speedcar-red"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Por Que Escolher a SpeedCar?
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Compromisso com a qualidade e satisfação do cliente em cada serviço realizado.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group p-8 rounded-xl border border-white/10 hover:border-speedcar-red/40 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-speedcar-red/20 flex items-center justify-center mb-5 group-hover:bg-speedcar-red transition-all duration-300">
                    <Icon
                      className={`${item.iconClass} w-6 h-6 text-speedcar-red group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
