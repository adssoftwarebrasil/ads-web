import { Shield, Eye, Star, DollarSign } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Reason {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield text-red-400 group-hover:text-white transition-colors',
    title: 'Reparos de Alta Qualidade',
    description: 'Utilizamos técnicas modernas que garantem durabilidade e beleza.',
  },
  {
    icon: Eye,
    iconClass: 'lucide lucide-eye text-red-400 group-hover:text-white transition-colors',
    title: 'Suporte e Transparência',
    description:
      'Trabalhamos com você em cada etapa do processo, garantindo transparência total com fotos e vídeos.',
  },
  {
    icon: Star,
    iconClass: 'lucide lucide-star text-red-400 group-hover:text-white transition-colors',
    title: 'Profissionais Qualificados',
    description:
      'Seu carro é tratado por profissionais qualificados e dedicados a entregar o melhor resultado.',
  },
  {
    icon: DollarSign,
    iconClass: 'lucide lucide-dollar-sign text-red-400 group-hover:text-white transition-colors',
    title: 'Preços Justos',
    description: 'Serviços de qualidade com preços justos e acessíveis para você.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-4">
            Por que contratar?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Por Que Escolher a Expressocar
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Nós garantimos a qualidade que seu veículo merece, com a confiança de quem entende do
            assunto.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-red-600/20 group-hover:bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className={reason.iconClass} width={22} height={22} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
