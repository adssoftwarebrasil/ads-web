import { ArrowUpRight } from 'lucide-react';
import { routineImages } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import { SITE } from '../lib/site';
import MarqueeGallery from './ui/MarqueeGallery';
import WhatsAppLink from './ui/WhatsAppLink';

export default function Doctor() {
  const copy = useReveal<HTMLDivElement>();

  return (
    <section id="dr-pedro" className="section-shell py-[clamp(5rem,9vw,9rem)] max-md:py-[4.5rem]">
      <div className="grid grid-cols-2 items-center gap-[clamp(2rem,8vw,8rem)] max-md:grid-cols-1 max-md:gap-[1.6rem]">
        <figure className="m-0 aspect-[1/1.04] overflow-hidden rounded-panel bg-surface-warm max-md:aspect-auto max-md:max-h-[390px]">
          <img
            src="/media/dr-pedro-rezende-retrato.webp"
            alt="Retrato profissional do Dr. Pedro Rezende Filho"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </figure>

        <div ref={copy.ref} className={`${copy.className} max-w-[500px]`}>
          <p className="eyebrow">
            04 <span className="px-[.28rem] text-cyan-brand">/</span> PROFISSIONAL
          </p>
          <h2 className="heading-lg mb-[.45rem] mt-2 max-md:text-[2.6rem]">{SITE.doctor.name}</h2>
          <p className="mb-5 text-[.82rem] font-bold text-blue-brand">
            {SITE.doctor.role} <span className="px-[.2rem] text-cyan-brand">•</span> {SITE.doctor.cro}
          </p>
          <p className="text-ink-muted">
            Uma atuação guiada por escuta, avaliação clínica e planejamento individual. O cuidado próximo se une à
            atualização técnica para que cada paciente compreenda as possibilidades do seu tratamento.
          </p>
          <WhatsAppLink section="dr-pedro" position="primary" className="btn mt-[1.15rem]">
            Agendar uma avaliação
            <ArrowUpRight size={16} aria-hidden="true" />
          </WhatsAppLink>
        </div>
      </div>

      <div className="mt-[clamp(3rem,7vw,7rem)] grid grid-cols-[minmax(0,.72fr)_minmax(0,1.28fr)] items-center gap-[clamp(2rem,7vw,7rem)] border-t border-[var(--line)] pt-[clamp(3rem,6vw,6rem)] max-md:mt-16 max-md:grid-cols-1 max-md:gap-[1.6rem] max-md:pt-16">
        <div className="max-w-[400px] max-md:max-w-none">
          <p className="eyebrow">ROTINA CLÍNICA</p>
          <h3 className="heading-lg mt-3 max-md:text-[2rem]">O cuidado está nos detalhes de cada etapa.</h3>
        </div>

        <div className="rounded-panel border border-[rgba(7,27,50,.12)] bg-[linear-gradient(135deg,#eef7f7,#c9edf1)] p-3 shadow-[0_16px_34px_rgba(7,27,50,.08)] max-md:rounded-card max-md:p-[10px]">
          <MarqueeGallery
            images={routineImages}
            duration={27}
            label="Galeria automática da rotina clínica"
            cardClassName="basis-[clamp(152px,17.5vw,238px)] border border-[rgba(7,27,50,.08)] shadow-[0_10px_24px_rgba(7,27,50,.1)] max-md:basis-[clamp(145px,49vw,224px)]"
            imgClassName="aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}
