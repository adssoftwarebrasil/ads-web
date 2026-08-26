import { Shield, Zap, Users, ThumbsUp, MapPin, Clock } from 'lucide-react';

const differentials = [
  {
    icon: Shield,
    title: 'Procedência Confiável',
    description:
      'Todos os veículos passam por rigorosa inspeção. Você compra com total segurança e tranquilidade.',
  },
  {
    icon: ThumbsUp,
    title: 'Melhor Atendimento',
    description:
      'Atendimento personalizado e humanizado. Aqui você é tratado como um amigo, não apenas mais um cliente.',
  },
  {
    icon: Zap,
    title: 'Agilidade',
    description:
      'Processo simplificado e rápido. Da avaliação à entrega das chaves, sem burocracia desnecessária.',
  },
  {
    icon: Users,
    title: 'Família e Tradição',
    description:
      'Empresa familiar com valores sólidos. Pai e filho trabalhando juntos para realizar seus sonhos.',
  },
  {
    icon: MapPin,
    title: 'Atendimento Regional',
    description:
      'Atendemos Rondonópolis e cidades vizinhas em um raio de até 300km. Seja onde você estiver.',
  },
  {
    icon: Clock,
    title: 'Horário Amplo',
    description:
      'Seg–Sex das 07h30 às 18h00 e Sáb das 08h00 às 12h00. Disponíveis quando você precisar.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase">
            Por que nos escolher
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
            Nossos <span className="text-brand-red">Diferenciais</span>
          </h2>
          <p className="mt-4 text-[#C0C0C0] max-w-xl mx-auto text-lg leading-relaxed">
            Qualidade dos produtos, melhor atendimento e agilidade em cada negociação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-6 bg-brand-black-soft border border-white/10 hover:border-brand-red/40 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-brand-red/10 group-hover:bg-brand-red/20 border border-brand-red/30 rounded-2xl mb-4 transition-colors">
                  <Icon size={22} className="text-brand-red" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
