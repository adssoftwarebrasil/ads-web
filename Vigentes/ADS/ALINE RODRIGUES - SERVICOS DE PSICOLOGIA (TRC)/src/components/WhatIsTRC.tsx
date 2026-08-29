import CTAButton from './CTAButton';
import Reveal from './Reveal';

const steps = [
  {
    n: '1',
    label: 'Por quê',
    text: 'por que utilizar determinada intervenção',
    strong: false,
  },
  {
    n: '2',
    label: 'Quando',
    text: 'em qual momento ela faz sentido',
    strong: false,
  },
  {
    n: '3',
    label: 'Como conectar',
    text: 'como conectar anamnese, conceitualização, metas e técnicas dentro de uma linha de raciocínio clínico',
    strong: true,
  },
];

export default function WhatIsTRC() {
  return (
    <section className="bg-brand-beige py-20 md:py-28 relative overflow-hidden grain">
      <Reveal className="max-w-4xl mx-auto px-4 md:px-8">
        <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] text-brand-brown font-bold leading-[1.1]">
          O que é o<span className="italic font-normal text-brand-brown/70"> TRC?</span>
        </h2>
        <div className="space-y-5 text-brand-gray text-base md:text-lg mt-7 leading-relaxed">
          <p>
            O <strong className="text-brand-brown">TRC — Da Teoria ao Raciocínio Clínico</strong> é um curso voltado
            para psicólogos que atuam ou desejam atuar com a Terapia Cognitivo-Comportamental e querem desenvolver
            mais clareza, direção e segurança na prática clínica.
          </p>
          <p>
            O curso foi pensado tanto para{' '}
            <strong className="text-brand-brown">profissionais que já possuem base teórica</strong>, mas têm
            dificuldade em organizar e aplicar esse conhecimento nos atendimentos, quanto para{' '}
            <strong className="text-brand-brown">psicólogos que estão começando na TCC</strong> e ainda sentem
            dificuldade em compreender o raciocínio clínico por trás das intervenções.
          </p>
          <p>Porque, muitas vezes, o desafio não é apenas conhecer a técnica. É entender:</p>
        </div>
        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-7 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-brand-brown/15 via-brand-brown/35 to-brand-brown/15"
          />
          <div
            aria-hidden="true"
            className="md:hidden absolute left-7 top-[16%] bottom-[16%] w-px bg-gradient-to-b from-brand-brown/15 via-brand-brown/35 to-brand-brown/15"
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-5 relative">
            {steps.map((step) => (
              <div
                key={step.n}
                className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center bg-brand-beige md:bg-white/60 md:backdrop-blur-sm md:border md:border-brand-brown/10 md:rounded-2xl md:p-6 md:shadow-sm"
              >
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-display text-xl font-bold bg-white text-brand-brown border-2 border-brand-brown/20 shadow-sm">
                  {step.n}
                </div>
                <div className="md:mt-4 flex-1">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-1 text-brand-brown/55">
                    {step.label}
                  </p>
                  <p
                    className={
                      step.strong
                        ? 'text-sm md:text-[15px] leading-snug text-brand-brown font-semibold'
                        : 'text-sm md:text-[15px] leading-snug text-brand-gray'
                    }
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-brand-brown font-display text-lg md:text-xl italic leading-snug mt-8">
          O foco do TRC não é ensinar mais teoria. É te ensinar a pensar clinicamente e transformar conhecimento em
          condução terapêutica na prática.
        </p>
        <div className="mt-9">
          <CTAButton label="Quero acessar o TRC" />
        </div>
      </Reveal>
    </section>
  );
}
