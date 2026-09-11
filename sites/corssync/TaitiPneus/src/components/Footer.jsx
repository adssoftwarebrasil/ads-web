import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { business, whatsappUrl } from '../data';
import Brand from './Brand';
import { WhatsAppIcon } from './Icons';

export default function Footer() {
  return (
    <>
      <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Brand inverse /><p>Confiança e qualidade.<br />Em cada quilômetro com você.</p></div><div className="footer-nav"><p className="footer-label">TAITI PNEUS</p><a href="#servicos">Nossos serviços</a><a href="#a-taiti">A Taiti</a><a href="#contato">Como chegar</a></div><div className="footer-emails"><p className="footer-label">FALE COM A GENTE</p><a className="footer-phone" href={`tel:+${business.phone}`}>{business.phoneDisplay} <ArrowUpRight size={17} /></a><details><summary>Contatos por e-mail</summary><div>{business.emails.map((email) => <a href={`mailto:${email}`} key={email}>{email}</a>)}</div></details></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Taiti Pneus Auto Center. Todos os direitos reservados.</span><a href="#inicio">De volta ao topo <ArrowUp size={14} /></a></div></div></footer>
      <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Taiti Pneus pelo WhatsApp"><WhatsAppIcon size={28} /><span className="floating-tooltip" aria-hidden="true">Vamos conversar?</span></a>
    </>
  );
}
