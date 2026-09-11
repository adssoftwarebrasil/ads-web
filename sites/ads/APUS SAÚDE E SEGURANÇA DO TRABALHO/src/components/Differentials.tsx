import { Zap, FileCheck, ShieldCheck, UsersRound, type LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap',
    title: 'Atendimento Ágil e Personalizado',
    description: 'Resposta em até 24h com profissionais dedicados exclusivamente ao seu caso.',
  },
  {
    icon: FileCheck,
    iconClass: 'lucide lucide-file-check',
    title: 'Documentação Impecável',
    description:
      'Laudos técnicos precisos com conformidade garantida às Normas Regulamentadoras.',
  },
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check',
    title: 'Prevenção de Multas e Autuações',
    description: 'Análise preventiva completa com acompanhamento contínuo da sua empresa.',
  },
  {
    icon: UsersRound,
    iconClass: 'lucide lucide-users-round',
    title: 'Equipe Multidisciplinar',
    description:
      'Médicos, engenheiros e técnicos especializados com experiência em diversos segmentos.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,9,31)] mb-4">
            Por Que Escolher a APUS?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Diferenciais que garantem excelência e segurança para sua empresa
          </p>
        </div>
        <div className="space-y-24">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            const isReversed = index % 2 === 1;
            return (
              <div
                key={item.title}
                className={
                  isReversed
                    ? 'grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense'
                    : 'grid md:grid-cols-2 gap-12 items-center '
                }
              >
                <div className={isReversed ? 'md:col-start-2' : ''}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-[rgb(253,144,41)]/10 rounded-xl">
                      <Icon size={32} className={`${item.iconClass} text-[rgb(253,144,41)]`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[rgb(28,9,31)] mb-4">{item.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className={isReversed ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgb(78,20,104)] to-[rgb(253,144,41)] rounded-2xl transform rotate-3"></div>
                    <div className="relative bg-gradient-to-br from-[rgb(78,20,104)] to-[rgb(253,144,41)] rounded-2xl p-12 flex items-center justify-center">
                      <Icon
                        size={120}
                        strokeWidth={1.5}
                        className={`${item.iconClass} text-white`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
