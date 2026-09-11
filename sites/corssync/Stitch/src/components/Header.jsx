import { useEffect, useState } from "react";
import Brand from "./Brand";
import Icon from "./Icon";
import {
  company,
  navigation,
  primaryWhatsappLink,
} from "../data/siteData";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand />

        <nav
          aria-label="Navegação principal"
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        >
          <div className="site-nav__mobile-top">
            <Brand compact />
            <button
              aria-label="Fechar menu"
              className="icon-button"
              onClick={() => setMenuOpen(false)}
              type="button"
            >
              <Icon name="close" />
            </button>
          </div>
          <div className="site-nav__links">
            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="site-nav__mobile-contact">
            <span>Fale com a Kadima</span>
            <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
          </div>
        </nav>

        {menuOpen && (
          <button
            aria-label="Fechar menu"
            className="menu-backdrop"
            onClick={() => setMenuOpen(false)}
            type="button"
          />
        )}

        <div className="site-header__actions">
          <a
            className="header-phone"
            href={`tel:${company.phoneHref}`}
            aria-label={`Ligar para ${company.phoneDisplay}`}
          >
            <Icon name="phone" size={18} />
            <span>{company.phoneDisplay}</span>
          </a>
          <a
            className="button button--small button--yellow"
            href={primaryWhatsappLink}
            rel="noreferrer"
            target="_blank"
          >
            Pedir orçamento
            <Icon name="arrowRight" size={18} />
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen(true)}
            type="button"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

