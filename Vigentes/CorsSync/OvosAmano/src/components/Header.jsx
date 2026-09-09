import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Nossa origem", href: "#origem" },
  { label: "Produtos", href: "#produtos" },
  { label: "Qualidade", href: "#qualidade" },
  { label: "Atendimento", href: "#atendimento" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#inicio" aria-label="Ovos Amano — início">
          <Logo compact />
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="button button--small" href="#encontre" onClick={() => setMenuOpen(false)}>
            Ribeirão Preto
          </a>
        </nav>
      </div>
    </header>
  );
}
