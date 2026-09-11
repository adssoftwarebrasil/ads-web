import { ArrowRight } from 'lucide-react';

export default function Positioning() {
  return (
    <section
      id="posicionamento"
      className="section-shell grid grid-cols-[.55fr_1.45fr_1fr] items-start gap-[clamp(1.5rem,4vw,5rem)] py-[clamp(5.5rem,10vw,10.5rem)] max-lg:grid-cols-[.42fr_1.25fr_.8fr] max-lg:gap-8 max-md:block max-md:py-20"
    >
      <p className="eyebrow">REZENDE ODONTOLOGIA</p>
      <h2 className="heading-xl -mt-1 max-w-[650px] max-md:mb-[1.2rem] max-md:mt-[.6rem]">
        Tradição que evolui com a odontologia.
      </h2>
      <div className="max-w-[330px] pt-[.65rem] max-md:max-w-none max-md:pt-0">
        <p className="mb-[1.3rem] text-ink-muted">
          Uma trajetória construída com cuidado, atualização técnica e atenção individual em cada etapa do tratamento.
        </p>
        <a
          href="#historia"
          className="group inline-flex items-center gap-2 text-[.86rem] font-extrabold text-blue-brand"
        >
          Conhecer nossa história
          <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
