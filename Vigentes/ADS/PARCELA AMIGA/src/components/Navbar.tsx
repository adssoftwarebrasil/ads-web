import { useEffect, useState } from 'react';
import { IconArrow } from './icons';

type Props = { onSimulate: () => void };

export default function Navbar({ onSimulate }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar" style={scrolled ? { boxShadow: '0 4px 24px rgba(11,40,89,.14)' } : {}}>
      <div className="navbar-inner">
        <a className="logo" href="#">
          <div className="logo-icon">
            <img src="/logo-parcela-amiga.webp" alt="Logo Parcela Amiga" width="80" height="80" />
          </div>
        </a>
        <div className="nav-links">
          <a className="nav-link active" href="#">
            Home
          </a>
          <a className="nav-link" href="#simulador">
            Simulador
          </a>
          <a className="nav-link" href="#como-funciona">
            Como Funciona
          </a>
          <a className="nav-link" href="#contato">
            Contato
          </a>
        </div>
        <button className="nav-cta" onClick={onSimulate}>
          Fazer Simulação <IconArrow />
        </button>
      </div>
    </nav>
  );
}
