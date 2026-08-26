import { Target, Zap, Microscope, UserCheck, HeartHandshake, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Diferencial {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const items: Diferencial[] = [
  {
    Icon: Target,
    iconClass: 'lucide lucide-target text-cyan-brand',
    title: 'Tratamos a Causa',
    description: 'Identificamos e tratamos a raiz da sua dor, não apenas os sintomas superficiais.',
  },
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap text-cyan-brand',
    title: 'Alívio Rápido',
    description: 'Muitos pacientes sentem alívio significativo já nas primeiras sessões de tratamento.',
  },
  {
    Icon: Microscope,
    iconClass: 'lucide lucide-microscope text-cyan-brand',
    title: 'Método Exclusivo',
    description: 'Método Clix desenvolvido após 16 anos, integrando quiropraxia e reequilíbrio biomecânico.',
  },
  {
    Icon: UserCheck,
    iconClass: 'lucide lucide-user-check text-cyan-brand',
    title: 'Atendimento Individual',
    description: 'Cada paciente recebe um protocolo personalizado de acordo com suas necessidades únicas.',
  },
  {
    Icon: HeartHandshake,
    iconClass: 'lucide lucide-heart-handshake text-cyan-brand',
    title: 'Tratamento Humanizado',
    description: 'Ambiente acolhedor onde o paciente é tratado com respeito, atenção e cuidado integral.',
  },
  {
    Icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up text-cyan-brand',
    title: '+14 Anos de Experiência',
    description: 'Pioneiros na Paraíba com mais de 60 mil pacientes atendidos e 531 avaliações 5 estrelas.',
  },
];

export default function Diferenciais() {
  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-brand rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-brand rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-brand text-sm font-semibold tracking-widest uppercase mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Nossos <span className="text-cyan-brand">Diferenciais</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-cyan-brand/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-brand/20 border border-cyan-brand/30 flex items-center justify-center mb-4 group-hover:bg-cyan-brand/30 transition-colors">
                <item.Icon width={22} height={22} className={item.iconClass} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
