import {
  Zap,
  MessageCircle,
  CalendarCheck,
  Clock4,
  BellRing,
  HandHeart,
  BookOpen,
  Tag,
  Leaf,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const items: { Icon: LucideIcon; iconClass: string; title: string; text: string }[] = [
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap text-[#ffaf24]',
    title: 'Entrega ágil',
    text: 'Caçamba no mesmo dia ou em poucas horas. Sua obra não para.',
  },
  {
    Icon: MessageCircle,
    iconClass: 'lucide lucide-message-circle text-[#ffaf24]',
    title: 'Resposta rápida',
    text: 'Atendemos pelo WhatsApp com agilidade. Sem esperas desnecessárias.',
  },
  {
    Icon: CalendarCheck,
    iconClass: 'lucide lucide-calendar-check text-[#ffaf24]',
    title: 'Agendamento fácil',
    text: 'Marque sua entrega em minutos, sem burocracia.',
  },
  {
    Icon: Clock4,
    iconClass: 'lucide lucide-clock4 text-[#ffaf24]',
    title: 'Prazos cumpridos',
    text: 'Respeitamos os horários de entrega e retirada acordados.',
  },
  {
    Icon: BellRing,
    iconClass: 'lucide lucide-bell-ring text-[#ffaf24]',
    title: 'Aviso antecipado',
    text: 'Avisamos o cliente com antecedência sobre cada etapa do serviço.',
  },
  {
    Icon: HandHeart,
    iconClass: 'lucide lucide-hand-heart text-[#ffaf24]',
    title: 'Educação e clareza',
    text: 'Time atencioso que trata cada cliente com respeito e transparência.',
  },
  {
    Icon: BookOpen,
    iconClass: 'lucide lucide-book-open text-[#ffaf24]',
    title: 'Explicamos tudo',
    text: 'Tempo de locação, regras de uso e próximos passos — sem pegadinhas.',
  },
  {
    Icon: Tag,
    iconClass: 'lucide lucide-tag text-[#ffaf24]',
    title: 'Valor claro',
    text: 'Orçamento fechado desde o início. Zero surpresas na cobrança.',
  },
  {
    Icon: Leaf,
    iconClass: 'lucide lucide-leaf text-[#ffaf24]',
    title: 'Destinação correta',
    text: 'Parcerias com locais regulamentados para descarte responsável.',
  },
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-[#ffaf24]',
    title: 'Compromisso real',
    text: 'Prometemos e cumprimos. Transparência em qualquer situação.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-[#343434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ffaf24]/20 text-[#ffaf24] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Por que nos escolher
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#fefefe] mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Mais do que locação de caçambas — entregamos tranquilidade, pontualidade e respeito em
            cada serviço.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map(({ Icon, iconClass, title, text }) => (
            <div
              key={title}
              className="group bg-white/5 hover:bg-[#ffaf24]/10 border border-white/10 hover:border-[#ffaf24]/40 rounded-2xl p-5 transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-[#ffaf24]/15 group-hover:bg-[#ffaf24]/25 flex items-center justify-center mb-4 transition-colors">
                <Icon className={iconClass} width={22} height={22} />
              </div>
              <h3 className="text-[#fefefe] font-bold text-sm mb-1.5">{title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
