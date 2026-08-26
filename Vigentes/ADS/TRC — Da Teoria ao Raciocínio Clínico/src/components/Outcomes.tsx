import { Check } from 'lucide-react';
import Reveal from './Reveal';

const outcomes = [
  'Conduzir sessões com mais segurança',
  'Saber o que fazer em cada etapa do atendimento',
  'Desenvolver raciocínio clínico estruturado',
  'Tomar decisões clínicas com mais clareza e segurança',
  'Aplicar teoria na prática com mais confiança',
];

export default function Outcomes() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      <Reveal className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <h2 className="font-display text-3xl md:text-5xl text-brand-brown font-bold leading-[1.1]">
              O que você vai conseguir fazer
              <span className="italic font-normal text-brand-brown/70"> após o TRC</span>
            </h2>
          </div>
          <ul className="space-y-3">
            {outcomes.map((text, i) => (
              <li
                key={text}
                className="group flex items-start gap-5 bg-brand-beige/70 hover:bg-brand-beige border border-brand-brown/5 rounded-2xl p-5 md:p-6 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-sm border border-brand-brown/10 flex items-center justify-center mt-0.5">
                  <Check size={20} strokeWidth={2.25} className="lucide lucide-check text-brand-brown" />
                </div>
                <div className="flex-1">
                  <p className="text-base md:text-lg text-brand-brown font-medium leading-relaxed">{text}</p>
                </div>
                <div className="flex-shrink-0 hidden md:flex w-8 h-8 rounded-full bg-brand-brown/5 text-brand-brown/40 items-center justify-center font-display text-sm font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
