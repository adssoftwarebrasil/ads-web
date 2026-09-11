import { useEffect, useState } from "react";
import logo from "../assets/images/logo-portas-de-aco-brasil.jpg";
import { contact } from "../data/contact";
import Icon from "./Icon";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#inicio" aria-label="Portas de Aço Brasil Pará — início">
          <img src={logo} alt="Portas de Aço Brasil" />
          <span>Pará</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <Icon name={isOpen ? "close" : "menu"} />
        </button>

        <nav
          className={`site-nav ${isOpen ? "site-nav--open" : ""}`}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          <a href="#solucoes" onClick={closeMenu}>Soluções</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#empresa" onClick={closeMenu}>A empresa</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <div className="site-nav__actions">
            <a
              className="button button--header"
              href={contact.instagramHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <Icon name="instagram" size={18} />
              Instagram
            </a>
            <a
              className="button button--header button--header-whatsapp"
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <Icon name="whatsapp" size={18} />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
