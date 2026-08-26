import { Heart, Clock, CreditCard, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const reasons: { icon: LucideIcon; title: string; description: string; delay: string }[] = [
  {
    icon: Heart,
    title: 'Atendimento Diferenciado',
    description:
      'Foco total na satisfação do cliente com suporte personalizado e consultoria especializada.',
    delay: '0ms',
  },
  {
    icon: Clock,
    title: 'Agendamento Rápido',
    description: 'Atendimento 24 horas com agendamento ágil para não deixar você na mão.',
    delay: '100ms',
  },
  {
    icon: CreditCard,
    title: 'Pagamento Flexível',
    description: 'Diversas formas de pagamento adaptadas à sua realidade financeira.',
    delay: '200ms',
  },
  {
    icon: Award,
    title: 'Organização e Qualidade',
    description: 'Processos organizados, equipe treinada e produtos certificados.',
    delay: '300ms',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Por Que Escolher a MS Climatizadores?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="h-full transition-all duration-700 opacity-100 translate-y-0"
                style={{ transitionDelay: reason.delay }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:border-yellow-500 hover:shadow-lg group">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon width={32} height={32} className="text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
