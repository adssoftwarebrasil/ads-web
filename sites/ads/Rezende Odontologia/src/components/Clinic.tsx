import { useReveal } from '../hooks/useReveal';

const photos = [
  {
    src: '/media/consultorio-rezende-odontologia.webp',
    alt: 'Consultório da Rezende Odontologia com cadeira odontológica e equipamentos',
    caption: 'Consultório',
    large: true,
  },
  {
    src: '/media/recepcao-rezende-odontologia.webp',
    alt: 'Recepção da Rezende Odontologia',
    caption: 'Recepção',
    large: false,
  },
];

export default function Clinic() {
  const heading = useReveal<HTMLDivElement>();

  return (
    <section id="clinica" className="section-shell py-[clamp(5rem,9vw,9rem)] max-md:py-[4.5rem]">
      <div ref={heading.ref} className={`${heading.className} mb-[2.6rem] max-w-[640px]`}>
        <p className="eyebrow">
          06 <span className="px-[.28rem] text-cyan-brand">/</span> CLÍNICA
        </p>
        <h2 className="heading-xl mb-4 mt-[.45rem]">Uma estrutura preparada para receber você.</h2>
        <p className="max-w-[590px] text-ink-muted">
          Da recepção ao consultório, cada espaço foi pensado para proporcionar clareza e tranquilidade.
        </p>
      </div>

      <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(260px,.75fr)] items-stretch gap-[18px] max-md:grid-cols-[1.1fr_.9fr] max-md:gap-[10px]">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className={`relative m-0 overflow-hidden rounded-panel bg-[#dbe3e5] max-lg:min-h-[480px] max-md:min-h-[320px] max-md:rounded-card ${
              photo.large ? 'min-h-[610px]' : 'min-h-[510px]'
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-[rgba(7,27,50,.73)] px-[.65rem] py-[.4rem] text-[.62rem] font-extrabold uppercase tracking-[.13em] text-white max-md:bottom-[.65rem] max-md:left-[.65rem] max-md:text-[.53rem]">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
