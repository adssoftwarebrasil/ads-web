import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import logo from "../assets/logo-renova.png";
import { whatsappUrl } from "../data/content";

const navigation = [
  { label: "Especialidades", href: "#especialidades" },
  { label: "A clínica", href: "#estrutura" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Renova Clínica Integrada — início">
          <img src={logo} alt="Renova Clínica Integrada" />
        </a>

        <nav
          id="primary-navigation"
          className={`main-navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="button button-dark navigation-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={17} aria-hidden="true" />
            Agendar avaliação
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
