import { Eye, Users, Sparkles, type LucideIcon } from 'lucide-react';
import CTAButton from './CTAButton';
import Reveal from './Reveal';

const cards: { icon: LucideIcon; iconClass: string; title: string; text: string }[] = [
  {
    icon: Eye,
    iconClass: 'lucide lucide-eye text-brand-brown',
    title: 'Prática real',
    text: 'Desenvolvido a partir da prática clínica real.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users text-brand-brown',
    title: 'Supervisão',
    text: 'Construído na experiência supervisionando psicólogos.',
  },
  {
    icon: Sparkles,
    iconClass: 'lucide lucide-sparkles text-brand-brown',
    title: 'Direção clínica',
    text: 'Foco em transformar conhecimento em decisão na sessão.',
  },
];

export default function WhyWorks() {
  return (
    <section className="bg-brand-beige py-20 md:py-28 relative overflow-hidden grain">
      <Reveal className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] text-brand-brown font-bold leading-[1.1]">
            Por que o TRC<span className="italic font-normal text-brand-brown/70"> funciona?</span>
          </h2>
        </div>
        <div className="space-y-6 text-brand-gray leading-relaxed mt-10 text-base md:text-lg max-w-3xl mx-auto">
          <p>O TRC foi desenvolvido a partir da prática clínica real e da experiência em supervisão de psicólogos.</p>
          <p>
            Ao longo dos atendimentos e supervisões, ficou evidente um padrão muito comum:{' '}
            <strong className="text-brand-brown">
              profissionais que estudaram teoria, conhecem técnicas da TCC, mas ainda sentem dificuldade em
              transformar esse conhecimento em direção clínica dentro da sessão.
            </strong>
          </p>
          <p>
            Isso acontece porque a graduação e muitos cursos ensinam conceitos e intervenções, mas raramente ensinam
            como organizar informações, construir hipóteses clínicas e tomar decisões terapêuticas de forma
            estruturada.
          </p>
          <p>
            Por isso, o{' '}
            <strong className="text-brand-brown">TRC foi criado com foco no desenvolvimento do raciocínio clínico</strong>
            : para te ajudar a sair da condução baseada em tentativa e erro e passar a atender com mais clareza,
            segurança.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          {cards.map(({ icon: Icon, iconClass, title, text }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-brand-brown/8 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-brand-brown/8 flex items-center justify-center mb-4">
                <Icon size={20} strokeWidth={2} className={iconClass} />
              </div>
              <p className="text-sm text-brand-brown font-semibold mb-1.5">{title}</p>
              <p className="text-[13px] text-brand-gray leading-snug">{text}</p>
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
