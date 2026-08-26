import { resultImages } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import MarqueeGallery from './ui/MarqueeGallery';

export default function Results() {
  const heading = useReveal<HTMLDivElement>();

  return (
    <section
      id="resultados"
      className="bg-[radial-gradient(circle_at_50%_-18%,rgba(44,132,177,.34),transparent_40%),linear-gradient(145deg,#0b2947_0%,#071b32_58%,#04111f_100%)] py-[clamp(5rem,9vw,9rem)] text-white px-[max(24px,calc((100%-1240px)/2))] max-md:px-4 max-md:py-[4.5rem]"
    >
      <div className="mx-auto w-[min(100%,1240px)]">
        <div
          ref={heading.ref}
          className={`${heading.className} mx-auto mb-[clamp(2.4rem,5vw,4rem)] max-w-[720px] text-center max-md:mb-9`}
        >
          <p className="eyebrow !text-cyan-soft">
            05 <span className="px-[.28rem] text-cyan-brand">/</span> RESULTADOS
          </p>
          <h2 className="heading-xl mb-4 mt-[.45rem]">Planejamento que pode ser visto nos detalhes.</h2>
          <p className="mx-auto max-w-[590px] text-[rgba(229,247,250,.78)]">
            Tratamentos são conduzidos de forma individual, respeitando necessidades e condições de cada pessoa.
          </p>
        </div>

        <MarqueeGallery
          images={resultImages}
          duration={37}
          gap={18}
          label="Faixa automática de casos clínicos"
          cardClassName="basis-[clamp(188px,20vw,292px)] !rounded-[18px] border border-cyan-soft/20 !bg-white/5 shadow-[0_16px_32px_rgba(0,0,0,.18)] max-md:basis-[clamp(172px,63vw,252px)]"
          imgClassName="aspect-[4/5] !object-contain bg-[#10283e]"
        />

        <p className="mx-auto mt-[1.65rem] max-w-[670px] text-center text-[.78rem] text-[rgba(229,247,250,.66)]">
          Cada caso possui indicação, planejamento e evolução individual. Os resultados podem variar conforme as
          condições de cada paciente.
        </p>
      </div>
    </section>
  );
}
