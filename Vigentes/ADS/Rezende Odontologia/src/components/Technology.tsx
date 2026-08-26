import { technologyItems } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Technology() {
  const heading = useReveal<HTMLDivElement>();

  return (
    <section
      id="tecnologia"
      className="bg-navy py-[clamp(5rem,9vw,9rem)] text-white px-[max(24px,calc((100%-1240px)/2))] max-md:px-4 max-md:py-[4.5rem]"
    >
      <div ref={heading.ref} className={`${heading.className} max-w-[660px]`}>
        <p className="eyebrow !text-cyan-soft">
          03 <span className="px-[.28rem] text-cyan-brand">/</span> TECNOLOGIA
        </p>
        <h2 className="heading-xl mb-4 mt-[.45rem]">Mais informação para planejar. Mais precisão para decidir.</h2>
        <p className="max-w-[590px] text-[rgba(229,247,250,.72)]">
          Recursos digitais apoiam a avaliação e ajudam a tornar cada conversa mais clara.
        </p>
      </div>

      <div className="mt-[clamp(3rem,6vw,6rem)] grid gap-[clamp(2rem,7vw,7rem)] max-md:mt-12 max-md:gap-[3.6rem]">
        {technologyItems.map((item, index) => (
          <article
            key={item.title}
            className="grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] items-center gap-[clamp(2rem,10vw,10rem)] max-md:grid-cols-1 max-md:gap-5"
          >
            <div
              className={`max-w-[420px] justify-self-center max-md:justify-self-start ${
                index % 2 === 1 ? 'order-2 max-md:order-none' : ''
              }`}
            >
              <p className="eyebrow !text-cyan-soft">{item.label}</p>
              <h3 className="heading-lg mt-[.65rem] text-white">{item.title}</h3>
              <p className="mt-4 text-[rgba(229,247,250,.74)]">{item.description}</p>
            </div>

            <figure
              className={`relative m-0 grid min-h-[340px] place-items-center overflow-hidden rounded-panel border border-[rgba(132,221,239,.24)] max-md:min-h-[245px] max-md:rounded-card ${
                index % 2 === 1 ? 'order-1 max-md:order-none' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}
