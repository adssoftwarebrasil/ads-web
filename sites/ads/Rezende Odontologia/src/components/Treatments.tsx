import { ArrowRight } from 'lucide-react';
import { treatments } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import WhatsAppLink from './ui/WhatsAppLink';

export default function Treatments() {
  const heading = useReveal<HTMLDivElement>();

  return (
    <section id="tratamentos" className="section-shell py-[clamp(5rem,9vw,9rem)] max-md:py-[4.5rem]">
      <div ref={heading.ref} className={`${heading.className} mb-[2.6rem] max-w-[730px] max-md:mb-8`}>
        <p className="eyebrow">
          02 <span className="px-[.28rem] text-cyan-brand">/</span> TRATAMENTOS
        </p>
        <h2 className="heading-xl mb-4 mt-[.45rem]">
          Soluções planejadas para saúde, função e estética do seu sorriso.
        </h2>
        <p className="max-w-[590px] text-ink-muted">
          Cada indicação começa por uma avaliação clínica cuidadosa e um plano individual.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[18px] max-lg:gap-[14px] min-[761px]:max-[900px]:grid-cols-2 max-md:grid-cols-1">
        {treatments.map((treatment) => (
          <article
            key={treatment.number}
            className="group flex min-w-0 flex-col overflow-hidden rounded-card border border-[var(--line)] bg-white shadow-card transition-all duration-300 hover:-translate-y-[3px] hover:shadow-soft max-md:grid max-md:grid-cols-[minmax(125px,.85fr)_minmax(0,1.15fr)]"
          >
            <figure className="relative m-0 aspect-[4/3] overflow-hidden bg-[#e9edf0] max-md:aspect-auto max-md:h-full">
              <img
                src={treatment.image}
                alt={treatment.alt}
                loading="lazy"
                decoding="async"
                className={`h-full w-full transition-transform duration-[380ms] group-hover:scale-[1.025] ${
                  treatment.contain ? 'object-contain' : 'object-cover'
                }`}
              />
            </figure>

            <div className="flex flex-1 flex-col items-start p-[1.25rem_1.25rem_1.35rem] max-lg:p-[1.08rem] max-md:min-h-[235px] max-md:p-[1.05rem]">
              <span className="text-[.67rem] font-extrabold tracking-[.12em] text-blue-brand">{treatment.number}</span>
              <h3 className="mb-[.55rem] mt-[.45rem] font-display text-[1.65rem] font-light leading-[1.08] tracking-[-.035em] max-md:text-[1.38rem]">
                {treatment.title}
              </h3>
              <p className="m-0 text-[.88rem] text-ink-muted max-md:text-[.81rem]">{treatment.description}</p>

              {treatment.href ? (
                <a
                  href={treatment.href}
                  className="group/cta mt-auto inline-flex items-center gap-[.45rem] pt-[1.35rem] text-[.78rem] font-extrabold text-blue-brand max-md:pt-3 max-md:text-[.71rem]"
                >
                  {treatment.cta}
                  <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover/cta:translate-x-1" />
                </a>
              ) : (
                <WhatsAppLink
                  section="tratamentos"
                  position="card"
                  service={treatment.service}
                  className="group/cta mt-auto inline-flex items-center gap-[.45rem] pt-[1.35rem] text-[.78rem] font-extrabold text-blue-brand max-md:pt-3 max-md:text-[.71rem]"
                >
                  {treatment.cta}
                  <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover/cta:translate-x-1" />
                </WhatsAppLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
