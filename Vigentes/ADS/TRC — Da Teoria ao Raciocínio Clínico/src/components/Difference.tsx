import { Target, Brain, ClipboardCheck, MessageSquare, type LucideIcon } from 'lucide-react';
import CTAButton from './CTAButton';
import Reveal from './Reveal';

const items: { icon: LucideIcon; iconClass: string; label: string }[] = [
  { icon: Target, iconClass: 'lucide lucide-target text-white/75', label: 'Foco na prática clínica' },
  {
    icon: Brain,
    iconClass: 'lucide lucide-brain text-white/75',
    label: 'Ensino de raciocínio clínico passo a passo',
  },
  { icon: ClipboardCheck, iconClass: 'lucide lucide-clipboard-check text-white/75', label: 'Base em TCC' },
  {
    icon: MessageSquare,
    iconClass: 'lucide lucide-message-square text-white/75',
    label: 'Linguagem clara e didática',
  },
];

export default function Difference() {
  return (
    <section className="bg-brand-brown text-white py-20 md:py-28 relative overflow-hidden grain">
      <Reveal className="max-w-5xl mx-auto px-4 md:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1]">
            O que torna o TRC<span className="italic font-normal text-white/60"> diferente</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mt-14">
          {items.map(({ icon: Icon, iconClass, label }) => (
            <div
              key={label}
              className="flex items-center gap-5 bg-white/[0.04] border border-white/10 rounded-2xl px-7 py-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                <Icon size={24} strokeWidth={1.75} className={iconClass} />
              </div>
              <p className="font-display text-lg md:text-xl font-semibold leading-snug">{label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTAButton label="Quero me inscrever no TRC" />
        </div>
      </Reveal>
    </section>
  );
}
