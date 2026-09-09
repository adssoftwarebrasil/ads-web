import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import Brand from "./Brand";
import { whatsappHref } from "../siteData";

const navigation = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "TJ Mix recomenda", href: "#recomenda" },
  { label: "Sua obra", href: "#sua-obra" },
  { label: "Loja", href: "#loja" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#inicio" aria-label="TJ Mix, início">
          <Brand />
        </a>

        <nav
          id="menu-principal"
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--gold site-nav__cta"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Pedir orçamento
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && (
        <button
          className="menu-backdrop"
          type="button"
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
