import CTAButton from './CTAButton';
import Reveal from './Reveal';

export default function FinalCTA() {
  return (
    <section className="bg-brand-brown text-white py-20 md:py-28 overflow-hidden relative grain">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(166, 124, 82, 0.18), transparent 60%)' }}
      />
      <Reveal className="max-w-3xl mx-auto px-4 md:px-8 relative text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-[4rem] font-bold leading-[1.05]">
          Você não precisa
          <br />
          de mais<span className="italic font-normal text-white/70"> teoria.</span>
        </h2>
        <p className="text-lg md:text-xl text-white/75 mt-7 leading-relaxed max-w-xl mx-auto">
          Desenvolver raciocínio clínico é o que permite transformar conhecimento em prática. O TRC foi criado para
          ajudar psicólogos a conduzirem sessões com mais segurança e clareza.
        </p>
        <div className="mt-10">
          <CTAButton
            label="Quero conduzir sessões com segurança"
            sizeClasses="px-6 py-3 text-base"
            iconSize={18}
          />
        </div>
      </Reveal>
    </section>
  );
}
