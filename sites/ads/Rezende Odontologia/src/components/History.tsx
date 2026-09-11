import { useRef, useState } from 'react';
import { historyChapters } from '../data/content';
import { useImageTrail } from '../hooks/useImageTrail';
import { useReveal } from '../hooks/useReveal';

export default function History() {
  const rootRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);
  const intro = useReveal<HTMLDivElement>();
  const [interacted, setInteracted] = useState(false);

  const { enabled } = useImageTrail({
    rootRef,
    layerRef,
    safeZoneSelector: '[data-safe-zone]',
    onFirstShow: () => setInteracted(true),
    getImages: ({ y }) => {
      // Usa o capítulo cujo centro vertical está mais próximo do cursor.
      let nearest = 0;
      let smallest = Number.POSITIVE_INFINITY;
      chapterRefs.current.forEach((element, index) => {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(y - (rect.top + rect.height / 2));
        if (distance < smallest) {
          smallest = distance;
          nearest = index;
        }
      });
      return historyChapters[nearest]?.images ?? [];
    },
  });

  return (
    <section
      ref={rootRef}
      id="historia"
      className="section-shell relative isolate pb-[clamp(2.5rem,4vw,4.5rem)] max-md:pb-12"
    >
      <div ref={layerRef} className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true" />

      <div className="relative z-[2]">
        <div
          ref={intro.ref}
          data-safe-zone
          className={`${intro.className} mb-[clamp(2.75rem,4.5vw,4.75rem)] max-w-[760px] max-md:mb-[2.7rem]`}
        >
          <p className="eyebrow">
            01 <span className="px-[.28rem] text-cyan-brand">/</span> NOSSA HISTÓRIA
          </p>
          <h2 className="heading-xl mb-4 mt-[.45rem]">Uma história construída em família.</h2>
          <p className="max-w-[670px] text-ink-muted">
            A trajetória da família Rezende na odontologia começou antes mesmo do marco que hoje reconhecemos na
            história da Rezende Odontologia. Ao longo do tempo, conhecimento, princípios profissionais e proximidade com
            os pacientes ajudaram a construir uma história que segue evoluindo.
          </p>
        </div>

        {enabled && !interacted && (
          <p
            aria-hidden="true"
            className="-mt-[1.4rem] mb-[clamp(2.6rem,4vw,4.4rem)] flex w-fit items-center gap-2 text-[.64rem] font-extrabold uppercase tracking-[.1em] text-[rgba(16,34,56,.58)]"
          >
            Explore os registros com o cursor <span className="text-[.95rem] text-blue-brand">→</span>
          </p>
        )}

        <div className="relative grid gap-[clamp(4.5rem,6.2vw,6.6rem)] max-[900px]:gap-[3.75rem] max-md:gap-[3.25rem]">
          <div
            aria-hidden="true"
            className="absolute bottom-20 left-1/2 top-[5.8rem] w-px -translate-x-1/2 bg-[linear-gradient(#176aab,rgba(23,106,171,.13)_28%,rgba(57,201,232,.1)_72%,transparent)] opacity-45 max-[900px]:hidden"
          />

          {historyChapters.map((chapter, index) => (
            <article
              key={chapter.key}
              ref={(element) => {
                chapterRefs.current[index] = element;
              }}
              className="relative grid min-h-[clamp(260px,21vw,330px)] grid-cols-2 items-center gap-[clamp(3rem,7vw,7.4rem)] max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:gap-5"
            >
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 z-[1] h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-cyan-brand shadow-[0_0_0_1px_rgba(23,106,171,.24)] max-[900px]:hidden"
              />
              <div
                data-safe-zone
                className={`w-[min(100%,540px)] max-[900px]:col-start-1 max-[900px]:max-w-none max-[900px]:justify-self-start ${
                  index % 2 === 1 ? 'col-start-2 justify-self-end' : 'col-start-1'
                }`}
              >
                <p className="eyebrow">{chapter.label}</p>
                {chapter.year && (
                  <p
                    aria-hidden="true"
                    className="mb-[.15rem] mt-3 font-display text-[clamp(4.1rem,7vw,7.3rem)] font-light leading-[.72] text-[rgba(23,106,171,.14)] max-md:mt-[.65rem] max-md:text-[clamp(3.8rem,17vw,4.8rem)]"
                  >
                    {chapter.year}
                  </p>
                )}
                <h3 className="heading-lg mb-[.9rem] mt-[.7rem] text-[clamp(2.15rem,3.15vw,3.4rem)] max-md:text-[clamp(2rem,8.7vw,2.55rem)]">
                  {chapter.title}
                </h3>
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-3 text-ink-muted last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p
          data-safe-zone
          className="mx-auto mt-[clamp(4rem,6.3vw,6.2rem)] max-w-[880px] text-center font-display text-[clamp(1.9rem,3.45vw,3.8rem)] font-light leading-[1.08] tracking-[-.045em] max-md:mt-[3.6rem] max-md:text-[2.02rem]"
        >
          Uma história construída em família, unindo experiência clínica, atualização técnica e atenção próxima a cada
          paciente.
        </p>
      </div>
    </section>
  );
}
