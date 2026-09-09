import { useEffect, useState } from "react";
import { Camera, Clock3, Menu, MessageCircle, X } from "lucide-react";
import { brand, contact, navigation, whatsappUrl } from "../data/siteData";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="header-note">
        <div className="container header-note__inner">
          <span>
            <Clock3 size={14} aria-hidden="true" /> Atendimento das {contact.hours}
          </span>
          <span>{contact.city}</span>
        </div>
      </div>

      <div className="container header-main">
        <a className="brand" href="#inicio" aria-label="FRT Veículos - início">
          <img src={brand.logo} alt="" width="54" height="54" />
          <span>
            <strong>FRT</strong>
            <small>Veículos</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="icon-link desktop-only"
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da FRT Veículos"
          >
            <Camera size={19} aria-hidden="true" />
          </a>
          <a className="button button--compact desktop-only" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            Falar com a FRT
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${menuOpen ? "is-open" : ""}`} id="mobile-menu">
        <nav aria-label="Navegação para celular">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={19} aria-hidden="true" />
          Conversar no WhatsApp
        </a>
      </div>
      {menuOpen && (
        <button className="menu-backdrop" type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}

export default Header;
