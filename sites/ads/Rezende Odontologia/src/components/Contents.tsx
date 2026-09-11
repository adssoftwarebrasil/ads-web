import { contentSlides } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import Carousel from './ui/Carousel';

export default function Contents() {
  const heading = useReveal<HTMLDivElement>();

  const slides = contentSlides.map((slide) => (
    <article key={slide.image} className="overflow-hidden rounded-card border border-white/15 bg-[#eef2f3]">
      <img src={slide.image} alt={slide.alt} loading="lazy" decoding="async" className="h-auto w-full object-contain" />
    </article>
  ));

  return (
    <section
      id="conteudos"
      className="blueprint relative mx-auto my-[clamp(1rem,4vw,3rem)] mb-[clamp(4rem,8vw,8rem)] w-[min(1360px,calc(100%-48px))] overflow-hidden rounded-[32px] px-[clamp(1.25rem,6vw,6rem)] py-[clamp(4rem,7vw,7rem)] text-white max-md:mx-auto max-md:my-0 max-md:mb-[4.5rem] max-md:w-[calc(100%-20px)] max-md:rounded-[22px] max-md:px-4 max-md:py-[4.5rem]"
    >
      <div ref={heading.ref} className={`${heading.className} max-w-[580px]`}>
        <p className="eyebrow !text-cyan-soft">
          07 <span className="px-[.28rem] text-cyan-brand">/</span> INFORMAÇÃO
        </p>
        <h2 className="heading-xl mb-4 mt-[.45rem]">Informação também faz parte do cuidado.</h2>
        <p className="text-[rgba(229,247,250,.74)]">Conteúdos para ajudar você a cuidar melhor do seu sorriso.</p>
      </div>

      <div className="mt-[2.65rem] max-md:mt-8">
        <Carousel items={slides} name="Conteúdos educativos" perView={3} interval={4800} />
      </div>
    </section>
  );
}
