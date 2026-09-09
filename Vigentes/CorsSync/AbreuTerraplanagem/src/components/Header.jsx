import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import logo from "../assets/images/logo-abreu.png";
import { navigation, whatsappUrl } from "../data/siteData";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <a className="brand" href="#inicio" aria-label="Abreu Terraplenagem — início">
          <span className="brand__plate">
            <img src={logo} alt="Abreu Terraplenagem" />
          </span>
        </a>

        <nav className={`nav ${isOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <div className="nav__mobile-head">
            <span>Menu</span>
            <button type="button" onClick={closeMenu} aria-label="Fechar menu">
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--yellow nav__cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Pedir orçamento
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <Menu size={26} aria-hidden="true" />
        </button>
      </div>
      {isOpen && <button className="nav-backdrop" type="button" onClick={closeMenu} aria-label="Fechar menu" />}
    </header>
  );
}

export default Header;
