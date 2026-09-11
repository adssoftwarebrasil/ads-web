import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { categorias, contato, whatsGeral } from '../data/site';
import { ChevronDown, Menu, Phone, WhatsApp, X } from './icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [aberto, setAberto] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha a gaveta ao trocar de página e trava a rolagem enquanto ela está aberta.
  useEffect(() => setAberto(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [aberto]);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberto(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aberto]);

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="shell">
          <Link className="brand" to="/" aria-label="CAMPMED — página inicial">
            <img
              src="/img/logo-campmed.png"
              alt="Cirúrgica CAMPMED Produtos Hospitalares"
              width={216}
              height={40}
            />
          </Link>

          <nav className="nav" aria-label="Navegação principal">
            <NavLink
              to="/"
              className="nav-link"
              data-active={pathname === '/' ? 'true' : undefined}
            >
              Início
            </NavLink>

            <div className="nav-drop">
              <NavLink
                to="/catalogo"
                className="nav-link"
                data-active={pathname.startsWith('/catalogo') ? 'true' : undefined}
              >
                Catálogo
                <ChevronDown size={15} style={{ marginLeft: 4, verticalAlign: -3 }} />
              </NavLink>
              <div className="nav-drop-panel">
                {categorias.map((c) => (
                  <Link key={c.slug} className="nav-drop-item" to={`/catalogo/${c.slug}`}>
                    {c.nome}
                    <span>{c.resumo}</span>
                  </Link>
                ))}
              </div>
            </div>

            <a className="nav-link" href="/#visitar">
              Contato
            </a>
          </nav>

          <a
            className="btn btn--wa header-cta"
            href={whatsGeral}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp size={18} />
            Falar com Especialista
          </a>

          <button
            className="burger"
            type="button"
            onClick={() => setAberto(true)}
            aria-label="Abrir menu"
            aria-expanded={aberto}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {aberto && (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            className="drawer-scrim"
            type="button"
            onClick={() => setAberto(false)}
            aria-label="Fechar menu"
          />
          <div className="drawer-panel">
            <div className="drawer-head">
              <img
                src="/img/logo-campmed.png"
                alt="Cirúrgica CAMPMED"
                width={184}
                height={34}
              />
              <button
                className="drawer-close"
                type="button"
                onClick={() => setAberto(false)}
                aria-label="Fechar menu"
              >
                <X size={20} />
              </button>
            </div>

            <Link className="drawer-link" to="/">
              Início
            </Link>
            <Link className="drawer-link" to="/catalogo">
              Catálogo completo
            </Link>

            <p className="drawer-label">Categorias</p>
            {categorias.map((c) => (
              <Link key={c.slug} className="drawer-sub" to={`/catalogo/${c.slug}`}>
                {c.nome}
              </Link>
            ))}

            <a className="drawer-link" href="/#visitar" onClick={() => setAberto(false)}>
              Contato e localização
            </a>

            <div className="drawer-foot">
              <a
                className="btn btn--wa btn--block"
                href={whatsGeral}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp size={18} />
                Falar com Especialista
              </a>
              <a className="btn btn--outline btn--block" href={contato.telefoneFixoLink}>
                <Phone size={17} />
                {contato.telefoneFixo}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
