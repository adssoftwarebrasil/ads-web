import type { ComponentType } from 'react';
import { Zap, Shield, DollarSign, Award } from 'lucide-react';

type IconProps = { width?: number; height?: number; className?: string };

interface Reason {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
  iconClass: string;
}

const reasons: Reason[] = [
  {
    title: 'Rapidez e Eficiência',
    description: 'Chegamos até você rapidamente e resolvemos o problema com eficiência.',
    Icon: Zap,
    iconClass: 'lucide lucide-zap ',
  },
  {
    title: 'Serviço Confiável',
    description: 'Você pode confiar na nossa equipe para um atendimento seguro.',
    Icon: Shield,
    iconClass: 'lucide lucide-shield ',
  },
  {
    title: 'Preços Competitivos',
    description: 'Oferecemos serviços de alta qualidade com preços competitivos.',
    Icon: DollarSign,
    iconClass: 'lucide lucide-dollar-sign ',
  },
  {
    title: 'Comprometimento',
    description: 'Nossa meta é sempre superar as expectativas dos nossos clientes.',
    Icon: Award,
    iconClass: 'lucide lucide-award ',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-[hsl(211,66%,41%)] font-semibold text-lg mb-3">Porque contratar?</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(211,66%,25%)] mb-4">
            Por Que Contratar Fabricio Guincho Auto Socorro
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">A melhor escolha para serviços de reboque e socorro</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-[hsl(211,66%,90%)] to-white hover:from-[hsl(211,66%,41%)] hover:to-[hsl(211,66%,35%)] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[hsl(211,66%,41%)] text-white group-hover:bg-white group-hover:text-[hsl(211,66%,41%)] transition-all duration-300 shadow-lg">
                <r.Icon width={32} height={32} className={r.iconClass} />
              </div>
              <h3 className="text-xl font-bold text-[hsl(211,66%,25%)] mb-3 group-hover:text-white transition-colors">
                {r.title}
              </h3>
              <p className="text-gray-700 leading-relaxed group-hover:text-white/90 transition-colors">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
