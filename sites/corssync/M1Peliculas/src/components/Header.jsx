import { useEffect, useRef, useState } from "react";
import { MapPin, Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, whatsappUrl } from "../data/business";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOnResize = () => {
      if (window.innerWidth > 800) setMenuOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    window.addEventListener("resize", closeOnResize);
    return () => {
      document.removeEventListener("keydown", onEscape);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>
            <MapPin size={12} aria-hidden="true" /> Pedra Branca, Palhoça / SC
          </span>
          <span>Mais cuidado. Mais conforto. Mais M1.</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#inicio"
            className="brand-link"
            aria-label="M1 Películas — início"
            onClick={() => setMenuOpen(false)}
          >
            <Logo />
          </a>
          <nav
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            id="main-navigation"
            aria-label="Navegação principal"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mobile-contact"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Solicitar orçamento <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </nav>
          <a
            className="header-contact"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="desktop-contact-label">
              Fale com um especialista
            </span>
            <span className="mobile-contact-label">Orçamento</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            ref={menuButton}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
