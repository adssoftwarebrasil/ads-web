import { useState } from 'react';
import useScrolled from '../hooks/useScrolled';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP = 'https://wa.me/5566996456124';

const LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__brand">
          <img src="/logo.png" alt="Aurora Odontologia" />
        </a>

        <ul className="navbar__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-wa navbar__cta">
          <WhatsAppIcon size={16} /> Agendar Consulta
        </a>

        <button
          className={`navbar__hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile${open ? ' open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="btn-wa"
          onClick={() => setOpen(false)}
        >
          <WhatsAppIcon size={16} /> Agendar Consulta
        </a>
      </div>
    </nav>
  );
}
