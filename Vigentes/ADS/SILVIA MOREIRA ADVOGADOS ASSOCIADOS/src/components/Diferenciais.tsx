import { UserCheck, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Diferencial {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const items: Diferencial[] = [
  {
    Icon: UserCheck,
    title: 'Atendimento Exclusivo por Especialistas',
    desc: 'Todos os nossos atendimentos são realizados exclusivamente por advogados especialistas, garantindo orientação precisa e qualificada em cada caso.',
  },
  {
    Icon: MessageSquare,
    title: 'Acompanhamento Personalizado',
    desc: 'Durante toda a tramitação processual, permanecemos à disposição para agendamentos com atendimento individualizado, esclarecendo todas as dúvidas.',
  },
  {
    Icon: ShieldCheck,
    title: 'Advocacia Preventiva e Consultiva',
    desc: 'Criatividade e inteligência jurídica para facilitar suas tomadas de decisão, com atuação preventiva que evita litígios desnecessários.',
  },
  {
    Icon: Clock,
    title: 'Atendimento Multicanal',
    desc: 'Estamos disponíveis por telefone, WhatsApp, presencial ou virtual. Funcionamos das 08h às 17h, sem fechar para o almoço.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] gold-gradient"></div>
            <span className="text-brand-gold-dark text-sm font-semibold tracking-[0.15em] uppercase">
              Por Que Nos Escolher
            </span>
            <div className="w-10 h-[2px] gold-gradient"></div>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Nossos <span className="text-brand-red">Diferenciais</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Comprometimento e empatia para entender suas necessidades, aliados à excelência no exercício da
            advocacia pautada na ética profissional.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {items.map(({ Icon, title, desc }, i) => (
            <div key={title} className="animate-fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="group flex gap-5 bg-brand-cream rounded-2xl p-7 border border-brand-cream-dark/50 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-500">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-red flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
