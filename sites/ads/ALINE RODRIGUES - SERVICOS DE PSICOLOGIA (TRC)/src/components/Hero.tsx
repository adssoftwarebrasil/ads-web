import CTAButton from './CTAButton';

const gridStyle = {
  backgroundImage:
    'linear-gradient(rgb(74, 59, 42) 1px, transparent 1px), linear-gradient(90deg, rgb(74, 59, 42) 1px, transparent 1px)',
  backgroundSize: '64px 64px',
};

export default function Hero() {
  return (
    <section className="relative bg-brand-beige overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0" style={gridStyle} />
      </div>
      <div className="max-w-2xl mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-14 md:pb-16 text-center flex flex-col items-center">
        <div className="flex flex-col items-center">
          <img
            src="https://storage.lucasmendes.dev/caroba/curso-aline-rodrigues/alteracoes/alteracoes2/imagemprincipaltrc.png"
            alt="Aline Rodrigues — TRC"
            loading="eager"
            className="w-full max-w-[230px] sm:max-w-[265px] lg:max-w-[300px] h-auto object-contain mx-auto"
          />
        </div>
        <h1 className="font-display text-[2.25rem] sm:text-5xl lg:text-[3.5rem] text-brand-brown leading-[1.02] font-bold mt-2">
          <span className="inline-block mr-[0.22em]">Da</span>
          <span className="inline-block mr-[0.22em]">Teoria</span>
          <span className="inline-block mr-[0.22em]">ao</span>
          <br />
          <span className="inline-block mr-[0.22em] italic font-normal text-brand-brown/70">Raciocínio</span>
          <span className="inline-block mr-[0.22em] italic font-normal text-brand-brown/70">Clínico</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-brown/80 font-light mt-4 leading-snug max-w-xl mx-auto">
          Para psicólogos que <strong className="font-semibold text-brand-brown">sabem a teoria</strong>, mas{' '}
          <strong className="font-semibold text-brand-brown">travam na hora de atender</strong>.
        </p>
        <p className="text-base text-brand-gray mt-3 max-w-xl mx-auto leading-relaxed">
          Conduza seus atendimentos com segurança e saiba o que fazer em cada etapa do atendimento.
        </p>
        <div className="mt-7 flex justify-center">
          <CTAButton label="Quero aprender a conduzir sessões" />
        </div>
      </div>
    </section>
  );
}
