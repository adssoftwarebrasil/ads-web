import { Zap, Shield, Headphones, ThumbsUp, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const items: { Icon: LucideIcon; iconClass: string; title: string; description: string }[] = [
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap text-brand-red',
    title: 'Cotação em Minutos',
    description:
      'Envie seus dados e receba múltiplas opções de cobertura comparadas para você escolher o melhor plano.',
  },
  {
    Icon: Shield,
    iconClass: 'lucide lucide-shield text-brand-red',
    title: 'Seguradoras Renomadas',
    description:
      'Trabalhamos com as maiores e mais sólidas seguradoras do Brasil para garantir sua proteção.',
  },
  {
    Icon: Headphones,
    iconClass: 'lucide lucide-headphones text-brand-red',
    title: 'Atendimento Personalizado',
    description:
      'Nossos especialistas te acompanham em cada etapa, da cotação até o acionamento do seguro.',
  },
  {
    Icon: ThumbsUp,
    iconClass: 'lucide lucide-thumbs-up text-brand-red',
    title: 'Preço Justo',
    description: 'Negociamos as melhores condições para que você pague menos e tenha mais proteção.',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock text-brand-red',
    title: 'Agilidade no Sinistro',
    description:
      'Em caso de sinistro, nossa equipe atua rapidamente para garantir o atendimento que você precisa.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-brand-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-widest">Por que nos escolher</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Nossos Diferenciais</h2>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            Mais do que uma corretora, somos seu parceiro na proteção de tudo que é importante para você.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const { Icon } = item;
            return (
              <div
                key={item.title}
                className="benefit-card group bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-red/20 border border-brand-red/30 rounded-xl mb-5 group-hover:bg-brand-red/30 transition-colors duration-300">
                  <Icon size={22} className={item.iconClass} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
