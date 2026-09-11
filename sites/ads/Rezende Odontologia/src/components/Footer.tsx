import { track } from '../lib/analytics';
import { SITE } from '../lib/site';
import WhatsAppLink from './ui/WhatsAppLink';

export default function Footer() {
  return (
    <footer className="section-shell grid grid-cols-[minmax(0,1.25fr)_minmax(180px,.75fr)_minmax(220px,.9fr)] gap-8 pb-8 pt-12 text-ink-muted max-md:grid-cols-2 max-md:gap-[2rem_1.2rem] max-md:pb-6 max-md:pt-[2.6rem]">
      <div className="max-md:col-span-2">
        <img
          src="/media/logo-rezende-odontologia.webp"
          width={180}
          height={114}
          alt="Rezende Odontologia"
          loading="lazy"
          decoding="async"
          className="h-[86px] w-[86px] object-contain"
        />
        <p className="mt-[.8rem] max-w-[270px] text-[.86rem]">
          Tecnologia, planejamento e proximidade para cuidar do seu sorriso.
        </p>
      </div>

      <div className="min-w-0">
        <h2 className="mb-3 font-display text-[.72rem] font-light uppercase tracking-[.12em] text-ink">Contato</h2>
        <WhatsAppLink section="footer" position="contact" className="block break-words py-[.3rem] text-[.84rem] hover:text-blue-brand">
          {SITE.phoneLabel}
        </WhatsAppLink>
        <a href={`mailto:${SITE.email}`} className="block break-words py-[.3rem] text-[.84rem] hover:text-blue-brand">
          {SITE.email}
        </a>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('instagram_click')}
          className="block break-words py-[.3rem] text-[.84rem] hover:text-blue-brand"
        >
          {SITE.instagramHandle} ↗
        </a>
      </div>

      <div className="min-w-0">
        <h2 className="mb-3 font-display text-[.72rem] font-light uppercase tracking-[.12em] text-ink">Localização</h2>
        <p className="mb-[.85rem] text-[.84rem]">
          {SITE.address.street}
          <br />
          {SITE.address.district} – {SITE.address.city}/{SITE.address.state}
          <br />
          CEP {SITE.address.zip}
        </p>
        <p className="mb-[.85rem] text-[.84rem]">
          {SITE.doctor.name}
          <br />
          {SITE.doctor.cro}
        </p>
        <a
          href={SITE.maps}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('directions_click')}
          className="block py-[.3rem] text-[.84rem] hover:text-blue-brand"
        >
          Como chegar ↗
        </a>
      </div>

      <div className="col-span-full flex justify-between gap-4 border-t border-[var(--line)] pt-5 text-[.75rem] max-md:flex-col max-md:items-start">
        <span>© {new Date().getFullYear()} Rezende Odontologia</span>
        <a href="#topo" className="hover:text-blue-brand">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
