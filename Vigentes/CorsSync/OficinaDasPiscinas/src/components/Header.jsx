import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "./Brand";
import { contact } from "../data/siteData";

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.classList.toggle("menu-is-open", menuOpen);
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <Brand light />

        <nav
          id="main-navigation"
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Navegação principal"
        >
          <div className="site-nav__top">
            <Brand />
            <button
              className="icon-button"
              type="button"
              onClick={closeMenu}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="site-nav__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="button button--primary site-nav__mobile-cta"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Pedir avaliação
            <ArrowUpRight size={18} />
          </a>
        </nav>

        <a
          className="button button--glass site-header__cta"
          href={contact.whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Pedir avaliação
          <ArrowUpRight size={17} />
        </a>

        <button
          className="icon-button menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}
