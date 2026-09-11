import { ArrowUpRight, MapPin } from 'lucide-react';
import { useInViewport } from '../hooks/useInViewport';
import { useReveal } from '../hooks/useReveal';
import { track } from '../lib/analytics';
import { SITE } from '../lib/site';

export default function Location() {
  const copy = useReveal<HTMLDivElement>();
  // O iframe do Google Maps só é montado ao se aproximar da viewport: evita
  // baixar ~1 MB de scripts de terceiros no carregamento inicial.
  const { ref: mapRef, inView } = useInViewport<HTMLDivElement>({ once: true, rootMargin: '300px' });

  return (
    <section
      id="localizacao"
      className="section-shell grid grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] items-center gap-[clamp(2rem,7vw,7rem)] py-[clamp(5rem,9vw,9rem)] max-md:grid-cols-1 max-md:gap-8 max-md:py-[4.5rem]"
    >
      <div
        ref={mapRef}
        className="relative min-h-[440px] overflow-hidden rounded-panel bg-[#dfe7e8] max-md:min-h-[300px]"
      >
        {inView ? (
          <iframe
            title="Mapa da Rezende Odontologia em Ipatinga"
            src={SITE.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[440px] w-full border-0 max-md:min-h-[300px]"
          />
        ) : (
          <div className="grid h-full min-h-[440px] place-items-center text-ink-muted max-md:min-h-[300px]">
            <MapPin size={28} aria-hidden="true" />
          </div>
        )}
        <a
          href={SITE.maps}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('directions_click')}
          className="absolute bottom-4 right-4 rounded-full bg-[rgba(7,27,50,.88)] px-[.7rem] py-[.53rem] text-[.7rem] font-extrabold text-white"
        >
          Abrir no Google Maps ↗
        </a>
      </div>

      <div ref={copy.ref} className={`${copy.className} max-w-[470px]`}>
        <p className="eyebrow">LOCALIZAÇÃO</p>
        <h2 className="heading-xl mb-4 mt-[.45rem]">Rezende Odontologia em Ipatinga</h2>
        <p className="text-ink-muted">
          Estamos em Ipatinga/MG, com estrutura preparada para receber pacientes que buscam atendimento odontológico,
          implantes, próteses e reabilitação oral.
        </p>
        <address className="my-6 not-italic font-bold leading-[1.65]">
          {SITE.address.street}
          <br />
          {SITE.address.district} – {SITE.address.city}/{SITE.address.state}
          <br />
          CEP {SITE.address.zip}
        </address>
        <div className="flex flex-wrap items-center gap-4 max-md:grid max-md:justify-items-start">
          <a
            href={SITE.maps}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('directions_click')}
            className="btn max-md:w-full"
          >
            Traçar rota no Google Maps
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            href={SITE.maps}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('google_profile_click')}
            className="inline-flex items-center gap-2 text-[.86rem] font-extrabold text-blue-brand"
          >
            Ver perfil no Google
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
