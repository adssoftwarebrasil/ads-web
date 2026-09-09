import { useEffect, useRef, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import logo from "../assets/images/logo-wilson.webp";
import WhatsAppLink from "./WhatsAppLink.jsx";

const links = [
  { href: "#catalogo", text: "Nosso catálogo" },
  { href: "#sob-medida", text: "Sob medida" },
  { href: "#reformas", text: "Reformas" },
  { href: "#contato", text: "Fale com a gente" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  useEffect(() => {
    function onEscape(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    const desktop = window.matchMedia("(min-width: 901px)");
    const onDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onEscape);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Um novo olhar para o seu conforto.</span>
          <span>
            <MapPin size={13} /> Anápolis, Pirenópolis e região
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#inicio"
            className="brand"
            aria-label="Wilson Estofados — início"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={logo}
              width="86"
              height="86"
              alt="Wilson Estofados — fabricação sob medida"
            />
          </a>
          <nav
            className={`navigation ${menuOpen ? "is-open" : ""}`}
            aria-label="Navegação principal"
            id="main-navigation"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <WhatsAppLink className="button button-primary mobile-nav-contact">
              Pedir orçamento
            </WhatsAppLink>
          </nav>
          <WhatsAppLink className="button button-primary header-contact">
            Pedir orçamento
          </WhatsAppLink>
          <button
            ref={toggleRef}
            className="menu-toggle icon-button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {menuOpen && (
        <button
          className="menu-backdrop"
          aria-label="Fechar navegação"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
