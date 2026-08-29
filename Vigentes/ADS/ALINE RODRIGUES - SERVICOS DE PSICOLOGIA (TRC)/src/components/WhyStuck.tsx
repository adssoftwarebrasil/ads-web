import Reveal from './Reveal';

const doubts = [
  'O que perguntar?',
  'Como conduzir o caso?',
  'Qual caminho seguir com o paciente?',
  'O que priorizar/trabalhar primeiro?',
];

export default function WhyStuck() {
  return (
    <section className="bg-brand-brown text-white py-20 md:py-28 relative overflow-hidden grain">
      <Reveal className="max-w-5xl mx-auto px-4 md:px-8 relative">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1]">
            Por que você ainda trava
            <br />
            <span className="italic font-normal text-white/60">na hora de atender?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 mt-6 leading-relaxed">
            Muitos psicólogos saem da graduação com uma boa base teórica, mas sem clareza sobre como conduzir um
            atendimento na prática.
          </p>
        </div>
        <p className="text-white/60 mt-12 mb-5 text-sm uppercase tracking-[0.18em] font-semibold">
          Na sessão, surgem dúvidas como:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {doubts.map((d) => (
            <div
              key={d}
              className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5"
            >
              <span className="font-display text-2xl text-white/25 leading-none">“</span>
              <p className="font-display text-lg md:text-xl font-semibold">{d}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-white/70 mt-10 leading-relaxed max-w-3xl">
          Isso gera insegurança, sensação de estar perdido e dificuldade em tomar decisões clínicas.
        </p>
        <Reveal className="mt-10">
          <div className="bg-brand-beige text-brand-brown border-l-4 border-brand-brown/30 rounded-r-2xl p-7 md:p-9 max-w-4xl">
            <p className="font-display text-xl md:text-2xl lg:text-[1.75rem] leading-snug">
              Na maioria das vezes, o problema não é falta de conhecimento —{' '}
              <span className="italic">
                é falta de <strong className="not-italic">estrutura prática</strong> para aplicar o que foi
                aprendido.
              </span>
            </p>
          </div>
        </Reveal>
      </Reveal>
    </section>
  );
}
