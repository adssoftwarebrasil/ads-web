import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Clock3, MapPin, Menu, X } from 'lucide-react';
import { business, mapsUrl, whatsappUrl } from '../data';
import Brand from './Brand';
import { WhatsAppIcon } from './Icons';

const navigation = [
  { label: 'Nossos serviços', href: '#servicos' },
  { label: 'A Taiti', href: '#a-taiti' },
  { label: 'Como chegar', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 901px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener('keydown', onEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', onEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={13} /> Baú, Cuiabá – MT <span className="utility-address"> · Av. Historiador Rubens de Mendonça, 280</span></a>
          <span><Clock3 size={13} /> Atendimento: {business.hours}</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav id="main-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <a className="button button--dark header-contact" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}><WhatsAppIcon size={19} /> Fale com a gente <ArrowUpRight size={17} /></a>
          </nav>
          <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>
    </>
  );
}
